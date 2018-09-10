import { suggestionsList } from '../lib/constants';

const getSuggestions = (value) => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0
    ? []
    : suggestionsList.filter(suggestion => suggestion
      .slice(0, inputLength).toLowerCase() === inputValue);
};

const getSuggestionValue = suggestion => suggestion;

export default {
  getSuggestions,
  getSuggestionValue,
};
