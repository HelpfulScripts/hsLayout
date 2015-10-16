/**
 * @ngdoc object
 * @name hsLayout.object.HsRowsLayout
 * @requires hsLayout.object.HsLayout
 * @description Extends {@link hsLayout.object.HsLayout HsLayout}.
 * Rows layout divides the container vertically into partitions according to the `Array` specifications. 
 * <h2>cfg options:</h2><pre>
 * </pre>
#Attributes
- **hs-rows='[<i>Array</i>]'**
    create a layout with rows specified by `Array`.
    Elements in `Array` will be used as height indicators for the widgets that are children of this layout. 
    All height have to be specified either in px or in %.
    The following options are supported for `Array`:
    - []: An empty array; all widgets will be evenly spaced across the available height. 
    - [fw]: All widgets have the specified height (in px or %) and will fill the available space with from the top,
        leaving any remaining unused space on the bottom. 
    - [fw,]: Sets the first (top) widget to a height of `fw`.<br>
        if `fw` is specified in %, the remaining n-1 widgets will have equal relative heights of `(100-fw)/(n-1)%`<br>
        if `fw` is specified in px, the remaining n-1 widgets will have their bottom borders at location `i*100/n%`, with i=1...n.
    - [,lw]: Sets the last (bottom) widget to a height of `lw`.<br>
        if `lw` is specified in %, the remaining n-1 widgets will have equal relative heights of `(100-lw)/(n-1)%`<br>
        if `lw` is specified in px, the remaining n-1 widgets will have their top borders at location `i*100/n%`, with i=0...n-1.
    - [fw,,lw]: Sets the first and last widget to a height of `fw`/`lw`.<br> 
        Both have to be specified either in px or in %.<br>
        if the unit is %, the remaining n-2 widgets will have equal relative heights of `(100-lw-fw)/(n-2)%`<br>
        if the unit is px, the remaining n-2 widgets will have their top/bottom borders at location `i*100/n%`.<br>
    - [1w, 2w, , w2, w1]: multiple heights can be specified in uninterrupted sequence both from the top and the bottom. 
See also the description of attribute options in {@link hsLayout.directive:hsLayout hsLayout}
 * @todo ...
@example
#Equal column heights
<example module="hsLayout">
    <file name="index.html">
        <div style="height:300px; padding:0;">
            <hs-layout hs-rows='[,"50px","50px"]'>
                <hs-widget ng-repeat="w in [1,2,3]">
                    {{w}}
                    <br>{{$first? "I fill the remaining space" : "50px"}}
                </hs-widget>
            </hs-layout>
        </div>
    </file>
</example>
<example module="hsLayout">
    <file name="index.html">
        <div style="height:300px; padding:0;">
            <hs-layout hs-rows='[,"20%"]'>
                <hs-widget ng-repeat="w in [1,2,3,4]">
                    {{w}}
                    <br>{{$last? "20%" : "we share the remaining space"}}
                </hs-widget>
            </hs-layout>
        </div>
    </file>
</example>
<example module="hsLayout">
    <file name="index.html">
        <div style="height:300px; padding:0;">
            <hs-layout hs-rows='["30%","20%",]'>
                <hs-widget ng-repeat="w in [1,2,3,4]">
                    {{w}}
                    <br>{{$first? "30%" : (($index==1)?"20%": "we share the remaining space")}}
                </hs-widget>
            </hs-layout>
        </div>
    </file>
</example>
#Nested tile layout inside a column layout
<example module="hsLayout">
    <file name="index.html">
        <div ng-controller="myCtrl" style="height:300px; padding:0;">
            <hs-layout hs-rows='["30px",,"50px"]'>
                <hs-widget>
                    <br>Header:30px
                </hs-widget>
                <hs-layout hs-tiles class='top'>
                    <hs-widget ng-repeat="w in widgets" class='repeated-item'>
                        <br>{{w}}
                    </hs-widget>
                </hs-layout>
                <hs-widget>
                    <br>Footer:50px
                </hs-widget>
            </hs-layout>
         </div>
    </file>
    <file name="script.js">
        angular.module('hsLayout').controller('myCtrl', ['$scope', '$interval', function myCtrl($scope, $interval){
            var i = -1;
            $interval(function(){
                i++;
                if (i===0) { $scope.widgets = ['first'];}
                else if (i<6)  { $scope.widgets.push(i+''); }
                else { 
                    $scope.widgets = [];
                    i=-1;
                }                
            }, 1000);
        }]);
    </file>
    <file name="style.css">
        .well       { position: relative; }
        hs-layout   { background-color: #fafafa; }
        .top .hs-widget-pane {
            background-color: #eef; 
        }
        .hs-widget-pane   { 
            background-color: #ffe; 
            border: 1px solid #888; 
            text-align: center;
        }
    </file>
</example>


 */
