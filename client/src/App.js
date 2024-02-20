import { Route, Routes } from "react-router-dom";
import Register from "./pages/Register"
import Login from "./pages/Login"
import ConnectFB from "./pages/ConnectFB"
import Layout from "./pages/Layout";
import DisconnectFB from "./pages/DisconnectFB";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/connectFB" element={<ConnectFB />} />
        <Route path="/disconnectFB" element={<DisconnectFB />} />
      </Route>
    </Routes>
  );
}

export default App;
