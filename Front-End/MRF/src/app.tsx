import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Faqs } from "./pages/Faqs/Faqs";
import { LegalAdvise } from "./pages/LegalAdvise/LegalAdvise";
import { OurMission } from "./pages/OurMission/OurMission";
import { Contact } from "./pages/Contact/Contact";
import { Privacy } from "./pages/Privacy/Privacy";
import { Rentals } from "./pages/Rentals/Rentals";
import { Tours } from "./pages/Tours/Tours";
import { WhatsAppButton } from "./components/WhatsAppButton/WhatsAppButton";
import { ScrollButton } from "./components/ScrollButton/ScrollButton";
import { MenuProvider } from "./data/MenuContext";
import { Sales } from "./pages/Sales/Sales";
import { ScrollToTop} from "./components/ScrollToTop/ScrollToTop"

export const App: FC = () => {
  return (

    <MenuProvider>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="*" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home />} />
          <Route path="/our_mission" element={<OurMission />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/rentals" element={<Rentals />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/legal_advise" element={<LegalAdvise />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <WhatsAppButton />
        <ScrollButton />
        <Footer />
      </Router>
    </MenuProvider>
  );
};
