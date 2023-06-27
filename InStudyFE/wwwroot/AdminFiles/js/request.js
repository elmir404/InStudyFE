$(document).ready(function () {
    $('#message-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/StudentRequest/GetActiveStudentRequests',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'name',
            },
            { data: 'email' },
            { data: 'phone' },

            
            {
                data: 'id', render: function (data, type, row, meta) {
                    return `<div class="btn-list">
                            <button id="${JSON.stringify(data)}" type="button" class="btn remove   btn-sm btn-danger">
                    <span class="fe fe-trash-2"> </span>
                </button>

 <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-success">
                                <i class="fe fe-eye"></i>
                            </button>
                        </div>
                        `;



                }
            },




        ]
    });
    $('#nonseed-requests').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/StudentRequest/GetNonSeenStudentRequests',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'name',
            },
            { data: 'email' },
            { data: 'phone' },

            
            {
                data: 'id', render: function (data, type, row, meta) {
                    return `<div class="btn-list">
                            <button id="${JSON.stringify(data)}" type="button" class="btn remove   btn-sm btn-danger">
                    <span class="fe fe-trash-2"> </span>
                </button>
 <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-success">
                                <i class="fe fe-eye"></i>
                            </button>
                        </div>
                        `;



                }
            },




        ]
    });
    //var $messages = $('#messages');
    //function getBlogs() {
    //    $.ajax({
    //        type: 'GET',
    //        headers: {
    //            'Content-Type': 'application/json'
    //        },
    //        url: `https://fainablogapi.herokuapp.com/api/Contact/GetContact`,

    //        success: function (data) {
    //            $messages.empty();
    //            $.each(
    //                data.data, function (i, value) {
    //                    console.log(value);

    //                    $messages.append(
    //                        `

    //                                                         <tr>


    //                                                            <td>${value.name} ${value.surName}</td>


    //                                                            <td>${value.phone}</td>
    //                                                            <td>${value.email}</td>
    //                                                              <td>${value.subject}</td>
    //                                                            <td>
    //                                                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
    //                                                                <button type="button" class="btn btn-danger ">Delete</button>
    //                                                                <button type="button" class="btn btn-danger ">Details</button>
    //                                                                </div>

    //                                                            </td>

    //                                              </tr>
    //                        `
    //                    )

    //                }
    //            )

    //        }

    //    });
    //}
    //$(document).on('click', '#learnMore', async function () {
    //    let Id = this.value;
    //    console.log(Id);
    //    localStorage.setItem('blogId', Id);
    //    location.href = `/Blog/Detail`;


    //});
    //getBlogs();
    $("#excelButton").click(function () {
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/StudentRequest/ExportToExcel',
           
           
           
            complete: function (response) {
                if (response.status == 200) {
                    $(`#excelLink`).html(`<a href="https://api.instudy.net/${response.responseJSON.message}" class="btn btn-success mb-4 data-table-btn" rel="nofollow">Download Here</a>`);
                }
                else {
                    alert("error")
                }

            },
        });


    });
    $('#message-datatable').on('click', '.remove', function () {
        var table = $('#message-datatable').DataTable();
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
                    url: `https://api.instudy.net/api/StudentRequest/DeleteStudentRequest?id=${id}`,
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
    $('#nonseed-requests').on('click', '.remove', function () {
        var table = $('#nonseed-requests').DataTable();
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
                    url: `https://api.instudy.net/api/StudentRequest/DeleteStudentRequest?id=${id}`,
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
    
    location.href = `/Admin/Request/RequestDetail/${id}`;

}