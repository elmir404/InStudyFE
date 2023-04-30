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
        $(`.directionInput`).attr(`placeholder`, `İstiqamət`);
        $(`.study`).html("Təhsil")  
        $(`.living`).html("Yaşayış")
        $(`.about`).html("Haqqında") 
        $(`.university`).html("Universitetlər")
        $(`.student-visa`).html("Tələbə vizası")
        $(`.work-permit`).html("Sənədlər")
        $(`.how-to-apply`).html("Müraciət")
        $(`.study1`).html("Təhsil")  
        $(`.living1`).html("Yaşayış")
        $(`.about1`).html("Haqqında") 
        $(`.university1`).html("Universitetlər")
        $(`.student-visa1`).html("Tələbə vizası")
        $(`.work-permit1`).html("Sənədlər")
        $(`.how-to-apply1`).html("Müraciət")
        var student="Tələbə"

    }
    else if ($lang == 'EN') {
        $StudyUniversity.html(`Universities`);
        $(`#programInputCon`).attr(`placeholder`, `Program`);
        $(`#directionInputCon`).attr(`placeholder`, `Direction`);
        $(`.directionInput`).attr(`placeholder`, `Direction`);
        $(`.study`).html("Study") 
        $(`.living`).html("Living") 
        $(`.about`).html("About")
        $(`.university`).html("Universities")
        $(`.student-visa`).html("Student visa")
        $(`.work-permit`).html("Documents")
        $(`.how-to-apply`).html("Apply form")
        $(`.study1`).html("Study") 
        $(`.living1`).html("Living") 
        $(`.about1`).html("About")
        $(`.university1`).html("Universities")
        $(`.student-visa1`).html("Student visa")
        $(`.work-permit1`).html("Documents")
        $(`.how-to-apply1`).html("Apply form")
        var student = "Students"
    }
    else {
        $StudyUniversity.html(`Университеты`);
        $(`#programInputCon`).attr(`placeholder`, `Программа`);
        $(`#directionInputCon`).attr(`placeholder`, `Направление`);
        $(`.directionInput`).attr(`placeholder`, `Направление`);
        $(`.study`).html("Образование") 
        $(`.living`).html("Живущий")
        $(`.about`).html("O")
        $(`.university`).html("Университет")
        $(`.student-visa`).html("Студенческая виза")
        $(`.work-permit`).html("Документы")
        $(`.how-to-apply`).html("Обращение")
        $(`.study1`).html("Образование") 
        $(`.living1`).html("Живущий")
        $(`.about1`).html("O")
        $(`.university1`).html("Университет")
        $(`.student-visa1`).html("Студенческая виза")
        $(`.work-permit1`).html("Документы")
        $(`.how-to-apply1`).html("Обращение")
        var student = "Студент"
    } 

    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },                                                            
        url: `https://api.instudy.net/api/Country/GetCountryWithId?id=${linkValues[3]}`,
        success: function (data) {
           
            if ($lang == 'AZ') {
                var name1 = data.data?.azName
                var description = data.data?.azAbout
                var study = data.data?.azStudy;
                var workPermit = data.data?.azWorkPermit;
                var studentVisa = data.data?.azStudentVisa;
                var living = data.data?.azLiving;
            }
            else if ($lang == 'EN') {
                var name1 = data.data?.enName
                var description = data.data?.enAbout;
                var study = data.data?.enStudy;
                var workPermit = data.data?.enWorkPermit;
                var studentVisa = data.data?.enStudentVisa;
                var living = data.data?.enLiving;

            } else {
                var name1 = data.data?.ruName;
                var description = data.data?.ruAbout;
                var study = data.data?.ruStudy;
                var workPermit = data.data?.ruWorkPermit;
                var studentVisa = data.data?.ruStudentVisa;
                var living = data.data?.ruLiving;

            }
            localStorage.setItem('country', name1);
            var image = `https://api.instudy.net/${data.data?.countryFiles[0]?.path}`
              
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
            $('.StudyIn').empty();
            
            $('.StudyIn').append(`
${study}
`);
            $('.About').empty();
            $('.About').append(`
${description}
`);
            $('.Living').empty();
            $('.Living').append(`
${living}
`);
            $('.Visa').empty();
            $('.Visa').append(`
${studentVisa}
`);
            $('.WorkPermitContent').empty()
            $('.WorkPermitContent').append(`
${workPermit}
`);
            $(".universityList").empty();
            $.each(
                data?.data?.universities, function (i, value) {
                    console.log("sasa", value);
                    $(".universityList").append(
                        `
			                


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
        url: `https://api.instudy.net/api/University/GetUniversityWithCountryId?countryId=${linkValues[3]}`,
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
        }, 150);


    });
    $("#directionInputCon").focusin(function () {
        const menuItem = document.getElementById('direction_div_con');
        menuItem.classList.remove("Hidden");

    });
    $("#directionInputCon").focusout(function () {
        const menuItem = document.getElementById('direction_div_con');
        setTimeout(function delay() {
            menuItem.classList.add("Hidden");
        }, 150);


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
            }
            else {
                li[i].style.display = "none";
            }
        }
    });

    $(document).on('click', '#searchButtonCon', async function () {
        console.log("adsadsad");
        localStorage.setItem('program', $(`#programInputCon`).val());
        localStorage.setItem('direction', $(`#directionInputCon`).val());
        var empty = [];
        localStorage.setItem('locationSearch', JSON.stringify(empty));
        localStorage.setItem('disciplinesSearch', JSON.stringify(empty));
        localStorage.setItem('durationsSearch', JSON.stringify(empty));
        localStorage.setItem('attendenceSearch', JSON.stringify(empty));
        localStorage.setItem('programSearch', JSON.stringify(empty));
        location.href = "/Search";
    });
  
});