import "./App.css";
import { ShipmentTable } from "./components/shipments/ShipmentTable";

function App() {
  return (
    <div className="App">
      <ShipmentTable data={[]}></ShipmentTable>
    </div>
  );
}

export default App;
