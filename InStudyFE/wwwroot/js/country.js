$(document).ready(function () {
    const $lang = localStorage.getItem('lang');
    
    if ($lang == 'RU') {
        $(`#countrypageHeader`).html("Страны");
       
    }
    else if ($lang == 'EN') {
        $(`#countrypageHeader`).html("Countries");
    }
    else {
       
        $(`#countrypageHeader`).html("Ölkələr");
    }
    
   

});