﻿$(document).ready(function () {
    $('#partnersheader-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/PartnerFront/GetAllPartnerFronts',
            dataSrc: 'data'
        },
        columns: [

            {
                data: 'azHeader',
            },
            {
                data: 'ruHeader',
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

    $("#addPartnersHeader").click(function () {


        var formData = new FormData();
        formData.append('AzHeader', $("#azHeader").val());
        formData.append('RuHeader', $("#ruHeader").val());
        formData.append('EnHeader', $("#enHeader").val());

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/PartnerFront/AddPartnerFront',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Header/PartnersHeader"
                }
                else {
                    alert("error")
                }

            },
        });


    });
    $('#partnersheader-datatable').on('click', '.remove', function () {
        var table = $('#partnersheader-datatable').DataTable();
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
                    url: `https://api.instudy.net/api/PartnerFront/DeletePartnerFront?id=${id}`,
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

    location.href = `/admin/header/updatepartnersheader/${id}`;

}


