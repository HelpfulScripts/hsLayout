/**
 * @ngdoc object
 * @name hsLayout.object.HsTileLayout
 * @requires hsLayout.object.HsLayout
 * @description Extends {@link hsLayout.object.HsLayout HsLayout}.
 * Tile layout fits widgets into equal sized tiles from left to right, and top to bottom.
 * Tiles are arranged in square-like fashion that extend first horizontally, then vertically.
 * The width of the last widget in each row is set to fit the remnaining container width.
 * <h2>cfg options:</h2><pre>
 * </pre>
 * @todo ...
@example
Shows how a tile layout works as the number of tiles grow.
<example module="hsLayout">
    <file name="index.html">
        <div ng-controller="myCtrl" style="height:300px">
            <hs-layout hs-tile hs-fill-last-col>
                <hs-widget ng-repeat="w in widgets" class='repeated-item'>
                    <div>{{w}}</div>
                </hs-widget>
            </hs-layout>
        </div>
    </file>
    <file name="style.css">
        .well       { position: relative; padding:0; }
        hs-layout   { background-color: #fafafa; }
        .hs-widget-pane   { 
            background-color: #ffe; 
            border: 1px solid #888; 
            text-align: center;
        } 
        .repeated-item.ng-enter, .repeated-item.ng-move {
            transition:0.2s linear all;
            opacity:0;
        }
        .repeated-item.ng-enter.ng-enter-active,.repeated-item.ng-move.ng-move-active {
            opacity:1;
        }
    </file>
    <file name="script.js">
        angular.module('hsLayout').controller('myCtrl', ['$scope', '$interval', function myCtrl($scope, $interval){
            var i = -1;
            $interval(function(){
                i++;
                if (i===0) { $scope.widgets = ['first'];}
                else if (i<17)  { $scope.widgets.push(i+''); }
                else { 
                    $scope.widgets = [];
                    i=-1;
                }                
            }, 1000);
        }]);
    </file>
</example>
 */
angular.module('hsLayout').factory('HsTileLayout', ['HsLayout', function HsComponentFactory(HsLayout) {
    "use strict";
    
    return function(fillLastColumn) {
        function setWidgetPos(i, widgets) {
            var units = ['%','%'];
            var widget = widgets[i];
            var pos = [0,0];
            if (i>0) {
                var w = widgets[i-1];
                var wpos = w.calcPos;
                var wsiz = w.calcSize;
                var siz = widget.calcSize;
                units[0] = siz[0].indexOf('px')>0? 'px' : '%';
                units[1] = siz[1].indexOf('px')>0? 'px' : '%';
                pos[0] = parseFloat(wpos[0]) + parseFloat(wsiz[0]);
                pos[1] = parseFloat(wpos[1]);
    
                if (pos[0]+parseFloat(siz[0]) > 100) {
                    pos[0] = 0; pos[1] += parseFloat(wsiz[1]);
                }
            }
            pos[0] += units[0]; pos[1] += units[1];
            return pos;
        }
        
        function setWidgetSize(i, widgets) {
            var root = Math.sqrt(widgets.length);
            var rows = parseInt(Math.round(root));
            var cols = parseInt(root);
            if (root > cols) { cols++; }
            var size = [parseInt(100/cols), parseInt(100/rows)];
            
            // if last col: adjust width to remainin gsize
            if (fillLastColumn) {
                if (i%cols === cols-1 || i === widgets.length-1) {
                    var i0 = Math.floor(i/cols)*cols;
                    size[0] = 100;
                    for (var w=i0; w<i; w++) {
                        size[0] -= parseInt(widgets[w].calcSize[0]); 
                    }
                }
            }
            size[0] += '%'; size[1] += '%';
            return size;
        }
        
        var obj = new HsLayout("HsTileLayout");
        obj.setWidgetPos  = setWidgetPos;
        obj.setWidgetSize = setWidgetSize;
        return obj;
    };
}]);

