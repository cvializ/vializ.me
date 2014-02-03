// Main viewmodel class
define(['knockout'], function(ko) {
    return function PortfolioViewModel() {
        this.firstName = ko.observable('Bert');
        this.firstNameCaps = ko.computed(function() {
            return this.firstName().toUpperCase();
        }, this);
    };
});