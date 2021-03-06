/* eslint no-script-url: 0*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.join = this.join.bind(this);
  }
  join() {
    const memberName = ReactDOM.findDOMNode(this.refs.name).value;
    this.props.emit('join', { name: memberName });
  }
  render() {
    return (
      <form action="javascript:void(0)" onSubmit={this.join}>
        <label>Full Name</label>
        <input ref="name" className="form-control" placeholder="Enter your full name" required />
        <button className="btn btn-primary">Join</button>
        <Link to="/speaker">Join as Speaker</Link>
        <Link to="/board">Go to the board</Link>
      </form>
    );
  }
}

Join.propTypes = {
  emit: React.PropTypes.func,
};

export default Join;
