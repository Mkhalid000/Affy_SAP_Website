import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css"
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Digital } from "./Pages/Digital";
import { NotFound } from "./Pages/NotFound";
import { HXM } from "./Pages/HXM";
import { HANA } from "./Pages/HANA";
import { Analytics } from "./Pages/Analytics";
import { Business } from "./Pages/Business";
import { Customer } from "./Pages/Customer";
import { Cloud } from "./Pages/Cloud";
import { Sales } from "./Pages/Sales";
import { Salesforce } from "./Pages/Salesforce";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sap_hxm" element={<HXM />} />
          <Route path="/hana" element={<HANA />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/business" element={<Business />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/cloud" element={<Cloud />} />
          <Route path="/Sales_cloud" element={<Sales />} />
          <Route path="/sales_force" element={<Salesforce />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
