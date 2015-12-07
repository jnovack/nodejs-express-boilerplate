module.exports = function(myApp){

    if (typeof myApp.storage !== "undefined") {
        myApp.utils.consoleOutput('module/storage/memory :: WARN :: storage '+myApp.storage.module+' already loaded.  module not loaded...');
        return;
    }

    var storage = { module: "memory" };
    var memory = {};

    storage.initialize = function(){

        myApp.utils.consoleOutput("module/storage/memory has been initialized...");
    };

    storage.get = function(field, callback) {
        if (typeof memory[field] !== "undefined") {
            callback(null, memory[field]);
            return;
        }
    };

    storage.set = function(field, data, callback) {
        memory[field] = data;
        if (typeof callback == "function") {
            callback(null, true);
        }
    };

    myApp.storage = storage;
    myApp.utils.consoleOutput("module/storage/memory has been loaded...");
};