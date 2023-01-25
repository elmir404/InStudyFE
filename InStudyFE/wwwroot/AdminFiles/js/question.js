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

    $("#addQuestion").click(function () {
        var formData = new FormData();
        formData.append('AzQuestionTitle', $("#azQuestion").val());
        formData.append('RuQuestionTitle', $("#ruQuestion").val());
        formData.append('EnQuestionTitle', $("#enQuestion").val());
        formData.append('AzQuestionAnswer', $("#azDescription").val());
        formData.append('EnQuestionAnswer', $("#enDescription").val());
        formData.append('RuQuestionAnswer', $("#ruDescription").val());
       
        console.log(formData);

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Question/AddQuestion',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
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

});
function Edit(content) {

    localStorage.setItem('questionId', content);
    location.href = `/Admin/Content/UpdateQuestion`;

}
function Delete(id) {

    $.ajax({
        type: "DELETE",
        url: `https://api.instudy.net/api/Question/DeleteQuestion?id=${id}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Content/QuestionList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}
