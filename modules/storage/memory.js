module.exports = function(myApp){
    var debug = require('debug')('module:storage:memory');

    if (typeof myApp.storage !== "undefined") {
        debug(':: WARN :: storage '+myApp.storage.module+' already loaded.  module not loaded...');
        return;
    }

    var storage = { module: "memory" };
    var memory = {};

    storage.initialize = function(){
        debug('initialized...');
    };

    storage.get = function(field, callback) {
        if (typeof memory[field] !== "undefined") {
            debug('get() - ' + field + ' exists');
            callback(null, memory[field]);
        } else {
            debug('get() - ' + field + ' does NOT exist');
            callback(true, undefined);
        }
        return;
    };

    storage.set = function(field, data, callback) {
        debug('set() - ' + field);
        memory[field] = data;
        if (typeof callback == "function") {
            callback(null, true);
        }
        return;
    };

    myApp.storage = storage;
    debug('loaded...');
};
