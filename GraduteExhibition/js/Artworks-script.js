$(function(){
  // index.html로 페이지이동
  $('.work').click(function(){
      location.href = "Artworks-detail.html";
  });
  $('.logo').click(function(){
    window.location.href = "landing.html";
});

});

// 윈도우 스크롤에 따라 반원 색 채워지고 빠지기
// $(window).scroll(function(){		
//   var firstFill = $(this).scrollTop() >= 150;
//   var secondFill = $(this).scrollTop() >= 400;
//   var thirdFill = $(this).scrollTop() >= 700;
//   var fourthFill = $(this).scrollTop() >= 1200;
//   var fifthFill = $(this).scrollTop() >= 1550;
    

//   if(firstFill){$(".filled-1st").css("background-color", "#1BA965");
//   }else{
//     $(".filled-1st").css("background-color", "transparent");
//   }

//   if(secondFill){$(".filled-2nd").css("background-color", "#FF4D25");
//   }else{
//     $(".filled-2nd").css("background-color", "transparent");
//   }

//     if(thirdFill){$(".filled-3rd").css("background-color", "#4CABE9");
//   }else{
//     $(".filled-3rd").css("background-color", "transparent");
//   }

//     if(fourthFill){$(".filled-4th").css("background-color", "#8000FF");
//   }else{
//     $(".filled-4th").css("background-color", "transparent");
//   }
//     if(fifthFill){$(".filled-5th").css("background-color", "#1BA965");
//   }else{
//     $(".filled-5th").css("background-color", "transparent");
//   }
// })

// $(".filled-1st, .filled-2nd, .filled-3rd, .filled-4th, .filled-5th").css("transition", "all 1s ease-in-out");



// // 스크롤 수치 아는방법
// document.addEventListener('scroll', function() {
//   var currentScrollValue = document.documentElement.scrollTop;
//   console.log('currentScrollValue is ' + currentScrollValue);
// });