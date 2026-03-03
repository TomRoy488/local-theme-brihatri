import { useMemo, useState } from 'react'
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circle,
  Droplets,
  Egg,
  Leaf,
  SlidersHorizontal,
  Star,
  Wheat,
} from 'lucide-react'
import './CategoryPage.css'

const baseProducts = [
  {
    name: 'Sliced Tomato Puree',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/4-a.jpg?v=1653636911&width=480',
    price: 'From $3.50',
    oldPrice: '',
    rating: 4,
    description: 'Rich, smooth texture',
    badge: '',
    badgeColor: '',
    features: ['grain', 'leaf', 'vegan'],
  },
  {
    name: 'Keto Crunch',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/2-a.jpg?v=1653626304&width=480',
    price: '$4.99',
    oldPrice: '$6.00',
    rating: 4,
    description: 'Keto-friendly combination',
    badge: 'UP TO -29%',
    badgeColor: 'red',
    features: ['vegan', 'grain', 'fruit'],
  },
  {
    name: 'Watermelon',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/7-b.jpg?v=1653635299&width=480',
    price: '$0.99',
    oldPrice: '',
    rating: 4,
    description: 'Excellent source of Vitamin A',
    badge: '',
    badgeColor: '',
    features: ['leaf'],
  },
  {
    name: 'Coconut Water',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/1-a.jpg?v=1653626228&width=480',
    price: '$3.00',
    oldPrice: '',
    rating: 5,
    description: 'Rich taste!',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'vegan'],
  },
  {
    name: 'Power Breakfast',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/files/p4.jpg?v=1737625282&width=480',
    price: 'From $2.00',
    oldPrice: '',
    rating: 3,
    description: 'Protein bomb!',
    badge: 'PREORDER NOW',
    badgeColor: 'brown',
    features: ['grain', 'vegan', 'leaf'],
  },
  {
    name: 'Chocolate Cookie',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/34-a.jpg?v=1655373960&width=480',
    price: '$9.00',
    oldPrice: '',
    rating: 5,
    description: 'No added sugar!',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'egg'],
  },
  {
    name: 'Pomegranate',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/13-b.jpg?v=1653637435&width=480',
    price: '$4.99',
    oldPrice: '$6.99',
    rating: 4,
    description: 'High contents of polyphenols',
    badge: '-29%',
    badgeColor: 'red',
    features: ['leaf', 'fruit'],
  },
  {
    name: 'Sourdough Perth',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/29-a.jpg?v=1655367914&width=480',
    price: '$2.50',
    oldPrice: '',
    rating: 5,
    description: '100% rye flour',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'egg'],
  },
  {
    name: 'BBQ Sauce',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/5-a.jpg?v=1653637901&width=480',
    price: 'From $5.00',
    oldPrice: '',
    rating: 5,
    description: 'Fat free, sweet and tangy',
    badge: '',
    badgeColor: '',
    features: ['grain', 'egg', 'droplet'],
  },
  {
    name: 'Hamburger',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/44-a.jpg?v=1655795707&width=480',
    price: 'On Sale from $3.50',
    oldPrice: '',
    rating: 5,
    description: 'Fresh everyday!',
    badge: 'UP TO -22%',
    badgeColor: 'red',
    features: ['egg', 'grain', 'leaf', 'vegan', 'droplet'],
  },
  {
    name: 'Mozzarella',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/40-a.jpg?v=1655708394&width=480',
    price: '$0.00',
    oldPrice: '',
    rating: 0,
    description: '',
    badge: 'SOLD OUT',
    badgeColor: 'gray',
    features: ['leaf', 'droplet'],
    soldOut: true,
  },
  {
    name: 'Greek Salad',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/files/p3.jpg?v=1737625310&width=480',
    price: 'From $6.00',
    oldPrice: '',
    rating: 5,
    description: 'Greek style',
    badge: '',
    badgeColor: '',
    features: ['grain', 'egg', 'leaf'],
  },
  {
    name: 'Chili Pepper',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/17-a.jpg?v=1655452094&width=480',
    price: '$1.50',
    oldPrice: '',
    rating: 0,
    description: 'Very hot!',
    badge: '',
    badgeColor: '',
    features: [],
  },
  {
    name: 'Lemon',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/10-a.jpg?v=1655452040&width=480',
    price: '$2.99',
    oldPrice: '$3.50',
    rating: 5,
    description: 'Organic',
    badge: '-15%',
    badgeColor: 'red',
    features: [],
  },
  {
    name: 'Potatoes',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/37-a.jpg?v=1655451830&width=480',
    price: '$2.00',
    oldPrice: '',
    rating: 0,
    description: 'Mild melon aroma',
    badge: '',
    badgeColor: '',
    features: [],
  },
  {
    name: 'Yellow Pepper',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/36-b.jpg?v=1655448290&width=480',
    price: '$2.99',
    oldPrice: '$3.50',
    rating: 0,
    description: 'Milder taste',
    badge: '-15%',
    badgeColor: 'red',
    features: [],
  },
  {
    name: 'Multi Mix Flour',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/files/cat2_5a49a6c9-8515-4b59-bf25-f2351c6b3e90.jpg',
    price: '$3.90',
    oldPrice: '',
    rating: 4,
    description: 'Naturally gluten free',
    badge: '',
    badgeColor: '',
    features: [],
  },
  {
    name: 'Noodle Salad',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/files/p2.jpg?v=1737625336&width=480',
    price: 'From $5.00',
    oldPrice: '',
    rating: 4,
    description: 'Excellent source of Vitamin A',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'egg', 'leaf'],
  },
  {
    name: 'Potholder',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/28-a.jpg?v=1655204207&width=480',
    price: '$22.00',
    oldPrice: '$30.00',
    rating: 5,
    description: 'Oven mitt for all',
    badge: '-25%',
    badgeColor: 'red',
    features: [],
  },
]

