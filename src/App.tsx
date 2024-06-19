import {BrowserRouter as Router,} from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
      <AppRouter />
      </AuthProvider>
    </Router>
  );
}

export default App;
