$(function() {
    var SpotModel = {
        init: function() {

        }
    };

    var SpotController = {
        init: function() {
            SpotModel.init();
            SpotView.init();
        },
        search: function(query) {
            GoogleMap.search(query);
        }
    };

    var SpotView = {
        init: function () {
            this.searchLink = $('#area-search-link');
            this.searchTextBox = $('#search-query');
            this.bindEvents();
        },
        bindEvents: function () {
            this.searchLink.on('click', this.toggleSearchMode.bind(this));
            this.searchTextBox.on('keyup', this.executeSearch.bind(this));
        },
        toggleSearchMode: function () {
            alert('toggle')
        },
        showSearchBox: function () {

        },
        hideSearchBox: function () {

        },
        executeSearch: function (e) {
            if (e.keyCode !== ENTER_KEY) {
                return;
            }
            var query = $.trim(this.searchTextBox.val());
            if (query.length < 1) {
                return;
            }
            SpotController.search(query)
        }
    };
    SpotController.init();
});
