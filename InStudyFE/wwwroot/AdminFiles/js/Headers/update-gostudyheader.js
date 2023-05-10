$(document).ready(function () {
    var pathname = window.location.pathname;
    console.log(pathname);
    const linkValues = pathname.split("/");

    var $partnerForm = $('#goStudyHeaderForm')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/GoStudyFront/GetGoStudyFrontById?id=${partnerId}`,
        success: function (data) {

            console.log(data);
            $partnerForm.empty()

            $partnerForm.append(
                `
                        <input type="hidden" id="partnerId" value="${data.data.id}" class="form-control">
                            <!--Row-->
                            <div class="row">
                                <label class="col-md-3 form-label mb-4">About Upload :</label>
                                <div class="col-md-9">
                                     <input id="files" type="file" name="files" onchange="document.getElementById('output').src = window.URL.createObjectURL(this.files[0])"  accept=".jpg, .png, image/jpeg, image/png">
                                      <img id="output" src="https://api.instudy.net/${data.data.gostudyFiles[0]?.path}" width="100" height="100">
                                </div>
                            </div>
                        
                        `
            )
            $('.content').richText();
            $('.content2').richText();
            $('.content3').richText();
            $('.content4').richText();
            $('.content5').richText();
            $('.content6').richText();
            $('.content7').richText();
            $('.content8').richText();


        }
    })
    $("#updateHeader").click(function () {
        var partnerId = $("#partnerId").val();
        var files = $("#files").get(0).files;
        var formData = new FormData();
       
        for (var i = 0; i < files.length; i++) {
            formData.append('Files', files[i]);
        }

        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/GoStudyFront/UpdateGoStudyFront?id=${partnerId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                $('#updatePartner').attr('disabled', 'disabled');
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/GoStudy/HeaderList"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});