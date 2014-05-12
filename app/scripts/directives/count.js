'use strict';

angular.module('playoutsApp')
  .directive('count', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      scope: {
      	counter: '='
      },
      link: function postLink(scope, element, attrs) {
        element.text(counter);
      }
    };
  });
