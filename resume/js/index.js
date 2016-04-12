
	$(function(){
		$('#three ul li:odd').css({'margin-right':0});
		/********#header nav 的过度动画 *********/
        $(window).scroll(function(e) {
			var window_top=$(window).scrollTop();
            if(window_top>0){
			   $('#one h2').addClass('oneTitle');
			   $('#one header p').addClass('oneP');
			}else{
			  $('#one h2').removeClass('oneTitle');
			  $('#one header p').removeClass('oneP');
			}

			if(window_top>$('#two').offset().top){
              $('#two li img').addClass('scroll');
			}else{
		      $('#two li img').removeClass('scroll');
			}

			if(window_top>$('#four ul li:last ').offset().top){
			  $('#five  h2 span').addClass('spanhover');
			}else{
			  $('#five  h2 span').removeClass('spanhover');
			}
        });
		 /*********点击导航，滑动到相应位置**************/
		   $('#header ul li').click(function(e) {
			  var indexH=$(this).index();
			  var slideHeight=$('.main section').eq(indexH).offset().top;
			  
              $('html,body').stop().animate({scrollTop:slideHeight},1000);

           });
           $('#header ul li').eq('4').click(function(event) {
           	  var con_width=$('#five .container').width();
              $('#five .passage1').css({left:-con_width}).stop().animate({left:0},1000).animate({left:0},1000).animate({top:'50%'},800).animate({top:0},800);
              $('#five .passage2').css({right:-con_width}).stop().animate({right:0},1000).animate({right:0},1000).animate({top:0},800).animate({top:'50%'},800);
           });
		 /*********鼠标移到导航上，显示色块儿******/
		   // var Abackcolors=['#F33','#8080FF','#F6C','#FF3','#ccc','#FFA54A'];
		   var Abackcolors=['#E52473','#8080FF','#F6C','#FF3','#ccc','#FFA54A'];
		   var Acolors=['#90D2E8','#F3E633','#CFCBCA','#55B6CD','#8D3FB9','#387D1F'];
		   $('#header ul li i').each(function(index, element) {
              $(element).css({background:Abackcolors[index]});
           });

		   $('#header ul li').mouseenter(function(e) {
		   	  var index02=$(this).index();
              $(this).children('i').stop().animate({bottom:0},200);
			  $(this).siblings().children('i').stop().animate({bottom:'-3em'},200);
			  $(this).children('span').css({color:Acolors[index02]});
			  $(this).siblings().children('span').css({color:'#fff'});
           })/*.mouseleave(function(e) {
              $(this).children('i').stop().animate({bottom:'-3em'},200);
           })*/;
          /************手机模式的导航栏*************/
           $('.mobileNav ul li i').each(function(index, element) {
              $(element).css({background:Abackcolors[index]});
           });

		   $('.mobileNav ul li').mouseenter(function(e) {
		   	  var index02=$(this).index();
              $(this).children('i').stop().animate({bottom:0},200);
			  $(this).siblings().children('i').stop().animate({bottom:'-3em'},200);
			  $(this).children('span').css({color:Acolors[index02]});
			  $(this).siblings().children('span').css({color:'#fff'});
           })
		    //  鼠标点击nav-toggle ,显示nav导航
		   $('#nav-toggle').click(function(e) {
              $('.mobileNav').slideToggle(400);
           });
		   $('.mobileNav ul li').click(function(event) {
		   	  $('.mobileNav').slideUp();
		   });
		   //点击导航，滑动到相应位置
		   $('.mobileNav ul li').click(function(e) {
			  var indexH=$(this).index();
			  var slideHeight=$('.main section').eq(indexH).offset().top;
              $('html,body').stop().animate({scrollTop:slideHeight},1000);
           });
		/******** section three    *********/
		//鼠标移到图片上时，出现半透名效果；
		   $('#three .pic').hover(function(e) {
	            $(this).children('.pic-box').stop().fadeTo(500,0.6);
				$(this).children('.pic-box-text').stop().fadeTo(500,1);
	       },function(){
			   $(this).children('.pic-box,.pic-box-text').stop().fadeTo(500,0);
		   });
		//鼠标点击文字时，会出现模态窗口;
		var tag;
		var index=0;
		$('#show li').click(function(e) {
	       index=$(this).index();
			var bigpic =$('#show li').eq(index).find('.pic-box-text').siblings('img').attr('src');
			tag =$('<img src="'+bigpic+'" width="100%" height="auto"  />');
			$('.win-up').append(tag);
			$('.win-down').stop().fadeTo(500,0.6);
			$('.win-up').stop().fadeTo(500,1);
			$('.win-up .next,.win-up .prev').fadeTo(500,0.3);
	    });
		$('.win-up .prev').click(function(e) {
	        index--;
			if(index<0){
				index=$('#show li').length-1;
			}
			$('.win-up img').remove();
			var pic=$('#show li').eq(index).find('img').attr('src');
			var tag1=$('<img src="'+pic+'" width="100%" height="auto"  />');
			$('.win-up').append(tag1);
			
	    });
		$('.win-up .next').click(function(e) {
	        index++;
			if(index>$('#show li').length-1){
				index=0;
			}
			$('.win-up img').remove();
			var pic=$('#show li').eq(index).find('img').attr('src');
			var tag1=$('<img src="'+pic+'" width="100%" height="auto"  />');
			$('.win-up').append(tag1);
			
	    });
		$('.win-up .closer').click(function(e) {
			$('.win-up img').remove();
	        $('.win-down,.win-up').fadeOut(300);
	    });	
	    /*********section two music   *********/
		var indexM;
	    $('.music li .start').click(function(e) {
            indexM=$(this).parent().index();
           //排他性；将在播放的所有音乐关闭，在播放自己；
            for(var i=0;i<$('#music audio').length;i++){
                $('#music audio').eq(i)[0].load();
            }
			$('#music audio').eq(indexM)[0].play();
		    $('.music li img').removeClass('cd');
		    //判断当音乐结束时，光盘不在旋转,删除类cd；
		    if($('#music audio').eq(indexM)[0].ended==false){
                //使光盘旋转，添加类cd；
		        $(this).siblings('img').addClass('cd');
		    }else{
		    	$(this).siblings('img').removeClass('cd');
		    }

        });
		$('.music li .closer').click(function(e) {
            indexM=$(this).parent().index();
			$('#music audio').eq(indexM)[0].pause();
			//使光盘停止旋转，删除类
			$(this).siblings('img').removeClass('cd');
        });
        /******* section six  ******/
        $('.shoufengqin ul li').mouseover(function(event) {
     	    $(this).stop().animate({width:'27.5em'}, 500).siblings().stop().animate({width:'4.22em'}, 500);
     		$(this).children('span').show();
     	}).mouseout(function(event) {
     		$('.shoufengqin ul li').stop().animate({width:'8.875em'}, 500);
            $(this).children('span').hide();
     	});
     	/****** section four  评论发布****/
        
		$('.comment button').click(function(e) {
			if($('.comment textarea').val()==''){
				alert('你输入的内容为空！')
			}else{
            var con=$('.comment textarea').val();
			var contag=$('<li>'+con+'</li>');
			$('.comment ul').prepend(contag);
			$('.comment textarea').attr('value','');
			$('.comment ul li:first').hide().slideDown(500);
			}
        });
	});

    $(function(){
		var timer = null;
		var num = 0;//灵魂所在
		var fnTimer = function(){
			num++;
			if(num == $('.all ul li').length){
				num = 0;
			}
			$('.all ul li:eq('+num+')').hide().stop().fadeIn().siblings().hide();
			$('.all ol li:eq('+num+')').addClass('current').siblings().removeClass('current');
		}
		$('.all ul li:first').show();
		$('.all ol li').mouseover(function(e) {
            $(this).addClass('current').siblings().removeClass('current');
			var thisIndex = $(this).index();
			$('.all ul li:eq('+thisIndex+')').hide().stop().fadeIn().siblings().hide();
			num = thisIndex;
        })
		timer = setInterval(fnTimer,3000);
		$('.all').mouseover(function(e) {
            clearInterval(timer);
        }).mouseout(function(e) {
			clearInterval(timer);
			timer = setInterval(fnTimer,3000);
        });
	})
	

