import AppRouter from './routes/AppRouter';
import { UserContext } from './contexts/UserContext';
import { useState } from 'react';

function App() {
  //Definimos un useState para definir el estado que vamos a compartir en toda la aplicación.
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
}

export default App;
