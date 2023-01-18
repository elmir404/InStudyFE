$(document).ready(function () {
    $('#duration-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Duration',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'azName',
            },
            {
                data: 'ruName',
            },
            {
                data: 'enName',
            },
            {
                data: 'azdescription',
            },
            {
                data: 'ruDescription',
            },
            {
                data: 'enDescription',
            },
            {
                data: 'id', render: function (data, type, row, meta) {
                    return `
                        <div class="btn-list">
                            <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-danger">
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

    $("#addDirection").click(function () {

        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        console.log(formData);

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Direction',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Direction/DirectionList"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(id) {

    localStorage.setItem('directionId', id);
    location.href = `/Admin/Direction/UpdateDirection`;

}
function Delete(id) {

    $.ajax({
        type: "DELETE",
        url: `https://api.instudy.net/api/Direction?id=${id}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `//Admin/Direction/DirectionList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}