/***     globaljs  author speacock   2014/03/01   ***/
Drupal.behaviors.chilterntheme = {
  attach: function(context, settings) {
    (function($) {
      /* =============================================================================
             Add 'x' close button and handler to status messages.
             ========================================================================== */
      jQuery.fn.closeButtonMessages = function() {
        $('.messages').each(function() {
          if (jQuery(this).find('a.close').length < 1) {
            jQuery(this).prepend('<a class="close" href="#" title="' + Drupal.t('Close') + '">x</a>');
          }
        });
        jQuery('.messages a.close').click(function(e) {
          e.preventDefault();
          jQuery(this).parent().fadeOut('slow');
        });
      };
      jQuery().closeButtonMessages();
    })(jQuery);
  }
}

var cal_btn_clicked  = false;

function resizeIframe(obj) {
  obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}

var pTimer;

function stopPTimer(){
  var x;
  if(parseInt(readCookie("popuptimer")) != NaN) {
    x = parseFloat(readCookie("popuptimer"));
    x = x + 90000;
    if(x < Date.now()){
      window.clearInterval(pTimer);
      jQuery("html").css("overflow", "hidden");
      jQuery("body").css("overflow", "hidden");
      jQuery("<div id='popupfeedback'><div id='popupfeedbackcontainer'><span id='feedbackclose' onclick='document.getElementById(\"popupfeedback\").style.display = \"none\"; jQuery(\"html\").css(\"overflow\", \"auto\"); jQuery(\"body\").css(\"overflow\", \"auto\");'>×</span><a href='https://chilternrailways.typeform.com/to/iygsxD' target='_blank'><img src='sites/all/themes/custom/chilterntheme/images/new_site_survey_pop_over.png' alt='New site survey' /></a></div></div>").insertAfter("#wrap");
      document.cookie = "popuptimer=NaN";
      jQuery("#popupfeedback").show();
    }
  }
}

// Function that displays your popup

