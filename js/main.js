'use strict';

$(function () {
  let tabs = $('.tab');
  $('.tab').on('click', function () {
    $('.active').removeClass('active');
    $(this).addClass('active');
    const index = tabs.index(this);
    $('.information_content').removeClass('show').eq(index).addClass('show');
  });
});

// modal
$(function () {
  $('.reserve').click(function () {
    $('.modal').fadeIn(100);
    $('.modal__close,.modal__mask').click(function () {
      $('.modal').fadeOut(100);
    });
    return false;
  });
});

// カレンダー(flatpickr)
flatpickr("#flatpickr", {
  locale: "ja",
  minDate: "today",
  mode: "multiple"
});

// tab
$(function () {
  $('.info__tab').click(function () {

    let index = $('.info__tab').index(this);

    $('.information__content').removeClass('show').eq(index).addClass('show');
  });
});

$(function() {
  $(window).scroll(function(){
    if($(window).scrollTop() > 0) {
      $(".header").addClass('is-show');
    }else {
      $(".header").removeClass('is-show');
    }
  });
});


/*$(function() {
  //画像の枚数
  let count = $('.mv_item').length;

  //現在表示されている画像
  let current = 1;

  //次に表示する画像
  let next = 2;

  //フェードイン、アウトのインターバル
  let interval = 3000;

  //フェードイン、アウトのスピード
  let duration = 500;

  //タイマー用の変数
  let timer;

  //1番目の要素以外を非表示
  $('.mv__item:not(:first-child)').hide();

  timer = setInterval(slideTimer, interval);

  function slideTimer() {
    //1番目をフェードアウト
    $('.mv__item:nth-child(' + current + ')').animate({
      transform: 'scale(1.1)'
    }, 2000).fadeOut(duration);

    //次の画像をフェードイン
    $('.mv__item:nth-child(' + next + ')').fadeIn(duration);
  }
});
*/