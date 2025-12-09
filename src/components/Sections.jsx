import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Sections.scss';
//import { color } from 'framer-motion';
//import { div } from 'framer-motion/client';
//import { BiFontFamily } from 'react-icons/bi';
//import { div } from 'framer-motion/client';

// Software ikonit
const softWareIcons = [
  { id: 1, name: 'Davinci', icon: '/src/assets/images/icons/icons8-davinci.png'},
  { id: 2, name: 'Lightroom', icon: '/src/assets/images/icons/icons8-lightroom.png'},
  { id: 3, name: 'Canva', icon: '/src/assets/images/icons/icons8-canva-app-480.png'},
  { id: 4, name: 'Notion', icon: '/src/assets/images/icons/notion-black-logo-22045.png'},
  { id: 5, name: 'VS Code', icon: '/src/assets/images/icons/visual-studio-code-blue-15304.png'},
  { id: 6, name: 'HTML5', icon: '/src/assets/images/icons/icons8-html5-480.png'},
  { id: 7, name: 'CSS', icon: '/src/assets/images/icons/icons8-css3-480.png'},
  { id: 8, name: 'JavaScript', icon: '/src/assets/images/icons/icons8-javascript-logo-480.png'},
  { id: 9, name: 'React', icon: '/src/assets/images/icons/react-blue-logo.png'},
  { id: 10, name: 'SQL', icon: '/src/assets/images/icons/icons8-sql.png'},
  { id: 11, name: 'Node.js', icon: '/src/assets/images/icons/icons8-nodejs-240.png'},
];

// Social media linkit
const socialMediaLinks = [
  {
    id: 1,
    name: 'Instagram',
    icon: '/src/assets/images/icons/instagram-icon-color.png',
    url: 'https://www.instagram.com/ollisu/',
    color: '#E1306C'
  },
  {
    id: 2,
    name: 'TikTok',
    icon: '/src/assets/images/icons/tiktok-icon-color.png',
    url: 'https://www.tiktok.com/@ollisu',
    color: '#000000'
  },
  {
    id: 3,
    name: 'YouTube',
    icon: '/src/assets/images/icons/youtube-icon-color.png',
    url: 'https://www.youtube.com/@olsu',
    color: '#FF0000'
  },
  {
    id: 4,
    name: 'Threads',
    icon: '/src/assets/images/icons/threads-icon-color.png',
    url: 'https://www.threads.com/@ollisu',
    color: '#000000'
  },
  {
    id: 5,
    name: 'Gmail',
    icon: '/src/assets/images/icons/gmail-icon-color.png',
    url: 'mailto:ollisu@gmail.com',
    color: '#EA4335'
  },
];




const useScrollToSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const container = document.querySelector('.sections');

    if (!element || !container) return;

    container.classList.add('no-snap-temp');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    setTimeout(() => {
      container.classList.remove('no-snap-temp');
    }, 600);
  };

  return scrollToSection;
};

