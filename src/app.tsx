// Navigation
import { RoutesProvider } from './navigation';
// Providers
import { AppProviders } from './providers';

const App: React.FC = () => {
  return (
    <AppProviders>
      <RoutesProvider />
    </AppProviders>
  );
};

export default App;
