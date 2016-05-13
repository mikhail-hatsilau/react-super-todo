var Dispatcher = require('../dispatcher/AppDispatcher');
var appDispatcher = new Dispatcher();
var ToDoConstants = require('../constants/ToDoConstants');

var toDoActions = {
    addToDo: function(text) {
        appDispatcher.handleEvent({
            type: ToDoConstants.TODO_ADD,
            text: text
        });
    }
}

module.exports = toDoActions;