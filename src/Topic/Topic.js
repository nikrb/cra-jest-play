import React from 'react';

import { getTopics } from './api';

export default class Topic extends React.Component {
  state = {
    topics: [],
  };
  componentDidMount = () => {
    getTopics().then(topics => this.setState({ topics }))
  };
  render = () => {
    const topics = this.state.topics.map((topic, ndx) => (
      <li key={ndx}>{topic.name}</li>
    ));
    return (
      <div>
        <ul>
          {topics}
        </ul>
      </div>
    );
  };
};
