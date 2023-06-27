$(document).ready(function () {
    $('#question-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Question/GetQuestions',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'azQuestionTitle',
            },
            {
                data: 'enQuestionTitle',
            },
            {
                data: 'ruQuestionTitle',
            },
           
            {
                data: 'id', render: function (data, type, row, meta) {
                    return `
                            <div class="btn-list">
                                <button id="${JSON.stringify(data)}" type="button" class="btn remove   btn-sm btn-danger">
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

    $("#addQuestion").click(function () {
        var formData = new FormData();
        formData.append('AzQuestionTitle', $("#azQuestion").val());
        formData.append('RuQuestionTitle', $("#ruQuestion").val());
        formData.append('EnQuestionTitle', $("#enQuestion").val());
        formData.append('AzQuestionAnswer', tinymce.get("azAnswer").getContent());
        formData.append('EnQuestionAnswer', tinymce.get("enAnswer").getContent());
        formData.append('RuQuestionAnswer', tinymce.get("ruAnswer").getContent());
        console.log(formData);

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Question/AddQuestion',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addQuestion').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Content/QuestionList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
    $('#question-datatable').on('click', '.remove', function () {
        var table = $('#question-datatable').DataTable();
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
                    type: "DELETE",
                    url: `https://api.instudy.net/api/Question/DeleteQuestion?id=${id}`,
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
function Edit(content) {

    localStorage.setItem('questionId', content);
    location.href = `/Admin/Content/UpdateQuestion`;

}

