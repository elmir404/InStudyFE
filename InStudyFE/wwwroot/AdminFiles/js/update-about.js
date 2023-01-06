$(document).ready(function () {
	const aboutId = localStorage.getItem('aboutId');

	var $aboutForm = $('#aboutForm')
	$.ajax({
		type: 'GET',
		headers: {
			'Content-Type': 'application/json'
		},
        url: `https://api.instudy.net/api/About/GetAboutWithId?id=${aboutId}`,
		success: function (data) {

			console.log(data);
            $aboutForm.empty()
			
			$aboutForm.append(
				`
                        <input type="hidden" id="aboutId" value="${data.data.id}" class="form-control">

                     <div class="row mb-4">
                                <label class="col-md-3 form-label">Az Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="azHeader" value="${data.data.azHeader}" class="form-control" placeholder="Title Name">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Ru Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="ruHeader" value="${data.data.ruHeader}" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">En Title :</label>
                                <div class="col-md-9">
                                    <input type="text" id="enHeader" value="${data.data.enHeader}" class="form-control">
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
                                    <textarea class="content" id="ruDescription"  name="example">${data.data.ruDescription}</textarea>
                                </div>
                            </div> <div class="row">
                                <label class="col-md-3 form-label mb-4">En Description :</label>
                                <div class="col-md-9 mb-4">
                                    <textarea class="content" id="enDescription"  name="example">${data.data.enDescription}</textarea>
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Instagram Link :</label>
                                <div class="col-md-9">
                                    <input type="text" id="instaLink" value="${data.data.instagramLink}" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Facebook Link :</label>
                                <div class="col-md-9">
                                    <input type="text" id="faceLink" value="${data.data.facebookLink}" class="form-control">
                                </div>
                            </div>
                            <div class="row mb-4">
                                <label class="col-md-3 form-label">Twitter Link :</label>
                                <div class="col-md-9">
                                    <input type="text" id="twitLink" value="${data.data.twitterLink}" class="form-control">
                                </div>
                            </div>
                            
                            <!--Row-->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">About Upload :</label>
                                <div class="col-md-9">
                                    <input id="files" type="file" name="files" accept=".jpg, .png, image/jpeg, image/png" multiple>
                                </div>
                            </div>
                        
                        `
			)



		}
    })
    $("#updateAbout").click(function () {
        var aboutId = $("#aboutId").val();
        var files = $("#files").get(0).files;
        var formData = new FormData();
        formData.append('AzHeader', $("#azHeader").val());
        formData.append('RuHeader', $("#ruHeader").val());
        formData.append('EnHeader', $("#enHeader").val());
        formData.append('AzDescription', $("#azDescription").val());
        formData.append('EnDescription', $("#enDescription").val());
        formData.append('RuDescription', $("#ruDescription").val());
        formData.append('InstagramLink', $("#instaLink").val());
        formData.append('FacebookLink', $("#faceLink").val());
        formData.append('TwitterLink', $("#twitLink").val());
        formData.append('YoutubeLink', $("#youtubeLink").val());
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }
        console.log(formData);

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/About/GetAboutWithId?id=${aboutId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/About/AboutList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});