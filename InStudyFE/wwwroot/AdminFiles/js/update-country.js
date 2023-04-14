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

            console.log(data);
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

                            
                          
<div class="row mb-4">
                                <label class="col-md-3 form-label">Students Count:</label>
                                <div class="col-md-9">
                                    <input type="number" value="${data.data.currentStudents}" id="CurrentStudents" class="form-control">
                                </div>
                            </div> 
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Population:</label>
                                <div class="col-md-9">
                                    <input type="number" id="Population" value="${data.data.population}" class="form-control">
                                </div>
                            </div>






                            <!--End Row-->
                            <!--Row-->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Country File Upload :</label>
                                <div class="col-md-9">
                                    <input id="files" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple>
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
            $('.content').richText();
            $('.content1').richText();
            $('.content2').richText();
            $('.content3').richText();
            $('.content4').richText();
            $('.content5').richText();
            $('.content6').richText();
            $('.content7').richText();
            $('.content8').richText();
            $('.content9').richText();
            $('.content10').richText();
            $('.content11').richText();
            $('.content12').richText();
            $('.content13').richText();
            $('.content14').richText();
            $('.content15').richText();
            $('.content16').richText();
            $('.content17').richText();
            $('.content18').richText();


        }
    })
    $("#updateCountry").click(function () {
        var countryId = $("#countryId").val();
        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        formData.append('CurrentStudents', $("#CurrentStudents").val());
        formData.append('Population', $("#Population").val());
        formData.append('AzWorkPermit', $("#WorkPermitAz").val());
        formData.append('EnWorkPermit', $("#WorkPermitEn").val());
        formData.append('RuWorkPermit', $("#WorkPermitRu").val());
        formData.append('AzStudy', $("#StudyAz").val());
        formData.append('EnStudy', $("#StudyEn").val());
        formData.append('RuStudy', $("#StudyRu").val());
        formData.append('AzLiving', $("#LivingAz").val());
        formData.append('EnLiving', $("#LivingEn").val());
        formData.append('RuLiving', $("#LivingRu").val());
        formData.append('AzAbout', $("#AboutAz").val());
        formData.append('EnAbout', $("#AboutEn").val());
        formData.append('RuAbout', $("#AboutRu").val());
        formData.append('AzStudentVisa', $("#StudentVisaAz").val());
        formData.append('EnStudentVisa', $("#StudentVisaEn").val());
        formData.append('RuStudentVisa', $("#StudentVisaRu").val());
        formData.append('AzLiving', $("#LivingAz").val());
        formData.append('EnLiving', $("#LivingEn").val());
        formData.append('RuLiving', $("#LivingRu").val());
        formData.append('isActive', 'True');
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        console.log(formData);

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