import React from 'react';

const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered'
};

export default class Link extends React.Component {
  state = {
    class: STATUS.NORMAL
  }
  mouseEnter = () => {
    this.setState( {class: STATUS.HOVERED});
  };
  mouseLeave = () => {
    this.setState( {class: STATUS.NORMAL})
  };
  render = () => {
    return (
      <a className={this.state.class}
        href={this.props.page || "#"}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {this.props.children}
      </a>
    );
  };
};
