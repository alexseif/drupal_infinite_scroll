/* 
 * The following content was designed & implemented under AlexSeif.com
 */


function alx_infinite_scroll_ajax_load() {
  jQuery('#content').cleverInfiniteScroll({
    contentsWrapperSelector: '#content',
    contentSelector: '.content',
    nextSelector: '#next',
    loadImage: ''
  });
//  jQuery("#ajax-target").load("/node/get/ajax/2");
}