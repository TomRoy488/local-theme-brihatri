import { ChevronDown, Facebook, Mail, Send, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import './SiteFooter.css'

function SiteFooter() {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false)
  const languageWrapRef = useRef(null)

  useEffect(() => {
    const onClick = (event) => {
      if (!languageWrapRef.current?.contains(event.target)) {
        setIsLanguageOpen(false)
      }
    }
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsLanguageOpen(false)
      }
    }
    document.addEventListener('mousedown', onClick)
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onClick)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  return (
    <footer className="brihatri-local-siteFooter b-MiniMal-siteFooter mt-10">
      <div className="brihatri-local-footerMain mx-auto w-full max-w-[1920px] px-4 pb-8 pt-10 md:px-14 md:pb-16 md:pt-14">
        <div className="brihatri-local-footerGrid grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-5 md:gap-x-10 md:gap-y-0">
          <div className="brihatri-local-footerBrand col-span-1">
            <h2 className="brihatri-local-footerHeading text-[20px] font-normal text-[#f1f1f1] md:text-[40px]">
              LOCAL
            </h2>
            <p className="brihatri-local-footerDesc mt-3 text-[14px] leading-[1.4] text-[#e6e6e6] md:mt-4 md:text-[20px]">
              Fresh products from local producers, delivered directly to your front door,
              daily.
            </p>
            <div className="brihatri-local-footerSocial mt-5 flex items-center gap-4 text-[#e8e8e8]">
              <a href="#email" className="brihatri-local-footerLink b-MiniMal-footerLink">
                <Mail className="h-[20px] w-[20px]" strokeWidth={2} />
              </a>
              <a href="#facebook" className="brihatri-local-footerLink b-MiniMal-footerLink">
                <Facebook className="h-[20px] w-[20px]" strokeWidth={2} />
              </a>
              <a href="#x" className="brihatri-local-footerLink b-MiniMal-footerLink">
                <X className="h-[20px] w-[20px]" strokeWidth={2} />
              </a>
            </div>
          </div>

          <div className="brihatri-local-footerQuickLinks">
            <h3 className="brihatri-local-footerSubheading text-[20px] font-normal text-[#f1f1f1] md:text-[24px]">
              Quick links
            </h3>
            <ul className="brihatri-local-footerList mt-3 space-y-1 text-[14px] md:mt-4 md:text-[18px]">
              {['Search', 'About Us', 'Delivery', 'Our stores'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="brihatri-local-footerLink b-MiniMal-footerLink border-b border-[#cfcfcf] text-[#f2f2f2]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="brihatri-local-footerCategories">
            <h3 className="brihatri-local-footerSubheading text-[20px] font-normal text-[#f1f1f1] md:text-[24px]">
              Popular categories
            </h3>
            <ul className="brihatri-local-footerList mt-3 space-y-1 text-[14px] md:mt-4 md:text-[18px]">
              {[
                'Bread & Bakery',
                'Dairy & Eggs',
                'Fresh Meals & Pizzas',
                'Fruits & Vegetables',
                'Kitchen Appliances',
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="brihatri-local-footerLink b-MiniMal-footerLink border-b border-[#cfcfcf] text-[#f2f2f2]"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="brihatri-local-footerStore">
            <h3 className="brihatri-local-footerSubheading text-[20px] font-normal text-[#f1f1f1] md:text-[24px]">
              Main Store
            </h3>
            <p className="brihatri-local-footerStoreText mt-3 text-[14px] leading-[1.35] text-[#e6e6e6] md:mt-4 md:text-[20px]">
              13 Champs-Elysees
              <br />
              75008 Paris
              <br />
              France
            </p>
          </div>

          <div className="brihatri-local-footerNewsletter col-span-2 md:col-span-1">
            <h3 className="brihatri-local-footerSubheading text-[20px] font-normal text-[#f1f1f1] md:text-[24px]">
              Newsletter
            </h3>
            <label className="brihatri-local-footerInputWrap mt-3 flex h-[46px] items-center rounded-[8px] border border-[#31353c] px-3 md:mt-4 md:h-[60px] md:px-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="brihatri-local-footerInput w-full border-0 bg-transparent p-0 text-[18px] text-[#f1f1f1] outline-none placeholder:text-[#8d8f94]"
              />
              <button
                type="button"
                className="brihatri-local-footerInputBtn inline-flex h-8 w-8 items-center justify-center text-[#9fa2a8]"
                aria-label="Submit newsletter"
              >
                <Send className="h-[20px] w-[20px]" strokeWidth={2} />
              </button>
            </label>
          </div>
        </div>
      </div>

      <div className="brihatri-local-footerBottom border-t border-[#2a2e35]">
        <div className="brihatri-local-footerBottomInner mx-auto flex w-full max-w-[1920px] flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-14 md:py-6">
          <p className="brihatri-local-footerCopyright text-[14px] text-[#ececec] md:text-[18px]">
            Copyright © 2026 Local Theme Light Demo.
            <a
              href="#"
              className="brihatri-local-footerLink b-MiniMal-footerLink border-b border-[#d7d7d7] text-[#ececec]"
            >
              Powered by Shopify
            </a>
          </p>

          <div className="brihatri-local-footerLangWrap relative w-fit" ref={languageWrapRef}>
            <button
              type="button"
              onClick={() => setIsLanguageOpen((prev) => !prev)}
              className="brihatri-local-footerLangBtn inline-flex items-center gap-1 text-[18px] text-[#ececec]"
            >
              English <ChevronDown className="h-[16px] w-[16px]" strokeWidth={2} />
            </button>

            <div
              className={`brihatri-local-footerLangMenu b-MiniMal-footerLangMenu absolute bottom-[calc(100%+8px)] right-0 z-20 min-w-[140px] rounded-[8px] border border-[#2f333a] bg-[#111318] p-1 ${
                isLanguageOpen
                  ? 'pointer-events-auto translate-y-0 opacity-100'
                  : 'pointer-events-none translate-y-1 opacity-0'
              }`}
            >
              {['English', 'French', 'German'].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setIsLanguageOpen(false)}
                  className="brihatri-local-footerLangItem block w-full rounded-[6px] px-3 py-2 text-left text-[14px] text-[#ececec] hover:bg-[#1e232a]"
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default SiteFooter
