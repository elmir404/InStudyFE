﻿$(document).ready(function () {
    $('#directionsheader-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/DirectionFront/GetAllDirectionFront',
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

    $("#addDirectionsHeader").click(function () {


        var formData = new FormData();
        formData.append('AzHeader', $("#azHeader").val());
        formData.append('RuHeader', $("#ruHeader").val());
        formData.append('EnHeader', $("#enHeader").val());
       
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/DirectionFront/AddDirectionFront',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Header/DirectionHeader"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(about) {

    localStorage.setItem('goStudyId', about);
    location.href = `/Admin/GoStudy/UpdateGoStudy`;

}
function Delete(about) {

    $.ajax({
        type: "DELETE",
        url: `https://api.instudy.net/api/DirectionFront/DeleteDirectionFront?id=${about}`,
        success: function (result) {
            if (result.success == true) {
              /*  location.href = `/Admin/Header/DirectionHeader`;*/
            }
            else {
                alert(result.message)
            }
        }
    });


}

