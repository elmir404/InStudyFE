$(document).ready(function () {
    $('#blog-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Blogs/GetBlogs',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'files', render: function (data, type, row, meta) {
                    console.log("dsds",data);
                    return `
                         <td><img alt="${data[0]?.fileName}" w-100 class="text-center img-responsive" src=""></td>
                        `;



                }
            },
            {
                data: 'azTitle',
            },
            {
                data: 'ruTitle',
            },
            {
                data: 'enTitle',
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
    $("#addBlog").click(function () {
        console.log("sadsadsa");
        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzTitle', $("#azHeader").val());
        formData.append('RuTite', $("#ruHeader").val());
        formData.append('EnHeader', $("#enHeader").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        console.log(formData);

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Blogs/CreateBlog',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Blog/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});
function Edit(blog) {

    localStorage.setItem('blogId', blog);
    location.href = `/Admin/Blog/UpdateBlog`;

}
function Delete(blog) {

    $.ajax({
        type: "DELETE",
        url: `https://api.instudy.net/api/Blogs/DeleteBlog?blogId=${blog}`, 
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Blog/List`;
            }
            else {
                alert(result.message)
            }
        }
    });
    

}