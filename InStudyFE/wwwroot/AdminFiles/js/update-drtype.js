$(document).ready(function () {
    const aboutId = localStorage.getItem('durationTypeId');

    var $form = $('#form')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/About/GetAboutWithId?id=${aboutId}`,
        success: function (data) {

            console.log(data);
            $form.empty()

            $form.append(
                `
                        <input type="hidden" id="typeId" value="${data.data.id}" class="form-control">

                     <div class="row mb-4">
                                <label class="col-md-3 form-label">Duration date :</label>
                                <div class="col-md-9">
                                    <input type="text" id="durationType" value="${data.data.Date}" class="form-control" placeholder="Duration date">
                                </div>
                            </div>
                     
                         
                        
                        `
            )
          


        }
    })
    $("#updateDurationType").click(function () {
        var typeId = $("#typeId").val();
        var formData = new FormData();
        formData.append('Date', $("#durationType").val());


        

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/DurationDate/UpdateDurationDate?id=${typeId}`,
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