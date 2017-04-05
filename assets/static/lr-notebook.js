/*! lr-notebook License

Copyright (c) 2016, Regents of the University of California
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of University of California nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

// Lektor API - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function createProject(path, projectname) {
  if (projectname) {
    $.ajax({
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      url: "/admin/api/newrecord",
      data: JSON.stringify({"id":projectname,
                            "path":path,
                            "data":{"name":projectname,
                                    "date":new Date().toISOString().substring(0, 10)}})
    });
    location.reload();
  }
}

function createFolder(path, foldername) {
  if (foldername) {
    $.ajax({
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      url: "/admin/api/newrecord",
      data: JSON.stringify({"id":foldername,
                            "path":path,
                            "data":{"_model":"folder",
                                    "date":new Date().toISOString().substring(0, 10),
                                    "name":foldername}})
    });
    location.reload();
  }
}

function createEntry(path, projectdate, projectdesc="Untitled") {
  if (projectdate) {
    var entrypath = path + '/' + projectdate;
    $.ajax({
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      url: "/admin/api/newrecord",
      data: JSON.stringify({"id":projectdate,
                            "path":path,
                            "data":{"_model":"entry",
                                    "date":projectdate}}),
      success: function(created) {
        // console.log('createEntry1', created);
        $.ajax({
          type: 'PUT',
          dataType: 'json',
          contentType: 'application/json',
          processData: false,
          url: "/admin/api/rawrecord",
          data: JSON.stringify({"path":created.path,
                                "alt":"_primary",
                                "data":{"description":projectdesc}}),
          success: function(editdesc) {
            // console.log('createEntry2', editdesc);
            $.ajax({
              type: 'PUT',
              dataType: 'json',
              contentType: 'application/json',
              processData: false,
              url: "/admin/api/rawrecord",
              data: JSON.stringify({"path":editdesc.path,
                                "alt":"_primary",
                                "data":{"body":"\n## Placeholder Text\n"}}),
              success: function(okdone) {
                // console.log('createEntry3', okdone);
                location.reload();
              }
            });
          }
        });
      }
    });
  }
}

function insertIntoBodyBefore(path, matchString, insertString) {
  // get the body string
  $.ajax({
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    url: "/admin/api/rawrecord",
    data: 'path=' + encodeURIComponent(path),
    success: function(data) {
      // console.log('The page has been successfully loaded');
      // console.log(data.data.body);
      oldBody = data.data.body;
      newBody = oldBody.replace(matchString, insertString);
      // console.log(newBody);

      // edit the raw record
      $.ajax({
        type: 'PUT',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        url: "/admin/api/rawrecord",
        data: JSON.stringify({"path":path,
                              "alt":"_primary",
                              "data":{"body":newBody}}),
        success: function(editdata) {
          location.reload();
        }
      });

      },
      error: function() {
       console.log('An error occurred');
      }
  });
}

// MISC FORM VALIDATION  - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function validate(formname, submitname, warnname) {
  var form_el = document.id(formname);
  var submit_el = document.id(submitname);
  var warn_el = document.id(warnname);
  if (form_el && submit_el && warn_el) {
    if (form_el.checkValidity()) {
      submit_el.setStyle('visibility', 'visible');
      warn_el.setStyle('visibility', 'hidden');
    } else {
      warn_el.setStyle('visibility', 'visible');
      submit_el.setStyle('visibility', 'hidden');
    }
  }
}

// STYLE FIXES - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
window.addEvent('domready', function() {
  $$('#lektor-edit-link').setStyle('color', '#cccccc')
});

/* * * * * * * * * * * * * * * * EXPERIMENTAL * * * * * * * * * * * * * * * * */

// DRAG & DROP PAGE EDITING - - - - - - - - - - - - - - - - - - - - - - - - - - 
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    $$('div.droparea').setStyle('background-color','#cccccc');
}

function dragend(ev) {
    $$('div.droparea').setStyle('background-color','#f6f6f6');
}

imgTemplate = `<div class="right">
  <a href="%s">
    <img class="thumb" src="%s">
  </a><br>
</div>`

function drop(ev, path) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/uri-list").split("\n")[0];
    var matchString = ev.target.getElementById('targetString').get('html');
    var imgPath = "/" + data.split("/").slice(3).join('/');
    var newString = sprintf(imgTemplate, imgPath, imgPath) + '\n\n' + matchString;
    insertIntoBodyBefore(path, matchString, newString)
    $$('div.droparea').setStyle('background-color','none');
}

function doDrop(event) {
    var lines = event.dataTransfer.getData("text/uri-list").split("\n");
    for (let line of lines) {
        if (line.startsWith("#"))
            continue;
        let link = document.createElement("a");
    link.href = line;
    link.textContent = line;
    event.target.appendChild(link);
    }
}

function dragstart_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dropEffect = "move";
}

function dragover_handler(ev) {
    ev.preventDefault();
    ev.target
    ev.dataTransfer.dropEffect = "move";
}

