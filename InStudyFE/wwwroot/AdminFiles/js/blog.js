﻿    $(document).ready(function () {
    $('#blog-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Blogs/GetActiveBlogs',
            dataSrc: 'data'
        },
        autoWidth: false,
        columns: [
            {
                data: 'blogFiles', render: function (data, type, row, meta) {
                    console.log("dsds",data);
                    return `
                         <td><img alt="${data[0]?.fileName}" w-100 class="text-center img-responsive" src="https://api.instudy.net/${data[0]?.path}"></td>
                        `;



                }
            },
            {
                data: 'azTitle',
            },
            {
                data: 'ruTitle',
            },
            {
                data: 'enTitle',
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




        ],
        columnDefs: [
            { width: '10%', targets: [0,1, 2,3,4] },
            
        ]
    });
    $("#addBlog").click(function () {
       
        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzTitle', $("#azHeader").val());
        formData.append('RuTitle', $("#ruHeader").val());
        formData.append('EnTitle', $("#enHeader").val());
        formData.append('AzDescription', tinymce.get("azDescription").getContent());
        formData.append('EnDescription', tinymce.get("enDescription").getContent());
        formData.append('RuDescription', tinymce.get("ruDescription").getContent());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
       

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Blogs/CreateBlog',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
              
                    $('#addBlog').attr('disabled', 'disabled');
               
                
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Blog/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });
        $('#blog-datatable').on('click', '.remove', function () {
            var table = $('#blog-datatable').DataTable();
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
                        url: `https://api.instudy.net/api/Blogs/DeleteBlog?blogId=${id}`,
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
function Edit(blog) {

    localStorage.setItem('blogId', blog);
    location.href = `/Admin/Blog/UpdateBlog`;

}
