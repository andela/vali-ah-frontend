import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { requestDemo } from '../actions/demo';

/**
 * Class for redux texting
 *
 * @class
 *
 * @param {Void}
 */
class Testing extends Component {
  static propTypes = {
    demo: PropTypes.string.isRequired,
    requestDemo: PropTypes.func.isRequired,
  }
  componentDidMount() {
    const { requestDemo: inComingDemo } = this.props;
    inComingDemo();
  }

  render() {
  const { demo } = this.props; 

    return (
      <h1>
        {demo}
      </h1>
    );
  }
}

const mapStateToProps = ({ demo }) => ({ demo });
const mapDispatchToProps = (dispatch) => bindActionCreators({ requestDemo }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Testing);
