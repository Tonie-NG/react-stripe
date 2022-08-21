import Pay from './Pay';
import Sucess from './Sucess';

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <div>
        <Routes>
        <Route path="/pay" element={<Pay />} />
        <Route path="/success" element={<Sucess />} />
      </Routes>
      </div>
  )
}

export default App