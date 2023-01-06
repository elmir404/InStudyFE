$(document).ready(function () {

    var $country = $('#CountrySpotlightContainer');
    var $partners = $('#partners');
    var $questionHeader = $('#questionHeader');
    var $questions = $('#accordionExample');
    var $countryMenu = $('#countryMenu');
    var $countryHeader = $('#countryHeader');
    var $universityMenu = $('#universityMenu');
    var $universityHeader = $('#universityHeader');
    var $disciplinesMenu = $('#disciplinesMenu');
    var $uniMore = $('#uniMore');
    var $countryMore = $('.countryMore');
    var $disciplinesHeader = $('#disciplinesHeader');
    var $disciplineHeader = $('#disciplineHeader');
    var $homeCoutryHeader = $('#homeCountryHeader');
    var $partnersHeader = $('#partnerHeader');
    var $arcticlesHeader = $('#articlesHeader');
    var $homeHeader = $('#homeHeader');
    var $quateHeader = $('#quateHeader');
    var $quate = $('#quotes');
    
    const $lang = localStorage.getItem('lang');
    if ($lang == 'AZ') {
        $countryHeader.html(`Seçilmiş ölkələr`);
        $universityHeader.html(`Seçilmiş universitetlər`);
        $disciplinesHeader.html(`İxtisaslar`);
        $disciplineHeader.html(`İxtiaslara baxın`);
        $countryMore.html(`Bütün ölkələri göstər`);
        $uniMore.html(`Bütün universitetləri göstər`);
        $homeCoutryHeader.html(`Başqa ölkələri kəşf et`);
        $partnersHeader.html(`Tərəfdaşlar`);
        $arcticlesHeader.html(`Maraqlı Məqalələr`);
        $quateHeader.html(`Tələbələrin sözləri ilə biz`);

    }
    else if ($lang == 'EN') {
        $countryHeader.html(`Popular countries`);
        $universityHeader.html(`Popular universities`);
        $disciplinesHeader.html(`Discipliens`);
        $disciplineHeader.html(`Browse by Discipline`);
        $homeCoutryHeader.html(`Discover other countries`);
        $partnersHeader.html(`Partners`);
        $arcticlesHeader.html(`Interesting Articles`);
        $quateHeader.html(`Us in students' words`);
        $countryMore.html(`View all countries`);
        $uniMore.html(`View all universities`);
    } else {
        $countryHeader.html(`Популярные страны`);
        $universityHeader.html(`Популярные университеты`); 
        $disciplinesHeader.html(`Дисциплины`);
        $disciplineHeader.html(`Поиск по дисциплине`);
        $homeCoutryHeader.html(`Откройте для себя другие страны`);
        $partnersHeader.html(`Партнеры`);
        $arcticlesHeader.html(`Интересные статьи`);
        $countryMore.html(`Просмотреть все страны`);
        $quateHeader.html(`Мы словами студентов`);
        $uniMore.html(`Просмотреть все университеты`);
    }
    function getCountry() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/Country/GetActiveCountries`,

            success: function (data) {
                $country.empty();
                $.each(
                    data.data, function (i, value) {

                        const date = new Date(value.regDate)

                        var dd = String(date.getDate()).padStart(2, '0');
                        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = date.getFullYear();
                        var time = yyyy + "/" + mm + "/" + dd;
                        if ($lang == 'AZ') {
                            var name = value.azName
                            var description = value?.azDescription;

                        }
                        else if ($lang == 'EN') {
                            var name = value.enName
                            var description = value?.enDescription;

                        } else {
                            var name = value.ruName;
                            var description = value?.ruDescription;

                        }
                        var image = `data:image/png;base64,${value?.countryFiles[0]?.bytes}`

                        if (i < 10) {
                            $countryMenu.append(`
                                                <li class="SubSectionContentItem"> <a class="ContentItemLink js-ContentItemLink" href="/Country/Detail/${value.id}" title="${name}">${name}</a> </li>

`
                            )
                        }
                        //var description = value.description.slice(0, 5);
                        if (i < 1) {

                            $country.append(
                                ` <figure data-clickable="clickable">
                              <a href="/Country/Detail/${value.id}" title="Netherlands">
                                 <span class="Picture" data-file-url="" data-title="Netherlands">
                                    <picture>
                                       <source media="all and (max-width: 30em)" srcset="${image}">
                                       <source media="all and (min-width: 30.063em) and (max-width: 48em)" srcset=${image}">
                                       <source media="all and (min-width: 48.063em) and (max-width: 80em)" srcset="${image}">
                                       <source media="all and (min-width: 80.063em)" srcset="${image}">
                                       <img src="${image}" alt="data:image/png;base64, Netherlands" loading="lazy" width="143" height="95">
                                    </picture>
                                 </span>
                              <figcaption>
                                 <span> ${name} </span> 
                                 <div class="Toggle"> 
                                       ${description}
                                 </div>
                              </figcaption>
                              </a>

                           </figure>
                                         `
                            )
                        }
                        $(`#country`).append(`
                                                 <li class="Suggestion Link" data-position="0" onclick='searchCountry("${name}")' data-param-value="351" data-param-name="discipline_ids">${name}</li>

`);

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
        url: `https://api.instudy.net/api/Program/GetPrograms`,

        success: function (data) {
            $country.empty();
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
                    $(`#program`).append(`
                                                 <li class="Suggestion Link" onclick='searchProgram("${name}")'  data-param-name="discipline_ids">${name}</li>


`);

                }
            )

        }

    });
    function getHeader() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/Content/GetLastContent`,

            success: function (data) {
                $country.empty();
             
                    
                        if ($lang == 'AZ') {
                            var name = data.data?.azHeader
                            var description = data.data?.azBody;

                        }
                        else if ($lang == 'EN') {
                            var name = data.data?.enHeader
                            var description = data.data?.enBody;

                        } else {
                            var name = data.data?.ruHeader
                            var description = data.data?.ruBody;

                        }
                        //var image = `data:image/png;base64,${data.data?.countryFiles[0]?.bytes}`

                        
                $homeHeader.append(`
                                                <h1 class="DegreeType"> ${description} </h1>
                              <h2 class="HeadingMainTitle"> ${name} </h2>

