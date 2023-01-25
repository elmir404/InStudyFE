$(document).ready(function () {
    $('#aboutcomp-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/AboutCompany/GetActiveAboutCompanies',
            dataSrc: 'data'
        },
        columns: [

            {
                data: 'phone',
            },
            {
                data: 'email',
            },
            {
                data: 'adress',
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


        var formData = new FormData();
        formData.append('Adress', $("#address").val());
        formData.append('Phone', $("#phone").val());
        formData.append('Email', $("#email").val());
        formData.append('MapAdress', $("#mapAddress").val());
        formData.append('InstagramLink', $("#instaLink").val());
        formData.append('FacebookLink', $("#faceLink").val());
        formData.append('YoutubeLink', $("#youtubeLink").val());
        formData.append('TwitterLink', $("#twitLink").val());
        formData.append('LinkedinLink', $("#linkedLink").val());
        formData.append('TelegramLink', $("#telLink").val());
        formData.append('isActive', 'True');
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/AboutCompany/AddAboutCompany',
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
        type: "PUT",
        url: `https://api.instudy.net/api/AboutCompany/DeleteAboutCompany?id=${about}`,
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

