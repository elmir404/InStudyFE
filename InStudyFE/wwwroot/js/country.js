$(document).ready(function () {
    const $lang = localStorage.getItem('lang');
    debugger;
    if ($lang == 'AZ') {
        $(`#countrypageHeader`).html("Ölkələr");
    }
    else if ($lang == 'EN') {
        $(`#countrypageHeader`).html("Countries");
    }
    else {
        $(`#countrypageHeader`).html("Страны");

    }
    
   

});