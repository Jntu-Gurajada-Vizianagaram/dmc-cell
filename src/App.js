import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Layout Components
import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header";
import Navbar from "./components/Navbar/Navbar";

// Pages - Home
import Home from "./pages/Home/Home";
import Hardware from "./pages/Home/Hardware";
import Network from "./pages/Home/Network";
import Software from "./pages/Home/Software";
import SurveillanceService from "./pages/Home/SurveillanceService";


// Pages - Governance & DMC
import AboutMain from "./pages/Governance/DMC/AboutMain";
import Activities from "./pages/Governance/DMC/Mandate/Activities";
import Coordinator from "./pages/Governance/DMC/Coordinator/Coordinator";
import Dmc from "./pages/Governance/DMC/Overview/Dmc";
import Facilities from "./pages/Governance/DMC/Facilities/Facilities";
import Former from "./pages/Governance/Archives/Former/Former";
import Futureplans from "./pages/Governance/DMC/Roadmap/Futureplans";
import Supportingstaff from "./pages/Governance/DMC/Secretariat/Supportingstaff";
import UGCDisclosures from "./pages/Governance/Disclosures/UGCDisclosures";

// Pages - Operations
import Infrastructure from "./pages/Operations/Infrastructure/Infrastructure";
import Services from "./pages/Operations/Services/Services";
import Procurement from "./pages/Operations/Procurement/Procurement";
import ContactUs from "./pages/Operations/ContactUs/ContactUs";
import Gallery from "./pages/Operations/Gallery/Gallery";
import Surveillance from "./pages/Operations/Surveillance/Surveillance";

// Pages - Technical Development
import WebDevelopmenTeam from "./pages/Development/WebTeam/WebDevelopmenTeam";
import Adminpanel from "./pages/Development/WebTeam/Adminpanel/Adminpanel";
import DigitalMonitoringCell from "./pages/Development/WebTeam/Dmc/Dmc";
import Examination from "./pages/Development/WebTeam/Examinations/Examination";
import Iqac from "./pages/Development/WebTeam/Iqac/Iqac";
import Leadcontributors from "./pages/Development/WebTeam/Leadcontributors/Leadcontributors";
import Nss from "./pages/Development/WebTeam/Nss/Nss";
import Placement from "./pages/Development/WebTeam/Placement/Placement";
import ResearchAndDevelopment from "./pages/Development/WebTeam/ResearchAndDevelopment/ResearchAndDevelopment";
import Sports from "./pages/Development/WebTeam/Sports/Sports";
import WebsiteTeam from "./pages/Development/WebTeam/Website/Website";
import DevelopersArchive from "./pages/Development/Archives/Archive/DevelopersArchive";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />

      <main style={{ marginTop: "1rem", padding: "0 1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Polished Governance Routes */}
          <Route path="/governance" element={<AboutMain />}>
            <Route path="dmc/overview" element={<Dmc />} />
            <Route path="dmc/coordinator" element={<Coordinator />} />
            <Route path="dmc/secretariat" element={<Supportingstaff />} />
            <Route path="dmc/mandate" element={<Activities />} />
            <Route path="dmc/roadmap" element={<Futureplans />} />
            <Route path="dmc/infrastructure" element={<Facilities />} />
            <Route path="archives/roll-of-honor" element={<Former />} />
            <Route path="disclosures/ugc" element={<UGCDisclosures />} />
          </Route>

          {/* Polished Operations Routes */}
          <Route path="/operations">
            <Route path="infrastructure" element={<Infrastructure />} />
            <Route path="services" element={<Services />} />
            <Route path="procurement" element={<Procurement />} />
            <Route path="surveillance" element={<Surveillance />} />
          </Route>

          <Route path="/contact" element={<ContactUs />} />
          <Route path="/media/gallery" element={<Gallery />} />

          {/* Polished Technical Development Routes */}
          <Route path="/development" element={<WebDevelopmenTeam />}>
            <Route path="technical-team" element={<Leadcontributors />} />
            <Route path="archives" element={<DevelopersArchive />} />
            <Route path="projects/website" element={<WebsiteTeam />} />
            <Route path="projects/admin" element={<Adminpanel />} />
            <Route path="cells/iqac" element={<Iqac />} />
            <Route path="cells/placement" element={<Placement />} />
            <Route path="cells/dmc" element={<DigitalMonitoringCell />} />
            <Route path="cells/rnd" element={<ResearchAndDevelopment />} />
            <Route path="cells/examination" element={<Examination />} />
            <Route path="cells/nss" element={<Nss />} />
            <Route path="cells/sports" element={<Sports />} />
          </Route>

          {/* Home Legacy Services */}
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/network" element={<Network />} />
          <Route path="/surveillance-service" element={<SurveillanceService />} />
          <Route path="/software" element={<Software />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
