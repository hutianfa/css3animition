// JavaScript Document
$(function(){

	
	//画像经过
	$('.portrait-nav li').hover(function(){
		$(this).addClass('li-hover').removeClass('li-nav');
	},function(){
		var _this = this;
		setTimeout(function (){
   			$(_this).removeClass('li-hover');
   		}, 500);
	});
	//画像点击
	$('.portrait-nav .nav-text').click(function(){
		var ind = $(this).parents('li').index();
		$(this).parents('li').removeClass('li-hover').addClass('li-nav').siblings('li').removeClass('li-nav');
		setTimeout(function (){
			
			$('.portrait').addClass('circles-hide');
			setTimeout(function (){
				
				$('.right-nav').slideDown(1000);
				$('.right-nav li').eq(ind).addClass('li-on').siblings('li').removeClass('li-on');
			}, 1000);
   			
   		}, 1000);
		
	});
	//画像二级菜单经过
	$('.portraitTwo-nav li').hover(function(){
		$(this).addClass('li-hover');
	},function(){
		var _this = this;
		setTimeout(function (){
   			$(_this).removeClass('li-hover');
   		}, 500);
	});
	//画像二级菜单点击
	$('.portraitTwo-nav .nav-text').click(function(){
		var ind = $(this).parents('li').index();
		$(this).parents('li').removeClass('li-hover').addClass('li-nav').siblings('li').removeClass('li-nav');
		$('.portraitThree-nav').removeClass('portrait-show');            
		setTimeout(function (){
			var html ='<ul>';
			for(var i=1;i<=9;i++){
				html +='<li class="li-'+i+'">';
                html +='<div class="nav-text">芝华士'+ind+'</div>';
                html +='<div class="nav-cen"><i></i><p>阿萨德飞卡仕达发的发送撒旦辐射大发生的发的辐射大辐射大</p></div>';
                html +='</li>';
			}
			html +='</ul>';
			$('.portraitThree-nav').html(html);
			$('.portraitThree-nav').addClass('portrait-show');
   		}, 1000);

	});
	
	//画像右侧菜单栏点击
	$('.right-nav li').click(function(){
		var ind = $(this).index();
		$('.portraitTwo-nav').removeClass('animationTwo');
		setTimeout(function (){
			$('.portraitThree-nav').removeClass('portrait-show');
   			$('.portraitTwo-nav').addClass('animationTwo');
   		}, 100);
		$(this).addClass('li-on').siblings('li').removeClass('li-on');
	});
	
	
	//画像复原
	$('.figure-user').click(function(){
		$('.portraitThree-nav').removeClass('portrait-show').html('');
		$('.portraitTwo-nav li').removeClass('li-nav').css('opacity','1');
		setTimeout(function (){
			$('.portrait-nav li').css('opacity','1');
			$('.right-nav').slideUp(1000);
			$('.right-nav li').removeClass('li-on');
			setTimeout(function (){
				$('.portrait').removeClass('circles-hide');
				$('.portraitTwo-nav').removeClass('animationTwo');
				
			}, 500);
		}, 500);
	});
});


