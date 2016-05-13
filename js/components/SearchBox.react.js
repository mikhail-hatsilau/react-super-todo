var React = require('react');

var SearchBox = React.createClass({
    getInitialState: function() {
        return { value: '' };
    },
    
    render: function() {
        return (
            <div>
                <input
                    ref="newTodo"
                    onChange={this.inputChanged}
                    value={this.state.value}
                />
                <button
                    onClick={this.addTodo}
                >Add</button>
            </div>
        );
    },
    
    addTodo: function(event) {
        this.props.add(this.state.value);
        this.setState( { value: '' } );
    },
    
    inputChanged: function(event) {
        var newTodo = this.refs.newTodo.value;
        console.log(newTodo);
        
        this.setState({
            value: newTodo
        });
    }
});

module.exports = SearchBox;