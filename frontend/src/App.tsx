import React from 'react';
import PopupContainer from './components/PopupContainer';
import Header from './components/Header';
import QueryInput from './components/QueryInput';
import ActionButton from './components/ActionButton';
import ResultArea from './components/ResultArea';
import Footer from './components/Footer';
import FilterPanel from './components/FilterPanel'; // ✅ import this
import { useLLMPicker } from './hooks/useLLMPicker';

function App() {
  const { 
    query, 
    setQuery, 
    filters,
    setFilters,
    result, 
    isLoading, 
    findBestLLM 
  } = useLLMPicker(); // ✅ include filters and setFilters

  return (
    <PopupContainer>
      <Header title="LLM Picker" />
      <QueryInput value={query} onChange={setQuery} placeholder="What do you want to do?" />

      {/* ✅ Filters go here */}
      <FilterPanel filters={filters} setFilters={setFilters} />

      <ActionButton onClick={findBestLLM} isLoading={isLoading}>
        Find Best LLM
      </ActionButton>

      <ResultArea result={result} />
      <Footer />
    </PopupContainer>
  );
}

export default App;
