var events = require('events');
var eventEmitter = new events.EventEmitter();
var ToDoConstants = require('../constants/ToDoConstants');
var Dispatcher = require('../dispatcher/AppDispatcher');
var appDispatcher = new Dispatcher();

var CHANGE_EVENT = 'change';

var _todos = [];

function addToDo(text) {
    _todos.push(text);
}

var toDoStore = {
    getAllTodos: function() {
        return _todos;
    },
    
    emitEvent: function() {
        eventEmitter.emit(CHANGE_EVENT);
    },
    
    addChangeListener: function(callback) {
        eventEmitter.on(CHANGE_EVENT, callback);
    },
    
    removeChangeListener: function() {
        eventEmitter.removeListener(CHANGE_EVENT);
    },
    
    dispatcherIndex: appDispatcher.register(function(payload) {
        var action = payload.action;
        
        switch(action.type) {
            case ToDoConstants.TODO_ADD:
                console.log('add');
                addToDo(action.text);
                toDoStore.emitEvent();
                break;
            case ToDoConstants.TODO_REMOVE:
                console.log('remove');
                toDoStore.emitEvent();
                break;
        }
        
        return true;
    })
}

module.exports = toDoStore;