$(document).ready(function () {
    $('#country-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Country/GetCountriesIdName',
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

    $("#addCountry").click(function () {

        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
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
            beforeSend: function () {
                $('#addCountry').attr('disabled', 'disabled');
            },
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
                    url: `https://api.instudy.net/api/Country/DeleteCountry?id=${id}`,
                    success: function (result) {
                        if (result.success == true) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            ).then((result) => { if (result.isConfirmed) { location.reload(); } });
                           
                        }
                        else {
                            alert(result.message)
                        }
                    }
                });
            
        }
    })
    //$.ajax({
    //    type: "PUT",
    //    url: `https://api.instudy.net/api/Country/DeleteCountry?id=${id}`,
    //    success: function (result) {
    //        if (result.success == true) {
    //            location.href = `/Admin/Country/CountryList`;
    //        }
    //        else {
    //            alert(result.message)
    //        }
    //    }
    //});


}