export default function Sections() {
  const scrollToSection = useScrollToSection();
  const [showSoftwareIcons, setShowSoftwareIcons] = useState(false)
  const [showSocialLinks, setShowSocialLinks] = useState(false)
  const [showGallery, setShowGallery] = useState(false);
// Kuvagallerian kuvat
const galleryImages = [
  { id: 1, src: '/src/assets/images/winter/_MJA1793.jpeg', alt: 'Kuva 1' },
  { id: 2, src: '/src/assets/images/winter/_MJA1790.jpeg', alt: 'Kuva 2' },
  { id: 3, src: '/src/assets/images/nature/_MJA1511.jpeg', alt: 'Kuva 3' },
  { id: 4, src: '/src/assets/images/nature/IMG_5224.jpeg', alt: 'Kuva 4' },
  { id: 5, src: '/src/assets/images/details/details-layer.jpg', alt: 'Kuva 5' },
  { id: 6, src: '/src/assets/images/details/wood-three-layer.jpeg', alt: 'Kuva 6' },
  { id: 7, src: '/src/assets/images/details/_MJA1164.jpeg', alt: 'Kuva 7' },
  { id: 8, src: '/src/assets/images/details/_MJA1179.jpeg', alt: 'Kuva 8' },
  { id: 9, src: '/src/assets/images/life/_MJA0889.jpeg', alt: 'Kuva 9' },
  { id: 10, src: '/src/assets/images/life/DSC04146.jpeg', alt: 'Kuva 10' },
];

  const handleSoftwareClick = (e) => {
    e.preventDefault();
    setShowSoftwareIcons(!showSoftwareIcons);
  };

  const handleSocialClick = (e) => {
    e.preventDefault();
    setShowSocialLinks(!showSocialLinks);
  };

  // avaa linkki uuteen välilehteen
  const handleSocialLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="sections">
      {/* Welcome-osio */}
      <section id="welcome" className="section welcome">
        <h2>Welcome</h2>
        <button
          onClick={() => scrollToSection('photos-videos')}
          className="section-link with-arrows"
        >
          <span className="arrow">↓</span>
          Explore
          <span className="arrow">↓</span>
        </button>
      </section>

      


      {/* Photos & Videos -osio */}
      <section id="photos-videos" className="section photos-videos">
        <h2>Photos & Videos</h2>
          <button
            onClick={() => setShowGallery(true)} className='section-link'
          >
            View Gallery
          </button>

          {showGallery && (
            <div className='gallery-modal'>
              <div className='gallery-modal__content'>
                <button
                className='gallery-modal__close'
                onClick={() => setShowGallery(false)}
                >
                  &times;
                </button>
                <div className='gallery-modal__grid'>
                  {galleryImages.map((image) => (
                    <div key={image.id} className='gallery-modal__item'>
                      <img
                      src={image.src}
                      alt={image.alt}
                      className='gallery-modal__image'
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
      </section>

      {/* Software-osio */}
      <section id="software" className="section software">
        <h2>My Tools</h2>


        <button 
          onClick={handleSoftwareClick}
          className={`section-link tools-toggle ${showSoftwareIcons ? 'active' : ''}`}
        >
          {showSoftwareIcons ? 'Hide tools' : 'Show tools'}
        </button>

        {showSoftwareIcons && (
          <div className='software-icons'>
            <div className='software-icons__grid'>
              {softWareIcons.map((tool) => (
                <div key={tool.id} className='software-icon'>
                  <img 
                  src={tool.icon} 
                  alt={tool.name}
                  className='software-icon__image'
                  loading='lazy' 
                  />
                  <span className='software-icon__name'>{tool.name}</span>
                </div>
              ))}
          </div>
        
        {/*<Link to="/software" className="section-link software-all-link">
        View all links
        </Link>*/}
       
        </div>
        )} 
      </section>

      {/* Contact-osio */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>ollisuo@proton.me</p>

        {/* Social media button */}
        <button 
          onClick={handleSocialClick}
          className={`section-link social-toggle ${showSocialLinks ? 'active' : ''}`}
        >
          <span className="social-toggle__text">
            {showSocialLinks ? 'Hide social media' : 'Social media'}
          </span>
         
        </button>

        {/* Social media linkit */}
        {showSocialLinks && (
          <div className='social-links'>
            <div className='social-links__grid'>
              {socialMediaLinks.map((social) => (
                <button
                  key={social.id}
                  onClick={() => handleSocialLinkClick(social.url)}
                  className='social-link'
                  style={{
                  backgroundColor: showSocialLinks ? `$ {social.color}40` : 'transparent', borderColor: social.color
                  }}
                  title={`Open ${social.name}`}
                >
                  <img
                  src={social.icon}
                  alt={social.name}
                  className='social-link__icon'
                  />
                  <span className='social-link__name'>{social.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}