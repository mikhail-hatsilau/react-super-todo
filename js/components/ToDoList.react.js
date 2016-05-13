var React = require('react');

var ToDoList = React.createClass({
    render: function() {
        var todosElements = this.props.todos.map(function(todo){
            return <li>{todo}</li>;
        });
        return (
            <ul>
                {todosElements}
            </ul>
        );
    }
});

module.exports = ToDoList;