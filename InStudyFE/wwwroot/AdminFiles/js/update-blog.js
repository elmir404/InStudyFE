$(document).ready(function () {
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
                                    <textarea class="content" id="ruDescription"  name="example">${data.data.ruDescription}</textarea>
                                </div>
                            </div> <div class="row">
                                <label class="col-md-3 form-label mb-4">En Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="enDescription"  name="example">${data.data.enDescription}</textarea>
                                </div>
                            </div>
                            <!--Row-->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">About Upload :</label>
                                <div class="col-md-9">
                                    <input id="files" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple>
                                </div>
                            </div>
                        
                        `
            )



        }
    })
    $("#updateBlog").click(function () {
        var blogId = $("#blogId").val();
        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzTitle', $("#azHeader").val());
        formData.append('RuTitle', $("#ruHeader").val());
        formData.append('EnTitle', $("#enHeader").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
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