var React = require('react');

var TodoItem = require('./TodoItem');

module.exports = React.createClass({
  render: function() {
    return (
      <ul className="todo-list">
        { this.props.todos.map(this._renderTodo) }
      </ul>
    );
  },
  
  _renderTodo: function(todo) {
    return (
      <TodoItem todo={ todo } onRemove={ this.props.onRemove } />
    );
  }
});
