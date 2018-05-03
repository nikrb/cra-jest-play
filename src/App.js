import React, { Component } from 'react';

class App extends Component {
  state = {
    topics: [],
    subTopics: [],
  };
  componentDidMount() {
    this.loadData().then(results => {
      console.log('load data:', results);
      const [topics, subTopics, ...rest] = results;
      this.setState({ topics, subTopics });
    });
  }
  loadData() {
    const promises = [];
    let p;
    p = new Promise(resolve => {
      return fetch('/api/v1/topics')
        .then(res => {
          resolve(res.json());
        });
      });
    promises.push(p);
    p = new Promise(resolve => {
      return fetch('/api/v1/subtopics')
          .then(res => resolve(res.json()));
      }
    );
    promises.push(p);
    return Promise.all(promises);
  }
  render() {
    const { topics, subTopics } = this.state;
    const lis = topics.map(t => <li key={t._id}>{t.name}</li>);
    const sublist = subTopics.map(s => <li key={s._id}>{s.name}</li>);
    return (
      <div>
        <h2>Topics</h2>
        <ul>{lis}</ul>
        <h2>SubTopics</h2>
        <ul>{sublist}</ul>
      </div>
    );
  }
}

export default App;
