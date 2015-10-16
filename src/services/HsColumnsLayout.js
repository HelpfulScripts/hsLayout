/**
 * @ngdoc object
 * @name hsWidgets.object.HsColumnsLayout
 * @requires hsWidgets.object.HsLayout
 * @description Extends {@link hsWidgets.object.HsLayout HsLayout}.
 * Columns layout divides the container horizontally into partitions according to the `Array` specifications. 
 * <h2>cfg options:</h2><pre>
 * </pre>
#Attributes
- **hs-columns='[<i>Array</i>]'**
    create a layout with columns specified by `Array`.
    Elements in `Array` will be used as width indicators for the widgets that are children of this layout. 
    All widths have to be specified either in px or in %.
    The following options are supported for `Array`:
    - []: An empty array; all widgets will be evenly spaced across the available width. 
    - [fw]: All widgets have the specified width (in px or %) and will fill the available space with from the left,
        leaving any remaining unused space on the right. 
    - [fw,]: Sets the first (left) widget to a width of `fw`.<br>
        if `fw` is specified in %, the remaining n-1 widgets will have equal relative widths of `(100-fw)/(n-1)%`<br>
        if `fw` is specified in px, the remaining n-1 widgets will have their right borders at location `i*100/n%`, with i=1...n.
    - [,lw]: Sets the last (right) widget to a width of `lw`.<br>
        if `lw` is specified in %, the remaining n-1 widgets will have equal relative widths of `(100-lw)/(n-1)%`<br>
        if `lw` is specified in px, the remaining n-1 widgets will have their left borders at location `i*100/n%`, with i=0...n-1.
    - [fw,,lw]: Sets the first and last widget to a width of `fw`/`lw`.<br>
        Both have to be specified either in px or in %.<br>
        if the unit is %, the remaining n-2 widgets will have equal relative widths of `(100-lw-fw)/(n-2)%`<br>
        if the unit is px, the remaining n-2 widgets will have their left/right borders at location `i*100/n%`.
    - [1w, 2w, , w2, w1]: multiple widths can be specified in uninterrupted sequence both from the left and the right. 
See also the description of attribute options in {@link hsWidgets.directive:hsLayout hsLayout}
 * @todo ...
@example
#Equal column widths, filled in on left
<example module="hsWidgets">
    <file name="index.html">
        <div style="height:300px; padding:0;">
            <hs-layout hs-columns='[,"100px","100px"]'>
                <hs-widget ng-repeat="w in [1,2,3]">
                    <br>{{w}}
                    <br>{{$first? "I fill the remaining space" : "100px"}}
                </hs-widget>
            </hs-layout>
        </div>
    </file>
</example>
#Shared column widths, fixed width on right
<example module="hsWidgets">
    <file name="index.html">
        <div style="height:300px; padding:0;">
            <hs-layout hs-columns='[,"10%"]'>
                <hs-widget ng-repeat="w in [1,2,3,4]">
                    <br>{{w}}
                    <br>{{$last? "10%" : "we share the remaining space"}}
                </hs-widget>
            </hs-layout>
        </div>
    </file>
</example>
#Fixed column widths, filled in on right
<example module="hsWidgets">
    <file name="index.html">
        <div style="height:300px; padding:0;">
            <hs-layout hs-columns='["20%","10%",]'>
                <hs-widget ng-repeat="w in [1,2,3,4]">
                    <br>{{w}}
                    <br>{{$first? "20%" : (($index==1)?"10%": "we share the remaining space")}}
                </hs-widget>
            </hs-layout>
        </div>
    </file>
</example>
#Nested tile layout inside a column layout
<example module="hsWidgets">
    <file name="index.html">
        <div ng-controller="myCtrl" style="height:300px; padding:0;">
            <hs-layout hs-columns='["200px","100px",]'>
                <hs-widget class='top'>
                    <br>left panel
                    <br>200px
                </hs-widget>
                <hs-widget class='top'>
                    <br>middle panel
                    <br>100px
                </hs-widget>
                <hs-layout hs-tiles>
                    <hs-widget ng-repeat="w in widgets" class='repeated-item'>
                        <br>{{w}}
                    </hs-widget>
                </hs-layout>
            </hs-layout>
         </div>
    </file>
    <file name="script.js">
        angular.module('hsWidgets').controller('myCtrl', ['$scope', '$interval', function myCtrl($scope, $interval){
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
angular.module('hsWidgets').factory('HsColumnsLayout', ['HsLayout', function HsComponentFactory(HsLayout) {
    "use strict";

    var unit = "%";
    var firstWidthSet = false;
    var lastWidthSet  = false;
/*    
    function setPercent(widgets, max, num, calcWidths) {
        var sumWidth = 0;
        var defWidth = max/num;
        var numWidgets = widgets.length;
        for (var i=0; i<numWidgets; i++) { 
            var width = calcWidths[i].width || defWidth;
            $(widgets[i]).css('left', sumWidth+'%');
            sumWidth += width;
            if (i===numWidgets-1 && calcWidths[i].width == null) { $(widgets[i]).css('right', '0%'); }
                             else { $(widgets[i]).css('width', width+'%'); }
        }
    }
*/
    function layItOut(widths) {
        return function(widgets) {
            var numWidgets = widgets.length;
            var calcWidths = [];
            var i,j;
            var num = numWidgets;
            var max = 100.0;
            for (i=0; i<numWidgets; i++) { 
                $(widgets[i]).css('top', 0);
                $(widgets[i]).css('bottom', 0);
                if (widths.length === 0) { 
                    calcWidths.push({width:null}); 
                } else if (widths.length === 1) { 
                    calcWidths.push({width:widths[0]}); 
                } else if (i===0 && firstWidthSet) { 
                    calcWidths.push({width:widths[0]}); 
                    num--; max -= widths[0]; 
                } else if (i===numWidgets-1 && lastWidthSet)  { 
                    calcWidths.push({width:widths[widths.length-1]}); 
                    num--; max -= widths[widths.length-1];
                } else if (i<widths.length-1 &&!isNaN(widths[i])) { 
                    calcWidths.push({width:widths[i]}); 
                    num--; max -= widths[i]; 
                } else { calcWidths.push({width:null}); }
            }
            var defWidth;
            var sumWidth = 0;
            if (unit==='%') { 
                defWidth = max/num;
                for (i=0; i<numWidgets; i++) { 
                    var width = calcWidths[i].width || defWidth;
                    $(widgets[i]).css('left', sumWidth+'%');
                    sumWidth += width;
                    if (i===numWidgets-1 && calcWidths[i].width == null) { $(widgets[i]).css('right', '0%'); }
                                     else { $(widgets[i]).css('width', width+'%'); }
                }                
            } else {  // units === px
                defWidth = 100.0/numWidgets;
                var startPattern = true;
                i = 0;
                if (firstWidthSet) { // work forwards through the widths
                    while (i<numWidgets) { // pattern: [n, n, , , n, n]
                        if (startPattern) { // so far, all widths explicitely set as px
                            $(widgets[i]).css('left', sumWidth +'px');
                            if (calcWidths[i].width === null) { 
                                startPattern = false; 
                                $(widgets[i]).css('right', (100-(i+1)*defWidth) + '%');
                            } else {
                                sumWidth += calcWidths[i].width;
                                $(widgets[i]).css('width', calcWidths[i].width + 'px');
                            }
                        } else { // now, no widths are specified; use defaults
                            $(widgets[i]).css('right', (100-(i+1)*defWidth) + '%');
                            if (calcWidths[i].width !== null) { break; }    // lastWidthSet must be true
                            $(widgets[i]).css('left', i*defWidth +'%');
                        } 
                        i++;
                    }
                }
                j = numWidgets-1;
                sumWidth = 0;
                startPattern = true;
                if (lastWidthSet) {  // work backwards through the widths
                    while (j>=Math.max(0,i-1)) { 
                        if (startPattern) { // so far, all widths explicitely set as px
                            if (!firstWidthSet) { 
    //                                $(widgets[j]).css('left', 'auto'); 
    //                                $(widgets[j]).css('width', ''); 
                            }
                            $(widgets[j]).css('right', sumWidth + 'px');
                            if (calcWidths[j].width === null) {
                                startPattern = false;
                                $(widgets[j]).css('width', ''); 
                                if (firstWidthSet) { break; }
                                $(widgets[j]).css('left', j*defWidth + '%');
                            } else {
                                sumWidth += calcWidths[j].width;
                                $(widgets[j]).css('left', 'auto'); 
                                $(widgets[j]).css('width', calcWidths[j].width + 'px');
                            }
                        } else { // now, no widths are specified; use defaults
                            $(widgets[j]).css('right', (100-(j+1)*defWidth) + '%');
                            if (calcWidths[j].width !== null) { break; }
                            $(widgets[j]).css('left', j*defWidth +'%');
                        }
                        j--;
                    }
                }
            }
        };
    }
    
    return function(widths) {
        var obj = new HsLayout("HsColumnsLayout");
        if (widths.indexOf('px') >= 0) { unit = 'px'; }
        widths = widths.replace(',,', ',"",').replace(',,', ',"",').
                        replace('[,', '["",').replace(',]', ',""]').
                        replace('%','').replace('px','');        
        widths = JSON.parse(widths); 

        var len = widths.length-1;
        if (widths[0] && widths[0]!=="") { firstWidthSet = true; }          
        if (len>0 && widths[len] && widths[len]!=="") { lastWidthSet = true; }          
        for (var i=0; i<=len; i++) { widths[i] = parseFloat(widths[i]); }

        obj.layItOut = layItOut(widths);
        return obj;
    };
}]);

