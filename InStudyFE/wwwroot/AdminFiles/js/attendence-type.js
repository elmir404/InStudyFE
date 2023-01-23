$(document).ready(function () {
    $('#attendecetype-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/AttendamceType/GetActiveAttendanceTypes',
            dataSrc: 'data'
        },
        columns: [

            {
                data: 'Title',
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

    $("#addAttendenceType").click(function () {


        var formData = new FormData();
        formData.append('Title', $("#attendeceType").val());
    
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/AttendamceType/AddAttendanceType',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Attendence/AttendenceTypeList"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
//function Edit(about) {

//    localStorage.setItem('aboutId', about);
//    location.href = `/Admin/About/UpdateAbout`;

//}
function Delete(id) {

    $.ajax({
        type: "PUT",
        url: `https://api.instudy.net/api/AttendamceType/DeleteAttendanceType?Id=${id}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Attendence/AttendenceTypeList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}

