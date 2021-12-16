import { useState, useMemo } from 'react';
import debounce from 'lodash/debounce';

export const useDebouncedSearch = (initialQuery, searchFunction) => {
  // Handle the input text state
  const [query, setQuery] = useState(initialQuery || '');

  // The async callback is run each time the text changes,
  // but as the search function is debounced, it does not
  // fire a new request on each keystroke
  const searchResults = useMemo(async () => {
    if (query.length === 0) {
      return [];
    } else {
      return debounce(searchFunction, 300);
    }
  }, [query.length, searchFunction]);

  // Return everything needed for the hook consumer
  return {
    query,
    setQuery,
    searchResults,
  };
};
