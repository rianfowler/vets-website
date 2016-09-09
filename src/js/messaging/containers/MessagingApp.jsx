import React from 'react';
import { connect } from 'react-redux';

import { fetchFolders } from '../actions/folders';

class MessagingApp extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchFolders());
  }

  render() {
    return (
      <div id="messaging-app" className="row">
        {this.props.children}
      </div>
    );
  }
}

MessagingApp.propTypes = {
  children: React.PropTypes.node
};

// TODO: fill this out
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(MessagingApp);
