$(document).ready(function () {
    $('#user-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Users/GetUsers',
            dataSrc: 'data'
        },
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'surname' },
            { data: 'userName' },
            { data: 'email' },
            { data: 'position' },
            
           




        ]
    });

    $(document).on('click', '#addClaim', async function () {
        var id = $("#userId").val();
        var name = $("#claimName").val();
        var type = $("#claimType").val();
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Users/AddClaim',
            contentType: 'application/json',
            data: JSON.stringify({

                userId: id,
                claimName: name,
                claimType: type,


            }),
            success: function (response) {
                if (response.success == true) {
                    location.href = "/Admin/User/List"
                } else {
                    alert(response.message);
                }
            },

        });
       





    });

 });
    //get();

