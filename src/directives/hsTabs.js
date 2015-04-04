angular.module('hsWidgets').directive('hsTabs', function() {
    function random(a, b) {
        return Math.floor(a + Math.random() * (b-a));
    }
    
    function tabClick(elem, tabGroup) {
        // 1. manage visibility of the tabs
        var li = elem.parent();
        li.parent(/* ul */).find('.active').removeClass('active');
        li.addClass('active');

        // 2. manage visibility of the bodies
        $('.'+tabGroup).hide();
        var ref = $(elem).attr('href');
        $(ref).show();
        return ref;
    }

    function getID(elem, attrs) {   // establish tabgroup ID: use hsTabs ID or define new random ID
        var id = attrs['id'];
        if (!id) {
            id = random(1000000, 9000000);
            $(elem).attr('id', id);
        }
        return id;
    }

    return {
        restrict: 'AE',
        transclude: true,
        scope: true,
        template: '<ul class="btn-lg nav" ng-transclude ></ul>',
        link: function(scope, elem, attrs) {
            var id = getID(elem, attrs);
            var tabGroup = 'hsTabsGroup'+id;
            var ul = elem.children();
            ul.addClass(attrs['classes']);                          // transfer classes to transcluded UL element
            if (!ul.hasClass('nav-pills')) { 
                ul.addClass('nav-tabs');    // ensure presence of either tabs or pills
            }

            // associate any bodies with the tabGroup
            var items = ul.children();                              // items that should have an href attribute
            $(items).each(function(i, elem){
                var ref = $(elem).attr('href');
                if (ref) { $(ref).addClass(tabGroup); }             // add tabGroup class to each body
            });
            $(items).wrap('<li role="presentation"></li>');         // create the LIs from the anchors

            $(items).click(function(e) {                            // add click event
                e.preventDefault();                                 // prevent browser from handling the href click
                var ref = tabClick($(this), tabGroup);              // execute default click behavior: show/hide tab and body
                if (scope.select) { scope.select(ref, tabGroup); }  // perform any additional controller tasks
            });
            tabClick($(items[0]), tabGroup);                        // initialize: show first tab and body
        }
    };
});

