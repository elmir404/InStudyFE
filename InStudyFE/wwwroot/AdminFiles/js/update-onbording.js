$(document).ready(function () {
    const Id = localStorage.getItem('onboardingId');

    var $form = $('#form')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Header/GetHeader?id=${Id}`,
        success: function (data) {

            console.log(data);
            $form.empty()

            $form.append(
                `
                        <input type="hidden" id="Id" value="${data.data.id}" class="form-control">

                     <div class="row mb-4">
                                <label class="col-md-3 form-label">Az Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azHeader" value="${data.data.azTitle}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Ru Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="ruHeader" value="${data.data.ruTitle}" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">En Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="enHeader" value="${data.data.enTitle}" class="form-control">
                                </div>
                            </div>

                            <!-- Row -->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Az Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="azDescription"  name="example">${data.data.azDescription}</textarea>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">Ru Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content2" id="ruDescription"  name="example">${data.data.ruDescription}</textarea>
                                </div>
                            </div> <div class="row">
                                <label class="col-md-3 form-label mb-4">En Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content3" id="enDescription"  name="example">${data.data.enDescription}</textarea>
                                </div>
                            </div>
                            <!--Row-->
                            
                        
                        `
            );
            $('.content').richText();
            $('.content2').richText();
            $('.content3').richText();
            $('.content4').richText();
            



        }
    })
    $("#updateOnboarding").click(function () {
        var onId = $("#Id").val();
        
        var formData = new FormData();
        formData.append('AzTitle', $("#azHeader").val());
        formData.append('RuTitle', $("#ruHeader").val());
        formData.append('EnTitle', $("#enHeader").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        formData.append('IsActive', true);
        
        

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/Header/UpdateHeader?id=${onId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#updateOnboarding').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Content/OnboardingList" 
                }
                else {
                    alert("error")
                }

            },
        });


    });
});