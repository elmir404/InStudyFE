$(document).ready(function () {
    $('#program-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Program/GetProgram',
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
                data: 'description',
            },
            {
                data: 'ruDescription',
            },
            {
                data: 'enDescription',
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
                                <i class="fe fe-eye"></i>
                            </button>
                        </div>

                        `;



                }
            },




        ]
    });

    $("#addProgram").click(function () {

        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
      
        console.log(formData);

        $.ajax({
            type: "POST",
            url: 'https://fainablogapi.herokuapp.com/api/About/AddAbouts',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/FainaAdmin/About/AboutList"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(id) {

    localStorage.setItem('programId', id);
    location.href = `/Admin/Program/UpdateProgram`;

}
function Delete(program) {

    $.ajax({
        type: "DELETE",
        url: `https://api.instudy.net/api/Program/DeleteProgram?programId=${program}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Program/ProgramList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}