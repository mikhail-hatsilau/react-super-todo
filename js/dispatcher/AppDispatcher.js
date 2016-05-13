var Dispatcher = require('./Dispatcher');

var AppDispatcher = function() {}

AppDispatcher.prototype = Object.create(Dispatcher.prototype);
AppDispatcher.prototype.handleEvent = function(action) {
    this.dispatch({
        source: 'VIEW_SOURCE',
        action: action
    });
}

module.exports = AppDispatcher;