jQuery(document).ready(
  function() {
    if(jQuery("body").hasClass("not-front")) {
      var months = {"01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sep", "10": "Oct", "11": "Nov", "12": "Dec"};
        if(jQuery(".block-chiltern-atos-login").length) {
          if(jQuery("#edit-leaving-from").length && jQuery(".field-name-field-related-origin")) {
            jQuery("#edit-leaving-from").val(jQuery(".field-name-field-related-origin").text());
          }

          if(jQuery("#edit-going-to").length && jQuery(".field-name-field-related-destination")) {
            jQuery("#edit-going-to").val(jQuery(".field-name-field-related-destination").text());
          }
          
          if(jQuery("#edit-departure").length && jQuery(".field-name-field-related-departure span").text().length) {
            value = jQuery(".field-name-field-related-departure span").text();
            jQuery("#edit-departure").val(value.substr(0, 2) + "-" + months[value.substr(3, 2)] + "-" + value.substr(6));
          }      
          if(jQuery("#edit-return").length && jQuery(".field-name-field-related-return span").text().length) {
            value = jQuery(".field-name-field-related-return span").text();
            jQuery("#edit-return").val(value.substr(0, 2) + "-" + months[value.substr(3, 2)] + "-" + value.substr(6));
          }
        }
    }
    jQuery('#edit-ticket-type').change(function() {
      if(jQuery('#ttype').length > 0) {
        jQuery('#ttype').val(jQuery('#edit-ticket-type').val());
      } else {
        jQuery('#edit-atos-ok').before('<input id=\"ttype\" type=\"hidden\" value=' + jQuery('#edit-ticket-type').val() + ' name=\"ticket-type\" />');
      }
    });
    /* if(readCookie("popuptimer") == null){
                  createCookie("popuptimer", Date.now());
                  pTimer = window.setInterval(function(){stopPTimer()}, 1000);
                }*/

    var isMobile = { 
      Android: function() { return navigator.userAgent.match(/Android/i); }, 
      BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
      iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
      Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
      Windows: function() { return navigator.userAgent.match(/IEMobile/i); }, 
      any: function() { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } 
    };



    if(isMobile.any()){
      jQuery('#navigation .menu-header #block-system-user-menu ul li:first a').attr('href', 'http://tickets.chilternrailways.co.uk/Mobile#Login');
      jQuery('#navigation .menu-header #block-system-user-menu ul li:last a').attr('href', 'http://tickets.chilternrailways.co.uk/Mobile#Register');

      jQuery('#block-system-user-menu .last.leaf a').attr("href", "https://tickets.chilternrailways.co.uk/Mobile#Login");
    }



    if((navigator.platform.indexOf("iPad") != -1)){
      jQuery('span.nolink').wrap("<a href='#'></a>");
    }


    var marginLeft;

    var morning_time = true;

    resize_header_components();							
    check_news_ticker_length(75, 62, 35);						
    legal_error_position();
    alter_search_btn();
    live_train_radio_btns();
    check_live_train_numbers();
    customer_enquiries();
    self_service_portal();
    two_for_one_feeds_menu();

    if (jQuery('.front').length) {
      jQuery('#block-chiltern-live-train-times-chiltern-live-updates').before('<div class="close-live-trians"><div class="close-updates-btn"> + </div>');
    }
    if (jQuery('body').width() < 480) {
      jQuery('.close-btn').text('+');
      // jQuery('div.node.node-teaser-image-200px .content').css('margin-left', '55px');
    } else {
      jQuery('.close-btn').text('X');
    }

    check_image_height();

    general_resize();



    if (jQuery('#block-views-disruption-banner-block').length) {
      jQuery('.menu-bg-strip').css({'visibility': 'hidden'});
      jQuery('.menu-bg-strip-2').css({'visibility': 'hidden'});

      setTimeout(function() {
        jQuery('#block-views-disruption-banner-block').prepend('<div class="close-banner"><div class="close-banner-btn"> X </div></div>');
        jQuery('#block-views-disruption-banner-block').slideDown(700, function() {
          if (jQuery('.page-home #header-top').width() <= 480) {
            var height_480 = parseInt(jQuery('#block-views-disruption-banner-block').css('height').replace("px", "")) + 104;
            jQuery('.menu-bg-strip').css({'visibility': 'visible', 'top': height_480});
          } else {
            var height_768 = parseInt(jQuery('#block-views-disruption-banner-block').css('height').replace("px", "")) + 51;
            jQuery('.menu-bg-strip').css({'visibility': 'visible', 'top': height_768});
            jQuery('.menu-bg-strip-2').css({'visibility': 'visible', 'top': height_768 +2});
          }
        });

        jQuery('.close-banner-btn').click(function() {
          jQuery('.menu-bg-strip').css({'visibility': 'hidden'});
          jQuery('.menu-bg-strip-2').css({'visibility': 'hidden'});
          jQuery('#block-views-disruption-banner-block').slideUp(700, function() {
            if (jQuery('.page-home #header-top').width() <= 480) {
              jQuery('.menu-bg-strip').css({'top': '100px', 'visibility': 'visible'});
              jQuery('.page-home #header-top').css({'display': 'none'});
            } else {
              jQuery('.menu-bg-strip').css({'top': '49px', 'visibility': 'visible'});
              jQuery('.menu-bg-strip-2').css({'top': '51px', 'visibility': 'visible'});
              jQuery('.page-home #header-top').css({'display': 'none'});
            }
          });
        });
      }, 1000);

    }

    if (jQuery('.performance').length) {
      jQuery('.performance').mouseover(function() {
        var ref = jQuery(this).attr('id');
        jQuery('.' + ref).show();
      });

      jQuery('.performance').mouseout(function() {
        var ref = jQuery(this).attr('id');
        jQuery('.' + ref).hide();
      });

    }


    jQuery('input, textarea').placeholder();


    if (window.location.pathname != "/") {
      if (readCookie('chiltern-mainline') != null) {
        _chiltern_change_inline_widgets();
        _chiltern_change_home_widgets();
      }
    }



    var primary_color = '#1FB7E1';
    jQuery('#quicktabs-tab-dynamic_quicktabs_menu-1').click(function() {

      jQuery('#block-chiltern-atos-login-atos-quicktab-block-form .item-list').css({'border-bottom': '8px solid #576370'});
      jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form .item-list').css({'border-bottom': '8px solid #576370'});

      jQuery('#quicktabs-container-dynamic_quicktabs_menu ').css({'border': '3px solid #576370', 'border-top': '0px solid transparent'});
    });

    jQuery('#quicktabs-tab-dynamic_quicktabs_menu-0').click(function() {

      jQuery('#block-chiltern-atos-login-atos-quicktab-block-form .item-list').css({'border-bottom': '8px solid ' + primary_color + ''});
      jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form .item-list').css({'border-bottom': '8px solid ' + primary_color + ''});

      jQuery('#quicktabs-container-dynamic_quicktabs_menu ').css({'border': '3px solid ' + primary_color + '', 'border-top': '0px solid transparent'});

    });







    jQuery('.close-live-trians .close-btn').click(function() {
      if (jQuery('body').width() < 480) {
        if (jQuery('.front .view.view-calendar.view-id-calendar .view-header').css('display') == 'block') {
          jQuery('.front div[id^="block-views-calendar-block"]').css({'margin-bottom': '5px','padding-bottom':'0px'});
          jQuery('.front div[id^="block-views-calendar-block"] article .view-header').css({'display': 'none'});
          jQuery('.front div[id^="block-views-calendar-block"] article .view-content').css({'display': 'none'});
          jQuery('.front div[id^="block-views-calendar-block"] article .calendar-icons').css({'display': 'none'});
          jQuery('.front .view.view-calendar.view-id-calendar').css({'padding-top': '11px', 'padding-bottom': '8px'});
          jQuery('.close-live-trians h2').css({'display':'block'});
          jQuery(this).html('+');
          jQuery(this).css({'padding-left':'10px','padding-right':'10px'});
          cal_btn_clicked = false;
        } else {
          cal_btn_clicked = true;
          jQuery('.front div[id^="block-views-calendar-block"]').css({'margin-bottom': '5px', 'padding-bottom':'10px'});
          jQuery('.front .view.view-calendar.view-id-calendar .view-header').css({'display': 'block'});
          jQuery('.front div[id^="block-views-calendar-block"] article .view-content').css({'display': 'block'});
          jQuery('.front div[id^="block-views-calendar-block"] article .calendar-icons').css({'display': 'block'});
          jQuery('.front .view.view-calendar.view-id-calendar').css({'padding-top': '19px', 'padding-bottom': '0'});
          jQuery(this).html('-');
          jQuery(this).css({'padding-left':'12px','padding-right':'13px'});
        }
      } else {
        jQuery('.front #block-chiltern-live-train-times-chiltern-live-updates').css({'display': 'none'});
        jQuery('.front div[id^="block-views-calendar-block"]').css({'display': 'none'});
        jQuery('.front #block-chiltern-live-train-times-chiltern-live-train-times').css({'display': 'none'});
        jQuery('.close-live-trians:first-child').css({'height': '50px', 'background-color': '#576370'});
        jQuery('.live-train-image').css({'display': 'block'});
        jQuery('.close-live-trians h2').css({'display':'block'});
        jQuery('.carousel-bg-image').css({'display':'none'});
        jQuery(this).css({'display': 'none'});

      }


    });

    jQuery('.close-live-trians .close-times-btn').click(function() {
      if (jQuery('.front #block-chiltern-live-train-times-chiltern-live-train-times .content').css('display') == 'block') {
        jQuery('.front #block-chiltern-live-train-times-chiltern-live-train-times .content').css({'display': 'none'});
        jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"]').css({'margin-bottom': '5px', 'padding-bottom': '15px'});
        jQuery(this).html('+');
        jQuery(this).css({'padding-left':'10px','padding-right':'10px'});
      } else {
        jQuery('.front #block-chiltern-live-train-times-chiltern-live-train-times .content').css({'display': 'block'});
        jQuery(this).html('-');
        jQuery(this).css({'padding-left':'12px','padding-right':'13px'});
        jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"]').css({'margin-bottom': '5px', 'padding-bottom': '0'});
      }
    });

    jQuery('.close-live-trians .close-updates-btn').click(function() {
      if (jQuery('.front #block-chiltern-live-train-times-chiltern-live-updates .content').css('display') == 'block') {
        jQuery('.front #block-chiltern-live-train-times-chiltern-live-updates .content').css({'display': 'none'});
        jQuery('.page-home div[id^="block-chiltern-live-train-times-chiltern-live-updates"]').css({'padding-top': '13px', 'padding-bottom': '14px'});
        jQuery(this).html('+');
        jQuery(this).css({'padding-left':'10px','padding-right':'10px'});
        jQuery(this).css({'top': '8px'});
      } else {
        jQuery('.front #block-chiltern-live-train-times-chiltern-live-updates .content').css({'display': 'block'});
        jQuery('.page-home div[id^="block-chiltern-live-train-times-chiltern-live-updates"]').css({'padding-top': '13px', 'padding-bottom': '0'});
        jQuery(this).html('-');
        jQuery(this).css({'padding-left':'12px','padding-right':'13px'});
        jQuery(this).css({'top': '8px'});
      }
    });

    jQuery('.close-live-trians h2').click(function() {
      jQuery('.front #block-chiltern-live-train-times-chiltern-live-updates').css({'display': 'block'});
      jQuery('.front div[id^="block-views-calendar-block"]').css({'display': 'block'});
      jQuery('.front #block-chiltern-live-train-times-chiltern-live-train-times').css({'display': 'block'});
      jQuery('.close-live-trians').css({'height': '0px', 'background-color': 'transparent'});
      jQuery('.live-train-image').css({'display': 'none'});
      jQuery('.close-live-trians .close-btn').css({'display': 'block'});
      jQuery('.carousel-bg-image').css({'display': 'block'});
    });

    /**
             * this is on the profile page and just removes the first option from the drop downs
             */
    jQuery("#edit-profile-my-details-field-title-und option[value='_none']").remove();

    jQuery("#edit-profile-my-details-field-year-of-birth-und option[value='_none']").remove();

    jQuery("#edit-profile-travel-alerts-field-travel-hour-und option[value='_none']").remove();

    jQuery("#edit-profile-travel-alerts-field-travel-minute-und option[value='_none']").remove();

    jQuery("#edit-profile-travel-alerts-field-alert-hour-und option[value='_none']").remove();

    jQuery("#edit-profile-travel-alerts-field-alert-minute-und option[value='_none']").remove();

    jQuery("#edit-profile-travel-alerts-field-evening-alert-hour-und option[value='_none']").remove();

    jQuery("#edit-profile-travel-alerts-field-evening-alert-minute option[value='_none']").remove();

    jQuery("#edit-profile-travel-alerts-field-evening-travel-hour-und option[value='_none']").remove();

    jQuery("#edit-profile-travel-alerts-field-evening-travel-minute-und option[value='_none']").remove();

    jQuery("#edit-profile-travel-preferences-field-type-of-fare-und option[value='_none']").remove();

    jQuery("#edit-profile-travel-preferences-field-type-of-traveller-und option[value='_none']").remove();

    jQuery('#profile2-edit-my-details-form #chiltern_user_form_wrapper .mobile-helper').click(function() {
      jQuery('#profile2-edit-my-details-form #chiltern_user_form_wrapper .mobile-helper-txt').toggle();
    });

    jQuery('#edit-profile-travel-preferences-field-home-station .mobile-helper').click(function() {
      jQuery('#edit-profile-travel-preferences-field-home-station .mobile-helper-txt').toggle();
    });
    jQuery('#edit-profile-travel-preferences-field-work-station .mobile-helper').click(function() {
      jQuery('#edit-profile-travel-preferences-field-work-station .mobile-helper-txt').toggle();
    });
    jQuery('#edit-profile-travel-preferences-field-type-of-traveller .mobile-helper').click(function() {
      jQuery('#edit-profile-travel-preferences-field-type-of-traveller .mobile-helper-txt').toggle();
    });
    jQuery('#edit-profile-travel-preferences-field-type-of-fare .mobile-helper').click(function() {
      jQuery('#edit-profile-travel-preferences-field-type-of-fare .mobile-helper-txt').toggle();
    });

    jQuery('#chiltern-register-module-change-password-form .form-item.form-type-password.form-item-current-pass .mobile-helper').click(function() {
      jQuery('#chiltern-register-module-change-password-form .form-item.form-type-password.form-item-current-pass .mobile-helper-txt').toggle();
    });

    jQuery('#chiltern-register-module-change-password-form .form-item.form-type-password.form-item-pass-pass1 .mobile-helper').click(function() {
      jQuery('#chiltern-register-module-change-password-form .form-item.form-type-password.form-item-pass-pass1 .mobile-helper-txt').toggle();
    });

    jQuery('#chiltern-register-module-change-password-form .form-item.form-type-password.form-item-pass-pass2 .mobile-helper').click(function() {
      jQuery('#chiltern-register-module-change-password-form .form-item.form-type-password.form-item-pass-pass2 .mobile-helper-txt').toggle();
    });

    jQuery('#next-btn-ok').click(function() {
      jQuery('#edit-next').slideToggle();
      jQuery('html,body').animate({
        scrollTop: jQuery("#edit-next").offset().top - 25});
    });

    var date = new Date();
    if (jQuery('#edit-next-travel-date-datepicker-popup-0').length > 0) {


      jQuery('#edit-next-travel-date-datepicker-popup-0').datepicker({
        buttonImage: "/sites/all/themes/custom/chilterntheme/images/calendar.png",
        showOn: "button",
        buttonImageOnly: true,
        dateFormat: 'd-M-yy',
      });

      var detach_date = jQuery('#ui-datepicker-div').detach();

      jQuery('#chiltern_user_form_wrapper .form-item.form-type-textfield.form-item-next-travel-date-date').after(detach_date);

      jQuery('#edit-next-travel-date-datepicker-popup-0').click(function() {
        jQuery('#edit-next-travel-date-datepicker-popup-0').datepicker('show');
      });
    }




    if (jQuery('#edit-submitted-travel-date').length > 0) {


      jQuery('#edit-submitted-travel-date').datepicker({
        buttonImage: "/sites/all/themes/custom/chilterntheme/images/calendar.png",
        showOn: "button",
        buttonImageOnly: true,
        dateFormat: 'd-M-yy',
      });
      var detach_anon_date = jQuery('#ui-datepicker-div').detach();

      jQuery('.ui-datepicker-trigger').after(detach_anon_date);


      jQuery('#edit-submitted-travel-date').click(function() {

        jQuery('#edit-submitted-travel-date').datepicker('show');
      });
    }



    if(jQuery('.page-user-register').length >= 1){
      if(jQuery('#messages .messages.error').length >= 1){
        var txt = jQuery('#messages .messages.error').text();
        var er_mess = jQuery('#messages .messages.error').detach();
        txt =  txt.substring(txt.indexOf("The e-mail address"));
        txt = txt.substring(0, txt.indexOf('registered.'))+'registered.';
        jQuery('div[id^="edit-account"]').prepend('<p class="form-success-markup">'+txt+'</p>');				
      }
    }


    if(jQuery('.page-user-login').length >= 1){
      if(jQuery('#messages .messages.error').length >= 1){
        var txt = jQuery('#messages .messages.error').text();

        var er_mess = jQuery('#messages .messages.error').detach();

        if(txt.indexOf("The username") > -1){
          jQuery('#chiltern_user_form_wrapper h1').after('<p class="form-success-markup">Invalid credentials</p>');
        }else if(txt.indexOf("Sorry") > -1){
          jQuery('#chiltern_user_form_wrapper h1').after('<p class="form-success-markup">Sorry unrecognized email or password</p>');
        }else if (txt.indexOf("This email") > -1){
          jQuery('#chiltern_user_form_wrapper h1').after('<p class="form-success-markup">This email is already registered but not activated. <br /> A new activation email has been sent</p>');
        }			
      }
    }


    if(jQuery('.page-user-password').length >= 1){
      if(jQuery('#messages .messages.error').length >= 1){
        var txt = jQuery('#messages .messages.error').text();
        var er_mess = jQuery('#messages .messages.error').detach();
        jQuery('#chiltern_user_form_wrapper h2').after('<p class="form-success-markup">Sorry unrecognized email</p>');

      }
    }


    //

    //page-user-login



    /**
             * SET Live train departure fields on home page
             */
    if (jQuery('#-chiltern-live-train-times-form').length) {
      jQuery.post('/chiltern-live-train-times/current-time', function(returnData) {
        var d = new Date();
        var hours = (d.getMinutes() < 10) ? '0' + d.getHours() : mins = d.getHours();
        var mins = (d.getMinutes() < 10) ? '0' + d.getMinutes() : mins = d.getMinutes();

        if (hours + ':' + mins <= returnData) {
          if (readCookie('Drupal.visitor.home-station') != null) {
            if (readCookie('Drupal.visitor.home-station') != 'none') {
              morning_time = true;
              jQuery('#-chiltern-live-train-times-form input[id^="edit-stations-fieldset-leaving-from"]').val(readCookie('Drupal.visitor.home-station'));
            }
          }
          if (readCookie('Drupal.visitor.work-station') != null) {
            if (readCookie('Drupal.visitor.work-station') != 'none') {
              morning_time = true;
              jQuery('#-chiltern-live-train-times-form input[id^="edit-stations-fieldset-going-to"]').val(readCookie('Drupal.visitor.work-station'));
            }
          }
        } else {

          if (readCookie('Drupal.visitor.home-station') != null) {
            if (readCookie('Drupal.visitor.home-station') != 'none') {
              if (readCookie('Drupal.visitor.work-station') != 'none') {
                if(jQuery('#edit-stations-fieldset-leaving-from').attr('placeholder') =='Work station'){

                  morning_time = false;

                  jQuery('#-chiltern-live-train-times-form input[id^="edit-stations-fieldset-leaving-from"]').val(readCookie('Drupal.visitor.home-station'));
                }else{
                  morning_time = true;
                  jQuery('#-chiltern-live-train-times-form input[id^="edit-stations-fieldset-leaving-from"]').val(readCookie('Drupal.visitor.work-station'));
                }


              }

            }
          }

          if (readCookie('Drupal.visitor.work-station') != null) {
            if (readCookie('Drupal.visitor.work-station') != 'none') {
              if (readCookie('Drupal.visitor.home-station') != 'none') {

                if(jQuery('#edit-stations-fieldset-leaving-from').attr('placeholder') =='Work station'){
                  morning_time = false;
                  jQuery('#-chiltern-live-train-times-form input[id^="edit-stations-fieldset-going-to"]').val(readCookie('Drupal.visitor.work-station'));
                }else{
                  morning_time = true;
                  jQuery('#-chiltern-live-train-times-form input[id^="edit-stations-fieldset-going-to"]').val(readCookie('Drupal.visitor.home-station'));
                }

              }

            }
          }
        }
      });
    }


    jQuery('#-chiltern-register-module-new-enquiry-details-form #edit-title').change(function() {

      /*
                if (jQuery('#-chiltern-register-module-new-enquiry-details-form .form-item.form-type-select.form-item-title .error').length) {

                    if (jQuery(this).children("option").filter(":selected").text() != 'Title') {
                        jQuery('#-chiltern-register-module-new-enquiry-details-form .form-item.form-type-select.form-item-title .error').detach();
                    }
                }

                if (jQuery(this).children("option").filter(":selected").text() == 'Title') {

                    jQuery('#-chiltern-register-module-new-enquiry-details-form .form-item.form-type-select.form-item-title').append('<label class="error" for="edit-pass-pass1" generated="true" style="display: block;">Password field is required.</label>');

                }
                */
    });


    if (jQuery('body').hasClass('front')) {


    }



    if(jQuery('.page-profile-travel-preferences').length >= 1){


      jQuery.post( '/chiltern-live-train-profiling/ajax', function( returnData ) {					
        for (var key in returnData) {

          if(readCookie('Drupal.visitor.home-station') != null){
            if( returnData[key].toLowerCase() == readCookie('Drupal.visitor.home-station').toLowerCase()){
              jQuery('select[id^="edit-profile-travel-preferences-field-home-station"]').val(returnData[key].toLowerCase() );									
            }	
          }

          if(readCookie('Drupal.visitor.work-station') != null){
            if( returnData[key].toLowerCase() == readCookie('Drupal.visitor.work-station').toLowerCase()){
              jQuery('select[id^="edit-profile-travel-preferences-field-work-station"]').val(returnData[key].toLowerCase() );									
            }
          }





          if(readCookie('Drupal.visitor.traveller_type') != 'none'){
            if(readCookie('Drupal.visitor.traveller_type') =='Commuter'){							
              jQuery('select[id^="id^=edit-profile-travel-preferences-field-type-of-traveller"]').val('Commuter' );
            }

            if(readCookie('Drupal.visitor.traveller_type') =='Business'){							
              jQuery('select[id^="edit-profile-travel-preferences-field-type-of-traveller"]').val('Business' );							
            }

            if(readCookie('Drupal.visitor.traveller_type') =='Leisure'){							
              jQuery('select[id^="edit-profile-travel-preferences-field-type-of-traveller"]').val('Leisure' );
            }

          }

        }
      });
    }           
  });




