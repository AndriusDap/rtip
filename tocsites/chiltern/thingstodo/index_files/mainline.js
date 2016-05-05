/**
  * FUNCTIONS DECLAIRED IN THHIS FILE
  * 
  * change_widget_block_height
  * 
  * populate_passenger_numbers
  * 
  * loop_mainline_stations
  * 
  * change_mainline_stations
  * 
  * loop_mainline_passengers
  * 
  * loop_mainline_passengers_children
  * 
  * change_mainline_passengers_numbers
  * 
  * change_mainline_passengers_numbers_children
  * 
  * all_trains_booking_widget_quicktab
  * 
  * removeElements
  * 
  * today_and_tomorrow_dates
  * 
  * single_return_or_open
  * 
  * edit_passenger_button_block
  * 
  * edit_departures_button_mainline_inline
  * 
  * edit_passenger_mainline_button_inline
  * 
  * block_passenger_mainline_animate_inline
  * 
  * edit_passenger_button_inline
  * 
  * block_passenger_animate_inline
  * 
  * block_passenger_animate
  * 
  * block_passenger_mainline_animate
  *                  	                       
  * edit_passenger_mainline_button_block
  * 
  * edit_mainline_out_block
  * 
  * edit_departures_button_block
  * 
  * departures_block_animate
  * 
  * return_block_animate
  * 
  * inline_animate
  * 
  * edit_departures_button_inline
  * 
  * edit_return_button_inline
  * 
  * edit_return_button_block
  * 
  * _chiltern_add_date_picker
  * 
  * check_date_picker
  * 
  * departue_drop_down
  * 
  * change_of_departue_drop_down
  * 
  * close_blocks
  *
  * mainline_select_dropdown_change
  * 
  * detach_and_append_booking_widget
  * 
  * booking_widget_resizing
  * 
  * check_depart_and_returns_time
  * 
  */             
  
