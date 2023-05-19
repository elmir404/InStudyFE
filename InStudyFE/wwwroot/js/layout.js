    $(document).ready(function () {
    const $lang = localStorage.getItem('lang');
    if ($lang == 'AZ') {
        $(`.explore`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-compass2"></i> <span class="SectionNavigationLabel">Araşdır</span> </a>`);
        $(`.apply`).html(`<a href="/Apply" class="SectionNavigationLink js-SectionNavigationLink"><div class="SectionNavigationIcon" style="width:2.5rem;"><img  src="/images/Untitled (2).png" alt="apply"  ></div> <span class="SectionNavigationLabel">Müraciət</span> </a>`);
        $(`.goStudy`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-archery"></i> <span class="SectionNavigationLabel">Təhsil al</span> </a>`);
        $(`#goStudyHeader`).html(`Müraciət üçün məsləhətlər`);
        $(`#programInput1`).attr(`placeholder`,`Təhsil Pilləsi`);
        $(`#countryInput`).attr(`placeholder`, `Ölkə`);
        $(`#directionInput`).attr(`placeholder`, `Fakultə`);
        $(`#exploreHeader`).html(`Araşdırın`);
        $(`#decideContent`).html(`Müraciət`);
        $(`#goStudyHeader`).html(`Təhsil al`);
        $(`.aboutlang`).html(`Haqqında`);
        $(`.articleslang`).html(`Məqalə`);
        $(`.countrieslang`).html(`Ölkələr`);
        $(`.contactlang`).html(`Bizimlə əlaqə`);
        $(`.followlang`).html(`Bizi izləyin`);
    }
    else if ($lang == 'EN') {

        $(`.explore`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-compass2"></i> <span class="SectionNavigationLabel">Explore</span> </a>`);
        $(`.apply`).html(`<a href="/Apply" class="SectionNavigationLink js-SectionNavigationLink"><div class="SectionNavigationIcon" style="width:2.5rem;"><img  src="/images/Untitled (2).png" alt="apply"  ></div>   <span class="SectionNavigationLabel">Apply</span> </a>`);
        $(`.goStudy`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-archery"></i> <span class="SectionNavigationLabel">Study Abroad</span> </a>`);
        $(`#goStudyHeader`).html(`Tips to apply`);
        $(`#programInput1`).attr(`placeholder`, `Degree Type`);
        $(`#countryInput`).attr(`placeholder`,`Сountry`);
        $(`#directionInput`).attr(`placeholder`, `Faculty`);
        $(`#exploreHeader`).html(`Explore`);
        //$(`#decideContent`).html(`Apply`);
        $(`#goStudyHeader`).html(`Go Study`);
        $(`.aboutlang`).html(`About`);
        $(`.articleslang`).html(`Articles`);
        $(`.countrieslang`).html(`Countries`);
        $(`.contactlang`).html(`Contact us`);
        $(`.followlang`).html(`Follow us`);


    }
    else {
        $(`.explore`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-compass2"></i> <span class="SectionNavigationLabel">Исследовать</span> </a>`);
        $(`.apply`).html(`<a href="/Apply" class="SectionNavigationLink js-SectionNavigationLink"><div class="SectionNavigationIcon" style="width:2.5rem;"><img  src="/images/Untitled (2).png" alt="apply"  ></div>   <span class="SectionNavigationLabel">Применять</span> </a>`);
        $(`.goStudy`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-archery"></i> <span class="SectionNavigationLabel">Учеба за границей</span> </a>`);
        $(`#goStudyHeader`).html(`Советы по применению`);
        $(`#programInput1`).attr(`placeholder`,`Тип степени`);
        $(`#countryInput`).attr(`placeholder`,`Страна`);
        $(`#directionInput`).attr(`placeholder`,`Факультеты`);
        $(`#exploreHeader`).html(`Исследовать`);
        //$(`#decideContent`).html(`Применять`);
        $(`#goStudyHeader`).html(`Иди учись`);
        $(`.aboutlang`).html(`O`);
        $(`.articleslang`).html(`Статьи`);
        $(`.countrieslang`).html(`Страны`);
        $(`.contactlang`).html(`Свяжитесь с нами`);
        $(`.followlang`).html(`Подписывайтесь на нас`);


    }
    $("#programInput1").focusin(function () {
        const menuItem = document.getElementById('program_div');
        menuItem.classList.remove("Hidden");
    });
    $("#countryInput").focusin(function () {
        const menuItem = document.getElementById('country_div');
        menuItem.classList.remove("Hidden");
    });   
    $("#directionInput").focusin(function () {
        const menuItem = document.getElementById('direction_div');
        menuItem.classList.remove("Hidden");
    });
    

    $("#countryInput").keyup(function () {
        const menuItem = document.getElementById('country_div');
        menuItem.classList.remove("Hidden");
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('countryInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("country");
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
    $("#directionInput").keyup(function () {
        const menuItem = document.getElementById('direction_div');
        menuItem.classList.remove("Hidden");
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('directionInput');
        filter = input.value.toUpperCase();
        ul = document.getElementById("direction");
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

   

      
});