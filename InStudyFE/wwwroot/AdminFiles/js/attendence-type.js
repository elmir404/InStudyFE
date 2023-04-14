$(document).ready(function () {
    $('#attendencetype-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/AttendamceType/GetActiveAttendanceTypes',
            dataSrc: 'data'
        },
        columns: [

            {
                data: 'title',
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

    $("#addAttendeceType").click(function () {


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
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                type: "PUT",
                url: `https://api.instudy.net/api/AttendamceType/DeleteAttendanceType?Id=${id}`,
                success: function (result) {
                    if (result.success == true) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        ).then((result) => { if (result.isConfirmed) { location.reload() } });

                    }
                    else {
                        alert(result.message)
                    }
                }
            });

        }
    })
   


}

