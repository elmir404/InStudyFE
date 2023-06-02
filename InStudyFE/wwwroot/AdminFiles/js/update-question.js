$(document).ready(function () {
    const questionId = localStorage.getItem('questionId');

    var $form = $('#form')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Question/GetQuestion?id=${questionId}`,
        success: function (data) {

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
                                    <textarea class="content2" id="ruAnswer" name="example">${data.data.ruQuestionAnswer}</textarea>
                                </div>
                            </div> <div class="row">
                                <label class="col-md-3 form-label mb-4">En Answer:</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content3" id="enAnswer" name="example">${data.data.enQuestionAnswer}</textarea>
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
            }); tinymce.init({
                selector: ".content4",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content5",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content6",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            }); tinymce.init({
                selector: ".content7",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content8",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content9",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content10",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content11",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });

            tinymce.init({
                selector: ".content12",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content13",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content14",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content15",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content16",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content17",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });
            tinymce.init({
                selector: ".content18",
                setup: function (ed) {
                    ed.on("change", function () {
                        $("#form").data("changed", true);
                    })
                },
                content_style: "body { font-family: Arial; }"
            });


        }
    })
    $("#updateQuestion").click(function () {
        var questionId = $("#questionId").val();
        var formData = new FormData();
        formData.append('AzQuestionTitle', $("#azQuestion").val());
        formData.append('RuQuestionTitle', $("#ruQuestion").val());
        formData.append('EnQuestionTitle', $("#enQuestion").val());

        formData.append('AzQuestionAnswer', tinymce.get("azAnswer").getContent());
        formData.append('EnQuestionAnswer', tinymce.get("enAnswer").getContent());
        formData.append('RuQuestionAnswer', tinymce.get("ruAnswer").getContent());
        console.log(formData);

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/Question/UpdateQuestion?id=${questionId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#updateQuestion').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Content/QuestionList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});