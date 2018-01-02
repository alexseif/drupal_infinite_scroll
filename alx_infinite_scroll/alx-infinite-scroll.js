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
                loadImage: drupal_get_path('module', 'alx_infinite_scroll') + '/images/ajax-loader.gif'
            });
        }
    }
})(jQuery);