function two_for_one_feeds_menu(){
  jQuery('#main #block-chiltern-2-for-1-feeds-two-for-one-feeds-menu h2').click(function(){
    if( jQuery('body').width() < 768){
      jQuery('#main #block-chiltern-2-for-1-feeds-two-for-one-feeds-menu .two-for-one-menu').toggle(40, function(){					
        if(jQuery('#main #block-chiltern-2-for-1-feeds-two-for-one-feeds-menu .two-for-one-menu').css('display') == 'block'){					
          jQuery('#block-views-local-events-block-1 .two-for-one-menu').css({'display':'none'});
          jQuery('#block-chiltern-2-for-1-feeds-two-for-one-destination-menu .two-for-one-menu').css({'display':'none'});					
        }
      });
    }
  });

  jQuery('#block-chiltern-2-for-1-feeds-two-for-one-destination-menu h2').click(function(){
    if( jQuery('body').width() < 768){
      jQuery('#block-chiltern-2-for-1-feeds-two-for-one-destination-menu .two-for-one-menu').toggle(40, function(){					
        if(jQuery('#block-chiltern-2-for-1-feeds-two-for-one-destination-menu .two-for-one-menu').css('display') == 'block'){					
          jQuery('#block-views-local-events-block-1 .two-for-one-menu').css({'display':'none'});
          jQuery('#main #block-chiltern-2-for-1-feeds-two-for-one-feeds-menu .two-for-one-menu').css({'display':'none'});					
        }
      });
    }		
  });

  jQuery('#block-views-local-events-block-1 h2').click(function(){
    if( jQuery('body').width() < 768){
      jQuery('#block-views-local-events-block-1 .two-for-one-menu').toggle(40, function(){					
        if(jQuery('#block-views-local-events-block-1 .two-for-one-menu').css('display') == 'block'){					
          jQuery('#block-chiltern-2-for-1-feeds-two-for-one-destination-menu .two-for-one-menu').css({'display':'none'});
          jQuery('#main #block-chiltern-2-for-1-feeds-two-for-one-feeds-menu .two-for-one-menu').css({'display':'none'});					
        }
      });
    }		
  });
}

