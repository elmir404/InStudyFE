$(document).ready(function () {
    $('#speciality-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Speciality/GetActiveSpecialities',
            dataSrc: 'data'
        },
        bAutoWidth: false,
        aoColumns: [
            { sWidth: '15%' },
            { sWidth: '15%' },
            { sWidth: '15%' },
            { sWidth: '15%' },
            { sWidth: '15%' },
            { sWidth: '15%' },
            { sWidth: '10%' }
        ],
        columns: [
            {
                data: 'azName',
            },
            {
                data: 'ruName',
            },
            {
                data: 'enName',
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
   

    $("#addSpeciality").click(function () {
        var formData = new FormData();
        var direction = $("#directionid").val();
        
        formData.append('AzName', $("#azHeader").val());
        formData.append('RuName', $("#ruHeader").val());
        formData.append('EnName', $("#enHeader").val());
        formData.append('AzDescription', tinymce.get("azDescription").getContent());
        formData.append('EnDescription', tinymce.get("enDescription").getContent());
        formData.append('RuDescription', tinymce.get("ruDescription").getContent());
        for (var i = 0; i < direction.length; i++) {
            formData.append('DirectionIds', direction[i]);
        }
       

        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Speciality/AddSpeciality',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addSpeciality').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Speciality/SpecialityList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
    $('#speciality-datatable').on('click', '.remove', function () {
        var table = $('#speciality-datatable').DataTable();
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
                    type: "PUT",
                    url: `https://api.instudy.net/api/Speciality/DeleteSpeciality?id=${id}`,
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
function Edit(id) {

    localStorage.setItem('specialityId', id);
    location.href = `/Admin/Speciality/UpdateSpeciality`;

}
