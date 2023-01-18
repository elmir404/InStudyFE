$(document).ready(function () {
    const aboutId = localStorage.getItem('aboutId');

    var $aboutForm = $('#aboutForm')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/AboutCompany/GetAboutCompany?id=${aboutId}`,
        success: function (data) {

            console.log(data);
            $aboutForm.empty()

            $aboutForm.append(
                `
                        <input type="hidden" id="aboutId" value="${data.data.id}" class="form-control">

                     <div class="row mb-4">
                                          <label class="col-md-3 form-label">Adress:</label>
                                            <div class="col-md-9">
                                                <input type="text" value="${data.data.adress}" id="address" class="form-control" placeholder="Title Name">
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                           <label class="col-md-3 form-label">Phone:</label>
                                            <div class="col-md-9">
                                                <input type="text" value="${data.data.phone}" id="phone" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                        <label class="col-md-3 form-label">Email:</label>
                                            <div class="col-md-9">
                                                <input type="text" value="${data.data.email}" id="email" class="form-control">
                                            </div>
                                        </div> 
                                        <div class="row mb-4">
                                          <label class="col-md-3 form-label">Map Adress:</label>
                                            <div class="col-md-9">
                                                <input type="text" value="${data.data.mapAdress}" id="mapAddress" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label class="col-md-3 form-label">Instagram Link :</label>
                                            <div class="col-md-9">
                                                <input type="text" value="${data.data.instagramLink}" id="instaLink" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label class="col-md-3 form-label">Facebook Link :</label>
                                            <div class="col-md-9">
                                                <input type="text" value="${data.data.facebookLink}" id="faceLink" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label class="col-md-3 form-label">Twitter Link :</label>
                                            <div class="col-md-9">
                                                <input type="text" value="${data.data.twitterLink}" id="twitLink" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label class="col-md-3 form-label">Youtube Link :</label>
                                            <div class="col-md-9">
                                                <input type="text" value="${data.data.youtubeLink}" id="youtubeLink" class="form-control">
                                            </div>
                                        </div> 
                                        <div class="row mb-4">
                                       
                                        <div class="row mb-4">
                                        <label class="col-md-3 form-label">Linkedin Link:</label>
                                            <div class="col-md-9">
                                                <input type="text" value="${data.data.linkedinLink}" id="linkedLink" class="form-control">
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                          <label class="col-md-3 form-label">Telegram Link:</label>
                                            <div class="col-md-9">
                                                <input type="text" value="${data.data.telegramLink}" id="telLink" class="form-control">
                                            </div>
                                        </div>
                         
                        
                        `
            )
            


        }
    })
    $("#updateAbout").click(function () {
        var aboutId = $("#aboutId").val();

        formData.append('Adress', $("#address").val());
        formData.append('Phone', $("#phone").val());
        formData.append('Email', $("#email").val());
        formData.append('MapAdress', $("#mapAddress").val());
        formData.append('InstagramLink', $("#instaLink").val());
        formData.append('FacebookLink', $("#faceLink").val());
        formData.append('YoutubeLink', $("#youtubeLink").val());
        formData.append('TwitterLink', $("#twitLink").val());
        formData.append('LinkedinLink', $("#linkedLink").val());
        formData.append('TelegramLink', $("#telLink").val());
        formData.append('isActive', 'True');

        console.log(formData);

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/AboutCompany/UpdateAboutCompany?id=${aboutId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/GoStudy/List"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});