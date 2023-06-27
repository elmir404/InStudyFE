$(document).ready(function () {
    $('#comments-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/StudentWords/GetActiveStudentWords',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'azName',
            },
{
                data: 'enName',
            },
            {
                data: 'ruName',
            },
          
           
            {
                data: 'id', render: function (data, type, row, meta) {
                    return ` <div class="btn-list">
                <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-primary">
                    <i class="fe fe-edit"></i>
                </button>
               <button id="${JSON.stringify(data)}" type="button" class="btn remove   btn-sm btn-danger">
                    <span class="fe fe-trash-2"> </span>
                </button>


            </div>
                        `;



                }
            },




        ]
    });
    $("#addWords").click(function () {
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        var files = $("#files").get(0).files;
        formData.append('AzDescription', tinymce.get("azDescription").getContent());
        formData.append('EnDescription', tinymce.get("enDescription").getContent());
        formData.append('RuDescription', tinymce.get("ruDescription").getContent());
        formData.append('CountryId', $("#country").val());
        formData.append('IsActive', 'True');
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        console.log(formData);

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/StudentWords/AddStudentWords',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addWords').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/StudentWords/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });
    $('#comments-datatable').on('click', '.remove', function () {
        var table = $('#comments-datatable').DataTable();
        var id = $(this).attr("id");
        var thh = $(this);
        debugger;
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
                    url: `https://api.instudy.net/api/StudentWords/DeleteStudentWords?id=${id}`,
                    success: function (result) {
                        if (result.success == true) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            ).then((result) => {
                                if (result.isConfirmed) {
                                    table
                                        .row($(thh).parents('tr'))
                                        .remove()
                                        .draw(false);
                                    debugger;
                                }
                            });

                        }
                        else {
                            alert(result.message)
                        }
                    }
                });

            }
        })

        debugger;
    });
});
function Edit(id) {

    localStorage.setItem('commentId', id);
    location.href = `/Admin/StudentWords/UpdateStudentWords`;

}
