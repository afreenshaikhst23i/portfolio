function Contact() {
    return (
        <section class="contact-section scroll-reveal scroll-reveal-bottom" id="contact">
            <div class="heading-wrapper">
                <h2 class="primary-heading">Contact Me</h2>
                <span class="primary-heading-shadow" aria-hidden="true">Contact Me</span>
            </div>
            <div class="contact-wrap">
                <form action="#" class="space-y-4">
                    <div>
                        <label for="name" class="sr-only">Your name</label>
                        <input type="text" id="name" class="basic-input" placeholder="Your name" required="" />
                    </div>
                    <div>
                        <label for="email" class="sr-only">Your email</label>
                        <input type="email" id="email" class="basic-input" placeholder="Your email" required="" />
                    </div>
                    <div>
                        <label for="subject" class="sr-only">Subject</label>
                        <input type="text" id="subject" class="basic-input" placeholder="Subject" required="" />
                    </div>
                    <div>
                        <label for="message" class="sr-only">Your message</label>
                        <textarea id="message" rows="5" class="basic-textarea" placeholder="Message"></textarea>
                    </div>
                    <div class="cta-wrapper">
                        <button type="submit" class="primary-btn">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Contact;
