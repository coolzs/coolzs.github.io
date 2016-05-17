
    $(function(){
	   var index=4;
	   var z_index=100;
	   var timer;
	   function pic_show(){
		  z_index++;
		  $('.banner ol li').eq(index).addClass('current').siblings().removeClass();
		  $('.banner ul li').eq(index).css({left:1200,'z-index':z_index}).stop().animate({left:0},800);
	   }
	   $('.banner ol li').mouseover(function(e) {
          index=$(this).index();
		  pic_show();
       });
	   clearInterval(timer);
	   timer=setInterval(function(){
	        index++;
			if(index>4){
		        index=0;
			}
			pic_show();
	   },2000);
	   //鼠标移到焦点图停止播放，离开继续播放；
	   $('.banner').hover(function(e) {
            clearInterval(timer);
       },function(e){
		    clearInterval(timer);
			timer=setInterval(function(){
	        index++;
			if(index>4){
		        index=0;
			}
			pic_show();
	   },2000);
	   });
	   //上一张下一张功能；
	   $('.banner .prev').click(function(e) {
		    index--;
            if(index<0){
				index=4;
			}
			pic_show();
       });
	   $('.banner .next').click(function(e) {
            index++;
			if(index>4){
				index=0;
			}
			pic_show();
       });
    })
	//实现侧边导航栏;
	var is_hidden=true;
	$(function(){
	   $('.site-nav span').click(function(e) {
		   if(is_hidden==true){
			    $(this).html('关闭导航栏>>');
                $('.site-nav').animate({right:0},800);
				is_hidden=false;
		   }else{
		        $(this).html('打开导航栏<<');
				$('.site-nav').animate({right:-130},800);
				is_hidden=true;
		   }
		  
       });
	})
    //实现无缝动画的功能；
	$(function(){
	  $('.all span').hide();
	  var index=0;
	  var timer;
	  var ul_left=0;
	  timer=setInterval(function(){
		  ul_left-=3;
		  if(ul_left <-3000){
		     ul_left=0;
		  }
		  $('.all ul').css({left:ul_left});  
	  },30);
	  //鼠标移到其上突出显示；
	  $('.all ul li').hover(function(e) {
          $(this).fadeTo(0,1).siblings().fadeTo(500,0.4);
      },function(e) {
          $('.all ul li').fadeTo(0,1);
      });
	  //鼠标移上的时候，清除定时器，同时显示上一张与下一张的按钮；
	  //鼠标离开的时候，继续动画，同时隐藏张一张与下一张的按钮；
	  $('.all').hover(function(e) {
          clearInterval(timer);
		  $('.all span').fadeTo(500,1);
      },function(e){
		  $('.all span').fadeTo(500,0);
		  clearInterval(timer);
		  timer=setInterval(function(){
		    ul_left-=3;
			if(ul_left<-3000){
			  ul_left=0;
			}
			$('.all ul').css({left:ul_left});
		  },30)
	  });
	  //实现上一张下一张效果；
	  $('.all .prev').click(function(e) {
			index--;
			if(index<0){
				index=4;
			}
			$('.all ul').stop().animate({left:-index*600},800);
      });
	  $('.all .next').click(function(e) {
           index++;
		   if(index>4){
			   index=0;
		   }
		   $('.all ul').stop().animate({left:-index*600},800)  
      });
	  
	})
     //实现导航栏效果焦点图；
	 $(function(){
		 var pics=['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg'];
        $('.all-container .nav li').each(function(index, element) {
            $(element).css({'background-image':'url(images/03/'+pics[index]+')'});
        });
		$('.nav-bg').stop().fadeTo(500,0.3);
		$('.all-container .nav li').mouseover(function(e) {
            $(this).children().stop().animate({right:0},500);
        }).mouseout(function(e) {
             $(this).children().stop().animate({right:'-100%'},500);
        });;
	 })
    //实现悬浮小广告功能
	$(function(){
	var num1=($(window).height()-$('div.ad').height())/2;
	var timer;
	function ad_show() {
		ad_top=$(window).scrollTop()+num1;
        $('div.ad').stop().animate({'top':ad_top},800);
    }
	$(window).scroll(function(){
	    ad_show();
	});
	//点击按钮，关闭悬浮小广告,时隔3秒后自动弹出小广告；
	$('.ad span').click(function(e) {
        $(this).parent().hide(800);
		timer=setTimeout(function(){
		  $('div.ad').stop().slideDown(500);
		},3000);
    });	
   })
   //donghua里面的焦点图；
    $(function(){
	      var index2=0;
		  var z_index2=100;
		  $('.con-all span').fadeTo(500,0.5);
		  $('.con-all ol li').mouseover(function(e) {
			  index2=$(this).index();
			  //角标的工作，显示当前状态的脚标；
			  $(this).addClass('current').siblings().removeClass('current');
			  z_index2++;
			  //显示对应的图片功能；
			  $('.con-all ul li').eq(index2).css({left:600,'z-index':z_index2}).stop().animate({left:0},500);
		  });
		  //上一张与下一张功能的实现；
		  $('.con-all .btn-prev').click(function(e) {
			  index2--;
			  if(index2<0){
				  index2=5;
			  }
			  //显示当前状态的角标；
			  $('.con-all ol li').eq(index2).addClass('current').siblings().removeClass('current');
			  //显示对应的图片；
			   z_index2++;
			  $('.con-all ul li').eq(index2).css({left:600,'z-index':z_index2}).stop().animate({left:0},500);
		  });
		  $('.con-all .btn-next').click(function(e) {
			  index2++;
			  if(index2>5){
				  index2=0;
			  }
			   //显示当前状态的角标；
			  $('.con-all ol li').eq(index2).addClass('current').siblings().removeClass('current');
			  //显示对应的图片；
			   z_index2++;
			  $('.con-all ul li').eq(index2).css({left:600,'z-index':z_index2}).stop().animate({left:0},500);
		  });
		//设置定时器
			var timer02=null;
			clearInterval(timer02);
			timer02=setInterval(function(){
			   index2++;
			   if(index2>5){
				index2=0;
			   }
			   //显示当前状态的角标；
			  $('.con-all ol li').eq(index2).addClass('current').siblings().removeClass('current');
			  //显示对应的图片；
			   z_index2++;
			  $('.con-all ul li').eq(index2).css({left:600,'z-index':z_index2}).stop().animate({left:0},500);
			},2000);
		//清除定时器；
			$('.con-all').mouseover(function(event) {
			  clearInterval(timer02);
			}).mouseout(function(event) {
			  clearInterval(timer02);
			  timer02=setInterval(function(){
			   index2++;
			   if(index2>5){
				index2=0;
			   }
			   //显示当前状态的角标；
			  $('.con-all ol li').eq(index2).addClass('current').siblings().removeClass('current');
			  //显示对应的图片；
			   z_index2++;
			  $('.con-all ul li').eq(index2).css({left:600,'z-index':z_index2}).stop().animate({left:0},500);
			  },2000);
			});;
	  /********************************** .选项卡 ******************************************/
	  $('.tab-title li').mouseover(function(e) {
		  var index=$(this).index();
          $(this).addClass('on').siblings().removeClass('on');
		  $('.tab-con ul').eq(index).css({display:'block'}).siblings().stop().hide();
      });
	 /***********************************  无缝动画改编  ***********************************/
	 var index3=0;
	 var ul_left;
	 $('.con-mid-con .btn-right').click(function(e) {
        index3++;
		if(index3>3){
		   index3=0;
		}
		ul_left=-index3*1200;
		$('.con-mid-con ul').animate({left:ul_left},800);
		
     });
	  $('.con-mid-con .btn-left').click(function(e) {
        index3--;
		if(index3<0){
		   index3=3;
		}
		ul_left=-index3*1200;
		$('.con-mid-con ul').animate({left:ul_left},800);
		
     });
	  })
	 /********************************  竖版手风琴效果  ************************/
    $(function(){
		$('.accordion li').mouseover(function(e) {
            $(this).addClass('current').siblings().removeClass('current');
        });
	})