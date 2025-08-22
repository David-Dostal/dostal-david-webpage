// Create Import File
import "photoswipe/dist/photoswipe.css";
import PageScrollTop from "./component/PageScrollTop";
import "./index.scss";

// Home layout

// Dark Home Layout
import DarkPortfolioLanding from "./main/PortfolioLanding";

// Element Layout
import Error404 from "./elements/error404";

// Blocks Layout

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<DarkPortfolioLanding />} />

          {/* Error Route */}
          <Route path={`404`} element={<Error404 />} />
          <Route path="*" element={<Error404 />} />


        </Route>
      </Routes>
      <PageScrollTop />
    </>
  );
}

export default App;
