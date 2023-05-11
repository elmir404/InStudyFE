$(document).ready(function () {
    $('#questionpage-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/AboutQuestion/GetAllAboutQuestions',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'azHeader',
            },
            {
                data: 'azBody',
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

    $("#addShowedQuestion").click(function () {

        var questions = $("#questions").val();
        var formData = new FormData();
        formData.append('AzHeader', $("#azheader").val());
        formData.append('RuHeader', $("#ruheader").val());
        formData.append('EnHeader', $("#enheader").val());
        formData.append('AzBody', tinymce.get("azDescription").getContent());
        formData.append('EnBody', tinymce.get("enDescription").getContent());
        formData.append('RuBody', tinymce.get("ruDescription").getContent());
        for (var i = 0; i < questions.length; i++) {
            formData.append('questionIds', questions[i]);
        }

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/AboutQuestion/AddAboutQuestion',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addShowedQuestion').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Content/PageQuestion"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(content) {

    localStorage.setItem('pageQuestionId', content);
    location.href = `/Admin/Content/UpdateShowedQuestions`;

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
                type: "DELETE",
                url: `https://api.instudy.net/api/AboutQuestion/DeleteAboutQuestion?id?id=${id}`,
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
