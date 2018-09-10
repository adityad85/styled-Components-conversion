import React from 'react';
import Autosuggest from 'react-autosuggest';

import './index.css';
import PopupBox from '../components/popup';
import renderSuggestion from '../components/RenderSuggestion';
import suggestionsHelpers from '../helpers/suggestions';
import SearchButton from '../components/StyledComponents/SearchButton/SearchButton';

const { getSuggestions, getSuggestionValue } = suggestionsHelpers;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
    };
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  }

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
    });
  }

  openPopup = () => {
    this.setState(() => ({ showPopup: true }));
  }

  handleChange = (e, { newValue }) => {
    this.setState(() => ({
      value: newValue,
    }));
    this.setState(() => ({ showPopup: false }));
  }

  render() {
    const { value, showPopup, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Type to Start Searching',
      value,
      onChange: this.handleChange,
    };
    return (
      <div className="root-container">
        <div className="toolbar">
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps}
            onSuggestionSelected={this.openPopup}
          />
          <SearchButton>
            <i className="fa fa-search" />
            {' '}
            SEARCH
          </SearchButton>
        </div>
        {showPopup
          ? (
            <PopupBox value={value} />
          )
          : null
        }
      </div>
    );
  }
}

export default App;