jQuery(document).ready(
        function() {
        	   
        	   var body = 'body';
        	   //this is the main booking widget objects
        	   var bk = {};
        	   //these are the break points
        	   bk.bp = {fst:320,snd:480,trd:788,frth:960};
        	   //these are the pixel dimensions       	   
        	   bk.px = {fst:'320px',snd:'480px',trd:'768px',frth:'960px'};
        	   
        	   var all_train_cookie_dpt 		= true;
        	   var all_train_cookie_rtn 		= true;
        	   var mainline_cookie_dpt  		= true;
        	   var mainline_cookie_dpt_time = true;
        	   var mainline_cookie_rtn_time = true;

        	   
        	   
        	   var all_b_w   = all_b_w || {};
						 all_b_w.dimen = all_b_w.dimen || {};
						 
						 
						 var main_height = '';
	          	if (navigator.appVersion.indexOf("Chrome/") != -1) {
									main_height = '274px'; 
							}else if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
								main_height = '258px'; 
							}else{
								main_height = '301px'; 
							}
							
							

						 
						 var cal_icon_img 					=	{'background-image':'url("/sites/all/themes/custom/chilterntheme/images/calendar.png")','background-repeat':'no-repeat', 'background-position': '160px 33px'};
						 
						 var main_out_css_320       = {'top': '-23px', 'left': '-16px', 'display': 'block', 'margin-bottom': '-22px', 'width': '214px', 'height': '258px', 'margin-top': '27px','margin-left':'0', 'background-color': '#fff','position':'relative'};
						 
						 var main_out_css_320_dis		= {'top': '0px', 'left': '-16px', 'display': 'none', 'margin-bottom': '-22px', 'width': '214px', 'height': '0px','position':'relative'};
						 
						 var main_out_css_480       = {'top': '71px', 'left': '-3px', 'display': 'none', 'marginLeft': '-38px', 'width': '500px', 'height': '0px', 'margin-top': '11px', 'background-color': '#fff'};
						 var main_out_css_480_dis   = {'top': '71px', 'left': '-3px', 'display': 'block', 'marginLeft': '-38px', 'width': '500px', 'height': '250px', 'margin-top': '11px', 'background-color': '#fff'};
						 
						 
						 var main_out_css_780 		 = {'top': '-23px', 'left': '-32px', 'display': 'block', 'marginLeft': '1px', 'width':'10px', 'height': main_height, 'margin-top': '10px', 'background-color': '#fff','display':'none'};
						 var main_out_css_780_dis  = {'left':'-535px','width':'515px','height':main_height,'top':'-23px','margin-left':'1px','margin-top':'10px','display':'block'};
						 var main_out_anim_780     = {left: '-535px',width:'515px'};

						 var main_rtn_css_320      = {'position':'relative','left':'-16px', 'width':'214px','margin-top':'25px', 'margin-bottom':'-130px', 'display':'none', 'margin-left':'0px','height':'265px','top':'-23px'};						 
						 var main_rtn_css_320_dis  = {'display': 'block', 'height':'265px', 'position':'relative','left':'-16px', 'width':'214px','margin-top':'25px', 'margin-bottom':'-130px', 'margin-left':'0px','top':'-23px'};
						 
						 var main_rtn_css_480			 = {'left':'-5px','position':'absolute','top':'76px','width':'188px','display':'none','height':'10px','margin-top':'10px'};
						 var main_rtn_css_480_dis	 = {'left':'-5px','position':'absolute','top':'76px','display':'block','width':'188px', 'height':'190px','margin-top':'10px'};
						 
						 
						 var main_rtn_css_768	     = {'height':main_height,'left':'-33px','margin-bottom':'1px','margin-top':'0px','position':'absolute','top':'-13px','width':'10px','display':'none'};					 
						 var main_rtn_css_768_dis	 = {'height':main_height,'left':'-208px','margin-bottom':'1px','margin-top':'0px','position':'absolute','top':'-13px','width':'188px','display':'block'};
						 var main_rtn_css_780_ani  = {'left':'-208px','width':'188px'};
						 
						 var main_pass_css_320     = {'top': '-23px', 'left': '-18px','display':'none','height':'10px','width':'214px','margin-bottom':'-84px','margin-top':'26px','display': 'block','position':'relative'};
						 var main_pass_css_320_dis = {'top': '-23px', 'left': '-18px','display':'block','height':'220px','width':'214px','margin-bottom':'-84px','margin-top':'26px','display': 'block','position':'relative'};
						
						 var main_pass_css_480     = {'top': '76px', 'left': '108px','display':'none','height':'10px','width':'190px','margin-top':'10px'};
						 
						 var main_pass_css_480_dis = {'top': '76px', 'height':'190px', 'display':'block', 'width':'190px', 'left': '108px','margin-top':'10px'};
						 
						 
						 var main_pass_css_768    = {'left':'-31px','width':'10px','height':main_height, 'top':'-23px','display':'none','margin-left':'2px','margin-top':'10px'};
						 
						 var main_pass_css_768_dis = {'left':'-211px','width':'190px','height':main_height, 'top':'-23px','display':'block','margin-top':'10px'};
						 
						 var main_in_rtn_ccs_768   = {'left':'365px','position':'absolute','top':'50px','width':'188px','display':'none','height':'10px','margin-top':'10px'};
						 
						 var main_in_rtn_ccs_768_dis  = {'left':'365px','position':'absolute','top':'50px','width':'188px','display':'block','height':'10px','margin-top':'10px'};
						 
						 	var main_in_rtn_ccs_960   = {'left':'532px','position':'absolute','top':'50px','width':'188px','display':'none','height':'10px','margin-top':'10px'};
						 
						 var main_in_rtn_ccs_960_dis  = {'left':'532px','position':'absolute','top':'50px','width':'188px','display':'block','height':'10px','margin-top':'10px'};
						 
						 
						 var main_in_pass_ccs_480   = {'left':'104px','width':'190px','height':'10px', 'top':'76px','display':'none','margin-left':'2px','margin-top':'10px'};
						 
						 var main_in_pass_ccs_480_dis  = {'left':'104px','width':'190px','height':'190px', 'top':'76px','display':'block','margin-left':'2px','margin-top':'10px'};
						 
						 var main_in_pass_ccs_768   = {'left':'496px','width':'190px','height':'10px', 'top':'50px','display':'none','margin-left':'2px','margin-top':'10px'};
						 
						 var main_in_pass_ccs_768_dis  = {'left':'496px','width':'190px','height':'190px', 'top':'50px','display':'block','margin-left':'2px','margin-top':'10px'};
						 
						 var main_in_pass_ccs_960   = {'left':'637px','width':'190px','height':'10px', 'top':'50px','display':'none','margin-left':'2px','margin-top':'10px'};
						 
						 var main_in_pass_ccs_960_dis  = {'left':'637px','width':'190px','height':'190px', 'top':'50px','display':'block','margin-left':'2px','margin-top':'10px'};
						 
						 
						 var depart_in_main_css_768 = {'top': '49px',  'display': 'none', 'marginLeft': '-38px', 'width':'500px', 'height': '10px', 'margin-top': '11px', 'background-color': '#fff','left':'164px'};
						 
						 var depart_in_main_css_768_dis = {'top': '49px',  'display': 'block', 'marginLeft': '-38px', 'width':'500px', 'height': '10px', 'margin-top': '11px', 'background-color': '#fff','left':'164px'};
						 
						 var depart_in_main_css_960 = {'top': '49px',  'display': 'none', 'marginLeft': '-38px', 'width':'500px', 'height': '10px', 'margin-top': '11px', 'background-color': '#fff','left':'243px'};
						 
						 var depart_in_main_css_960_dis = {'top': '49px',  'display': 'block', 'marginLeft': '-38px', 'width':'500px', 'height': '10px', 'margin-top': '11px', 'background-color': '#fff','left':'243px'};
						 
						 

						 
						 var main_calendar_320 		 = {'display':'block','top':'-3px', 'left': '-48px'};
						 var main_calendar_480 		 = {'display':'block','top':'3%', 'left': '46%'};

						 jQuery('#quicktabs-dynamic_quicktabs_menu .ui-datepicker-trigger').css({'display':'none'});
						 

        		detach_and_append_booking_widgets();
        		
        		
        		
        		
            var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            change_widget_block_height();
            

            //Positioning of the all trains booking widget
            var calender_img = "/sites/all/themes/custom/chilterntheme/images/calendar.png";
            var departs_alt_block = "#chiltern-atos-login-form .hasDatepicker input";
            var mainline_out_block = ".form-item.form-type-textfield.form-item-outbound-text-date input";
            //initial set up of the booking widget
            all_trains_booking_widget_quicktab(calender_img, monthNames, departs_alt_block, mainline_out_block);

            var input_today = "input[id ^='edit-today']";
            var input_today_affected = ".hasDatepicker input";
            var input_tomor = "input[id ^='edit-tomorrow']";
            var input_tomor_affected = ".hasDatepicker input";
            //this is for the input of todays or tomorrows date
            today_and_tomorrow_dates(input_today, input_today_affected, input_tomor, input_tomor_affected, departs_alt_block, monthNames);

/*
            var checked_btn = '#quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form input[id ^="edit-journey-type-1"]';
            var change_one = '#quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form input[id ^="edit-journey-type-0"]';
            var change_css = '#quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form input[id ^="edit-return"]';
            //this function affects the return input button depending on what radio button has been selected
            single_return_or_open(checked_btn, change_one, change_css, calender_img, change_one);
*/

            departue_drop_down(monthNames);
            close_blocks(calender_img, monthNames);

            var returns_input = '#quicktabs-dynamic_quicktabs_menu input[id^="edit-return"]';
            var departs_input = '#quicktabs-dynamic_quicktabs_menu input[id^="edit-departure"]';

            jQuery(returns_input).val('');
           // jQuery(departs_input).val('');

            mainline_select_dropdown_change(monthNames);
            //Retrieve data pushed from Drupal. The variables container holds the mainline station names and the number of passengers
            //this is only called when the booking widgets are on display

            if (Drupal.settings.chiltern_atos_login) {
                var variables = Drupal.settings.chiltern_atos_login.variables;
            }

            if (typeof variables !== "undefined") {
                var form_id = "form[id^='chiltern-atos-login-mainline-quicktab-form']";
                var leaving_id = "select[id ^='edit-leaving-from']";
                var going_id = "select[id ^='edit-going-to']";
                
                //This is for the mainline form
                populate_passenger_numbers("#chiltern-atos-login-form", "select[id ^='edit-leaving-from']", "select[id ^='edit-going-to']", variables);
                //This is for the mainline form
                populate_passenger_numbers("form[id^='chiltern-atos-login-mainline-quicktab-form']", "select[id ^='edit-leaving-from']", "select[id ^='edit-going-to-mainline']", variables);
            }//end of variables undefined if statement
            
						
						
						
						function buy_tickets_online(monthNames){
							
							
							var tick_pass = '#block-chiltern-atos-login-atos-booking-form #chiltern-atos-login-form';
	        		
	        		var tick_pass_label = jQuery(tick_pass +' .form-item.form-type-textfield.form-item-passenger label').html();
	        		
	        		jQuery(tick_pass +' .form-item.form-type-textfield.form-item-passenger label').html('Passengers');
	        		
	        		jQuery(tick_pass +' #edit-passenger').attr('placeholder', tick_pass_label);
															
							var atos_form = '#block-chiltern-atos-login-atos-booking-form';
							
							/*
							var calender_img = "/sites/all/themes/custom/chilterntheme/images/calendar.png";
							var checked_btn = atos_form +' input[id ^="edit-journey-type-1"]';
            	var change_one = atos_form +' input[id ^="edit-journey-type-0"]';
            	var change_css = atos_form +' input[id ^="edit-return"]';
            	//this function affects the return input button depending on what radio button has been selected
            	single_return_or_open(checked_btn, change_one, change_css, calender_img, change_one);
							*/
							
							// departure fieldset
							jQuery(atos_form +' input[id^="edit-departure"]').click(
								function(){
									jQuery(atos_form +' fieldset[id^="edit-returns"]').css({'display':'none'});
									jQuery(atos_form +' fieldset[id^="edit-passengers"]').css({'display':'none'});
									jQuery(atos_form +' fieldset[id^="edit-departures"]').toggle( 0, function() {
										if(jQuery(this).css('display') == 'none'){
											var cal_icon_img = '/sites/all/themes/custom/chilterntheme/images/calendar.png';
											jQuery(atos_form +' input[id^="edit-departure"]').css({'background-image': "url(" + cal_icon_img + ")", 'background-repeat': 'no-repeat', 'background-position': '99% 3px'});										
										}else{											
											var bk_grd_image = '/sites/all/themes/custom/chilterntheme/images/grey-close-button.png';	
											jQuery(atos_form +' input[id^="edit-departure"]').css({'background-image': "url(" + bk_grd_image + ")", 'background-repeat': 'no-repeat', 'background-position': '99% 3px'});
											
											jQuery(atos_form +' fieldset[id^="edit-departures"] .fieldset-wrapper').css({'display':'block'});
											var tag = '#edit-input-text-datepicker-popup-0';  
											                             
	                  //  date = check_date_picker(tag, monthNames);
	                  
	                  var date = new Date();
	                    
	                    
	                    //Positioning of the all trains booking widget
	                    var departs_picker_block = atos_form +" #edit-departures .form-item.form-type-textfield.form-item-input-text-date";
            					var departs_alt_block = atos_form +" .hasDatepicker input";
	                    if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-input') != null && all_train_cookie_rtn == true){											  	
												var alt_input = readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-input').split('-'); 										  		
												_chiltern_add_date_picker(calender_img, departs_picker_block, departs_alt_block, date, monthNames, 'foobar', alt_input[0]+','+alt_input[1]+','+alt_input[2]);											  												  			
												jQuery(departs_alt_block).val(alt_input[0]+'-'+alt_input[1]+'-'+alt_input[2]);			
												jQuery(atos_form +' #edit-departures select[id^="edit-hours"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-hour')));
												jQuery(atos_form +' #edit-departures select[id^="edit-minutes"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-minute')));						  		
											}else{
	 
												_chiltern_add_date_picker(calender_img, departs_picker_block, departs_alt_block, date, monthNames, 'foobar');
											}      
	                    all_train_cookie_rtn == false;								
										}
									});
								}
							);
							
							jQuery(atos_form +' input[id^="edit-return"]').click(
								function(){
								//	if (jQuery(atos_form +' input[id^="edit-return"]').css('cursor') == 'pointer') {							
										jQuery(atos_form +' fieldset[id^="edit-departures"]').css({'display':'none'});
										jQuery(atos_form +' fieldset[id^="edit-passengers"]').css({'display':'none'});
										jQuery(atos_form +' fieldset[id^="edit-returns"]').toggle( 0, function() {
											if(jQuery(this).css('display') == 'none'){
												var cal_icon_img = '/sites/all/themes/custom/chilterntheme/images/calendar.png';
												jQuery(atos_form +' input[id^="edit-return"]').css({'background-image': "url(" + cal_icon_img + ")", 'background-repeat': 'no-repeat', 'background-position': '99% 3px'});
											}else{
												var bk_grd_image = '/sites/all/themes/custom/chilterntheme/images/grey-close-button.png';	
												jQuery(atos_form +' input[id^="edit-return"]').css({'background-image': "url(" + bk_grd_image + ")", 'background-repeat': 'no-repeat', 'background-position': '99% 3px'});																					
												jQuery(atos_form +' fieldset[id^="edit-returns"] .fieldset-wrapper').css({'display':'block'});
												
												var returns_picker_block = atos_form +" #edit-returns .form-item.form-type-textfield.form-item-input-text-date";
									 			var returns_alt_block = atos_form +" #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input";
	
							          var tag = atos_form +' #edit-input-text-datepicker-popup-0';                               
	                      date = check_date_picker(tag, monthNames);
	                      if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-input') != null && all_train_cookie_rtn == true){											  	
											  		var alt_input =readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-input').split('-'); 										  		
											  		_chiltern_add_date_picker(calender_img, returns_picker_block, returns_alt_block, date, monthNames, 'foobar', alt_input[0]+','+alt_input[1]+','+alt_input[2]);											  												  			
											  	  jQuery(alt).val(alt_input[0]+'-'+alt_input[1]+'-'+alt_input[2]);
											  	  jQuery(atos_form +'#edit-returns select[id^="edit-hours"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-hour')));
								  					jQuery(atos_form +'#edit-returns select[id^="edit-minutes"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-minute')));								  		
											  }else{					
											  								 
											  	_chiltern_add_date_picker(calender_img, returns_picker_block, returns_alt_block, date, monthNames, 'foobar');
											  }
	     									
	                      all_train_cookie_rtn == false;	
												
											}								
										});
									}																									
								//}
							);
							
							jQuery(atos_form +' input[id^="edit-passenger"]').click(
								function(){
									
									jQuery(atos_form +' fieldset[id^="edit-departures"]').css({'display':'none'});
									jQuery(atos_form +' fieldset[id^="edit-returns"]').css({'display':'none'});										
									jQuery(atos_form +' fieldset[id^="edit-passengers"]').toggle( 0, function() {
										if(jQuery(this).css('display') == 'none'){
											jQuery(atos_form +' input[id="edit-passenger"]').css({'background-image': "none"});														
										}else{
											var bk_grd_image = '/sites/all/themes/custom/chilterntheme/images/grey-close-button.png';	
											jQuery(atos_form +' input[id="edit-passenger"]').css({'background-image': "url(" + bk_grd_image + ")", 'background-repeat': 'no-repeat', 'background-position': '99% 3px'});													
											jQuery(atos_form +' fieldset[id^="edit-passengers"] .fieldset-wrapper').css({'display':'block'});
										}
									});			
								}
							);
							
							jQuery(atos_form +' #edit-depart-ok').click(function(){
								jQuery(atos_form +' fieldset[id^="edit-departures"]').css({'display':'none'});
								jQuery(atos_form +' input[id^="edit-departure"]').css({'background-position': '99% 3px'});
							});
							
							jQuery(atos_form +' #edit-rtn-ok').click(function(){
								jQuery(atos_form +' fieldset[id^="edit-returns"]').css({'display':'none'});
								jQuery(atos_form +' input[id^="edit-return"]').css({'background-position': '99% 3px','color':'#000'});
							});
							
							jQuery(atos_form +' #edit-passenger-ok').click(function(){
								jQuery(atos_form +' fieldset[id^="edit-passengers"]').css({'display':'none'});
								jQuery(atos_form +' input[id="edit-passenger"]').css({'background-position': '99% 3px'});
							});
			
							
						}



            function change_widget_block_height() {
                jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .first a').click(function() {
                    if (jQuery(window).width() < 768) {
                    	
                        jQuery('.page-home .region.region-content section').css({'padding-top': '143px'});
                    }
                });

                jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .last a').click(function() {
                    if (jQuery(window).width() < 768) {
                    	
                    
                        jQuery('.page-home .region.region-content section').css({'padding-top': '395px'});
                    }
                });
            }
            
             

            function populate_passenger_numbers(form_id, leaving_id, going_id, variables) {
            	
            	
                //Create mainline station container
                var mainline_stations_going = variables[0];
                //Create mainline station container
                var mainline_stations_return = variables[1];
                //Create number of passengers container
                var num_passengers = variables[2];
                //Remove current options in leaving from drop down list
                jQuery(form_id + leaving_id).find('option').remove().end();
                //replace options with variables passed from Drupal
                loop_mainline_stations(mainline_stations_going, form_id + leaving_id);
                //Remove current options in going to drop down list
                jQuery(form_id + going_id).find('option').remove().end();
                //replace options with variables passed from Drupal	
                loop_mainline_stations(mainline_stations_return, form_id + going_id);
                //Check if leaving from station select options are changed and append accordingly
                change_mainline_stations(form_id + " "+ leaving_id, form_id +" " + going_id, mainline_stations_going, mainline_stations_return);
                //Check if going to station select options are changed and append accordingly
                change_mainline_stations(form_id+" " + going_id, form_id +" " +leaving_id, mainline_stations_return, mainline_stations_going);
                //Remove current options in adult drop down list
                jQuery(form_id + "select[id^='edit-adults']").find('option').remove().end();
                //replace options with variables passed from Drupal 
                loop_mainline_passengers(num_passengers, form_id + "select[id^='edit-adults']");
                //Remove current options in child drop down list
                jQuery(form_id + "select[id ^='edit-children']").find('option').remove().end();
                //replace options with variables passed from Drupal
                loop_mainline_passengers_children(num_passengers, form_id + "select[id^='edit-children']");
                //THIS IS FOR ALLL TRAINS
                //Check if adult select options are changed and append accordingly
                change_mainline_passengers_numbers("#chiltern-atos-login-form select[id^='edit-adults']", "#chiltern-atos-login-form select[id^='edit-children']", num_passengers);
                //Check if child select options are changed and append accordingly
                change_mainline_passengers_numbers_children("#chiltern-atos-login-form select[id^='edit-children']", "#chiltern-atos-login-form select[id^='edit-adults']", num_passengers);
                
                //THIS IS FOR MAINLINE
                //Check if adult select options are changed and append accordingly
                change_mainline_passengers_numbers("#chiltern-atos-login-mainline-quicktab-form select[id^='edit-adults']", "#chiltern-atos-login-mainline-quicktab-form select[id^='edit-children']", num_passengers);
                //Check if child select options are changed and append accordingly
                change_mainline_passengers_numbers_children("#chiltern-atos-login-mainline-quicktab-form select[id^='edit-children']", "#chiltern-atos-login-mainline-quicktab-form select[id^='edit-adults']", num_passengers);
           
            }


						
            function loop_mainline_stations(array, id) {
                for (var key in array) {
                    if (array.hasOwnProperty(key)) {
                        jQuery(id).append('<option value="' + key + '">' + array[ key ] + '</option>');
      
                    }
                }
                
                if(jQuery(id).find(":selected").val() == 0){
                	jQuery(id).css({'color':'#1fb7e1'});
                }else{
                	jQuery(id).css({'color':'#576370'});
                }
                
                
            }


            function change_mainline_stations(change_id, loop_id, mainline_going, mainline_return) {

                jQuery(change_id).change(function() {
               				if(jQuery(this).val() == 0){
               					jQuery(this).css({'color':'#1fb7e1'});
               					jQuery(loop_id).css({'color':'#576370'});
               				}else{              					
               					jQuery(this).css({'color':'#576370'});
               					jQuery(loop_id).css({'color':'#576370'});
               				}

                    if (jQuery(this).children("option").filter(":selected").text() != 'London Marylebone') {
                    	
                        jQuery(loop_id).find('option').remove().end().append('<option value="London Marylebone">London Marylebone</option>');
                    } else {
                        jQuery(loop_id).find('option').remove().end();
                        loop_mainline_stations(mainline_return, loop_id);
                    }
                });
            }
            
           


            function loop_mainline_passengers(num, id) {
                for (var i = 1; i < parseInt(num) + 1; i++) {
                    jQuery(id).append('<option value="' + i + '">' + i + '</option>');
                }
            }


            function loop_mainline_passengers_children(num, id) {
                for (var i = 0; i < parseInt(num) + 1; i++) {
                    jQuery(id).append('<option value="' + i + '">' + i + '</option>');
                }
            }


            function change_mainline_passengers_numbers(change_id, loop_id, num_passengers) {
                //Check if options are changed for the chosen select group and append accordingly
                jQuery(change_id).change(function() {

                    var this_val = parseInt(jQuery(this).children("option").filter(":selected").text());
                    var that_val = parseInt(jQuery(loop_id).children("option").filter(":selected").text());
                    jQuery(loop_id).find('option').remove().end();
                    //check the amount of adults chosen - minus from the original amount of passengers and re-create amount of adults
                    for (var i = 0; i < parseInt(num_passengers) - this_val + 1; i++) {
                        jQuery(loop_id).append('<option value="' + i + '">' + i + '</option>');
                    }
                    jQuery(loop_id).val(that_val);
                });
            }
            



            function change_mainline_passengers_numbers_children(change_id, loop_id, num_passengers) {
              //Check if options are changed for the chosen select group and append accordingly
              jQuery(change_id).change(function() {
                  var this_val = parseInt(jQuery(this).children("option").filter(":selected").text());
                  var that_val = parseInt(jQuery(loop_id).children("option").filter(":selected").text());
                  jQuery(loop_id).find('option').remove().end();
                  //check the amount of adults chosen - minus from the original amount of passengers and re-create amount of adults
                  for (var i = 0; i < parseInt(num_passengers) - this_val + 1; i++) {
                      jQuery(loop_id).append('<option value="' + i + '">' + i + '</option>');
                  }
                  jQuery(loop_id).val(that_val);
              });
            }


            function all_trains_booking_widget_quicktab(img, months, departs_alt_block, mainline_out_block) {

                var edit_return = "#quicktabs-dynamic_quicktabs_menu input[id ^='edit-return']";
                var edit_depart = "#quicktabs-dynamic_quicktabs_menu input[id ^='edit-departure']";
                var bk_grd_image = '/sites/all/themes/custom/chilterntheme/images/grey-close-button.png';
                //this is for opening up the departures details
                var departs_picker_block = "#edit-departures .form-item.form-type-textfield.form-item-input-text-date";

                edit_departures_button_block(img, departs_picker_block, departs_alt_block, bk_grd_image, months);
                var mainline_out_picker_block = "#edit-outward-journey .form-item.form-type-textfield.form-item-outward-journey";

                edit_mainline_out_block(img, mainline_out_picker_block, mainline_out_block, bk_grd_image, months);

                edit_departures_button_mainline_inline(img, mainline_out_picker_block, mainline_out_block, bk_grd_image, months);


								/**
								 * 
								 * 
								 * 
								 * 	this is where the resizing fuunction is called
								 * 
								 * 
								 * 
								 */
							
									booking_widget_resizing();
									
										//this is for opening up the returns details
								 var returns_picker_block = " #chiltern-atos-login-form #edit-returns .form-item.form-type-textfield.form-item-input-text-date";
								 var returns_alt_block = " #chiltern-atos-login-form #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input";
	


                edit_return_button_block(img, returns_picker_block, returns_alt_block, bk_grd_image, months);

                //this is for opening up the departures details
                var departs_picker_inline = "#edit-departures .form-item.form-type-textfield.form-item-input-text-date";
                var departs_alt_inline = "#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input";
                edit_departures_button_inline(img, departs_picker_inline, departs_alt_inline, bk_grd_image, months);

                //this is for opening up the returns details
                var returns_picker_inline = "#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-textfield.form-item-input-text-date";
                var returns_alt_inline = "#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input";
                edit_return_button_inline(img, returns_picker_inline, returns_alt_inline, bk_grd_image, months);

                edit_passenger_button_block();
                edit_passenger_button_inline();

                edit_passenger_mainline_button_block();
                edit_passenger_mainline_button_inline();



                var return_title = removeElements(jQuery("label[for^='edit-return']").html(), "span");
                jQuery(edit_return).attr('placeholder', return_title);

                var depart_title = removeElements(jQuery("label[for^='edit-departure']").html(), "span");
                //jQuery - placeholder
                jQuery(edit_depart).attr('placeholder', depart_title);

                var leaving_from = removeElements(jQuery("label[for^='edit-leaving-from']").html(), "span");
                jQuery("input[id ^='edit-leaving-from']").attr('placeholder', leaving_from);

                var going_to = removeElements(jQuery("label[for^='edit-going-to']").html(), "span");
                jQuery("input[id ^='edit-going-to']").attr('placeholder', going_to);

                var pass_place = removeElements(jQuery("label[for^='edit-passenger']").html(), "span");
                jQuery("input[id ^='edit-passenger']").attr('placeholder', pass_place);

                var mainline_out = removeElements(jQuery("label[for^='edit-outward-journey']").html(), "span");

                jQuery("input[id ^='edit-outward-journey']").attr('placeholder', mainline_out);
            }



            function removeElements(text, selector) {

                var wrapped = jQuery("<div>" + text + "</div>");
                wrapped.find(selector).remove();
                return wrapped.html();

            }



            function today_and_tomorrow_dates(input_today, input_today_affected, input_tomor, input_tomor_affected, departs_alt_txt, monthNames) {
                //get the current date
                var date = new Date();
                var today = date.getDate() + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                var dpt_txt = "";
                var foo = parseInt(date.getDate());
                foo = foo+1;
                if (foo < 10) foo = '0'+foo;
                var tomrw_date = "";
                if(date.getMonth() == 0 && foo == 32 ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else if((date.getMonth() == 1 && foo == 29) || (date.getMonth() == 1 && foo == 30) ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else if(date.getMonth() == 2 && foo == 32 ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else if(date.getMonth() == 3 && foo == 31 ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else if(date.getMonth() == 4 && foo == 32 ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else if(date.getMonth() == 5 && foo == 31 ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else if(date.getMonth() == 6 && foo == 32 ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else if(date.getMonth() == 7 && foo == 32 ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else if(date.getMonth() == 8 && foo == 31 ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else if(date.getMonth() == 9 && foo == 31 ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else if(date.getMonth() == 10 && foo == 31 ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else if(date.getMonth() == 10 && foo == 32 ){
                	tomrw_date = "01" + "-" + monthNames[date.getMonth()+1] + "-" + date.getFullYear();
                }else{
                	tomrw_date = foo + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                }
                
                /**
                 * TODAY AND TOMORROW
                 */
                
                //if the today button is pressed, populate the input field with todays date 
                jQuery("#edit-returns input[id ^='edit-today']").click(function() { 
                	
                	var today = date.getDate() + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                	dpt_txt = jQuery(departs_alt_txt).val();
                	                	
                	var dpt_split = dpt_txt.split('-');
                	var today_split = today.split('-');
                	              	
                	if(parseInt(dpt_split[0]) <10){
                		dpt_txt = '0'+parseInt(dpt_split[0])+'-'+dpt_split[1]+'-'+dpt_split[2];
                	}
                	if(parseInt(today_split[0]) <10){
                		today = '0'+parseInt(today_split[0])+'-'+today_split[1]+'-'+today_split[2];
                	}
                	
             
                	         	
                	if(today == dpt_txt || dpt_txt == tomrw_date){
                		jQuery(input_today_affected).val(today);
                   	var date_input_txt = jQuery('#edit-input-text input').val();
                    change_of_departue_drop_down(monthNames, date_input_txt, 'today_txt');
                    
                    
                  	var returns_picker_block = "#chiltern-atos-login-form #edit-returns .form-item.form-type-textfield.form-item-input-text-date";
                    jQuery(returns_picker_block).datepicker("setDate", new Date());              		
                	}
                });
                
                
                
                
               jQuery("#edit-departures input[id ^='edit-today']").click(function() {
               			var today = date.getDate() + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                    jQuery(input_today_affected).val(today);
                    var date_input_txt = jQuery('#edit-input-text input').val();
                    change_of_departue_drop_down(monthNames, date_input_txt);
 
                    var departs_picker_block = "#edit-departures .form-item.form-type-textfield.form-item-input-text-date";      
                    jQuery(departs_picker_block).datepicker("setDate", new Date());                  
                });
                
                
                
                jQuery("#edit-outward-journeys input[id ^='edit-today']").click(function() {
                		var today = date.getDate() + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();             
                    jQuery(input_today_affected).val(today);
                    var date_input_txt = jQuery('#chiltern-atos-login-mainline-quicktab-form #edit-outbound-text input').val();
                    var mainline_departs_picker = "#edit-outbound-text";      
                   jQuery(mainline_departs_picker).datepicker("setDate", new Date());
                    change_of_departue_drop_down(monthNames, date_input_txt);
                    
                });
                
                
                
                //edit-tomorrow
                
                
                
                //if the tomorrow button is pressed, check the month and year and populate the input field with tomorrows date
                jQuery('#edit-outward-journeys #edit-tomorrow').click(function() {
                		var today = date.getDate() + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                    var tomorrow = "";
                    //Check if there are 31 days in the month
                    if (date.getMonth() == 0 || date.getMonth() == 2 || date.getMonth() == 4 || date.getMonth() == 6 || date.getMonth() == 7 || date.getMonth() == 9 || date.getMonth() == 11) {
                        if (date.getDate() == 31) {
                            if (date.getMonth() == 11) {
                                //it is the end of the month and the end of the year
                                tomorrow = '1' + "-" + monthNames[0] + "-" + date.getFullYear() + 1;
                            } else {//it is the end of the year but NOT the end of the month
                                tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                            }
                        } else {//it is NOT the end of the month
                            tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                        }
                    }//end of if  date statement		
                    //Check if there are 30 days in the month
                    if (date.getMonth() == 3 || date.getMonth() == 5 || date.getMonth() == 8 || date.getMonth() == 10) {
                        if (date.getDate() == 30) {
                            //it is the end of the month
                            tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                        } else {//it is NOT the end of the month
                            tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                        }
                    }//end of if  month statement	
                    //Check if there are 28 or 29 days in the year
                    if (date.getMonth() == 1) {
                        //check if it is a leap year
                        if (date.getFullYear() % 4 == 0) {
                            if (date.getDate() == 29) {
                                //it is the end of the month and IS a leap year
                                tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                            } else {//it is NOT the end of the month
                                tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                            }
                        } else {
                            if (date.getDate() == 28) {
                                //it is the end of the month but NOT a leap year
                                tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                            } else {//it is NOT the end of the month
                                tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                            }
                        }
                    }//end of year if statement
                    //populate the text input
                    jQuery(input_tomor_affected).val(tomorrow);
                    /*
                     * picker called here
                     * 
                     */
              			var mainline_departs_picker = "#edit-outbound-text";
                    var res = tomrw_date.split("-");         
                   jQuery(mainline_departs_picker).datepicker("setDate", new Date(res[2],monthNames.indexOf(res[1]),res[0] ));

                    var date_input_txt = jQuery(input_tomor_affected).val();
                    change_of_departue_drop_down(monthNames, date_input_txt);
                });//end of click function
                
                
                
                
                
                 //if the tomorrow button is pressed, check the month and year and populate the input field with tomorrows date
                jQuery('#edit-departures #edit-tomorrow').click(function() {
										var today = date.getDate() + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                    var tomorrow = "";
                    //Check if there are 31 days in the month
                    if (date.getMonth() == 0 || date.getMonth() == 2 || date.getMonth() == 4 || date.getMonth() == 6 || date.getMonth() == 7 || date.getMonth() == 9 || date.getMonth() == 11) {
                        if (date.getDate() == 31) {
                            if (date.getMonth() == 11) {
                                //it is the end of the month and the end of the year
                                tomorrow = '1' + "-" + monthNames[0] + "-" + date.getFullYear() + 1;
                            } else {//it is the end of the year but NOT the end of the month
                                tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                            }
                        } else {//it is NOT the end of the month
                            tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                        }
                    }//end of if  date statement		
                    //Check if there are 30 days in the month
                    if (date.getMonth() == 3 || date.getMonth() == 5 || date.getMonth() == 8 || date.getMonth() == 10) {
                        if (date.getDate() == 30) {
                            //it is the end of the month
                            tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                        } else {//it is NOT the end of the month
                            tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                        }
                    }//end of if  month statement	
                    //Check if there are 28 or 29 days in the year
                    if (date.getMonth() == 1) {
                        //check if it is a leap year
                        if (date.getFullYear() % 4 == 0) {
                            if (date.getDate() == 29) {
                                //it is the end of the month and IS a leap year
                                tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                            } else {//it is NOT the end of the month
                                tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                            }
                        } else {
                            if (date.getDate() == 28) {
                                //it is the end of the month but NOT a leap year
                                tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                            } else {//it is NOT the end of the month
                                tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                            }
                        }
                    }//end of year if statement
                    //populate the text input
                    jQuery(input_tomor_affected).val(tomorrow);
                    var departs_picker_block = "#edit-departures .form-item.form-type-textfield.form-item-input-text-date";
                    var res = tomrw_date.split("-");         
                    jQuery(departs_picker_block).datepicker("setDate", new Date(res[2],monthNames.indexOf(res[1]),res[0] ));
                    var date_input_txt = jQuery(input_tomor_affected).val();
                    change_of_departue_drop_down(monthNames, date_input_txt);
                });//end of click function
                            
                
                jQuery('#edit-returns #edit-tomorrow').click(function() {
                	
                
                	
                	var today = date.getDate() + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                	dpt_txt = jQuery(departs_alt_txt).val();
                	
                	var dpt_split = dpt_txt.split('-');
                	var today_split = today.split('-');

                	if(parseInt(dpt_split[0]) <10){
                		dpt_txt = '0'+parseInt(dpt_split[0])+'-'+dpt_split[1]+'-'+dpt_split[2];
                	}
                	
                	if(parseInt(today_split[0]) <10){
                		today = '0'+parseInt(today_split[0])+'-'+today_split[1]+'-'+today_split[2];
                	}
										
				
										
                	if(today == dpt_txt || dpt_txt == tomrw_date){
                		
                    var tomorrow = "";
                    //Check if there are 31 days in the month
                    if (date.getMonth() == 0 || date.getMonth() == 2 || date.getMonth() == 4 || date.getMonth() == 6 || date.getMonth() == 7 || date.getMonth() == 9 || date.getMonth() == 11) {
                        if (date.getDate() == 31) {
                            if (date.getMonth() == 11) {
                                //it is the end of the month and the end of the year
                                tomorrow = '1' + "-" + monthNames[0] + "-" + date.getFullYear() + 1;
                            } else {//it is the end of the year but NOT the end of the month
                                tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                            }
                        } else {//it is NOT the end of the month
                            tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                        }
                    }//end of if  date statement		
                    //Check if there are 30 days in the month
                    if (date.getMonth() == 3 || date.getMonth() == 5 || date.getMonth() == 8 || date.getMonth() == 10) {
                        if (date.getDate() == 30) {
                            //it is the end of the month
                            tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                        } else {//it is NOT the end of the month
                            tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                        }
                    }//end of if  month statement	
                    //Check if there are 28 or 29 days in the year
                    if (date.getMonth() == 1) {
                        //check if it is a leap year
                        if (date.getFullYear() % 4 == 0) {
                            if (date.getDate() == 29) {
                                //it is the end of the month and IS a leap year
                                tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                            } else {//it is NOT the end of the month
                                tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                            }
                        } else {
                            if (date.getDate() == 28) {
                                //it is the end of the month but NOT a leap year
                                tomorrow = '1' + "-" + monthNames[date.getMonth() + 1] + "-" + date.getFullYear();
                            } else {//it is NOT the end of the month
                                tomorrow = (date.getDate() + 1) + "-" + monthNames[date.getMonth()] + "-" + date.getFullYear();
                            }
                        }
                    }//end of year if statement
                    //populate the text input
                    
                    
                    var returns_picker_block = " #chiltern-atos-login-form #edit-returns .form-item.form-type-textfield.form-item-input-text-date";
                    var res = tomrw_date.split("-");         
                    jQuery(returns_picker_block).datepicker("setDate", new Date(res[2],monthNames.indexOf(res[1]),res[0] ));
                    jQuery(input_tomor_affected).val(tomorrow);

                    var date_input_txt = jQuery(input_tomor_affected).val();
                    change_of_departue_drop_down(monthNames, date_input_txt);
                    }
                });//end of click function

	            jQuery('#edit-departures select[id^=edit-hours]').change(function(){               	         	
	            	jQuery('#edit-returns select[id^=edit-hours]').find('option').remove().end();                	
	            	var rtn_hour = '';               	
	            	var j ='';                	
	            	for (var i = jQuery(this).children("option").filter(":selected").text(); i < 23; i++) {
	                if (i < 10)  i =  + i;	                    
	                j = parseInt(i+1);
	                if(jQuery(this).children("option").filter(":selected").text() == 1){
	                	 i =  i;
	                	 j = j;
	                }else{
	                	if (i < 10)  i =  '0' + i;
	                }                  
	                if (j < 10)  j =  '0' + j;
	                	jQuery('#edit-returns select[id^="edit-hours"]').append('<option value="' + j + '">' + j + '</option>');	                    
	                j++;                    
	              }
	        		});              	
            }
            



	function single_return_or_open(checked_btn, change_one, change_css, img, deflt) {
		/*
	    //ensure the return button is checked by default
	    jQuery(deflt).attr('checked', true);
	    jQuery(change_css).css({'cursor': 'not-allowed', 'color': '#ccc', 'background-image': 'none'});
	        jQuery(change_css).val('');
	    //check if the single journey option has been checked
	    jQuery(change_one).change(function() {
	        jQuery(change_css).css({'cursor': 'not-allowed', 'color': '#ccc', 'background-image': 'none'});
	        jQuery(change_css).val('');
	    });
	    //check if the single journey option has been checked
	    jQuery(checked_btn).change(function() {
	        jQuery(change_css).css({'cursor': 'pointer', 'color': '#576370', 'background-image': "url(" + img + ")",
	            'background-repeat': 'no-repeat', 'background-position': '160px 4px'});
	            
	     	  var atos_buy_radio_change = '#block-chiltern-atos-login-atos-booking-form input[id^="edit-return"]';
	    		jQuery(atos_buy_radio_change).css({'cursor': 'pointer', 'color': '#576370', 'background-image': "url(" + img + ")",
	            'background-repeat': 'no-repeat', 'background-position': '99% 4px'});       
	            
	    });
	   */ 
	}




            function edit_passenger_button_block() {
            	
           
                var passenger_input = '#block-chiltern-atos-login-atos-quicktab-block-form #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form .form-item.form-type-textfield.form-item-passenger';
                var passengers_field = '#block-chiltern-atos-login-atos-quicktab-block-form #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form  fieldset[id^="edit-passengers"]';
                var passengers_child = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form fieldset[id^="edit-passengers"] .fieldset-wrapper');
                var passengers = jQuery(passengers_field);

                if (jQuery(passenger_input).length) {
	                passengers.css({'display': 'none', 'width': '10px', 'top': '49px', 'left': '-15px'});
	                jQuery(passenger_input).click(function() {
	                	

	                	
	                  var cont_width = jQuery(body).width();
	                  if (jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns').css('display') != 'block') {
	                    if (jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures').css('display') != 'block') {
		                    if(jQuery(body).width()  < 768){		 
		                    	                   	
	                    		if(passengers.height() == 314 || passengers.height() == 250) {
		                  			passengers.css({'height': '10px', 'top':'12px'});
		                  		}	
		                  		jQuery('#edit-passengers .form-item.form-type-select.form-item-ticket-type').css({'display':'block'});	
	                    	}                    	

                		
            	
	                    	block_passenger_animate(passengers, passengers_child, cont_width);
	                    }
	                  }                  
	                  if(jQuery(body).width() < 768){
	                  	
	                  	if(passengers.height() == '250px'){
                    		jQuery('#edit-passenger').val(parseInt(jQuery('#edit-children').val()) + parseInt(jQuery('#edit-adults').val()));
	                      passengers_child.css({'display': 'none'});
	                      passengers.css({'display': 'none', 'width': '10px', 'left': '-15px'});
	                  	}
	                  }else{
	                  	if (passengers.width() == 190) {
                      	jQuery('#edit-passenger').val(parseInt(jQuery('#edit-children').val()) + parseInt(jQuery('#edit-adults').val()));
	                      passengers_child.css({'display': 'none'});
	                      passengers.css({'display': 'none', 'width': '10px', 'left': '-15px'});
	                   }
	                 }

                });
            	}
            }
            


            function edit_departures_button_mainline_inline(img, picker, alt, bk_grd_image, monthNames) {
            	
                /**
                 * mainline block departue date
                 * 
                 */
                var out_journ = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu #edit-outward-journeys');
                var out_journ_child = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form  #quicktabs-dynamic_quicktabs_menu #edit-outward-journeys .fieldset-wrapper');
                var out_journ_input = '#block-chiltern-atos-login-atos-quicktab-inline-form  input[id^="edit-outward-journey"]';
                //this is the outbound button that the user presses
                var out_journ_text = jQuery(out_journ_input).val();

                /**
                 * Mainline block return date
                 * 
                 */
                var rtn_journ = jQuery("#block-chiltern-atos-login-atos-quicktab-inline-form form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journeys");
                var rtn_journ_child = jQuery("#block-chiltern-atos-login-atos-quicktab-inline-form  form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journeys .fieldset-wrapper");
                var rtn_journ_input = "#block-chiltern-atos-login-atos-quicktab-inline-form form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journey";
                           
                var return_change_time = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-return-time');
							
								var dpt_time = '';
											
							
							  jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-day").change(function(){


	            		var departs_date = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outbound-text-datepicker-popup-0").val();	            			
	            		
		            	if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') != null && mainline_cookie_rtn_time == true){
										readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') == 'PM' ? return_change_time.val('1') : return_change_time.val('0');
	              	}else{              		              			         			             		
	              		if( jQuery.trim(jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-day option:selected").html()) == 'Same Day'){        			
		            			if(jQuery.trim(jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-leaving-time option:selected").html().replace("Leaving", "")) == 'PM'){
		            				return_change_time.find('option').remove().end();          				
		            			  return_change_time.append('<option value="1">Returning PM</option>');            				
		            			}else{
		            				return_change_time.find('option').remove().end();
		            				return_change_time.append('<option value="0">Returning AM</option>');
		            				return_change_time.append('<option value="1">Returning PM</option>');
		            			}
		            		}else{
		            			return_change_time.find('option').remove().end();
		            			return_change_time.append('<option value="0">Returning AM</option>');
		            			return_change_time.append('<option value="1">Returning PM</option>');
		            		}             		
	              	}
	              	mainline_cookie_rtn_time = false;
    	            		
            		});
                

                if (jQuery(out_journ_input).length) {
                	  var position = 0;
                    var left = '';
                    var top = '31px';
                                       
                    if(jQuery(body).width() >= 960){
                    	 left = '199px';
                    }else if(jQuery(body).width() >= 768){
                    	left ='122px';
                    }else{
                    	left = '-3px';
                    	top = '71px';
                    }

                    var el_size = "";
                    var el_mar_top = "";
                    var el_mar_left = "";

                    if (jQuery(body).width() >= 769) {
                        el_size = '500px';
                        el_mar_top = '15px';
                        el_mar_left = '17px';
                        
                        if(jQuery('.page-home').length === 1){
                        	el_mar_left = '17px';
                        }else{
                        	
                        	 el_mar_left = '0';
                        	 top = '31px';
                        }
                        
                    } else if (jQuery(body).width() <= 768) {
                        if (jQuery(body).width() >= 480) {
                            el_size = '500px';
                            el_mar_top = '15px';
                            el_mar_left = '-38px';
                        } else if (jQuery(body).width() < 480) {
                            if (jQuery(body).width() >= 320) {
                                el_size = '412px';
                                el_mar_top = '47px';
                                el_mar_left = '16px';
                            } else {
                                el_size = '294px';
                                el_mar_top = '-40px';
                                el_mar_left = '15px';
                            }
                        }
                    }
                    
                    
                    
                     jQuery('.form-item.form-type-textfield.form-item-outbound-text-date').click(function(){
                     	
                     	
                     if(Query(body).width() < 480){
                     		jQuery('#edit-outbound-text .ui-datepicker-inline').css({'display':'block','left':'-48px','top':'-3px'});
                     }else{
                     	jQuery('#quicktabs-dynamic_quicktabs_menu .ui-datepicker-trigger').css({'display':'none'});
                     }
                     	
                     });
                    
                    jQuery(out_journ_input).click(function() {
                    	
                    	
           
                    	check_am_pm(alt,monthNames);
                    	
                    	
                    
                 
											

                    	if(jQuery(rtn_journ).css('display') == 'none'){
                    		
                    		if(jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] fieldset[id^="edit-passengers"]').css('display') ==='none'){

	                        jQuery("#edit-outbound-text-datepicker-popup-0").focus(function() {
	                            jQuery(this).unbind();
	                        });
	                        if (jQuery(out_journ).css('display') == 'none') {
		                        //check the current value of the departure against the original value
		                        if (jQuery(out_journ_input).val() !== out_journ_text) jQuery(out_journ_input).val(out_journ_text);
												    if(jQuery(body).width() < 768){
												    	if(jQuery(body).width() < 480){
													    	jQuery(out_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat'});
													      out_journ.css(main_out_css_320);
													      out_journ_child.css({'display': 'block'});												    		
												    	}else{
												   

													    	jQuery(out_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat'});
													      out_journ.css( main_out_css_480 );
													      out_journ.css( {'display':'block'} );
													      out_journ.animate({height: '250px'}, 500, function() {
													      	out_journ_child.css({'display': 'block'});
													      });
												    	}

												    }else{											    	
												    	if(out_journ.css('display') != 'block'){								    		
																if(jQuery('.page-home').length == 1){
																	jQuery(out_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat'});
													        out_journ.css( main_out_css_780 );
													        out_journ.css( {'display':'block'} );
													        out_journ_child.css({'display': 'none'});
													        out_journ.animate( main_out_anim_780, 500, function() {
													        	out_journ_child.css({'display': 'block'});
													        });
																}else{
																	jQuery(out_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat'});
																	if(jQuery(body).width() < 960){
																		out_journ.css( depart_in_main_css_768 );
																		var top = jQuery('#chiltern-atos-login-mainline-quicktab-form label.error').length  ? '48px' : '49px';
																		out_journ.css( {'top':top });
																		out_journ.css( {'display':'block'} );
														        out_journ.animate({height: '250px'}, 500, function() {
														        	out_journ_child.css({'display': 'block'});
														        });
																	
																	}else{																	
																		out_journ.css( depart_in_main_css_960 );
																		var top = jQuery('#chiltern-atos-login-mainline-quicktab-form label.error').length  ? '48px' : '49px';
																		out_journ.css( {'top':top });
																		out_journ.css( {'display':'block'} );
														        out_journ.animate({height: '250px'}, 500, function() {
														        	out_journ_child.css({'display': 'block'});
														        });	
																	}
																	out_journ_child.css({'display': 'none'});										        
																}													     	
												    	}
												    }
		                        var date = new Date();
		                        
		                      
		                        
		                        if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-date') != null && mainline_cookie_dpt == true){											  	
												  		var alt_input = readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-date').split('-'); 								  		
												  	 _chiltern_add_date_picker(img, '#edit-outbound-text', '#edit-outbound-text-datepicker-popup-0', date, monthNames, out_journ_input, alt_input[0]+','+alt_input[1]+','+alt_input[2]);											  												  			
												  	 jQuery(alt).val(alt_input[0]+'-'+alt_input[1]+'-'+alt_input[2]);	
												 
												  	 
												  	 
												  	 readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-time') == 'PM' ? jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] select[id^='edit-leaving-time']").val('1') : 
												  	 jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] select[id^='edit-leaving-time']").val('0');
												  	 
												  	 
												  	 
												  	 											  	 			  		
													  }else{
													  	_chiltern_add_date_picker(img, '#edit-outbound-text', '#edit-outbound-text-datepicker-popup-0', date, monthNames, out_journ_input);
													  }	                     
		                       	mainline_cookie_dpt == false;
		                        
		                        
		                        
		                        
	                        } else {
		                        var returns_date = jQuery("#block-chiltern-atos-login-atos-quicktab-inline-form form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outbound-text-datepicker-popup-0").val();
		    	    							var departs_date = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outbound-text-datepicker-popup-0").val();
						
												
										     		var departs_date = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outbound-text-datepicker-popup-0").val();
												    
												    	if(jQuery(body).width() < 768){
		                        	out_journ.css({'display': 'none', '':''});
			                        jQuery(out_journ_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat'});
			                        jQuery(out_journ_input).val(returns_date);
		                        	}else{
	                        		
		                        		if(jQuery(body).width() >= 960){
		                        			out_journ.css( depart_in_main_css_960_dis );
																	out_journ.css( {'display':'none'} );
			                        		out_journ_child.css({'display': 'none'});
			                        		jQuery(out_journ_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat'});
			                        		jQuery(out_journ_input).val(departs_date + " - " + jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-leaving-time option:selected").html().replace("Leaving", ""));
		                        			
		                        		}else{
		                        			out_journ.css( depart_in_main_css_768_dis );
																	out_journ.css( {'display':'none'} );
		                        			out_journ_child.css({'display': 'none'});
		                        			jQuery(out_journ_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat'});
		                        			jQuery(out_journ_input).val(departs_date + " - " + jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-leaving-time option:selected").html().replace("Leaving", ""));
		                        		}
												    													    	
												    	if(jQuery(rtn_journ_input).val() != ""){
																var split_rtn = jQuery(rtn_journ_input).val().split("-");
																if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') != null && mainline_cookie_rtn_time == true){
																	readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') == 'PM' ? return_change_time.val('1') : return_change_time.val('0');
								              	}else{ 						              		
								              		if( jQuery.trim( split_rtn[0] ) == 'Same Day'){
								              			
								              			
																			
																		if(jQuery.trim( dpt_time ) == 'PM' ){
																			jQuery(rtn_journ_input).val(split_rtn[0] + '- ' + dpt_time);
																			return_change_time.find('option').remove().end();
									          					return_change_time.append('<option value="1">Returning PM</option>');
																		}else{
																			return_change_time.find('option').remove().end();
									          					return_change_time.append('<option value="0">Returning AM</option>');
									          					return_change_time.append('<option value="1">Returning PM</option>');
																		}												
																	}else{
																		return_change_time.find('option').remove().end();
									          				return_change_time.append('<option value="0">Returning AM</option>');
									          				return_change_time.append('<option value="1">Returning PM</option>');
																	}             		              			         			             		              		
								              	}																
																jQuery(rtn_journ_input).val('');								
															}												    	
												    }						    
		                        
	                        }
	                    	}
                      }
                    });



                    jQuery(rtn_journ_input).click(function() {
               
                    	
                    	if(jQuery(out_journ).css('display') == 'none'){
                    
                    		
                    		if(jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] fieldset[id^="edit-passengers"]').css('display') =='none'){
                    			
    
			                    var rtn_left = "";
			                    var rtn_top = "";
			                    if(jQuery('.page-home').length == 1){      
			                    	if(jQuery(body).width() < 480){
					                  	if(jQuery(rtn_journ).css('display') == 'none'){
							                  var returns_date = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-outbound-text-datepicker-popup-0').val();
					                      rtn_journ.css( main_rtn_css_320 );
					                       rtn_journ.css( {'display':'block','height':'265px'});
		                    				rtn_journ_child.css({'display': 'block'});
					                      jQuery(rtn_journ_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 3px'});
					                  	}else{
					                  		rtn_journ.css( main_rtn_css_320_dis );
					                  		rtn_journ.css( {'display':'none', 'width':'10px'} );
			                    			rtn_journ_child.css({'display': 'none'});
					                  	}
				                    } 
			                    }else{
			                  
			                    	
			                    	rtn_left = '473px';
			                    	rtn_top = '31px';		                    	
			                    	
							              if(jQuery(body).width() >= 960){
				                			rtn_left = '473px';
			                    	rtn_top = '31px';
				                		}else if(jQuery(body).width() >= 768){
				                			rtn_left = '293px';
			                    	rtn_top = '31px';
				                		
				                		}else if(jQuery(body).width() >= 480){
				                			rtn_left = '156px';
			                    		rtn_top = '71px';
				                		}			                    	
			                    	
			                    } 
			 
			                    if(jQuery(body).width() < 480){
			                    	//
			                    } else{
				                    if (jQuery(rtn_journ).css('display') === 'none') {
				                    	
				                    
				                
				                    	
				                    	if(jQuery('.page-home').length == 1){ 
				                    		
				                    		
				                    		
				                    		if(jQuery(body).width() < 768){
				                      	jQuery(rtn_journ).css({'display': 'block'});
				                      	jQuery(rtn_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat'});
				                      	rtn_journ.css( main_rtn_css_480 );
				                      	rtn_journ.css({'display':'block'} );
				                      	rtn_journ.animate({height: '190px'}, 500, function() {
				                          rtn_journ_child.css({'display': 'block'});
				                      	});	
				                    	}else{
				                    		
				                    		if(Query(body).width() >= 960){
					                    		rtn_journ.css( main_rtn_css_768 );
					                    		
					                    		var top = jQuery('#chiltern-atos-login-mainline-quicktab-form label.error').length  ? '50px' : '50px';
																	rtn_journ.css( {'top':top });
						                    	rtn_journ.css({'display':'block'} );
					                    		
						                    	rtn_journ.animate( main_rtn_css_780_ani, 500, function() {
						                        rtn_journ_child.css({'display':'block'});
						                    	});
				                    		}else{
				                    			
				                    		
				                    			
				                    			rtn_journ.css( main_rtn_css_768 );
				                    			var top = jQuery('#chiltern-atos-login-mainline-quicktab-form label.error').length  ? '50px' : '50px';
																	rtn_journ.css( {'top':top });
						                    	rtn_journ.css({'display':'block'} );
					                    		
						                    	rtn_journ.animate( main_rtn_css_780_ani, 500, function() {
						                        rtn_journ_child.css({'display':'block'});
						                    	});
				                    		}

				                    		
				                    	}
				                    		
				                    		
				                    }else{
				                    		
	
				                    		
				                    		if(jQuery(body).width()  > 960){
					                    		jQuery(rtn_journ).css({'display': 'block'});
					                      	jQuery(rtn_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat'});
					                      	rtn_journ.css( main_in_rtn_ccs_960 );
					                      	var top = jQuery('#chiltern-atos-login-mainline-quicktab-form label.error').length  ? '50px' : '50px';
																	rtn_journ.css( {'top':top });
					                      	rtn_journ.css({'display':'block'} );
					                      	rtn_journ.animate({height: '190px'}, 500, function() {
					                          rtn_journ_child.css({'display': 'block'});
					                    		});	
				                    			
				                    		}else{
				                    		jQuery(rtn_journ).css({'display': 'block'});
				                      	jQuery(rtn_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat'});
				                      	rtn_journ.css( main_in_rtn_ccs_768 );
				                      	var top = jQuery('#chiltern-atos-login-mainline-quicktab-form label.error').length  ? '50px' : '50px';
																rtn_journ.css( {'top':top });
				                      	rtn_journ.css({'display':'block'} );
				                      	rtn_journ.animate({height: '190px'}, 500, function() {
				                          rtn_journ_child.css({'display': 'block'});
				                    		});	
				                    			
				                    		}

				                    	

				                    	
				                    	/**
				                    	 * FIND ME HERE
				                    	 * 
				                    	 */

				                     }
				                      
				                    } else {
				                    	
				                    	
				                  
				                    	
				                    	if (jQuery(rtn_journ).css('display') === 'none') {
				                    		
					                    	if(jQuery(body).width() < 768){
						                      rtn_journ_child.css({'display': 'none'});
						                      rtn_journ.css( main_rtn_css_480 );
						                      jQuery(rtn_journ_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat'});
					                    	}else{
						                    	var returns_date = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-outbound-text-datepicker-popup-0').val();
						                      rtn_journ_child.css({'display': 'none'});
						                      rtn_journ.css( main_rtn_css_768_dis );
						                      rtn_journ.css( {'display':'none', 'width':'10px'} );
						                      jQuery(rtn_journ_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 3px'});	
					                    	}
				                    		
				                    	}else{
				                    		
				                    		if(jQuery(body).width() < 768){
						                      rtn_journ_child.css({'display': 'none'});
						                      rtn_journ.css( main_rtn_css_480 );
						                      jQuery(rtn_journ_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat'});
					                    	}else{
					                    		   	var change_day = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-day");
  																	var change_time = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-time");
  																	
															      if(jQuery(rtn_journ_input).val() === "") {
															      	
															      	
															      	var day_txt = jQuery("#edit-return-day").find(":selected").text();
															      	
															  
															      	   	
																    	jQuery(rtn_journ_input).val(jQuery("#edit-return-day").find(":selected").text() + " - " + change_time.children("option").filter(":selected").text().replace("Returning", ""));						    	
																    }else{
																    	
																    	jQuery(rtn_journ_input).val(rtn_journ.val().replace("AM", "").replace("PM", "").replace("-", "").replace(/ /g, '') + " - " + change_time.children("option").filter(":selected").text().replace("Returning", ""));
																    }
						                      
					                    		
						                    	var returns_date = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-outbound-text-datepicker-popup-0').val();
						                      rtn_journ_child.css({'display': 'none'});
						                      rtn_journ.css( main_in_rtn_ccs_768_dis );
						                      rtn_journ.css( {'display':'none', 'width':'188px'} );
						                      jQuery(rtn_journ_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 3px'});	
						                      
						                   
						                      
					                    	}
				                    		
				                    	}
				                    	
				                  

				                    	

				                    }
			                    }          
			                    
			          
			
			                    
		                   	}
		                	}
                    });

                }
            }
            


            function edit_passenger_mainline_button_inline() {
	            var passenger_input = "#block-chiltern-atos-login-atos-quicktab-inline-form form[id^='chiltern-atos-login-mainline-quicktab-form'] .form-item-passenger";
	            var passengers_field = 'form[id^="chiltern-atos-login-mainline-quicktab-form"] fieldset[id^="edit-passengers"]';
	            var passengers_child = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form form[id^="chiltern-atos-login-mainline-quicktab-form"] fieldset[id^="edit-passengers"] .fieldset-wrapper');

              if (jQuery(passenger_input).length) {
                  var passengers = jQuery(passengers_field);

	              jQuery(passenger_input).click(function() {
	              	
	      
	              	
		            	if(jQuery(" #edit-return-journeys").css('display') == 'none' ){
		            		
										if(jQuery('#edit-outward-journeys').css('display') == 'none' ){                    	
		
		                  var cont_width = jQuery(body).width();
		                  if (jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form form[id^="chiltern-atos-login-mainline-quicktab-form"] input[id^="edit-return-journey"]').css('display') !== 'block') {
		                    if (jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form form[id^="chiltern-atos-login-mainline-quicktab-form"] input[id^="edit-outward-journey"]').css('display') !== 'block') {                          
		                    	
		                    	block_passenger_mainline_animate_inline(this, passengers, passengers_child, cont_width);  
		                    }
		                  }else{
		                    jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-passenger').val(parseInt(jQuery('#edit-children').val()) + parseInt(jQuery('#edit-adults').val()));
		                  }
		              	}    
		            	} 	                  
	              });
              }
            }
            


            function block_passenger_mainline_animate_inline(input, parent, parents_child, cont_width) {
            	
            	
            	
	            var position = jQuery(input).position();
	            var left = '108px';
	            var top = '81px';
	            var width = "";

	            if(jQuery('.page-home').length === 1){
									left = '103px';
	            		top = '76px';
	            		
	            var main_height = '';
	          	if (navigator.appVersion.indexOf("Chrome/") != -1) {
									main_height = '274px'; 
							}else if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
								main_height = '258px'; 
							}else{
								main_height = '280px'; 
							}
	            		
	            		
	            		if(cont_width >= 960){
	
	            			if( parent.css('display') == 'none'){               			
	              			parent.css({'top': '-23px', 'left': '-31px','display':'block','height': main_height,'width':'10px'});
	              			parents_child.css({'display': 'none'});
	                   	parent.animate({left: '-211px', width: '190px'}, 500, function() {
	                    	parents_child.css({'display': 'block'});
	                		});	
	            			}else{               				
	            				parent.css({'top': '-23px', 'left': '-31px','width':'10px', 'display':'none'});
	            				parents_child.css({'dsiplay':'none'});
	            			}
	            		}else if(cont_width >= 768){
	            			if( parent.css('display') == 'none'){                			
	              			parent.css({'top': '-23px', 'left': '-31px','display':'block','height': main_height,'width':'10px'});
	              			parents_child.css({'display': 'none'});
	                   	parent.animate({left: '-211px', width: '190px'}, 500, function() {
	                    	parents_child.css({'display': 'block'});
	                		});	
	            			}else{               				
	            				parent.css({'top': '-23px', 'left': '-31px','width':'10px', 'display':'none'});
	            				parents_child.css({'dsiplay':'none'});
	            			}	
	            		}else if(cont_width >= 480){
	            			top ='76px';
	            			left = '108px';
	            			
	            			
	            			if(cont_width  < 768){
	            				
		            			if( parent.css('display') == 'none'){                				
		              			parent.css(  main_pass_css_480 );
		              			parent.css(  {'display':'block'} );
		              			parents_child.css({'display': 'none'});
		              			
		                   	parent.animate({'height':'190px'}, 500, function() {
		                    parents_child.css({'display': 'block'});
		                		});	
		            			}else{            				          				
		            				parent.css( main_pass_css_480_dis );
		            				parent.css( {'display':'none'} );
		            				parents_child.css({'dsiplay':'none'});
		            				
		            			}	 
	            			}else{
	            				
	            				if( parent.css('display') == 'none'){                				
		              			parent.css(  main_pass_css_768 );
		              			parent.css(  {'display':'block'} );
		              			parents_child.css({'display': 'none'});
		                   	parent.animate({'width':'190px'}, 500, function() {
		                    parents_child.css({'display': 'block'});
		                		});	
		            			}else{            				          				
		            				parent.css( main_pass_css_768_dis );
		            				parent.css( {'display':'none'} );
		            				parents_child.css({'dsiplay':'none'});
		            			}	 
	            				
	            			}
	            		}else{
	            			if( parent.css('display') == 'none'){ 
	            			           				
	              			parent.css( main_pass_css_320 );
	              			parent.css( {'display':'block','height':'220px'} );
	              			parents_child.css({'display': 'block'});
	            			}else{               				
	            				parent.css( main_pass_css_320_dis );
	            				parent.css( {'display':'none','height':'10px'});
	            				parents_child.css({'dsiplay':'none'});
	            			}	
	            		}
							}else{// 

	            			top = jQuery('#chiltern-atos-login-mainline-quicktab-form label.error').length ? '48px' : '50px';

										left = cont_width >= 960 ? '640px' :  '494px';

	            		   		
	            	if (parent.css('display') != 'block') {
	                parent.css({'display': 'block'});
	                if (cont_width < 480 && cont_width >= 320) {
	                	parent.css({'z-index': 2000, 'height': '190px', 'top': top, 'left': left, 'border': '3px solid #1fb7e1', 'height': '190px'});
	                  parents_child.css({'display': 'block'});
	                } else if (cont_width < 320) {	
                    parent.css({'top': top, 'left': left});
                    parent.animate({'z-index': 2000, 'height': '190px'}, 500, function() {
                        parents_child.css({'display': 'block'});
                    });
 
	               } else {  
	              	var block_left = '-195px';
                	var block_width = '445px';
					      	if(cont_width >= 960){
						      	parent.css( main_in_pass_ccs_960 );
						      	parent.css({'top':top});
						    		parent.css({'display':'block'});						    		
						     		parent.animate({height: '190px'}, 500, function() {
						          parents_child.css({'display': 'block'});					          
						      	});
					      	}else if(cont_width >= 768){
					      		parent.css( main_in_pass_ccs_768 );
					      		parent.css({'top':top});
						    		parent.css({'display':'block'});						    		
						     		parent.animate({height: '190px'}, 500, function() {
						          parents_child.css({'display': 'block'});					          
						      	});
					      	}                   
	            	}
	            }else{
	            	if(cont_width >= 768){
	            		
	            		if(cont_width >= 960){
	            			parent.css( main_in_pass_ccs_960_dis );
	            			parent.css( {'display':'none'} );
	            		parents_child.css({'display': 'none'});
	            		}else{
	            		parent.css( main_in_pass_ccs_768_dis );
	            		parent.css( {'display':'none'} );
	            		parents_child.css({'display': 'none'});
	            		}	
	            	}else{
	            		parent.css( main_in_pass_ccs_480_dis );
	            		parent.css( {'display':'none'} );
	            		parents_child.css({'display': 'none'});
	            	}        	
	            }	
						}
           }



            function edit_passenger_button_inline() {
              var passenger_input = '#block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form .form-item.form-type-textfield.form-item-passenger';
              var passengers_field = '#block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form  fieldset[id^="edit-passengers"]';
              var passengers_child = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form fieldset[id^="edit-passengers"] .fieldset-wrapper');
              if (jQuery(passenger_input).length) {
                  var passengers = jQuery(passengers_field);
                  var position = jQuery(passenger_input).position();
                  var left = "";
                  var top = "";
                  passengers.css({'z-index': 2000, 'border': '3px solid #1fb7e1', 'height': '10px', 'width': '190px', 'left': left, 'top': top});                    
                  jQuery(passenger_input).click(function() {
                  	var cont_width = jQuery(body).width();                    	                  	
                   	if (cont_width <= 480 && cont_width >= 321) {
											 top = "73px";
											left = "640px";
                    }else if(cont_width <= 320) {
											top = "";
											left = "";
                    }else if(cont_width > 959){
                    	top = "73px";
											left = "640px";
                    }else if(cont_width > 480){
      
                    	if(jQuery('.page-home').length == 1){
                  			//-195px
                  			left = '-195px';
                  		}else{
                  			left = '494px';
                  		}
                    }
		                if (jQuery(body).width()  <= 768) {
	                		jQuery('#edit-passengers .form-item.form-type-select.form-item-ticket-type').css({'display':'block'});	
	                	}else{
	                		if(jQuery('.page-home').length == 1){
	                			jQuery('#edit-passengers .form-item.form-type-select.form-item-ticket-type').css({'display':'none'});
	                		}else{
	                			jQuery('#edit-passengers .form-item.form-type-select.form-item-ticket-type').css({'display':'block'});
	                		}
	                		
	                	}                     
                    if (jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns').css('display') != 'block') {
                      if (jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures').css('display') != 'block') {
                          block_passenger_animate_inline(this, passengers, passengers_child, cont_width);
                      }
                    }
                    if(jQuery(body).width() <= 480){
                    	
                    	if (passengers.height() == 250) {
                        jQuery('#edit-passenger').val(parseInt(jQuery('#edit-children').val()) + parseInt(jQuery('#edit-adults').val()));
                        passengers_child.css({'display': 'none'});
                        passengers.css({'z-index': 2000, 'border': '3px solid #1fb7e1', 'display': 'none', 'height': '10px', 'width': '190px', 'left': left, 'top': top});
                    	}                      	  	
                    }else{

                    	if (passengers.height() == 250 || passengers.css('left') =='-195px') {
                        jQuery('#edit-passenger').val(parseInt(jQuery('#edit-children').val()) + parseInt(jQuery('#edit-adults').val()));
                        passengers_child.css({'display': 'none'});
                        passengers.css({'z-index': 2000, 'border': '3px solid #1fb7e1', 'display': 'none', 'height': '10px', 'width': '190px', 'left': left, 'top': top});
                    	}                     	
                    }
                });
              }
            }
            


            function block_passenger_animate_inline(input, parent, parents_child, cont_width) {
	        	
	            var position = jQuery(input).position();
	            var left = position.left - 21;
	            var top = position.top + 31;
	            var height = '';
	            if (parent.css('display') != 'block') {
	            	if(jQuery('.page-home').length != 1){
	            		if (parent.width() == 190) {           
	                    jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'block'});
	                    parents_child.css({'display': 'none'});
	                    parent.css({'display': 'none', 'height': '10px', 'left': '0', 'top': '0', 'width':'190px'});	                    
	                }	//end of if statement	            		
	            	}  		
                parent.css({'display': 'block'});
                if (cont_width <= 480 && cont_width >= 320) {          
                  top = '85px';
              		left = '101px';
              		height  = '83px';                   		
                	parent.css({'top': top, 'left': left,'width':'190px', 'height':height, 'display':'block'}); 
                  parent.animate({'z-index': 2000, 'height': '250px'}, 500, function() {
                      parents_child.css({'display': 'block'});
                  });
                } else if (cont_width < 320) {
                    parent.css({'top': top, 'left': left});
                    parent.animate({'z-index': 2000, 'height': '250px'}, 500, function() {
                        parents_child.css({'display': 'block'});
                    });
                }else{
                	if(cont_width >= 960){             
                		if(jQuery('.page-home').length == 1){                   			
                  		top = '12px';
                  		height  = '10px';                    		
                  		parent.css({'top': top, 'left': left,'width':'190px', 'height':height, 'display':'block'}); 
                      parent.animate({'z-index': 2000, 'height': '250px'}, 500, function() {
                          parents_child.css({'display': 'block'});
                      });
                		}else{
                  		top = '37px';
                  		height  = '307px';
                  		
                  
                			
                			 if(jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-form label.error').length >= 1){	
          							if(jQuery('#chiltern-atos-login-form').height()  == 64){
          								top = '54px';	
          							}else{
          								top = '48px';
          							}
          						}
			                    		
                  		if(jQuery('.page-home').length == 1){
                    		top = '36px';
                    		height  = '307px';	                    			
                    		parent.css({'top': top, 'left': left,'width':'190px', 'height':height, 'display':'block'});             
                        parent.animate({'z-index': 2000, 'height': '250px'}, 500, function() {
                            parents_child.css({'display': 'block'});
                        });
                  		}else{
                    		parent.css({'top': top, 'left': left,'width':'190px', 'height':'10px', 'display':'block'});
                        parent.animate({'z-index': 2000, 'height': '250px'}, 500, function() {
                            parents_child.css({'display': 'block'});
                        });		                        
                  		}	
                		}
                	}else if (cont_width >=768){
                		top = '49px';
                		if(jQuery('.page-home').length == 1){
                			left = '-195px';
                			parent.css({'top': top, 'left': '-15px','width':'10px', 'height':'307px', 'display':'block'});
                    	parent.animate({'z-index': 2000, 'left':'-195px','width':'190px'}, 500, function() {
                        parents_child.css({'display': 'block'});
                    	});
                		}else{
                			top = '36px';
                			left = '496px';
                			
                			if(jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-form label.error').length >= 1){	
          							if(jQuery('#chiltern-atos-login-form').height()  == 64){
          								top = '54px';	
          							}else{
          								top = '48px';
          							}
          						}
                			
                			parent.css({'top': top, 'left': left,'width':'190px', 'height':'10px', 'display':'block'});
                      parent.animate({'z-index': 2000, 'height': '250px'}, 500, function() {
                          parents_child.css({'display': 'block'});
                      });
                		}
                		height  = '307px';
                	}else{  		
                		top = '85px';
                		left = '101px';
                		height  = '83px';                    		
                		parent.css({'top': top, 'left': left,'width':'190px', 'height':height, 'display':'block'});
                    parent.animate({'z-index': 2000, 'height': '250px'}, 500, function() {
                        parents_child.css({'display': 'block'});
                    });	
                	} 
               	}
            	}
        		}





            function block_passenger_animate(parent, parents_child, cont_width) {
            	if (parent.css('display') != 'block') {
                if (parent.width() == 190) {
                    jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'block'});
                    parents_child.css({'display': 'none'});
                    parent.css({'display': 'none', 'width': '10px', 'left': '-2px'});
                }	//end of if statement	
                var block_left = '-195px';
                var block_width = '445px';
                var block_border_right = '3px solid #1fb7e1';
                parent.css({'display': 'block'});
                if (cont_width < 768 && cont_width >= 321) {
              	 	parent.css({'top':'85px', 'left': '101px','width':'190px','display':'block','border':'3px solid #1fb7e1','height':'10px'});                       
                  parent.animate({'z-index': 2000, 'height': '250px'}, 500, function() {
                  	parents_child.css({'display': 'block'});
                  });
                    
                }else if(cont_width <= 320) {
                	parent.animate({width: '190px', left: block_left}, 500, function() {
                  	parents_child.css({'display': 'block'});
                  });
                }else{
                	var block_height = '';
                	if (navigator.appVersion.indexOf("Chrome/") != -1) {
																					
												block_height = '298px'; 
									}else if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
										block_height = '282px'; 
									}else{
									
										
										if((navigator.platform.indexOf("iPad") != -1)){												
												block_height = '297px';								
											}else{
												block_height = '307px'; 
												
												if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
													//if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
												}
												
												
											}
									}
                	
                	
                
                	
                	parent.css({'top':'49px', 'height': block_height});                    	
                  parent.animate({width: '190px', left: block_left}, 500, function() {
                      parents_child.css({'display': 'block'});
                  });
                }
              }else{
              	if (cont_width <= 768 && cont_width >= 321) {
                  parents_child.css({'display': 'none'});
                  parent.css({'display': 'none', 'width': '10px', 'left': '-15px'});
              	}               	
              }
            }
            
            
            

            
            
            
					function block_passenger_mainline_animate(parent, parents_child, cont_width) {
					  if (parent.css('display') != 'block') {
					    if (parent.width() == 190) {
					        jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'block'});
					        parents_child.css({'display': 'none'});
					        parent.css({'display': 'none', 'width': '10px', 'left': '-20px'});
					    }	//end of if statement		
					    var block_left = '-211px';
					    var block_width = '445px';
					    var block_border_right = '3px solid #1fb7e1';
					    parent.css({'display': 'block'});
					    					    
					    if (cont_width < 768 ) {
					      jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'none'});
					      block_left = '-18px';
					      block_width = '214px';
					      block_border_right = '3px solid #576370';
					      parent.css( main_pass_css_320 );
					      parent.css( {'display':'block','height':'220px'} );
					      parents_child.css({'display': 'block'}); 
					      
					      if(jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .last.active').length == 1 ){
									jQuery('.page-home .region.region-content section').css({'padding-top': '574px'});
								}
					                                                              
					    }else{
				    	
				    		parent.css( main_pass_css_768 );
				    		parent.css({'display':'block'});
				    		
				     		parent.animate({width: '190px', left: block_left}, 500, function() {
				          parents_child.css({'display': 'block'});					          
				      	});
				    	}							
						}
					}
            
            
            
            
            
            
            
           

	function edit_passenger_mainline_button_block() {
	  var passenger_input = '#block-chiltern-atos-login-atos-quicktab-block-form #quicktabs-dynamic_quicktabs_menu form[id^="chiltern-atos-login-mainline-quicktab-form"] .form-item.form-type-textfield.form-item-passenger';
	  var passengers_field = '#block-chiltern-atos-login-atos-quicktab-block-form #quicktabs-dynamic_quicktabs_menu form[id^="chiltern-atos-login-mainline-quicktab-form"]  fieldset[id^="edit-passengers"]';
	  var passengers_child = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form #quicktabs-dynamic_quicktabs_menu form[id^="chiltern-atos-login-mainline-quicktab-form"] fieldset[id^="edit-passengers"] .fieldset-wrapper');
	  var passengers = jQuery(passengers_field);
	  jQuery(passenger_input).click(function() {   
	    if(jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journeys").css('display') == 'none'){        	
	    	if(jQuery('#quicktabs-dynamic_quicktabs_menu #edit-outward-journeys').css('display') == 'none'){
	    	  var cont_width = jQuery(body).width();
	        if (jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns').css('display') != 'block') {
	          if (jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures').css('display') != 'block') {                       	             
	            if(passengers.css('display') == 'block'){
	           		passengers_child.css({'display': 'none'});
	           		if(jQuery(body).width() < 768){
	           			passengers.css({'position': 'absolute','margin-top':'0','margin-bottom':'0px'});
	           			passengers.css( main_pass_css_320_dis );
	           			passengers.css({ 'height':'10px','display':'none'} );
	           			
		           		if(jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .last.active').length == 1 ){
										jQuery('.page-home .region.region-content section').css({'padding-top': '395px'});
									}
	           		}else{
	           			passengers.css( main_pass_css_768_dis );
	            		passengers.css( {'display':'none'} );
	            		passengers_child.css({'dsiplay':'none'});
	           		}                           	
	            }else{	
	            	block_passenger_mainline_animate(passengers, passengers_child, cont_width);
	            }
	          }
	        }	
	    	}          	
	    }
	  });
	}



            function edit_mainline_out_block(img, picker, alt, bk_grd_image, monthNames) {  
            	            	
	            /**
	             * mainline block departue date
	             * 
	             */
	            var out_journ = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form #quicktabs-dynamic_quicktabs_menu #edit-outward-journeys');
	            var out_journ_child = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form  #quicktabs-dynamic_quicktabs_menu #edit-outward-journeys .fieldset-wrapper');
	            var out_journ_input = '#block-chiltern-atos-login-atos-quicktab-block-form  input[id^="edit-outward-journey"]';
	            //this is the outbound button that the user presses
	            var out_journ_text = jQuery(out_journ_input).val();
	            
	           	var rtn_journ = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-return-journeys');
	            var rtn_journ_child = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form  form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-return-journeys .fieldset-wrapper');
	            var rtn_journ_input = '#block-chiltern-atos-login-atos-quicktab-block-form form[id^="chiltern-atos-login-mainline-quicktab-form"] input[id^="edit-return-journey"]';
	            //this is the outbound button that the user presses
	            
	            var return_change_time = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-return-time');
							
							var dpt_time = '';
           	                    	
          		jQuery("#block-chiltern-atos-login-atos-quicktab-block-form form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-day").change(function(){
            		var departs_date = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outbound-text-datepicker-popup-0").val();
            		
            	
 
            		if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') != null && mainline_cookie_rtn_time == true){
            			
									readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') == 'PM' ? return_change_time.val('1') : return_change_time.val('0');
              	}else{              		              			         			             		
	              	if( jQuery.trim(jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-day option:selected").html()) == 'Same Day'){        			
	            			if(jQuery.trim(jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-leaving-time option:selected").html().replace("Leaving", "")) == 'PM'){
	            				return_change_time.find('option').remove().end();          				
	            			  return_change_time.append('<option value="1">Returning PM</option>');            				
	            			}else{
	            				return_change_time.find('option').remove().end();
	            				return_change_time.append('<option value="0">Returning AM</option>');
	            				return_change_time.append('<option value="1">Returning PM</option>');
	            			}
	            		}else{
	            			return_change_time.find('option').remove().end();
	            			return_change_time.append('<option value="0">Returning AM</option>');
	            			return_change_time.append('<option value="1">Returning PM</option>');
	            		}
              	}
              	mainline_cookie_rtn_time = false;
          		});
            	

							if(jQuery(body).width() < 768){
									jQuery('.form-item.form-type-textfield.form-item-outbound-text-date').click(function(){
							 			jQuery('#edit-outbound-text .ui-datepicker-inline').css({'display':'block','left':'-48px','top':'-3px'});           	
							 		});
							}

						

                jQuery(out_journ_input).click(function() { 
       
              
                            
                	if(jQuery(rtn_journ).css('display') == 'none'){
                		
                		
                		
    									
										check_am_pm(alt,monthNames);
                    	            		         
                		if(jQuery(body).width() < 768){	
                			
                										      
											if( jQuery('#edit-outward-journeys').css('display') !='block'){
												
												
									
												
							
												if(jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .last.active').length == 1 ){
																										
													if(navigator.userAgent.match(/Android/i)){
														jQuery('.page-home .region.region-content section').css({'padding-top': '973px'});
													}else{
														jQuery('.page-home .region.region-content section').css({'padding-top': '993px'});
													}
												} 
												
							
												
							      		jQuery(out_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat'});
												jQuery('.form-item.form-type-textfield.form-item-outbound-text-date').css( cal_icon_img );            
												date = new Date();		  
												
												
												     if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-date') != null && mainline_cookie_dpt == true){	
	                     	
	                     										  	
												  		var alt_input = readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-date').split('-'); 								  		
												  	 _chiltern_add_date_picker(img, '#edit-outbound-text', '#edit-outbound-text-datepicker-popup-0', date, monthNames, out_journ_input, alt_input[0]+','+alt_input[1]+','+alt_input[2]);											  												  			
												  	 jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outward-journeys #edit-leaving-time").val(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-time'));	
					
												  	 
												  	 jQuery(alt).val(alt_input[0]+'-'+alt_input[1]+'-'+alt_input[2]);				  		
													  }else{
													  	_chiltern_add_date_picker(img, '#edit-outbound-text', '#edit-outbound-text-datepicker-popup-0', date, monthNames, out_journ_input);
													  }	                     
		                       	mainline_cookie_dpt == false; 
		                    
		                    
		                    
		                    
		                    												
												out_journ.css( main_out_css_320 );
												out_journ_child.css({'display': 'block'});
												jQuery('.page-home #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-mainline-quicktab-form #edit-outward-journeys .fieldset-wrapper .container-inline-date').css({'margin-bottom':'0'});
								      }else{
								      	
								      	if(jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .last.active').length == 1 ){
													jQuery('.page-home .region.region-content section').css({'padding-top': '395px'});
												} 
												
												
								      						
							      		out_journ.css( main_out_css_320_dis );
							      		out_journ_child.css({'display': 'none'});
									      var departs_date = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outbound-text-datepicker-popup-0").val();
											  jQuery(out_journ_input).val(departs_date + " - " + jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-leaving-time option:selected").html().replace("Leaving", ""));
											  										  
												dpt_time = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-leaving-time option:selected").html().replace("Leaving", "");
												
									     	var departs_date = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outbound-text-datepicker-popup-0").val();
											 	jQuery(out_journ_input).val(departs_date + " - " + dpt_time );  
																														
												var split_rtn = jQuery(rtn_journ_input).val().split("-");
												
											

												if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') != null && mainline_cookie_rtn_time == true){
													readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') == 'PM' ? return_change_time.val('1') : return_change_time.val('0');
													
													
												
				              	}else{ 				              		
					              	if( jQuery.trim( split_rtn[0] ) == 'Same Day'){
														if(jQuery.trim( dpt_time ) == 'PM' ){
															jQuery(rtn_journ_input).val(split_rtn[0] + '- ' + dpt_time);
															
															return_change_time.find('option').remove().end();
				            					return_change_time.append('<option value="1">Returning PM</option>');
														}else{
															return_change_time.find('option').remove().end();
				            					return_change_time.append('<option value="0">Returning AM</option>');
				            					return_change_time.append('<option value="1">Returning PM</option>');
														}												
													}else{
														return_change_time.find('option').remove().end();
				            				return_change_time.append('<option value="0">Returning AM</option>');
				            				return_change_time.append('<option value="1">Returning PM</option>');
													}             		              			         			             		
				              	}	
												jQuery(rtn_journ_input).val('');											  
								      }							      
                		}
                
                		
                		if (jQuery(out_journ).width() == 10 || jQuery(out_journ).width() == 2 || jQuery(out_journ).width() == 0) {
                			
                	
	                    //check the current value of the departure against the original value
	                    if (jQuery(out_journ_input).val() != out_journ_text) jQuery(out_journ_input).val(out_journ_text);
	
	                    jQuery('#edit-outward-journeys').css({'display': 'block'});
	                   
	                    jQuery(out_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat', 'background-position': '160px 3px'});
	                    var cont_width = jQuery(body).width();
	
	                    var block_left = '';
	                    var block_width = '';
                        if (jQuery(body).width() < 768) {                  
	                    		out_journ_child.css({'display': 'block'});	                       
	                       	out_journ.css({'width':'214px','left':'-18px','position':'relative','margin-top':'27px','margin-bottom':'-22px', 'height':'258px'});
		                      jQuery('.form-item.form-type-textfield.form-item-outbound-text-date').css( cal_icon_img );
	                        jQuery('.page-home #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-mainline-quicktab-form #edit-outward-journeys .fieldset-wrapper .container-inline-date').css({'margin-bottom':'0'});
	                        jQuery('.mainline-details').css({'width':bk.px.fst,'left':'-56px','z-index':'2010'});
	                        jQuery('.form-item.form-type-textfield.form-item-outbound-text-date').click(function(){
	                        	jQuery('#edit-outbound-text .ui-datepicker-inline').css({'display':'block','left':'-48px','top':'-3px'});	                         	
	                        });
						            }else{	
						           				            	
						            	out_journ_child.css({'display': 'none'});
	                        jQuery(out_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat'});
										      out_journ.css( main_out_css_780 );
										      out_journ.css( {'display':'block'} );
										      out_journ.animate( main_out_anim_780, 500, function() {
										      	out_journ_child.css({'display': 'block'});
										      });	
										      
										      
										      					            	
						            }
                       	
	                      var date = new Date();
	                      	
	                     if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-date') != null && mainline_cookie_dpt == true){	
	                     	
	                     										  	
												  		var alt_input = readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-date').split('-'); 								  		
												  	 _chiltern_add_date_picker(img, '#edit-outbound-text', '#edit-outbound-text-datepicker-popup-0', date, monthNames, out_journ_input, alt_input[0]+','+alt_input[1]+','+alt_input[2]);		
												  	 
												  	
												  	 readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-time') == 'PM' ? jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] select[id^='edit-leaving-time']").val('1') : 
												  	 jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] select[id^='edit-leaving-time']").val('0');
												  	 									  												  			
												  	 // jQuery(alt).val(alt_input[0]+'-'+alt_input[1]+'-'+alt_input[2]);	
												  	 //_chiltern_add_date_picker(img, picker, alt, date, monthNames);	
												  	 jQuery(alt).val(alt_input[0]+'-'+alt_input[1]+'-'+alt_input[2]);				  		
													  }else{
													  	_chiltern_add_date_picker(img, '#edit-outbound-text', '#edit-outbound-text-datepicker-popup-0', date, monthNames, out_journ_input);
													  }	                     
		                       	mainline_cookie_dpt == false; 
		                                     
	                      
	                      

                   }else{// THE DISPLAY IS A BLOCK
                   	if (jQuery(body).width() >= 768) {
                   		if(out_journ.css('display') == 'block'){
	               				jQuery(out_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat'});
												out_journ.css( main_out_css_780 );
												out_journ_child.css({'display': 'none'});
																								
											}																						   
	                  }
	                  																								
										dpt_time = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-leaving-time option:selected").html().replace("Leaving", "");
										
							     	var departs_date = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outbound-text-datepicker-popup-0").val();
									 	jQuery(out_journ_input).val(departs_date + " - " + dpt_time );  
																												
										var split_rtn = jQuery(rtn_journ_input).val().split("-");

		            	if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') != null && mainline_cookie_rtn_time == true){
										readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') == 'PM' ? return_change_time.val('1') : return_change_time.val('0');
	              	}else{              		              			         			             		
	              		if( jQuery.trim(jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-day option:selected").html()) == 'Same Day'){        			
		            			if(jQuery.trim(jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-leaving-time option:selected").html().replace("Leaving", "")) == 'PM'){
		            				return_change_time.find('option').remove().end();          				
		            			  return_change_time.append('<option value="1">Returning PM</option>');            				
		            			}else{
		            				return_change_time.find('option').remove().end();
		            				return_change_time.append('<option value="0">Returning AM</option>');
		            				return_change_time.append('<option value="1">Returning PM</option>');
		            			}
		            		}else{
		            			return_change_time.find('option').remove().end();
		            			return_change_time.append('<option value="0">Returning AM</option>');
		            			return_change_time.append('<option value="1">Returning PM</option>');
		            		}             		
	              	}

									jQuery(rtn_journ_input).val('');
									}      		
                }
              });

                /**
                 * Mainline block return date
                 * 
                 */

              var rtn_journ_text = jQuery(out_journ_input).val();

              jQuery(rtn_journ_input).click(function() {
              	
      
           
              	
              	var return_change_time = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-return-time');
              	dpt_time = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-leaving-time option:selected").html().replace("Leaving", "");
  
              	if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') != null && mainline_cookie_rtn_time == true){
              		
									readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') == 'PM' ? return_change_time.val('1') : return_change_time.val('0');

              		if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') == "PM"){	

		        					return_change_time.children("option").first().show();
						    			return_change_time.val("1"); 	

		        				}else{
		        					return_change_time.children("option").first().show();
						    			return_change_time.val("0");
		        				}
	              	}else{ 
	          
	              		
	              		var rtn_day = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-return-day').val();
	              		
	              			if(jQuery.trim( dpt_time ) == 'PM' ){
	              				
	              				if(rtn_day == 0){
	              					return_change_time.find('option').remove().end();
					            		return_change_time.append('<option value="1">Returning PM</option>'); 
	              					
	              				}else{
	              					return_change_time.find('option').remove().end();
						            	return_change_time.append('<option value="0">Returning AM</option>');
						            	return_change_time.append('<option value="1">Returning PM</option>');
	              				}
	              				
	              			            			
		              		}else{
		              			return_change_time.find('option').remove().end();
						            return_change_time.append('<option value="0">Returning AM</option>');
						            return_change_time.append('<option value="1">Returning PM</option>');
		              		}           		              			         			
              		
              			}
              	
              	if(jQuery(out_journ).css('display') == 'none'){	
                  if (jQuery(rtn_journ).width() == 10 || jQuery(rtn_journ).width() == 2 || jQuery(rtn_journ).width() == 0 || jQuery(rtn_journ).width() == 174) {
                    //check the current value of the departure against the original value
                    //if(jQuery(rtn_journ_input).val() != out_journ_text) jQuery(out_journ_input).val(out_journ_text);
                    jQuery(rtn_journ).css({'display': 'block'});
                    jQuery(rtn_journ_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat', 'background-position': '160px 3px'});

                    var block_left = '';
                    var block_width = '';
                                             
                    if(jQuery(body).width() < 768){										
                  		rtn_journ.css( main_rtn_css_320 );
                  		rtn_journ.css( {'display':'block'} );
                  		rtn_journ_child.css({'display': 'block'});  
                  		
                  			if(jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .last.active').length == 1 ){
													jQuery('.page-home .region.region-content section').css({'padding-top': '574px'});
												} 
                  		                 		
                    }else{
                    	block_left = '-209px';
                    	block_width = '188px';
     
                    	rtn_journ.css( main_rtn_css_768 );
	                    rtn_journ.css({'display':'block'} );
                    		
	                    rtn_journ.animate( main_rtn_css_780_ani, 500, function() {
	                    	rtn_journ_child.css({'display':'block'});
	                    });                    		
                    }
                    	

                var date = new Date();
                }else{

	              	if(jQuery(body).width() < 768){
	                	if(jQuery(rtn_journ).css('display') == 'none'){
				            	var returns_date = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-outbound-text-datepicker-popup-0').val();   
		                 	rtn_journ.css( main_rtn_css_320 );
	                  	rtn_journ.css( {'display':'block','height':'265px'} );
	                		rtn_journ_child.css({'display': 'block'});		                      
		                  jQuery(rtn_journ_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 3px'});
	                  	
	                  	if(jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .last.active').length == 1 ){
												jQuery('.page-home .region.region-content section').css({'padding-top': '574px'});
											}
	                  
	                  }else{
	                  	rtn_journ.css( main_rtn_css_320_dis );
		                  rtn_journ.css( {'display':'none', 'width':'10px'} );				
	                  	rtn_journ_child.css({'display': 'none'});
	                  	
	                  	if(jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .last.active').length == 1 ){
												jQuery('.page-home .region.region-content section').css({'padding-top': '395px'});
											}
	                  }
	                }else{
	                  var returns_date = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-outbound-text-datepicker-popup-0').val();
	                  rtn_journ_child.css({'display': 'none'});
	                  rtn_journ.css( main_rtn_css_768_dis );
	                  rtn_journ.css( {'display':'none', 'width':'10px'} );
	                  jQuery(rtn_journ_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 3px'});                	
	                }
	                
	                
	                //var rtn_journ = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journey");
  								var change_day = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-day");
  								var change_time = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-time");
  								jQuery(rtn_journ_input).val('');
							    if(jQuery(rtn_journ_input).val() === "") {							    								    	
							    	jQuery(rtn_journ_input).val(jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-day").find(":selected").text() + " - " + change_time.children("option").filter(":selected").text().replace("Returning", ""));						    	
							    }else{							    	
							    	jQuery(rtn_journ_input).val(rtn_journ.val().replace("AM", "").replace("PM", "").replace("-", "").replace(/ /g, '') + " - " + change_time.children("option").filter(":selected").text().replace("Returning", ""));
							    }     
	              	}
              	}

              });
            }





            function edit_departures_button_block(img, picker, alt, bk_grd_image, monthNames) {
                var departs = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form #quicktabs-dynamic_quicktabs_menu #edit-departures');
                var departs_child = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form  #quicktabs-dynamic_quicktabs_menu #edit-departures .fieldset-wrapper');
                var departs_input = '#quicktabs-dynamic_quicktabs_menu input[id^="edit-departure"]';
                var returns_input = '#block-chiltern-atos-login-atos-quicktab-block-form #chiltern-atos-login-form  input[id^="edit-return"]';
                
                //this is the departure button that the user presses
                var depart_text = jQuery(departs_input).val();
                //click the departure input button on th all trains block
                jQuery(departs_input).click(function() {
                	
                	
     
									jQuery(returns_input).val('');
                		var date = new Date();
                		
                	
                
                	
                    var cont_width = jQuery(body).width();
  
                    //check if return field set is visible, only open the returns field set if the departures is not
                    if (jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns').css('display') !== 'block') {
                    	if (jQuery('#block-chiltern-atos-login-atos-quicktab-block-form  #edit-passengers').css('display') !== 'block') {
                    		
                    		
	                    	if (departs.width() <=12) {
	                      	//check the current value of the departure against the original value
	                        if (jQuery(departs_input).val() != depart_text) jQuery(departs_input).val(depart_text);                                   
	                          if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
	                          	jQuery(departs_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat', 'background-position': '153px 0px'});
	                          }else{
	                          	jQuery(departs_input).css({'background-image': "url('sites/all/themes/custom/chilterntheme/images/grey-close-button.png')", 'background-repeat': 'no-repeat', 'background-position': '160px 3px'});
	                          }
	                          departures_block_animate(departs, departs_child, cont_width);
	                        }
	                        var returns_date = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();                           
	
                      		
                      
												  if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-input') != null && all_train_cookie_dpt == true){								  	
												  		var alt_input = readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-input').split('-'); 									  		
												  		_chiltern_add_date_picker(img, picker, alt, date, monthNames, departs_input, alt_input[0]+','+alt_input[1]+','+alt_input[2]);
												  		jQuery('#chiltern-atos-login-form #edit-departures select[id^="edit-hours"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-hour')));
												  		jQuery('#chiltern-atos-login-form #edit-departures select[id^="edit-minutes"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-minute')));									  												  			
												  	  jQuery(alt).val(alt_input[0]+'-'+alt_input[1]+'-'+alt_input[2]);							  		
												  }else{
												  	_chiltern_add_date_picker(img, picker, alt, date, monthNames, departs_input);
												  }
		     									all_train_cookie_dpt = false;                  
	                        	       
		                    	if(jQuery(body).width() <= 768){
		                    		if(departs.width() == 500){                   			
		                    			if(departs.height() == 290){
			                          var depart_date = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
			                          var depart_hour = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-select.form-item-hours select[id^="edit-hours"]').val();
			                          var depart_min = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-select.form-item-minutes select[id^="edit-minutes"]').val();
			                          if (depart_min === '60')
			                              depart_min = '00';
			                              
			                              
			                          if(parseInt(depart_hour) <10){
	                              	if(depart_hour != '00'){
         	                         depart_hour = '0'+parseInt(depart_hour);	
                                  }		                              	
	                              }
			                          jQuery(departs_input).val(depart_date + " - " + depart_hour + ":" + depart_min);
			
			                          jQuery(departs_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 4px'});
			
			                          departs_child.css({'display': 'none'});
			                          departs.css({'display': 'none', 'width': '10px', 'left': '-15px'});                     				
		                    			}
		                    		}		
		                    	}
													
													
													
                    		
                    		  if (departs.width() == 515 || departs.width() == 507) {
                    		  	
                    		  	
	                          //edit-hours
	                          var depart_date = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
	                          var depart_hour = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-select.form-item-hours select[id^="edit-hours"]').val();
	                          var depart_min = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-select.form-item-minutes select[id^="edit-minutes"]').val();
	                          if (depart_min === '60')
	                              depart_min = '00';
	                              
	                          
	                              
	                              if(parseInt(depart_hour) <10){
	                              	
	                              	if(depart_hour != '00'){
	                              		depart_hour = '0'+parseInt(depart_hour);	
	                              	}	                              	                              	
	                              }
	                            
	                          jQuery(departs_input).val(depart_date + " - " + depart_hour + ":" + depart_min);
	                          
	                          check_depart_and_returns_time(); 
	                          
	                          jQuery(departs_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 4px'});         
	                          //if(cont_width > '481'){
	                          departs_child.css({'display': 'none'});
	                          departs.css({'display': 'none', 'width': '10px', 'left': '-15px'});
                                //}
                          }//end of if width statement
                        }//end of if passengers statement
                    }//end of css if statement		
                });//end of click function	
            }


						function check_depart_and_returns_time(){
							dpt_date = jQuery('#chiltern-atos-login-form #edit-departures .form-item.form-type-textfield.form-item-input-text-date');
							rtn_date = jQuery('#chiltern-atos-login-form #edit-returns .form-item.form-type-textfield.form-item-input-text-date');										       	
						

							if(rtn_date.val() != ""){	
								if(jQuery('#edit-return').val() != ""){					
								var rtn_array = jQuery('#edit-return').val().split('-');
									var rtn_hour  = rtn_array[3].split(':');
								var dpt_array = jQuery('#edit-departure').val().split('-');
								var dpt_hour  = rtn_array[3].split(':');
								var rtn_h = parseInt(jQuery("#edit-hours").find(":selected").text()) + parseInt(1);
									if(parseInt(jQuery("#edit-departures select[id^=edit-hours]").find(":selected").text()) <= parseInt(jQuery("#edit-returns select[id^=edit-hours]").find(":selected").text()) ){
										if(parseInt(rtn_h) < 10){
											if(rtn_h != '00'){
												rtn_h= '0'+parseInt(rtn_h);
											}								
										}								
										jQuery(' #chiltern-atos-login-form  input[id^="edit-return"]').val(dpt_date.val() +' - '+rtn_h+':'+dpt_hour[1]);
									}
								}	
							}
							
							jQuery('#edit-returns select[id^=edit-hours]').find('option').remove().end();
							var lst_hour = parseInt( jQuery("#edit-departures select[id^=edit-hours] option").last().val() );
							var slt_hr = parseInt(jQuery("#edit-departures select[id^=edit-hours]").find(":selected").val() );
								for(var i= slt_hr; i <= lst_hour; i++){
									if(i <= 9) i = '0'+i;
									
									jQuery('#edit-returns select[id^="edit-hours"]').append('<option value="' + i + '">' + i + '</option>');
								}					
							jQuery('#edit-returns select[id^=edit-hours]  option').first().remove().end();
						}


            function departures_block_animate(parent, parents_child, cont_width) {           	
            	
              if (parent.css('display') !== 'block') {
	              if (parent.width() == 515) {
	                  jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'block'});
	                  parents_child.css({'display': 'none'});
	                  parent.css({'display': 'none', 'width': '10px', 'left': '-15px'});
	              }	//end of if statement	
	              var block_left = '-520px';
	              parent.css({'display': 'block'});
	              
	              
	              if (cont_width < 768 && cont_width >= 321) {
	              	
	            
	                  var el_size = '500px';
	                  var	el_mar_top = '15px';
	                  var el_mar_left = '17px';
	                  var	el_left = '-56px';
	                  var el_topp = '80px';                      
	                  parent.css({'top':el_topp, 'left': el_left, 'display': 'block', 'marginLeft': el_mar_left, 'width': el_size, 'height': '0px', 'margin-top': el_mar_top, 'background-color': '#fff', 'border-right': '3px solid #1FB7E1'});
	                  parent.animate({height: '290px'}, 500, function() {
	                  	parents_child.css({'display': 'block'});
	                  });	          
	              } else if (cont_width <= 320) {
	                  parent.animate({width: '515px', left: block_left}, 500, function() {
	                      parents_child.css({'display': 'block'});
	                  });	
	              } else {
	              	var block_height = '';
                	if (navigator.appVersion.indexOf("Chrome/") != -1) {
												block_height = '298px';
									}else if(navigator.appVersion.indexOf("MSIE 8.")!= -1){
										block_height = '282px'; 
									}else{
										
										if((navigator.platform.indexOf("iPad") != -1)){												
												block_height = '297px';								
											}else{
												block_height = '307px'; 
												
											} 
									}
									
									
	
									
	              	
	              	parent.css({'top':'50px','marginLeft':'2px','marginTop':'10px','height':block_height});
                  parent.animate({width: '515px', left: block_left}, 500, function() {
                      parents_child.css({'display': 'block'});
                  });
	              }
              }
            }
            
            
            

            function return_block_animate(parent, parents_child, cont_width) {           	
            
              if (parent.css('display') !== 'block') {
	              if (parent.width() == 515) {
	                  jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'block'});
	                  parents_child.css({'display': 'none'});
	                  parent.css({'display': 'none', 'width': '10px', 'left': '-15px'});
	              }	//end of if statement	
	              var block_left = '-520px';
	              parent.css({'display': 'block'});
	              if (cont_width < 768 && cont_width >= 321) {
	                  var el_size = '500px';
	                  var	el_mar_top = '15px';
	                  var el_mar_left = '17px';
	                  var	el_left = '-56px';
	                  var el_topp = '80px';                      
	                  parent.css({'top':el_topp, 'left': el_left, 'display': 'block', 'marginLeft': el_mar_left, 'width': el_size, 'height': '0px', 'margin-top': el_mar_top, 'background-color': '#fff', 'border-right': '3px solid #1FB7E1'});
	                  parent.animate({height: '270px'}, 500, function() {
	                  	parents_child.css({'display': 'block'});
	                  });	          
	              } else if (cont_width <= 320) {
	                  parent.animate({width: '515px', left: block_left}, 500, function() {
	                      parents_child.css({'display': 'block'});
	                  });	
	              } else {
	              	
	              	var block_height = '';
                	if (navigator.appVersion.indexOf("Chrome/") != -1) {
												block_height = '298px'; 
									}else if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
										block_height = '282px'; 
									}else{
									
										
										if((navigator.platform.indexOf("iPad") != -1)){												
												block_height = '297px';								
											}else{
												block_height = '307px'; 
											}
									}
	              	
	              	parent.css({'top':'50px','marginLeft':'2px','marginTop':'10px','height':block_height});
                  parent.animate({width: '515px', left: block_left}, 500, function() {
                      parents_child.css({'display': 'block'});
                  });
	              }
              }
            }



            function inline_animate(parent, parents_child, cont_width) {
            	
            	
                if (parent.css('display') != 'block') {
                    if (parent.width() == 445) {
                        jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'block'});
                        parents_child.css({'display': 'none'});
                        parent.css({'display': 'none', 'width': '10px', 'left': '-15px'});
                    }	//end of if statement		
                    var block_left = '-17px';
                    parent.css({'display': 'block'});
                    if (cont_width <= 480 && cont_width >= 321) {
                        jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'none'});
                        block_left = '-17px';
                        parent.css({'left': block_left, 'border-right': '3px solid #1fb7e1', 'width': '445px'});
                        parents_child.css({'display': 'block'});
                    } else if (cont_width <= 320) {
                        block_left = '-17px';
                        parent.css({'left': block_left, 'border-right': '3px solid #1fb7e1', 'width': '294px'});
                        parents_child.css({'display': 'block'});

                        jQuery('#edit-input-text-datepicker-popup-0').click(function() {
                            jQuery('#block-chiltern-atos-login-atos-quicktab-block-form .ui-datepicker-inline.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all').css({'visibility': 'visible', 'left': '30px', 'top': '-1px', 'z-index': '300'});
                            jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form .ui-datepicker-inline.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all').css({'visibility': 'visible', 'left': '30px', 'top': '8px', 'z-index': '300'});
                        });

                        jQuery('#edit-input-text--2-datepicker-popup-0').click(function() {
                            jQuery('#block-chiltern-atos-login-atos-quicktab-block-form .ui-datepicker-inline.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all').css({'visibility': 'visible', 'left': '30px', 'top': '-1px', 'z-index': '300'});
                            jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form .ui-datepicker-inline.ui-datepicker.ui-widget.ui-widget-content.ui-helper-clearfix.ui-corner-all').css({'visibility': 'visible', 'left': '30px', 'top': '8px', 'z-index': '300'});
                        });
                    } else {
                        parent.animate({width: '445px', left: block_left}, 500, function() {
                            parents_child.css({'display': 'block'});
                        });
                    }
                }
            }


            function edit_departures_button_inline(img, picker, alt, bk_grd_image, monthNames) {
                var departs = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu #edit-departures');
                var departs_child = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu #edit-departures .fieldset-wrapper');
                var departs_input = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form input[id^="edit-departure"]');
                
                var returns_input = '#block-chiltern-atos-login-atos-quicktab-inline-form #edit-return';

                jQuery(returns_input).val();
                
                //this is the departure button that the user presses
                var depart_text = jQuery('departs_input').val();
                if (jQuery(departs_input).length) {
                    var position = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form .form-item-departure').position();
 
                    //click the departure input button
                    jQuery(departs_input).click(function() {                 
                    	
                    	jQuery(returns_input).val('');
                    	
                        jQuery("#edit-input-text-datepicker-popup-0").focus(function() {
                            jQuery(this).unbind();
                        });

                        var el_size = "";
                        var el_mar_top = "";
                        var el_mar_left = "";
                        var el_left = "";
                        var el_topp = '';
                        if (jQuery(body).width() > 959) {
                            el_size = '500px';
                            el_mar_top = '15px';
                            el_mar_left = '17px';
                            el_left = '198px';
                            el_topp = '32px';
                            
                            //49px
                            
                            if(jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-form label.error').length >= 1){	
                							if(jQuery('#chiltern-atos-login-form').height()  == 58){
                								el_topp = '43px';
                							}else{
                								el_topp = '49px';
                							}
                						}		
                            
                        } else if (jQuery(body).width() <= 959) {
                            if (jQuery(body).width() >= 768) {

                                el_size = '500px';
                                el_mar_top = '15px';
                                el_mar_left = '17px';
                                el_left = '100px';
                                el_topp = '32px';
                                
                             if(jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-form label.error').length >= 1){	
                							if(jQuery('#chiltern-atos-login-form').height()  == 58){
                								el_topp = '43px';
                							}else{
                								el_topp = '49px';
                							}
                						}		
                            }else{
                            	 el_size = '500px';
                                el_mar_top = '15px';
                                el_mar_left = '17px';
                                el_left = '-56px';
                                el_topp = '80px';
                            }
                        }
                        
												var cont_width = jQuery(body).width();
                        //check if departure field set is visible, only open the returns field set if the departures is not
                        if (jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns').css('display') != 'block') {
                        	if(jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form  fieldset[id^="edit-passengers"]').css('display') != 'block'){

	                        	if(cont_width < 768 || jQuery('.page-home').length != 1){
	                            //open the departure button
	                            if (departs.width() <=12) {                                
		                          	//inline_animate(departs, departs_child, cont_width);
		                            //check the current value of the returns against the original value
		                            if (jQuery(departs_input).val() != depart_text) jQuery(departs_input).val(depart_text);
		                            
		                            jQuery('#chiltern-atos-login-form input[id^="edit-departure"]').val('');
		                           
		                            
		                              jQuery(departs_input).css({'background-image': "url(" + bk_grd_image + ")", 'background-repeat': 'no-repeat', 'background-position': '130px 3px'});
		                                departs.css({'top':el_topp, 'left': el_left, 'display': 'block', 'marginLeft': el_mar_left, 'width': el_size, 'height': '0px', 'margin-top': el_mar_top, 'background-color': '#fff', 'border-right': '3px solid #1FB7E1'});

		                                departs.animate({height: '260px'}, 500, function() {
		                                	departs_child.css({'display': 'block'});
		                                });
		                            }else{
		                            	departs_child.css({'display': 'none'});                        		
			                  					departs.animate({height: '0px'}, 500, function() {
	                                 	 departs.css({'display': 'none', 'height': '307', 'width': '10px', 'left':'-15px','top':'71px'});
	                              		});
	                              		
	                      			
														      var depart_date = jQuery('#chiltern-atos-login-form #edit-departures .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
														      var depart_hour = jQuery('#chiltern-atos-login-form #edit-departures .form-item.form-type-select.form-item-hours select[id^="edit-hours"]').val();
														      var depart_min = jQuery('#chiltern-atos-login-form #edit-departures .form-item.form-type-select.form-item-minutes select[id^="edit-minutes"]').val();
														      
														   
														      if (depart_min === '60') depart_min = '00';
														      
														      if(parseInt(depart_hour) < 10){
																		if(depart_hour != '00'){
																			depart_hour= '0'+parseInt(depart_hour);
																		}								
																	}
	      
	     														jQuery('#chiltern-atos-login-form input[id^="edit-departure"]').val(depart_date + " - " + depart_hour + ":" + depart_min);
	                              		
			                  					
		                            }                           
	                           	}else{
							                  if(departs.css('display') == 'block'){
							                  	departs_child.css({'display': 'none'});                        		
			                  					departs.css({'display': 'none', 'height': '307', 'width': '10px', 'left':'-15px','top':'71px'});
							                  }else{
						                 
						                  	departs.css({'top':'50px','marginLeft':'2px','marginTop':'10px','height':'307px','display':'block','width':'10px'});
						                  	departs.animate({width: '515px', left: '-520px'}, 500, function() {
						                     departs_child.css({'display': 'block'});
						                  	});
						                  }
	                          }
                            
                            
                            
                          //get the departure date form the departure patepicker
                          var depart_dates = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
                          var date = "";
                          var day = "";
                          var month = "";
                          var date = new Date();
                          
                

                        if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-input') != null && all_train_cookie_dpt == true){											 
											  		var alt_input = readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-input').split('-'); 										  												  		
											  		_chiltern_add_date_picker(img, picker, alt, date, monthNames, departs_input, alt_input[0]+','+alt_input[1]+','+alt_input[2]);											  												  			
											  	  jQuery(alt).val(alt_input[0]+'-'+alt_input[1]+'-'+alt_input[2]);
											  	  jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-hour')));
												  	jQuery('#chiltern-atos-login-form select[id^="edit-minutes"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-minute')));							  		
											  }else{

											  	_chiltern_add_date_picker(img, picker, alt, date, monthNames, departs_input);
											  }
	     									all_train_cookie_dpt = false;     
                          
                          check_depart_and_returns_time();
                          //Close the departure button
                          if (departs.height() == 290) {
                            var departs_date = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
                            var departs_hour = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-select.form-item-hours select[id^="edit-hours"]').val();
                            var departs_min = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-select.form-item-minutes select[id^="edit-minutes"]').val();
                            if (departs_min === '60')
                                rdeparts_min = '00';
                               
                                
                            jQuery(departs_input).val(departs_date + " - " + departs_hour + ":" + departs_min);
                            departs_child.css({'display': 'none'});
                            jQuery(departs_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat', 'background-position': '130px 4px'});
                            departs.animate({height: '0px'}, 500, function() {
                                departs.css({'display': 'none', 'marginLeft': '17px', 'width': '10px'});
                            });
                          }	//end of close departure if statement	
                        }		
                      }//end of css if statement
                	});//end of click function	
                }

            }
            

            function edit_return_button_inline(img, picker, alt, bk_grd_image, monthNames) {
            	
            		              
            	
            	/**
            	 * NEED TO BEE HERE
            	 */
                //this is the returns fieldset 
                var returns = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form  #quicktabs-dynamic_quicktabs_menu #edit-returns');
                var returns_child = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form  #quicktabs-dynamic_quicktabs_menu #edit-returns .fieldset-wrapper');
                var returns_input = '#block-chiltern-atos-login-atos-quicktab-inline-form #edit-return';

                var returns_text = jQuery(returns_input).val();
                
                
                
                 

	                if (jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #edit-returns').length) {
	
	                    var position = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form .form-item-departure').position();
	                    var left = position.left - 21;
	                    var top = position.top + 31;
	
	                    jQuery(returns_input).click(function() {
	                    	
	           
	                    	
	                    //	if (jQuery(returns_input).css('cursor') == 'pointer') {

	                        jQuery("#edit-input-text--2-datepicker-popup-0").focus(function() {
	                            jQuery(this).unbind();
	                        });
	                        var el_size = "";
	                        var el_mar_top = "";
	                        var el_mar_left = "";
	                        var el_left = "";
	                        var el_topp = '';
	                        
	                        if (jQuery(body).width() > 959) {
	                            el_size = '500px';
	                            el_mar_top = '15px';
	                            el_mar_left = '17px';
	                            el_left = '198px';
	                            el_topp = '32px';
			                      	if(jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-form label.error').length >= 1){	
	                							if(jQuery('#chiltern-atos-login-form').height()  == 58){
	                								el_topp = '43px';
	                							}else{
	                								el_topp = '49px';
	                							}
	                						}		
	                        } else if (jQuery(body).width() <= 959) {
			                      if (jQuery(body).width() >= 768) {	
			                          el_size = '500px';
			                          el_mar_top = '15px';
			                          el_mar_left = '17px';
			                          el_left = '100px';
			                      		el_topp = '32px';	
			                      		
			                      	if(jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-form label.error').length >= 1){	
	                							if(jQuery('#chiltern-atos-login-form').height()  == 58){
	                								el_topp = '43px';
	                							}else{
	                								el_topp = '49px';
	                							}
	                						}
	                						             		
			                      }else{
			                      	el_size = '500px';
			                          el_mar_top = '15px';
			                          el_mar_left = '17px';
			                          el_left = '-56px';
			                      		el_topp = '80px';
			                      }
	                        }
	                        
	                        
	                        //check if departure field set is visible, only open the returns field set if the departures is not
	                        if (jQuery('#edit-departures').css('display') != 'block') {
	                        	if(jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form  fieldset[id^="edit-passengers"]').css('display') != 'block'){
	                        	
	                            //open the departure button
	
	 														if(jQuery(body).width() < 768 || jQuery('.page-home').length != 1 ){
		                            if (returns.width() <=12 ) {
		                                //inline_animate(returns, returns_child, cont_width);
		                                //check the current value of the returns against the original value
		                                if (jQuery(returns_input).val() != returns_text)
		                                    jQuery(returns_input).val(returns_text);
		
		                                jQuery(returns_input).css({'background-image': "url(" + bk_grd_image + ")",
		                                    'background-repeat': 'no-repeat', 'background-position': '130px 3px'});
		
		                                returns.css({'top': el_topp, 'left': el_left, 'display': 'block', 'marginLeft': el_mar_left, 'width': el_size, 'height': '0px', 'margin-top': el_mar_top, 'background-color': '#fff', 'border-right': '3px solid #1FB7E1'});
		                                returns.animate({height: '270px'}, 500, function() {
		                                    //jQuery('#edit-input-text--2-datepicker-popup-0').css({'width': input_width});
		                                    returns_child.css({'display': 'block'});
		                                });
		                            }
	                           }else{
						                  if(returns.css('display') == 'block'){
						                  	returns_child.css({'display': 'none'});                        		
		                  					returns.css({'display': 'none', 'height': '307', 'width': '10px', 'left':'-15px','top':'74px'});
						                  }else{
						                  	returns.css({'top':'50px','marginLeft':'2px','marginTop':'10px','height':'307px','display':'block'});
						                  	returns.animate({width: '515px', left: '-520px'}, 500, function() {
						                      returns_child.css({'display': 'block'});
						                  	});
						                  }
	
	                          }
	
	                            //get the departure date form the departure patepicker
	                            var depart_dates = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
	                            var date = "";
	                            var day = "";
	                            var month = "";
															var tag = '#edit-input-text-datepicker-popup-0';                               

	                            date = check_date_picker(tag, monthNames);
	                            //create the new date picker
	                           // _chiltern_add_date_picker(img, picker, alt, date, monthNames);
	                            //Close the departure button	                            
	                            	if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-input') != null && all_train_cookie_rtn == true){											  	
															  		var alt_input = readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-input').split('-'); 										  		
															  		_chiltern_add_date_picker(img, picker, alt, date, monthNames, returns_input, alt_input[0]+','+alt_input[1]+','+alt_input[2]);											  												  			
															  	  jQuery(alt).val(alt_input[0]+'-'+alt_input[1]+'-'+alt_input[2]);			
																	jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-hours"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-hour')));
												  				jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-minutes"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-minute')));						  		
															  }else{														 
															  	_chiltern_add_date_picker(img, picker, alt, date, monthNames, returns_input);
															  }
	                            
	                            
	                            all_train_cookie_rtn == false;
	                            
	                            
	
	      

	         
	                           if(jQuery(body).width() < 768 || jQuery('.page-home') != 1){  
	                            	
	                            var returns_date = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
	                            var returns_hour = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-select.form-item-hours select[id^="edit-hours"]').val();
	                            var returns_min = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-select.form-item-minutes select[id^="edit-minutes"]').val();
	                            	                       	
	                            	if (returns.height() === 270) {                           		
	                            		if (returns_min === '60')  returns_min = '00';	                            		
	                            		if(parseInt(returns_hour) < 10){
		       													if(returns_hour != '00'){
		       														returns_hour = '0'+parseInt(returns_hour);
		       													}                              	
		       												}
	                                jQuery(returns_input).val(returns_date + " - " + returns_hour + ":" + returns_min);
	                             		if(jQuery(body).width() <= 768  || jQuery('.page-home') != 1){
	                             	 		returns_child.css({'display': 'none'});
	                              		jQuery(returns_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat', 'background-position': '130px 4px'});
	                              		returns.animate({height: '0px'}, 500, function() {
	                                 	 returns.css({'display': 'none', 'marginLeft': '17px', 'width': '10px'});
	                              		});                            		
	                          			}                           	                           	
	                            	}
	                            	
	                          	 }
	                          	 
	                          	 
	                          	 
	                           }
	                            	
	                        }
	                     // }
	                    });//end of click function
	
	                
	             }
            }
            
            
            

            
            
            /**
             * 
             * THIS IS THE ALL TRAINS RETURN BUTTON  - VERTICAL
             * 
             * 
             * 
             */
            function edit_return_button_block(img, picker, alt, bk_grd_image, monthNames) {
                //this is the returns fieldset on the all trains block 
                var returns = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form  #chiltern-atos-login-form #edit-returns');
                var returns_child = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form  #chiltern-atos-login-form #edit-returns .fieldset-wrapper');
                var returns_input = '#block-chiltern-atos-login-atos-quicktab-block-form #chiltern-atos-login-form  input[id^="edit-return"]';
                var returns_text = jQuery(returns_input).val();
                jQuery(returns_input).click(function() {
                	
                	//if (jQuery(returns_input).css('cursor') == 'pointer') {
      
                    if (jQuery(returns_input).css('background-image') != 'none') {
                        var cont_width = jQuery(body).width();
                        //check if departure field set is visible, only open the returns field set if the departures is not
                        if (jQuery('#edit-departures').css('display') != 'block') {
                            if (jQuery('#block-chiltern-atos-login-atos-quicktab-block-form  #edit-passengers').css('display') != 'block') {
		
                                //open the departure button
                                if (returns.width() <= 12) {
                                    //check the current value of the returns against the original value
                                    if (jQuery(returns_input).val() != returns_text)
                                        jQuery(returns_input).val(returns_text);
                                        returns.css({'left':'-15px'});
                                    jQuery(returns_input).css({'background-image': "url(" + bk_grd_image + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 3px'});
                                    return_block_animate(returns, returns_child, cont_width);
                                }
                                //get the departure date form the departure patepicker
                                var depart_dates = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
                                var date = "";
                                var day = "";
                                var month = "";
                                var tag = '#edit-input-text-datepicker-popup-0';                               
                                date = check_date_picker(tag, monthNames);
                                


			                          if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-input') != null && all_train_cookie_rtn == true){											  	
															  		var alt_input =readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-input').split('-'); 										  		
															  		_chiltern_add_date_picker(img, picker, alt, date, monthNames, returns_input, alt_input[0]+','+alt_input[1]+','+alt_input[2]);											  												  			
															  	  jQuery(alt).val(alt_input[0]+'-'+alt_input[1]+'-'+alt_input[2]);
															  	  jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-hours"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-hour')));
												  					jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-minutes"]').val(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-minute')));								  		
															  }else{					
															  															  	
															  	if( isNaN(date.getTime() ) )  date = 	new Date();
															  								 
															  	_chiltern_add_date_picker(img, picker, alt, date, monthNames, returns_input);
															  }
					     									
                                all_train_cookie_rtn == false;
                                
                                //Close the departure button
                                if (returns.width() == 515) {
                                    var returns_date = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
                                    var returns_hour = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-select.form-item-hours select[id^="edit-hours"]').val();
                                    var returns_min = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-select.form-item-minutes select[id^="edit-minutes"]').val();
                                    if (returns_min === '60')
                                        returns_min = '00';
                                        if(parseInt(returns_hour) <10){
																	       	if(returns_hour != '00'){
	       																		returns_hour = '0'+parseInt(returns_hour);
	       																	}	                              	
																	       }
                                    jQuery(returns_input).val(returns_date + " - " + returns_hour + ":" + returns_min);
                                    jQuery(returns_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 4px'});
                                    //if(cont_width > '481'){
                                    returns_child.css({'display': 'none'});
                                    returns.css({'display': 'none', 'width': '10px', 'left': '-15px'});
                                    //}	
                                }	//end of close departure if statement	
                                
                                if(jQuery(body).width() < 768){         
                                	
					                    		if(returns.width() == 500){                   			
					                    			if(returns.height() == 270){
	                                    var returns_date = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
	                                    var returns_hour = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-select.form-item-hours select[id^="edit-hours"]').val();
	                                    var returns_min = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-select.form-item-minutes select[id^="edit-minutes"]').val();
	                                    if (returns_min === '60') returns_min = '00';
	                                    if(parseInt(returns_hour) <10){
																       	if(returns_hour != '00'){
	       																	returns_hour = '0'+parseInt(returns_hour);
	       																}                              	
																       }
	                                    jQuery(returns_input).val(returns_date + " - " + returns_hour + ":" + returns_min);
	                                    jQuery(returns_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 4px'});
	                                    //if(cont_width > '481'){
	                                    returns_child.css({'display': 'none'});
	                                    returns.css({'display': 'none', 'width': '10px', 'left': '-15px'});                   				
					                    			}
					                    		}		
					                    	}
                                
                                
                                
                            }//end of passengers if statement
                        }//end of css if statement			
                    }//end of if backgrund-image != none
                  // }
                });//end of click function
            }






	/**
	 * 
	 *  THIS ADDS THE DATE PICKER
	 * 
	 * Called in:
	 * edit_departures_button_mainline_inline
	 * edit_departures_button_block
	 * edit_departures_button_inline
	 * 
	 * edit_return_button_inline
	 * edit_return_button_block
	 * edit_mainline_out_block
	 * 
	 */
	
	
	function check_return_and_departue_times(picker){
		
		var dpt_date = "";
		var rtn_date = "";
		
		if(picker == "#block-chiltern-atos-login-atos-quicktab-block-form #chiltern-atos-login-form #edit-returns .form-item.form-type-textfield.form-item-input-text-date"){
			dpt_date = jQuery('#edit-departures .form-item.form-type-textfield.form-item-input-text-date').val();
			rtn_date = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form #chiltern-atos-login-form #edit-returns .form-item.form-type-textfield.form-item-input-text-date').val();
		}	
		if( rtn_date != "" ){
			if( rtn_date < dpt_date ){
				return {dpt:dpt_date, rtn: rtn_date };
			}else{
				return "";
			}
		}else{
			return "";
		}
	}
	
	
	function _chiltern_add_date_picker(img, picker, alt, date, monthNames, parent_selector, setDate) { 

		jQuery(picker).datepicker({
	    showOn: "button",
	    buttonImage: img,
	    altField:alt,
	    buttonImageOnly: true,
	    dateFormat: 'd-M-yy',
	    maxDate: '+3M',
	    onSelect: function() {
	    	
	    	jQuery(parent_selector).val(jQuery(alt).val());
	    	
	    	check_am_pm(alt,monthNames);
	      var date_input_txt = jQuery(alt).val();   
	      change_of_departue_drop_down(monthNames, date_input_txt, alt);	                    
	      if (jQuery(body).width() < 768) {
	      	jQuery('.ui-datepicker-inline').css({'display':'none'});  
	      	jQuery('.form-item.form-type-select.form-item-going-to-mainline').css({'display':'inline-block'});
	      } else {
	      	jQuery('.ui-datepicker-inline').css({'visibility':'visible'});
	      }
	      
	      
	      if( jQuery.trim(alt) == '#chiltern-atos-login-form .hasDatepicker input'){	      	
	      	all_train_cookie_dpt = false;	
	      } 
	      
	      if( jQuery.trim(alt) == '#chiltern-atos-login-form #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input'){	      	
	      	all_train_cookie_rtn = false;	
	      } 
	      
	      
	      if( jQuery.trim(alt) == '#edit-outbound-text-datepicker-popup-0'){	      	
	      	mainline_cookie_dpt = false;
	      	mainline_cookie_rtn_time = false;
	      }	      
	    }                    
	  });

	  jQuery(picker).datepicker('option', 'minDate', new Date(date));
	  	  
	  if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-input') != null && all_train_cookie_dpt){
	  	if( jQuery.trim(alt) ==  '#chiltern-atos-login-form .hasDatepicker input'){
	  		var fst_date = setDate.split(',');
	  		jQuery (picker).datepicker("setDate", new Date(fst_date[2],monthNames.indexOf(fst_date[1]),fst_date[0]) );
	  	}
	  }
	  	  
	  if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-input') != null && all_train_cookie_rtn){ 	
	  	if( jQuery.trim(alt) == '#chiltern-atos-login-form #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input'){
	  		var fst_date = setDate.split(',');
	  		jQuery (picker).datepicker("setDate", new Date(fst_date[2],monthNames.indexOf(fst_date[1]),fst_date[0]) );
	  	}
	  	if(jQuery.trim(alt) == '#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input'){
	  		var fst_date = setDate.split(',');
	  		jQuery (picker).datepicker("setDate", new Date(fst_date[2],monthNames.indexOf(fst_date[1]),fst_date[0]) );	
	  	}
	  }
	  
	   if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-date') != null && mainline_cookie_dpt){
   		if( jQuery.trim(alt) == '#edit-outbound-text-datepicker-popup-0'){	      	
      	var fst_date = setDate.split(',');
	  	jQuery (picker).datepicker("setDate", new Date(fst_date[2],monthNames.indexOf(fst_date[1]),fst_date[0]) ); 
      }  			   		  	
	   }
	  

	  if(jQuery(body).width() < 768){
	  	jQuery('#edit-outbound-text .ui-datepicker-inline').css({'display':'none'});
	  }  	                                         
	}





	/**
	 * THIS CHECKS THE DATE PICKER
	 * Called in:
	 * edit_return_button_inline
	 * edit_return_button_block
	 */
	function check_date_picker(tag, monthNames) {

	  var depart_dates = jQuery.trim(jQuery(tag).val());
	  var date = "";
	  var day = "";
	  var month = "";
	  //check if the departure date has been defined
	  if (depart_dates != undefined) {
	  	//if the date has been defined , get the components		
	    var new_depart_date = depart_dates.split("-", 3);
	    //check if the day is less than ten    
	    if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
	    	day = parseInt(new_depart_date[0]) + 1;
				day = (parseInt(day) < 10) ? "0" +day: day;
	    	
	    }else{
	    	day = (new_depart_date[0] < 10) ? "0" + new_depart_date[0] : new_depart_date[0];
	    }
	    
	    
	    //check if the months position in the array is less than ten
	    month = ((monthNames.indexOf(new_depart_date[1]) + 1) < 10) ? "0" + (monthNames.indexOf(new_depart_date[1]) + 1) : (monthNames.indexOf(new_depart_date[1]) + 1);
	    //create the new date to add to the returns date picker
	    
	    if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
	    	date = new Date(new_depart_date[2] + "/" + month + "/" + day + ' 00:00:00'.split(' ').join('T'));
	    }else{
	    	date = new Date(new_depart_date[2] + "-" + month + "-" + day + ' 00:00:00'.split(' ').join('T'));
	    }
	  
	  }else{
	  	date = new Date();
	  }
	  return date;
	}




/**
 * CALLED IN JQUERY ON READY
 * 
 */
	function departue_drop_down(monthNames) {
		
		
	  var month = "";
	  var day = "";
	  var input_date = "";
	  var date_input = jQuery('input[id^="edit-input-text-datepicker-popup"]');	
	  var departs_picker_block = "#edit-departures .form-item.form-type-textfield.form-item-input-text-date";	
	  jQuery('#edit-arrival').change(function() {
	    //this is the input field
	    var date_input_txt = date_input.val();
	    if(jQuery("#edit-arrival option:selected").text() == 'ARRIVE BEFORE') {
	    	

	    	change_of_departue_drop_down(monthNames, date_input_txt);
	    }	
	    if(jQuery("#edit-arrival option:selected").text() == 'LEAVE AFTER') {

	    	change_of_departue_drop_down(monthNames, date_input_txt);
	    }
	  });
	}






/**
 * CHANGE OF DEPARTURE DROPDOWN
 * CALLED IN:
 * change_of_departue_drop_down
 * departue_drop_down   --  CALLED TWICE
 * _chiltern_add_date_picker
 * today_and_tomorrow_dates  --  CALLED TWICE
 * 
 * 
 * 
 */


var depart_pressed = false;


	function change_of_departue_drop_down(monthNames, depart_date_input, alt) {
		
	  var date = new Date();
	  var current_hour = date.getHours();
	  var current_min  = date.getMinutes();	
	  var new_depart_date = depart_date_input.split("-", 3);
	  var depart_hour = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures .form-item.form-type-select.form-item-hours select[id^="edit-hours"]').val();	  
	  var dept_input = jQuery('#chiltern-atos-login-form #edit-departures #edit-hours option:selected').val();
	 	var vert_edit = '#chiltern-atos-login-form #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input';
	 	var horz_edit = '#quicktabs-dynamic_quicktabs_menu #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input';
	 	var today_text	= 'today_txt';
	 	var alt = jQuery.trim(alt);
		var split_inpt = jQuery('#chiltern-atos-login-form #edit-departure').val().split(':');	
	  
	  
	  if(new_depart_date[0][0] != 0){
	  	day = (new_depart_date[0] < 10) ? "0" + new_depart_date[0] : new_depart_date[0];
	  }else{
	  	day = new_depart_date[0];
	  }
	  month = ((monthNames.indexOf(new_depart_date[1]) + 1) < 10) ? "0" + (monthNames.indexOf(new_depart_date[1]) + 1) : monthNames.indexOf(new_depart_date[1]) + 1;
  
 		date.setHours(01); 	  
    if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
   		input_date = new Date(new_depart_date[2] + "/" + month+ "/" + day+ ' 00:00:00'.split(' ').join('T'));
   	}else{
   		input_date = new Date(new_depart_date[2] + "-" + month + "-" + day + ' 00:00:00'.split(' ').join('T'));
   	}
   	
	 	if (input_date > date) {// not todays date but in the future
	  	if(alt == vert_edit ||  alt == horz_edit ||  alt == today_text){
	  		
	  		var dept_input = jQuery('#chiltern-atos-login-form #edit-departures #edit-hours').find(":selected").text();
		    if(jQuery.trim(jQuery('#chiltern-atos-login-form #edit-returns input[id^="edit-input-text--2-datepicker-popup"]').val()) == jQuery.trim(jQuery('#chiltern-atos-login-form #edit-departures input[id^="edit-input-text-datepicker-popup"]').val())){
		    	
		    	jQuery('#edit-returns select[id^="edit-hours"]').find('option').remove().end();
			    for (var i = (parseInt(dept_input)+1); i < 24; i++) {
			    	if (i < 10)  i = '0' + i;
			      jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-hours"]').append('<option value="' + i + '">' + i + '</option>');					
			    }			      
		      jQuery('#chiltern-atos-login-form select[id^="edit-leaving-time"]').val("0");
					jQuery('#chiltern-atos-login-form select[id^="edit-leaving-time"]').children("option").first().show();
					jQuery('select[id^="edit-leaving-time"]').children("option").first().show();					
					jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-minutes"]').val(jQuery.trim(split_inpt[1]));  	
		    }else{

		    	jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-hours"]').find('option').remove().end();
			    for (var i = 0; i < 24; i++) {
			    	if (i < 10)  i = '0' + i;
			      jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-hours"]').append('<option value="' + i + '">' + i + '</option>');
			    }
			    
			    jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-hours"]').val("07");
			        			      
		      jQuery('#chiltern-atos-login-form select[id^="edit-leaving-time"]').val("0");
					jQuery('#chiltern-atos-login-form select[id^="edit-leaving-time"]').children("option").first().show();
					jQuery('#chiltern-atos-login-form select[id^="edit-leaving-time"]').children("option").first().show();						
					jQuery('#chiltern-atos-login-form select[id^="edit-minutes"]').val('30'); 
		    }		
	  	}else{

	  		jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').find('option').remove().end();	  		
		  	for (var i = 0; i < 24; i++) {
		    	if (i < 10)  i = '0' + i;
		      jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').append('<option value="' + i + '">' + i + '</option>');	
		      	      
		    }
		    
		    jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').val("07");
		    jQuery('#chiltern-atos-login-form select[id^="edit-minutes"]').val('30');
		    
	    	jQuery('#chiltern-atos-login-form select[id^="edit-leaving-time"]').val("0");
				jQuery('#chiltern-atos-login-form select[id^="edit-leaving-time"]').children("option").first().show();
				jQuery('#chiltern-atos-login-form select[id^="edit-leaving-time"]').children("option").first().show();	  		
	  	}	    
	  }else{// todays date

	  	jQuery('#chiltern-atos-login-form select[id^="edit-leaving-time"]').val("1");
				jQuery('#chiltern-atos-login-form select[id^="edit-leaving-time"]').children("option").first().hide();
				jQuery('#chiltern-atos-login-form select[id^="edit-leaving-time"]').children("option").first().hide();

	  	if(depart_pressed == true){
	  		
	  		if(current_min >= 30){	  			
		    	if(alt == vert_edit ||  alt == horz_edit ||  alt == today_text){
		    
		   			jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-hours"]').find('option').remove().end();
		    		for(var i = current_hour + 2; i < 24; i++) {	  				
				    	if (i < 10)  i = '0' + i;
				      jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-hours"]').append('<option value="' + i + '">' + i + '</option>');
				    }				
						jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-minutes"]').val(jQuery.trim(split_inpt[1])); 
		    	}else{
		    		jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').find('option').remove().end();
		    		for(var i = current_hour + 1; i < 24; i++) {	  				
				    	if (i < 10)  i = '0' + i;
				      jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').append('<option value="' + i + '">' + i + '</option>');
				    }
		    	}
		    	 			
	  		}else{	
	  			if(alt == vert_edit ||  alt == horz_edit ||  alt == today_text){
	  			
	  				jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-hours"]').find('option').remove().end();
	  				for(var i = current_hour + 1; i < 24; i++) {
			    		if (i < 10)  i = '0' + i;
			      	jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-hours"]').append('<option value="' + i + '">' + i + '</option>');
			    	}				
					jQuery('#chiltern-atos-login-form #edit-returns select[id^="edit-minutes"]').val(jQuery.trim(split_inpt[1])); 
	  			}else{
	  				jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').find('option').remove().end();
	  				for(var i = current_hour; i < 24; i++) {
			    		if (i < 10)  i = '0' + i;
			      	jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').append('<option value="' + i + '">' + i + '</option>');
			    	}
	  			}	
	  		}	  		
	  	}else{

	  		if(alt == today_text){
		  		jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').find('option').remove().end();
			  	for(var i = current_hour; i < 24; i++) {
			    	if (i < 10)  i = '0' + i;
			      jQuery('select[id^="edit-hours"]').append('<option value="' + i + '">' + i + '</option>');
			    }
	  		}else{
	  			jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').find('option').remove().end();
			  	for(var i = current_hour; i < 24; i++) {
			    	if (i < 10)  i = '0' + i;
			      jQuery('select[id^="edit-hours"]').append('<option value="' + i + '">' + i + '</option>');
			    }
	  		}

	  	}	  	
	  	jQuery('#chiltern-atos-login-form select[id^="dit-minutes--2"]').find('option').remove().end();	  	
	  	for(var i = depart_hour + 2; i < 24; i++) {
		  	if (i < 10)  i = '0' + i;
		      jQuery('#chiltern-atos-login-form select[id^="dit-minutes--2"]').append('<option value="' + i + '">' + i + '</option>');
		    }

	  }
 
	  date = null;
	  input_date = null;
	  
	  depart_pressed = true;
	}








