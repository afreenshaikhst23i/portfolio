function Contact() {
    return (
        <section className="contact-section scroll-reveal scroll-reveal-bottom" id="contact">
            <div className="heading-wrapper">
                <h2 className="primary-heading">Contact Me</h2>
                <span className="primary-heading-shadow" aria-hidden="true">Contact Me</span>
            </div>
            <div className="contact-wrap">
                <form action="#" className="space-y-4">
                    <div>
                        <label for="name" className="sr-only">Your name</label>
                        <input type="text" id="name" className="basic-input" placeholder="Your name" required="" />
                    </div>
                    <div>
                        <label for="email" className="sr-only">Your email</label>
                        <input type="email" id="email" className="basic-input" placeholder="Your email" required="" />
                    </div>
                    <div>
                        <label for="subject" className="sr-only">Subject</label>
                        <input type="text" id="subject" className="basic-input" placeholder="Subject" required="" />
                    </div>
                    <div>
                        <label for="message" className="sr-only">Your message</label>
                        <textarea id="message" rows="5" className="basic-textarea" placeholder="Message"></textarea>
                    </div>
                    <div className="cta-wrapper">
                        <button type="submit" className="primary-btn">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contact;