function check_two_for_one_menu_display(){	
  if (jQuery('.two-for-one-menu').length) {
    jQuery(window).resize(function() {				
      if( jQuery('body').width() >= 768){
        jQuery('.two-for-one-menu').css({'display':'block'});
      }else{
        jQuery('.two-for-one-menu').css({'display':'none'});
      }

    });
  }	
}


function check_news_ticker_length(txt_960, txt_768, txt_480){


  if(jQuery('#views_slideshow_cycle_main_clone_of_news_ticker-block').length >= 1){
    jQuery("#views_slideshow_cycle_main_clone_of_news_ticker-block div div div a").each(function(i){
      var body = jQuery('body').width();
      var txt_len = "";				
      if( body  >= 960){
        txt_len = txt_960;
      }else if( body  >= 768){
        txt_len = txt_768;
      }else if( body  >= 480){
        txt_len = txt_480;
      }		
      len=jQuery(this).text().length;
      if(len>txt_len){				
        var str = jQuery(this).text().substr(0,txt_len) ;
        var endIndex = str.lastIndexOf(" ");
        var newstr =  (endIndex != -1) ? str.substring(0, endIndex) : str;
        jQuery(this).text(newstr+'...');
      }  
    });
  }


  if(jQuery('#views_slideshow_cycle_main_news_ticket_view-block').length >= 1){
    jQuery("#views_slideshow_cycle_main_news_ticket_view-block div div a").each(function(i){			
      var body = jQuery('body').width();
      var txt_len = "";				
      if( body  >= 960){
        txt_len = txt_960;
      }else if( body  >= 768){
        txt_len = txt_768;
      }else if( body  >= 480){
        txt_len = txt_480;
      }
      len=jQuery(this).text().length;
      if(len>txt_len){
        var str = jQuery(this).text().substr(0,txt_len) ;
        var endIndex = str.lastIndexOf(" ");
        var newstr =  (endIndex != -1) ? str.substring(0, endIndex) : str;
        jQuery(this).text(newstr+'...');
      }  
    });
  }

}



