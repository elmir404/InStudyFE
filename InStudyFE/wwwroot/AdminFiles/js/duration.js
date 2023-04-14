$(document).ready(function () {
    $('#duration-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/Duration/GetActiveDurationes',
            dataSrc: 'data'
        },
        columns: [

            {
                data: 'durationDate', render: function (data, type, row, meta) {
                    return `
                           <td>${data.date}</td>

                        `;



                }
            },
            {
                data: 'educationProgram', render: function (data, type, row, meta) {
                    return `
                           <td>${data.azName}</td>

                        `;



                }
            },
            {
                data: 'speciality', render: function (data, type, row, meta) {
                    return `
                           <td>${data.azName}</td>

                        `;



                }
            },
            {
                data: 'university', render: function (data, type, row, meta) {
                    return `
                           <td>${data.azName}</td>

                        `;



                }
            },
           
            {
                data: 'id', render: function (data, type, row, meta) {
                    return `
                        <div class="btn-list">
                            <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn btn-sm btn-danger">
                                <span class="fe fe-trash-2"> </span>

                            </button>
                            
                        </div>

                        `;



                }
            },




        ]
    });
 
    $("#addDuration").click(function () {


        var formData = new FormData();
        formData.append('UniversityId', $("#University").val());
        formData.append('EducationProgramId', $("#EducationProgram").val());
        formData.append('SpecialityId', $("#Speciality").val());
        formData.append('DurationDateId', $("#DurationDate").val());
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/Duration/AddDuration',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#addDuration').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Duration/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });


});
function Edit(id) {

    localStorage.setItem('aboutId', id);
    location.href = `/Admin/Duration/UpdateDuration`;

}
function Delete(id) {
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
                url: `https://api.instudy.net/api/AboutCompany/DeleteAboutCompany?id=${id}`,
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

