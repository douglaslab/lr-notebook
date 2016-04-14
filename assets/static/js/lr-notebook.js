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

function createProject(path, projectname) {
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

function createFolder(path, foldername) {
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

function createEntry(path, projectdate) {
    $.ajax({
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        processData: false,
        url: "/admin/api/newrecord",
        data: JSON.stringify({"id":projectdate,
                              "path":path,
                              "data":{"_model":"entry",
                                      "date":projectdate}})
    });
    location.reload();
}
