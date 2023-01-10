$(document).ready(function () {
    $('#about-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/About/GetAbouts',
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
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        formData.append('InstagramLink', $("#instaLink").val());
        formData.append('FacebookLink', $("#faceLink").val());
        formData.append('TwitterLink', $("#twitLink").val());
        formData.append('YoutubeLink', $("#youtubeLink").val());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        console.log(formData);

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/About/AddAbouts',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/About/AboutList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
      
});
function Edit(about) {

    localStorage.setItem('aboutId', about);
    location.href = `/Admin/About/UpdateAbout`;

}  
function Delete(about) {

    $.ajax({
        type: "DELETE",
        url: `https://api.instudy.net/api/About/DeleteAbout?aboutId=${about}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/About/AboutList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}

