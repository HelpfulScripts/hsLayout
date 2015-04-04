/**
 * @ngdoc directive
 * @name hsWidgets.directive:hsDashboard
 * @restrict EA
 * @element ANY
 * @description hs-dashboard directive. Establishes a space in which {@link hsWidgets.directive:hsWidget widgets} live.
 * Usage:
 *  <hs-dashboard hs-unit='50'>
 *      <hs-widget hs-size='[2,2]'> content </hs-widget>
 *      <hs-widget hs-size='[2,2]' ng-include'content.html'></hs-widget>
 *  </hs-dashboard>
 *
 */
angular.module('hsWidgets').directive('hsDashboard', function() {

    function registerWidget(widget) {
        this.widgets.push(widget);
        var pos = [0,0];
        if (this.widgets.length > 1) {
            var w = this.widgets[this.widgets.length-2];
            var wpos = w.pos;
            var wsiz = w.size;
            var siz = widget.size;
//              var wpos = [parseInt(w.pos[0].replace('%','')), parseInt(w.pos[1].replace('%',''))];
//              var wsiz = [parseInt(w.size[0].replace('%','')), parseInt(w.size[1].replace('%',''))];
//              var siz = [parseInt(widget.size[0].replace('%','')), parseInt(widget.size[1].replace('%',''))];
            pos[0] = wpos[0] + wsiz[0];
            pos[1] = wpos[1];

            if (pos[0]+siz[0] > 100) {
                pos[0] = 0; pos[1] += wsiz[1];
            }
        }
        setTimeout(function() {
            var pane = $(widget.elem[0]).find('.hs-widget-pane');
            if (pos[0]!==0) { pane.css('margin-left', '0'); }
            if (pos[1] > 0) { pane.css('margin-top', '0'); }
        }, 1000);

        return pos;
    }

    return {
        restrict: 'EA',
        replace: false,
        template: '',
        controller: function($scope, $element) {
            this.registerWidget = registerWidget;
            this.widgets = [];
            var e = $($element[0]);
            this.width  = parseInt(e.css('width'));
            this.height = parseInt(e.css('height'));
        },
        link: function link(/*scope, elem, attrs*/) {
        }
    };
});

