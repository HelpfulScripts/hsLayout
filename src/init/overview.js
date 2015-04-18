/**
 * @ngdoc overview
 * @name hsWidgets
 * @module hsWidgets
 * @type {ngModule}
 * @file angular factory for providing ...
 * @copyright Helpful Scripts 2015
 * @description
 * Provides *AngularJS* directives to facilitate {@link hsWidgets.directive:hsWidget widgets} on a {@link hsWidgets.directive:hsLayout layout}.
 * Double clicking the widgets will toggle full-screen mode. add the {@link hsWidgets.directive:hsMoveable hs-moveable} attribute to allow
 * them to be moved or resized. 
 * 
@example
<example module="hsWidgets">
    <file name="index.html">
        <hs-layout hs-moveable>
            <hs-widget hs-size='["50%", "50%"]'>
                <br>1
                <br>Move me along the top.
                <br>Size me from the corners.
            </hs-widget>
            <div hs-widget hs-size='["50%", "50%"]'>
                <br>2
                <br>Move me along the top.
                <br>Size me from the corners.
            </div>
            <div hs-widget hs-size='["100%", "50%"]'>
                <br>3
                <br>Move me along the top.
                <br>Size me from the corners.
            </div>
        </hs-layout>
    </file>
    <file name="style.css">
        .well        { position: relative; height: 300px; padding:0; }
        hs-layout    { background-color: #eee; }
        hs-widget, [hs-widget] { 
            background-color: rgba(255, 255, 240, 1); 
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

