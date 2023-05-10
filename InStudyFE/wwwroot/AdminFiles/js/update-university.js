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

            //console.log(data.data);
            //$programs = [];
            //$.each(
            //    data.data.programs, function (i, value) {
            //        $programs.push(
            //            `${value.id}`
            //        )

            //    }
            //);
            //$specilitys = [];
            //$.each(
            //    data.data.programs, function (i, value) {
            //        $specilitys.push(
            //            `${value.id}`
            //        )

            //    }
            //);
            //console.log($programs);
            $.ajax({
                type: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',

                },
                url: `https://api.instudy.net/api/Program/GetActivePrograms`,

                success: function (result) {
                    var html = [];
                    $.each(
                        result.data, function (i, value) {
                            var isSelected = false;
                            if (data.data.programs.find(x => x.id === value.id)) {
                                html.push(
                                    `
                                                                                <option selected value="${value.id}">${value.enName}</option>

                                                                             `
                                );
                            }
                            else {
                                html.push(
                                    `
                                                                                <option value="${value.id}">${value.enName}</option>

                                                                             `
                                );
                            }
                          

                        }
                    )
                    $('#program').html(html.join('')).multipleSelect();
                }

            });
            //var $specialities = [];

            //$.each(
            //    data.data.specialities, function (i, value) {
            //        console.log(value);
            //        $specialities.push(
            //            `${value.id}`
            //        )

            //    }
            //);
            //console.log($specialities);
            //$('#hiddenSpeciality').val(`${$specialities}`);
            ////var $directions = [];
            ////$.each(
            ////    data.data.directions, function (i, value) {
            ////        $directions.push(
            ////            `${value.id}`
            ////        )

            ////    }
            ////);
            var formData1 = new FormData();
            $.ajax({
                type: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',

                },
                url: `https://api.instudy.net/api/Direction/GetActiveDirections`,

                success: function (result) {
                    var html = [];

                    $.each(
                        result.data,
                        function (i, value) {

                            if (data.data.directions.find(x => x.id === value.id)) {
                                debugger;
                                formData1.append('DirectionIds', value.id);
                                html.push(
                                    `
                                                                                        <option selected value="${value.id}">${value.enName}</option>

                                                                                     `
                           
                        );


                } 
                else {
                    html.push(
                        `
                                                                                <option value="${value.id}">${value.enName}</option>

                                                                             `
                    );
                }
            })



                         

                        
                    
                    $('#direction').html(html.join('')).multipleSelect();
                    var html1 = [];
                    var locArr = [];
                    $.ajax({
                        type: "POST",
                        url: `https://api.instudy.net/api/Speciality/SearchSpeciality?currentPage=1&pageSize=100`,
                        processData: false,
                        contentType: false,
                        cache: false,
                        data: formData1,
                        enctype: 'multipart/form-data',
                    })
                        .done(function (response) {
                            // Make sure that the formMessages div has the 'success' class.
                            if (response.success == true) {

                                debugger;
                                if (data.data.specialities.length == 0) {


                                    $.each(

                                        response.data.value, function (p, value) {

                                            html1.push(
                                                `
                                                                                <option value="${value.id}">${value.enName}</option>

                                                                             `
                                            );


                                        });
                                }
                                else {
                                    $.each(

                                        response.data.value, function (p, value) {
                                    if (data.data.specialities.find(x => x.id === value.id)) {
                                        html1.push(
                                            `
                                                                                <option selected value="${value.id}">${value.enName}</option>

                                                                             `
                                        );
                                        locArr.push(value.id);
                                        localStorage.setItem('currentSpecialities', JSON.stringify(locArr));
                                    
                                    }
                                    else {
                                        html1.push(
                                            `
                                                                                <option value="${value.id}">${value.enName}</option>

                                                                             `
                                        );
                                    }
                                    });
                                   
                                }


                            }
                            $('#speciality').html(html1.join(''));

                        })
                        .fail(function (data) {
                            // Make sure that the formMessages div has the 'error' class.
                            toastr.warning("An error ocured!");
                        });

                }

            });


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
            $blogForm.append(
                `
                        <input type="hidden" id="universityId" value="${data.data.id}" class="form-control">
                      

                    <div class="row mb-4">
                                <label class="col-md-3 form-label">Az Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azHeader" value="${data?.data?.azName}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Ru Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="ruHeader" value="${data?.data?.ruName}" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">En Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="enHeader" value="${data?.data?.enName}" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Az Adress :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azAdrress" value="${data?.data?.azAddress}" class="form-control">
                                </div>
                            </div>
<div class="row mb-4">
                                <label class="col-md-3 form-label">En Adress :</label>
                                <div class="col-md-9">
                                    <input type="text" id="enAdrress" value="${data?.data?.enAddress}" class="form-control">
                                </div>
                            </div>
<div class="row mb-4">
                                <label class="col-md-3 form-label">Ru Adress :</label>
                                <div class="col-md-9">
                                    <input type="text" id="ruAdrress" value="${data?.data?.ruAddress}" class="form-control">
                                </div>
                            </div>
<div class="row mb-4">
                                <label class="col-md-3 form-label">Az City :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azCity" value="${data?.data?.azCity}" class="form-control">
                                </div>
                            </div>
<div class="row mb-4">
                                <label class="col-md-3 form-label">En City :</label>
                                <div class="col-md-9">
                                    <input type="text" id="enCity" value="${data?.data?.enCity}" class="form-control">
                                </div>
                            </div>
<div class="row mb-4">
                                <label class="col-md-3 form-label">Ru City :</label>
                                <div class="col-md-9">
                                    <input type="text" id="ruCity" value="${data?.data?.ruCity}" class="form-control">
                                </div>
                            </div>
                            <!-- Row -->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Az Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="azDescription" name="example">${data?.data?.azDescription}</textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Ru Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content2" id="ruDescription" name="example">${data?.data?.ruDescription}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">En Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content3" id="enDescription" name="example">${data?.data?.enDescription}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Az Bachelor :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content4" id="azBachelor" name="example">${data?.data?.azBachelor}</textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Ru Bachelor :</label>
                                <div class="col-md-9 mb-4">
                                        <textarea class="content5" id="ruBachelor" name="example">${data?.data?.ruBachelor}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">En Bachelor :</label>
                                <div class="col-md-9 mb-4">
                                        <textarea class="content6" id="enBachelor" name="example">${data?.data?.enBachelor}</textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Az Master :</label>
                                <div class="col-md-9 mb-4">
                                        <textarea class="content7" id="azMaster" name="example">${data?.data?.azMaster}</textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Ru Master :</label>
                                <div class="col-md-9 mb-4">
                                        <textarea class="content8" id="ruMaster" name="example">${data?.data?.ruMaster}</textarea>
                                </div>
                            </div> 
                            <div class="row">
                                    <label class="col-md-3 form-label mb-4">En Master :</label>
                                <div class="col-md-9 mb-4">
                                        <textarea class="content9" id="enMaster" name="example">${data?.data?.enMaster}</textarea>
                                </div>
                            </div>
                           <div class="row">
                                        <label class="col-md-3 form-label mb-4">File Upload :</label>
                                        <div class="col-md-9">
                                             <input id="files" type="file" name="files" onchange="document.getElementById('output').src = window.URL.createObjectURL(this.files[0])"  accept=".jpg, .png, image/jpeg, image/png">
                                      <img id="output" src="https://api.instudy.net/${data.data.universityFiles[0]?.path}" width="100" height="100">
                                        </div>
                                    </div>
                           
                        
                        `
            );
            $('.content').richText();
            $('.content2').richText();
            $('.content3').richText();
            $('.content4').richText();
            $('.content5').richText();
            $('.content6').richText();
            $('.content7').richText();
            $('.content8').richText();
            $('.content9').richText();



        }
    });

    //console.log($programs);
    $("#updateUniversity").click(function () {
        var universityId = $("#universityId").val();
        var files = $("#files").get(0).files;
        var program = $("#program").val();
        var speciality = $("#speciality").val();
        var direction = $("#direction").val();
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        formData.append('countryId', $("#country").val());
        formData.append('AzAddress', $("#azAdrress").val());
        formData.append('EnAddress', $("#enAdrress").val());
        formData.append('RuAddress', $("#ruAdrress").val());
        formData.append('AzCity', $("#azCity").val());
        formData.append('EnCity', $("#enCity").val());
        formData.append('RuCity', $("#ruCity").val());

        formData.append('AzBachelor', $("#azBachelor").val());
        formData.append('RuBachelor', $("#ruBachelor").val());
        formData.append('EnBachelor', $("#enBachelor").val());
        formData.append('AzMaster', $("#azMaster").val());
        formData.append('RuMaster', $("#ruMaster").val());
        formData.append('EnMaster', $("#enMaster").val());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        for (var i = 0; i < program.length; i++) {
            formData.append('ProgramIds', program[i]);
        }
        for (var i = 0; i < direction.length; i++) {
            formData.append('DirectionIds', direction[i]);
        }
        for (var i = 0; i < speciality.length; i++) {
            formData.append('SpecialityIds', speciality[i]);
        }
        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/University/UpdateUniversity?id=${universityId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#updateUniversity').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/University/UniversityList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});