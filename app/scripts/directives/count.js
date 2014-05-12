'use strict';

angular.module('playoutsApp')
  .directive('count', function () {
    return {
      template: '<div><div class="watch1"></div><div class="watch2"></div></div>',
      restrict: 'E',
      scope: {
				counter: '='
      },
      link: function postLink(scope, element, attrs) {
        //element.text(counter);
        //
        scope.$watch('counter', function(newVal, oldVal) {
          element.find('.watch1').text(newVal.count);
        });
        scope.$watch('counter', function(newVal, oldVal) {
          element.find('.watch2').text(newVal.count);
        }, true);
      }
    };
  });
