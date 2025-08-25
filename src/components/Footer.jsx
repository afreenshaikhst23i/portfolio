function Footer() {
    const  currentYear = new Date().getFullYear();
    return (
        <footer className="footer-section scroll-reveal scroll-reveal-bottom" id="footer">
            <p className="copyright-text">Loosely designed in <strong>VS Code</strong> and fully hand-coded using <strong>React.js,</strong> <strong>Vite</strong>, and <strong>Tailwind CSS</strong>. Deployed via <strong>GitHub Pages</strong>. © {currentYear} Afreen Zuber Shaikh.</p>
        </footer>
    );
}
export default Footer;