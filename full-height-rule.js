$(document).ready(function() {
  var sbheight = $(".region-sidebar-second").height();
  var cheight = $("#content").height();
 
    if(sbheight > cheight){
         $(".region-sidebar-second").css("border-left", "1px solid #222");
    }
    
    else if(sbheight < cheight && sbheight > 100){
        $("#content").css("border-right", "1px solid #222");
    }  else {}
});
