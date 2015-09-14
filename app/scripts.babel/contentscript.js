'use strict';

var $main = $('.teamSidebarContainer_main.teamSidebarContainer_main-wideSidebar');
$.each($('.teamItems .teamItems_element_title a'), (index, el) => {
  var $el = $(el);
  var url = $el.attr('href');

  $.get(url, body => {
    $main.append(
      $(body).find('article')
    )
  });

  $main.find('.teamItems').hide();
});
