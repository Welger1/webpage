import { Link } from 'react-router-dom';
import './Sections.scss';

export default function Sections() {
  return (
    <main className="sections">
      {/* Welcome-osio */}
      <section className="section welcome">
        <h2>Welcome</h2>
        <Link to="/photos" className="section-link">Explore</Link>
      </section>

      {/* Photos & Videos -osio */}
      <section className="section photos-videos">
        <h2>Photos & Videos</h2>
        <Link to="/photos" className='section-link'>View Gallery</Link>
      </section>

      {/* Software-osio */}
      <section className="section software">
        <h2>My Tools</h2>
        <Link to="/software" className='section-link'>View all</Link>
      </section>

      {/* Contact-osio */}
      <section className="section contact">
        <h2>Contact</h2>
        <p>ollisu@gmail.com</p>
        <Link to="/socials" className='section-link'>Social media</Link>
      </section>
    </main>
  );
}