function customer_enquiries(){


  if(jQuery('#profile2-edit-travel-preferences-form').length){
    var pref_home = '#edit-profile-travel-preferences-field-home-station-und';
    jQuery(pref_home ).val() == "" ? jQuery( pref_home ).css({'color':'#999'}) : jQuery( pref_home ).css({'color':'#000'});	
    jQuery( pref_home ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});		
    });

    var pref_work = '#edit-profile-travel-preferences-field-work-station-und';
    jQuery(pref_work ).val() == "" ? jQuery( pref_work ).css({'color':'#999'}) : jQuery( pref_work ).css({'color':'#000'});	
    jQuery( pref_work ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});		
    });
  }




  if(jQuery('#-chiltern-register-module-new-enquiry-details-form').length){

    var title = '#-chiltern-register-module-new-enquiry-details-form #edit-title';	
    jQuery(title ).val() == "" ? jQuery( title ).css({'color':'#999'}) : jQuery( title ).css({'color':'#000'});	
    jQuery( title ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });


    var enquiry_type = '#-chiltern-register-module-new-enquiry-details-form #edit-next-enquiry-type';	
    jQuery(enquiry_type ).val() == "" ? jQuery( enquiry_type ).css({'color':'#999'}) : jQuery( enquiry_type ).css({'color':'#000'});	
    jQuery( enquiry_type ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });


    var hour = '#-chiltern-register-module-new-enquiry-details-form  #edit-next-departure-hour';
    jQuery( hour ).val() == "hour" ? jQuery( hour ).css({'color':'#999'}) : jQuery( hour ).css({'color':'#000'});	
    jQuery( hour ).change(function(){
      jQuery(this).val() == "hour" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });


    var minute = '#-chiltern-register-module-new-enquiry-details-form #edit-next-departure-minute';			
    jQuery( minute ).val() == "minute" ? jQuery( minute ).css({'color':'#999'}) : jQuery( minute ).css({'color':'#000'});
    jQuery( minute ).change(function(){
      jQuery(this).val() == "minute" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });	


    var depart_station = '#-chiltern-register-module-new-enquiry-details-form #edit-next-departure-station';	
    jQuery( depart_station ).val() == "" ? jQuery( depart_station ).css({'color':'#999'}) : jQuery( depart_station ).css({'color':'#000'});
    jQuery( depart_station ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });	

    var destination_station = '#-chiltern-register-module-new-enquiry-details-form #edit-next-destination-station';
    jQuery( destination_station ).val() == "" ? jQuery( destination_station ).css({'color':'#999'}) : jQuery( destination_station ).css({'color':'#000'});	
    jQuery( destination_station ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });	

    var ticket_type ='#-chiltern-register-module-new-enquiry-details-form #edit-next-ticket-type';
    jQuery( ticket_type ).val() == "ticket_type" ? jQuery( ticket_type ).css({'color':'#999'}) : jQuery( ticket_type ).css({'color':'#000'});	
    jQuery( ticket_type ).change(function(){
      jQuery(this).val() == "ticket_type" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });		
  }

  jQuery('#-chiltern-register-module-new-enquiry-details-form').submit(function(){

    if(jQuery('body').width() < 768){
      if(jQuery('#-chiltern-register-module-new-enquiry-details-form .form-item.form-type-select.form-item-next-enquiry-type label.error').css('display') =='block'){
        jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper div.form-item.form-type-select.form-item-next-enquiry-type').css({'margin-bottom':'20px'});
      }else{
        jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper div.form-item.form-type-select.form-item-next-enquiry-type').css({'margin-bottom':'0px'});
      }

      if(jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper .form-item.form-type-select.form-item-title label.error').css('display') =='block'){
        jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper div.form-item.form-type-select.form-item-title').css({'margin-bottom':'33px'});
      }else{
        jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper div.form-item.form-type-select.form-item-title').css({'margin-bottom':'0px'});
      }		
    }
  });


  jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper #edit-next-enquiry-type').change(function(){		
    if(jQuery('body').width() < 768){		
      if(jQuery('#edit-next-enquiry-type').val() == ''){
        if(jQuery('#-chiltern-register-module-new-enquiry-details-form .form-item.form-type-select.form-item-next-enquiry-type label.error').css('display') =='none'){
          jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper div.form-item.form-type-select.form-item-next-enquiry-type').css({'margin-bottom':'20px'});
        }
      }else{
        jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper div.form-item.form-type-select.form-item-next-enquiry-type').css({'margin-bottom':'0px'});
      }
    }		
  });



  jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper #edit-title').change(function(){

    if(jQuery('body').width() < 768){		
      if(jQuery('#edit-next-enquiry-type').val() == ''){
        if(jQuery('#-chiltern-register-module-new-enquiry-details-form div.form-item.form-type-select.form-item-title label.error').css('display') =='none'){

          jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper div.form-item.form-type-select.form-item-title').css({'margin-bottom':'33px'});
        }else{
          jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper div.form-item.form-type-select.form-item-title').css({'margin-bottom':'0px'});
        }
      }else{
        jQuery('#-chiltern-register-module-new-enquiry-details-form #chiltern_user_form_wrapper div.form-item.form-type-select.form-item-title').css({'margin-bottom':'0px'});
      }
    }		
  });




  if(jQuery('#webform-client-form-164').length ){

  
  //Rutesh made this change on 18-11-2015, position the element correctly
  jQuery('#webform-client-form-164 select').each(function(index){
	   jQuery(this ).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    jQuery(this).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });

  });
  
   var anon_compensation = '#edit-submitted-compensation';
    jQuery('#webform-client-form-164 .webform-component--compensation').css({'margin-bottom':'36px'});	
 
  
  /*   //Comment this code for future stability or all the select field added from CMS, changes made by RUTESH on 18/11/2015
  
    var anon_title = '#webform-client-form-164 #edit-submitted-title';	
    jQuery(anon_title ).val() == "" ? jQuery( anon_title ).css({'color':'#999'}) : jQuery( anon_title ).css({'color':'#000'});	
    jQuery( anon_title ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });

    var anon_enquiry = '#edit-submitted-enquiry-type';

    jQuery( anon_enquiry ).val() == "" ? jQuery( anon_enquiry ).css({'color':'#999'}) : jQuery( anon_enquiry ).css({'color':'#000'});	
    jQuery( anon_enquiry ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });




    var anon_hour = '#edit-submitted-departure-time-hour';
    jQuery( anon_hour ).val() == "" ? jQuery( anon_hour ).css({'color':'#999'}) : jQuery( anon_hour ).css({'color':'#000'});	
    jQuery( anon_hour ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });

    var anon_minute = '#edit-submitted-departure-time-minute';
    jQuery( anon_minute ).val() == "" ? jQuery( anon_minute ).css({'color':'#999'}) : jQuery( anon_minute ).css({'color':'#000'});	
    jQuery( anon_minute ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });

    var anon_depart_stat = '#edit-submitted-departure-station';
    jQuery( anon_depart_stat ).val() == "" ? jQuery( anon_depart_stat ).css({'color':'#999'}) : jQuery( anon_depart_stat ).css({'color':'#000'});	
    jQuery( anon_depart_stat ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });

    var anon_return_stat = '#edit-submitted-destination-station';
    jQuery( anon_return_stat ).val() == "" ? jQuery( anon_return_stat ).css({'color':'#999'}) : jQuery( anon_return_stat ).css({'color':'#000'});	
    jQuery( anon_return_stat ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });

    var anon_ticket_type = '#edit-submitted-ticket-type';
    jQuery( anon_ticket_type ).val() == "" ? jQuery( anon_ticket_type ).css({'color':'#999'}) : jQuery( anon_ticket_type ).css({'color':'#000'});	
    jQuery( anon_ticket_type ).change(function(){
      jQuery(this).val() == "" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });
	*/
  }

}


