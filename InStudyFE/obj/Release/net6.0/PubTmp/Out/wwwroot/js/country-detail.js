$(document).ready(function () {
    var pathname = window.location.pathname;
    console.log(pathname);
    const linkValues = pathname.split("/");
    const $lang = localStorage.getItem('lang');

    var $countryImage = $('#HeroImage');
    var $countryHeader = $('#LinkTrail');
    var $countryImg = $('#CountryHeader');
    var $universities = $('#universities');
    var $StudyUniversity = $('#StudyUniversity');
    if ($lang == 'AZ') {
        $StudyUniversity.html(`Universitetlər`);
    }
    else if ($lang == 'EN') {
        $StudyUniversity.html(`University`);
       

    }
    else {
        $StudyUniversity.html(`Universiteta`);
       

    }
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
            
            $('#StudyIn').append(`
${data?.data?.study}
`);
            $('#About').append(`
${description}
`);
            $('#Living').append(`
${data?.data?.living}
`);
            $('#Visa').append(`
${data?.data?.studentVisa}
`);
  $('#Permit').append(`
${data?.data?.workPermit}
`);




        }
    });
   
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/University/GetActiveUniversities`,
        success: function (data) {
            $universities.empty();
            $.each(
                data.data, function (i, value) {
                    console.log("ssadsa",value);
                    const date = new Date(value.regDate)

                    var dd = String(date.getDate()).padStart(2, '0');
                    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                    var yyyy = date.getFullYear();
                    var time = yyyy + "/" + mm + "/" + dd;
                    if ($lang == 'AZ') {
                        var name1 = value.azName
                        var description = value?.azDescription;

                    }
                    else if ($lang == 'EN') {
                        var name1 = value.enName
                        var description = value?.enDescription;

                    } else {
                        var name1 = value.ruName;
                        var description = value?.ruDescription;

                    }
                    var image = `data:image/png;base64,${value?.universityFiles[0]?.bytes}`
                    $universities.append(
                        `
                             <a data-v-6e0e8e37="" data-v-60a22860="" data-study-id="319857" data-organisation-id="237" title="Strategic Events Management" href="/University/Detail/${value.id}" target="_blank" class="ContentCard js-studyCard">
                                <div data-v-78fa3586="" data-v-6e0e8e37="">
                                   <div data-v-78fa3586="" class="StudyCoverWrapper"><img data-v-78fa3586="" alt="Study cover image" src="${image}" loading="lazy" width="288" height="152"></div>
                                </div>
                                <div data-v-6e0e8e37="">
                                   <div data-v-6e0e8e37="" class="BestfitWishlist">
                     
                      
                                   </div>
                                   <div data-v-6e0e8e37="" class="OrganisationTitle">
                                      <h3 data-v-6e0e8e37="" class="StudyTitle">${name1}</h3>
                                   </div>
                                </div>
                                <div data-v-6e0e8e37="" class="OrganisationInformation">
                                   <div data-v-6e0e8e37="" class="NameLocation">
                                      <div data-v-6e0e8e37="" class="Name"></div>
                                      <div data-v-6e0e8e37="" class="Location">${value?.country?.enName}</div>
                                   </div>
                                </div>
                             </a>
                           
                          `
                    )

                }
            )




        }
    });
  
});