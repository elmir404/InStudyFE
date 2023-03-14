$(document).ready(function () {
    $('#header-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Content/GetAllContents',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'contentFiles', render: function (data, type, row, meta) {
                    console.log("dsds", data);
                    return `
                             <td><img alt="https://api.instudy.net/${data[0]?.path}" style="width:200px !important;" class="text-center img-responsive" src="https://api.instudy.net/${data[0]?.path}"></td>
                           `;



                }   
            },
            {
                data: 'azHeader',
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
        
    $("#addHeader").click(function () {

        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzHeder', $("#azHeader").val());
        formData.append('RuHeader', $("#ruHeader").val());
        formData.append('EnHeader', $("#enHeader").val());
        formData.append('AzBody', $("#azDescription").val());
        formData.append('EnBody', $("#enDescription").val());
        formData.append('RuBody', $("#ruDescription").val());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Content/AddContent',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addHeader').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Content/HeaderList"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(id) {

    localStorage.setItem('contentId', id);
    location.href = `/Admin/Content/UpdateHeader`;

}
function Delete(id) {

    $.ajax({
        type: "DELETE",
        url: `https://api.instudy.net/api/Content/DeleteContent?id=${id}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Content/HeaderList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}