function self_service_portal(){
  //

  if(jQuery('#profile2-edit-my-details-form').length){

    var title = '#edit-profile-my-details-field-title-und';	
    jQuery(title ).val() == "Title" ? jQuery( title ).css({'color':'#999'}) : jQuery( title ).css({'color':'#000'});	
    jQuery( title ).change(function(){
      jQuery(this).val() == "Title" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });


    var year = '#edit-profile-my-details-field-year-of-birth-und';	
    jQuery(year ).val() == "Year" ? jQuery( year ).css({'color':'#999'}) : jQuery( title ).css({'color':'#000'});	
    jQuery( year ).change(function(){
      jQuery(this).val() == "Year" ? jQuery(this).css({'color':'#999'}) : jQuery(this).css({'color':'#000'});	
    });
  }



  if(jQuery('#chiltern-register-module-change-password-form').length){

    jQuery('#edit-current-pass').after('<span class="mobile-helper"></span><span class="mobile-helper-txt">This is the mobile helper text</span>');
    jQuery('#edit-pass-pass1').after('<span class="mobile-helper"></span><span class="mobile-helper-txt">This is the mobile helper text</span>');
    jQuery('#edit-pass-pass2').after('<span class="mobile-helper"></span><span class="mobile-helper-txt">This is the mobile helper text</span>');





    jQuery('#edit-pass-pass1').focus(function(){
      if(jQuery('.form-item.form-type-password.form-item-current-pass label.error').length){
        var current_error = jQuery('.form-item.form-type-password.form-item-current-pass label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-current-pass .mobile-helper').after( current_error );
      }

      if(jQuery('.form-item.form-type-password.form-item-pass-pass1 label.error').length){
        var pass_one_error = jQuery('.form-item.form-type-password.form-item-pass-pass1 label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-pass-pass1 .mobile-helper').after( pass_one_error );
      }

      if(jQuery('.form-item.form-type-password.form-item-pass-pass2 label.error').length){
        var pass_two_error = jQuery('.form-item.form-type-password.form-item-pass-pass2 label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-pass-pass2 .mobile-helper').after( pass_two_error );
      }
    });

    jQuery('#edit-current-pass').focus(function(){
      if(jQuery('.form-item.form-type-password.form-item-current-pass label.error').length){
        var current_error = jQuery('.form-item.form-type-password.form-item-current-pass label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-current-pass .mobile-helper').after( current_error );
      }

      if(jQuery('.form-item.form-type-password.form-item-pass-pass1 label.error').length){
        var pass_one_error = jQuery('.form-item.form-type-password.form-item-pass-pass1 label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-pass-pass1 .mobile-helper').after( pass_one_error );
      }

      if(jQuery('.form-item.form-type-password.form-item-pass-pass2 label.error').length){
        var pass_two_error = jQuery('.form-item.form-type-password.form-item-pass-pass2 label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-pass-pass2 .mobile-helper').after( pass_two_error );
      }
    });

    jQuery('#edit-pass-pass2').focus(function(){
      if(jQuery('.form-item.form-type-password.form-item-current-pass label.error').length){
        var current_error = jQuery('.form-item.form-type-password.form-item-current-pass label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-current-pass .mobile-helper').after( current_error );
      }

      if(jQuery('.form-item.form-type-password.form-item-pass-pass1 label.error').length){
        var pass_one_error = jQuery('.form-item.form-type-password.form-item-pass-pass1 label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-pass-pass1 .mobile-helper').after( pass_one_error );
      }

      if(jQuery('.form-item.form-type-password.form-item-pass-pass2 label.error').length){
        var pass_two_error = jQuery('.form-item.form-type-password.form-item-pass-pass2 label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-pass-pass2 .mobile-helper').after( pass_two_error );
      }
    });



    jQuery('#edit-submit').mouseup(function(){

      if(jQuery('.form-item.form-type-password.form-item-current-pass label.error').length){
        var current_error = jQuery('.form-item.form-type-password.form-item-current-pass label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-current-pass .mobile-helper').after( current_error );
      }

      if(jQuery('.form-item.form-type-password.form-item-pass-pass1 label.error').length){
        var pass_one_error = jQuery('.form-item.form-type-password.form-item-pass-pass1 label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-pass-pass1 .mobile-helper').after( pass_one_error );
      }

      if(jQuery('.form-item.form-type-password.form-item-pass-pass2 label.error').length){
        var pass_two_error = jQuery('.form-item.form-type-password.form-item-pass-pass2 label.error').detach();					
        jQuery('.form-item.form-type-password.form-item-pass-pass2 .mobile-helper').after( pass_two_error );
      }
    });



  }


}


function check_image_height() {
  if (jQuery(document).width() > 979) {
    if (jQuery('.page-home .flexslider .slides img').height() > 785) {

      var img_height = jQuery('.page-home .flexslider .slides img').height() - 785 + 450;

      //jQuery('.page-home .region.region-content section').css({'height':img_height+'px'});

    } else {
      //jQuery('.page-home .region.region-content section').css({'height':'450px'});
    }
  }
}

function createCookie(name, value, days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
  }
  else
    var expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}



function readCookie(name) {

  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {		
    var c = ca[i];
    while (c.charAt(0) == ' '){
      c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0){
        return decodeURIComponent((c.substring(nameEQ.length, c.length) + '').replace(/\+/g, '%20'));
      }
    }       
  }    
  return null;
}







function readDrupalLifeTimeCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  var rtn_cookie = ""; 
  var date = new Date();
  for (var i = 0; i < ca.length; i++) {		
    var c = ca[i];
    while (c.charAt(0) == ' '){
      c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0){
        rtn_cookie =  decodeURIComponent((c.substring(nameEQ.length, c.length) + '').replace(/\+/g, '%20'));
      }
    }        
  }

  if(rtn_cookie){
    var res = rtn_cookie.split(";"); 
    if(res[1] != undefined){
      var finishTime = new Date(jQuery.trim(res[1].replace("expires=", "")) );    
      if(finishTime > date){

        if(res[0] != undefined){
          return res[0];
        }else{
          return null;
        }

      }else{
        eraseCookie(name);
        res[1] = null;
        res[0] = null;
        return res[0];
      }
    }else{
      return null;
    }

  }else{
    return null;	
  } 
}




function eraseCookie(name) {
  createCookie(name, "", -1);
}

function _chiltern_change_home_widgets() {
  var block = "#block-chiltern-atos-login-atos-quicktab-block-form";
  jQuery(block + ' .quicktabs-tabs.quicktabs-style-bullets li.first').removeClass('active');
  jQuery(block + ' .quicktabs-tabs.quicktabs-style-bullets li.last').addClass('active');
  jQuery(block + '  #quicktabs-tabpage-dynamic_quicktabs_menu-0').addClass('quicktabs-hide');
  jQuery(block + '  #quicktabs-tabpage-dynamic_quicktabs_menu-1').removeClass('quicktabs-hide');
  jQuery(block + '  #quicktabs-container-dynamic_quicktabs_menu').css({'border-color': '#576370'});
  jQuery(block + '  #quicktabs-dynamic_quicktabs_menu .item-list').css({'border-bottom-color': '#576370'});
  if (jQuery('body').width() < 480) {
    jQuery('.page-home .region.region-content section').css({'padding-top': '350px'});
  }
  //jQuery(block).css({'display': 'block'});
}
function _chiltern_change_inline_widgets() {
  var inline = "#block-chiltern-atos-login-atos-quicktab-inline-form";
  jQuery(inline + ' .quicktabs-tabs.quicktabs-style-bullets li.first').removeClass('active');
  jQuery(inline + ' .quicktabs-tabs.quicktabs-style-bullets li.last').addClass('active');
  jQuery(inline + ' #quicktabs-tabpage-dynamic_quicktabs_menu-0').addClass('quicktabs-hide');
  jQuery(inline + ' #quicktabs-tabpage-dynamic_quicktabs_menu-1').removeClass('quicktabs-hide');
  jQuery(inline + ' #quicktabs-container-dynamic_quicktabs_menu').css({'border-color': '#576370'});
  jQuery(inline + ' #quicktabs-dynamic_quicktabs_menu .item-list').css({'border-bottom-color': '#576370'});
  //jQuery(inline).css({'display': 'block'});
}

function _chiltern_display_widgets() {
  jQuery('#block-chiltern-atos-login-atos-quicktab-block-form').css({'display': 'block'});
  jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form').css({'display': 'block'});
}


