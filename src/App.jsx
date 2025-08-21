
import RoutePages from "./RoutePages";
import IndexProvider from "./context/indexContext";
function App() {
  return (
    <>
    <IndexProvider>
        <RoutePages/>
    </IndexProvider>
    </>
  );
}

export default App;
