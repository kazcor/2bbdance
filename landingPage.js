$(document).ready(function(){
$(".images").css("background-image","url(\"/f2.jpg\")")
    $(window).scroll(function(){
        if($(this).scrollTop()>$(window).height()){
           $(".mainBackground").addClass("backgroundImage1");
        }
        else{$(".mainBackground").removeClass("backgroundImage1");}
        if($(this).scrollTop()>$(window).height()*3){
           $(".mainBackground").addClass("backgroundImage2");
        }
        else{$(".mainBackground").removeClass("backgroundImage2");}
    });
  
    //slider:
    $(".myImages").css("background-image",`url(\"f1.jpg\")`)
    var index=1;
    $(".slideLeft").click(function(){
        index-=1;
    if(index<1){index=2;}
    if(index>2){index=1;}
        console.log(index);
    $(".myImages").css("background-image",`url(\"f${index}.jpg\")`)
    });
    $(".slideRight").click(function(){
        index+=1;
        if(index<1){index=2;}
        if(index>2){index=1;}
        console.log(index);
    $(".myImages").css("background-image",`url(\"f${index}.jpg\")`)
    });
    
});