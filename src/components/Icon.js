import React from 'react';

/**
 * @function Icon
 */
const Icon = ({ type, onClick }) => (
  <i className={`Icon fa fa-${type}`} onClick={onClick} />
)

Icon.defaultProps = {
  onClick: null
};

export default Icon;
