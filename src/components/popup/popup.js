import React from 'react';
import PropTypes from 'prop-types';
import PopupHeading from '../StyledComponents/Popup Heading/PopupHeading';
import PopupContent from '../StyledComponents/PopupContent/PopupContent';
import PopupButtonsWrapper from '../StyledComponents/PopupButtons/PopupButtonsWrapper';
import PopupButton from '../StyledComponents/PopupButton/PopupButton';
import PopupBackground from '../StyledComponents/PopupBackground/PopupBackground';

class PopupBox extends React.Component {
  clickHandler = () => {
    window.alert('Done!');
  }

  render() {
    const { value } = this.props;
    return (
      <PopupBackground>
        <PopupHeading>
          {value.toUpperCase()}
        </PopupHeading>
        <PopupContent>
          <span>Hello!</span>
        </PopupContent>
        <PopupButtonsWrapper>
          <PopupButton>Cancel</PopupButton>
          <PopupButton onClick={this.clickHandler}>Proceed</PopupButton>
        </PopupButtonsWrapper>
      </PopupBackground>
    );
  }
}

PopupBox.propTypes = {
  value: PropTypes.string.isRequired,
};

export default PopupBox;
