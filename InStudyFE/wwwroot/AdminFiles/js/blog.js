$(document).ready(function () {
    $('#blog-datatable').DataTable({
        ajax: {
            url: 'https://fainablogapi.herokuapp.com/api/Blogs/GetBlogs',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'files', render: function (data, type, row, meta) {
                    console.log("dsds",data);
                    return `
                                                        <td><img alt="${data[0].fileName}" w-100 class="text-center img-responsive" src="${data[0].path}"></td>

                        `;



                }
            },
            {
                data: 'title',
            },
            { data: 'description' },
            {
                data: 'id', render: function (data, type, row, meta) {
                    return ` <div class="btn-list">
                <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-primary">
                    <i class="fe fe-eye"></i>
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
        formData.append('Title', $("#title").val());
        formData.append('Description', $("#description").val());
        formData.append('CategoryId', 1);
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        console.log(formData);

        $.ajax({
            type: "POST",
            url: 'https://fainablogapi.herokuapp.com/api/Blogs/CreateBlog',
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
function Edit(blog) {

    localStorage.setItem('blogDetail', blog);
    location.href = `/FainaAdmin/Blog/BlogDetail`;

}
function Delete(blog) {

    $.ajax({
        type: "DELETE",
        url: `https://fainablogapi.herokuapp.com/api/Blogs/DeleteBlog?blogId=${blog}`, 
        success: function (result) {
            if (result.success == true) {
                location.href = `/FainaAdmin/Blog/List`;
            }
            else {
                alert(result.message)
            }
        }
    });
    

}