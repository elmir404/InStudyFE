$(document).ready(function () {
    $('#user-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Users/GetUsers',
            dataSrc: 'data'
        },
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'surname' },
            { data: 'userName' },
            { data: 'email' },
            { data: 'position' },
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

    $(document).on('click', '#addClaim', async function () {
        var id = $("#userId").val();
        var name = $("#claimName").val();
        var type = $("#claimType").val();
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Users/AddClaim',
            contentType: 'application/json',
            data: JSON.stringify({

                userId: id,
                claimName: name,
                claimType: type,


            }),
            success: function (response) {
                if (response.success == true) {
                    location.href = "/Admin/User/List"
                } else {
                    alert(response.message);
                }
            },

        });
       





    });

});
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
                url: `https://api.instudy.net/api/Users/DeleteUser?userId=${id}`,
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
    //get();

