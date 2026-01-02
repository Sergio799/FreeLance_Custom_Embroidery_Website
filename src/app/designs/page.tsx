'use client';

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useState } from 'react'
import dynamic from 'next/dynamic'

const Antigravity = dynamic(() => import('@/components/Antigravity'), { 
  ssr: false,
  loading: () => null
})

export default function DesignsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Designs', color: 'from-[#B3CFE5] to-white' },
    { id: 'computer-works', label: 'Computer Works', color: 'from-[#B3CFE5] to-white' },
    { id: 'maggam-work', label: 'Maggam Work', color: 'from-[#B3CFE5] to-white' },
    { id: 'computer-embroidery', label: 'Computer Embroidery', color: 'from-[#B3CFE5] to-white' },
  ];

  const designs = [
    {
      id: 1,
      category: 'computer-works',
      title: 'Digital Logo Design',
      description: 'Precision embroidered corporate logo with fine details',
      color: 'from-[#B3CFE5] to-white',
      iconColor: 'text-[#B3CFE5]',
      badgeColor: 'bg-[#B3CFE5]'
    },
    {
      id: 2,
      category: 'maggam-work',
      title: 'Traditional Blouse Design',
      description: 'Handcrafted beadwork with intricate patterns',
      color: 'from-[#B3CFE5] to-white',
      iconColor: 'text-[#B3CFE5]',
      badgeColor: 'bg-[#B3CFE5]'
    },
    {
      id: 3,
      category: 'computer-embroidery',
      title: 'Uniform Embroidery',
      description: 'Bulk order machine embroidery for corporate uniforms',
      color: 'from-[#B3CFE5] to-white',
      iconColor: 'text-[#B3CFE5]',
      badgeColor: 'bg-[#B3CFE5]'
    },
    {
      id: 4,
      category: 'computer-works',
      title: 'Custom Text Design',
      description: 'Personalized text embroidery for special occasions',
      color: 'from-[#B3CFE5] to-white',
      iconColor: 'text-[#B3CFE5]',
      badgeColor: 'bg-[#B3CFE5]'
    },
    {
      id: 5,
      category: 'maggam-work',
      title: 'Saree Border Work',
      description: 'Elegant traditional border with sequins and beads',
      color: 'from-[#B3CFE5] to-white',
      iconColor: 'text-[#B3CFE5]',
      badgeColor: 'bg-[#B3CFE5]'
    },
    {
      id: 6,
      category: 'computer-embroidery',
      title: 'Bulk T-Shirt Printing',
      description: 'High-volume embroidery for events and teams',
      color: 'from-[#B3CFE5] to-white',
      iconColor: 'text-[#B3CFE5]',
      badgeColor: 'bg-[#B3CFE5]'
    },
  ];

  const filteredDesigns = activeFilter === 'all' 
    ? designs 
    : designs.filter(design => design.category === activeFilter);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation currentPage="designs" />

      {/* 3D Particle Effect Background */}
      <div className="fixed inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <div style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
          <Antigravity
          count={280}
          magnetRadius={6.5}
          ringRadius={7.5}
          waveSpeed={0.38}
          waveAmplitude={1}
          particleSize={1.4}
          lerpSpeed={0.05}
          color={'#B3CFE5'}
          autoAnimate={true}
          particleVariance={1}
          />
        </div>
      </div>

      <main className="flex-1 py-16 md:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 uppercase tracking-wide">
              <span className="text-[#000000]">OUR </span>
              <span className="text-[#B3CFE5]">DESIGNS</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#000000] max-w-3xl mx-auto font-medium">
              Explore our collection of beautiful embroidery work across Computer Works, Maggam Work, and Computer Embroidery
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-8 py-4 rounded-full text-lg font-bold uppercase tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    activeFilter === category.id
                      ? `bg-[#B3CFE5] text-[#000000] shadow-2xl`
                      : 'bg-white text-[#000000] hover:bg-[#B3CFE5]/10 border-2 border-[#B3CFE5]/20'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Designs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredDesigns.map((design) => (
              <div 
                key={design.id}
                className="group glass-card rounded-3xl shadow-xl overflow-hidden hover:glass-strong transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className={`h-56 bg-gradient-to-br ${design.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <svg className={`w-20 h-20 ${design.iconColor} group-hover:scale-110 transition-transform`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className={`w-3 h-3 ${design.badgeColor} rounded-full mr-2`}></span>
                    <span className={`text-sm text-[#000000] font-bold capitalize uppercase tracking-wide`}>
                      {design.category.replace('-', ' ')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#000000] mb-2 group-hover:text-[#B3CFE5] transition-colors uppercase tracking-wide">
                    {design.title}
                  </h3>
                  <p className="text-[#1a202c] mb-4 leading-relaxed font-medium">
                    {design.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[#000000] font-bold uppercase tracking-wide text-sm">Contact for pricing</p>
                    <button className="text-[#B3CFE5] hover:text-[#B3CFE5]/80 transition-colors">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="bg-[#B3CFE5]/10 rounded-3xl shadow-2xl p-12 text-center border border-[#B3CFE5]/20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#000000] mb-4 uppercase tracking-wide">READY TO START YOUR PROJECT?</h2>
            <p className="text-[#1a202c] text-lg mb-8 max-w-2xl mx-auto font-medium">
              Get in touch with us to discuss your embroidery needs and receive a custom quote tailored to your requirements.
            </p>
            <a
              href="/contact"
              className="group inline-flex items-center bg-[#B3CFE5] text-[#000000] px-10 py-4 rounded-full text-xl font-bold uppercase tracking-wide hover:bg-[#B3CFE5]/90 transition-all shadow-xl transform hover:scale-105"
            >
              Contact Us
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