function legal_error_position(){
  jQuery('.form-item.form-type-checkbox.form-item-legal-accept').bind('DOMNodeInserted', function(event) {
    var legal_error = jQuery('.form-item.form-type-checkbox.form-item-legal-accept label.error').detach();
    jQuery('.form-item.form-type-checkbox.form-item-legal-accept label').after(legal_error);
  });
}


function alter_search_btn() {
  jQuery('.mobile-search-btn').click(function() {

    if (jQuery('body').innerWidth() < 480) {
      var input_mt = '29px';
      var region_mt = '46px';
    } else {
      if(jQuery('body').innerWidth() < 768){
        var input_mt = '45px';
        var region_mt = '45px';
        var top = '42px';
      }else{
        var input_mt = '45px';
        var region_mt = '22px';
        var top = '42px';
      }
    }

    if (jQuery('#block-search-form input[id^="edit-search-block-form"]').css('display') == 'none') {
      if (jQuery('body').innerWidth() <= 480) {
        jQuery('#block-search-form input[id^="edit-search-block-form"]').css({'position': 'absolute'});

        jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'left': '-244px', 'width': '19em'}, function() {
          jQuery('#block-search-form input[id^="edit-search-block-form"]').css({'display': 'block'});
          jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'margin-top': input_mt});
          jQuery('.region.region-content').animate({'margin-top': region_mt});
        });

      } else {

        if (jQuery('body').innerWidth() <= 768) {
          jQuery('#block-search-form input[id^="edit-search-block-form"]').css({'position': 'absolute'});

          jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'left': '-327px', 'width': '19em'}, function() {
            jQuery('#block-search-form input[id^="edit-search-block-form"]').css({'display': 'block'});
            jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'margin-top': input_mt});
            jQuery('.region.region-content').animate({'margin-top': region_mt});


          });


        } else {

          jQuery('#block-search-form input[id^="edit-search-block-form"]').css({'position': 'absolute'});
          jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'left': '-244px', 'width': '19em'}, function() {
            jQuery('#block-search-form input[id^="edit-search-block-form"]').css({'display': 'block'});
            jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'margin-top': input_mt, 'top': top});
            jQuery('.region.region-content').animate({'margin-top': region_mt});
          });
        }
      }
    } else {
      if (jQuery('body').innerWidth() < 480) {
        jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'left': '0px', 'width': '5.6em'}, function() {
          jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'margin-top': '2px'});
        });
        jQuery('.region.region-content').animate({'margin-top': '0px'});
        jQuery('#block-search-form input[id^="edit-search-block-form"]').css({'display': 'none', 'position': 'relative'});

      } else {
        jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'left': '0px', 'width': '5.6em'}, function() {
          jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'margin-top': '2px', 'top': '0px'});
        });
        jQuery('.region.region-content').animate({'margin-top': '0px'});
        jQuery('#block-search-form input[id^="edit-search-block-form"]').css({'display': 'none', 'position': 'relative'});
      }
    }
  });
}
function live_train_radio_btns() {

  if(jQuery('.form-item-stations-fieldset-journey-type input').val() == 1){
    jQuery('.swap-live-trains').css({'visibility':'hidden'});
  }else{
    jQuery('.swap-live-trains').css({'visibility':'visible'});
  }

  jQuery(document).ajaxComplete(function() {

    if(cal_btn_clicked == true){		
      jQuery('.front div[id^="block-views-calendar-block"]').css({'margin-bottom': '0'});
      jQuery('.front .view.view-calendar.view-id-calendar .view-header').css({'display': 'block'});
      jQuery('.front div[id^="block-views-calendar-block"] article .view-content').css({'display': 'block'});
      jQuery('.front div[id^="block-views-calendar-block"] article .calendar-icons').css({'display': 'block'});
      jQuery('.front .view.view-calendar.view-id-calendar').css({'padding-top': '19px', 'padding-bottom': '0'});
      //jQuery('.front .view.view-calendar.view-id-calendar h3').css({'text-align': 'center', 'margin-left': '0'});  

    }

    live_train_swap_button();




    //temp turned off until radio button ajax is sorted


    jQuery('.form-item-stations-fieldset-journey-type input').click(function() {
      if (jQuery(this).val() == 1){

        //jQuery('#train-times-ajax tbody tr th.SndTd span').text('Origin');
        jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"] label[for^="edit-stations-fieldset-leaving-from"]').text('At:');
        jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"] label[for^="edit-stations-fieldset-going-to"]').text('From:');
        jQuery('.swap-live-trains').css({'visibility':'hidden'});

      }
      if (jQuery(this).val() == 0){

        jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"] label[for^="edit-stations-fieldset-leaving-from"]').text('From:');
        jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"] label[for^="edit-stations-fieldset-going-to"]').text('To:');
        jQuery('.swap-live-trains').css({'visibility':'visible'});
      }
    });

    /*
        jQuery("#-chiltern-live-train-times-form .fieldset-wrapper input").keyup(function() {

            if (jQuery('#edit-stations-fieldset-leaving-from').val() == "") {

                jQuery('input[id^="edit-stations-fieldset-journey-type-1"]').prop("checked", true);
            } else {
                jQuery('input[id^="edit-stations-fieldset-journey-type-0"]').prop("checked", true);

            }
        });
        */
  })

}

function check_live_train_numbers() {
  if (readCookie('Drupal.visitor.home-station') != 'none') {			
    if(jQuery('#edit-stations-fieldset-leaving-from', top.document).attr('placeholder') == "Work station"){
      jQuery("#edit-stations-fieldset-going-to", top.document).val(readCookie('Drupal.visitor.home-station'));
    }else{
      jQuery("#edit-stations-fieldset-leaving-from", top.document).val(readCookie('Drupal.visitor.home-station'));
    }   
  }

  if (readCookie('Drupal.visitor.work-station') != 'none') {
    if(jQuery('#edit-stations-fieldset-leaving-from', top.document).attr('placeholder') == "Work station"){
      jQuery("#edit-stations-fieldset-leaving-from", top.document).val(readCookie('Drupal.visitor.work-station'));
    }else{
      jQuery("#edit-stations-fieldset-going-to", top.document).val(readCookie('Drupal.visitor.work-station'));
    }  

  }
  jQuery(document).ajaxComplete(function() {
    /*
         if(readCookie('Drupal.visitor.home-station') == 'none' && readCookie('Drupal.visitor.work-station') == 'none'){
         jQuery('.expd-trains').hide();
         }
         */
    /*
        jQuery('.expd-trains').change(function() {
            if (jQuery(".expd-trains option:selected").text() == 'Show all') {

                jQuery('#block-chiltern-live-train-times-chiltern-live-updates ul li').show();
            } else {
                jQuery('#block-chiltern-live-train-times-chiltern-live-updates .updates-list li').each(function() {
                    jQuery(this).hide();
                    var home_st = jQuery(this).html().indexOf(readCookie('Drupal.visitor.home-station'));
                    var work_st = jQuery(this).html().indexOf(readCookie('Drupal.visitor.work-station'));
                    if (home_st >= 1)
                        jQuery(this).show();

                    if (work_st >= 1)
                        jQuery(this).show();
                });
            }
        });
        */
  });
}

if (jQuery('body').innerWidth() < 480) {
  var input_mt = '29px';
  var region_mt = '46px';
} else {
  var input_mt = '45px';
  var region_mt = '22px';
}

