﻿$(document).ready(function () {
    $('#header-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Content/GetAllContents',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'files', render: function (data, type, row, meta) {
                    console.log("dsds", data);
                    return `
                             <td><img alt="${data[0]?.fileName}" style="width:200px !important;" class="text-center img-responsive" src="${data[0]?.path}"></td>
                           `;



                }
            },
            {
                data: 'azHeader',
            },
            {
                data: 'azBody',
            },
            {
                data: 'id', render: function (data, type, row, meta) {
                    return `
                            <div class="btn-list">
                                <button id="${JSON.stringify(data)}" type="button" class="btn remove   btn-sm btn-danger">
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

    //$("#addCountry").click(function () {

    //    var files = $("#files").get(0).files;
    //    var formData = new FormData();
    //    formData.append('AzName', $("#azHeader").val());
    //    formData.append('RuName', $("#ruHeader").val());
    //    formData.append('EnName', $("#enHeader").val());
    //    formData.append('AzDescription', $("#azDescription").val());
    //    formData.append('EnDescription', $("#enDescription").val());
    //    formData.append('RuDescription', $("#ruDescription").val());
    //    for (var i = 0; i < files.length; i++) {
    //        formData.append('Files', files[i]);
    //    }
    //    console.log(formData);

    //    $.ajax({
    //        type: "POST",
    //        url: 'https://api.instudy.net/api/Country/AddCountry',
    //        data: formData,
    //        processData: false,  // tell jQuery not to process the data
    //        contentType: false,
    //        complete: function (response) {
    //            if (response.status == 200) {
    //                location.href = "/Admin/Country/CountryList"
    //            }
    //            else {
    //                alert("error")
    //            }

    //        },
    //    });


    //});
    $('#header-datatable').on('click', '.remove', function () {
        var table = $('#header-datatable').DataTable();
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
                    type: "DELETE",
                    url: `https://api.instudy.net/api/Content/DeleteContent?id=${id}`,
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
function Edit(content) {

    localStorage.setItem('contentId', content);
    location.href = `/Admin/Content/UpdateContent`;

}
