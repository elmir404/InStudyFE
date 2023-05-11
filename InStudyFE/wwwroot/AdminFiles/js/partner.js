$(document).ready(function () {
    $('#partner-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Partner/GetActivePartners',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'partnerFiles', render: function (data, type, row, meta) {
                    console.log("dsds", data);
                    return `
                         <td><img alt="${data[0]?.fileName}" w-100 class="text-center img-responsive" src="https://api.instudy.net/${data[0]?.path}"></td>
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
                data: 'link',
            },   
            {
                data: 'id', render: function (data, type, row, meta) {
                    return ` <div class="btn-list">
                <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-primary">
                    <i class="fe fe-edit"></i>
                </button>
                <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-danger">
                    <span class="fe fe-trash-2"> </span>
                </button>
               
            </div>
                        `;



                }
            },




        ]
    });
    $("#addPartner").click(function () {
        console.log("sadsadsa");
        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('Link', $("#partnerLink").val());

        formData.append('AzDescription', tinymce.get("azDescription").getContent());
        formData.append('EnDescription', tinymce.get("enDescription").getContent());
        formData.append('RuDescription', tinymce.get("ruDescription").getContent());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        console.log(formData);

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Partner/AddPartner',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addPartner').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Partner/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});
function Edit(id) {

    localStorage.setItem('partnerId', id);
    location.href = `/Admin/Partner/UpdatePartner`;

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
                url: `https://api.instudy.net/api/Partner/DeletePartner?id=${id}`,
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