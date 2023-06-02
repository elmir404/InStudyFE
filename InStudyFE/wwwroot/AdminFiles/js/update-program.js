$(document).ready(function () {
    const programId = localStorage.getItem('programId');

    var $form = $('#form')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Program/GetProgram?programId=${programId}`,
        success: function (data) {

            $form.empty()

            $form.append(
                `
                        <input type="hidden" id="programId" value="${data.data.id}" class="form-control">

                     <div class="row mb-4">
                                <label class="col-md-3 form-label">Az Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azHeader" value="${data.data.azName}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Ru Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="ruHeader" value="${data.data.ruName}" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">En Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="enHeader" value="${data.data.enName}" class="form-control">
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
    $("#updateProgram").click(function () {
        var programId = $("#programId").val();
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('AzDescription', tinymce.get("azDescription").getContent());
        formData.append('EnDescription', tinymce.get("enDescription").getContent());
        formData.append('RuDescription', tinymce.get("ruDescription").getContent());
       

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/Program/UpdateProgram?id=${programId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#updateProgram').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Program/ProgramList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});