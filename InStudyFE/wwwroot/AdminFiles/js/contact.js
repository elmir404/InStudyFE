$(document).ready(function () {
    $('#message-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Contact/GetContact',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'fullName',
            },
            { data: 'email' },
            { data: 'phone' },
            
            { data: 'subject' },
            { data: 'message' },
            {
                data: 'id', render: function (data, type, row, meta) {
                    return `<div class="btn-list">
                            <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>
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
});
function Delete(message) {
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
                type: "DELETE",
                url: `https://api.instudy.net/api/Contact/DeleteMessage?messageId?messageId=${message}`,
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