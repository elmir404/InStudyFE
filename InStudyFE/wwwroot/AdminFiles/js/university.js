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

   
  

    $("#addUniversty").click(function () {

        var files = $("#files").get(0).files;
        var program = $("#program").val();
        var direction = $("#direction").val();
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('Description', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        formData.append('countryId', $("#country").val());
        formData.append('Address', $("#uniAdrress").val());
        formData.append('MapAdrress', $("#uniMapAdrress").val());
        formData.append('StudentCount', $("#stCount").val());
        formData.append('AcademicStaff', $("#acdmStaff").val());
        formData.append('StartDate', $("#startDate").val());
        formData.append('ApplyDate', $("#applyDate").val());
        formData.append('Rank', $("#rank").val());
        formData.append('AzBachelor', $("#azBachelor").val());
        formData.append('RuBachelor', $("#ruBachelor").val());
        formData.append('EnBachelor', $("#enBachelor").val());
        formData.append('AzMaster', $("#azMaster").val());
        formData.append('RuMaster', $("#ruMaster").val());
        formData.append('EnMaster', $("#enMaster").val());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        for (var i = 0; i < program.length; i++) {
            formData.append('ProgramIds', program[i]);
        }
        for (var i = 0; i < direction.length; i++) {
            formData.append('DirectionIds', direction[i]);
        }

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

    localStorage.setItem('universityId', university);
    location.href = `/Admin/University/UpdateUniversity`;

}
function Delete(university) {

    $.ajax({
        type: "PUT",
        url: `https://api.instudy.net/api/University/DeleteUniversity?id=${university}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/University/UniversityList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}