var SpotModel = {
    init: function() {

    },
    all: function(successFunc, errorFunc) {
        var requestUrl = '/api/v1/spots';
        Common.commonAjaxTypeJson(requestUrl, 'GET', '', successFunc, errorFunc)
    }
};

var SpotController = {
    init: function() {
        SpotModel.init();
        SpotView.init();
    },
    search: function(query) {
        GoogleMap.search(query);
    },
    loadSpots: function(successFunc, errorFunc) {
        SpotModel.all(successFunc, errorFunc)
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
$(function() {
    SpotController.init();
});
