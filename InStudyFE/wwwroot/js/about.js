$(document).ready(function () {
    const $lang = localStorage.getItem('lang');
    var pathname = window.location.pathname;
    const linkValues = pathname.split("/");
    console.log(linkValues[3]);
$.ajax({
    type: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    url: `https://api.instudy.net/api/About/GetAbouts`,
    success: function (data) {
        $(`#ContentSwitcher`).empty();
        $.each(
            data.data, function (i, value) {
                console.log("ssadsa", value);
                const date = new Date(value.regDate)

                var dd = String(date.getDate()).padStart(2, '0');
                var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = date.getFullYear();
                var time = yyyy + "/" + mm + "/" + dd;
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
                if (linkValues[3] ==`value${value.id}`) {
                    $(`#ContentSwitcher`).append(
                        `
                            <button type="button" class="ContentButton js-contentButtons key_facts is-active" id="value${value.id}" onclick="swith('value${value.id}')"> ${name1} </button>
                          `
                    );
                } else {
                    $(`#ContentSwitcher`).append(
                        `
                            <button type="button" class="ContentButton js-contentButtons key_facts" id="value${value.id}" onclick="swith('value${value.id}')"> ${name1} </button>
                          `
                    );
                }
                if (linkValues[3] == `value${value.id}`) {


                    $(`#SwitchableContent`).append(`
<div class="SwitchableGroup js-content-key_facts key_facts is-visible" id="value${value.id}_content">
                  <button class="ToggleButton js-contentButtons js-content-key_facts mdc-layout-grid" data-id="key_facts">
                     <div class="ToggleButtonInner"><span class="ToggleButtonTitle">${name1}</span><i class="ToggleButtonIcon lnr-chevron-down"></i></div>
                  </button>
                  <article class="ModulesContainer">
                     <div data-module="Study:study_key_facts" class="Module StudyPortals_Shared_Modules_Study_DetailedInformation_KeyFacts_KeyFacts">
                        <section>
                           <div id="StudyKeyFacts">
                              <h2 class="KeyFactsTitle">${name1}</h2>
                              <article class="FactItem">
                                   <div>
${description}
</div>
                              </article>
                              
                           </div>
                        </section>
                     </div>
                  </article>
               </div>
`)
                } else {
                    $(`#SwitchableContent`).append(`
<div class="SwitchableGroup js-content-key_facts key_facts" id="value${value.id}_content">
                  <button class="ToggleButton js-contentButtons js-content-key_facts mdc-layout-grid" data-id="key_facts">
                     <div class="ToggleButtonInner"><span class="ToggleButtonTitle">${name1}</span><i class="ToggleButtonIcon lnr-chevron-down"></i></div>
                  </button>
                  <article class="ModulesContainer">
                     <div data-module="Study:study_key_facts" class="Module StudyPortals_Shared_Modules_Study_DetailedInformation_KeyFacts_KeyFacts">
                        <section>
                           <div id="StudyKeyFacts">
                              <h2 class="KeyFactsTitle">${name1}</h2>
                              <article class="FactItem">
                                   <div>
${description}
</div>
                              </article>
                              
                           </div>
                        </section>
                     </div>
                  </article>
               </div>
`)
                }

            }
        )




    }
});
});