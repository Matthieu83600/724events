/* istanbul ignore file */
import "./App.scss";
import Page from "./pages/Home";
import { DataProvider } from "./contexts/DataContext";

function App() {
  return (
    <DataProvider>
      <Page />
    </DataProvider>
  );
}

export default App;
