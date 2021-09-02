$(function () {
  var SCROLL_SPEED = 500;
  var BACKTOTOP_VISIBLE_POSITION = 1000;
  var FADEIN_START_POSITION = 150;

  // ナビゲーションバー
  $('.navbar-nav li a').click(function () {
    // クリック時にドロップダウンを閉じる
    $('.navbar-collapse').removeClass('show');
  });

  // ナビゲーションリンク
  $('nav a[href^="#"]').click(function () {
    // リンク先へスクロールする
    var href = $(this).attr('href');
    var target = $(href == '#' || href == '' ? 'html' : href);
    var position = target.offset().top;
    var navbarHeight = $('header .navbar').height();
    $('html, body').animate({ scrollTop: position - navbarHeight }, SCROLL_SPEED);
    return false;
  });

  // フェードインアニメーション
  $(window).scroll(function () {
    // 既定の位置を超えてスクロールされたときにフェードインする
    $('.fadein').each(function () {
      var windowScroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var position = $(this).offset().top;
      if (FADEIN_START_POSITION < windowScroll + windowHeight - position) $(this).addClass('scrollin');
    });
  });

  // トップへ戻るボタン
  var backtotop = $('.backtotop');
  backtotop.hide();
  $(window).scroll(function () {
    // スクロール位置に応じてフェードイン、フェードアウトする
    var windowScroll = $(window).scrollTop();
    if (BACKTOTOP_VISIBLE_POSITION < windowScroll) backtotop.fadeIn();
    else backtotop.fadeOut();
  });
});
