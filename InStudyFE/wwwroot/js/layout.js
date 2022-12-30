$(document).ready(function () {
    const $lang = localStorage.getItem('lang');
    if ($lang == 'AZ') {
        $(`.explore`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-compass2"></i> <span class="SectionNavigationLabel">Araşdırın</span> </a>`);
        $(`.apply`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"><i class="SectionNavigationIcon lnr-paper-plane"></i>  <span class="SectionNavigationLabel">Müraciət</span> </a>`);
        $(`.goStudy`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-archery"></i> <span class="SectionNavigationLabel">Tehsil al</span> </a>`);
        $(`#goStudyHeader`).html(`Müraciət üçün məsləhətlər`);
        $(`#programInput`).attr(`placeholder`,`Proqram`);
        $(`#countryInput`).attr(`placeholder`, `Ölkə`);
        $(`#directionInput`).attr(`placeholder`, `İstiqamət`);
    }
    else if ($lang == 'EN') {

        $(`.explore`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-compass2"></i> <span class="SectionNavigationLabel">Explore</span> </a>`);
        $(`.apply`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"><i class="SectionNavigationIcon lnr-paper-plane"></i>  <span class="SectionNavigationLabel">Apply</span> </a>`);
        $(`.goStudy`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-archery"></i> <span class="SectionNavigationLabel"> Go Study</span> </a>`);
        $(`#goStudyHeader`).html(`Tips to apply`);
        $(`#programInput`).attr(`placeholder`, `Program`);
        $(`#countryInput`).attr(`placeholder`,`Сountry`);
        $(`#directionInput`).attr(`placeholder`,`Direction`);

    }
    else {
        $(`.explore`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-compass2"></i> <span class="SectionNavigationLabel">Исследовать</span> </a>`);
        $(`.apply`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"><i class="SectionNavigationIcon lnr-paper-plane"></i>  <span class="SectionNavigationLabel">Применять</span> </a>`);
        $(`.goStudy`).html(`<a class="SectionNavigationLink js-SectionNavigationLink"> <i class="SectionNavigationIcon lnr-archery"></i> <span class="SectionNavigationLabel"> Иди учись</span> </a>`);
        $(`#goStudyHeader`).html(`Советы по применению`);
        $(`#programInput`).attr(`placeholder`,`Программа`);
        $(`#countryInput`).attr(`placeholder`,`Страна`);
        $(`#directionInput`).attr(`placeholder`,`Направление`);



    }
    $("#programInput").focusin(function () {
        const menuItem = document.getElementById('program_div');
        menuItem.classList.remove("Hidden");

    });
    $("#programInput").focusout(function () {
        const menuItem = document.getElementById('program_div');
        setTimeout(function delay() {
            menuItem.classList.add("Hidden");
        }, 1000);
       
       
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
        }, 1000);
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

    $("#directionInput").focusout(function () {
        const menuItem = document.getElementById('direction_div');
        setTimeout(function delay() {
            menuItem.classList.add("Hidden");
        }, 1000);
    });

});