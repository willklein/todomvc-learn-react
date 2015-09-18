var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <li>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>{ this.props.todo }</label>
          <button className="destroy" onClick={ this._onRemove }></button>
        </div>
        <input className="edit" value="Rule the web" />
      </li>
    );
  },
  
  _onRemove: function(event) {
    this.props.onRemove(this.props.todo);
  }
});
