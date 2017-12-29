/* 
 * The following content was designed & implemented under AlexSeif.com
 */


(function ($) {
  Drupal.behaviors.alxInfiniteScroll = {
    attach: function(){
      $('#content').cleverInfiniteScroll({
        contentsWrapperSelector: '#content',
        contentSelector: '.content',
        nextSelector: '.flippy .next a',
        loadImage: ''
      });
    }
  }
})(jQuery);
