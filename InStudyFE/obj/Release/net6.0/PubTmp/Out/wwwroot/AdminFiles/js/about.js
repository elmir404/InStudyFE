$(document).ready(function () {
    $('#about-datatable').DataTable({
        ajax: {
            url: 'https://fainablogapi.herokuapp.com/api/About/GetAbouts',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'files', render: function (data, type, row, meta) {
                    console.log("dsds", data);
                    return `
                      <td><img alt="${data[0].fileName}" style="width:200px !important;" class="text-center img-responsive" src="${data[0].path}"></td>

                        `;



                }
            },
            {
                data: 'title',
            },
            { data: 'description' },
            { data: 'instagramLink' },
            { data: 'categoryName' },
            {
                data: 'id', render: function (data, type, row, meta) {
                    return `
                        <div class="btn-list">
                            <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>

                            </button>
                            <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-success">
                                <i class="fe fe-eye"></i>
                            </button>
                        </div>

                        `;



                }
            },




        ]
    });
    $('#personal-datatable').DataTable({
        ajax: {
            url: 'https://localhost:7223/api/PersonalAbout/GetAbouts',
            dataSrc: 'data'
        },
        columns: [
            {
                data: 'phone1',
            },
            { data: 'email' },
            { data: 'city' },
            { data: 'street' },
            { data: 'instagramLink' },
            { data: 'facebookLink' },
            {
                data: 'id', render: function (data, type, row, meta) {
                    return `
                        <div class="btn-list">
                            <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>

                            </button>
                            <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-success">
                                <i class="fe fe-eye"></i>
                            </button>
                        </div>

                        `;



                }
            },




        ]
    });

    $("#addAbout").click(function () {

        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('Description', $("#description").val());
        formData.append('Header', $("#title").val());
        formData.append('InstagramLink', $("#instaLink").val());
        formData.append('CategoryId', $("#category").val());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        console.log(formData);

        $.ajax({
            type: "POST",
            url: 'https://fainablogapi.herokuapp.com/api/About/AddAbouts',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/FainaAdmin/About/AboutList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
      
});
function Edit(about) {

    localStorage.setItem('aboutDetail', about);
    location.href = `/FainaAdmin/About/AboutDetail`;

}  
function Delete(about) {

    $.ajax({
        type: "DELETE",
        url: `https://fainablogapi.herokuapp.com/api/About/DeleteAbout?aboutId=${about}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/FainaAdmin/About/AboutList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}

