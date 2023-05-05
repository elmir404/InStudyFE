﻿$(document).ready(function () {
    var pathname = window.location.pathname;
    console.log(pathname);
    const linkValues = pathname.split("/");

    var $form = $('#updateForm')
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/PartnerFront/GetPartnerFront?id=${linkValues[4]}`,
        success: function (data) {


            $form.empty()

            $form.append(
                `
                        <input type="hidden" id="programId" value="${data.data.id}" class="form-control">

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
                          
                        
                        `
            );
            $('.content').richText();
            $('.content2').richText();
            $('.content3').richText();
            $('.content4').richText();



        }
    })
    $("#update").click(function () {
        var programId = $("#programId").val();
        var formData = new FormData();
        formData.append('AzHeader', $("#azHeader").val());
        formData.append('RuHeader', $("#ruHeader").val());
        formData.append('EnHeader', $("#enHeader").val());



        $.ajax({
            type: "PUT",
            url: `https://api.instudy.net/api/PartnerFront/UpdatePartnerFront?id=${programId}`,
            data: formData,
            processData: false,  // tell jQuery not to process the data
            contentType: false,
            beforeSend: function () {
                setTimeout(function delay() {
                    $('#updateHeader').attr('disabled', 'disabled');
                }, 1500);
            },
            complete: function (response) {
                if (response.status == 200) {
                    location.href = "/Admin/Header/PartnersHeader"
                }
                else {
                    alert("error")
                }

            },
        });


    });
});