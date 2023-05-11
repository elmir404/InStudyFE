$(document).ready(function () {

    var $country1 = $('#CountrySpotlightContainer');
    var $partners = $('#partners');
   
    $questions = $('#questionAcc');
    var $questionHeader = $('#questionHeader');
    var $countryMenu = $('#countryMenu');
    var $countryHeader = $('#countryHeader');
    var $universityMenu = $('#universityMenu');
    var $universityHeader = $('#universityHeader');
    var $disciplinesMenu = $('#disciplinesMenu');
    var $uniMore = $('#uniMore');
    var $countryMore = $('.countryMore');
    var $disciplinesHeader = $('#disciplinesHeader');
    
   
    
    var $homeHeader = $('#homeHeader');
   
    var $quate = $('#quotes');
    var $arcticles = $('#MoreArticles');
    var $contact = $('#contactHeder');
    var $topscroll = $('.FooterScrollToTopText');
    var $footerabout = $('.footerabout');
    var $footerarticles = $('.footerarticles');
    var $footercountries = $('.footercountries');
    var $footercontact = $('.footercontact');
    
    const $lang = localStorage.getItem('lang');
    if ($lang == 'AZ') {
        $countryHeader.html(`Seçilmiş ölkələr`);
        $universityHeader.html(`Seçilmiş universitetlər`);
        $disciplinesHeader.html(`Istiqamətlər`);
        var $countryMore = `Daha çox ölkə`;
        $(".countryMore").html("Daha çox ölkə");
        var $countryFw=`Daha az ölkə`;
        $uniMore.html(`Bütün universitetləri göstər`);
        $arcticles.html(`Daha çox məqalə`);
        $contact.html(`Əlaqə`);
        $topscroll.html(`Yuxarı`);
        $footerabout.html('Haqqında');
        $footerarticles.html('Məqalə');
        $footercountries.html('Ölkələr');
        $footercontact.html('Əlaqə');
    }
    else if ($lang == 'EN') {
        $countryHeader.html(`Popular countries`);
        $universityHeader.html(`Popular universities`);
        $disciplinesHeader.html(`Directions`);
        var $countryMore = `More countries`;
        $(".countryMore").html("More countries");
       var  $countryFw =`Fewer countries`;
        $uniMore.html(`View all universities`);
        $arcticles.html("More arcticles");
        $contact.html(`Contact`);
        $topscroll.html(`Top`);
        $footerabout.html('About');
        $footerarticles.html('Articles');
        $footercountries.html('Countries');
        $footercontact.html('contact');
    } else {
        $countryHeader.html(`Популярные страны`);
        $universityHeader.html(`Популярные университеты`); 
        $disciplinesHeader.html(`Направления`);
        $(".countryMore").html("Больше стран");
        var $countryMore =`Больше стран`;
        var $countryFw =`Меньше стран`;
        $uniMore.html(`Просмотреть все университеты`);
        $arcticles.html("Еще статьи");
        $contact.html(`Контакт`);
        $topscroll.html(`Bверх`)
        $footerabout.html('O');
        $footerarticles.html('Cтатьи');
        $footercountries.html('Cтраны');
        $footercontact.html('Связь');
    }
    $(document).on('click', '#viewMore', function () {
        debugger;
        if ($(".hiddenCountry").hasClass("Hidden")) {
            $(".hiddenCountry").removeClass("Hidden");
            $(".countryMore").html($countryFw)
        } else {
            $(".hiddenCountry").addClass("Hidden");
            $(".countryMore").html($countryMore)
        }
        
        
    });
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/Country/GetCountriesIdName`,

            success: function (data) {
               /* $country.empty();*/
                $.each(
                    data.data, function (i, value) {


                        if ($lang == 'AZ') {
                            var name = value.azName

                        }
                        else if ($lang == 'EN') {
                            var name = value.enName

                        } else {
                            var name = value.ruName;

                        }


                        if (i < 10) {
                            $countryMenu.append(`
                                                <li class="SubSectionContentItem"> <a class="ContentItemLink js-ContentItemLink" href="/Country/Detail?countryId=${value.id}" title="${name}">${name}</a> </li>

`
                            )
                        }
                        $(`#country`).append(`
                                                 <li class="Suggestion Link" data-position="0" onclick='searchCountry(this)' data-param-value="351" data-param-name="discipline_ids">${name}</li>`);

                    } 
                );

            }

        });
    
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/Program/GetActivePrograms`,

        success: function (data) {
            /*$country.empty();*/
            $.each(
                data.data, function (i, value) {
                    if ($lang == 'AZ') {
                        var name = value.azName

                    }
                    else if ($lang == 'EN') {
                        var name = value.enName

                    } else {
                        var name = value.ruName;
                       

                    }  
                    $(`#program1`).append(`
                                                 <li class="Suggestion Link" onclick='searchProgram(this)'  data-param-name="discipline_ids">${name}</li>


`);
                    $(`#programCon`).append(`
                                                 <li class="Suggestion Link" onclick='searchProgramCon(this)'  data-param-name="discipline_ids">${name}</li>


`);

                }
            )

        }

    });

    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/AboutCompany/GetLastAboutCompany`,

        success: function (data) {
            if ($lang == 'AZ') {
                var addreess = data?.data?.azAdress

            }
            else if ($lang == 'EN') {
                var addreess = data?.data?.enAdress

            } else {
                var addreess = data?.data?.ruAdress;

            }
            
                    if (data?.data?.facebookLink != null) {
                        $("#faceIcon").append(
                            `
                                                <a href="${data?.data?.facebookLink}" class="Link faceicon" target="_blank" rel="noopener" title="Like us on Facebook"> <i class="lnr-facebook SocialIcon"></i> </a> 