`
                            )
                        
                        //var description = value.description.slice(0, 5);
                       


                    
                

            }

        });
    }
    getHeader()
    function getUniversities() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/University/GetAllUniversities`,

            success: function (data) {
                $.each(
                    data.data, function (i, value) {
                       
                        const date = new Date(value.regDate)

                        var dd = String(date.getDate()).padStart(2, '0');
                        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = date.getFullYear();
                        var time = yyyy + "/" + mm + "/" + dd;
                        if ($lang == 'AZ') {
                            var name = value.azName
                            var description = value?.azDescription;

                        }
                        else if ($lang == 'EN') {
                            var name = value.enName
                            var description = value?.enDescription;

                        } else {
                            var name = value.ruName;
                            var description = value?.ruDescription;

                        }
                        var image = `data:image/png;base64,${value?.universityFiles[0]?.bytes}`
                        
                        if (i < 10) {


                            $universityMenu.append(`
                                                <li class="SubSectionContentItem"> <a class="ContentItemLink js-ContentItemLink" href="/University/Detail/${value.id}" title="${name}">${name}</a> </li>

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
            url: `https://api.instudy.net/api/Direction`,

            success: function (data) {
               
                $.each(
                    data.data, function (i, value) {
                       
                        const date = new Date(value.regDate)

                        var dd = String(date.getDate()).padStart(2, '0');
                        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = date.getFullYear();
                        var time = yyyy + "/" + mm + "/" + dd;
                        if ($lang == 'AZ') {
                            var name = value?.azName
                            var description = value?.description;

                        }
                        else if ($lang == 'EN') {
                            var name = value?.enName
                            var description = value?.enDescription;

                        } else {
                            var name = value?.ruName;
                            var description = value?.ruDescription;

                        }
                        
                        

                        $disciplinesMenu.append(`
                                                <li class="SubSectionContentItem"> <a class="ContentItemLink js-ContentItemLink" href="/Discipline/Detail/${value.id}" title="${name}">${name}</a> </li>

`
                        )
                        $("#disciplines").append(`
                           <li data-clickable="clickable"> <a href="/Discipline/Detail/${value.id}" title="Agriculture &amp; Forestry"> <i class="lnr-tree DisciplineIcons"></i> ${name} </a> </li>

`);
                        $("#direction").append(`
                                                 <li class="Suggestion Link" data-position="0" onclick='searchDirection("${name}")' data-param-value="351" data-param-name="discipline_ids">${name}</li>

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

                    
                    var image = `data:image/png;base64,${value?.studentFiles[0]?.bytes}`

                    



                    $quate.append(`
                           <li class="Quote">
                              <div class="Author">
                                 <img class="AuthorImage" src="${image}" style="width:80px;height:80px;" alt="Luna" width="20" height="20" loading="lazy"> 
                                 <div class="AuthorDetails"> <span class="AuthorName">${value.name}</span> <span class="AuthorCountry">${value?.country?.enName}</span> </div>
                              </div>
                              <blockquote>
${value.description};
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
        url: `https://api.instudy.net/api/About/GetAbouts`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {

                    if ($lang == 'AZ') {
                        var name1 = value.azHeader
                        var description = value?.azDescription;

                    }
                    else if ($lang == 'EN') {
                        var name1 = value.enHeader
                        var description = value?.enDescription;

                    } else {
                        var name1 = value.ruHeader;
                        var description = value?.ruDescription;

                    }





                    $(`#goStudys`).append(`
                                                <li class="SubSectionContentItem"> <a class="ContentItemLink js-ContentItemLink" href="/GoStudy/Index/value${value.id}" title="${name1}">${name1} </a> </li>
                                 

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
        url: `https://api.instudy.net/api/Header/GetActiveHeaders`,

        success: function (data) {

            $.each(
                data.data, function (i, value) {
                    console.log(value);
                    console.log(i);

                    if (i == 0) {
                        $('#header1').append(`
                                 <p> <span class="ItemHeader">${value?.title}</span> ${value?.description} </p>

`)

                    }
                    if (i == 1) {
                        $('#header2').append(`
                                 <p> <span class="ItemHeader">${value?.title}</span> ${value?.description} </p>

`)

                    }
                    if (i == 2) {
                        $('#header3').append(`
                                 <p> <span class="ItemHeader">${value.title}</span> ${value?.description} </p>

`)

                    }
                    if (i == 3) {
                        $('#header4').append(`
                                 <p> <span class="ItemHeader">${value?.title}</span> ${value?.description} </p>


`)

                    }
                    if (i == 4) {
                        $('#header5').append(`
                                 <p> <span class="ItemHeader">${value?.title}</span> ${value?.description} </p>


`)

                    }

                    
                }
            )

        }

    });
    getUniversities();
    function getPartners() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/Partner/GetPartners`,

            success: function (data) {
                $partners.empty();
                $.each(
                    data.data, function (i, value) {
                      
                        var image = `data:image/png;base64,${value?.partnerFiles[0]?.bytes}`
                        //const date = new Date(value.regDate)

                        //var dd = String(date.getDate()).padStart(2, '0');
                        //var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                        //var yyyy = date.getFullYear();
                        //var time = yyyy + "/" + mm + "/" + dd;
                        //if ($lang == 'AZ') {
                        //    var name = value.azName
                        //    var description = value?.azDescription;

                        //}
                        //else if ($lang == 'EN') {
                        //    var name = value.enName
                        //    var description = value?.enDescription;

                        //} else {
                        //    var name = value.ruName;
                        //    var description = value?.ruDescription;

                        //}
                        //console.log(description);

                        //var description = value.description.slice(0, 5);
                        $partners.append(
                            `  <div >
                                  <img  src="${image}">
                                 </div>
                                         `
                        )

                    }
                )

            }

        });
    }
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

               
                        
                        //const date = new Date(value.regDate)

                        //var dd = String(date.getDate()).padStart(2, '0');
                        //var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                        //var yyyy = date.getFullYear();
                        //var time = yyyy + "/" + mm + "/" + dd;
                        if ($lang == 'AZ') {
                            var header = data?.data?.azHeader
                            var body = data?.data?.azBody;

                        }
                        else if ($lang == 'EN') {
                            var header = data?.data?.enHeader
                            var body = data?.data?.enBody;

                        } else {
                            var header = data?.data?.ruHeader
                            var body = data?.data?.ruBody;

                        }
                      

                //var description = value.description.slice(0, 5);
                $questionHeader.append(
                    `  <div class="detail-header-div">
                     <div class="detail-header-text-div">
                        <h4 class="section-sub-title">${header}</h4>
                        <p class="container-text">${body}</p>
                     </div>
                  </div>
                  <div class="detail-text">
                     <div class="info-count">
                       
                     </div>
                     <div class="desc-div">
                        <p class="container-text">${header}</p>
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
                       
                            $questions.append(
                                `   <div class="accordion-item">
                        <h2 class="accordion-header" id="heading${value?.id}">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${value?.id}" aria-expanded="true" aria-controls="collapse${value?.id}">
                                ${title}
                            </button>
                        </h2>
                        <div id="collapse${value?.id}" class="accordion-collapse collapse " aria-labelledby="heading${value?.id}" data-bs-parent="#accordionExample">
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
    getPartners();
      
    getQuestions();
    var $blog = $('#ArticleSpotlightContainer');
    function getBlogs() {
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/Blogs/GetBlogs`,

            success: function (data) {
                $blog.empty();
                $.each(
                    data.data, function (i, value) {
                        const date = new Date(value.regDate)

                        var dd = String(date.getDate()).padStart(2, '0');
                        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = date.getFullYear();
                        var time = yyyy + "/" + mm + "/" + dd;
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
                                <span>${description}
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
    $(document).on('click', '#viewMore', function () {
        console.log("saAS");
        $.ajax({
            type: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: `https://api.instudy.net/api/Country/GetActiveCountries`,

            success: function (data) {
                $country.empty();
                $.each(
                    data.data, function (i, value) {
                        
                        const date = new Date(value.regDate)

                        var dd = String(date.getDate()).padStart(2, '0');
                        var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                        var yyyy = date.getFullYear();
                        var time = yyyy + "/" + mm + "/" + dd;
                        if ($lang == 'AZ') {
                            var name = value?.azName
                            var description = value?.azDescription;

                        }
                        else if ($lang == 'EN') {
                            var name = value?.enName
                            var description = value?.enDescription;

                        } else {
                            var name = value?.ruName;
                            var description = value?.ruDescription;

                        }
                        var image = `data:image/png;base64,${value?.countryFiles[0]?.bytes}`
                        //var description = value.description.slice(0, 5);
                        if (i < 3) {

                            $country.append(
                                ` <figure data-clickable="clickable">
                              <a href="/Country/Detail/${value.id}" title="Netherlands">
                                 <span class="Picture" data-file-url="" data-title="Netherlands">
                                    <picture>
                                       <source media="all and (max-width: 30em)" srcset="${image}">
                                       <source media="all and (min-width: 30.063em) and (max-width: 48em)" srcset=${image}">
                                       <source media="all and (min-width: 48.063em) and (max-width: 80em)" srcset="${image}">
                                       <source media="all and (min-width: 80.063em)" srcset="${image}">
                                       <img src="${image}" alt="data:image/png;base64, Netherlands" loading="lazy" width="143" height="95">
                                    </picture>
                                 </span>
                              <figcaption>
                                 <span> ${name} </span> 
                                 <div class="Toggle"> 
                                       ${description}
                                 </div>
                              </figcaption>
                              </a>

                           </figure>
                                         `
                            )
                        }


                    }
                )

            }

        });
    });
    getCountry();
    $(document).on('click', '#searchButton', async function () {
        console.log("adsadsad");
        localStorage.setItem('program', $(`#programInput`).val());
        localStorage.setItem('country', $(`#countryInput`).val());
        localStorage.setItem('direction', $(`#directionInput`).val());
        location.href = "/Search";
    });
});