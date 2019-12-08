$ (document).ready(function(){
    $("#design, #pp").click(function() {
        $("#pp").slideToggle();
        $("#design").slideToggle();
    });
    $("#development, #dev").click(function() {
        $("#dev").toggle();
        $("#development").slideToggle();
    });
    $("#product, #prod").click(function() {
        $("#prod").slideToggle();
        $("#product").slideToggle();
    });

    // portfolio
    $("#project1").hover(function(){
        $("#text1").toggle("slow");
    
    })
    $("#project2").hover(function(){
        $("#text2").toggle("slow");
    
    })
    $("#project3").hover(function(){
        $("#text3").toggle("slow");
    
    })
    $("#project4").hover(function(){
        $("#text4").toggle("slow");
    
    })
    $("#project5").hover(function(){
        $("#text5").toggle("slow");
    
    })
    $("#project6").hover(function(){
        $("#text6").toggle("slow");
    
    })
    $("#project7").hover(function(){
        $("#text7").toggle("slow");
    
    })
    $("#project8").hover(function(){
        $("#text8").toggle("slow");
    
    })
    });
var submission=function(){
 
var email=document.getElementById("email")
if (email== "" ) {
    alert("Please enter your Email")
}
    else {
        alert('Please enter your Email.' )
    }


}
// confirm("Would you like to dive more from Delani Studio?");
