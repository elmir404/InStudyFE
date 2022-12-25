$(document).ready(function () {
    var pathname = window.location.pathname;
    console.log(pathname);
    const linkValues = pathname.split("/");
    const $lang = localStorage.getItem('lang');

    var $countryImage = $('#HeroImage');
    var $countryHeader = $('#LinkTrail');
    var $countryImg = $('#CountryHeader');
    var $countryDetail = $('#StudyIn');
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },                                                            
        url: `https://api.instudy.net/api/Country/GetCountryWithId?id=${linkValues[3]}`,
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
            var image = `data:image/png;base64,${data.data?.countryFiles[0]?.bytes}`
            $countryImage.append(
                `
                <span class="HeroImage js-heroImage" style="background-image:url('${image}');"></span>
                <span class="HeroImage HeroImagePlaceholder js-heroImageLowResPlaceholder"></span> <span class="HeroOverlay" style="background-image:url('${image}');" ></span>
                
                `
            );
         
            $countryHeader.append(` <ul class="LinkTrail">
                                            <li> <a href="/Home/Index"
                                                    title="Home">Home></a> </li>
                                            <li> <a href="/Country/Index" title="Countries">Countries></a> </li>
                                            <li>${name1} </li>
                                        </ul>
`);
            $countryImg.empty();
            $countryImg.append(`
 <h1>${name1}</h1> 
                                    
`)
            $countryDetail.append(` <div><p>${description}</p></div>`)



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