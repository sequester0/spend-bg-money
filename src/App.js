//import "./App.css";
import BillGates from "./components/BillGates";
import Header from "./components/Header";
import Money from "./components/Money";
import Products from "./components/Products";
import Receipt from "./components/Receipt";

function App() {
  return (
    <div className="App">
      <Header />
      <BillGates />
      <Money />
      <Products />
      <Receipt />
    </div>
  );
}

export default App;
