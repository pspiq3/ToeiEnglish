$(function(){

	var $chara = $(".images");
	var $nav = $(".imagenavi").find("li");
	var count = 0;
	var max = $chara.find("p").length;

	var flg = true;

	var timer;

	$chara.find(".current").css({opacity:1});
	var move = function(){
		flg = false;
		$chara.find(".current").velocity({opacity:0},400,function(){
			$nav.removeClass("current");
			$nav.eq(count).addClass("current");
			$(this).removeClass("current");
			$chara.find("p").eq(count).addClass("current").velocity({opacity:1},400,function(){
				flg = true;
			});

			setTimer();
		})
	}

	var setTimer = function(){
		timer = setTimeout(function(){
			count++;
			if(count > max-1){
				count = 0;
			}
			move();
		},3000)
	}


	$nav.click(function(){
		var index = $nav.index(this);
		if(count == index){
			return false;
		}else if(flg){
			clearTimeout(timer);
			count = index;
			move();
		}
	})

	if(max > 1){
		setTimer();
	}

	$(".imagenavi").find("li").hover(function(){
		if(!$(this).attr("class") || $(this).attr("class") == ''){
			$(this).velocity('stop').velocity({opacity:0.5},100);
		}

	},function(){
		$(this).velocity('stop').velocity({opacity:1},100);
	})
	$(".prev,.next").hover(function(){
		$(this).velocity('stop').velocity({opacity:0.5},100);
	},function(){
		$(this).velocity('stop').velocity({opacity:1},100);
	})
})