$(document).ready(function () {
    $('#duration-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Duration/GetDurationes',
            dataSrc: 'data'
        },
        columns: [

            {
                data: 'phone',
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
  
    $("#addduration").click(function () {


        var formData = new FormData();
        formData.append('AzHeader', $("#azHeader").val());
        formData.append('RuHeader', $("#ruHeader").val());
        formData.append('EnHeader', $("#enHeader").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Duration/AddDuration',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/GoStudy/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(about) {

    localStorage.setItem('aboutId', about);
    location.href = `/Admin/About/UpdateAbout`;

}
function Delete(about) {

    $.ajax({
        type: "PUT",
        url: `https://api.instudy.net/api/AboutCompany/DeleteAboutCompany?id=${about}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/About/AboutList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}

