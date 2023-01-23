$(document).ready(function () {
    $('#duration-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Duration/GetDurationes',
            dataSrc: 'data'
        },
        columns: [

            {
                data: 'date',
            },
           
            {
                data: 'id', render: function (data, type, row, meta) {
                    return `
                        <div class="btn-list">
                            <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>

                            </button>
                            
                        </div>

                        `;



                }
            },




        ]
    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/University/GetActiveUniversities`,

        success: function (data) {
            $.each(
                data.data, function (i, value) {

                   

                    

                        $("#University").append(`
                                                 <option value="${value.id}">${value.azName}</option>

`
                        );
                  



                }
            )

        }

    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Program/GetActivePrograms`,

        success: function (data) {
            $.each(
                data.data, function (i, value) {

                   

                    

                    $("#EducationProgram").append(`
                                                 <option value="${value.id}">${value.azName}</option>

`
                        );
                  



                }
            )

        }

    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Speciality/GetActiveSpecialities`,

        success: function (data) {
            $.each(
                data.data, function (i, value) {

                   

                    

                    $("#Speciality").append(`
                                                 <option value="${value.id}">${value.azName}</option>

`
                        );
                  



                }
            )

        }

    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/DurationDate/GetActiveDurationDates`,

        success: function (data) {
            $.each(
                data.data, function (i, value) {

                   

                    

                    $("#DurationDate").append(`
                                                 <option value="${value.id}">${value.Date}</option>

`
                        );
                  



                }
            )

        }

    });
    $("#addduration").click(function () {


        var formData = new FormData();
        formData.append('UniversityId', $("#University").val());
        formData.append('EducationProgramId', $("#EducationProgram").val());
        formData.append('SpecialityId', $("#Speciality").val());
        formData.append('DurationDateId', $("#DurationDate").val());
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Duration/AddDuration',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Duration/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });


});
function Edit(id) {

    localStorage.setItem('aboutId', id);
    location.href = `/Admin/Duration/UpdateDuration`;

}
function Delete(id) {

    $.ajax({
        type: "PUT",
        url: `https://api.instudy.net/api/AboutCompany/DeleteAboutCompany?id=${id}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Duration/List`;
            }
            else {
                alert(result.message)
            }
        }
    });


}

