import './Sections.scss';

export default function Sections() {
  return (
    <main className="sections">
      {/* Welcome-osio */}
      <section className="section welcome">
        <h2>Welcome</h2>
        <p>Welcome to my page! Täällä voit tutustua projekteihini.</p>
      </section>

      {/* Photos & Videos -osio */}
      <section className="section photos-videos">
        <h2>Photos & Videos</h2>
        <p>Photos and Videos from me.</p>
      </section>

      {/* Software-osio */}
      <section className="section software">
        <h2>Software</h2>
        <p>Software i use.</p>
      </section>
    </main>
  );
}
