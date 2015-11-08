/**
 * @ngdoc directive
 * @name hsLayout.directive:hsLayout
 * @restrict E
 * @element ANY
 * @description hs-layout directive. Establishes a space in which 
 * {@link hsLayout.directive:hsWidget widgets} live.
#Attributes
All attributes are optional except where marked as required. For emphasis, optional attributes
are wrapped in square brackets: `[...]`. When optional, the default value is <u>underlined</u>.
- [**hs-type** = '<u>tiles</u> | columns | rows | relative']
    sets the type of layout. For options see below
- [**hs-tiles**] alternative to `hs-type=tiles`; creates a {@link hsLayout.object.HsTileLayout tile layout}
- [**hs-columns='[<i>Array</i>, ]'**] 
    Please see {@link hsLayout.object.HsColumnsLayout columns layout} on avaliable options for `Array`
- [**hs-rows='[<i>Array</i>, ]'**] 
    Please see {@link hsLayout.object.HsRowsLayout rows layout} on avaliable options for `Array`
- [**hs-relative**] create a {@link hsLayout.object.HsRelativeLayout relative layout}
- [**hs-fill-last-col**] applies to tile layout only; if specified, the last colum of tiles are stretched horizontally 
    to fill the remaining space.

@example
#Autmatic layout of widgets
<example module="hsLayout">
    <file name="index.html">
        <div style="height: 300px; padding:0;">
            <hs-layout hs-fill-last-col>
                <hs-widget>1</hs-widget>
                <hs-widget>2</hs-widget>
                <hs-widget>3</hs-widget>
            </hs-layout>
        </div>
    </file>
    <file name="style.css">
        .well       { position: relative; }
        hs-layout   { background-color: #fafafa; }
        .hs-widget-pane   { 
            background-color: #ffe; 
            border: 1px solid #888; 
            text-align: center;
        }
        hs-widget:first-of-type>.hs-widget-pane { background-color: #eef; }
    </file>
</example>
#Manual layout of widgets
<example module="hsLayout">
    <file name="index.html">
        <div style="height: 300px; padding:0;">
            <hs-layout class='myHeight'>
                <hs-widget hs-size='["50%", "50%"]'>
                    <br>1
                </hs-widget>
                <hs-widget hs-size='["50%", "50%"]'>
                    <br>2
                </hs-widget>
                <hs-widget hs-pos='["25%", "40%"]' hs-size='["50%", "60%"]'>
                    <br>3
                </hs-widget>
            </hs-layout>
        </div>
    </file>
    <file name="style.css">
        .well       { position: relative; }
        hs-layout   { background-color: #fafafa; }
        .hs-widget-pane   { 
            background-color: #ffe; 
            border: 1px solid #888; 
            text-align: center;
        }
        hs-widget:first-of-type>.hs-widget-pane { background-color: #eef; }
    </file>
</example>
 */
angular.module('hsLayout').directive('hsLayout', ['HsTileLayout', 'HsColumnsLayout', 'HsRowsLayout', 'HsRelativeLayout', 
                function(HsTileLayout, HsColumnsLayout, HsRowsLayout, HsRelativeLayout) {
    "use strict";
    
    function getChildren(elem) {
        var w = $(elem.children()).children();
        return w;
    }
    
    return {
        restrict: 'E',
        replace: false,
        transclude: true,
        template: '<div class="hs-layout-container" ng-transclude></div>',
        controller: function($scope, $element) {
            $scope.layItOut = function() { 
                if ($scope.layout) { $scope.layout.layItOut(getChildren($element)); }
/*                
                if (!$scope.$parent || !$scope.$parent.layItOut) {
                    var px = Math.max(parseInt($element.css('width')), parseInt($element.css('height')));
                    px /= 30;
var parent = $($element).parent(); 
console.log(parent);
console.log('h=' + parent.css('width') + ', ' + parent.css('top') + ', ' + parent.css('bottom') + ', ' + parent.css('left') + ', ' + parent.css('right') + ', ' + px);                    
                    $($element).css('font-size', px+'px');
                } 
*/                
            };
        },
        link: function link(scope, elem, attrs) {
            var type = 'tiles';
            var dims = [];
            if (attrs.hsType !== undefined) { 
                type = attrs.hsType; 
            } else if (attrs.hsTiles !== undefined) { 
                type = 'tiles'; 
            } else if (attrs.hsRelative !== undefined) { 
                type = 'relative'; 
            } else if (attrs.hsColumns !== undefined) {
                type   = 'columns';
                dims = attrs.hsColumns || '[]';
            } else if (attrs.hsRows !== undefined) {
                type   = 'rows';
                dims = attrs.hsRows || '[]';
            }
            var fillLastColumn = (attrs.hsFillLastCol !== undefined);
            var lm;
            switch(type) {
                case 'columns': lm = new HsColumnsLayout(dims); break;
                case 'rows':    lm = new HsRowsLayout(dims); break;
                case 'tiles':   lm = new HsTileLayout(fillLastColumn); break;
                case 'relative':lm = new HsRelativeLayout(); break;
                default:        lm = new HsTileLayout(fillLastColumn);
            }
            scope.layout = lm;
            var base = scope;
//            while (base.$parent && base.$parent.layItOut) { base = base.$parent; }
            base.layItOut();
        }
    };
}]);

