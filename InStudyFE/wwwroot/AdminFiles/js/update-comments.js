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

            console.log(data);
            $blogForm.empty()

            $blogForm.append(
                `
                        <input type="hidden" id="commentId" value="${data.data.id}" class="form-control">

                     <div class="row mb-4">
                                <label class="col-md-3 form-label">Student Name :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azHeader" value="${data.data.name}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                           

                            <!-- Row -->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Az Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="azDescription"  name="example">${data.data.description}</textarea>
                                </div>
                            </div>
                        <div class="row">
                                <label class="col-md-3 form-label mb-4">Country</label>
                                <div class="col-md-9 mb-4">
                                    <select id="country">
                                    </select>
                                </div>
                            </div>
                         
                        
                        `
            )

            $('.content').richText();

        }
    })
    $("#updateComments").click(function () {
        var blogId = $("#commentId").val();
        var formData = new FormData();
        formData.append('Name', $("#azHeader").val());
        formData.append('Description', $("#azDescription").val());
        formData.append('CountryId', $("#country").val());
        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/StudentWords/UpdateStudentWords?id=${blogId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
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