const products = Array.from({ length: 37 }).map((_, index) => {
  const source = baseProducts[index % baseProducts.length]
  return { ...source, id: index + 1 }
})

const badgeMap = {
  red: 'bg-[#d74b4b]',
  green: 'bg-[#3e984a]',
  brown: 'bg-[#a46f55]',
  gray: 'bg-[#737980]',
}

const allProductTypes = [
  'Beverages (1)',
  'Breads & Buns (6)',
  'Dried Fruits (1)',
  'Eggs (1)',
  'Fruits & Vegetables (11)',
  'Kitchen Appliances (7)',
]

const allAllergens = [
  'Corn free (3)',
  'Eggs free (5)',
  'Gluten free (9)',
  'Milk free (5)',
  'Nuts free (5)',
  'Soya free (2)',
]

function FeatureIcon({ type }) {
  if (type === 'grain') {
    return <Wheat className="brihatri-local-categoryFeatureIcon h-[16px] w-[16px]" strokeWidth={1.8} />
  }
  if (type === 'egg') {
    return <Egg className="brihatri-local-categoryFeatureIcon h-[16px] w-[16px]" strokeWidth={1.8} />
  }
  if (type === 'droplet') {
    return <Droplets className="brihatri-local-categoryFeatureIcon h-[16px] w-[16px]" strokeWidth={1.8} />
  }
  return <Leaf className="brihatri-local-categoryFeatureIcon h-[16px] w-[16px]" strokeWidth={1.8} />
}

const getNumericPrice = (priceText) => {
  if (typeof priceText !== 'string') {
    return 0
  }
  const normalized = priceText.replace(',', '')
  const match = normalized.match(/(\d+(?:\.\d+)?)/)
  return match ? Number.parseFloat(match[1]) : 0
}

