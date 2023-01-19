import Home from "./routes/home/home.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./components/sign-in/authentication.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />}></Route>
        <Route path="/shop" element={<div>IAM SHOP</div>}></Route>
        <Route path="/sign-in" element={<Authentication />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
