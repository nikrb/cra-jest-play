import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered'
};

export default class Link extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      class: STATUS.NORMAL
    }
  }
  mouseEnter = () => {
    this.setState( {class: STATUS.HOVERED});
  };
  mouseLeave = () => {
    this.setState( {class: STATUS.NORMAL})
  };
  isNormal = () => {
    return this.state.class === STATUS.NORMAL;
  };
  render = () => {
    // const classname = css(this.isNormal() ? styles.normal : styles.hovered);
    const classname = css( this.state.class===STATUS.NORMAL?styles.normal:styles.hovered);
    return (
      <a className={classname}
        href={this.props.page || "#"}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {this.props.children}
      </a>
    );
  };
};

const styles = StyleSheet.create({
  normal: {
    color: "blue"
  },
  hovered: {
    color: "red"
  }
});
