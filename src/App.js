import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>Home</div>} />
      <Route path='testing' element={<div>Testing route</div>} />
    </Routes>
  </BrowserRouter>
}

export default App;
