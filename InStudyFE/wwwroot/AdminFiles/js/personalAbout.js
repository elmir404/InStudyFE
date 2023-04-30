$(document).ready(function () {
    
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

    $("#addPersonalAbout").click(function () {
        console.log("sadsads sdsdasd sdadasdsad");

        var formData = new FormData();
        formData.append('phone1', $("#phone1").val());
        formData.append('phone2', $("#phone2").val());
        formData.append('email', $("#personalEmail").val());
        formData.append('city', $("#personalCity").val());
        formData.append('district', $("#personalDistrict").val());
        formData.append('street', $("#personalStreet").val());
        formData.append('instagramLink', $("#personalInstagram").val());
        formData.append('facebookLink', $("#personalFacebook").val());
        formData.append('youtubeLink', $("#personalYoutube").val());
        formData.append('twitterLink', $("#personalTwitter").val());
        console.log(formData);
        $.ajax({
            type: "POST",
            url: 'https://localhost:7223/api/PersonalAbout/AddPersonalAbout',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addPersonalAbout').attr('disabled', 'disabled');
            },
            complete: function (response) {
                console.log(response.responseJSON);
                if (response.responseJSON.success==true) {
                 location.href = "/FainaAdmin/About/Personal"
                }
                else if (response.responseJSON.message == "required") {
                    alert("* ilə işarələnmiş bütün bölmələr doldurulmalıdı.")
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
                url: `https://localhost:7223/api/PersonalAbout/DeleteAbout?aboutId=${about}`,
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

