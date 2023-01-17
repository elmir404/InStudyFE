$(document).ready(function () {
    $('#country-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Country/GetActiveCountries',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'countryFiles', render: function (data, type, row, meta) {
                    console.log("dsds", data);
                    return `
                      <td><img alt="https://api.instudy.net/${data[0]?.path}" style="width:200px !important;" class="text-center img-responsive" src="https://api.instudy.net/${data[0]?.path}"></td>

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
        formData.append('CurrentStudents', $("#CurrentStudents").val());
        formData.append('Population', $("#Population").val());
        formData.append('AzWorkPermit', $("#WorkPermitAz").val());
        formData.append('EnWorkPermit', $("#WorkPermitEn").val());
        formData.append('RuWorkPermit', $("#WorkPermitRu").val());
        formData.append('AzStudy', $("#StudyAz").val());
        formData.append('EnStudy', $("#StudyEn").val());
        formData.append('RuStudy', $("#StudyRu").val());
        formData.append('AzLiving', $("#LivingAz").val());
        formData.append('EnLiving', $("#LivingEn").val());
        formData.append('RuLiving', $("#LivingRu").val());
        formData.append('AzAbout', $("#AboutAz").val());
        formData.append('EnAbout', $("#AboutEn").val());
        formData.append('RuAbout', $("#AboutRu").val());
        formData.append('AzStudentVisa', $("#StudentVisaAz").val());
        formData.append('EnStudentVisa', $("#StudentVisaEn").val());
        formData.append('RuStudentVisa', $("#StudentVisaRu").val());
        formData.append('AzLiving', $("#LivingAz").val());
        formData.append('EnLiving', $("#LivingEn").val());
        formData.append('RuLiving', $("#LivingRu").val());
        formData.append('isActive','True');
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
        type: "PUT",
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