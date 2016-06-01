$(document).ready(function() {
dropMeBtn();
// menu();
setTimeout(headImg,200);
slideTouch();
});
$(window).scroll(function () {
	if($(window).width() > 768){
		toggleNav();
	}
});

// function menu(){
// 	$("#dropdown").on("click",function(){
// 		if($(window).width() > 768){
// 			$("#dropMH > li:first").css("display","none");
// 			$("#dropMH").slideDown("slow");
// 			$("#dropMH").on("mouseover",function(){
			
// 		}else if($(window).width() < 768){
// 			$("#dropMH").slideDown("slow");
// 			$("#ulNav > li :not(:first)").hide();//隐藏除了第一个LI外的所有LI 	
// 			$("#dropMH li:first").on("click",function(){
// 				$("#dropMH").hide();
// 				$("#ulNav > li").show("fast");
// 			});
// 		}
// 	});
	
// }
$(window).resize(function(){
	headImg();
})
function headImg() {
var res=1;
	if($(window).width() > 420){
		if(res==0){
			var logoT='<a href="#" class="" id="logoTbox"><img class="logoImg logoC" src="images/tagline.svg"></a>';
			$("#logoHead").append(logoT);
			res=1;
		}
	}
	if($(window).width() <= 420){
		if(res==1){
			$("#logoTbox").remove();
			res=0;
		}
	}
}


function dropMeBtn(){
	$("#drpBtn").on("click",function(){
		$('#bs-example-navbar-collapse-1').slideToggle("slow");
	});

}

function slideTouch(){

	var isTouch=('ontouchstart' in window);
	if(isTouch){
		$(".carousel").on('touchstart', function(e){
			// console.log("ddd");
			var that=$(this);
			var touch = e.originalEvent.changedTouches[0];
			var startX = touch.pageX;
			var startY = touch.pageY;
			$(document).on('touchmove',function(e){
				touch = e.originalEvent.touches[0] ||e.originalEvent.changedTouches[0];
				var endX=touch.pageX - startX;
				var endY=touch.pageY - startY;
				if(Math.abs(endY)<Math.abs(endX)){
					if(endX > 10){
						$(this).off('touchmove');
						that.carousel('prev');  
					}else if (endX < -10){
						$(this).off('touchmove');
						that.carousel('next');
					}
					return false;
				}
			});
		});
		$(document).on('touchend',function(){
			$(this).off('touchmove');
		});	
	}
}



var str=0;
function toggleNav(){
	if($(window).scrollTop()>250){
		if(str===0){
			str=1;
			$("#nav").css({opacity:0,top:-30}).animate({opacity:1,top:0},200,function(){});
			$("#nav").removeClass("navbar-statica");
			$("#nav").addClass("containerHeaderS");
			$("#nav").removeClass("containerHeader");
			$("#logoHead").addClass("logoScroll");
			$("#logoHead").removeClass("logo");
			$("#bs-example-navbar-collapse-1").css({"paddingTop":"0"});
		}
	}
	if($(window).scrollTop()<250){
		if(str===1){
			str=0;
			$("#nav").animate({opacity:0,top:-30},200,function(){
				$("#nav").animate({opacity:1,top:0},300);
				$("#nav").removeClass("containerHeaderS");
				$("#nav").addClass("containerHeader");
				$("#logoHead").removeClass("logoScroll");
				$("#logoHead").addClass("logo");
			});

		}
	}
}