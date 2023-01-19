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
        var formdata = new FormData();
        formdata.append('AzHeader', $("#azheader").val());
        formdata.append('RuHeader', $("#ruheader").val());
        formdata.append('EnHeader', $("#enheader").val());
        formdata.append('AzBody', $("#azdescription").val());
        formdata.append('EnBody', $("#endescription").val());
        formdata.append('RuBody', $("#rudescription").val());
        for (var i = 0; i < questions.length; i++) {
            formdata.append('questionIds', questions[i]);
        }
        console.log(formdata);

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/AboutQuestion/AddAboutQuestion',
            data: formdata,
            processdata: false,  // tell jquery not to process the data
            contenttype: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/admin/Content/PageQuestion"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(content) {

    localStorage.setItem('contentId', content);
    location.href = `/Admin/Content/UpdateShowedQuestions`;

}
function Delete(id) {

    $.ajax({
        type: "DELETE",
        url: `https://api.instudy.net/api/AboutQuestion/DeleteAboutQuestion?id=${id}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/admin/Content/PageQuestion`;
            }
            else {
                alert(result.message)
            }
        }
    });


}
