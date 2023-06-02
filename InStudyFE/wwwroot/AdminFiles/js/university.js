$(document).ready(function () {
    $('#university-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/University/GetActiveUniversities',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'universityFiles', render: function (data, type, row, meta) {
                    console.log("dsds", data);
                    return `
                      <td><img alt="data:image/png;base64,${data[0]?.path}" style="width:200px !important;" class="text-center img-responsive" src="https://api.instudy.net/${data[0]?.path}"></td>

                        `;



                }
            },
            {
                data: 'azName',
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

   
  

    $("#addUniversty").click(function () {

        var files = $("#files").get(0).files;
        var program = $("#program").val();
        var direction = $("#direction").val();
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('AzDescription', tinymce.get("azDescription").getContent());
        formData.append('EnDescription', tinymce.get("enDescription").getContent());
        formData.append('RuDescription', tinymce.get("ruDescription").getContent());
        formData.append('countryId', $("#country").val());
        formData.append('AzAddress', $("#azAdrress").val());
        formData.append('EnAddress', $("#enAdrress").val());
        formData.append('RuAddress', $("#ruAdrress").val());
        formData.append('AzCity', $("#azCity").val());
        formData.append('EnCity', $("#enCity").val());
        formData.append('RuCity', $("#ruCity").val());
        formData.append('AzBachelor', tinymce.get("azBachelor").getContent());
        formData.append('EnBachelor', tinymce.get("enBachelor").getContent());
        formData.append('RuBachelor', tinymce.get("ruBachelor").getContent());
        formData.append('AzMaster', tinymce.get("azMaster").getContent());
        formData.append('RuMaster', tinymce.get("ruMaster").getContent());
        formData.append('EnMaster', tinymce.get("enMaster").getContent());

        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        for (var i = 0; i < program.length; i++) {
            formData.append('ProgramIds', program[i]);
        }
        for (var i = 0; i < direction.length; i++) {
            formData.append('DirectionIds', direction[i]);
        }
        var html1 = [];
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/University/CreateUniversity',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addUniversty').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {


                    $('#specialityBtn').show();
                    $('#universityId').val(response.responseJSON.data);
                    debugger;
                    var formData1 = new FormData();
                    for (var i = 0; i < direction.length; i++) {
                        formData1.append('DirectionIds', direction[i]);
                    }
                    $.ajax({
                        type: "POST",
                        url: `https://api.instudy.net/api/Speciality/SearchSpeciality?currentPage=1&pageSize=100`,
                        processData: false,
                        contentType: false,
                        cache: false,
                        data: formData1,
                        enctype: 'multipart/form-data',
                    })
                        .done(function (response) {
                            // Make sure that the formMessages div has the 'success' class.
                            if (response.success == true) {

                                debugger;
                               


                                    $.each(

                                        response.data.value, function (p, value) {
                                            html1.push(
                                                `
                                                                                <option value="${value.id}">${value.enName}</option>

                                                                             `
                                            );


                                        });
                                
                               


                            }
                            $('#specialityList').html(html1.join('')).multipleSelect();

                        })
                        .fail(function (data) {
                            // Make sure that the formMessages div has the 'error' class.
                            toastr.warning("An error ocured!");
                        });

                }
                else {
                    alert("error")
                }

            },
        });


    });
    $("#addUniSpec").click(function () {
        var formData = new FormData();
        var spec = $("#program").val();
        var uniID = $("#universityId").val();
        for (var i = 0; i < spec.length; i++) {
            formData.append('SpecialityIds', spec[i]);
        }

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/University/AddSpeciality?id=${uniID}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addUniSpec').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {

                    location.href = "/Admin/University/UniversityList"
                   
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(university) {
    debugger;
    location.href = `/Admin/University/UpdateUniversity?uniId=${university}`;

}
function Delete(university) {
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
                url: `https://api.instudy.net/api/University/DeleteUniversity?id=${university}`,
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
 


}