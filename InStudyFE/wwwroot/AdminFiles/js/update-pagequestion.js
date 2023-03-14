$(document).ready(function () {
    const questionId = localStorage.getItem('pageQuestionId');

    var $form = $('#form')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/AboutQuestion/GetAboutQuestion?id=${questionId}`,
        success: function (data) {

            console.log(data);
            $form.empty()

            $form.append(
                `
                        <input type="hidden" id="questionId" value="${data.data.id}" class="form-control">

                      <div class="row mb-4">
                                <label class="col-md-3 form-label">Az Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azHeader" value="${data?.data?.azHeader}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Ru Title :</label>
                                <div class="col-md-9">
                                    <input type="text" value="${data?.data?.ruHeader}" id="ruHeader" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">En Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="enHeader" value="${data?.data?.enHeader}" class="form-control">
                                </div>
                            </div>

                            <!-- Row -->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Az Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="azDescription" name="example">${data?.data?.azBody}</textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Ru Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content2" id="ruDescription" name="example">${data?.data?.ruBody}</textarea>
                                </div>
                            </div> <div class="row">
                                <label class="col-md-3 form-label mb-4">En Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content3" id="enDescription" name="example">${data?.data?.enBody}</textarea>
                                </div>
                            </div>
                        
                        `
            );
             $('.content').richText();
            $('.content2').richText();
            $('.content3').richText();



        }
    })
    $("#updateShowedQuestion").click(function () {
        var questionId = $("#questionId").val();
        var questions = $("#questions").val();
        var formData = new FormData();
        formData.append('AzHeader', $("#azHeader").val());
        formData.append('RuHeader', $("#ruHeader").val());
        formData.append('EnHeader', $("#enHeader").val());
        formData.append('AzBody', $("#azDescription").val());
        formData.append('EnBody', $("#enDescription").val());
        formData.append('RuBody', $("#ruDescription").val());
        for (var i = 0; i < questions.length; i++) {
            formData.append('questionIds', questions[i]);
        }

        console.log(formData);

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/AboutQuestion/UpdateAboutQuestion?id=${questionId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#updateShowedQuestion').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Content/PageQuestion"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});