'use strict';

var $main = $('.teamSidebarContainer_main.teamSidebarContainer_main-wideSidebar');
$.each($('.teamItems .teamItems_element_title a'), function (index, el) {
  var $el = $(el);
  var url = $el.attr('href');

  $.get(url, function (body) {
    $main.append($(body).find('article'));
  });

  $main.find('.teamItems').hide();
});
//# sourceMappingURL=contentscript.js.map
