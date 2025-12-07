import './Navbar.scss';

const useScrollToSection = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const container = document.querySelector('.sections');

    if (!element || !container) return;

    // poista scroll-snap hetkeksi
    container.classList.add('no-snap-temp');

    // scrollaa kohteeseen
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

export default function Navbar() {
  const scrollToSection = useScrollToSection();
  

  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <button
          onClick={() => scrollToSection('welcome')}
          className="navbar__link"
          >
            Olli Suominen
          </button>
        </li>
        <li className="navbar__item">
          <button
          onClick={() => scrollToSection('photos-videos')}
          className="navbar__link"
          >
            Photo & Video
          </button>
        </li>
        <li className="navbar__item">
          <button
          onClick={() => scrollToSection('software')}
          className="navbar__link"
          >
            My Tools
          </button>
        </li>
        <li className="navbar__item">
          <button
          onClick={() => scrollToSection('contact')}
          className="navbar__link"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
}
