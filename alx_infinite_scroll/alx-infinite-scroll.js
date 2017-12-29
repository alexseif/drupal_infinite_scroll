/* 
 * The following content was designed & implemented under AlexSeif.com
 */


//function alx_infinite_scroll_ajax_load() {
(function ($) {
  $('#content').cleverInfiniteScroll({
    contentsWrapperSelector: '#content',
    contentSelector: '.content',
    nextSelector: '.flippy .next a',
    loadImage: ''
  });
})(jQuery);

//}