
$(document).ready(function () {
    $('#durationtype-datatable').DataTable({
        ajax: {
            url: 'https://api.instudy.net/api/DurationDate/GetActiveDurationDates',
            dataSrc: 'data'
        },
        columns: [

            {
                data: 'id',
            },
            {
                data: 'date',
            },

            {
                data: 'id', render: function (data, type, row, meta) {
                    return `
                        <div class="btn-list">
                           
                            <button onclick=Edit(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-success">
                                <i class="fe fe-edit"></i>
                            </button>
                        <button onclick=Delete(${JSON.stringify(data)}) type="button" class="btn  btn-sm btn-success">
                                                        <i class="fe fe-edit"></i>
                                                    </button>
                                                </div>

                        `;



                }
            },




        ]
    });

    $("#addDurationType").click(function () {


        var formData = new FormData();
        formData.append('Date', $("#durationType").val());
        
        $.ajax({
            type: "POST",
            url: 'https://api.instudy.net/api/DurationDate/AddDurationDate',
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Duration/DurationTypeList"
                }
                else {
                    alert("error")
                }

            },
        });


    });

});
function Edit(id) {

    localStorage.setItem('durationTypeId',id);
    location.href = `/Admin/Duration/UpdateDurationType`;

}
function Delete(id) {

    $.ajax({
        type: "PUT",
        url: `https://api.instudy.net/api/DurationDate/DeleteDurationDate?id=${id}`,
        success: function (result) {
            if (result.success == true) {
                location.href = `/Admin/Duration/DurationTypeList`;
            }
            else {
                alert(result.message)
            }
        }
    });


}