/**
 * CALLED IN JQUERY ON READY
 * 
 */
	function close_blocks(img, months) {
		
		var returns_input = '#chiltern-atos-login-form input[id^="edit-return"]';		
		jQuery('input[id^="edit-open-return"]').change(function() {
        if (jQuery(this).prop('checked')) {
            jQuery(returns_input).val('OPEN RETURN');
        }
        else {
            jQuery(returns_input).val('');
        }
      var returns = jQuery('#quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form #edit-returns');
	    var returns_child = jQuery('#chiltern-atos-login-form #edit-returns .fieldset-wrapper');  
      returns_child.css({'display': 'none'});
	    returns.css({'display': 'none', 'width': '10px', 'left': '-15px'});
	    jQuery(returns_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat'});
        
    });
		
		
		
	  var bk_grd_image = 'sites/all/themes/custom/chilterntheme/images/grey-close-button.png';
	  /**
	   * All trains block departure
	   */
	  jQuery('#chiltern-atos-login-form input[id^="edit-depart-ok"]').click(function() {             	
	  	//edit_mainline_out_block
	      var departs = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-departures');
	      var departs_child = jQuery('#chiltern-atos-login-form #edit-departures .fieldset-wrapper');
	      var departs_input = '#chiltern-atos-login-form input[id^="edit-departure"]';
	      var depart_date = jQuery('#chiltern-atos-login-form #edit-departures .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
	      var depart_hour = jQuery('#chiltern-atos-login-form #edit-departures .form-item.form-type-select.form-item-hours select[id^="edit-hours"]').val();
	      var depart_min = jQuery('#chiltern-atos-login-form #edit-departures .form-item.form-type-select.form-item-minutes select[id^="edit-minutes"]').val();
	      
	   
	      if (depart_min === '60') depart_min = '00';
	      
	      if(parseInt(depart_hour) < 10){
					if(depart_hour != '00'){
						depart_hour= '0'+parseInt(depart_hour);
					}								
				}
	      

	      jQuery(departs_input).val(depart_date + " - " + depart_hour + ":" + depart_min);
	      
	      check_depart_and_returns_time();
	      
	      jQuery(departs_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat'});
	      departs_child.css({'display': 'none'});
	      departs.css({'display': 'none', 'width': '10px', 'left': '-15px'});
	      jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'block'});
	  });              
	  /**
	   * All trains block return
	   */
	  jQuery('#chiltern-atos-login-form input[id^="edit-rtn-ok"]').click(function() {
	    //this is the returns fieldset 
	    var returns = jQuery('#quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form #edit-returns');
	    var returns_child = jQuery('#chiltern-atos-login-form #edit-returns .fieldset-wrapper');
	    var returns_input = '#chiltern-atos-login-form input[id^="edit-return"]';
	    var returns_date = jQuery('#chiltern-atos-login-form #edit-returns .form-item.form-type-textfield.form-item-input-text-date.hasDatepicker input').val();
	    var returns_hour = jQuery('#chiltern-atos-login-form #edit-returns .form-item.form-type-select.form-item-hours select[id^="edit-hours"]').val();
	    var returns_min = jQuery('#chiltern-atos-login-form #edit-returns .form-item.form-type-select.form-item-minutes select[id^="edit-minutes"]').val();
	    if (returns_min === '60') returns_min = '00';
	    returns_child.css({'display': 'none'});	
	    jQuery(returns_input).val(returns_date + " - " + returns_hour + ":" + returns_min);
	    jQuery(returns_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat'});
	    returns_child.css({'display': 'none'});
	    returns.css({'display': 'none', 'width': '10px', 'left': '-15px'});
	    jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'block'});
	    jQuery('input[id^="edit-open-return"]').prop('checked', false);
	  });
	  /**
	   * This is the mainline block departs
	   */
	  jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-depart-ok').click(function() {
	    //this is the returns fieldset 
	    var departs = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outward-journeys");
	    var departs_child = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outward-journeys .fieldset-wrapper");
	    var departs_input = "form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outward-journey";
	    var departs_date = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-outbound-text-datepicker-popup-0").val();
	    var calender_img = "/sites/all/themes/custom/chilterntheme/images/calendar.png";
	    if (jQuery(departs).css('display') === 'block') {
	      departs_child.css({'display': 'none'});
	      departs.css({'display': 'none', 'width': '10px', 'left': '-32px'});
	      jQuery(departs_input).css({'background-image': "url(" + calender_img + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 3px'});
	      jQuery(departs_input).val(departs_date + " - " + jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-leaving-time option:selected").html().replace("Leaving", "")); 
	      var rtn_journ = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journey");  
	      rtn_journ.val('');
	      
	      if(jQuery(body).width() < 768){
	      	jQuery('.page-home .region.region-content section').css({'padding-top': '395px'}); 
	      }
	            
	    }
	  });
	  /**
	 * This is the mainline block returns
	 */
		jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-rtn-ok").click(function() {
			//this is the returns fieldset 
		  var returns = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journeys");
		  var returns_child = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journeys .fieldset-wrapper");
		  var returns_input = "form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journey";
		  //	var returns_date = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form #chiltern-atos-login-mainline-quicktab-form #edit-outbound-text-datepicker-popup-0').val();		
		  var calender_img = "/sites/all/themes/custom/chilterntheme/images/calendar.png";
		  if(jQuery(returns).css('display') === 'block') {
		    returns_child.css({'display': 'none'});
		    returns.css({'display': 'none', 'width': '10px', 'left': '-32px'});
		    jQuery(returns_input).css({'background-image': "url(" + calender_img + ")", 'background-repeat': 'no-repeat', 'background-position': '160px 3px'});
		    var rtn_journ = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journey");
		    var change_day = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-day");
		    var change_time = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-time");
		    rtn_journ.val('');
		    
  			var change_time = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-time");											      	   	
				rtn_journ.val(jQuery("#edit-return-day").find(":selected").text() + " - " + change_time.children("option").filter(":selected").text().replace("Returning", ""));
				if(jQuery(body).width() < 768){
					jQuery('.page-home .region.region-content section').css({'padding-top': '395px'});
				}
		  }
		});
		
	  jQuery('input[id^="edit-passenger-ok"]').click(function() {                	
	    jQuery('#edit-passenger').val(parseInt(jQuery('#edit-children').val()) + parseInt(jQuery('#edit-adults').val()));
	    var passengers_field = '#block-chiltern-atos-login-atos-quicktab-block-form #chiltern-atos-login-form #edit-passengers';
	    var passengers_child = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form #chiltern-atos-login-form #edit-passengers .fieldset-wrapper');
	    var passengers = jQuery(passengers_field);                    
	    var passengers_field_inline = '#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-form #edit-passengers';
	    var passengers_child_inline = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-form #edit-passengers .fieldset-wrapper');
	    var passengers_inline = jQuery(passengers_field_inline);
	    passengers_child.css({'display': 'none'});
	    passengers.css({'display': 'none','width':'10px','left':'-15px'});                    
	    passengers_child_inline.css({'display': 'none'});
	    passengers_inline.css({'display': 'none','width':'190px','left':'-15px', 'height':'10px'});     
	    jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'block'});
	  });
	  
	  jQuery('input[id^="edit-mainline-passenger-ok"]').click(function() {
	    var mainline_ok_btn = "form[id^='chiltern-atos-login-mainline-quicktab-form'] input[id^='edit-passenger']";
	    var mainline_children_num = "form[id^='chiltern-atos-login-mainline-quicktab-form'] select[id^='edit-children']";
	    var mainline_adult_num = "form[id^='chiltern-atos-login-mainline-quicktab-form'] select[id^='edit-adults']";
	    jQuery(mainline_ok_btn).val(parseInt(jQuery(mainline_children_num).val()) + parseInt(jQuery(mainline_adult_num).val()));
	    var passengers_field = "form[id^='chiltern-atos-login-mainline-quicktab-form'] fieldset[id^='edit-passengers']";
	    var passengers_child = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] fieldset[id^='edit-passengers'] .fieldset-wrapper");
	    var passengers = jQuery(passengers_field);
	    passengers_child.css({'display': 'none'});
	    passengers.css({'display': 'none', 'left': '-32px','width':'10px' });
	    jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'block'});
	    if(jQuery(body).width() < 768){
	    	jQuery('.page-home .region.region-content section').css({'padding-top': '395px'});
	    }
	  });
	  
	  
	  
	  jQuery('input[id^="edit-clear-ok"]').click(function() {	  	
	    //this is the returns fieldset 
	    var returns = jQuery('#quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form #edit-returns');
	    var returns_child = jQuery('#chiltern-atos-login-form #edit-returns .fieldset-wrapper');
	    var returns_input = '#chiltern-atos-login-form input[id^="edit-return"]';
	    jQuery(returns_input).css({'background-image': "url(" + img + ")", 'background-repeat': 'no-repeat'});
	    returns_child.css({'display': 'none'});
	    returns.css({'display': 'none', 'width': '10px', 'left': '-15px'});
	    jQuery('#chiltern-atos-login-form input[id^=edit-submit]').css({'display': 'block'});
		  jQuery('input[id^="edit-open-return"]').prop('checked', false);
	  });
	  
	  
	  
	  
	  
	  
	}






  function mainline_select_dropdown_change(monthNames) {           	
    var depart_change_day = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-leaving-day');
    var depart_change_time = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-leaving-time');
    var depart_rtn_journ = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-leaving-journey');

    var return_change_day = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-return-day');
    var return_change_time = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-return-time');
    var return_rtn_journ = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-return-journey');
    

     
     var date  = new Date();
     var current_time = date.getHours();
     if(date.getHours()  >= 12 && date.getHours() <= 23){
    	 depart_change_time.find('option').remove().end();
       depart_change_time.append('<option value="1">Leaving PM</option>');
    	 depart_change_time.val("1");   	
  		 return_change_time.find('option').remove().end();
       return_change_time.append('<option value="1">Leaving PM</option>');
  		 return_change_time.val("1");
    }

    
    depart_change_time.change(function() {
    	
    	jQuery('#chiltern-atos-login-mainline-quicktab-form #edit-return-journeys select[id^="edit-return-day"]').val('0');
    	
    	if(jQuery(this).children("option").filter(":selected").text() == 'Leaving PM'){    		
				return_change_time.find('option').remove().end();
        return_change_time.append('<option value="1">Leaving PM</option>');
    		return_change_time.val("1");

    		              	
    	}else{
				return_change_time.find('option').remove().end();
        return_change_time.append('<option value="0">Leaving AM</option>');
        return_change_time.append('<option value="1">Leaving PM</option>');
  			return_change_time.val("0");  
    	}
			mainline_cookie_rtn_time = false;
    });
    
    
    return_change_time.change(function() {
			mainline_cookie_rtn_time = false;
    });
    


  }
            
 
 
 
     
            
  function detach_and_append_booking_widgets(){

						jQuery('.mainline-details-header').mouseenter( 
							function(){
								if(jQuery(body).width() >= 768){
									jQuery('.page-home .flex-control-nav.flex-control-paging').css({'display':'none'});
								}
							}
							 ).mouseleave( function(){
							 	if(jQuery(body).width() >= 768){
							 		jQuery('.page-home .flex-control-nav.flex-control-paging').css({'display':'block'});
							 	}
							});
     				
     				
     				
     				
     				
     				if(jQuery('.page-home').length === 1){

							jQuery('select[id^="edit-going-to-mainline"] option').first().remove();
							
							jQuery('select[id^="edit-going-to-mainline"] option').first().attr("selected","selected");
									
							jQuery('select[id^="edit-leaving-from"] option').first().remove();
							
							jQuery('select[id^="edit-leaving-from"] option').first().attr("selected","selected");

     				}else{
     					jQuery('select[id^="edit-going-to-mainline"] option').first().remove();
							
							jQuery('select[id^="edit-going-to-mainline"] option').first().attr("selected","selected");
													
							jQuery('select[id^="edit-leaving-from"] option').first().remove();
							
							jQuery('select[id^="edit-leaving-from"] option').first().attr("selected","selected");
     			}
     				

              		
     		}
     		
     		
     		
     		function check_am_pm(alt,monthNames){
     			var input_txt = jQuery(alt).val().split("-");
					var x = new Date();
					var y = "";
					
					
					if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
   					y = new Date(parseInt(input_txt[2]) + "/" + parseInt(monthNames.indexOf(input_txt[1])+1)+ "/" + parseInt(input_txt[0]));
   				}else{
   					y = new Date(parseInt(input_txt[2]),parseInt(monthNames.indexOf(input_txt[1])+1),parseInt(input_txt[0]));
   				} 						
					x.getHours();
			    var depart_change_time = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-leaving-time');			
			    var return_change_time = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-return-time');  

        	if(jQuery(alt).val() != ""){
        		if( y > x ){		
				    	depart_change_time.find('option').remove().end();
		          depart_change_time.append('<option value="0">Leaving AM</option>');
		          depart_change_time.append('<option value="1">Leaving PM</option>');
        			depart_change_time.val("0");
				    	return_change_time.find('option').remove().end();
					    return_change_time.append('<option value="0">Leaving AM</option>');
			        return_change_time.append('<option value="1">Leaving PM</option>');
	        		return_change_time.val("0");
        		}else{
        			if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') != null && mainline_cookie_rtn_time == true){		
        				if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time') == "PM"){	        		
				    			return_change_time.find('option').remove().end();
			          	return_change_time.append('<option value="1">Leaving PM</option>')
	        				return_change_time.val("1");	
				    	
        				}else{
				    			return_change_time.find('option').remove().end();
					    		return_change_time.append('<option value="0">Leaving AM</option>');
			          	return_change_time.append('<option value="1">Leaving PM</option>');
	        				return_change_time.val("0");
        				}	
	        		}else{	        			
	        			if(x.getHours() < 12){	        				
		        			depart_change_time.find('option').remove().end();
					    		depart_change_time.append('<option value="0">Leaving AM</option>');
			          	depart_change_time.append('<option value="1">Leaving PM</option>');
	        				depart_change_time.val("0");	        				
	        			}else{
		        			depart_change_time.find('option').remove().end();
			          	depart_change_time.append('<option value="1">Leaving PM</option>');
	        				depart_change_time.val("1");
	        			}
	        			return_change_time.find('option').remove().end();
	        			return_change_time.append('<option value="1">Leaving PM</option>');
				    		return_change_time.val("1"); 
	        		}          		
              if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-time') != null && mainline_cookie_dpt_time == true){
              	jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-time')) == "PM" ? depart_change_time.val('1') : depart_change_time.val('0');
								mainline_cookie_rtn_time = false;
              }   	
        		}
        	}else{
        		if(x.getHours() < 12){
        			depart_change_time.find('option').remove().end();
		          depart_change_time.append('<option value="0">Leaving AM</option>');
		          depart_change_time.append('<option value="1">Leaving PM</option>');
        			depart_change_time.val("0");
        		}else{
        			depart_change_time.find('option').remove().end();
		          depart_change_time.append('<option value="1">Leaving PM</option>');			
        		}
        	}
     		}
     		
     		
 	
     		
     		
     		
     		
