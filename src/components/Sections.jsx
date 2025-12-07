import { Link } from 'react-router-dom';
import './Sections.scss';
import { BiFontFamily } from 'react-icons/bi';

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
        <Link to="/photos" className='section-link'>View Gallery</Link>
      </section>

      {/* Software-osio */}
      <section id="software" className="section software">
        <h2>My Tools</h2>
        <Link to="/software" className='section-link'>View all</Link>
      </section>

      {/* Contact-osio */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>ollisu@gmail.com</p>
        <Link to="/socials" className='section-link'>Social media</Link>
      </section>
    </main>
  );
}
