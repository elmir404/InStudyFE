﻿$(document).ready(function () {
    $('#commentsheader-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/StudentWordsFront/GetAllStudentWordsFront',
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
                            <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>

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

    $("#addCommentsHeader").click(function () {


        var formData = new FormData();
        formData.append('AzHeader', $("#azHeader").val());
        formData.append('RuHeader', $("#ruHeader").val());
        formData.append('EnHeader', $("#enHeader").val());
    
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/StudentWordsFront/AddStudentWordsFront',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Header/CommentsHeader"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
//function Edit(about) {

//    localStorage.setItem('goStudyId', about);
//    location.href = `/Admin/Header/CommentsHeader`;

//}
function Delete(about) {
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
                url: `https://api.instudy.net/api/StudentWordsFront/DeleteStudentWordsFront?id=${about}`,
                success: function (result) {
                    if (result.success == true) {
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        ).then((result) => { if (result.isConfirmed) { location.reload() } });

                    }
                    else {
                        alert(result.message)
                    }
                }
            });

        }
    })
   


}

