//jQuery wrapper
(function ($) {
  //Define a Drupal behaviour with a custom name
Drupal.behaviors.chiltern_custom_validationAddEmailValidator = {
    attach: function (context) {
      //Add an eventlistener to the document reacting on the
      //'clientsideValidationAddCustomRules' event.
      $(document).bind('clientsideValidationAddCustomRules', function(event){
        //Add your custom method with the 'addMethod' function of jQuery.validator
        //http://docs.jquery.com/Plugins/Validation/Validator/addMethod#namemethodmessage
        jQuery.validator.addMethod("validateEmail", function(value, element, param) {            
          return this.optional(element) || /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(value);
        }, jQuery.format('Invalid email address.'));
        
        
        //register_email_validate
        
        jQuery.validator.addMethod("register_email_validate", function(value, element, param) {            
          return this.optional(element) || /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/.test(value);
        }, jQuery.format('Invalid email address.'));
        
        jQuery.validator.addMethod("validatePassword", function(value, element, param) {
          return this.optional(element) || /^(?=.*\d)(.{6,})$/.test(value);
        }, jQuery.format('Minimum password length is 6 characters and must contain a number'));
        
         jQuery.validator.addMethod("passworMatch", function(value, element, param) {
          return this.optional(element) || (jQuery('#edit-pass-pass1').val() === value);
        }, jQuery.format('Passwords do not match.'));
        
        
        jQuery.validator.addMethod("password_reg_Match", function(value, element, param) {
          return this.optional(element) || (jQuery('input[id^="edit-pass-pass1"]').val() === value);
        }, jQuery.format('Passwords do not match.'));
        
        
        //Mainline booking widget
        
        jQuery.validator.addMethod("validate_main_out", function(value, element, param) {
       
       	if(value == 0 ){
       		jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-mainline-quicktab-form').css({'height':'59px'});
       	}else{
       	//	jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-mainline-quicktab-form').css({'height':'auto'});
       	}
        	
         	return value == 0 ? false : true;
        }, jQuery.format('Station required.'));
        
        jQuery.validator.addMethod("validate_main_rtn", function(value, element, param) {
        	
       	if(value == 0 ){
       		jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-mainline-quicktab-form').css({'height':'59px'});
       	}else{
       	//	jQuery('#block-chiltern-atos-login-atos-quicktab-inline-form #chiltern-atos-login-mainline-quicktab-form').css({'height':'auto'});
       	}
        	
					return value == 0 ? false : true;
        }, jQuery.format('Station required.'));
        
        jQuery.validator.addMethod("validate_main_out_date", function(value, element, param) {
        	
        	
					return value == "" ? false : true;
        }, jQuery.format('Date required.'));
        
        jQuery.validator.addMethod("validate_main_rtn_date", function(value, element, param) {
					return value == "" ? false : true;
        }, jQuery.format('Date required.'));
        
        /*
 				jQuery.validator.addMethod("validate_main_passengers", function(value, element, param) {
					return value == "" || value == 0  ? false : true;
        }, jQuery.format('Passenger required.'));
        */
        
        //All train booking widget
        
        jQuery.validator.addMethod("validate_all_out", function(value, element, param) {   	
					return value == "" ? false : true;
        }, jQuery.format('Station required.'));
        
        
        
        jQuery.validator.addMethod("validate_all_out_repeat", function(value, element, param) {
					return value == jQuery('#edit-going-to').val() ? false : true;
        }, jQuery.format('Stations should not be the same.'));
        
  
        
        jQuery.validator.addMethod("validate_all_rtn", function(value, element, param) {
					return value == "" ? false : true;
        }, jQuery.format('Station required.'));
        
        
        jQuery.validator.addMethod("validate_all_dpt", function(value, element, param) {
				return value == "" ? false : true;
        }, jQuery.format('Date required.'));
        
        jQuery.validator.addMethod("validate_all_rtn_date", function(value, element, param) {

        	var rtn = true;
        	
        	if(jQuery("input['journey-type']:checked").val() == 0){
        		rtn = true;
        	}else{
        		if(value == ""){
        			rtn = false;
        		}else{
        			rtn = true;
        		}
        	}
					return rtn;
        }, jQuery.format('Date required.'));
        
        /*
        jQuery.validator.addMethod("validate_all_pass", function(value, element, param) {
					return value == "" || value == 0  ? false : true;
        }, jQuery.format('Passenger required.'));
        */
        
        jQuery.validator.addMethod("detail_word_count", function(value, element, param) {
        	var splitResult = value.split(" ");
        	return splitResult.length > 200 ? false : true;
        }, jQuery.format('A maximum 200 words are allowed.'));
        
        
        
        
        
        
     
      });
    }
  }
})(jQuery);



