function _c(log){
	console.log(log);
}

// $(function(){
// 	var agent = navigator.userAgent;
// 	var contentWidth = 750;
// 	if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1) {
// 		var min_scale = Math.round( ( screen.width / contentWidth ) * 10000 , 5 ) / 10000;
// 		var max_scale = Math.round( ( screen.height / contentWidth ) * 10000 , 5 ) / 10000;
// 		$("head").prepend('<meta name="viewport" id="viewport" content="width=' + contentWidth + ', minimum-scale=' + min_scale + ', maximum-scale=' + max_scale + ', user-scalable=no">');
// 		// $("head").prepend('<meta name="viewport" id="viewport" content="width=450, minimum-scale=' + min_scale + ', maximum-scale=' + max_scale + ', user-scalable=no">');
// 	} else if (agent.search(/Android/) != -1)  {
// 		$("head").prepend('<meta name="viewport" content="width=device-width,minimum-scale=1.0,maximum-scale=1.0" />');
// 		$('.gTranslate').remove()

// 		$(window).bind('resize load', function(){
// 			$("html").css("zoom" , $(window).width()/contentWidth);
// 		});
// 	}
// });

var agent = navigator.userAgent;
$(function(){

	if(agent.search(/iPhone/) != -1 || agent.search(/iPad/) != -1 || agent.search(/iPod/) != -1 || agent.search(/Android/) != -1) {
	///////////////////////sp
		var $wrap = $("#glovalnavi");
		var $nav = $("#glovalnavi").find(".navwrap")
		$(".menu").click(function(){
			$wrap.velocity({left:0},200)
		})

		$wrap.find(".close").click(function(){
			$wrap.velocity({left:"-100%"},200);
		})

		$nav.find(".about").find("a").click(function(){
			if($nav.find(".submenu.about_sub").css("display") == "none"){
				$nav.find(".submenu.about_sub").velocity("slideDown",200)
			}else{
				$nav.find(".submenu.about_sub").velocity("slideUp",200);
			}
			return false;
		})
		$nav.find(".chara").find("a").click(function(){
			if($nav.find(".submenu.chara_sub").css("display") == "none"){
				$nav.find(".submenu.chara_sub").velocity("slideDown",200)
			}else{
				$nav.find(".submenu.chara_sub").velocity("slideUp",200);
			}
			return false;
		})
		$nav.find(".story").find("a").click(function(){
			if($nav.find(".submenu.story_sub").css("display") == "none"){
				$nav.find(".submenu.story_sub").velocity("slideDown",200)
			}else{
				$nav.find(".submenu.story_sub").velocity("slideUp",200);
			}
			return false;
		})
		$nav.find(".goods").find("a").click(function(){
			if($nav.find(".submenu.goods_sub").css("display") == "none"){
				$nav.find(".submenu.goods_sub").velocity("slideDown",200)
			}else{
				$nav.find(".submenu.goods_sub").velocity("slideUp",200);
			}

			return false;
		})

	}else{

		////////////////naviPC
		var $nav = $("#glovalnavi").find(".navwrap").find("li:not('.none')");
		var $line = $("#glovalnavi").find(".line");
		$nav.hover(function(){
			var w = $(this).find("a").width();


			var index = $nav.index(this);
			var left = 0;
			for(var i = 0; i < index; i++){
				left += $nav.eq(i).width();
			}
			$line.width(w).velocity('stop').velocity({opacity:1,left:left+(30*index-1)},50);

		},function(){
			$line.velocity('stop').velocity({opacity:0},50)
		})

		var menuTime;
		$("#glovalnavi").find(".about").mouseover(function(){
			$("#glovalnavi").find(".submenu.pc.about").show().velocity('stop').velocity({opacity:1},50);
		}).mouseleave(function(){
			menuTime = setTimeout(function(){
				$("#glovalnavi").find(".submenu").velocity('stop').velocity({opacity:0},50,function(){
					$(this).hide();
				});
			},50)
		})
		$("#glovalnavi").find(".chara").mouseover(function(){
				$("#glovalnavi").find(".submenu.pc.chara").show().velocity('stop').velocity({opacity:1},50);
			}).mouseleave(function(){
					menuTime = setTimeout(function(){
						$("#glovalnavi").find(".submenu").velocity('stop').velocity({opacity:0},50,function(){
							$(this).hide();
						});
					},50)
				})

		$("#glovalnavi").find(".story").mouseover(function(){
				$("#glovalnavi").find(".submenu.pc.story").show().velocity('stop').velocity({opacity:1},50);
			}).mouseleave(function(){
					menuTime = setTimeout(function(){
						$("#glovalnavi").find(".submenu").velocity('stop').velocity({opacity:0},50,function(){
							$(this).hide();
						});
					},50)
				})


				$("#glovalnavi").find(".goods").mouseover(function(){
					$("#glovalnavi").find(".submenu.pc.goods").show().velocity('stop').velocity({opacity:1},50);
				}).mouseleave(function(){
					menuTime = setTimeout(function(){
						$("#glovalnavi").find(".submenu").velocity('stop').velocity({opacity:0},50,function(){
							$(this).hide();
						});
					},50)
				})

		$("#glovalnavi").find(".submenu").mouseover(function(){
			clearTimeout(menuTime);
			$(this).show().css({opacity:1});
		}).mouseleave(function(){
			$(this).velocity('stop').velocity({opacity:0},50,function(){
				$(this).hide();
			})
		})

		/////
		var scrollCheck = function(){
			mh = $(window).scrollTop();

			if(mh > 50){
				$(".pageTop").velocity('stop').velocity({opacity:1},200);
			}else{
				$(".pageTop").velocity('stop').velocity({opacity:0},200);
			}
		}

		$(window).scroll(scrollCheck);

		/////
		$(".alphaBtn,.pageTop").hover(function(){
			$(this).velocity('stop').velocity({opacity:0.5},150);
		},function(){
			$(this).velocity('stop').velocity({opacity:1},150);
		})
		$('.wrapper').before('<div id="js-bgmovie"></div>');
		$.getScript("/tv/dragon_s/assets/js/jquery.tubular.1.0.js", function(){
      var options = { videoId: 'Cz0OJkvxwL4'};
      $('#js-bgmovie').tubular(options);
    });
	}


	$(".pageTop").click(function(){
		scrollTo(0);
	})


})

function scrollTo(postop){
	$('html,body').stop().animate({scrollTop:postop},600,'easeInOutQuart')
}