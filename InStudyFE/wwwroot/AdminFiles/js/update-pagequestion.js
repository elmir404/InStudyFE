$(document).ready(function () {
    const questionId = localStorage.getItem('questionId');

    var $form = $('#programForm')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Question/GetQuestion?id=${questionId}`,
        success: function (data) {

            console.log(data);
            $form.empty()

            $form.append(
                `
                        <input type="hidden" id="questionId" value="${data.data.id}" class="form-control">

                      <div class="row mb-4">
                                <label class="col-md-3 form-label">Question(AZ):</label>
                                <div class="col-md-9">
                                    <input type="text" id="azQuestion" value="${data.data.azQuestionTitle}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Question(RU):</label>
                                <div class="col-md-9">
                                    <input type="text" id="ruQuestion" value="${data.data.ruQuestionTitle}" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Question(EN):</label>
                                <div class="col-md-9">
                                    <input type="text" id="enQuestion" value="${data.data.enQuestionTitle}" class="form-control">
                                </div>
                            </div>

                            <!-- Row -->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Az Answer:</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="azAnswer" name="example">${data.data.azQuestionAnswer}</textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Ru Answer:</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="ruAnswer" name="example">${data.data.ruQuestionAnswer}</textarea>
                                </div>
                            </div> <div class="row">
                                <label class="col-md-3 form-label mb-4">En Answer:</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="enAnswer" name="example">${data.data.enQuestionAnswer}</textarea>
                                </div>
                            </div>
                        
                        `
            )



        }
    })
    $("#updateQuestion").click(function () {
        var questionId = $("#questionId").val();
        var formData = new FormData();
        formData.append('AzQuestionTitle', $("#azQuestion").val());
        formData.append('RuQuestionTitle', $("#ruQuestion").val());
        formData.append('EnQuestionTitle', $("#enQuestion").val());
        formData.append('AzQuestionAnswer', $("#azDescription").val());
        formData.append('EnQuestionAnswer', $("#enDescription").val());
        formData.append('RuQuestionAnswer', $("#ruDescription").val());

        console.log(formData);

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/Question/UpdateQuestion?id=${questionId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Question/QuestionList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});