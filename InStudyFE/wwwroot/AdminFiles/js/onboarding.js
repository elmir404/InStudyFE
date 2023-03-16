$(document).ready(function () {
    $('#onboarding-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Header/GetActiveHeaders',
            dataSrc: 'data'
        },
        columns: [

            {
                data: 'azTitle',
            },
            {
                data: 'ruTitle',
            },
            {
                data: 'enTitle',
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

    $("#addOnbarding").click(function () {


        var formData = new FormData();
        formData.append('AzTitle', $("#azHeader").val());
        formData.append('EnTitle', $("#enHeader").val());
        formData.append('RuTitle', $("#ruHeader ").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        formData.append('isActive', 'True');
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Header/AddHeader',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Content/OnboardingList"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(id) {

    localStorage.setItem('onboardingId', id);
    location.href = `/Admin/Content/UpdateOnboarding`;

}
function Delete(id) {

    $.ajax({
        type: "PUT",
        url: `https://api.instudy.net/api/Header/DeleteHeader?id=${id}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Content/OnboardingList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}

