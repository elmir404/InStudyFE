$(document).ready(function () {
    $('#user-datatable').DataTable({
        ajax: {
            url: 'https://fainablogapi.herokuapp.com/api/Users/GetUsers',
            dataSrc: 'data'
        },
        columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'surname' },
            { data: 'userName' },
            { data: 'email' },
            
           




        ]
    });

    $(document).on('click', '#addClaim', async function () {
        var id = $("#userId").val();
        var name = $("#claimName").val();
        var type = $("#claimType").val();
        $.ajax({
            type: "POST",
            url: 'https://fainablogapi.herokuapp.com/api/Meets/AddMeet',
            contentType: 'application/json',
            data: JSON.stringify({

                userId: id,
                claimName: name,
                claimType: type,


            }),
            success: function (response) {
                if (response.success == true) {
                    location.href = "/FainaAdmin/User/List"
                } else {
                    alert(response.message);
                }
            },

        });
       





    });

 });
    //get();

