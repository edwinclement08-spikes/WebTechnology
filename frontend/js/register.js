
$(document).ready(function(){
    
        var login = $('#loginform');
        var recover = $('#recoverform');
        var register = $('#registerform');
        var speed = 400;
  
            $('.to-recover').click(function(){
                
                $("#loginform").slideUp();
                $("#registerform").slideUp();
                $("#recoverform").slideDown();
            });
            $('.to-login').click(function(){
    
                
                $("#recoverform").slideUp();
                $("#registerform").slideUp();
                $("#loginform").slideDown();
            });
    
            $('.to-register').click(function(){
                $('#loginform').slideUp();
                $("#recoverform").slideUp();            
                $('#registerform').slideDown();
            });
    
            $('.to-login').click();
            
       
        
        
    
        
        if($.browser.msie == true && $.browser.version.slice(0,3) < 10) {
            $('input[placeholder]').each(function(){ 
           
            var input = $(this);       
           
            $(input).val(input.attr('placeholder'));
                   
            $(input).focus(function(){
                 if (input.val() == input.attr('placeholder')) {
                     input.val('');
                 }
            });
           
            $(input).blur(function(){
                if (input.val() == '' || input.val() == input.attr('placeholder')) {
                    input.val(input.attr('placeholder'));
                }
            });
        });
    
            
            
        }
    });