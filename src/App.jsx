import RouterConfig from "./config/RouterConfig";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <RouterConfig />
    </LanguageProvider>
  );
}

export default App;
