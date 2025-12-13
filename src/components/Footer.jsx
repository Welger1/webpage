import { useState, useEffect } from 'react';
import './Footer.scss';


  
  // Tarkista scroll-asento ja näkyvyys

export default function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  // POISTA: const [lastScrollTop, setLastScrollTop] = useState(0);
  const currentYear = new Date().getFullYear();
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelector('.sections');
      if (!sections) return;
      
      const scrollTop = sections.scrollTop;
      const scrollHeight = sections.scrollHeight;
      const clientHeight = sections.clientHeight;
      
      // Näytä scroll-nappi kun ollaan vähintään 300px alaspäin
      setShowScrollButton(scrollTop > 300);
      
      // Piilota footer kun ollaan alhaalla (viimeinen osio näkyvillä)
      const isAtBottom = scrollHeight - (scrollTop + clientHeight) < 100;
      
      // Näytä footer vain ollessa lähellä pohjaa
      setIsVisible(isAtBottom);
      
      // POISTA: setLastScrollTop(scrollTop); // Turha
    };

    const sectionsContainer = document.querySelector('.sections');
    if (sectionsContainer) {
      sectionsContainer.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (sectionsContainer) {
        sectionsContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  // ... muu koodi pysyy samana

  // Scrollaa ylös ja piilota footer
  const scrollToTop = () => {
    const sections = document.querySelector('.sections');
    const container = document.querySelector('.sections');
    
    if (!sections || !container) return;

    // Piilota footer heti kun nappia painetaan
    setIsVisible(false);
    setShowScrollButton(false);
    
    // Poista scroll-snap väliaikaisesti
    container.classList.add('no-snap-temp');
    
    sections.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    setTimeout(() => {
      container.classList.remove('no-snap-temp');
    }, 600);
  };

  return (
    <>
      {/* Scroll-to-top nappi - näkyy vain kun tarvitaan */}
      {showScrollButton && (
        <button 
          className="footer__scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <span className="footer__scroll-arrow">↑</span>
        </button>
      )}
      
      {/* Footer itse - näkyy vain ollessa pohjalla */}
      {isVisible && (
        <footer className="footer">
          <div className="footer__content">
            <p className="footer__main-text">
              Designed and created by Olli Suominen ©{currentYear}
            </p>
            
            <div className="footer__icon-credits">
              <p className="footer__credits-text">
                All icons by{' '}
                <a 
                  href="https://icons8.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Icons8
                </a>
                {' '}and{' '}
                <a 
                  href="https://www.iconpacks.net" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  Iconpacks
                </a>
              </p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
