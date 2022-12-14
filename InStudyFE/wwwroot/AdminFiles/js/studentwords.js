$(document).ready(function () {
    $('#comments-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/StudentWords/GetActiveStudentWords',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'name',
            },
            {
                data: 'description',
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
    $("#addWords").click(function () {
        var formData = new FormData();
        formData.append('Name', $("#azHeader").val());
        formData.append('Description', $("#azDescription").val());
        formData.append('CountryId', $("#country").val());
       
        console.log(formData);

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/StudentWords/AddStudentWords',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    //location.href = "/FainaAdmin/Blog/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});
function Edit(id) {

    localStorage.setItem('commentId', id);
    location.href = `/Admin/StudentWords/UpdateComments`;

}
function Delete(id) {

    $.ajax({
        type: "DELETE",
        url: `https://api.instudy.net/api/StudentWords/DeleteStudentWords?id=${id}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/StudentWords/List`;
            }
            else {
                alert(result.message)
            }
        }
    });


}