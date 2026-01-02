'use client';

import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import dynamic from 'next/dynamic'

const Antigravity = dynamic(() => import('@/components/Antigravity'), { 
  ssr: false,
  loading: () => null
})

const NeedleThreadAnimation = dynamic(() => import('@/components/NeedleThreadAnimation'), {
  ssr: false,
  loading: () => null
})

const SplitText = dynamic(() => import('@/components/SplitText'), {
  ssr: false,
  loading: () => <span className="block text-[#B3CFE5] text-5xl sm:text-6xl md:text-7xl lg:text-8xl">EMBROIDERY</span>
})

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#B3CFE5]/10 to-white">
      <Navigation currentPage="home" />

      {/* Hero Section */}
      <main className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B3CFE5]/15 via-white to-[#B3CFE5]/10"></div>
        
        {/* 3D Particle Effect */}
        <div className="absolute inset-0 opacity-40" style={{ pointerEvents: 'none' }}>
          <div style={{ pointerEvents: 'auto', width: '100%', height: '100%' }}>
            <Antigravity
              count={200}
              magnetRadius={5}
              ringRadius={6}
              waveSpeed={0.3}
              waveAmplitude={0.8}
              particleSize={1.2}
              lerpSpeed={0.05}
              color={'#B3CFE5'}
              autoAnimate={true}
              particleVariance={0.8}
            />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
          <div className="text-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide">
                <span className="block text-[#000000] mb-2">CUSTOM</span>
                <SplitText
                  text="EMBROIDERY"
                  tag="span"
                  className="block text-[#B3CFE5] text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
                  delay={80}
                  duration={0.8}
                  from={{ opacity: 0, y: 60, rotateX: -90 }}
                  to={{ opacity: 1, y: 0, rotateX: 0 }}
                  threshold={0.3}
                  rootMargin="0px"
                />
                <span className="block text-[#000000] text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                  DESIGNS
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-[#000000] max-w-3xl mx-auto leading-relaxed font-medium px-4">
              Specializing in <span className="font-bold text-[#B3CFE5]">COMPUTER WORKS</span>, 
              traditional <span className="font-bold text-[#B3CFE5]">MAGGAM WORK</span>, 
              and <span className="font-bold text-[#B3CFE5]">COMPUTER EMBROIDERY</span>
            </p>
            
            <p className="text-sm sm:text-base md:text-lg text-[#1a202c] max-w-2xl mx-auto font-medium px-4">
              From digital precision to handcrafted artistry, we deliver exceptional embroidery for every need.
            </p>

            {/* Call-to-Action Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center px-4 w-full sm:w-auto">
              <Link
                href="/designs"
                className="group bg-[#B3CFE5] text-[#000000] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-wide transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto sm:min-w-[200px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B3CFE5]/30 focus-visible:ring-offset-2"
              >
                <span className="flex items-center justify-center gap-2">
                  View Our Designs
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link
                href="/contact"
                className="group bg-white text-[#000000] border-2 border-[#B3CFE5] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base font-bold uppercase tracking-wide transition-all duration-200 hover:bg-[#B3CFE5] hover:text-[#000000] shadow-md hover:shadow-lg transform hover:-translate-y-1 active:translate-y-0 w-full sm:w-auto sm:min-w-[200px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#B3CFE5]/30 focus-visible:ring-offset-2"
              >
                <span className="flex items-center justify-center gap-2">
                  Get Free Quote
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#B3CFE5] mb-2">8+</div>
                <div className="text-xs sm:text-sm text-[#000000] font-medium uppercase tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#B3CFE5] mb-2">1000+</div>
                <div className="text-xs sm:text-sm text-[#000000] font-medium uppercase tracking-wide">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#B3CFE5] mb-2">100%</div>
                <div className="text-xs sm:text-sm text-[#000000] font-medium uppercase tracking-wide">Quality Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Services Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-[#B3CFE5]/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Needle Thread Animation */}
          <div className="absolute top-10 right-10 w-80 h-80 opacity-90 pointer-events-none hidden lg:block">
            <NeedleThreadAnimation />
          </div>

          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-3 sm:mb-4 uppercase tracking-wide px-4">
              OUR <span className="text-[#B3CFE5]">SERVICES</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#000000] max-w-2xl mx-auto font-medium px-4">
              Professional embroidery services tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1 */}
            <div className="group bg-white border-2 border-[#B3CFE5]/20 rounded-2xl hover:border-[#B3CFE5] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="w-full h-64 sm:h-72 bg-white overflow-hidden relative">
                <Image 
                  src="/CW1.png" 
                  alt="Computer Works - Digital Logo Design" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  quality={90}
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#B3CFE5]"></span>
                  <span className="text-sm font-bold text-[#B3CFE5] uppercase tracking-wide">Computer Works</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-3 uppercase tracking-wide">DIGITAL LOGO DESIGN</h3>
                <p className="text-sm sm:text-base text-[#000000] leading-relaxed mb-4 font-medium">
                  Precision digital embroidery for logos, text, and complex designs with perfect accuracy.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#000000] font-bold hover:gap-3 transition-all group uppercase tracking-wide text-sm hover:text-[#B3CFE5]">
                  Contact for pricing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group bg-white border-2 border-[#B3CFE5]/20 rounded-2xl hover:border-[#B3CFE5] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="w-full h-64 sm:h-72 bg-white overflow-hidden relative">
                <Image 
                  src="/M1.jpeg" 
                  alt="Maggam Work - Traditional Blouse Design" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority
                  quality={90}
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#B3CFE5]"></span>
                  <span className="text-sm font-bold text-[#B3CFE5] uppercase tracking-wide">Maggam Work</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-3 uppercase tracking-wide">TRADITIONAL BLOUSE DESIGN</h3>
                <p className="text-sm sm:text-base text-[#000000] leading-relaxed mb-4 font-medium">
                  Traditional handwork with beads and sequins for sarees and blouses, crafted with love.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#000000] font-bold hover:gap-3 transition-all group uppercase tracking-wide text-sm hover:text-[#B3CFE5]">
                  Contact for pricing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group bg-white border-2 border-[#B3CFE5]/20 rounded-2xl hover:border-[#B3CFE5] hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className="w-full h-64 sm:h-72 bg-white overflow-hidden relative">
                <Image 
                  src="/CE1.png" 
                  alt="Computer Embroidery - Uniform Embroidery" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={90}
                />
              </div>
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#B3CFE5]"></span>
                  <span className="text-sm font-bold text-[#B3CFE5] uppercase tracking-wide">Computer Embroidery</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#000000] mb-3 uppercase tracking-wide">UNIFORM EMBROIDERY</h3>
                <p className="text-sm sm:text-base text-[#000000] leading-relaxed mb-4 font-medium">
                  Automated machine embroidery for bulk orders and uniforms with consistent quality.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-[#000000] font-bold hover:gap-3 transition-all group uppercase tracking-wide text-sm hover:text-[#B3CFE5]">
                  Contact for pricing
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#B3CFE5]/5 to-white relative overflow-hidden">
        {/* Needle Thread Animation - Left Side */}
        <div className="absolute top-20 left-10 w-80 h-80 opacity-90 pointer-events-none hidden lg:block">
          <NeedleThreadAnimation />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-3 sm:mb-4 uppercase tracking-wide px-4">
              WHY CHOOSE <span className="text-[#B3CFE5]">SAI MANJARI</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#000000] max-w-2xl mx-auto font-medium px-4">
              We combine traditional craftsmanship with modern technology
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#B3CFE5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#B3CFE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#000000] mb-2 uppercase tracking-wide">QUALITY ASSURED</h3>
              <p className="text-[#000000] text-sm font-medium">Every piece is crafted with attention to detail</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#B3CFE5]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#B3CFE5]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#000000] mb-2 uppercase tracking-wide">FAST DELIVERY</h3>
              <p className="text-[#000000] text-sm font-medium">Quick turnaround without compromising quality</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
