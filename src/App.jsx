import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/zoom';

function App() {
    return (
        <div className="page-wrapper">
            <Header />
            <main className="main-content">
                <About />
                <Skills />
                <Projects />
                <Certificates />
                <Footer />
            </main>
        </div>
    );
}

export default App;
