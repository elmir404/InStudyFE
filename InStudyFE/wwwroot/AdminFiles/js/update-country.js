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
                                    <textarea class="content7" id="ruDescription"  name="example">${data.data.ruDescription}</textarea>
                                </div>
                            </div> <div class="row">
                                <label class="col-md-3 form-label mb-4">En Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content2" id="enDescription"  name="example">${data.data.enDescription}</textarea>
                                </div>
                            </div>
<div class="row mb-4">
                                <label class="col-md-3 form-label">Students Count:</label>
                                <div class="col-md-9">
                                    <input type="text" value="${data.data.currentStudents}" id="CurrentStudents" class="form-control">
                                </div>
                            </div> 
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Population:</label>
                                <div class="col-md-9">
                                    <input type="text" id="Population" value="${data.data.population}" class="form-control">
                                </div>
                            </div> 
                             <div class="row">
                                <label class="col-md-3 form-label mb-4">Work Permit:</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content3" id="WorkPermit" name="WorkPermit">${data.data.workPermit}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Study:</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content4" id="Study" name="Study">${data.data.study}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Living:</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content5" id="Living" name="Living">${data.data.living}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">About:</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content6" id="About" name="About">${data.data.about}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Student Visa:</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content7" id="StudentVisa" name="StudentVisa">${data.data.studentVisa}</textarea>
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
        formData.append('WorkPermit', $("#WorkPermit").val());
        formData.append('Study', $("#Study").val());
        formData.append('Living', $("#Living").val());
        formData.append('About', $("#About").val());
        formData.append('StudentVisa', $("#StudentVisa").val());
        formData.append('Living', $("#Living").val());
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