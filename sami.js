
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:HeimrichHannot" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HeimrichHannot.html">HeimrichHannot</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:HeimrichHannot_GoogleTagManagerBundle" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HeimrichHannot/GoogleTagManagerBundle.html">GoogleTagManagerBundle</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:HeimrichHannot_GoogleTagManagerBundle_DataLayer" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HeimrichHannot/GoogleTagManagerBundle/DataLayer.html">DataLayer</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:HeimrichHannot_GoogleTagManagerBundle_DataLayer_DataLayer" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayer.html">DataLayer</a>                    </div>                </li>                            <li data-name="class:HeimrichHannot_GoogleTagManagerBundle_DataLayer_DataLayerInterface" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html">DataLayerInterface</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:HeimrichHannot_GoogleTagManagerBundle_DependencyInjection" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HeimrichHannot/GoogleTagManagerBundle/DependencyInjection.html">DependencyInjection</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:HeimrichHannot_GoogleTagManagerBundle_DependencyInjection_GoogleTagManagerExtension" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="HeimrichHannot/GoogleTagManagerBundle/DependencyInjection/GoogleTagManagerExtension.html">GoogleTagManagerExtension</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:HeimrichHannot_GoogleTagManagerBundle_EventListener" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HeimrichHannot/GoogleTagManagerBundle/EventListener.html">EventListener</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:HeimrichHannot_GoogleTagManagerBundle_EventListener_HookListener" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="HeimrichHannot/GoogleTagManagerBundle/EventListener/HookListener.html">HookListener</a>                    </div>                </li>                            <li data-name="class:HeimrichHannot_GoogleTagManagerBundle_EventListener_InsertTagsListener" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="HeimrichHannot/GoogleTagManagerBundle/EventListener/InsertTagsListener.html">InsertTagsListener</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:HeimrichHannot_GoogleTagManagerBundle_Manager" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="HeimrichHannot/GoogleTagManagerBundle/Manager.html">Manager</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:HeimrichHannot_GoogleTagManagerBundle_Manager_GoogleTagManager" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html">GoogleTagManager</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:HeimrichHannot_GoogleTagManagerBundle_HeimrichHannotContaoGoogleTagManagerBundle" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="HeimrichHannot/GoogleTagManagerBundle/HeimrichHannotContaoGoogleTagManagerBundle.html">HeimrichHannotContaoGoogleTagManagerBundle</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "HeimrichHannot.html", "name": "HeimrichHannot", "doc": "Namespace HeimrichHannot"},{"type": "Namespace", "link": "HeimrichHannot/GoogleTagManagerBundle.html", "name": "HeimrichHannot\\GoogleTagManagerBundle", "doc": "Namespace HeimrichHannot\\GoogleTagManagerBundle"},{"type": "Namespace", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer", "doc": "Namespace HeimrichHannot\\GoogleTagManagerBundle\\DataLayer"},{"type": "Namespace", "link": "HeimrichHannot/GoogleTagManagerBundle/DependencyInjection.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DependencyInjection", "doc": "Namespace HeimrichHannot\\GoogleTagManagerBundle\\DependencyInjection"},{"type": "Namespace", "link": "HeimrichHannot/GoogleTagManagerBundle/EventListener.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\EventListener", "doc": "Namespace HeimrichHannot\\GoogleTagManagerBundle\\EventListener"},{"type": "Namespace", "link": "HeimrichHannot/GoogleTagManagerBundle/Manager.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\Manager", "doc": "Namespace HeimrichHannot\\GoogleTagManagerBundle\\Manager"},
            {"type": "Interface", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html#method_setContent", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface::setContent", "doc": "&quot;Set the tag content value.&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html#method_getContent", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface::getContent", "doc": "&quot;Get the tag content value.&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html#method_hasContent", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface::hasContent", "doc": "&quot;Check if content is set.&quot;"},
            
            
            {"type": "Class", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayer.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayer", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayer", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayer.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayer.html#method___construct", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayer::__construct", "doc": "&quot;initialize the object.&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayer", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayer.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayer.html#method_setContent", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayer::setContent", "doc": "&quot;The tag content value.&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayer", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayer.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayer.html#method_hasContent", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayer::hasContent", "doc": "&quot;Check if content is set.&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayer", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayer.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayer.html#method_getContent", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayer::getContent", "doc": "&quot;Get the tag content value.&quot;"},
            
            {"type": "Class", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html#method_setContent", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface::setContent", "doc": "&quot;Set the tag content value.&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html#method_getContent", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface::getContent", "doc": "&quot;Get the tag content value.&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DataLayer/DataLayerInterface.html#method_hasContent", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DataLayer\\DataLayerInterface::hasContent", "doc": "&quot;Check if content is set.&quot;"},
            
            {"type": "Class", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DependencyInjection", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DependencyInjection.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DependencyInjection/GoogleTagManagerExtension.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DependencyInjection\\GoogleTagManagerExtension", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\DependencyInjection\\GoogleTagManagerExtension", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/DependencyInjection/GoogleTagManagerExtension.html", "link": "HeimrichHannot/GoogleTagManagerBundle/DependencyInjection/GoogleTagManagerExtension.html#method_load", "name": "HeimrichHannot\\GoogleTagManagerBundle\\DependencyInjection\\GoogleTagManagerExtension::load", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\EventListener", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/EventListener.html", "link": "HeimrichHannot/GoogleTagManagerBundle/EventListener/HookListener.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\EventListener\\HookListener", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\EventListener\\HookListener", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/EventListener/HookListener.html", "link": "HeimrichHannot/GoogleTagManagerBundle/EventListener/HookListener.html#method_generatePage", "name": "HeimrichHannot\\GoogleTagManagerBundle\\EventListener\\HookListener::generatePage", "doc": "&quot;Modify the page object.&quot;"},
            
            {"type": "Class", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\EventListener", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/EventListener.html", "link": "HeimrichHannot/GoogleTagManagerBundle/EventListener/InsertTagsListener.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\EventListener\\InsertTagsListener", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\EventListener\\InsertTagsListener", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/EventListener/InsertTagsListener.html", "link": "HeimrichHannot/GoogleTagManagerBundle/EventListener/InsertTagsListener.html#method___construct", "name": "HeimrichHannot\\GoogleTagManagerBundle\\EventListener\\InsertTagsListener::__construct", "doc": "&quot;InsertTagsListener constructor.&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\EventListener\\InsertTagsListener", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/EventListener/InsertTagsListener.html", "link": "HeimrichHannot/GoogleTagManagerBundle/EventListener/InsertTagsListener.html#method_onReplaceInsertTags", "name": "HeimrichHannot\\GoogleTagManagerBundle\\EventListener\\InsertTagsListener::onReplaceInsertTags", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "HeimrichHannot\\GoogleTagManagerBundle", "fromLink": "HeimrichHannot/GoogleTagManagerBundle.html", "link": "HeimrichHannot/GoogleTagManagerBundle/HeimrichHannotContaoGoogleTagManagerBundle.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\HeimrichHannotContaoGoogleTagManagerBundle", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\HeimrichHannotContaoGoogleTagManagerBundle", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/HeimrichHannotContaoGoogleTagManagerBundle.html", "link": "HeimrichHannot/GoogleTagManagerBundle/HeimrichHannotContaoGoogleTagManagerBundle.html#method_getContainerExtension", "name": "HeimrichHannot\\GoogleTagManagerBundle\\HeimrichHannotContaoGoogleTagManagerBundle::getContainerExtension", "doc": "&quot;{@inheritdoc}&quot;"},
            
            {"type": "Class", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\Manager", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/Manager.html", "link": "HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html", "name": "HeimrichHannot\\GoogleTagManagerBundle\\Manager\\GoogleTagManager", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\Manager\\GoogleTagManager", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html", "link": "HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html#method_registerDataLayer", "name": "HeimrichHannot\\GoogleTagManagerBundle\\Manager\\GoogleTagManager::registerDataLayer", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\Manager\\GoogleTagManager", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html", "link": "HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html#method_getDataLayers", "name": "HeimrichHannot\\GoogleTagManagerBundle\\Manager\\GoogleTagManager::getDataLayers", "doc": "&quot;Get the generated tags as array.&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\Manager\\GoogleTagManager", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html", "link": "HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html#method_getHeadScript", "name": "HeimrichHannot\\GoogleTagManagerBundle\\Manager\\GoogleTagManager::getHeadScript", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\Manager\\GoogleTagManager", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html", "link": "HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html#method_getBodyScript", "name": "HeimrichHannot\\GoogleTagManagerBundle\\Manager\\GoogleTagManager::getBodyScript", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "HeimrichHannot\\GoogleTagManagerBundle\\Manager\\GoogleTagManager", "fromLink": "HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html", "link": "HeimrichHannot/GoogleTagManagerBundle/Manager/GoogleTagManager.html#method_getLink", "name": "HeimrichHannot\\GoogleTagManagerBundle\\Manager\\GoogleTagManager::getLink", "doc": "&quot;&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