function CategoryPage({ onAddToCart, onNavigate }) {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [openDesktopFilters, setOpenDesktopFilters] = useState({
    price: true,
    productType: true,
    allergens: true,
  })

  const pageSize = 20
  const totalPages = Math.ceil(products.length / pageSize)
  const safePage = Math.max(1, Math.min(currentPage, totalPages))
  const pageProducts = useMemo(() => {
    const start = (safePage - 1) * pageSize
    return products.slice(start, start + pageSize)
  }, [safePage])

  const toggleDesktopFilter = (key) => {
    setOpenDesktopFilters((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <main className="brihatri-local-categoryPage b-MiniMal-categoryPage min-h-screen w-full">
      <section className="brihatri-local-categorySection b-MiniMal-categorySection mx-auto w-full max-w-[1920px] px-4 pb-10 pt-5 md:px-[72px] md:pb-14 md:pt-7">
        <nav className="brihatri-local-categoryBreadcrumb mb-4 flex flex-wrap items-center gap-[10px] text-[14px] text-[#2a2f37] md:mb-5">
          <a href="/" className="brihatri-local-categoryLink b-MiniMal-categoryLink text-[#2a2f37]">
            Home
          </a>
          <span>/</span>
          <a href="/" className="brihatri-local-categoryLink b-MiniMal-categoryLink text-[#2a2f37]">
            Collections
          </a>
          <span>/</span>
          <span>All products</span>
        </nav>

        <h1 className="brihatri-local-categoryTitle text-[24px] font-normal leading-[1.1] tracking-[-0.2px] text-[#141c24] md:text-[64px]">
          All products
        </h1>

        <button
          type="button"
          onClick={() => setIsFilterOpen((prev) => !prev)}
          className="brihatri-local-categoryFilterBtn mt-5 inline-flex h-[46px] items-center gap-3 rounded-full border border-[#2f343b] px-6 text-[18px] text-[#171d25] md:hidden"
        >
          <SlidersHorizontal className="brihatri-local-categoryFilterBtnIcon h-[20px] w-[20px]" strokeWidth={2} />
          Filter and sort
        </button>

        <p className="brihatri-local-categoryMobileCount mt-4 text-[14px] text-[#818181] md:hidden">37 products</p>

        <div className="brihatri-local-categoryLayout mt-5 grid grid-cols-1 gap-6 md:mt-8 md:grid-cols-[300px_1fr] md:gap-10">
          <aside
            className={`brihatri-local-categorySidebar ${
              isFilterOpen ? 'block' : 'hidden'
            } rounded-[10px] border border-[#d9d9d9] bg-[#ffffff] p-4 md:block md:rounded-none md:border-0 md:bg-transparent md:p-0`}
          >
            <div className="brihatri-local-categorySort mb-6">
              <p className="brihatri-local-categorySortLabel mb-2 text-[20px] text-[#1b2128] md:mb-[4px] md:text-[18px]">Sort by:</p>
              <button
                type="button"
                className="brihatri-local-categorySortSelect flex h-[52px] w-full items-center justify-between rounded-[8px] border border-[#cfd2d6] bg-white px-4 text-[18px] text-[#232933] md:h-[47px] md:rounded-[8px] md:px-4 md:text-[17px]"
              >
                Featured
                <ChevronDown className="brihatri-local-categorySortChevron h-[18px] w-[18px] md:h-[16px] md:w-[16px]" strokeWidth={2} />
              </button>
            </div>

            <div className="brihatri-local-categoryFilterBlock border-t border-[#d7d7d7] pt-5 md:pt-[18px]">
              <button
                type="button"
                onClick={() => toggleDesktopFilter('price')}
                className="brihatri-local-categoryFilterHeader flex w-full items-center justify-between text-left text-[20px] text-[#1f252d] md:text-[18px]"
              >
                Price
                <ChevronDown
                  className={`brihatri-local-categoryFilterChevron h-[20px] w-[20px] transition-transform md:h-[18px] md:w-[18px] ${openDesktopFilters.price ? 'rotate-180' : ''}`}
                  strokeWidth={2}
                />
              </button>
              {openDesktopFilters.price ? (
                <div className="brihatri-local-categoryPriceBody mt-4 space-y-4 md:mt-[14px] md:space-y-[14px]">
                  <div className="brihatri-local-categoryPriceInputs flex items-center gap-2 md:gap-[8px]">
                    <input className="brihatri-local-categoryPriceInput h-[42px] w-full rounded-[8px] border border-[#cfd2d6] bg-white px-3 text-[14px] md:h-[39px] md:rounded-[8px] md:px-3 md:text-[13px]" value="$0" readOnly />
                    <span className="brihatri-local-categoryPriceTo text-[14px] md:text-[13px]">to</span>
                    <input className="brihatri-local-categoryPriceInput h-[42px] w-full rounded-[8px] border border-[#cfd2d6] bg-white px-3 text-[14px] md:h-[39px] md:rounded-[8px] md:px-3 md:text-[13px]" value="$96" readOnly />
                  </div>
                  <div className="brihatri-local-categoryPriceTrack h-[2px] rounded-full bg-[#1f252d] md:h-[2px]" />
                </div>
              ) : null}
            </div>

            <div className="brihatri-local-categoryFilterBlock mt-5 border-t border-[#d7d7d7] pt-5 md:mt-[18px] md:pt-[18px]">
              <button
                type="button"
                onClick={() => toggleDesktopFilter('productType')}
                className="brihatri-local-categoryFilterHeader flex w-full items-center justify-between text-left text-[20px] text-[#1f252d] md:text-[18px]"
              >
                Product type
                <ChevronDown
                  className={`brihatri-local-categoryFilterChevron h-[20px] w-[20px] transition-transform md:h-[18px] md:w-[18px] ${openDesktopFilters.productType ? 'rotate-180' : ''}`}
                  strokeWidth={2}
                />
              </button>
              {openDesktopFilters.productType ? (
                <div className="brihatri-local-categoryFilterOptions mt-4 space-y-2 md:mt-[14px] md:space-y-[8px]">
                  {allProductTypes.map((item) => (
                    <label key={item} className="brihatri-local-categoryFilterOption flex items-center gap-3 text-[18px] text-[#2a3039] md:gap-[10px] md:text-[17px]">
                      <input type="checkbox" className="brihatri-local-categoryCheckbox h-4 w-4 rounded border-[#c5c8cc] md:h-[14px] md:w-[14px]" />
                      {item}
                    </label>
                  ))}
                </div>
              ) : null}
            </div>

            <div className="brihatri-local-categoryFilterBlock mt-5 border-t border-[#d7d7d7] pt-5 md:mt-[18px] md:pt-[18px]">
              <button
                type="button"
                onClick={() => toggleDesktopFilter('allergens')}
                className="brihatri-local-categoryFilterHeader flex w-full items-center justify-between text-left text-[20px] text-[#1f252d] md:text-[18px]"
              >
                Allergens
                <ChevronDown
                  className={`brihatri-local-categoryFilterChevron h-[20px] w-[20px] transition-transform md:h-[18px] md:w-[18px] ${openDesktopFilters.allergens ? 'rotate-180' : ''}`}
                  strokeWidth={2}
                />
              </button>
              {openDesktopFilters.allergens ? (
                <div className="brihatri-local-categoryFilterOptions mt-4 space-y-3 md:mt-[14px] md:space-y-[10px]">
                  {allAllergens.map((item) => (
                    <label key={item} className="brihatri-local-categoryFilterOption flex items-center gap-3 text-[18px] text-[#2a3039] md:gap-[10px] md:text-[17px]">
                      <Circle className="brihatri-local-categoryFilterOptionIcon h-[16px] w-[16px] md:h-[14px] md:w-[14px]" strokeWidth={1.6} />
                      {item}
                    </label>
                  ))}
                </div>
              ) : null}
            </div>
          </aside>

          <div className="brihatri-local-categoryProductsWrap">
            <p className="brihatri-local-categoryDesktopCount mb-3 hidden text-[20px] text-[#818181] md:block md:text-[24px]">37 products</p>
            <div className="brihatri-local-categoryProductsGrid grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-7">
              {pageProducts.map((item) => (
                <article
                  key={`cat-product-${item.id}`}
                  className="brihatri-local-categoryCard b-MiniMal-categoryCard relative rounded-[10px] border border-[#dddddd] bg-[#ffffff] p-4 md:rounded-[12px] md:p-5"
                >
                  {item.badge ? (
                    <span
                      className={`brihatri-local-categoryCardBadge absolute right-3 top-3 rounded-[4px] px-[10px] py-[3px] text-[12px] text-white ${
                        badgeMap[item.badgeColor] ?? 'bg-[#d74b4b]'
                      }`}
                    >
                      {item.badge}
                    </span>
                  ) : null}

                  <button
                    type="button"
                    onClick={() => onNavigate?.('/product')}
                    className="brihatri-local-categoryImageBtn block w-full text-left"
                    aria-label={`Open ${item.name}`}
                  >
                    <img src={item.image} alt={item.name} loading="lazy" className="brihatri-local-categoryCardImage h-[180px] w-full object-contain md:h-[230px]" />
                  </button>

                  <div className="brihatri-local-categoryCardPriceRow mt-3 flex items-center gap-2">
                    <p className="brihatri-local-categoryCardPrice text-[16px] text-[#131922] md:text-[18px]">{item.price}</p>
                    {item.oldPrice ? <p className="brihatri-local-categoryCardOldPrice text-[16px] text-[#8b8b8b] line-through md:text-[18px]">{item.oldPrice}</p> : null}
                  </div>

                  <button
                    type="button"
                    onClick={() => onNavigate?.('/product')}
                    className="brihatri-local-categoryTitleBtn mt-2 block text-left"
                  >
                    <h2 className="brihatri-local-categoryCardTitle text-[16px] font-normal leading-[1.15] text-[#161d24] md:text-[24px]">{item.name}</h2>
                  </button>
                  <p className="brihatri-local-categoryCardDesc mt-2 text-[14px] leading-[1.3] text-[#525862] md:text-[18px]">{item.description || ' '}</p>

                  <div className="brihatri-local-categoryCardRating mt-2 flex items-center gap-[3px] text-[#1d1d1d]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={`cat-rating-${item.id}-${index + 1}`} className="brihatri-local-categoryCardStar h-[14px] w-[14px]" fill={index < item.rating ? 'currentColor' : 'none'} strokeWidth={1.8} />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (item.soldOut) {
                        return
                      }
                      onAddToCart?.(
                        {
                          productId: `category-${item.id}`,
                          name: item.name,
                          variant: '',
                          image: item.image,
                          price: getNumericPrice(item.price),
                        },
                        1,
                      )
                    }}
                    className={`brihatri-local-categoryCardCta mt-4 inline-flex h-[44px] w-full items-center justify-center rounded-full border border-[#2e333a] text-[18px] md:h-[52px] md:text-[20px] ${
                      item.soldOut ? 'bg-[#f2f2f2] text-[#a0a0a0]' : 'bg-transparent text-[#1b2128]'
                    }`}
                    disabled={item.soldOut}
                  >
                    {item.soldOut ? 'Sold Out' : 'Buy now'}
                  </button>

                  <p className="brihatri-local-categoryCardAvailability mt-3 flex items-center gap-2 text-[12px] text-[#3f4650] md:text-[14px]">
                    <Circle className="brihatri-local-categoryCardAvailabilityIcon h-[12px] w-[12px]" />
                    Choose a store to see local availability
                  </p>

                  <div className="brihatri-local-categoryCardFeatures mt-3 flex items-center gap-2 text-[#1f252d]">
                    {item.features.slice(0, 3).map((feature, idx) => (
                      <FeatureIcon key={`cat-feature-${item.id}-${idx + 1}`} type={feature} />
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <div className="brihatri-local-categoryPagination mt-8 flex items-center justify-center gap-4 md:mt-9">
              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                className="brihatri-local-categoryPaginationArrow inline-flex h-10 w-10 items-center justify-center rounded-full text-[#1f252d]"
                aria-label="Previous page"
              >
                <ChevronLeft className="brihatri-local-categoryPaginationArrowIcon h-[20px] w-[20px]" strokeWidth={2.2} />
              </button>

              {Array.from({ length: totalPages }).map((_, index) => {
                const pageNumber = index + 1
                const isActive = pageNumber === safePage
                return (
                  <button
                    key={`cat-page-${pageNumber}`}
                    type="button"
                    onClick={() => setCurrentPage(pageNumber)}
                    className={`brihatri-local-categoryPaginationPage inline-flex h-10 w-10 items-center justify-center rounded-full text-[14px] ${
                      isActive ? 'bg-[#181d24] text-white' : 'text-[#1f252d]'
                    }`}
                  >
                    {pageNumber}
                  </button>
                )
              })}

              <button
                type="button"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                className="brihatri-local-categoryPaginationArrow inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6d6d6] text-[#1f252d]"
                aria-label="Next page"
              >
                <ChevronRight className="brihatri-local-categoryPaginationArrowIcon h-[20px] w-[20px]" strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>

        <section className="brihatri-local-blackEditionSection b-MiniMal-blackEditionSection relative mt-11 h-[172px] overflow-hidden rounded-[10px] md:mt-14 md:h-[370px] md:rounded-[12px]">
          <video
            className="brihatri-local-blackEditionVideo b-MiniMal-blackEditionVideo absolute inset-0 z-0 h-full w-full"
            src="https://local-theme-main.myshopify.com/cdn/shop/videos/c/vp/f402a97a53364ffbabf58c12dfb20176/f402a97a53364ffbabf58c12dfb20176.HD-720p-1.6Mbps.mp4?v=0"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="brihatri-local-blackEditionOverlay absolute inset-0 z-10 bg-black/40" />
          <div className="brihatri-local-blackEditionContent relative z-20 flex h-full flex-col items-center justify-center text-center text-white">
            <p className="brihatri-local-blackEditionKicker text-[14px] md:text-[14px]">Introducing</p>
            <h2 className="brihatri-local-blackEditionTitle mt-1 text-[24px] font-normal leading-[1.1] md:text-[72px]">Black Edition</h2>
            <a
              href="#black-edition"
              className="brihatri-local-blackEditionCta brihatri-local-categoryLink b-MiniMal-categoryLink mt-4 inline-flex h-[44px] items-center justify-center rounded-full border border-white px-9 text-[18px] text-white md:mt-6 md:h-[58px] md:px-14 md:text-[20px]"
            >
              Show more
            </a>
          </div>
        </section>
      </section>
    </main>
  )
}

export default CategoryPage
