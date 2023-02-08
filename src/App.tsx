import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CreatePlayerForm } from './components/player-creation-form';
import { PlayerInfo } from './components/player-info';

const queryClient = new QueryClient();

function App() {
  return <>
  <QueryClientProvider client={queryClient}>

    <PlayerInfo></PlayerInfo>
    <CreatePlayerForm></CreatePlayerForm>


  </QueryClientProvider>
  </>
}

export default App;
