﻿$(document).ready(function () {
    $('#speciality-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Speciality/GetActiveSpecialities',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'azName',
            },
            {
                data: 'ruName',
            },
            {
                data: 'enName',
            },
            {
                data: 'azDescription',
            },
            {
                data: 'ruDescription',
            },
            {
                data: 'enDescription',
            },
            {
                data: 'id', render: function (data, type, row, meta) {
                    return `
                        <div class="btn-list">
                            <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>

                            </button>
                            <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-success">
                                <i class="fe fe-edit"></i>
                            </button>
                        </div>

                        `;



                }
            },




        ]
    });
   

    $("#addSpeciality").click(function () {
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
            type: "POST",
            url: 'https://api.instudy.net/api/Speciality/AddSpeciality',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
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
function Edit(id) {

    localStorage.setItem('specialityId', id);
    location.href = `/Admin/Speciality/UpdateSpeciality`;

}
function Delete(speciality) {

    $.ajax({
        type: "PUT",
        url: `https://api.instudy.net/api/Speciality/DeleteSpeciality?id=${speciality}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Speciality/SpecialityList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}