angular.module('hsLayout').factory('HsRowsLayout', ['HsLayout', function HsComponentFactory(HsLayout) {
    "use strict";
    
    return function(heights) {
        function layItOut(widgets) {
            var numWidgets = widgets.length;
            var calcHeights = [];
            var i,j;
            var num = numWidgets;
            var max = 100.0;
            for (i=0; i<numWidgets; i++) { 
                $(widgets[i]).css('left', 0);
                $(widgets[i]).css('right', 0);
                if (heights.length === 0) { 
                    calcHeights.push({height:null}); 
                } else if (heights.length === 1) { 
                    calcHeights.push({height:heights[0]}); 
                } else if (i===0 && firstHeightSet) { 
                    calcHeights.push({height:heights[0]}); 
                    num--; max -= heights[0]; 
                } else if (i===numWidgets-1 && lastHeightSet)  { 
                    calcHeights.push({height:heights[heights.length-1]}); 
                    num--; max -= heights[heights.length-1];
                } else if (i<heights.length-1 &&!isNaN(heights[i])) { 
                    calcHeights.push({height:heights[i]}); 
                    num--; max -= heights[i]; 
                } else { calcHeights.push({height:null}); }
            }
            var defHeight;
            var sumHeight = 0;
            if (unit==='%') {
                defHeight = max/num;
                for (i=0; i<numWidgets; i++) { 
                    var height = calcHeights[i].height || defHeight;
                    $(widgets[i]).css('top', sumHeight+'%');
                    sumHeight += height;
                    if (i===numWidgets-1 && calcHeights[i].height == null) { $(widgets[i]).css('bottom', '0%'); }
                                     else { $(widgets[i]).css('height', height+'%'); }
                }
            } else {  // units === px
                defHeight = 100.0/numWidgets;
                var startPattern = true;
                i = 0;
                if (firstHeightSet) { // work forwards through the heights
                    while (i<numWidgets) { // pattern: [n, n, , , n, n]
                        if (startPattern) { // so far, all heights explicitely set as px
                            $(widgets[i]).css('top', sumHeight +'px');
                            if (calcHeights[i].height === null) { 
                                startPattern = false; 
                                $(widgets[i]).css('bottom', (100-(i+1)*defHeight) + '%');
                            } else {
                                sumHeight += calcHeights[i].height;
                                $(widgets[i]).css('height', calcHeights[i].height + 'px');
                            }
                        } else { // now, no heights are specified; use defaults
                            $(widgets[i]).css('bottom', (100-(i+1)*defHeight) + '%');
                            if (calcHeights[i].height !== null) { break; }    // lastHeightSet must be true
                            $(widgets[i]).css('top', i*defHeight +'%');
                        } 
                        i++;
                    }
                }
                j = numWidgets-1;
                sumHeight = 0;
                startPattern = true;
                if (lastHeightSet) {  // work backwards through the heights
                    while (j>=Math.max(0,i-1)) { 
                        if (startPattern) { // so far, all heights explicitely set as px
                            if (!firstHeightSet) { 
//                                $(widgets[j]).css('top', 'auto'); 
//                                $(widgets[j]).css('height', ''); 
                            }
                            $(widgets[j]).css('bottom', sumHeight + 'px');
                            if (calcHeights[j].height === null) {
                                startPattern = false;
                                $(widgets[j]).css('height', ''); 
                                if (firstHeightSet) { break; }
                                $(widgets[j]).css('top', j*defHeight + '%');
                            } else {
                                sumHeight += calcHeights[j].height;
                                $(widgets[j]).css('top', 'auto'); 
                                $(widgets[j]).css('height', calcHeights[j].height + 'px');
                            }
                        } else { // now, no heights are specified; use defaults
                            $(widgets[j]).css('bottom', (100-(j+1)*defHeight) + '%');
                            if (calcHeights[j].height !== null) { break; }
                            $(widgets[j]).css('top', j*defHeight +'%');
                        }
                        j--;
                    }
                }
            }
        }

        var obj = new HsLayout("HsColumnsLayout");
        obj.layItOut      = layItOut;
        var unit = "%";
        var firstHeightSet = false;
        var lastHeightSet  = false;
        if (heights.indexOf('px') >= 0) { unit = 'px'; }
        heights = heights.replace(',,', ',"",').replace(',,', ',"",').
                          replace('[,', '["",').replace(',]', ',""]').
                          replace('%','').replace('px','');        
        heights = JSON.parse(heights); 
        var len = heights.length-1;
        if (heights[0] && heights[0]!=="") { firstHeightSet = true; }          
        if (len>0 && heights[len] && heights[len]!=="") { lastHeightSet = true; }          
        for (var i=0; i<=len; i++) { heights[i] = parseFloat(heights[i]); }
        return obj;
    };
}]);

