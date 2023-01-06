$(document).ready(function () {
    const universityId = localStorage.getItem('universityId');

    var $blogForm = $('#universityForm')
    var $programs;

    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/University/GetUniversityWithId?universityId=${universityId}`,
        success: function (data) {

            console.log(data.data);
            $programs = [];
            $.each(
                data.data.programs, function (i, value) {
                    $programs.push(
                        `${value.id}`
                    )

                }
            );
            console.log($programs);
            $('#hiddenProgram').val($programs);
            var $specialities= [];
            $.each(
                data.data.specialities, function (i, value) {
                    $specialities.push(
                        `${value.id}`
                    )

                }
            );
            $('#hiddenSpeciality').val($specialities);
            var $directions = [];
            $.each(
                data.data.directions, function (i, value) {
                    $directions.push(
                        `${value.id}`
                    )

                }
            );
            $('#hiddenDirection').val($directions);
            $blogForm.append(
                `
                        <input type="hidden" id="universityId" value="${data.data.id}" class="form-control">

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
                                <label class="col-md-3 form-label">Address :</label>
                                <div class="col-md-9">
                                    <input type="text" id="Addres" value="${data.data.address}" class="form-control">
                                </div>
                            </div>
                            
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">MapAddress :</label>
                                <div class="col-md-9">
                                    <input type="text" id="MapAddress" value="${data.data.mapAdrress}" class="form-control">
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
                            <!--End Row-->
                            <!--Row-->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">University Image :</label>
                                <div class="col-md-9">
                                    <input id="files" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple>
                                </div>
                            </div>
                        
                        `
            )



        }
    });
    //console.log($programs);
    $("#updateUniversity").click(function () {
        var universityId = $("#universityId").val();
        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        formData.append('MapAdrress', $("#MapAddress").val());
        formData.append('Address', $("#Addres").val());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        console.log(formData);

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/University/UpdateUniversity?id=${universityId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    //location.href = "/Admin/University/UniversityList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});