﻿$(document).ready(function () {
    const blogId = localStorage.getItem('blogId');

    var $blogForm = $('#blogForm')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Blogs/GetBlog?blogId=${blogId}`,
        success: function (data) {

            $blogForm.empty()

            $blogForm.append(
                `
                        <input type="hidden" id="blogId" value="${data.data.id}" class="form-control">

                     <div class="row mb-4">
                                <label class="col-md-3 form-label">Az Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azHeader" value="${data.data.azTitle}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Ru Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="ruHeader" value="${data.data.ruTitle}" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">En Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="enHeader" value="${data.data.enTitle}" class="form-control">
                                </div>
                            </div>

                            <!-- Row -->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Az Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="azDescription"  name="example">${data.data.azDescription}</textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Ru Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content2" id="ruDescription"  name="example">${data.data.ruDescription}</textarea>
                                </div>
                            </div> <div class="row">
                                <label class="col-md-3 form-label mb-4">En Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content3" id="enDescription"  name="example">${data.data.enDescription}</textarea>
                                </div>
                            </div>
                            <!--Row-->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">About Upload :</label>
                                <div class="col-md-9">
                                    <input id="files" type="file" name="files" onchange="document.getElementById('output').src = window.URL.createObjectURL(this.files[0])"  accept=".jpg, .png, image/jpeg, image/png">
                                                <img id="output" src="https://api.instudy.net/${data.data.blogFiles[0]?.path}" width="100" height="100">

                                </div>
                            </div>
                        
                        `
            )
            tinymce.init({
                selector: ".content",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content2",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content3",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });


        }
    })
    $("#updateBlog").click(function () {
        var blogId = $("#blogId").val();
        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzTitle', $("#azHeader").val());
        formData.append('RuTitle', $("#ruHeader").val());
        formData.append('EnTitle', $("#enHeader").val());
        formData.append('AzDescription', tinymce.get("azDescription").getContent());
        formData.append('EnDescription', tinymce.get("enDescription").getContent());
        formData.append('RuDescription', tinymce.get("ruDescription").getContent());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/Blogs/UpdateBlog?id=${blogId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#updateBlog').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Blog/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});