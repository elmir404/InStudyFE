$(document).ready(function () {
    var pathname = window.location.pathname;
    console.log(pathname);
    const linkValues = pathname.split("/");
    const $lang = localStorage.getItem('lang');

    var $uniImage = $('#HeroContainer');
    var $uniHeader = $('#LinkTrail');
    var $uniDetail = $('#StudyIn');
    var $shortDetail = $('#ShortDescription');
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
                var name1 = data.data.azName
                var description = data.data?.azDescription;

            }
            else if ($lang == 'EN') {
                var name1 = data.data.enName
                var description = data.data?.enDescription;

            } else {
                var name1 = data.data.ruName;
                var description = data.data?.ruDescription;

            }
            var image = `data:image/png;base64,${data.data?.universityFiles[0]?.bytes}`;
            $map.empty()
            $map.append(`
            <a href="${data.data.mapAdrress}" title="Linköping">${data.data.address}</a>
`)
            $uniImage.empty();
            $uniImage.append(
                `      <span class="HeroImage js-heroImage" style="background-image:url('${image}');">

        </span> <span class="HeroImagePlaceholder HeroImage js-heroImageLowResPlaceholder" style="background-image:url('${image}');">

        </span> <span class="HeroOverlay"></span>
        <div class="HeroContentWrapper HideHeroContent">
            <div class="HeroContentModule ">
                <section class="HeroBackground"></section>
                <section class="HeroContent">
                    <div class="HeroImageSources js-heroImageSources"> </div>
                    <div class="HeroTextContent">
                        <section id="OrganisationCoverImage" data-premium="" data-organisation_id="9">
                            <article>
                                <header>
                                    <h1><span class="OrganisationTitle">${name1} </span></h1>
                                </header>
                            </article>
                        </section>
                    </div>
                </section>
            </div>
        </div>
                  
                        `
            );
            $uniHeader.append(`<ul class="LinkTrail">
                                            <li> <a href="/Home/Index"
                                                    title="Home">Home></a> </li>
                                            <li>${name1} </li>
                                        </ul>
`);
            $shortDetail.html(`${description}`)



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