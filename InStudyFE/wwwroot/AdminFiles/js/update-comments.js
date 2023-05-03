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
                                <label class="col-md-3 form-label">Student Name :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azHeader" value="${data.data.name}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                           

                            <!-- Row -->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Az Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="" id="azDescription" maxlength="50"  name="example">${data.data.description}</textarea>
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
        var files = $("#files").get(0).files;
        formData.append('Name', $("#azHeader").val());
        formData.append('Description', $("#azDescription").val());
        formData.append('CountryId', $("#country").val());
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