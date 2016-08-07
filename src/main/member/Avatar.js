// @flow weak

import React, {PropTypes} from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import Avatar from 'material-ui-build/src/Avatar';
import pure from 'recompose/pure';
import accountUtils from 'main/account/utils';

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let colour = '#';

  for (i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xFF;
    colour += (`00${value.toString(16)}`).substr(-2);
  }

  return colour;
}

const MemberAvatar = (props) => {
  const {
    member,
    style: styleProp,
    size,
  } = props;

  let style = styleProp;

  if (!style) {
    style = {};
  }

  if (member.get('photo')) {
    return <Avatar src={member.get('photo')} style={style} size={size} />;
  } else {
    const name = accountUtils.getNameMember(member);

    return (
      <Avatar
        backgroundColor={stringToColor(name)}
        style={style}
        size={size}
      >
        {name.charAt(0).toUpperCase()}
      </Avatar>
    );
  }
};

MemberAvatar.propTypes = {
  member: ImmutablePropTypes.shape({
    photo: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  size: PropTypes.number,
  style: PropTypes.object,
};

MemberAvatar.defaultProps = {
  size: 40,
};

export default pure(MemberAvatar);
