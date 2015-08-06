/**
 * @ngdoc overview
 * @name hsWidgets
 * @module hsWidgets
 * @type {ngModule}
 * @file angular factory for providing layouts and widgets
 * @copyright Helpful Scripts 2015
 * @description
 * Provides *AngularJS* directives to facilitate {@link hsWidgets.directive:hsWidget widgets} 
 * on a {@link hsWidgets.directive:hsLayout layout}. Available layouts include 
 * {@link hsWidgets.object.HsRowsLayout row layouts}, {@link hsWidgets.object.HsColumnsLayout columns layouts},
 * and {@link hsWidgets.object.HsTileLayout tiles layouts}.
 * Double clicking the widgets will toggle full-screen mode. 
 * Add the {@link hsWidgets.directive:hsMoveable hs-moveable} attribute to allow
 * them to be moved or resized. 
 * 
@example
#Nested tile layout inside a column layout
<example module="hsWidgets">
    <file name="index.html">
        <div ng-controller="myCtrl" style="height:300px; padding:0;">
            <hs-layout hs-rows='["100px",,"50px"]'>
                <hs-widget>
                    <br>Header:10px
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


/*
 * Create the module by calling angular.module with dependency object [].
 * Subsequent additions to the module work by referncing the angular.module('hsWidgets') without [].
 */
angular.module('hsWidgets', ['ngTouch', 'hs']);

