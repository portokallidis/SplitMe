// @flow weak

import React, { PropTypes } from 'react';
import { createStyleSheet } from 'jss-theme-reactor';
import withStyles from 'modules/styles/withStyles';

const styleSheet = createStyleSheet('ViewContainer', () => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
}));

const ViewContainer = (props) => {
  const {
    children,
    classes,
  } = props;

  return (
    <div className={classes.root}>
      {children}
    </div>
  );
};

ViewContainer.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ViewContainer);
