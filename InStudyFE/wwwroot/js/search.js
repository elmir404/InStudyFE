$(document).ready(function () {
    var program = localStorage.getItem('program');
    var country = localStorage.getItem('country');
    var direction = localStorage.getItem('direction');
    const $lang = localStorage.getItem('lang');
    if ($lang == 'AZ') {
        var $notFount="Axtarışa uyğun univeristet tapılmadı!"
    }
    else if ($lang == 'EN') {
        var $notFount = "No university matching your search was found!";

    }
    else {
        var $notFount = "Университет, соответствующий вашему запросу, не найден!"


    }
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Speciality/GetSpecialities`,

        success: function (data) {
            $country.empty();
            $.each(
                data.data, function (i, value) {
                    console.log(value);
                    //const date = new Date(value.regDate)

                    //var dd = String(date.getDate()).padStart(2, '0');
                    //var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                    //var yyyy = date.getFullYear();
                    //var time = yyyy + "/" + mm + "/" + dd;

                    if ($lang == 'AZ') {
                        var name = value.azName
                        var description = value?.azDescription;

                    }
                    else if ($lang == 'EN') {
                        var name = value.enName
                        var description = value?.enDescription;

                    } else {
                        var name = value.ruName;
                        var description = value?.ruDescription;

                    }

                    $(`#disciplines`).append(
                        `
                                 <li data-v-a8327806=""><div class="" data-v-01633eac="" data-v-a8327806=""><label class="CheckboxRow" data-v-01633eac=""><div data-v-01633eac=""><input type="checkbox" class="CheckboxInput" data-filter="ci" value="30" data-v-01633eac=""><span data-v-01633eac="">United Kingdom</span></div><div class="FacetContainer" data-v-01633eac=""><span class="Facet" data-v-01633eac="">18626</span><div class="AreaSwitcher" data-v-01633eac=""><i class="ToggleIcon lnr-chevron-down" data-v-01633eac=""></i></div></div></label></div><ul class="AreaFilterWrapper" data-v-dd3ea9ca="" data-v-a8327806=""><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--><!--v-if--></ul></li>
                                         
                                         `
                    )

                }
            )

        }

    });
    console.log(program, country, direction);
    var formData = new FormData();
    formData.append('CountryName',country);
    formData.append('ProgramName',program);
    formData.append('DirectionName',direction);
    $.ajax({
        type: "POST",
        url: `https://api.instudy.net/api/University/SearchUniversity?currentPage=1&pageSize=10`,
        processData: false,
        contentType: false,
        cache: false,
        data: formData,
        enctype: 'multipart/form-data',
    })
        .done(function (response) {
            // Make sure that the formMessages div has the 'success' class.
            if (response.success == true) {
                $('#searchContent').empty();
                if (response.data.dataCount > 0) {
                    $.each(
                        response?.data.value, function (i, value) {
                            console.log("assa", value);

                            if ($lang == 'AZ') {
                                var name = value.azName
                                var description = value?.azDescription;

                            }
                            else if ($lang == 'EN') {
                                var name = value.enName
                                var description = value?.enDescription;

                            } else {
                                var name = value.ruName;
                                var description = value?.ruDescription;

                            }
                            /* var image = `data:image/png;base64,${value?.universityFiles[0]?.bytes}`*/


                            $('#searchContent').append(`
  <li class="HoverEffect SearchResultItem">
                              <a class="SearchStudyCard js-bestFitStudycard" href="/University/Detail/${value.id}" target="_blank" data-v-0363ab3a="">
                                 <article data-v-0363ab3a="">
                                    <header class="CardHeader" data-v-0363ab3a="">
                                       <h2 class="StudyName" data-v-0363ab3a="">${name}</h2>
                                    
                                    </header>
                                    <div class="StudyInfo" data-v-0363ab3a="">
                          
                                       <div class="SummaryContainer is-collapsed" data-v-0363ab3a="">
                                          <p class="Summary is-collapsed" data-v-0363ab3a="">${description}</p>
                                          <button type="button" class="ToggleDescription is-collapsed" data-v-0363ab3a=""><i class="ToggleIcon lnr-chevron-down" data-v-0363ab3a=""></i></button>
                                       </div>
                                    </div>
                                    <span class="SecondaryFacts DesktopOnlyBlock" data-v-0363ab3a="">M.Sc. <span class="Divider" data-v-0363ab3a="">/</span> Full-time <span class="Divider" data-v-0363ab3a="">/</span> On Campus</span>
                                    <div class="OrganisationInfo" data-v-0363ab3a="">
                                       <img class="OrganisationLogo" src="" alt="KU Leuven" width="48" height="48" loading="lazy" data-v-0363ab3a="">
                                       <div class="NameLocation" data-v-0363ab3a=""><strong class="OrganisationName" data-v-0363ab3a="">KU Leuven</strong><strong class="OrganisationLocation" data-v-0363ab3a="">Leuven, Belgium</strong></div>
                                       <div class="Promoted" data-v-0363ab3a="">
                                          <div class="Featured" data-study-id="63138" data-v-0363ab3a="" style="position: relative;">
                                             Featured <i class="DesktopOnlyBlock lnr-info FeaturedIcon" data-v-0363ab3a=""></i>
                                             <div class="Tooltip Bottom" style="display: none;">
                                                <div class="TooltipInner">
                                                   The university partners with us for this programme to reach students like you.
                                                </div>
                                                <div class="TooltipArrow"></div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </article>
                                 <div class="TrackingEvent TrackingRetrigger" data-action="impr" data-type="study" data-id="63138" data-description="Psychology - Theory and Research" data-label="premium" data-v-2c69491c="" data-v-0363ab3a=""></div>
                              </a>
                           </li>



`
                            );




                        }
                    );
                }
                else {
                    $('#searchContent').append(`<div style="height:500px;"><h2>${$notFount}</h2></div>`);
                }
            }


        })
        .fail(function (data) {
            // Make sure that the formMessages div has the 'error' class.
            toastr.warning("An error ocured!");
        });

});