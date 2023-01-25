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
                            <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>
                            </button>
 <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-success">
                                <i class="fe fe-edit"></i>
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

    $.ajax({
        type: "DELETE",
        url: `https://api.instudy.net/api/Contact/DeleteMessage?messageId?messageId=${message}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Request/RequestList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}