/**
 * 
 * THIS IS THE RESIZING DECLARATION
 * 
 * 
 */     		
     			
function booking_widget_resizing(){

	var depart_block_780  = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form #quicktabs-dynamic_quicktabs_menu #edit-departures');
	var returns_block_780 = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form  #chiltern-atos-login-form #edit-returns');
	var passengers_bloc_780 = jQuery('#block-chiltern-atos-login-atos-quicktab-block-form #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-form  fieldset[id^="edit-passengers"]');
	var passengers_bloc_780_inline = jQuery('#quicktabs-dynamic_quicktabs_menu fieldset[id^="edit-passengers"]');

	var returns_inline_home = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu #edit-returns');
	var departs_inline_home = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu #edit-departures');
	
	
	var not_home_main_pass = jQuery('.not-front #edit-passengers--2');
	
	
	var not_home_main_depart = jQuery('.not-front #edit-outward-journeys');
	
	var not_home_main_rtn = jQuery('.not-front #edit-return-journeys');
	

	//'form[id^="chiltern-atos-login-mainline-quicktab-form"] fieldset[id^="edit-passengers"]'
	/**
	 * MAINLINE
	 */
	var passenger_mainline = jQuery(' form[id^="chiltern-atos-login-mainline-quicktab-form"] fieldset[id^="edit-passengers"]');
	
	
	var out_journ_mainline = jQuery('#quicktabs-dynamic_quicktabs_menu #edit-outward-journeys');
	
	var rtn_journ_mainline  = jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journeys");
	
	
//	var 

//main_in_rtn_ccs_960 
	
	var date_picker_cal = jQuery('#edit-outbound-text .ui-datepicker-inline');
	
	var date_picker_cal_joun  = jQuery('#edit-outward-journeys .ui-datepicker-inline');
	
	//
	
	
	//main_rtn_css_768_dis
	
	jQuery(window).resize(function() {
		


		
								 if(jQuery(body).width() >= 480){
						 	jQuery('#quicktabs-dynamic_quicktabs_menu .ui-datepicker-trigger').hide();
						 }
		var out_journ_block_320  = jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu #chiltern-atos-login-mainline-quicktab-form fieldset');
		
		 if(jQuery(body).width() >= 480){
		 	
		
	
			
			//date_picker_cal.css( main_calendar_480 );
			
			if(jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .first.active').length == 1 ){
				jQuery('.page-home .region.region-content section').css({'padding-top': '143px'});
			}else if(jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .last.active').length == 1 ){
				//jQuery('.page-home .region.region-content section').css({'padding-top': '395px'});
			}
			

		 	

			
			jQuery('#block-chiltern-atos-login-atos-quicktab-block-form #quicktabs-dynamic_quicktabs_menu fieldset[id^="edit-returns"]').css({'left':'-520px'});
			out_journ_block_320.css({'position':'absolute'});
			
			if(jQuery('.page-home #block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu fieldset[id^="edit-departures"]').css('display') == 'none'){
	    	if(jQuery('.page-home #block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu fieldset[id^="edit-departures"]').css('visibility') == 'hidden'){
	    		jQuery('.page-home #block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu fieldset[id^="edit-departures"]').css({'display':'block','visibility':'visible'});
	    	}
	    }
	    
	    if(jQuery('.page-home #block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu fieldset[id^="edit-returns"]').css('display') == 'none'){
	    	if(jQuery('.page-home #block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu fieldset[id^="edit-returns"]').css('visibility') == 'hidden'){
	    		jQuery('.page-home #block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu fieldset[id^="edit-returns"]').css({'display':'block','visibility':'visible'});
	    	}
	    }
	    
	    
	    if(jQuery('.page-home #block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu fieldset[id^="edit-passengers"]').css('display') == 'none'){
	    	if(jQuery('.page-home #block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu fieldset[id^="edit-passengers"]').css('visibility') == 'hidden'){
	    		jQuery('.page-home #block-chiltern-atos-login-atos-quicktab-inline-form #quicktabs-dynamic_quicktabs_menu fieldset[id^="edit-passengers"]').css({'display':'block','visibility':'visible'});
	    	}
	    }
	    	    
			
			if(jQuery(body).width() < 768 ){
				
				if(jQuery('.page-home').length == 1){
					
	  			
	  			/**
					 * ALL TRAINS
					 */
				
					
	  			if(depart_block_780.css('display') == 'none'){
	  				depart_block_780.css({'height':'290px','margin-left':'17px','margin-top':'15px','top':'80px','width':'500px','left':'-56px','border-right': '3px solid #1FB7E1'});
	  			}
	  			
	  			if(returns_block_780.css('display') == 'block'){
	  				returns_block_780.css({'height':'270px','margin-left':'17px','margin-top':'15px','top':'80px','width':'500px','left':'-56px','border-right': '3px solid #1FB7E1'});
	  			}
	  			
	  			
	
	  			if(passengers_bloc_780.css('display') == 'block'){
	  				passengers_bloc_780.css({'left':'101px','top':'85px','width':'190px','height':'250px','border-right': '3px solid #1FB7E1'});	
	  			}
	  			
	  			if( passengers_bloc_780_inline.css('display') == 'block'){
	  				passengers_bloc_780_inline.css({'left':'101px','top':'85px','width':'190px','height':'250px','border-right': '3px solid #1FB7E1'});	
	  				jQuery('#edit-passengers .form-item.form-type-select.form-item-ticket-type').css({'display':'block'});	
	  			}	                			
	  			
	  			if(returns_inline_home.css('display') == 'block'){
	  				returns_inline_home.css({'height':'270px','left':'-56px','margin-left':'17px','margin-top':'15px','top':'80px','width':'500px', 'border-right': '3px solid #1fb7e1'});                			
	  			}
	  		
	  			if(departs_inline_home.css('display') == 'block'){
	  				departs_inline_home.css({'height':'260px','left':'-56px','margin-left':'17px','margin-top':'15px','top':'80px','width':'500px', 'border-right': '3px solid #1fb7e1'});                			
	  			}
	  			
	  		
	  			/**
					 * MAINLINE
					 */
					

					
					
	
				}else{// not home
					/**
					 * ALL TRAINS
					 */
					if( passengers_bloc_780_inline.css('display') == 'block'){
	  				passengers_bloc_780_inline.css({'left':'101px','top':'85px','width':'190px','height':'250px','border-right': '3px solid #1FB7E1'});	
	  				jQuery('#edit-passengers .form-item.form-type-select.form-item-ticket-type').css({'display':'block'});	
	  			}
	  			
	  			
	  			if(returns_inline_home.css('display') == 'block'){
	  				returns_inline_home.css({'height':'270px','left':'-56px','margin-left':'17px','margin-top':'15px','top':'80px','width':'500px', 'border-right': '3px solid #1fb7e1'});                			
	  			}
	  		
	  			if(departs_inline_home.css('display') == 'block'){
	  				departs_inline_home.css({'height':'260px','left':'-56px','margin-left':'17px','margin-top':'15px','top':'80px','width':'500px', 'border-right': '3px solid #1fb7e1'});                			
	  			}
	  			/**
					 * MAINLINE
					 */
					if(not_home_main_pass.css('display') == 'block'){
	  					not_home_main_pass.css(main_in_pass_ccs_480_dis);
	  			}
					
					if(not_home_main_depart.css('display') == 'block'){
						not_home_main_depart.css(main_out_css_480_dis );
						not_home_main_depart.css( {'height':'250px'} );
					}
					
					if(not_home_main_rtn.css('display') == 'block'){
						not_home_main_rtn.css(main_rtn_css_480_dis);
						not_home_main_rtn.css( {'height':'190px'} );
					}
					


					
				}
			}
			if(jQuery(body).width() >= 768 ){
				
				if(jQuery('.page-home').length == 1){
					
					
					jQuery('#edit-outbound-text .ui-datepicker-inline').css( main_calendar_480  );
					jQuery('.page-home .region.region-content section').css({'padding-top': '0px'});
					
					
	

					
					/**
					 * ALL TRAINS
					 */
				
					if(depart_block_780.css('display') == 'block'){

	  				depart_block_780.css({'height':'307px','margin-left':'2px','margin-top':'10px','top':'50px','width':'515px','left':'-520px'});
	  			}
	  			
	  			if(returns_block_780.css('display') == 'block'){
	  				returns_block_780.css({'height':'307px','margin-left':'2px','margin-top':'10px','top':'50px','width':'515px','left':'-520px'});
	  			}
	  			
	  			if(passengers_bloc_780.css('display') == 'block'){
	  				passengers_bloc_780.css({'left':'-195px','top':'49px','width':'190px', 'height':'307px'});	
	  			}
	  			
	  			if( passengers_bloc_780_inline.css('display') == 'block'){
	  				passengers_bloc_780_inline.css({'left':'-195px','top':'49px','width':'190px', 'height':'307px'});
	  				jQuery('#edit-passengers .form-item.form-type-select.form-item-ticket-type').css({'display':'none'});			
	  			}
	  			
	  			if(returns_inline_home.css('display') === 'block'){
	  				returns_inline_home.css({'height':'307px','left':'-520px','margin-left':'2px','margin-top':'10px','top':'50px','width':'515px'});                			
	  			}else{              				
	  				returns_inline_home.css({'height':'307px','left':'-15px','margin-left':'2px','margin-top':'10px','top':'74px','width':'10px'});
	  			}
	  			
	  			if(departs_inline_home.css('display') === 'block'){
	  				departs_inline_home.css({'height':'307px','left':'-520px','margin-left':'2px','margin-top':'10px','top':'50px','width':'515px'});                			
	  			}else{              				
	  				departs_inline_home.css({'height':'307px','left':'-15px','margin-left':'2px','margin-top':'10px','top':'74px','width':'10px'});
	  			}
	  			/**
					 * MAINLINE
					 */
	

					/*
					 * Mainline out block  - inline
					 */
					
					passenger_mainline.css('display') == 'block' ? passenger_mainline.css( main_pass_css_768_dis) : passenger_mainline.css( main_pass_css_768 );
					
					out_journ_mainline.css('display') == 'block' ? out_journ_mainline.css( main_out_css_780_dis ) : out_journ_mainline.css( main_out_css_780 );
					
					rtn_journ_mainline.css('display') == 'block' ? rtn_journ_mainline.css( main_rtn_css_768_dis ) : rtn_journ_mainline.css( main_rtn_css_768 );
					

				}	else{// not the home page
																
					if(jQuery(body).width() < 960 ){

						/**
						 * ALL TRAINS
						 */
						if(departs_inline_home.css('display') == 'block'){
	  					departs_inline_home.css({'height':'260px','left':'100px','margin-left':'17px','margin-top':'15px','top':'31px','width':'500px'});                			
	  				}
	  				if(returns_inline_home.css('display') == 'block'){
	  					returns_inline_home.css({'height':'270px','left':'100px','margin-left':'17px','margin-top':'15px','top':'31px','width':'500px'}); 
	  				}
	  				
	  				if( passengers_bloc_780_inline.css('display') == 'block'){
	  					passengers_bloc_780_inline.css({'left':'496px','top':'49px','width':'190px', 'height':'250px'});
	  					jQuery('#edit-passengers .form-item.form-type-select.form-item-ticket-type').css({'display':'block'});			
	  				}
	  				
	
	  				
	  				if(jQuery(body).width()  >= 768){

	  					if(not_home_main_pass.css('display') == 'block'){
	  					not_home_main_pass.css(main_in_pass_ccs_768_dis);
	  					}
	  					
	  					if(not_home_main_depart.css('display') == 'block'){
								not_home_main_depart.css( depart_in_main_css_768_dis );
								not_home_main_depart.css( {'height':'250px'} );
							}
							
							if(not_home_main_rtn.css('display') == 'block'){
								not_home_main_rtn.css(main_in_rtn_ccs_768_dis);
								not_home_main_rtn.css( {'height':'190px'} );
							}
					
	
	  					
	  				}


	
					}else{
						
						
					
						
						jQuery('#edit-outbound-text .ui-datepicker-inline').css( main_calendar_480 );
						jQuery('#edit-outward-journeys .ui-datepicker-inline').css( main_calendar_480 );
						jQuery('.page-home .region.region-content section').css({'padding-top': '0px'});
						/**
						 * ALL TRAINS
						 */
						if(departs_inline_home.css('display') == 'block'){
	  					departs_inline_home.css({'height':'260px','left':'198px','margin-left':'17px','margin-top':'15px','top':'31px','width':'500px'});                			
	  				}
	  				
	  				if(returns_inline_home.css('display') == 'block'){
	  					returns_inline_home.css({'height':'270px','left':'198px','margin-left':'17px','margin-top':'15px','top':'31px','width':'500px'}); 
	  				}
	  				
	  				                				
	  				if( passengers_bloc_780_inline.css('display') == 'block'){

	  					passengers_bloc_780_inline.css({'left':'637.533px','top':'49px','width':'190px', 'height':'250px'});
	  					jQuery('#edit-passengers .form-item.form-type-select.form-item-ticket-type').css({'display':'block'});			
	  				}
	  				
	  				if(not_home_main_pass.css('display') == 'block'){
	  					not_home_main_pass.css(main_in_pass_ccs_960_dis);
	  				}
	  				
	  				if(not_home_main_depart.css('display') == 'block'){
								not_home_main_depart.css( depart_in_main_css_960_dis );
								not_home_main_depart.css( {'height':'250px'} );
						}
	  				
	  				if(not_home_main_rtn.css('display') == 'block'){
							not_home_main_rtn.css(main_in_rtn_ccs_960_dis);
							not_home_main_rtn.css( {'height':'190px'} );
						}
	  				
	  				
	  				/**
						 * MAINLINE
						 */
	
						
					}											
				}//end of not the home page
			}
		}else{//320

			if(jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .first.active').length == 1 ){
				jQuery('.page-home .region.region-content section').css({'padding-top': '143px'});
			}else if(jQuery('.page-home .block.block-chiltern-atos-login .quicktabs-style-bullets .last.active').length == 1 ){
				//jQuery('.page-home .region.region-content section').css({'padding-top': '395px'});
				//993px

			}

			out_journ_mainline.css('display') == 'block' ? out_journ_mainline.css( main_out_css_320  ) : out_journ_mainline.css(  main_out_css_320_dis );
			
			rtn_journ_mainline.css('display') == 'block' ? rtn_journ_mainline.css( main_rtn_css_320_dis ) : rtn_journ_mainline.css( main_rtn_css_320 );
			
		}
	});	
}




