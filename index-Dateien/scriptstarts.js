jQuery(document).ready((function(e){function n(){e(".main-navigation-wrapper").fadeOut(),e(".main-navigation-container").removeClass("main-navigation-container--open")}e(".main-navigation-toggle").click((function(){e(".main-navigation-wrapper").fadeIn().css("display","flex"),e(".main-navigation-container").addClass("main-navigation-container--open")})),e(".main-navigation-toggle--close").click(n),e(".content-overlay").click(n),e(document).keyup((function(e){"Escape"===e.key&&n()})),e(".main-navigation-container .menu-item-has-children > a").click((function(){e(this).parent().toggleClass("sub-menu-open").find(".sub-menu").slideToggle()}))})),jQuery(document).ready((function(e){e(".sitesearch-toggle").click((function(){e(".sitesearch-container").fadeIn().addClass("sitesearch-container--open").find("#s").focus(),e(".sitesearch-overlay").fadeIn().addClass("sitesearch-overlay--open")}))})),jQuery(document).ready((function(e){function n(){e(".sitesearch-overlay").fadeOut().removeClass("sitesearch-overlay--open"),e(".sitesearch-container").fadeOut().removeClass("sitesearch-container--open")}e(".sitesearch-toggle--close").click(n),e(".sitesearch-overlay").click(n)}))