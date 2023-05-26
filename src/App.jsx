import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import Header from "./Components/Header/Header";
import HomeBanner from "./Components/Homes/HomeBanner/HomeBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeBanner />
    </div>
  );
}

export default App;
