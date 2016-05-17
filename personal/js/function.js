// JavaScript Document
$(function(){
	var index=0;
     $('.dian-btn li').mouseover(function(e) {
		 alert(1);
        index=$(this).index();
		//角标的工作，显示当前状态的脚标；
		$(this).addClass('current').siblings().removeClass('current');
		//显示对应的图片功能；
		$('.J-promo').animate({left:-index*312},500);
    });






})