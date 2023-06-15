$(document).ready(function () {
    const $lang = localStorage.getItem('lang');
   
    var $disciplineHeader = $('#disciplineHeader');
    var $homeCoutryHeader = $('#homeCountryHeader');
    var $partnersHeader = $('#partnerHeader');
    var $arcticlesHeader = $('#articlesHeader');
    var $quateHeader = $('#quateHeader');
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/CountryFront/GetLastCountryFront`,

        success: function (data) {
            /*$country.empty();*/


            if ($lang == 'RU') {
                var name = data.data?.ruHeader
               

            }
            else if ($lang == 'EN') {
                var name = data.data?.enHeader
              

            } else {
                var name = data.data?.azHeader

                

            }
            $homeCoutryHeader.html(`${name}`)

          
            






        }

    });
  
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/StudentWordsFront/GetLastStudentWordsFront`,

        success: function (data) {
            /*$country.empty();*/


            if ($lang == 'RU') {
                var name = data.data?.ruHeader


            }
            else if ($lang == 'EN') {
                var name = data.data?.enHeader


            } else {
                var name = data.data?.azHeader


            }
            $quateHeader.html(`${name}`)









        }

    });
       $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/PartnerFront/GetLastPartnerFront`,

        success: function (data) {
            /*$country.empty();*/


            if ($lang == 'RU') {
                var name = data.data?.ruHeader


            }
            else if ($lang == 'EN') {
                var name = data.data?.enHeader


            } else {
               
                var name = data.data?.azHeader


            }
            $partnersHeader.html(`${name}`)









        }

       });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/DirectionFront/GetLastDirectionFront`,

        success: function (data) {
            /*$country.empty();*/


            if ($lang == 'RU') {
                var name = data.data?.ruHeader

                


            }
            else if ($lang == 'EN') {
                var name = data.data?.enHeader


            } else {
                var name = data.data?.azHeader

            }
            $disciplineHeader.html(`${name}`)









        }

    });
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/BlogFront/GetLastBlogFronts`,

        success: function (data) {
            /*$country.empty();*/


            if ($lang == 'RU') {
                var name = data.data?.ruHeader


            }
            else if ($lang == 'EN') {
                var name = data.data?.enHeader


            } else {
                var name = data.data?.azHeader

                


            }
            $arcticlesHeader.html(`${name}`)









        }

    });



});