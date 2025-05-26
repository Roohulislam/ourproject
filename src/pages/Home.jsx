import React from 'react';
import Hero from '../components/Hero';
import Products from '../components/Products/Products';
import Services from '../components/Services/Service';
import Location from '../components/Location';
import FAQ from '../components/FAQ';
import Team from '../components/Team';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <section id="products">
        <Products />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="locations">
        <Location />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="team">
        <Team />
      </section>
    </main>
  );
};

export default Home;