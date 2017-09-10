$(function(){
	//输入框处理
	$(".headerBox>input")
	.keydown(function(ev){
		var e = ev || event;
		if(e.keyCode == 13){
			alert("提交");
		}
	})
	
	//换肤
	$(".changeColor>ul>li").click(function(){
		var index = $(this).index();
		$(this).addClass('selected').siblings().removeClass('selected');
		$(".header>.headerBox>.navigator").prop("class",'bgcolor'+index+' navigator');
		$(".main>.main-left>.shop-list").prop("class",'bgcolor'+index+' shop-list');
	})
	
	//导航栏的显示处理
	$(".navigator ul li a").mouseover(function(){
		$(this).next().show();
	}).mouseout(function(){
		$(this).next().hide();
	})
	
	//中间的图片轮播
	var index = 0;
	var timer = setInterval(doShow,2000);
		$('.main-mid>div>img').eq(0).fadeIn().siblings().fadeOut();
		$('.main-mid>ul>li').eq(0).addClass('changeIntro').siblings().removeClass('changeIntro');
		$('.main-mid>ul>li').eq(0).css({"background-color":"#56A7D4"}).siblings().css({"background-color":"#444"})
	function doShow(){
		$('.main-mid>div>img').eq(index).fadeIn().siblings().fadeOut();
		$('.main-mid>ul>li').eq(index).addClass('changeIntro').siblings().removeClass('changeIntro');
		$('.main-mid>ul>li').eq(index).css({"background-color":"#56A7D4"}).siblings().css({"background-color":"#444"})
		
		index = ++index%5;
	}
	$('.main-mid>ul>li').hover(function(){
		clearInterval(timer);
		var index = $(this).index();
		
		$('.main-mid>div>img').eq(index).fadeIn().siblings().fadeOut();
		$('.main-mid>ul>li').eq(index).addClass('changeIntro').siblings().removeClass('changeIntro');
		$('.main-mid>ul>li').eq(index).css({"background-color":"#56A7D4"}).siblings().css({"background-color":"#444"})
		
	},function(){
		index = $(this).index();
		timer = setInterval(doShow,2000);
	})
	
	
	//移动显示
	
	$(".main-right .new-dynamic li a").mouseover(function(){
		var title = $(this).attr('title');
		this.backTitle = title;
		$(this).attr('title',"");
		var $tip = $('<div id="showTitle">'+title+'</div>')
		$(document.body).append($tip);
		$tip.show('normal');
		
	}).mousemove(function(ev){
		var e = ev || event;
		var x = e.pageX + 10 + "px";
		var y = e.pageY + 10 + "px";
		$("#showTitle").css({"left":x,"top":y});
		
	}).mouseout(function(){
		$("#showTitle").remove();
		$(this).attr('title',this.backTitle);
		delete this.backTitle;
	})
	
	//底部动画
	$(".main-footer-top>ul>li").click(function(){
		var index = $(this).index();
		$(this)
		.css({"background-color":"red","cursor":"pointer"})
		.siblings()
		.css({"background-color":"#E4E4E4"});
		
		var moveDistance = 775*index*(-1);
		$(".main-footer-img>ul").css({"left":moveDistance+"px"},500);
		
	})
	
	
})















