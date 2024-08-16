import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Nav";
import {
  CatalogPage,
  DesignPage,
  FrontEndPage,
  ProgrammingPage,
  TablePage
} from "./pages";
import { Route, BrowserRouter, Routes } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <div className="h-screen w-screen bg-slate-800 flex flex-col items-center text-slate-300 overflow-x-hidden gap-10">
        <div className="flex flex-col items-center">
          <Header />
          <Nav />
        </div>
        <main className="flex flex-col items-center w-full">
          <Routes>
            <Route path="/" element={<TablePage />} />
            <Route path="/front-end" element={<FrontEndPage />} />
            <Route path="/programming" element={<ProgrammingPage />} />
            <Route path="/design" element={<DesignPage />} />
            <Route path="/catalog" element={<CatalogPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
