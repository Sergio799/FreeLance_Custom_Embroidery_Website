'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import dynamic from 'next/dynamic';

const Antigravity = dynamic(() => import('@/components/Antigravity'), { 
  ssr: false,
  loading: () => null
});

export default function AboutPage() {
  const services = [
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-[#B3CFE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Computer Works',
      description: 'Precision digital embroidery for logos, text, and complex designs',
      color: 'from-[#B3CFE5] to-white',
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-[#B3CFE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Maggam Work',
      description: 'Traditional handwork with beads and sequins for sarees and blouses',
      color: 'from-[#B3CFE5] to-white',
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 text-[#B3CFE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Computer Embroidery',
      description: 'Automated machine embroidery for bulk orders and uniforms',
      color: 'from-[#B3CFE5] to-white',
    },
  ];

  const stats = [
    { value: '13+', label: 'Years of Experience', description: 'Long-term expertise in embroidery field', color: 'bg-[#B3CFE5]/20', textColor: 'text-[#B3CFE5]' },
    { value: '5K+', label: 'Happy Customers', description: 'Thousands of customers satisfied with our services', color: 'bg-[#B3CFE5]/20', textColor: 'text-[#B3CFE5]' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation currentPage="about" />

      {/* 3D Particle Effect Background */}
      <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
          <Antigravity
          count={200}
          magnetRadius={5}
          ringRadius={6}
          waveSpeed={0.3}
          waveAmplitude={0.8}
          particleSize={1.2}
          lerpSpeed={0.06}
          color={'#B3CFE5'}
          autoAnimate={true}
          particleVariance={0.8}
          />
        </div>
      </div>

      <main className="flex-1 py-12 relative z-10" id="main-content" role="main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="relative mb-16 animate-fade-in">
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-5"
              style={{ backgroundImage: 'url(/theme.png)' }}
              aria-hidden="true"
            ></div>
            <div className="relative z-10 text-center py-8 md:py-12">
              <h1 className="text-3xl md:text-5xl font-bold text-[#000000] mb-6 md:mb-8 uppercase tracking-wide">ABOUT US</h1>
              <p className="text-lg md:text-2xl text-[#000000] max-w-3xl md:max-w-4xl mx-auto px-4 font-medium">
                At Sai Manjari, we bring the art of embroidery to life. From traditional handwork to modern digital designs, we deliver artistry and precision in every stitch.
              </p>
            </div>
          </div>

          {/* Our Story & Vision */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <article className="bg-white rounded-2xl shadow-lg p-8 border border-[#B3CFE5]/20 animate-slide-left">
              <h2 className="text-2xl font-bold text-[#000000] mb-6 uppercase tracking-wide">OUR STORY</h2>
              <div className="space-y-4 text-[#000000]">
                <p className="font-medium">
                  Sai Manjari began in 2010 as a small family business with a passion for the art of embroidery. Starting with traditional Maggam work, we gradually embraced modern computer embroidery technologies over time.
                </p>
                <p className="font-medium">
                  Over the past 13 years, we have served thousands of customers, transforming their dreams into beautiful embroidery designs. Our work spans from sarees to corporate uniforms.
                </p>
                <p className="font-medium">
                  We focus on quality, creativity, and customer satisfaction, approaching every project with love and dedication.
                </p>
              </div>
            </article>

            <article className="bg-white rounded-2xl shadow-lg p-8 border border-[#B3CFE5]/20 animate-slide-right">
              <h2 className="text-2xl font-bold text-[#000000] mb-6 uppercase tracking-wide">OUR VISION</h2>
              <div className="space-y-4 text-[#000000]">
                <p className="font-medium">
                  Our goal is to become the leading embroidery service provider in Andhra Pradesh. We aim to combine traditional arts with modern technology to provide every customer with an exceptional experience.
                </p>
                <p className="font-medium">
                  We also believe in encouraging local artisans and teaching embroidery arts to the youth.
                </p>
                <blockquote className="bg-[#B3CFE5]/10 rounded-xl p-4 mt-4">
                  <p className="text-[#B3CFE5] font-bold text-center italic text-lg">
                    &ldquo;Every stitch tells a story, every design holds dreams&rdquo;
                  </p>
                </blockquote>
              </div>
            </article>
          </div>

          {/* Our Services */}
          <section className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-12 md:mb-16 border border-[#B3CFE5]/20 animate-fade-in" aria-labelledby="services-heading">
            <h2 id="services-heading" className="text-xl md:text-2xl font-bold text-[#000000] mb-6 md:mb-8 text-center uppercase tracking-wide">OUR SERVICES</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-bold text-[#000000] mb-2 uppercase tracking-wide">{service.title}</h3>
                  <p className="text-[#000000] text-sm font-medium">{service.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="bg-white rounded-2xl shadow-lg p-8 mb-16 border border-[#B3CFE5]/20 animate-fade-in" aria-labelledby="stats-heading">
            <h2 id="stats-heading" className="text-2xl font-bold text-[#000000] mb-8 text-center uppercase tracking-wide">WHY CHOOSE US?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`w-12 h-12 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className={`${stat.textColor} font-bold text-xl`}>{stat.value}</span>
                  </div>
                  <h3 className="font-bold text-[#000000] mb-1 uppercase tracking-wide">{stat.label}</h3>
                  <p className="text-[#000000] text-sm font-medium">{stat.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center animate-fade-in">
            <div className="bg-[#B3CFE5] rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#000000] uppercase tracking-wide">MAKE YOUR DREAM DESIGN A REALITY</h2>
              <p className="text-[#000000] mb-6 max-w-2xl mx-auto font-medium">
                With our expertise and your imagination combined, let&apos;s create amazing embroidery designs. Contact us today!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-[#000000] px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-white/90 transition-all shadow-xl transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B3CFE5]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/designs"
                  className="border-2 border-white bg-transparent text-[#000000] px-10 py-4 rounded-full text-lg font-bold uppercase tracking-wide hover:bg-white transition-all transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#B3CFE5]"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
