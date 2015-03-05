$(document).ready(function() {
  $('.reg-box').children().attr('disabled', 'disabled');
  $('.login-box').children().attr('disabled', 'disabled');
  $('.btn').click(function() {
     if(!$('.login-box').is(':visible'))
     {
        $('.reg-box').children().attr('enabled', 'enabled');
        $('.reg-box').slideDown("slow");
        $('#regBtn').attr("onClick", "");
        $('#name-focus').focus();
    }});
  $('#sign_in').click(function() {
     if (!$('.login-box').is(':visible')) {
                // show the login form
                if ($('.reg-box').is(':visible')) {
                    // get rid of the registration fields
                    $('.reg-box').slideUp("slow");
                }
                $('.reg-box').children().attr('disabled', 'disabled');
                $('#sign_in').text('Sign up');
                $('#regBtn').text('Sign in');
                $('.login-box').children().attr('enabled', 'enabled');
                $('.login-box').slideDown("slow");
                $('#regBtn').attr("onClick", "");
                $('#regBtn').attr("name", "login");
                $('#regBtn').attr("form", "loginform");
                $('#email-focus').focus();
            } else {
                // show the registration forms
                $('.login-box').children().attr('disabled', 'disabled');
                $('.login-box').slideUp("slow");
                $('.reg-box').children().attr('enabled', 'enabled');
                $('#sign_in').text('Sign in');
                $('#regBtn').text('Sign up');
                $('.reg-box').slideDown("slow");
                $('#regBtn').attr("onClick", "");
                $('#regBtn').attr("name", "register");
                $('#regBtn').attr("form", "registerform");
                $('#name-focus').focus();
            }
            // deselect the link
            this.blur();
        });
});