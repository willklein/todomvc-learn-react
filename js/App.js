var React = require('react');
var TodoList = require('./TodoList');

module.exports = React.createClass({
  getInitialState: function() {
    var todos = this._getTodos();
    
    return {
      todos: todos
    };
  },
  
  render: function() {
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <input className="new-todo" placeholder="What needs to be done?" autofocus />
        </header>
        
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label for="toggle-all">Mark all as complete</label>
          
          <TodoList todos={ this.state.todos } onRemove={ this._removeTodo } />
        </section>
        
        <footer className="footer">
          
          <span className="todo-count"><strong>0</strong> item left</span>
          
          <ul className="filters">
            <li>
              <a className="selected" href="#/">All</a>
            </li>
            <li>
              <a href="#/active">Active</a>
            </li>
            <li>
              <a href="#/completed">Completed</a>
            </li>
          </ul>
          
          <button className="clear-completed">Clear completed</button>
        </footer>
      </section>
    );
  },
  
  _getTodos: function() {
    return [
      'Buy a unicorn',
      'Learn how to live code'
    ];
  },
  
  _removeTodo: function(removedTodo) {
    var todos = this.state.todos;
    console.log('removedTodo', removedTodo);
    
    todos = todos.filter(function(todo) {
      return todo !== removedTodo;
    });
    
    this.setState({
      todos: todos
    });
  }
});
