$(document).ready(function () {
    const specialityId = localStorage.getItem('specialityId');
    debugger;
    var $form = $('#form')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Speciality/GetSpeciality/id?id=${specialityId}`,
        success: function (data) {
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
                       
                        result.data, function (i, value) {
                            if (data.data.direction.id == value.id) {
                                html.push(
                                    `
                                                                            <option selected value="${value.id}">${value.azName}</option>

                                                                         `
                                )
                            }
                                
                            else {
                                html.push(
                                    `
                                                                            <option value="${value.id}">${value.azName}</option>

                                                                         `
                                )
                            }

                        }
                    )
                    $('#directionid').html(html.join(''));
                }

            });
            console.log(data);
            $form.empty()

            $form.append(
                `
                        <input type="hidden" id="specialityId" value="${data.data.id}" class="form-control">

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
            );
            $('.content').richText();
            
            $('.content2').richText();
            $('.content3').richText();


        }
    })
    $("#updateSpeciality").click(function () {
        
       
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        formData.append('DirectionId', $("#directionid").val());
       
        console.log(formData);

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/Speciality/UpdateSpeciality?id=${specialityId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#updateSpeciality').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Speciality/SpecialityList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});