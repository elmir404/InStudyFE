$(document).ready(function () {
    $('#university-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/University/GetAllUniversities',
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
                data: 'azDescription',
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
        var speciality = $("#speciality").val();
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
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        for (var i = 0; i < speciality.length; i++) {
            formData.append('SpecialityIds', speciality[i]);
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
        type: "DELETE",
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