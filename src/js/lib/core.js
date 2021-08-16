const $ = function(selector) {
    return new $.prototype.init();
};

$.prototype.init = function(selector) {
    if (!selector) {
        return this; // {}
    }
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

$.prototype.init.prototype = $.prototype;

window.$ = $;

export default $;