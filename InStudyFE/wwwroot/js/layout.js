    $(document).ready(function () {
    const $lang = localStorage.getItem('lang');
    if ($lang == 'AZ') {
        $(`.explore`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-compass2"></i> <span class="SectionNavigationLabel">Araşdır</span> </a>`);
        $(`.apply`).html(`<a href="/Apply" class="SectionNavigationLink js-SectionNavigationLink"><i class="SectionNavigationIcon lnr-paper-plane"></i>  <span class="SectionNavigationLabel">Müraciət</span> </a>`);
        $(`.goStudy`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-archery"></i> <span class="SectionNavigationLabel">Tehsil al</span> </a>`);
        $(`#goStudyHeader`).html(`Müraciət üçün məsləhətlər`);
        $(`#programInput1`).attr(`placeholder`,`Proqram`);
        $(`#countryInput`).attr(`placeholder`, `Ölkə`);
        $(`#directionInput`).attr(`placeholder`, `İstiqamət`);
        $(`#exploreHeader`).html(`Araşdırın`);
        $(`#decideContent`).html(`Müraciət`);
        $(`#goStudyHeader`).html(`Tehsil al`);
        $(`.aboutlang`).html(`Haqqında`);
        $(`.articleslang`).html(`Məqalə`);
        $(`.countrieslang`).html(`Ölkələr`);
        $(`.contactlang`).html(`Bizimlə əlaqə`);
        $(`.followlang`).html(`Bizi izləyin`);
    }
    else if ($lang == 'EN') {

        $(`.explore`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-compass2"></i> <span class="SectionNavigationLabel">Explore</span> </a>`);
        $(`.apply`).html(`<a href="/Apply" class="SectionNavigationLink js-SectionNavigationLink"><i class="SectionNavigationIcon lnr-paper-plane"></i>  <span class="SectionNavigationLabel">Apply</span> </a>`);
        $(`.goStudy`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-archery"></i> <span class="SectionNavigationLabel">Go Study</span> </a>`);
        $(`#goStudyHeader`).html(`Tips to apply`);
        $(`#programInput1`).attr(`placeholder`, `Program`);
        $(`#countryInput`).attr(`placeholder`,`Сountry`);
        $(`#directionInput`).attr(`placeholder`, `Direction`);
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
        $(`.apply`).html(`<a href="/Apply" class="SectionNavigationLink js-SectionNavigationLink"><i class="SectionNavigationIcon lnr-paper-plane"></i>  <span class="SectionNavigationLabel">Применять</span> </a>`);
        $(`.goStudy`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-archery"></i> <span class="SectionNavigationLabel"> Иди учись</span> </a>`);
        $(`#goStudyHeader`).html(`Советы по применению`);
        $(`#programInput1`).attr(`placeholder`,`Программа`);
        $(`#countryInput`).attr(`placeholder`,`Страна`);
        $(`#directionInput`).attr(`placeholder`,`Направление`);
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
    $("#programInput1").focusout(function () {
        const menuItem = document.getElementById('program_div');
        setTimeout(function delay() {
            menuItem.classList.add("Hidden");
        }, 150);
       
       
    });
    $("#countryInput").focusin(function () {
        const menuItem = document.getElementById('country_div');
        menuItem.classList.remove("Hidden");

    });
    $("#countryInput").focusout(function () {
        const menuItem = document.getElementById('country_div');
        setTimeout(function delay() {
            menuItem.classList.add("Hidden");
        }, 150);


    });
    $("#directionInput").focusin(function () {
        const menuItem = document.getElementById('direction_div');
        menuItem.classList.remove("Hidden");

    });
    $("#directionInput").focusout(function () {
        const menuItem = document.getElementById('direction_div');
        setTimeout(function delay() {
            menuItem.classList.add("Hidden");
        }, 150);


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

    $("#countryInput").focusout(function () {
        const menuItem = document.getElementById('country_div');
        setTimeout(function delay() {
            menuItem.classList.add("Hidden");
        }, 150);
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