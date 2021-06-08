$(function(){
  // index.html로 페이지이동
  $('.close-btn-page').click(function(){
      location.href = "Artworks-gallery.html";
  });
  $('.logo').click(function(){
    window.location.href = "landing.html";
  });

});

window.onload = function(){
  // 노래 재생
  var audio = document.getElementById("audio-item");

  var activeBtn = $('.audio-btn');
  var activeBlur = $('.audio-btn-effect-1');
  var unactiveTooltip = $('.tooltip');

 $('.audio-btn').click(function(){
   if(audio.paused){
      audio.play(); /* 노래재생 */
      audio.volume = 0.2; /* 볼륨 설정 */
        
      /* 버튼 활성화 */
      activeBtn.toggleClass('activeBtn');
      activeBlur.toggleClass('activeBlur');

      unactiveTooltip.toggleClass('unactiveTooltip');
   }else{
      audio.pause(); /* 노래정지 */

      /* 버튼 활성화 해제*/
      activeBtn.removeClass('activeBtn');
      activeBlur.removeClass('activeBlur');

      unactiveTooltip.removeClass('unactiveTooltip');
   }
  })

  // 노래가 다끝나면 툴팁 활성화, 버튼 디폴트로
  audio.addEventListener('ended', function() { 
    /* 버튼 활성화 해제*/
      activeBtn.removeClass('activeBtn');
      activeBlur.removeClass('activeBlur');
      
      unactiveTooltip.removeClass('unactiveTooltip');
    });


}

//두장짜리 슬라이드 이동버튼.,,
$(function(){
  $('.btn2-bg-2').click(function(){
    $('.pages2-bg').css('transform','translate(-50%)');
    $(this).addClass('indicatorFocus');
  });
  $('.btn2-bg-1').click(function(){
    $('.pages2-bg').css('transform','translate(0%)');
    $(this).addClass('indicatorFocus');
  });
})
$(function(){
  $('.btn2-goal-2').click(function(){
    $('.pages2-goal').css('transform','translate(-50%)');
    $(this).addClass('indicatorFocus');
  });
  $('.btn2-goal-1').click(function(){
    $('.pages2-goal').css('transform','translate(0%)');
    $(this).addClass('indicatorFocus');
  });
})

//세장짜리,,
$(function(){
  $('.btn3-2').click(function(){
    $('.pages3').css('transform','translate(-33.3%)');
    $(this).addClass('indicatorFocus');
  });
  $('.btn3-3').click(function(){
    $('.pages3').css('transform','translate(-66.7%)');
    $(this).addClass('indicatorFocus');
  });
  $('.btn3-1').click(function(){
    $('.pages3').css('transform','translate(0%)');
    $(this).addClass('indicatorFocus');
  });
})

//네장,,
$(function(){
  $('.btn4-2').click(function(){
    $('.pages4').css('transform','translate(-25%)');
    $(this).addClass('indicatorFocus');
  });
  $('.btn4-3').click(function(){
    $('.pages4').css('transform','translate(-50%)');
    $(this).addClass('indicatorFocus');
  });
  $('.btn4-4').click(function(){
    $('.pages4').css('transform','translate(-75%)');
    $(this).addClass('indicatorFocus');
  });
  $('.btn4-1').click(function(){
    $('.pages4').css('transform','translate(0%)');
    $(this).addClass('indicatorFocus');
  });
})







// 공유버튼 펼쳐지기 효과
$(function(){
  $('.share-btn').click(function(){
    $('.method').toggleClass('activeShare');
    $('.method-list').toggleClass('activeShare');
  })
})






// 스크롤 수치 아는방법
// document.addEventListener('scroll', function() {
//   var currentScrollValue = document.documentElement.scrollTop;
//   console.log('currentScrollValue is ' + currentScrollValue);
// });






// 스크롤 시 네임카드 뜨기
  // 뜨긴 하지만 움직일 때마다 실행된다, .one()함수 쓰면 개발자 도구에서만 보이게됨. 왜 안되는거지 화나네;;명함뜨면 뒤에 스크롤 멈추기도 해야함
$(document).ready(function(){

  var headerEnd = $(".hero-artwork-img").height();
  var contentsEnd = $(".contents").height(); 
    //.contents 의 높이를 구하기

  $('.business-card-bg').hide();
  //스크롤시 나타날 객체 미리 숨기기

  $(window).scroll(function(){		// 윈도우 스크롤 기능 작동
      var rollIt = $(this).scrollTop() >= contentsEnd + headerEnd;
      // 스크롤의 정도가 contentsEnd + headerEnd 의 값을 넘었을 때

    if(rollIt){	
      $('.business-card-bg').fadeIn();
      $('.business-card-bg').addClass('open');
      $('.container').addClass('blur-it');
    }
  })
  
})
  
$('.close-btn-card').click(function(){
      $('.business-card-bg').removeClass('open');
      $('.container').removeClass('blur-it');
      $('.business-card-bg').fadeOut();
    })


  
//버튼 클릭 되어 있는거 

// $(function{
//   $('.btn2-goal-1').click();
// });


