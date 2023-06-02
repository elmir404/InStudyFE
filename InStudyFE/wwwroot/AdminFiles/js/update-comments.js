$(document).ready(function () {
    const id = localStorage.getItem('commentId');

    var $blogForm = $('#commentForm')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/StudentWords/GetStudentWords?id=${id}`,
        success: function (data) {
            $.ajax({
                type: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',

                },
                url: `https://api.instudy.net/api/Country/GetCountriesIdName`,

                success: function (result) {
                    var html = [];
                    $.each(
                        result.data, function (i, value) {
                            if (data.data.country.id == value.id) {
                                html.push(
                                    `
                                                                    <option selected value="${value.id}">${value.enName}</option>

                                                                 `
                                )
                            } else {
                                html.push(
                                    `
                                                                    <option value="${value.id}">${value.enName}</option>

                                                                 `
                                )
                            }


                        }
                    )
                    $('#country').html(html.join(''));
                }

            });
            console.log(data);
            $blogForm.empty()

            $blogForm.append(
                `
                        <input type="hidden" id="commentId" value="${data.data.id}" class="form-control">

                     <div class="row mb-4">
                                <label class="col-md-3 form-label">Az Student Name :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azHeader" value="${data.data.azName}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>  
<div class="row mb-4">
                                <label class="col-md-3 form-label">En Student Name :</label>
                                <div class="col-md-9">
                                    <input type="text" id="enHeader" value="${data.data.enName}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>  
<div class="row mb-4">
                                <label class="col-md-3 form-label">Ru Student Name :</label>
                                <div class="col-md-9">
                                    <input type="text" id="ruHeader" value="${data.data.ruName}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                           

                            <!-- Row -->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Az Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="azDescription" maxlength="400" rows="4" cols="50"  name="example">${data.data.azDescription}</textarea>
                                </div>
                            </div>  
<div class="row">
                                <label class="col-md-3 form-label mb-4">En Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content2" id="enDescription" maxlength="400" rows="4" cols="50"  name="example">${data.data.enDescription}</textarea>
                                </div>
                            </div> 
<div class="row">
                                <label class="col-md-3 form-label mb-4">Ru Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content3" id="ruDescription" maxlength="400" rows="4" cols="50"  name="example">${data.data.ruDescription}</textarea>
                                </div>
                            </div>
                         <div class="row">
                                        <label class="col-md-3 form-label mb-4">File Upload :</label>
                                        <div class="col-md-9">
                                             <input id="files" type="file" name="files" onchange="document.getElementById('output').src = window.URL.createObjectURL(this.files[0])"  accept=".jpg, .png, image/jpeg, image/png">
                                      <img id="output" src="https://api.instudy.net/${data.data.studentFiles[0]?.path}" width="100" height="100">
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
    $("#updateComments").click(function () {
        var blogId = $("#commentId").val();
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        var files = $("#files").get(0).files;
        formData.append('AzDescription', tinymce.get("azDescription").getContent());
        formData.append('EnDescription', tinymce.get("enDescription").getContent());
        formData.append('RuDescription', tinymce.get("ruDescription").getContent());
        formData.append('CountryId', $("#country").val());
        formData.append('IsActive', 'True');
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/StudentWords/UpdateStudentWords?id=${blogId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#updateComments').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/StudentWords/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});