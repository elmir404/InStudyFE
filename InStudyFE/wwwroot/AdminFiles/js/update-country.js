$(document).ready(function () {
    const countryId = localStorage.getItem('countryId');

    var $blogForm = $('#countryForm')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Country/GetCountryWithId?id=${countryId}`,
        success: function (data) {

            $blogForm.empty()

            $blogForm.append(
                `
                        <input type="hidden" id="countryId" value="${data.data.id}" class="form-control">
<div class="row mb-4">
                                <label class="col-md-3 form-label">Az Name :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azHeader" value="${data.data.azName}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Ru Name :</label>
                                <div class="col-md-9">
                                    <input type="text" id="ruHeader" value="${data.data.ruName}" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">En Name :</label>
                                <div class="col-md-9">
                                    <input type="text" id="enHeader" value="${data.data.enName}" class="form-control">
                                </div>
                            </div>

                            
                          







                            <!--End Row-->
                            <!--Row-->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Country File Upload :</label>
                                <div class="col-md-9">
                                     <input id="files" type="file" name="files" onchange="document.getElementById('output').src = window.URL.createObjectURL(this.files[0])"  accept=".jpg, .png, image/jpeg, image/png">
                                      <img id="output" src="https://api.instudy.net/${data.data.countryFiles[0]?.path}" width="100" height="100">
                                </div>
                            </div>
                       <div class="row">
                                <label class="col-md-3 form-label mb-4">Study(Az):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content7" id="StudyAz" name="Study">${data.data.azStudy}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Study(Ru):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content8" id="StudyRu" name="Study">${data.data.ruStudy}</textarea>
                                </div>
                            </div>  
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Study(En):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content9" id="StudyEn" name="Study">${data.data.enStudy}</textarea>
                                </div>
                            </div> 
                            <div class="row">          
                                <label class="col-md-3 form-label mb-4">Living(Az):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content10" id="LivingAz" name="Living">${data.data.azLiving}</textarea>
                                </div>
                            </div>
                            <div class="row">          
                                <label class="col-md-3 form-label mb-4">Living(En):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content11" id="LivingEn" name="Living">${data.data.enLiving}</textarea>
                                </div>
                            </div> 
                            <div class="row">          
                                <label class="col-md-3 form-label mb-4">Living(Ru):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content12" id="LivingRu" name="Living">${data.data.ruLiving}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">About(Az):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content13" id="AboutAz" name="About">${data.data.azAbout}</textarea>
                                </div>
                            </div>  
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">About(Ru):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content14" id="AboutRu" name="About">${data.data.ruAbout}</textarea>
                                </div>
                            </div>  <div class="row">
                                <label class="col-md-3 form-label mb-4">About(En):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content15" id="AboutEn" name="About">${data.data.enAbout}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Student Visa(Az):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content16" id="StudentVisaAz" name="StudentVisa">${data.data.azStudentVisa}</textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Student Visa(En):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content17" id="StudentVisaEn" name="StudentVisa">${data.data.enStudentVisa}</textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Student Visa(Ru):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content18" id="StudentVisaRu" name="StudentVisa">${data.data.ruStudentVisa}</textarea>
                                </div>
                            </div>
                        <div class="row">
                                <label class="col-md-3 form-label mb-4">Documents(AZ):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content4" id="WorkPermitAz" name="WorkPermit">${data.data.azWorkPermit}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Documents(Ru):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content5" id="WorkPermitRu" name="WorkPermit">${data.data.ruWorkPermit}</textarea>
                                </div>
                            </div>  <div class="row">
                                <label class="col-md-3 form-label mb-4">Documents(En):</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content6" id="WorkPermitEn" name="WorkPermit">${data.data.enWorkPermit}</textarea>
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
    $("#updateCountry").click(function () {
        var countryId = $("#countryId").val();
        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
       
        formData.append('CurrentStudents', 0);
        formData.append('Population', 0);
        formData.append('AzWorkPermit', tinymce.get("WorkPermitAz").getContent());
        formData.append('EnWorkPermit', tinymce.get("WorkPermitEn").getContent());
        formData.append('RuWorkPermit', tinymce.get("WorkPermitRu").getContent());
        formData.append('AzStudy', tinymce.get("StudyAz").getContent());
        formData.append('EnStudy', tinymce.get("StudyEn").getContent());
        formData.append('RuStudy', tinymce.get("StudyRu").getContent());
        formData.append('AzLiving', tinymce.get("LivingAz").getContent());
        formData.append('EnLiving', tinymce.get("LivingEn").getContent());
        formData.append('RuLiving', tinymce.get("LivingRu").getContent());
        formData.append('AzAbout', tinymce.get("AboutAz").getContent());
        formData.append('EnAbout', tinymce.get("AboutEn").getContent());
        formData.append('RuAbout', tinymce.get("AboutRu").getContent());
        formData.append('AzStudentVisa', tinymce.get("StudentVisaAz").getContent());
        formData.append('EnStudentVisa', tinymce.get("StudentVisaEn").getContent());
        formData.append('RuStudentVisa', tinymce.get("StudentVisaRu").getContent());
        formData.append('isActive', 'True');
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/Country/UpdateCountry?id=${countryId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#updateCountry').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Country/CountryList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});