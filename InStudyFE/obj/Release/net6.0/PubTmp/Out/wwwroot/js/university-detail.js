$(document).ready(function () {
    var pathname = window.location.pathname;
    console.log(pathname);
    const linkValues = pathname.split("/");
    const $lang = localStorage.getItem('lang');

    var $uniImage = $('#HeroContainer');
    var $headerName = $('#HeaderName');
    var $shortDetail = $('#StudySummary');
    var $quickFacts = $('#QuickFacts');
    var $map = $('#mapAddress');
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/University/GetUniversityWithId?universityId=${linkValues[3]}`,
        success: function (data) {
            const date = new Date(data.data.regDate)
            console.log(data);
            var dd = String(date.getDate()).padStart(2, '0');
            var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
            var yyyy = date.getFullYear();
            var time = yyyy + "/" + mm + "/" + dd;
            if ($lang == 'AZ') {
                var name1 = data.data?.azName
                var description = data.data?.azDescription;
                var title = "Haqqında";

            }
            else if ($lang == 'EN') {
                var name1 = data.data?.enName
                var description = data.data?.enDescription;
                var title = "About";


            } else {
                var name1 = data.data?.ruName;
                var description = data.data?.ruDescription;
                var title = "O нас";


            }
            var image = `data:image/png;base64,${data.data?.universityFiles[0]?.bytes}`;
            
            $uniImage.empty();
            $uniImage.append(
                `      <span class="HeroImage js-heroImage" style="background-image:url('${image}');">

        </span> <span class="HeroImagePlaceholder HeroImage js-heroImageLowResPlaceholder" style="background-image:url('${image}');">

        </span> <span class="HeroOverlay"></span>   
                        `
            );
            $quickFacts.append(`
<div class="mdc-layout-grid__inner">
                  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-3-desktop">
                     <div class="QuickFact">
                        <div class="Icon"> <i class="lnr-clock3"></i> </div>
                        <div class="LabelContainer">
                           <div class="Title"> <span class="js-duration" data-rewrite="true" data-period="months" data-duration="18" data-days-single="day" data-days-multiple="days" data-weeks-single="week" data-weeks-multiple="weeks" data-months-single="month" data-months-multiple="months" data-years-single="year" data-years-multiple="years">1½ years</span> </div>
                           <div class="Label"> Duration </div>
                        </div>
                     </div>
                  </div>
                  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-3-desktop">
                     <div class="QuickFact">
                        <div class="Icon"> <i class="lnr-bag-coins"></i> </div>
                        <div class="LabelContainer">
                           <div class="Title">
                              <div class="js-LocalizedContent" data-country-id="1">
                                 <div class="TuitionFeeContainer" data-target="international"> <span data-currency-rewrite="" data-discount="0" data-currency="EUR" data-duration="18" data-period="months" data-original_html="12200&nbsp;EUR" data-amount="12200" data-original-amount="18300" data-currency-symbol="no" class="Title" data-converted_amount="12200" title="Converted from 12200&nbsp;EUR">12,200</span> <span class="CurrencyContainer"> <span class="CurrencyType Fact" data-currency-text="EUR" data-institution-currency="EUR">EUR</span>/year </span> </div>
                                 <div class="TuitionFeeContainer Hidden" data-target="eea"> <span data-currency-rewrite="" data-discount="0" data-currency="EUR" data-duration="18" data-period="months" data-original_html="12200&nbsp;EUR" data-amount="12200" data-original-amount="18300" data-currency-symbol="no" class="Title" data-converted_amount="12200" title="Converted from 12200&nbsp;EUR">12,200</span> <span class="CurrencyContainer"> <span class="CurrencyType Fact" data-currency-text="EUR" data-institution-currency="EUR">EUR</span>/year </span> </div>
                                 <div class="TuitionFeeContainer js-notAvailable Unknown Hidden">Unknown</div>
                              </div>
                           </div>
                           <div class="Label"> Tuition fee </div>
                        </div>
                     </div>
                  </div>
                  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-3-desktop">
                     <div class="QuickFact">
                        <div class="Icon"> <i class="lnr-paper-plane"></i> </div>
                        <div class="LabelContainer">
                           <div class="Title">
                              <div class="js-LocalizedContent" data-country-id="1">
                                 <div class="TimingContainer" data-target="general"> Anytime </div>
                                 <div class="TimingContainer js-notAvailable Unknown Hidden">Unknown</div>
                              </div>
                           </div>
                           <div class="Label"> Apply date </div>
                        </div>
                     </div>
                  </div>
                  <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2-phone mdc-layout-grid__cell--span-3-desktop">
                     <div class="QuickFact">
                        <div class="Icon"> <i class="lnr-calendar-full"></i> </div>
                        <div class="LabelContainer">
                           <div class="Title">
                              <div class="js-LocalizedContent">
                                 <div class="TimingContainer" data-target="general"> <time datetime="2023-08-22" data-format="MMM YYYY">Aug 2023</time> </div>
                                 <div class="TimingContainer js-notAvailable Unknown Hidden">Unknown</div>
                              </div>
                           </div>
                           <div class="Label"> Start date </div>
                        </div>
                     </div>
                  </div>
               </div>
`);
            $headerName.append(` <h1 class="StudyTitle">${name1}</h1>`);
            $shortDetail.html(`
        <h2>${title}</h2>
               <p>${description}</p>
            `);



        }
    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://localhost:7074/api/Country/GetActiveCountries`,
        success: function (data) {
            $countryList.empty();
            $.each(
                data.data, function (i, value) {

                    const date = new Date(value.regDate)

                    var dd = String(date.getDate()).padStart(2, '0');
                    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                    var yyyy = date.getFullYear();
                    var time = yyyy + "/" + mm + "/" + dd;
                    var description = value.description.slice(0, 5);
                    $countryList.append(
                        `<a id="learnMore" value="${value.id}" class="list-group-item sidebar-item font-weight-bold bg-light mt-3 list-group-item-action">${value.name}</a>
                          `
                    )

                }
            )




        }
    })
    $(document).on('click', '#learnMore', async function () {
        let Id = $(this).attr('value');

        localStorage.setItem('countryId', Id);
        location.href = `/country/detail`;


    });
});