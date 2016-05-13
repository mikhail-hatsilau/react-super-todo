var Promise = require('es6-promise').Promise;

var _callbacks = [];
var _promises = [];

function Dispatcher () {}

Dispatcher.prototype.register = function(callback) {
    _callbacks.push(callback);
    return _callbacks.length - 1;
}

Dispatcher.prototype.dispatch = function(payload) {
    var resolves = [];
    var rejects = [];
    
    _promises = _callbacks.map(function(element, index) {
        return new Promise(function(resolve, reject) {
            resolves[index] = resolve;
            rejects[index] = reject;
        });
    });
    
    _callbacks.forEach(function(callback, index) {
        Promise.resolve(callback(payload)).then(function(){
            resolves[index](payload);
        }, function() {
            rejects[index](payload);
            console.log('Callback of the dispatcher failed');
        })
    });
}

Dispatcher.prototype.waitFor = function(storesIndexes, callback) {
    var promises = storesIndexes.map(function(element, index) {
        return _promises[index];
    });
    
    Promise.all(promises).then(callback);
}

module.exports = Dispatcher;