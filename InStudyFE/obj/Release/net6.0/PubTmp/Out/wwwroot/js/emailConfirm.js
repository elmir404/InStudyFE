$(document).ready(function () {
    EmailConfirm();
    function EmailConfirm() {
        var pathname = window.location.pathname;
        console.log(pathname);
        const linkValues = pathname.split("/");
        const $emailConfArea = $('#emailConfArea');
        console.log(linkValues);
        $.ajax({
            type: "POST",
            url: `https://localhost:7223/api/Users/ConfirmEmail?userName=${linkValues[3]}&confirmToken=${linkValues[4]}`,
            contentType: 'application/json',
            success: function (response) {
                console.log(response);
                if (response == true) {
                    $emailConfArea.empty();
                    $emailConfArea.append(
                        `
                               <div class="frontpage-banner-content">
                                <h2 class="hero-title w-200 aos-item mrb-0">Hesabınız təsdiqləndi!</h2>
                                <h3 class="hero-title w-800 aos-item">Email ünvanınız uğurla təsdiqləndi.Giriş edə bilərsiniz!</h3>
                                <!-- /.hero-title -->
                            </div><!-- /.hero-content-area -->
                       `


                    )
                }
                else {
                    $emailConfArea.empty();
                    $emailConfArea.append(
                        `    
                          <div class="frontpage-banner-content">
                            <h2 class="hero-title w-200 aos-item mrb-0" data-aos="fade-left" data-aos-duration="100" data-aos-once="true">Hesabınız təsdiqlənmədi!</h2>
                            <h3 class="hero-title w-800 aos-item" data-aos="fade-left" data-aos-duration="200" data-aos-once="true">Bir xəta yarandı!</h3>
                            <!-- /.hero-title -->
                        </div><!-- /.hero-content-area -->

                        `
                    )


                }
            },
            error: function (response) {
                console.log(response.message);
            }

        });
    }

});