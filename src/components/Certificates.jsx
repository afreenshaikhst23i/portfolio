import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard, Zoom } from 'swiper/modules';

import certGenAi from '../assets/images/certificates/generative-AI-fundamentals.jpg';
import certGithub from '../assets/images/certificates/github.jpg';
import certJavascript from '../assets/images/certificates/javascript.jpg';
import certTypescript from '../assets/images/certificates/typescript.jpg';
import certEs6 from '../assets/images/certificates/es6.jpg';
import certTailwind from '../assets/images/certificates/tailwind.jpg';
import certSass from '../assets/images/certificates/sass.jpg';

const certificates = [
    {
        image: certGenAi,
        source: "Infogain India Pvt Ltd",
        title: "Generative AI Fundamentals",
    },
    {
        image: certGithub,
        source: "Udemy",
        title: "GitHub Ultimate: Master Git and GitHub - Beginner to Expert",
    },
    {
        image: certJavascript,
        source: "Udemy",
        title: "The Complete JavaScript Course 2024: From Zero to Expert!",
    },
    {
        image: certTypescript,
        source: "Udemy",
        title: "Introduction to TypeScript Development",
    },
    {
        image: certEs6,
        source: "Udemy",
        title: "ES6 Javascript: The Complete Developer's Guide",
    },
    {
        image: certTailwind,
        source: "Udemy",
        title: "Tailwind CSS From Scratch | Learn By Building Projects",
    },
    {
        image: certSass,
        source: "Udemy",
        title: "SASS - The Complete SASS Course (CSS Preprocessor)",
    }
]

function  Certificates() {

    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    const openModal = (index) => {
        setActiveIndex(index);
        setIsOpen(true);
    };

    const closeModal = () => setIsOpen(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }

            if (e.key === 'Tab' && isOpen) {
                const modal = document.querySelector('.modal-content');
                const focusableElements = modal.querySelectorAll(
                    'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
                );
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (!focusableElements.length) return;

                if (e.shiftKey) {
                    if (document.activeElement === firstElement) {
                        e.preventDefault();
                        lastElement.focus();
                    }
                } else {
                    if (document.activeElement === lastElement) {
                        e.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);

            setTimeout(() => {
                const modal = document.querySelector('.modal-content');
                const focusable = modal.querySelector(
                    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
                );
                if (focusable) focusable.focus();
            }, 0);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen]);

    return (
        <section className="certificate-section" id="certificate">
            <div className="heading-wrapper scroll-reveal scroll-reveal-bottom">
                <h2 className="primary-heading">Certifications</h2>
                <span className="primary-heading-shadow" aria-hidden="true">Certifications</span>
            </div>
            <div className="certificate-wrap">
                <ul className="certificate-list">
                    {certificates.map((cert, index) => (
                        <li className="certificates scroll-reveal scroll-reveal-right" key={index}>
                            <button className='crt-btn' type="button" onClick={() => openModal(index)}> 
                                <img src={cert.image} alt="{cert.title}" />
                                <div>
                                    <p className="text-gray-400 font-bold">{cert.source}</p>
                                    <p>{cert.title}</p>
                                </div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div
                        className="modal-content swiper-modal"
                        onClick={(e) => e.stopPropagation()}
                        role="dialog"
                        aria-modal="true"
                    >
                        <button className="close-btn" onClick={closeModal} aria-label="Close modal">
                            ×
                        </button>

                        <Swiper
                            initialSlide={activeIndex}
                            modules={[Navigation, Keyboard, Zoom]}
                            navigation
                            keyboard
                            zoom
                            spaceBetween={30}
                            className="mySwiper"
                        >
                            {certificates.map((cert, index) => (
                                <SwiperSlide key={index}>
                                    <div className="swiper-zoom-container">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </section>
    );
}
export default Certificates;