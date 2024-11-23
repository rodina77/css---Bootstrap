$(document).ready(function(){
    $(".butt1").click(function(){
        $(this).addClass('.active');
});
    $(".butt1").click(function(){
        $(".all2").hide();
        $(".all3").hide();
        $(".all4").hide();
        $(".all1").show(2000);
      
    });
    $(".butt2").click(function(){
        $(".all1").hide();
        $(".all3").hide();
        $(".all4").hide();
        $(".all2").show(2000).css("display", "flex")
      
    });
    $(".butt3").click(function(){
        $(".all2").hide();
        $(".all1").hide();
        $(".all4").hide();
        $(".all3").show(2000).css("display", "flex");
    });
    $(".butt4").click(function(){
      $(".all2").hide();
      $(".all3").hide();
      $(".all1").hide();
      $(".all4").show(2000).css("display", "flex");
    });

    $.toaster({ priority :'success', title :'Title', message :'Your message here'});
  });
