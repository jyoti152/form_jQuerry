$(document).ready(function() {

    $("input").on({
         
        
        click: function(){
          $(this).css("background-color", "lightblue");
        },
        keypress:function(){
            $(this).css("background-color", "pink");
            
        }  
      });
    
    //$("body").append("<img src='avatar.jpg' alt='no image found' height=300px; >" );
        $('#submit').click(function() {
            

 if($("#uname").val()==""){
       console.log('Username is required ');
       $("#error").html("user name required &#10006");
       setTimeout("$('#error').text('')",1500);
         }
        
else if($("#mail").val()==""){
            console.log('Email is required');
            $("#error-mail").html("Email required &#128231");
            setTimeout("$('#error-mail').text('')",1500);
              }
        
else if($("#phone").val()==""){
                console.log('phone is required');
                $("#error-phone").html("Phone number required &#128222 ");
                setTimeout("$('#error-phone').text('')",1500);
                  }
else if($("#cname").val()==""){
                    console.log('company is required');
                    $("#error-comp").html("Company name required &#9940 ");
                    setTimeout("$('#error-comp').text('')",1500);
                      }
                
                              
else if ($("#uname").match(name_regex) || $("#unme").length <3) {
    $('#error-username').text("* For your name use alphabets with minimum 3 letters  *");
    setTimeout("$('#error-username').text('')",1000);
    
    }

                });
$("#uname").keypress(function(){
    if($("#uname").val().length<3){
    $("#error").text(" For your name use alphabets with minimum 3 letters  ");
    setTimeout("$('#error').text('')",1500);
    }
    
});

$("#mail").keypress(function(){
    var name_regex = /^[a-zA-Z]+$/;
    var email_regex =/^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
    
    if(!email_regex.test($("#mail").val())){
    $("#error-mail").text(" Enter valid Email ");
    setTimeout("$('#error-mail').text('')",1500);
    }
    
});


$("#phone").keypress(function(){
    var phone_regex = /[0-9]{10}/;
  
    if(!phone_regex.test($("#phone").val()) && $("#phone").length<10){
    $("#error-phone").text(" Enter valid Number ");
    setTimeout("$('#error-phone').text('')",1500);
    }
    
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#output').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
    
}
$("#file").change(function(){
    readURL(this);
});
$("#phone").keypress(function(evt){

var charCode = evt.which;
if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
   return false;

return true;
});

});

  