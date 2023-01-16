$(document).ready(function () {
    $('#country-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Country/GetAllCountries',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'countryFiles', render: function (data, type, row, meta) {
                    console.log("dsds", data);
                    return `
                      <td><img alt="data:image/png;base64,${data[0]?.bytes}" style="width:200px !important;" class="text-center img-responsive" src="data:image/png;base64,${data[0]?.bytes}"></td>

                        `;



                }
            },
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
                data: 'id', render: function (data, type, row, meta) {
                    return `
                        <div class="btn-list">
                            <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>

                            </button>
                            <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-success">
                                <i class="fe fe-eye"></i>
                            </button>
                        </div>

                        `;



                }
            },




        ]
    });
    $('#personal-datatable').DataTable({
        ajax: {
            url: 'https://localhost:7223/api/PersonalAbout/GetAbouts',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'phone1',
            },
            { data: 'email' },
            { data: 'city' },
            { data: 'street' },
            { data: 'instagramLink' },
            { data: 'facebookLink' },
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

    $("#addCountry").click(function () {

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
            url: 'https://api.instudy.net/api/Country/AddCountry',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Country/CountryList"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(country) {

    localStorage.setItem('countryId', country);
    location.href = `/Admin/Country/UpdateCountry`;

}
function Delete(id) {

    $.ajax({
        type: "DELETE",
        url: `https://api.instudy.net/api/Country/DeleteCountry?id=${id}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Country/CountryList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}