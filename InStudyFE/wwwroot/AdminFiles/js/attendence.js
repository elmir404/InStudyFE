$(document).ready(function () {
    $('#attendence-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Attendance/GetActiveAttendances',
            dataSrc: 'data'
        },
        columns: [

            {
                data: 'attendanceType', render: function (data, type, row, meta) {
                    return `
                       <td>${data.title}</td>

                        `;



                }
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
        url: `https://api.instudy.net/api/AttendamceType/GetActiveAttendanceTypes`,

        success: function (data) {
            $.each(
                data.data, function (i, value) {





                    $("#Type").append(`
                                                 <option value="${value.id}">${value.title}</option>

`
                    );




                }
            )

        }

    });
    $("#addAttendence").click(function () {


        var formData = new FormData();
        formData.append('UniversityId', $("#University").val());
        formData.append('EducationProgramId', $("#EducationProgram").val());
        formData.append('SpecialityId', $("#Speciality").val());
        formData.append('AttendanceTypeId', $("#Type").val());
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Attendance/AddAttendance',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Attendence/List"
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
        url: `https://api.instudy.net/api/Attendance/DeleteAttendance?id=${id}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Attendence/List`;
            }
            else {
                alert(result.message)
            }
        }
    });


}

