var React = require('react');
var toDoStore = require('../stores/ToDoStore');
var SearchBox = require('./SearchBox.react');
var ToDoList = require('./ToDoList.react');
var ToDoActions = require('../actions/ToDoActions');

function getTodosState() {
    return {
        allTodos: toDoStore.getAllTodos()
    }
}

var ToDoApp = React.createClass({
    getInitialState: function() {
        return getTodosState();
    },
    
    componentDidMount: function() {
        toDoStore.addChangeListener(this.changeEvent);
    },
    
    componentWillUnmount: function() {
        toDoStore.removeChangeListener();
    },
    
    render: function() {
        return (
            <div>
                <SearchBox add={this.add}/>
                <ToDoList todos={this.state.allTodos}/>
            </div>
        );
    },
    
    add: function(toDoText) {
        ToDoActions.addToDo(toDoText);
    },
    
    changeEvent: function() {
        this.setState(getTodosState());
    }
});

module.exports = ToDoApp;