
$(document).ready(function () {
    $('#durationtype-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/DurationDate/GetActiveDurationDates',
            dataSrc: 'data'
        },
        columns: [

            {
                data: 'id',
            },
            {
                data: 'date',
            },

            {
                data: 'id', render: function (data, type, row, meta) {
                    return `
                        <div class="btn-list">
                           
                           
                        <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-success">
                                                        <i class="fe fe-delete"></i>
                                                    </button>
                                                </div>

                        `;



                }
            },




        ]
    });

    $("#addDurationType").click(function () {


        var formData = new FormData();
        formData.append('Date', $("#durationType").val());
        
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/DurationDate/AddDurationDate',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addDurationType').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Duration/DurationTypeList"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(id) {

    localStorage.setItem('durationTypeId',id);
    location.href = `/Admin/Duration/UpdateDurationType`;

}
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
                url: `https://api.instudy.net/api/DurationDate/DeleteDurationDate?id=${id}`,
                success: function (result) {
                    if (result.success == true) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        ).then((result) => { if (result.isConfirmed) { location.reload(); } });

                    }
                    else {
                        alert(result.message)
                    }
                }
            });

        }
    })
   

}

