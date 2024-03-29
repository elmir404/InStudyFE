﻿$(document).ready(function () {
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
                            <button id="${JSON.stringify(data)}" type="button" class="btn remove   btn-sm btn-danger">
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
        formData.append('AzWorkPermit', tinymce.get("WorkPermitAz").getContent());
        formData.append('EnWorkPermit', tinymce.get("WorkPermitEn").getContent());
        formData.append('RuWorkPermit', tinymce.get("WorkPermitRu").getContent() );
        formData.append('AzStudy', tinymce.get("StudyAz").getContent());
        formData.append('EnStudy', tinymce.get("StudyEn").getContent());
        formData.append('RuStudy', tinymce.get("StudyRu").getContent() );
        formData.append('AzLiving', tinymce.get("LivingAz").getContent());
        formData.append('EnLiving', tinymce.get("LivingEn").getContent() );
        formData.append('RuLiving', tinymce.get("LivingRu").getContent());
        formData.append('AzAbout', tinymce.get("AboutAz").getContent() );
        formData.append('EnAbout', tinymce.get("AboutEn").getContent() );
        formData.append('RuAbout', tinymce.get("AboutRu").getContent() );
        formData.append('AzStudentVisa', tinymce.get("StudentVisaAz").getContent() );
        formData.append('EnStudentVisa', tinymce.get("StudentVisaEn").getContent());
        formData.append('RuStudentVisa', tinymce.get("StudentVisaRu").getContent());
;
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
    $('#country-datatable').on('click', '.remove', function () {
        var table = $('#country-datatable').DataTable();
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
                    type: "PUT",
                    url: `https://api.instudy.net/api/Country/DeleteCountry?id=${id}`,
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
                                    debugger;
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
function Edit(country) {

    localStorage.setItem('countryId', country);
    location.href = `/Admin/Country/UpdateCountry`;

}
