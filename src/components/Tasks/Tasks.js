import React, { Component } from 'react';

const success = successMsg => {
  console.log(successMsg);
};

const error = errorMsg => {
  console.log(errorMsg);
};

class Tasks extends Component {
  constructor(props) {
    super(props);

    this.state =  {
      boards: [],
      lists: []
    };
  }

  componentDidMount() {
    Trello.authorize({
      type: 'popup',
      name: 'Getting Started Application',
      scope: {
        read: 'true',
        write: 'true' },
      expiration: 'never',
      success: () => console.log('Auth Success'),
      error: () => console.log('Auth Error')
    });

    this.getBoards();
    this.getLists();
  }

  getBoards() {
    Trello.get('/member/me/boards', successResponse => {
      this.setState({ boards: successResponse });
    }, error);
  }

  getLists(id) {
    Trello.get('/boards/5792ea91772896d797b0b871/lists', successResponse => {
      this.setState({ lists: successResponse });
    }, error);
  }

  renderBoard() {
    const { boards } = this.state;
    if (!boards.length) {
      return null;
    }

    return (
      <div
        className="board"
        style={{
          backgroundColor: boards[3].prefs.background,
          color: '#fff'
        }}
      >
        <h1>{boards[3].name}</h1>
        <div className="board-lists">
          {this.renderLists()}
        </div>
      </div>
    );
  }

  renderLists() {


    return this.state.lists.map((list, i) => {
      return (
        <div key={list.id} className="list">
          {list.name}
        </div>
      );
    });
  }

  render() {
    console.log(this.state);
    return (
      <div className="tasks container">
        <div className="row">
          {this.renderBoard()}
        </div>
      </div>
    );
  }
}

export default Tasks;
