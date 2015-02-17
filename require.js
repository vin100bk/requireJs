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
        this.modules = config;
    },

    /**
     * Get a module
     * @param name
     */
    get: function (name) {
        if (!(name in this.modulesLoaded)) {
            $.ajax({
                url: this.modules[name],
                dataType: 'script',
                async:false
            })
                .fail(function (jqxhr, settings, exception) {
                    throw 'Error while loading ' + name + ' module !';
                });
            this.modulesLoaded[name] = 1;
        }
    }
};
