import React from 'react';
import { connect } from 'react-redux';

class AvernusControl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>

      </>
    );
  }
};

const mapStateToProps = state => {
  return {
    // headlines: state.headlines,
    // isLoading: state.isLoading,
    // error: state.error
  }
}

export default connect(mapStateToProps)(AvernusControl);