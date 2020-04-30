/*
	* ----------------------------------------------------------------------------
        _  _        _                 _                                 _                                               
    ___| |(_) ___ _| |_  ____ _____ _| |_  ___   ___  _   _  _____  ___| |  _     _   _     _       _  _   _   _        
   / __  || |/ __|__  _|/ _  |  _  |_   _|/ __| / _ \| | | ||  _  |/ __  | |_| | |_  |_  | | |  /|   |  | |_  |_   /|   
  | (__| || |\__ \ | |_  (_| | | | | | |_ \__ \| |_| | |_| || | | | (__| |  _  |   |   | | | | |_|  _|  | | | | | |_|   
   \_____||_||___/ |___|\____|_| |_| |___||___/ \___/|_____||_| |_|\_____| |_| |  _|  _| | |_|   | |_   | |_| |_|   |   
   
  * CSS Document public js Start 
	* Author: DistantSound
	* IDE :  
  * ---------------------------------------------------------------------------------------------
*/ 
$(function() {
				if (!placeholderSupport()) {
				          $("[placeholder]").focus(function() {
				                  var input = $(this);
				                  if (input.val() == input.attr("placeholder")) {
				                          input.val("");
				                          input.removeClass("placeholder");
				                  }
				          }).blur(function() {
				                  var input = $(this);
				                  if (input.val() == "" || input.val() == input.attr("placeholder")) {
				                          input.addClass("placeholder");
				                          input.val(input.attr("placeholder"));
				                  }
				          }).blur();
				};
          $(window).scroll(function(){               
          				var scrollTop = $(window).scrollTop();             
            	 		if( scrollTop > 200 ){                   
            	 	  				$(".hader-c").addClass("hader-active");           
            	 	  } else {                    
            	 	 					$(".hader-c").removeClass("hader-active");
            	 	 	}             
          }); 

        // nav-boxclose  nav-boxopen nav-boxclose---------------------------------
        $(".hader-nav-close").hide();
				$(".hader-nav-close").hide();
								$(".hader-nav-open").on("click", function() {
								$(".hader").css("right", "0");
								$(".hader-nav-close").show();
								$(".hader-nav-open").hide();
				});
				$(".hader-nav-close, .a-link").on("click", function() {
								$(".hader").css("right", "-60%");
								$(".hader-nav-close").hide();
								$(".hader-nav-open").show();
				});	
});	
function placeholderSupport() {return "placeholder" in document.createElement("input")};
var mySlide_L={reset:true,distance:"300px",duration:600,easing:"ease-in-out",interval:350,opacity:0,origin:"left"};
var mySlide_R={reset:true,distance:"300px",duration:600,easing:"ease-in-out",interval:350,opacity:0,origin:"right"};
var mySlide_Up={reset:true,distance:"300px",duration:600,easing:"ease-in-out",interval:300,opacity:0,origin:"bottom",scale:.1};
var mySlide_Down={reset:true,distance:"300px",duration:600,easing:"ease-in-out",interval:300,opacity:0,origin:"top"};
var myFlip_Up={reset:true,distance:"300px",easing:"ease-in-out",interval:300,origin:'left',rotate:{x:180,y:0,z:90}};
var myZoom_Out={reset:true,distance:"300px",easing:"ease-in-out",scale:.1,interval:200};
 if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
 		(function(){
 				window.sr = new ScrollReveal();
 				sr.reveal(".myslide-l", mySlide_L);
 				sr.reveal(".myslide-r", mySlide_R);
 				sr.reveal(".myslide-up", mySlide_Up);
 				sr.reveal(".mydlide-down", mySlide_Down);
 				sr.reveal(".myflip-up", myFlip_Up);
 				sr.reveal(".myzoom-out", myZoom_Out);  
 		})();
 };
  

		