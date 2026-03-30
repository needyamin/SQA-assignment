import "./styles/globals.css";
import RouterIndex from "./routes/RouteIndex";
import { AppProviders } from "./providers/AppProvider";
function App() {
  return (
    <AppProviders>
      <RouterIndex />
    </AppProviders>
  );
}

export default App;