if (jQuery('#block-search-form input[id^="edit-search-block-form"]').css('display') == 'none') {
  jQuery('#block-search-form input[id^="edit-search-block-form"]').css({'display': 'block', 'position': 'absolute', 'background-color': '#edffff'});

  jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'margin-top': input_mt}, function() {
    jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'left': '-244px', 'width': '19em'});
    jQuery('#block-search-form input[id^="edit-search-block-form"]').placeholder('Search');
  });
  jQuery('.region.region-content').animate({'margin-top': region_mt});
} else {
  jQuery('#block-search-form input[id^="edit-search-block-form"]').css({'background-color': '#fff'});

  jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'left': '0px', 'width': '5.6em'}, function() {
    jQuery('#block-search-form input[id^="edit-search-block-form"]').animate({'margin-top': '2px'});
  });

  jQuery('.region.region-content').animate({'margin-top': '0px'});
  jQuery('#block-search-form input[id^="edit-search-block-form"]').css({'display': 'none', 'position': 'relative'});
}






function resize_header_components(){



  if(navigator.userAgent.match(/Android/i)){
    android_header_position();
  }


  jQuery(window).resize(function() {
    if(navigator.userAgent.match(/Android/i)){
      android_header_position();
    }
  });



  function android_header_position(){
    if(jQuery('body').width()  < 480){
      //jQuery('.page-home .menu_icon').css({'left':'0'});
      //jQuery('.page-home .region.region-header').css({'left':'5px'});
      //jQuery('.home-link-holder .home-link').css({'left':'0'});
    }
    if(jQuery('body').width() < 768 && jQuery('body').width() >= 480){
      //jQuery('.page-home .region.region-header').css({'left':'109px'});
      //jQuery('.page-routes-and-destinations .region.region-header').css({'left':'5px'});
      //jQuery('.region.region-header').css({'top':'-5px'});
      //jQuery('#block-search-form').css({'left':'12px','top':'38px'});
      //jQuery('#block-system-user-menu').css({'margin-top':'30px', 'margin-left':'50px'});
      //jQuery('.page-home #block-system-user-menu').css({'margin-top':'30px', 'margin-left':'-12px'});
      //jQuery('.home-link-holder .home-link').css({'margin-left':'107px'});
      //jQuery('.page-home .home-link-holder .home-link').css({'left':'27px', 'margin-left':'80px'});
      //jQuery('.page-routes-and-destinations .home-link-holder .home-link').css({'margin-left':'152px'});
      //jQuery('.menu_icon').css({'left':'-87px'});
      //jQuery('.page-home .menu_icon').css({'left':'-91px'});
      //jQuery('.page-routes-and-destinations .menu_icon').css({'left':'-42px'});
      //jQuery('.container-inline .mobile-search-btn').css({'margin-left':'40px'});
      //jQuery('.page-home .container-inline .mobile-search-btn').css({'margin-left':'-22px'});
    }

    if(jQuery('body').width()  >=768){		
      //jQuery('#navigation .menu-header .home-link').css({'margin-left': '0','left':'0'});
      //jQuery('.region.region-header').css({'left':'5px','top':'0'});	
      //jQuery('#block-search-form').css({'left':'527px','top':'0'});
      //jQuery('#block-system-user-menu').css({'margin-top':'0', 'margin-left':'0'});
      //jQuery('.container-inline .mobile-search-btn').css({'margin-left':'0'});
    }
  }
}



function live_train_swap_button(){
  jQuery('.swap-live-trains').click(function(){

    var tab1 = jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"] input[id^="edit-stations-fieldset-leaving-from"]').val();

    var tab2 = jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"] input[id^="edit-stations-fieldset-going-to"]').val();

    jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"] input[id^="edit-stations-fieldset-leaving-from"]').val(tab2);

    jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"] input[id^="edit-stations-fieldset-going-to"]').val(tab1);

  });
}




function general_resize(){




  if(jQuery('.front').length < 1){ 
    check_two_for_one_menu_display();
  }

  if(jQuery('.front').length){ 

    jQuery(window).resize(function() {
      if (jQuery('body').width() < 480) {
        jQuery('.close-btn').text('+');        
        //jQuery('div.node.node-teaser-image-200px .content').css('margin-left', '55px');
        jQuery('.close-live-trians h2').css({'display':'none'});
        jQuery('.close-btn').css({'display':'block'});
        jQuery('.front div[id^="block-views-calendar-block"]').css({'display':'block','margin-bottom': '5px'});
        jQuery('.close-live-trians:first-child').css({'height': 'auto', 'background-color': '#576370'});
        jQuery('.live-train-image').css({'display': 'none'});
        jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"]').css({'display':'block','margin-bottom': '5px','padding-bottom':'15px'});

        if(!(navigator.userAgent.match(/Android/i))){
          jQuery('.front #block-chiltern-live-train-times-chiltern-live-train-times .content').css({'display': 'none'});
        }

        jQuery('.front #block-chiltern-live-train-times-chiltern-live-updates').css({'display': 'block'});
        if(jQuery('.front div[id^="block-views-calendar-block"] article .view-content').css('display') == 'none'){
          jQuery('.front div[id^="block-views-calendar-block"]').css({'margin-bottom': '5px'});
        }else{
          jQuery('.front div[id^="block-views-calendar-block"]').css({'margin-bottom': '0'});			
        }        

      } else {
        jQuery('.close-btn').text('X');
        jQuery('div.node.node-teaser-image-200px .content').css('margin-left', 0);
        jQuery('.front #block-chiltern-live-train-times-chiltern-live-train-times .content').css({'display': 'block'});
        jQuery('div[id^="block-chiltern-live-train-times-chiltern-live-train-times"]').css({'margin-bottom': '0', 'padding-bottom': '0'});
        jQuery('.front div[id^="block-views-calendar-block"] article .view-header').css({'margin-bottom':'0'});
        jQuery('.front div[id^="block-views-calendar-block"]').css({'margin-bottom': '0'});

        if(jQuery('.front #block-chiltern-live-train-times-chiltern-live-train-times').css('display') == 'none'){

          jQuery('.close-live-trians h2').css({'display':'block'});

        }else{
          jQuery('.close-live-trians h2').css({'display':'none'});

        }



        if (jQuery('.front div[id^="block-views-calendar-block"] article .view-header').css('display') == 'none') {
          jQuery('.front div[id^="block-views-calendar-block"] article h2').css({'display': 'block'});
          jQuery('.front div[id^="block-views-calendar-block"] article .view-header').css({'display': 'block'});
          jQuery('.front div[id^="block-views-calendar-block"] article .view-content').css({'display': 'block'});
          jQuery('.front div[id^="block-views-calendar-block"] article .calendar-icons').css({'display': 'block'});

        }
      }

      if (jQuery('#block-views-disruption-banner-block').length) {

        if (jQuery('#block-views-disruption-banner-block').css('display') == 'none') {
          if (jQuery('#admin-menu').length) {
            // check_admin_menu_height();
            jQuery('.menu-bg-strip').css({'visibility': 'visible'});
          } else {
            if (jQuery('.page-home #header-top').width() <= 480) {
              jQuery('.menu-bg-strip').css({'top': '100px', 'visibility': 'visible'});
            } else {
              jQuery('.menu-bg-strip').css({'top': '49px', 'visibility': 'visible'});
            }
          }
        } else {
          if (jQuery('.page-home #header-top').width() <= 480) {
            var height_480 = parseInt(jQuery('#block-views-disruption-banner-block').css('height').replace("px", "")) + 104;
            jQuery('.menu-bg-strip').css({'visibility': 'visible', 'top': height_480});
          } else {
            var height_768 = parseInt(jQuery('#block-views-disruption-banner-block').css('height').replace("px", "")) + 51;
            jQuery('.menu-bg-strip').css({'visibility': 'visible', 'top': height_768});
            jQuery('.menu-bg-strip-2').css({'visibility': 'visible', 'top': height_768 +2});

          }
        }
      }
      check_image_height();


    });

  }

}

