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
        $(`#programInputCon`).attr(`placeholder`, `Proqram`);
        $(`#directionInputCon`).attr(`placeholder`, `İstiqamət`);
    }
    else if ($lang == 'EN') {
        $StudyUniversity.html(`Universities`);
        $(`#programInputCon`).attr(`placeholder`, `Program`);
        $(`#directionInputCon`).attr(`placeholder`, `Direction`);

    }
    else {
        $StudyUniversity.html(`Университеты`);
        $(`#programInputCon`).attr(`placeholder`, `Программа`);
        $(`#directionInputCon`).attr(`placeholder`, `Направление`);

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
            localStorage.setItem('country', name1);
            var image = `https://api.instudy.net/${data.data?.countryFiles[0]?.path}`
            $countryImage.append(
                `
                <span class="HeroImage js-heroImage" style="background-image:url(${image});background-repeat: no-repeat;background-size: auto;"></span>
                <span class="HeroImage HeroImagePlaceholder js-heroImageLowResPlaceholder"></span> <span class="HeroOverlay" style="background-image:url(${image});background-repeat: no-repeat;background-size: auto;" ></span>
                
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
           
            $.each(
                data?.data?.universities, function (i, value) {
                    console.log("sasa", value);
                    $("#universityList").append(
                        `
			                <li> <a href="/University/Detail/${value.id}" title=""> <span>${value.enName}</span> </a> (${value.studentCount} Students) </li>


														`
                    )

                }
            );



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
                    var image = `https://api.instudy.net/${value?.universityFiles[0]?.path}`
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

    $("#programInputCon").focusin(function () {
        const menuItem = document.getElementById('program_div_con');
        menuItem.classList.remove("Hidden");

    });
    $("#programInputCon").focusout(function () {
        const menuItem = document.getElementById('program_div_con');
        setTimeout(function delay() {
            menuItem.classList.add("Hidden");
        }, 200);


    });
    $("#directionInputCon").focusin(function () {
        const menuItem = document.getElementById('direction_div_con');
        menuItem.classList.remove("Hidden");

    });
    $("#directionInputCon").focusout(function () {
        const menuItem = document.getElementById('direction_div_con');
        setTimeout(function delay() {
            //menuItem.classList.add("Hidden");
        }, 200);


    });
    $("#directionInputCon").keyup(function () {
        const menuItem = document.getElementById('direction_div_con');
        menuItem.classList.remove("Hidden");
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('directionInputCon');
        filter = input.value.toUpperCase();
        ul = document.getElementById("directionCon");
        li = ul.getElementsByTagName('li');
        for (i = 0; i < li.length; i++) {

            txtValue = li[i].textContent || li[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
    });

    $("#directionInputCon").focusout(function () {
        const menuItem = document.getElementById('direction_div');
        setTimeout(function delay() {
            menuItem.classList.add("Hidden");
        }, 200);
    });
  
});