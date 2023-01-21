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
        formData.append('stCount', $("#StudentCount").val());
        formData.append('AcademicStaff', $("#acdmStaff").val());
        formData.append('StartDate', $("#startDate").val());
        formData.append('ApplyDate', $("#applyDate").val());
        formData.append('Rank', $("#rank").val());
        formData.append('stCount', $("#azBachelor").val());
        formData.append('stCount', $("#ruBachelor").val());
        formData.append('stCount', $("#enBachelor").val());
        formData.append('stCount', $("#azMaster").val());
        formData.append('stCount', $("#ruMaster").val());
        formData.append('stCount', $("#enMaster").val());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        for (var i = 0; i < program.length; i++) {
            formData.append('programIds', program[i]);
        }
        for (var i = 0; i < direction.length; i++) {
            formData.append('directionIds', direction[i]);
        }

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/University/CreateUniversity',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Universty/UniverstyList"
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