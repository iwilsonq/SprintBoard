import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createBoard } from '../../actions';

class Tasks extends Component {
  createBoard() {
    this.props.createBoard(this.refs.board.value);
  }

  renderBoards() {
    return this.props.boards.map(board => {
      return (
        <div className="board red-1">
          {board.name}
        </div>
      );
    })
  }

  render() {
    return (
      <div className="tasks container">
        <div className="row">
          <label>Create new board</label><br/>
          <input ref="board" type="text"/><br/>
          <button onClick={this.createBoard.bind(this)}>Create</button>
        </div>
        <div className="row">
          {this.renderBoards()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    boards: state.task
  };
}

export default connect(mapStateToProps, { createBoard })(Tasks);
