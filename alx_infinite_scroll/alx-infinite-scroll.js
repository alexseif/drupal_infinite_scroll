/* 
 * The following content was designed & implemented under AlexSeif.com
 */


(function ($) {
    Drupal.behaviors.alxInfiniteScroll = {
        attach: function () {
            $('.side_content').cleverInfiniteScroll({
                contentsWrapperSelector: '.side_content',
                contentSelector: '.node-news-article',
                nextSelector: '.flippy .next a',
                loadImage: settings.alx_infinite_scroll.loaderImgPath
            });
        }
    }
})(jQuery);
