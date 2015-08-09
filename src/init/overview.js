/**
 * @ngdoc overview
 * @name hsWidgets
 * @module hsWidgets
 * @type {ngModule}
 * @file angular factory for providing layouts and widgets
 * @copyright Helpful Scripts 2015
 * @description
 * #Angular Widget and Layout Library
 * Provides *AngularJS* directives to facilitate {@link hsWidgets.directive:hsWidget widgets} 
 * and {@link hsWidgets.directive:hsLayout layouts}. 
 * 
 * Layouts can be manual or automatic. Available automatic layouts include 
 * {@link hsWidgets.object.HsRowsLayout row layouts}, {@link hsWidgets.object.HsColumnsLayout columns layouts},
 * and {@link hsWidgets.object.HsTileLayout tiles layouts}.
 * 
 * Layouts can be nested - see example below. The top level layout will try to maximize its size within the 
 * constraints of the surrounding container. For example, as first element with non-static position, a layout will fill 
 * and make available the entire browser window. This enables treating the browser window as an application gui
 * on which widgets (views, controls, etc.) can be placed in deliberate locations. 
 * 
 * Widgets live inside a layout. Double clicking the widgets will reversibly toggle its full-screen mode display. 
 * Add the {@link hsWidgets.directive:hsMoveable hs-moveable} attribute to a widget to allow it to be manually moved or resized. 
 * The codebase is available at {@link https://github.com/HelpfulScripts/hsWidgets}.
 * 
@example
#Nested tile layout inside a column layout
<example module="hsWidgets">
    <file name="index.html">
        <div ng-controller="myCtrl" style="height:300px; padding:0;">
            <hs-layout hs-rows='["80px",,"50px"]'>
                <hs-widget>
                    <br>Header:80px
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

