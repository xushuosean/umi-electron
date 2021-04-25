
import React, { Component } from 'react';
import { connect } from 'dva';
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myNotification = this.myNotification.bind(this)
  }

  myNotification() {
    new Notification('Title', {
      body: 'Notification from the Renderer process'
    })
  }
  
  render() {
    return (
      <div>
        <p onClick={this.myNotification}>{this.props.global.msg}</p>
      </div>
    );
  }
}

export default connect(({ global }) => ({ global }))(Index)