function ie_8_wrapper(){
	 if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
	 	jQuery('#edit-arrival').wrap('<div class="ie-select-holder"></div>');
	 }
}



function read_booking_widget_cookies(monthNames){
	
	var date = new Date();
	date.setHours(01);
	
	var input_date ="";  	
	//ALL TRAINS
	
	
	if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-station') != null){
		 jQuery('#chiltern-atos-login-form #edit-leaving-from').val(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-station'));
		 
	}

	if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-station') != null){
		
	 jQuery('#chiltern-atos-login-form #edit-going-to').val(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-station'));
	}


	if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-input') != null){	
		jQuery('#chiltern-atos-login-form #edit-departure').val(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-input'));
		var alt_input =readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-input').split('-'); 	
		jQuery('#chiltern-atos-login-form #edit-input-text-datepicker-popup-0').val(alt_input[0]+'-'+alt_input[1]+'-'+alt_input[2]);				
		var month = ((monthNames.indexOf(alt_input[1]) + 1) < 10) ? "0" + (monthNames.indexOf(alt_input[1]) + 1) : (monthNames.indexOf(alt_input[1])+1);		
		var day = (alt_input[0] < 10) ? "0" + alt_input[0] : alt_input[0];						  
    if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
   		input_date = new Date(jQuery.trim(alt_input[2]) + "/" + jQuery.trim(month)+ "/" + jQuery.trim(day)+ ' 00:00:00'.split(' ').join('T'));
   	}else{
   		input_date = new Date(jQuery.trim(alt_input[2]) +  "-" + jQuery.trim(month) + "-" + jQuery.trim(day) + ' 00:00:00'.split(' ').join('T'));
   	} 	
 		if (input_date > date) {// not todays date but in the future
			jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').find('option').remove().end();	  		
			for (var i = 0; i < 24; i++) {
  			if (i < 10)  i = '0' + i;
    		jQuery('#chiltern-atos-login-form select[id^="edit-hours"]').append('<option value="' + i + '">' + i + '</option>');		      
   		}
 		}	
	}
	
	if(input_date != "" || input_date >= date){
		
		if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-input') != null){	
			//jQuery('#chiltern-atos-login-form input[id ^="edit-journey-type-1"]').attr('checked', true);
			jQuery('#chiltern-atos-login-form #edit-return').css({'background-image':'none','cursor': 'pointer','color': '#576370', 'background-image': "url(/sites/all/themes/custom/chilterntheme/images/calendar.png)",
	            'background-repeat': 'no-repeat', 'background-position': '160px 4px'}); 
			jQuery('#chiltern-atos-login-form #edit-return').val(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-input')); 
		}


		if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-passengers') != null){
			 jQuery('#chiltern-atos-login-form #edit-passenger').val(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-passengers'));
			}
		
		if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-adults') != null){ 
			jQuery('#chiltern-atos-login-form #edit-passengers input[id^="edit-adults"]').val(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-adults'));
		}
		
		if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-children') != null){
			 jQuery('#chiltern-atos-login-form #edit-passengers input[id^="edit-children"]').val(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-children'));
			}
		
		if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-rail-card') != null){
			 jQuery('#chiltern-atos-login-form .form-item-ticket-type select[id^="edit-ticket-type"]').val(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-rail-card'));
		}		
	}
	
	//MAINLINE

		

		
	if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-station') != null){
		if( readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-station') == "London Marylebone"){
			jQuery('#chiltern-atos-login-mainline-quicktab-form select[id^="edit-leaving-from"]').val('1475');
		}else{
			jQuery('#chiltern-atos-login-mainline-quicktab-form select[id^="edit-leaving-from"]').val(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-station'));
		}
		
		 
	}	 

	if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-station') != null){
		if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-station') == "London Marylebone"){
			jQuery('#chiltern-atos-login-mainline-quicktab-form select[id^="edit-going-to-mainline"]').val('1475');
		}else{
			jQuery('#chiltern-atos-login-mainline-quicktab-form select[id^="edit-going-to-mainline"]').val(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-station'));
		}		
	}
	
	
	if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-day') != null){
		jQuery('#chiltern-atos-login-mainline-quicktab-form #edit-return-journeys select[id^="edit-return-day"]').val(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-day'));
	

		jQuery('#chiltern-atos-login-mainline-quicktab-form #edit-return-journeys input[id^="edit-return-time"]').val(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time'));

		
		var main_rtn_val = "";		
		switch(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-day')){
			case 'Same Day':
			 main_rtn_val = 0;
			break;
			case 'Weekday':
			 main_rtn_val = 1;
			break;
			case 'Saturday':
			 main_rtn_val = 2;
			break;			
			case 'Sunday':
			 main_rtn_val = 3;			
			break;	
		}
		jQuery('#chiltern-atos-login-mainline-quicktab-form select[id^="edit-return-day"]').val(main_rtn_val);
	}
	
	//mainline-depart-date
	if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-date') != null){
		jQuery('#chiltern-atos-login-mainline-quicktab-form input[id^="edit-outward-journey"]').val(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-date'));	
		jQuery('#chiltern-atos-login-mainline-quicktab-form input[id^="edit-outbound-text-datepicker-popup"]').val(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-date'));
	}

	var depart_change_time = jQuery('form[id^="chiltern-atos-login-mainline-quicktab-form"] #edit-leaving-time');
	if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-time') != null && mainline_cookie_dpt_time == true){
		
	
	
		jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.mainline-depart-time')) == "PM" ? depart_change_time.val('1') : depart_change_time.val('0');
	
		
		jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] #edit-return-journey").val(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-day')+ ' - '+readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-time'));	
		
	}
	
	
	
	if(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-children')){
		var ad = parseInt(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-adults')) );
		//edit-passenger--2
		var chil = parseInt(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-children')));
		var total = +parseInt(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-children')) + +parseInt(jQuery.trim(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-adults'))));
		jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] input[id^='edit-passenger']").val(ad+chil);
		
		jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] select[id^='edit-children']").val(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-children'));
		jQuery("form[id^='chiltern-atos-login-mainline-quicktab-form'] select[id^='edit-adults']").val(readDrupalLifeTimeCookie('Drupal.visitor.mainline-return-adults'));
	}

	
	
}


read_booking_widget_cookies(monthNames);

	if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-station') != null){

		 jQuery('#chiltern-atos-login-form #edit-leaving-from').val(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-depart-station'));
		} 

	if(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-station') != null) {
		
	jQuery('#chiltern-atos-login-form #edit-going-to').val(readDrupalLifeTimeCookie('Drupal.visitor.all-trains-return-station'));
	}




jQuery('#block-chiltern-atos-login-atos-quicktab-block-form select[id^="edit-ticket-type"]').change(function(){
	if(jQuery(this).find('option:selected').val() == 0){
		jQuery(this).css({'color':'#1fb7e1'});
	}else{
		jQuery(this).css({'color':'#576370'});
	}
});

jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form select[id^="edit-ticket-type"]').change(function(){
	if(jQuery(this).find('option:selected').val() == 0){
		jQuery(this).css({'color':'#1fb7e1'});
	}else{
		jQuery(this).css({'color':'#576370'});
	}
});



buy_tickets_online(monthNames);

});
        






