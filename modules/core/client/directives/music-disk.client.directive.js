(function () {
  'use strict';

  angular.module('core')
    .directive('musicDisk', musicDisk);

  musicDisk.$inject = ['$compile'];

  function musicDisk($compile) {
    var directive = {
      restrict: 'A',
      replace: true,
      link: link
    };

    return directive;

    function link(scope, element, attrs) {
      scope.$watch(attrs.musicDisk, function (s) {
        if (s && s.torrent_type === 'music') {
          var border_color = '#515151';
          if (s.torrent_tags.indexOf('MTV') !== -1) {
            var div1 = angular.element('<div>MTV</div>');
            div1.addClass('music-badge');

            border_color = '#d9534f';
          }

          var cir1 = angular.element('<div></div>');
          cir1.css('border-radius', '50%');
          cir1.css('border', 'solid 2px ' + border_color);
          cir1.css('background-color', '#ddd');
          cir1.css('padding', '1px');
          cir1.css('cursor', 'pointer');
          cir1.attr('title', attrs.alt);

          var cir2 = angular.element('<div></div>');
          cir2.css('border-radius', '50%');
          if (attrs.src) {
            cir2.css('background-image', 'url(' + attrs.src + ')');
          }
          cir2.css('background-size', 'cover');
          cir2.css('background-position', 'center');
          cir2.css('background-repeat', 'no-repeat');
          cir2.css('height', '100%');
          cir2.css('width', '100%');
          cir2.css('padding', '36%');

          var cir3 = angular.element('<div></div>');
          cir3.css('border-radius', '50%');
          cir3.css('background-color', '#ddd');
          cir3.css('height', '100%');
          cir3.css('width', '100%');
          cir3.css('padding', '1px');

          var cir4 = angular.element('<div></div>');
          cir4.css('border-radius', '50%');
          cir4.css('border', 'solid 2px ' + border_color);
          cir4.css('background-color', '#fff');
          cir4.css('height', '100%');
          cir4.css('width', '100%');

          cir1.addClass('music');
          cir1.append(cir2);
          cir2.append(cir3);
          cir3.append(cir4);

          element.parent().append(div1);
          element.replaceWith(cir1);
        }
      });
    }
  }
}());
