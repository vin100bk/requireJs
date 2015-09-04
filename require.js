/**
 * Allows to require easily JS modules by their name
 * @type {{modules: {}, modulesLoaded: {}, init: Function, get: Function}}
 */
var require = {
    /**
     *  Contains modules
     */
    modules: {},

    /**
     * Contains information if a module is loaded or not
     */
    modulesLoaded: {},

    /**
     * Init modules
     * @param config
     */
    init: function (config) {
        this.modules = $.extend({}, this.modules, config);
    },

    /**
     * Get a module
     * @param name
     */
    get: function (name) {
        if (!(name in this.modulesLoaded)) {
            if (name in this.modules) {
                var promise = $.ajax({
                    url: this.modules[name],
                    dataType: 'script'
                })
                    .fail(function (jqxhr, settings, exception) {
                        console.log('Error while loading ' + name + ' module !');
                    });
                this.modulesLoaded[name] = 1;
                return promise;
            } else {
                throw 'The module ' + name + ' is not defined !';
            }
        }
    }
};
