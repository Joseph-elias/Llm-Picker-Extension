import React from 'react';
import PopupContainer from './components/PopupContainer';
import Header from './components/Header';
import QueryInput from './components/QueryInput';
import ActionButton from './components/ActionButton';
import ResultArea from './components/ResultArea';
import { useLLMPicker } from './hooks/useLLMPicker';

function App() {
  const { 
    query, 
    setQuery, 
    result, 
    isLoading, 
    findBestLLM 
  } = useLLMPicker();

  return (
    <PopupContainer>
      <Header title="LLM Picker" />
      <QueryInput 
        value={query} 
        onChange={setQuery} 
        placeholder="What do you want to do?"
      />
      <ActionButton 
        onClick={findBestLLM} 
        isLoading={isLoading}
      >
        Find Best LLM
      </ActionButton>
      <ResultArea result={result} />
    </PopupContainer>
  );
}

export default App;