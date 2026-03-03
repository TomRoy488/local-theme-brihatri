import { useEffect, useState } from 'react'
import {
  ChevronDown,
  ChevronRight,
  Facebook,
  Mail,
  Menu,
  Package,
  Search,
  Store,
  User,
  X,
} from 'lucide-react'
import './SiteHeader.css'

const logoUrl =
  'https://local-theme-main.myshopify.com/cdn/shop/files/logo_67d9f3b7-a044-49da-8436-f76e65523b96.png?v=1737646972'

function SiteHeader({ cartCount = 0, cartTotal = 0, onNavigate }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const handleNavigate = (event, targetPath) => {
    if (!onNavigate || !targetPath) {
      return
    }
    event.preventDefault()
    onNavigate(targetPath)
    setIsMobileMenuOpen(false)
  }

  useEffect(() => {
    if (!isMobileMenuOpen) {
      document.body.style.overflow = ''
      return
    }
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <header className="brihatri-local-siteHeader b-MiniMal-siteHeader">
        <div className="brihatri-local-headerDesktop hidden px-4 md:block md:px-14">
          <div className="brihatri-local-headerTopRow flex items-center gap-5 py-4">
            <a href="/" className="brihatri-local-headerLink b-MiniMal-headerLink inline-flex">
              <img
                src={logoUrl}
                alt="Local"
                className="brihatri-local-headerLogo h-[72px] w-auto object-contain"
              />
            </a>

            <label className="brihatri-local-headerSearch flex h-[58px] flex-1 items-center rounded-full border border-[#d8d8d8] bg-[#f7f7f7] px-6">
              <Search className="brihatri-local-headerSearchIcon h-[24px] w-[24px] text-[#1f252d]" strokeWidth={2} />
              <input
                type="text"
                placeholder="Search for..."
                className="brihatri-local-headerSearchInput ml-3 w-full border-0 bg-transparent p-0 text-[20px] text-[#1f252d] outline-none placeholder:text-[#8e8e8e]"
              />
            </label>

            <a
              href="/orderHistory"
              onClick={(event) => handleNavigate(event, '/orderHistory')}
              className="brihatri-local-headerLink b-MiniMal-headerLink inline-flex h-[58px] items-center gap-3 rounded-full border border-[#262b33] px-7 text-[20px] text-[#1c222a]"
            >
              <User className="h-[22px] w-[22px]" strokeWidth={2} />
              Account
            </a>

            <a
              href="/cart"
              onClick={(event) => handleNavigate(event, '/cart')}
              className="brihatri-local-headerLink b-MiniMal-headerLink inline-flex h-[58px] items-center gap-3 rounded-full bg-[#181b22] px-8 text-[20px] text-white"
            >
              <Package className="h-[22px] w-[22px]" strokeWidth={2} />
              ${cartTotal.toFixed(2)} ({cartCount})
            </a>
          </div>

          <div className="brihatri-local-headerBottomRow flex items-center justify-between border-t border-[#e1e1e1] py-5">
            <nav className="brihatri-local-headerNav flex items-center gap-10 text-[20px] text-[#171d25]">
              <a href="/category" className="brihatri-local-headerLink b-MiniMal-headerLink inline-flex items-center gap-2">
                Categories <ChevronDown className="h-[18px] w-[18px]" strokeWidth={2} />
              </a>
              <a href="#about" className="brihatri-local-headerLink b-MiniMal-headerLink inline-flex items-center gap-2">
                About us <ChevronDown className="h-[18px] w-[18px]" strokeWidth={2} />
              </a>
              <a href="#recipes" className="brihatri-local-headerLink b-MiniMal-headerLink">Recipes</a>
              <a href="#blog" className="brihatri-local-headerLink b-MiniMal-headerLink">Blog</a>
              <a href="#features" className="brihatri-local-headerLink b-MiniMal-headerLink">Theme Features</a>
            </nav>

            <div className="brihatri-local-headerUtilities flex items-center gap-8 text-[20px] text-[#171d25]">
              <div className="brihatri-local-headerUtility flex items-center gap-3">
                <Store className="h-[26px] w-[26px]" strokeWidth={2} />
                <p className="leading-[1.1]">
                  <span className="block text-[14px] text-[#5c636c]">Picking up?</span>
                  <span className="inline-flex items-center gap-1">Select store <ChevronDown className="h-[16px] w-[16px]" strokeWidth={2} /></span>
                </p>
              </div>
              <div className="brihatri-local-headerUtility flex items-center gap-3">
                <Package className="h-[26px] w-[26px]" strokeWidth={2} />
                <p className="leading-[1.1]">
                  <span className="block text-[14px] text-[#5c636c]">Need delivery?</span>
                  <span>See estimates</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="brihatri-local-headerMobile block px-4 pb-3 pt-2 md:hidden">
          <div className="brihatri-local-headerMobileTop flex items-center justify-between">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="brihatri-local-headerMobileMenuBtn inline-flex h-10 w-10 items-center justify-center text-[#1a1f27]"
              aria-label="Open menu"
            >
              <Menu className="h-[28px] w-[28px]" strokeWidth={2.2} />
            </button>

            <a href="/" className="brihatri-local-headerLink b-MiniMal-headerLink inline-flex">
              <img src={logoUrl} alt="Local" className="brihatri-local-headerMobileLogo h-[58px] w-auto object-contain" />
            </a>

            <div className="brihatri-local-headerMobileActions flex items-center gap-1">
              <a
                href="/orderHistory"
                onClick={(event) => handleNavigate(event, '/orderHistory')}
                className="brihatri-local-headerLink b-MiniMal-headerLink inline-flex h-9 w-9 items-center justify-center text-[#1a1f27]"
              >
                <User className="h-[22px] w-[22px]" strokeWidth={2} />
              </a>
              <a
                href="/cart"
                onClick={(event) => handleNavigate(event, '/cart')}
                className="brihatri-local-headerLink b-MiniMal-headerLink relative inline-flex h-9 w-9 items-center justify-center text-[#1a1f27]"
              >
                <Package className="h-[22px] w-[22px]" strokeWidth={2} />
                <span className="absolute right-[1px] top-[-1px] inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#181b22] px-[4px] text-[10px] text-white">
                  {cartCount}
                </span>
              </a>
            </div>
          </div>

          <label className="brihatri-local-headerMobileSearch mt-2 flex h-[46px] items-center rounded-full border border-[#d8d8d8] bg-[#f7f7f7] px-4">
            <Search className="brihatri-local-headerMobileSearchIcon h-[22px] w-[22px] text-[#1f252d]" strokeWidth={2} />
            <input
              type="text"
              placeholder="Search for..."
              className="brihatri-local-headerMobileSearchInput ml-2 w-full border-0 bg-transparent p-0 text-[18px] text-[#1f252d] outline-none placeholder:text-[#8e8e8e]"
            />
          </label>
        </div>
      </header>

      <div
        className={`brihatri-local-mobileMenuBackdrop b-MiniMal-mobileMenuBackdrop fixed inset-0 z-[99] bg-black/30 md:hidden ${
          isMobileMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      <aside
        className={`brihatri-local-mobileMenuPanel b-MiniMal-mobileMenuPanel fixed inset-y-0 left-0 z-[100] w-full max-w-[440px] border-r border-[#d7d7d7] bg-[#f7f7f7] md:hidden ${
          isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        }`}
      >
        <div className="brihatri-local-mobileMenuHead flex items-center justify-between border-b border-[#dfdfdf] px-4 py-3">
          <p className="brihatri-local-mobileMenuTitle text-[20px] text-[#171d25]">Menu</p>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(false)}
            className="brihatri-local-mobileMenuClose inline-flex h-8 w-8 items-center justify-center text-[#1a1f27]"
            aria-label="Close menu"
          >
            <X className="h-[22px] w-[22px]" strokeWidth={2.2} />
          </button>
        </div>

        <div className="brihatri-local-mobileMenuUtility grid grid-cols-2 border-b border-[#dfdfdf] bg-[#f0f0f0]">
          <div className="brihatri-local-mobileMenuUtilityItem flex items-center gap-2 border-r border-[#dfdfdf] px-3 py-2">
            <Store className="h-[16px] w-[16px] text-[#1b2128]" strokeWidth={2} />
            <p className="leading-[1.2]">
              <span className="block text-[10px] text-[#5c636c]">Picking up?</span>
              <span className="inline-flex items-center gap-1 text-[12px] text-[#1a2028]">
                Select store <ChevronDown className="h-[10px] w-[10px]" strokeWidth={2} />
              </span>
            </p>
          </div>
          <div className="brihatri-local-mobileMenuUtilityItem flex items-center gap-2 px-3 py-2">
            <Package className="h-[16px] w-[16px] text-[#1b2128]" strokeWidth={2} />
            <p className="leading-[1.2]">
              <span className="block text-[10px] text-[#5c636c]">Need delivery?</span>
              <span className="text-[12px] text-[#1a2028]">See estimates</span>
            </p>
          </div>
        </div>

        <nav className="brihatri-local-mobileMenuNav">
          {[
            ['Categories', true, '/category'],
            ['About us', true, '#about'],
            ['Recipes', false, '#recipes'],
            ['Blog', false, '#blog'],
            ['Theme Features', false, '#features'],
          ].map(([label, hasArrow, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="brihatri-local-headerLink brihatri-local-mobileMenuLink b-MiniMal-headerLink block border-b border-[#dfdfdf] px-4 py-3 text-[18px] text-[#171d25]"
            >
              <span className="flex items-center justify-between">
                {label}
                {hasArrow ? <ChevronRight className="h-[14px] w-[14px]" strokeWidth={2} /> : null}
              </span>
            </a>
          ))}
        </nav>

        <div className="brihatri-local-mobileMenuFooter absolute inset-x-0 bottom-0 border-t border-[#dfdfdf] bg-white px-4 py-3">
          <div className="brihatri-local-mobileMenuFooterRow flex items-center justify-between">
            <div className="brihatri-local-mobileMenuSocial flex items-center gap-4 text-[#1b2128]">
              <Mail className="h-[16px] w-[16px]" strokeWidth={2} />
              <Facebook className="h-[16px] w-[16px]" strokeWidth={2} />
              <X className="h-[16px] w-[16px]" strokeWidth={2} />
            </div>
            <button type="button" className="brihatri-local-mobileMenuLanguage inline-flex items-center gap-1 text-[14px] text-[#171d25]">
              English <ChevronDown className="h-[12px] w-[12px]" strokeWidth={2} />
            </button>
          </div>
        </div>
      </aside>
    </>
  )
}

export default SiteHeader
