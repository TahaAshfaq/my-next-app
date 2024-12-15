import Board from "./components/Board.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Footer from "./components/Footer.jsx";
import Workspace from "./components/Workspace.jsx";
import CustomBoard from "./components/CustomBoard.jsx";







export default function Home() {
  return (
    <>
    <Navbar />
    <Hero />
    <Features />
    <Workspace />
    <CustomBoard />
    <Footer />


    {/* <Board /> */}
    {/* <Dashboard /> */}
    </>
  );
}
