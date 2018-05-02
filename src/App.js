import React, { Component } from 'react';

class App extends Component {
  state = {
    topics: [],
  };
  componentDidMount() {
    this.loadTopics().then(topics => this.setState({topics}));
  }
  async loadTopics() {
    fetch('/api/v1/topics')
      .then(res => res.json());
  }
  render() {
    const { topics } = this.state;
    const lis = topics.map(t => <li key={t._id}>{t.name}</li>)
    return (
      <div>
        <ul>{lis}</ul>
      </div>
    );
  }
}

export default App;
