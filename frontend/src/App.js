import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/i18n";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import LiquidProducts from "@/pages/LiquidProducts";
import Granulates from "@/pages/Granulates";
import LawnsAndTurf from "@/pages/LawnsAndTurf";
import ManufacturingProcess from "@/pages/ManufacturingProcess";
import MarketInsights from "@/pages/MarketInsights";
import Contact from "@/pages/Contact";
import Impressum from "@/pages/Impressum";

function App() {
    return (
        <div className="App">
            <LanguageProvider>
                <BrowserRouter>
                    <ScrollToTop />
                    <Layout>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/liquid" element={<LiquidProducts />} />
                            <Route path="/granulates" element={<Granulates />} />
                            <Route path="/lawns-and-turf" element={<LawnsAndTurf />} />
                            <Route path="/manufacturing" element={<ManufacturingProcess />} />
                            <Route path="/market-insights" element={<MarketInsights />} />
                            <Route path="/contact" element={<Contact />} />
                            <Route path="/impressum-datenschutz" element={<Impressum />} />
                            <Route path="*" element={<Home />} />
                        </Routes>
                    </Layout>
                </BrowserRouter>
            </LanguageProvider>
        </div>
    );
}

export default App;
