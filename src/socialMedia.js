(function ($) {

    $.fn.socialMedia = function (options) {

        var settings = $.extend({

            title: "Social Media and Network",
            content: "",
            footer: "(c) Copyright",
            radiusBorder: true,
            fontSize: "14px",

            facebook: "test.tester",
            facebookMessenger: "test.tester",
            twitter: "test.tester",
            pinterest: "test.tester",
            instagram: "test.tester",
            googlePlus: "test.tester",
            foursquare: "test.tester",
            whatsapp: "01800123456789",
            xing: "test.tester",
            linkedin: "test.tester",
            youtube: "test.tester",
            vimeo: "test.tester",
            mail: "test.tester@test.org"

        }, options);

        $("body").append('<div id="social" class="modal"><div class="modal-container"><div class="modal-header"><div id="header" class="w90">Header - Title</div><div class="w10"><span class="close">&times;</span></div></div><div id="content" class="modal-content"><div>Simple Content</div></div><div id="footer" class="modal-footer"><div>Footer - Notes</div></div></div></div>');

        this.click(function () {

            $("#header").html(settings.title);
            $("#content").html(settings.content);
            $("#footer").html(settings.footer);

            if (settings.facebook == "" || settings.facebook == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="facebook" class="box"><a href="https://facebook.com/' + settings.facebook + '" target="_blank"><div><i class="fab fa-facebook fa-2x"></i><span class="place">Facebook</span></div></a></div>');
            
            }

            if (settings.facebookMessenger == "" || settings.facebookMessenger == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="facebookMessenger" class="box"><a href="https://m.me/' + settings.facebookMessenger + '" target="_blank"><div><i class="fab fa-facebook-messenger fa-2x"></i><span class="place">Messenger</span></div></a></div>');
            
            }

            if (settings.twitter == "" || settings.twitter == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="twitter" class="box"><a href="https://twitter.com/' + settings.twitter + '" target="_blank"><div><i class="fab fa-twitter fa-2x"></i><span class="place">Twitter</span></div></a></div>');
            
            }

            if (settings.pinterest == "" || settings.pinterest == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="pinterest" class="box"><a href="https://pinterest.com/' + settings.pinterest + '" target="_blank"><div><i class="fab fa-pinterest fa-2x"></i><span class="place">Pinterest</span></div></a></div>');
            
            }

            if (settings.instagram == "" || settings.instagram == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="instagram" class="box"><a href="https://instagram.com/' + settings.instagram + '" target="_blank"><div><i class="fab fa-instagram fa-2x"></i><span class="place">Instagram</span></div></a></div>');
            
            }

            if (settings.googlePlus == "" || settings.googlePlus == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="googlePlus" class="box"><a href="https://plus.google.com/' + settings.googlePlus + '" target="_blank"><div><i class="fab fa-google-plus fa-2x"></i><span class="place">Google+</span></div></a></div>');
            
            }

            if (settings.foursquare == "" || settings.foursquare == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="foursquare" class="box"><a href="https://foursquare.com/user/' + settings.foursquare + '" target="_blank"><div><i class="fab fa-foursquare fa-2x"></i><span class="place">Foursquare</span></div></a></div>');
            
            }

            if (settings.whatsapp == "" || settings.whatsapp == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="whatsapp" class="box"><a href="https://api.whatsapp.com/send?phone=' + settings.whatsapp + '" target="_blank"><div><i class="fab fa-whatsapp fa-2x"></i><span class="place">Whatsapp</span></div></a></div>');
            
            }

            if (settings.xing == "" || settings.xing == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="xing" class="box"><a href="https://xing.com/' + settings.xing + '" target="_blank"><div><i class="fab fa-xing fa-2x"></i><span class="place">XING</span></div></a></div>');
            
            }

            if (settings.linkedin == "" || settings.linkedin == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="linkedin" class="box"><a href="https://linkedin.com/' + settings.linkedin + '" target="_blank"><div><i class="fab fa-linkedin fa-2x"></i><span class="place">LinkedIn</span></div></a></div>');
            
            }

            if (settings.youtube == "" || settings.youtube == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="youtube" class="box"><a href="https://youtube.com/' + settings.youtube + '" target="_blank"><div><i class="fab fa-youtube fa-2x"></i><span class="place">YouTube</span></div></a></div>');
            
            }

            if (settings.vimeo == "" || settings.vimeo == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="vimeo" class="box"><a href="https://vimeo.com/' + settings.vimeo + '" target="_blank"><div><i class="fab fa-vimeo fa-2x"></i><span class="place">vimeo</span></div></a></div>');
            
            }

            if (settings.mail == "" || settings.mail == "none") {

                $("#content").append('');

            } else {

                $("#content").append('<div id="mail" class="box"><a href="mailto:' + settings.mail + '" target="_top"><div><i class="far fa-envelope fa-2x"></i><span class="place">Mail</span></div></a></div>');
            
            }

            if (settings.radiusBorder == true) {

                $(".modal-container").css("border-radius", "25px");

            } else {

                $(".modal-container").css("border-radius", "0px");
            
            }

            if (settings.fontSize == "" ||  settings.fontSize == null) {

                $(".modal-container").css("font-size", "12px");

            } else {
                
                $(".modal-container").css("font-size", "" + settings.fontSize + "");
            
            }

            $("#social").fadeIn();

            $("body").css("position", "fixed");

        });

        $(".close").click(function () {
            $("#social").fadeOut();
            $("body").css("position", "");
        });

        return this.css({
            title: settings.title,
            content: settings.content,
            footer: settings.footer,
            radiusBorder: settings.radiusBorder,
            fontSize: settings.fontSize
        });

    };

}(jQuery));

var dw = document ||  window;

dw.onclick = function (event) {

    var modal = document.getElementById("social");

    if (event.target == modal) {

        $("#social").fadeOut();
        $("body").css("position", "");

    }

}