`
                            )
                    }

            if (data?.data?.linkedinLink != null) {
                $("#linkIcon").append(
                    `
                                                <a href="${data?.data?.linkedinLink}" class="Link linkicon" target="_blank" rel="noopener" title="Like us on Linkedin"> <i class="lnr-linkedin SocialIcon"></i> </a> 


`
                )
            }

            if (data?.data?.instagramLink != null) {
                $("#instaIcon").append(
                    `
                                                <a href="${data?.data?.instagramLink}" class="Link instaicon" target="_blank" rel="noopener" title="Like us on Instagram"> <i class="lnr-instagram SocialIcon"></i> </a> 


`
                )
            }

            if (data?.data?.youtubeLink != null) {
                $("#ytbIcon").append(
                    `
                                                <a href="${data?.data?.youtubeLink}" class="Link youicon" target="_blank" rel="noopener" title="Like us on YouTube"> <i class="lnr-youtube SocialIcon"></i> </a> 


`
                )
            }
           
                $("#adresFooter").html(
                    `<i class="fa fa-location-arrow"></i>&nbsp;${addreess}
`
                )
            
            if (data?.data?.phone != null) {
                $("#phoneFooter").html(
                    `<i class="fa fa-phone"></i>&nbsp;${data?.data?.phone}

`
                )
            }


        }

    });     
    
    function getUniversities() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/University/GetRandomActiveUniversities`,

            success: function (data) {
                $.each(
                    data.data, function (i, value) {
                       
                        
                        if ($lang == 'AZ') {
                            var name = value.azName
                           

                        }
                        else if ($lang == 'EN') {
                            var name = value.enName
                           

                        } else {
                            var name = value.ruName;
                          

                        }
                      
                        
                        if (i <= 18) {


                            $universityMenu.append(`
                                                <li class="SubSectionContentItem"> <a class="ContentItemLink js-ContentItemLink" href="/University/Detail?uniId=${value.id}" title="${name}">${name}</a> </li>

`
                            );
                        }
                       
                        

                    }
                )

            }

        });
    }
    getDisciplines();
    function getDisciplines() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/Direction/GetActiveDirections?Lang=${$lang}`,

            success: function (data) {
               
                $.each(
                    data.data, function (i, value) {
                        console.log(data);
                       
                        if ($lang == 'AZ') {
                            var name = value?.azName

                        }
                        else if ($lang == 'EN') {
                            var name = value?.enName

                        } else {
                            var name = value?.ruName;

                        }
                        var image = `https://api.instudy.net/${value?.directionFiles[0]?.path}`;
                        

                        $disciplinesMenu.append(`
                                                <li class="SubSectionContentItem"> <a class="ContentItemLink js-ContentItemLink" href="/Direction/Detail?Id=${value.id}" title="${name}">${name}</a> </li>

`
                        );
                        $("#disciplines").append(`
                           <li data-clickable="clickable"> <a href="/Direction/Detail?Id=${value.id}" title="${name}">
                            <img alt="image" style="width:37px !important;" class="text-center img-responsive" src="${image}">
<span style="display:block;">${name}</span> </a> </li>

`); 
                        $("#direction").append(`
                                                 <li class="Suggestion Link" data-position="0" onclick='searchDirection(this)' data-param-value="351" data-param-name="discipline_ids">${name}</li>

`);
                        $("#directionCon").append(`
                                                 <li class="Suggestion Link" data-position="0" onclick='searchDirectionCon(this)' data-param-value="351" data-param-name="discipline_ids">${name}</li>

`);
                        //var description = value.description.slice(0, 5);
                        //$country.append(
                        //    ` <figure data-clickable="clickable">
                        //      <a href="/=" title="Netherlands">
                        //         <span class="Picture" data-file-url="${image}" data-title="Netherlands">
                        //            <picture>
                        //               <source media="all and (max-width: 30em)" srcset="${image}">
                        //               <source media="all and (min-width: 30.063em) and (max-width: 48em)" srcset=${image}">
                        //               <source media="all and (min-width: 48.063em) and (max-width: 80em)" srcset="${image}">
                        //               <source media="all and (min-width: 80.063em)" srcset="${image}">
                        //               <img src="${image}" alt="data:image/png;base64, Netherlands" loading="lazy" width="143" height="95">
                        //            </picture>
                        //         </span>
                        //      </a>
                        //      <figcaption>
                        //         <span> ${name} </span> 
                        //         <div class="Toggle"> 
                        //               ${description}
                        //         </div>
                        //      </figcaption>
                        //   </figure>
                        //                 `
                        //)

                    }
                )

            }

        });
    }
    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/StudentWords/GetActiveStudentWords`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {

                    
                    var image = `https://api.instudy.net/${value?.studentFiles[0]?.path}`
                    if ($lang == 'AZ') {
                        var name = value?.azName
                        var description = value?.azDescription;
                        var country = value?.country?.azName

                    }
                    else if ($lang == 'EN') {
                        var name = value?.enName
                        var description = value?.enDescription;
                        var country = value?.country?.enName


                    } else {
                        var name = value?.ruName;
                        var description = value?.ruDescription;
                        var country = value?.country?.ruName


                    }
                    



                    $quate.append(`
                           <li class="Quote">
                              <div class="Author">
                                 <img class="AuthorImage" src="${image}" style="width:80px;height:80px;" alt="Luna" width="20" height="20" loading="lazy"> 
                                 <div class="AuthorDetails"> <span class="AuthorName">${name}</span> <span class="AuthorCountry">${country}</span> </div>
                              </div>
                              <blockquote>
                                ${description};
                              </blockquote>
                           </li>         

`
                    );  
                }
            )

        }

    });

    $.ajax({
        type: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        url: `https://api.instudy.net/api/About/GetActiveAbouts`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {

                    if ($lang == 'AZ') {
                        var name1 = value.azHeader


                    }
                    else if ($lang == 'EN') {
                        var name1 = value.enHeader

                    } else {
                        var name1 = value.ruHeader;

                    }





                    $(`#goStudys`).append(`
                                                <li class="SubSectionContentItem"> <a class="ContentItemLink js-ContentItemLink" href="/GoStudy/Index?studyId=${value.id}" title="${name1}">${name1} </a> </li>
                                 

`
                    );
                }
            )

        }

    });
    getUniversities();
    function getQuestions() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/AboutQuestion/GetLastAboutQuestion`,

            success: function (data) {
                $questionHeader.empty();
                $questions.empty();
                        if ($lang == 'AZ') {
                            var body = data?.data?.azBody;

                        }
                        else if ($lang == 'EN') {
                            var body = data?.data?.enBody;

                        } else {
                            var body = data?.data?.ruBody;

                        }
                      

                //var description = value.description.slice(0, 5);
                $questionHeader.append(
                    `  <div class="detail-header-div">
                     <div class="detail-header-text-div">
                        <p class="container-text">${body}</p>
                     </div>
                  </div>
                
                                         `
                );
                $.each(
                    data?.data?.questions, function (i, value) {
                        //console.log(value.regDate);
                        //const date = new Date(value.regDate)

                        //var dd = String(date.getDate()).padStart(2, '0');
                        //var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                        //var yyyy = date.getFullYear();
                        //var time = yyyy + "/" + mm + "/" + dd;
                        if ($lang == 'AZ') {
                            var title = value?.azQuestionTitle;
                            var answer = value?.azQuestionAnswer;
;

                        }
                        else if ($lang == 'EN') {
                            var title = value?.enQuestionTitle;
                            var answer = value?.enQuestionAnswer;

                        } else {
                            var title = value?.ruQuestionTitle;
                            var answer = value?.ruQuestionAnswer;

                        }
                        /*$("#questionAcc").empty()*/
                        $("#questionAcc").append(
                                `
                                 <div class="accordion-item show">
                                        <h2 class="accordion-header acc-head" onclick="openAcordion(this)" id="headingTw">
                                                ${title}
                                         </h2>
                                    <div id="collapseTwo" class="accordion-collapse acc-content collapse" >
                                        <div class="accordion-body">
                                            ${answer}
                                        </div>
                                    </div>
                                </div>
                               `

                            );
                        

                    }
                )

                 

            }

        });
    }
  
   
      
    getQuestions();
    var $blog = $('#ArticleSpotlightContainer');
    function getBlogs() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/Blogs/GetActiveBlogsWithoutFile`,

            success: function (data) {
                $blog.empty();
                $.each(
                    data.data, function (i, value) {
                        if ($lang == 'AZ') {
                            var name = value?.azTitle
                            var description = value?.azDescription;

                        }
                        else if ($lang == 'EN') {
                            var name = value?.enTitle
                            var description = value?.enDescription;

                        } else {
                            var name = value?.ruTitle;
                            var description = value?.ruDescription;

                        }
                        
                        //var description = value.description.slice(0, 10);
                        if (i <= 4) {
                            $blog.append(
                                `  <article data-clickable="clickable"> 
                                            <a href="/Blog/Detail/${value.id}" title="${name}">
                                            ${name}
                                     </a>
                                <span>${description?.slice(0,50)}    
                                        </span> </article>
                               `

                            );
                        }
                        
                    }
                )

            }

        });
    }

    getBlogs();

    
    $(document).on('click', '#searchButton', async function () {
        localStorage.setItem('program', $(`#programInput1`).val());
        localStorage.setItem('country', $(`#countryInput`).val());
        localStorage.setItem('direction', $(`#directionInput`).val());
        var empty = [];
        localStorage.setItem('locationSearch', JSON.stringify(empty));
        localStorage.setItem('disciplinesSearch', JSON.stringify(empty));
        localStorage.setItem('durationsSearch', JSON.stringify(empty));
        localStorage.setItem('attendenceSearch', JSON.stringify(empty));
        localStorage.setItem('programSearch', JSON.stringify(empty));
        location.href = "/Search";
    });
});