import React from 'react';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

class Button extends React.Component {
  render () {
    const {handler, type} = this.props;
    return (
      <button className="Counter-button Counter-button--yellow" onClick={handler}>{type}</button>
    );
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['ADD', 'SUBTRACT']).isRequired,
  handler: PropTypes.func.isRequired
};

Button.defaultProps = {
  type: 'ADD',
  handler: noop
};

export default Button;
