﻿$(document).ready(function () {
    $('#gostudy-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/About/GetActiveAbouts',
            dataSrc: 'data'
        },
        columns: [
           
            {
                data: 'ruHeader',
            },
            {
                data: 'azHeader',
            },
            {
                data: 'enHeader',
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
    //$('#personal-datatable').DataTable({
    //    ajax: {
    //        url: 'https://localhost:7223/api/PersonalAbout/GetAbouts',
    //        dataSrc: 'data'
    //    },
    //    columns: [
    //        {
    //            data: 'phone1',
    //        },
    //        { data: 'email' },
    //        { data: 'city' },
    //        { data: 'street' },
    //        { data: 'instagramLink' },
    //        { data: 'facebookLink' },
    //        {
    //            data: 'id', render: function (data, type, row, meta) {
    //                return `
    //                    <div class="btn-list">
    //                        <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-danger">
    //                            <span class="fe fe-trash-2"> </span>

    //                        </button>
    //                        <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-success">
    //                            <i class="fe fe-eye"></i>
    //                        </button>
    //                    </div>

    //                    `;



    //            }
    //        },




    //    ]
    //});

    $("#addAbout").click(function () {

        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzHeader', $("#azHeader").val());
        formData.append('RuHeader', $("#ruHeader").val());
        formData.append('EnHeader', $("#enHeader").val());
        formData.append('AzDescription', tinymce.get("azDescription").getContent());
        formData.append('EnDescription', tinymce.get("enDescription").getContent());
        formData.append('RuDescription', tinymce.get("ruDescription").getContent());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/About/AddAbout',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addAbout').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/GoStudy/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });
    $('#gostudy-datatable').on('click', '.remove', function () {
        var table = $('#gostudy-datatable').DataTable();
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
                    url: `https://api.instudy.net/api/About/DeleteAbout?aboutId=${id}`,
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
function Edit(about) {

    localStorage.setItem('goStudyId', about);
    location.href = `/Admin/GoStudy/UpdateGoStudy`;

}  


