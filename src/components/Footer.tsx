import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 mt-auto px-4 sm:px-6 lg:px-8" role="contentinfo">
      <div className="max-w-7xl mx-auto">
        <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 soft-shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-6 sm:mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-[#000000] mb-3 sm:mb-4 tracking-wide uppercase">SAI MANJARI</h3>
              <p className="text-[#1a202c] font-body text-sm leading-relaxed font-medium">
                Specializing in Computer Works, traditional Maggam Work, and Computer Embroidery since 2010.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base sm:text-lg font-display font-bold text-[#000000] mb-3 sm:mb-4 tracking-wide uppercase">QUICK LINKS</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/designs" className="text-[#1a202c] hover:text-[#B3CFE5] transition-colors text-sm font-body font-bold inline-flex items-center group uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B3CFE5] mr-2 group-hover:scale-150 transition-transform"></span>
                    Our Designs
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-[#1a202c] hover:text-[#B3CFE5] transition-colors text-sm font-body font-bold inline-flex items-center group uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B3CFE5] mr-2 group-hover:scale-150 transition-transform"></span>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-[#1a202c] hover:text-[#B3CFE5] transition-colors text-sm font-body font-bold inline-flex items-center group uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B3CFE5] mr-2 group-hover:scale-150 transition-transform"></span>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base sm:text-lg font-display font-bold text-[#000000] mb-3 sm:mb-4 tracking-wide uppercase">CONTACT</h3>
              <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm font-body text-[#1a202c]">
                <li className="flex items-start group">
                  <div className="w-8 h-8 rounded-full bg-[#B3CFE5]/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#B3CFE5] transition-colors mt-0.5">
                    <svg className="w-4 h-4 text-[#B3CFE5] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <span className="font-bold pt-0.5 uppercase tracking-wide text-xs sm:text-sm leading-tight">SVN COLONY, GUNTUR, AP</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-8 h-8 rounded-full bg-[#B3CFE5]/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#B3CFE5] transition-colors">
                    <svg className="w-4 h-4 text-[#B3CFE5] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:karumuru.sujatha27@gmail.com" className="hover:text-[#B3CFE5] transition-colors font-bold break-words text-xs sm:text-sm leading-tight">
                    karumuru.sujatha27@gmail.com
                  </a>
                </li>
                <li className="flex items-center group">
                  <div className="w-8 h-8 rounded-full bg-[#B3CFE5]/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-[#B3CFE5] transition-colors">
                    <svg className="w-4 h-4 text-[#B3CFE5] group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+919291635092" className="hover:text-[#B3CFE5] transition-colors font-bold text-xs sm:text-sm whitespace-nowrap">
                    +91 9291635092
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#B3CFE5]/20 pt-6 sm:pt-8 text-center">
            <p className="text-[#1a202c] text-xs sm:text-sm font-body font-medium">
              © {currentYear} SAI MANJARI. ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
