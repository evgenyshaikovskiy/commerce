import Home from "./components/routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/routes/navigation/navigation.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<div>IAM SHOP</div>}></Route>
      </Route>
    </Routes>
  );
};

export default App;
