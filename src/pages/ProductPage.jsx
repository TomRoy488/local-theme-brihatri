import { useEffect, useMemo, useRef, useState } from 'react'
import {
  Check,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Circle,
  Facebook,
  FileText,
  Info,
  Leaf,
  Minus,
  Pin,
  Plus,
  Search,
  Star,
  Store,
  Twitter,
  Wheat,
} from 'lucide-react'
import './ProductPage.css'

const productImages = [
  'https://local-theme-main.myshopify.com/cdn/shop/products/2-a.jpg?v=1653626304&width=840',
  'https://local-theme-main.myshopify.com/cdn/shop/products/2-b.jpg?v=1653626303&width=840',
]

const recommendedProducts = [
  {
    id: 1,
    name: 'Coconut Water',
    price: '$3.00',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/1-a.jpg?crop=center&height=264&v=1653626228&width=220',
  },
  {
    id: 2,
    name: 'Coconut Drink',
    price: '$3.40',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/1-a.jpg?crop=center&height=264&v=1653626228&width=220',
  },
  {
    id: 3,
    name: 'Organic Beverage',
    price: '$2.90',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/1-a.jpg?crop=center&height=264&v=1653626228&width=220',
  },
]

const nutritionRows = [
  ['Energy 8g', '10%'],
  ['Total Fat 8g', '10%'],
  ['Saturated Fat 1g', '5%'],
  ['Trans Fat 0g', ''],
  ['Cholesterol 0mg', '0%'],
  ['Total Carbohydrate 37g', '13%'],
  ['Dietary Fiber 4g', '14%'],
  ['Sugars 10g', ''],
  ['Potassium 160mg', '7%'],
  ['Protein 3g', ''],
  ['Vitamin D 2mcg', '10%'],
  ['Calcium 260mg', '20%'],
  ['Iron 8mg', '45%'],
  ['Potassium 240mg', '6%'],
]

const youMayAlsoLikeItems = [
  {
    id: 1,
    name: 'Coconut Water',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/1-a.jpg?crop=center&height=264&v=1653626228&width=220',
    price: '$3.00',
    oldPrice: '',
    rating: 5,
    reviews: '(7)',
    description: 'Rich taste!',
    badge: 'NEW',
  },
  {
    id: 2,
    name: 'Keto Crunch',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/2-a.jpg?v=1653626304&width=480',
    price: '$4.99',
    oldPrice: '$6.00',
    rating: 4,
    reviews: '(9)',
    description: 'Keto-friendly combination',
    badge: '-29%',
  },
  {
    id: 3,
    name: 'Watermelon',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/7-b.jpg?v=1653635299&width=480',
    price: '$0.99',
    oldPrice: '',
    rating: 4,
    reviews: '(2)',
    description: 'Excellent source of Vitamin A',
    badge: '',
  },
  {
    id: 4,
    name: 'Sourdough Perth',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/29-a.jpg?v=1655367914&width=480',
    price: '$2.50',
    oldPrice: '',
    rating: 5,
    reviews: '(1)',
    description: '100% rye flour',
    badge: 'NEW',
  },
  {
    id: 5,
    name: 'BBQ Sauce',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/5-a.jpg?v=1653637901&width=480',
    price: 'From $5.00',
    oldPrice: '',
    rating: 5,
    reviews: '(6)',
    description: 'Fat free, sweet and tangy',
    badge: '',
  },
  {
    id: 6,
    name: 'Greek Salad',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/p3.jpg?v=1737625310&width=480',
    price: 'From $6.00',
    oldPrice: '',
    rating: 5,
    reviews: '(1)',
    description: 'Greek style',
    badge: '',
  },
]

const getPageStarts = (totalItems, itemsPerView, stride) => {
  const starts = [0]
  while (starts[starts.length - 1] + itemsPerView < totalItems) {
    const current = starts[starts.length - 1]
    const next = Math.min(current + stride, totalItems - itemsPerView)
    if (next === current) {
      break
    }
    starts.push(next)
  }
  return starts
}

function ProductPage({ onAddToCart, onNavigate }) {
  const [activeImage, setActiveImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeStyle, setActiveStyle] = useState('Student Mix')
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : false,
  )
  const [youMayAlsoLikePageIndex, setYouMayAlsoLikePageIndex] = useState(0)
  const [openAccordions, setOpenAccordions] = useState({
    nutrition: true,
    goesWellWith: false,
  })
  const youMayAlsoLikeSwipeStartXRef = useRef(0)

  const ratingText = useMemo(() => '(9)', [])
  const youMayAlsoLikeDesktopStarts = useMemo(
    () => getPageStarts(youMayAlsoLikeItems.length, 4, 4),
    [],
  )
  const youMayAlsoLikeMobileStarts = useMemo(
    () => getPageStarts(youMayAlsoLikeItems.length, 2, 2),
    [],
  )
  const youMayAlsoLikeStarts = isDesktop
    ? youMayAlsoLikeDesktopStarts
    : youMayAlsoLikeMobileStarts
  const youMayAlsoLikePageCount = youMayAlsoLikeStarts.length
  const youMayAlsoLikeStartIndex = youMayAlsoLikeStarts[youMayAlsoLikePageIndex] ?? 0
  const youMayAlsoLikeCardWidth = isDesktop ? 292 : 172
  const youMayAlsoLikeGap = 16
  const youMayAlsoLikeTranslateX =
    youMayAlsoLikeStartIndex * (youMayAlsoLikeCardWidth + youMayAlsoLikeGap)

  const toggleAccordion = (key) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const decreaseQty = () => setQuantity((prev) => Math.max(1, prev - 1))
  const increaseQty = () => setQuantity((prev) => prev + 1)
  const goToYouMayAlsoLikePage = (index) => setYouMayAlsoLikePageIndex(index)
  const goToPreviousYouMayAlsoLikePage = () =>
    setYouMayAlsoLikePageIndex(
      (prev) => (prev - 1 + youMayAlsoLikePageCount) % youMayAlsoLikePageCount,
    )
  const goToNextYouMayAlsoLikePage = () =>
    setYouMayAlsoLikePageIndex((prev) => (prev + 1) % youMayAlsoLikePageCount)

  const handleAddToCart = (quantity = 1) => {
    onAddToCart?.(
      {
        productId: 'keto-crunch',
        name: 'Keto Crunch',
        variant: activeStyle,
        image: productImages[0],
        price: 4.99,
      },
      quantity,
    )
  }

  const handleYouMayAlsoLikeTouchStart = (event) => {
    youMayAlsoLikeSwipeStartXRef.current = event.changedTouches[0].clientX
  }
  const handleYouMayAlsoLikeTouchEnd = (event) => {
    const swipeDelta =
      event.changedTouches[0].clientX - youMayAlsoLikeSwipeStartXRef.current
    if (Math.abs(swipeDelta) < 40) {
      return
    }
    if (swipeDelta < 0) {
      goToNextYouMayAlsoLikePage()
      return
    }
    goToPreviousYouMayAlsoLikePage()
  }

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setYouMayAlsoLikePageIndex((prev) => Math.min(prev, youMayAlsoLikePageCount - 1))
  }, [youMayAlsoLikePageCount])

  return (
    <main className="brihatri-local-productPage b-MiniMal-productPage mx-auto min-h-screen w-full">
      <section className="brihatri-local-productSection b-MiniMal-productSection mx-auto w-full max-w-[1440px] px-4 pb-12 pt-5 md:px-12 md:pb-16 md:pt-7">
        <nav className="brihatri-local-productBreadcrumb b-MiniMal-productBreadcrumb mb-4 flex items-center gap-[10px] text-[14px] text-[#2a2f37] md:mb-5">
          <a href="/" className="brihatri-local-productLink b-MiniMal-productLink text-[#2a2f37]">
            Home
          </a>
          <span>/</span>
          <a href="/category" className="brihatri-local-productLink b-MiniMal-productLink text-[#2a2f37]">
            All products
          </a>
          <span>/</span>
          <span>Keto Crunch</span>
        </nav>

        <div className="brihatri-local-productGrid b-MiniMal-productGrid grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <div className="brihatri-local-productGallery b-MiniMal-productGallery">
            <div className="brihatri-local-productMainImageWrap b-MiniMal-productMainImageWrap relative overflow-hidden rounded-[10px] border border-[#d8d8d8] bg-[#ffffff] md:rounded-[12px]">
              <button
                type="button"
                className="brihatri-local-productZoomBtn absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full text-[#2b2f36]"
                aria-label="Zoom product image"
              >
                <Search className="brihatri-local-productZoomIcon h-[19px] w-[19px]" strokeWidth={2} />
              </button>
              <img
                src={productImages[activeImage]}
                alt="Keto Crunch pack"
                loading="eager"
                className="brihatri-local-productMainImage h-[340px] w-full object-contain p-6 md:h-[700px] md:p-10"
              />
            </div>

            <div className="brihatri-local-productThumbs b-MiniMal-productThumbs mt-3 flex items-center gap-3 md:mt-4">
              {productImages.map((image, index) => (
                <button
                  key={`product-thumb-${index + 1}`}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  className={`brihatri-local-productThumbBtn overflow-hidden rounded-[10px] border p-1 transition-colors ${
                    activeImage === index ? 'border-[#bfc2c6]' : 'border-transparent'
                  }`}
                  aria-label={`Select product image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Keto Crunch thumbnail ${index + 1}`}
                    loading="lazy"
                    className="brihatri-local-productThumbImage h-[68px] w-[56px] object-contain md:h-[72px] md:w-[58px]"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="brihatri-local-productContent b-MiniMal-productContent">
            <div className="brihatri-local-productPriceTopRow flex items-baseline gap-3">
              <p className="brihatri-local-productPriceTop text-[34px] font-normal leading-none text-[#131a22] md:text-[36px]">$4.99</p>
              <p className="brihatri-local-productCompareTop text-[14px] text-[#8e8e8e] line-through md:text-[14px]">$6.00</p>
            </div>

            <h1 className="brihatri-local-productTitle mt-4 text-[52px] font-normal leading-[1.04] tracking-[-0.3px] text-[#141c24] md:mt-4 md:text-[64px]">
              Keto Crunch
            </h1>

            <div className="brihatri-local-productRatingRow mt-4 flex items-center gap-1 text-[#181d24]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={`product-rating-${index + 1}`}
                  className="brihatri-local-productRatingStar h-[14px] w-[14px]"
                  fill={index < 4 ? 'currentColor' : 'none'}
                  strokeWidth={1.8}
                />
              ))}
              <span className="brihatri-local-productRatingText ml-2 text-[14px] text-[#2a2f37]">{ratingText}</span>
            </div>

            <div className="brihatri-local-productAvailability mt-4 inline-flex items-center gap-2 rounded-[6px] border border-[#d8d8d8] px-4 py-[10px] text-[14px] text-[#2d333b]">
              <Circle className="brihatri-local-productAvailabilityIcon h-[12px] w-[12px]" />
              Choose a store to see local availability
            </div>

            <h2 className="brihatri-local-productSubtitle mt-6 text-[20px] font-semibold text-[#141c24] md:text-[40px]">
              Keto-friendly combination
            </h2>
            <p className="brihatri-local-productDescription mt-4 max-w-[740px] text-[16px] leading-[1.45] text-[#1f252d] md:text-[16px]">
              Keto-friendly combination of pecans, almonds, walnuts, pepitas and no sugar
              added dark chocolate. This protein-rich trail mix comes in a 10 oz resealable
              pouch, ensuring maximum freshness.
            </p>

            <h3 className="brihatri-local-productAllergenTitle mt-7 text-[20px] font-semibold text-[#141c24] md:text-[40px]">Allergens</h3>
            <div className="brihatri-local-productAllergenGrid mt-4 grid grid-cols-2 gap-y-4 text-[14px] text-[#1f252d] md:grid-cols-5 md:gap-y-0">
              <div className="brihatri-local-productAllergenItem flex items-center gap-2">
                <Leaf className="brihatri-local-productAllergenIcon h-[17px] w-[17px]" strokeWidth={1.8} />
                Corn
              </div>
              <div className="brihatri-local-productAllergenItem flex items-center gap-2">
                <Wheat className="brihatri-local-productAllergenIcon h-[17px] w-[17px]" strokeWidth={1.8} />
                Gluten
              </div>
              <div className="brihatri-local-productAllergenItem flex items-center gap-2">
                <Circle className="brihatri-local-productAllergenIcon h-[17px] w-[17px]" strokeWidth={1.8} />
                Nuts
              </div>
              <div className="brihatri-local-productAllergenItem flex items-center gap-2">
                <Leaf className="brihatri-local-productAllergenIcon h-[17px] w-[17px]" strokeWidth={1.8} />
                Peanuts
              </div>
              <div className="brihatri-local-productAllergenItem flex items-center gap-2">
                <Wheat className="brihatri-local-productAllergenIcon h-[17px] w-[17px]" strokeWidth={1.8} />
                Celery
              </div>
            </div>

            <div className="brihatri-local-productNutriCard b-MiniMal-productNutriCard mt-6 overflow-hidden rounded-[10px] border border-[#d8d8d8] bg-[#f2f2f2] md:rounded-[12px]">
              <div className="brihatri-local-productNutriHeader flex items-center gap-2 border-b border-[#d8d8d8] px-4 py-3 text-[14px] text-[#1e242d]">
                <Circle className="brihatri-local-productNutriHeaderIcon h-[16px] w-[16px]" />
                Nutri-score
                <span className="brihatri-local-productNutriInfo inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#bcbcbc] text-[#7c7c7c]">
                  <Info className="brihatri-local-productNutriInfoIcon h-[12px] w-[12px]" strokeWidth={2} />
                </span>
              </div>
              <div className="brihatri-local-productNutriBody px-4 pb-3 pt-4">
                <div className="brihatri-local-productNutriArrow mx-auto mb-1 h-0 w-0 border-l-[8px] border-r-[8px] border-t-[11px] border-l-transparent border-r-transparent border-t-[#20242b]" />
                <div className="brihatri-local-productNutriScale b-MiniMal-productNutriScale h-[6px] w-full rounded-full" />
                <div className="brihatri-local-productNutriGrades mt-[6px] grid grid-cols-5 text-center text-[18px]">
                  <span className="brihatri-local-productNutriGrade text-[#1e232b]">A</span>
                  <span className="brihatri-local-productNutriGrade text-[#b0b0b0]">B</span>
                  <span className="brihatri-local-productNutriGrade text-[#b0b0b0]">C</span>
                  <span className="brihatri-local-productNutriGrade text-[#b0b0b0]">D</span>
                  <span className="brihatri-local-productNutriGrade text-[#b0b0b0]">E</span>
                </div>
              </div>
            </div>

            <div className="brihatri-local-productStyleWrap mt-7">
              <h3 className="brihatri-local-productStyleTitle text-[20px] font-normal text-[#141c24] md:text-[40px]">Style</h3>
              <div className="brihatri-local-productStyleOptions mt-3 flex flex-wrap items-center gap-3">
                {['Student Mix', 'Smart Mix'].map((style) => (
                  <button
                    key={style}
                    type="button"
                    onClick={() => setActiveStyle(style)}
                    className={`brihatri-local-productStyleOption inline-flex h-[42px] items-center justify-center rounded-full border px-5 text-[18px] transition-colors md:h-[46px] md:text-[18px] ${
                      activeStyle === style
                        ? 'border-[#2e333a] bg-[#ffffff] text-[#121820]'
                        : 'border-[#cfd2d6] bg-transparent text-[#2b3139]'
                    }`}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            <div className="brihatri-local-productFinalPriceWrap mt-8 border-b border-[#dddddd] pb-4">
              <div className="brihatri-local-productFinalPriceRow flex items-end gap-3">
                <p className="brihatri-local-productFinalPrice text-[58px] font-normal leading-none text-[#111821] md:text-[64px]">$4.99</p>
                <div className="brihatri-local-productSavings pb-1">
                  <p className="brihatri-local-productSavingsOld text-[14px] text-[#7f7f7f] line-through">$6.00</p>
                  <p className="brihatri-local-productSavingsText text-[14px] leading-none text-[#7f7f7f]">you save $1.01</p>
                </div>
              </div>
            </div>

            <div className="brihatri-local-productActionRow mt-4 flex flex-wrap items-center gap-3 md:flex-nowrap">
              <div className="brihatri-local-productQtyWrap flex items-center gap-3">
                <button
                  type="button"
                  onClick={decreaseQty}
                  className="brihatri-local-productQtyBtn inline-flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#30353d] text-[#1a1f27]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="brihatri-local-productQtyIcon h-[20px] w-[20px]" strokeWidth={2} />
                </button>
                <span className="brihatri-local-productQtyValue w-5 text-center text-[14px]">{quantity}</span>
                <button
                  type="button"
                  onClick={increaseQty}
                  className="brihatri-local-productQtyBtn inline-flex h-[54px] w-[54px] items-center justify-center rounded-full border border-[#30353d] text-[#1a1f27]"
                  aria-label="Increase quantity"
                >
                  <Plus className="brihatri-local-productQtyIcon h-[20px] w-[20px]" strokeWidth={2} />
                </button>
              </div>

              <button
                type="button"
                onClick={() => handleAddToCart(quantity)}
                className="brihatri-local-productAddToCart inline-flex h-[54px] min-w-[188px] flex-1 items-center justify-center rounded-full bg-[#181b22] px-8 text-[20px] font-semibold text-white transition-colors hover:bg-[#262c35]"
              >
                Add to cart
              </button>

              <button
                type="button"
                onClick={() => {
                  handleAddToCart(quantity)
                  onNavigate?.('/checkout')
                }}
                className="brihatri-local-productBuyNow inline-flex h-[54px] w-full min-w-[188px] items-center justify-center rounded-full border border-[#2d323a] bg-transparent px-8 text-[20px] text-[#111820] transition-colors hover:bg-[#f0f0f0] md:w-auto md:flex-1"
              >
                Buy it now
              </button>
            </div>

            <div className="brihatri-local-productAccordions mt-8 space-y-4">
              <article className="brihatri-local-productAccordionItem overflow-hidden rounded-[10px] border border-[#d8d8d8] bg-[#f2f2f2] md:rounded-[12px]">
                <button
                  type="button"
                  onClick={() => toggleAccordion('nutrition')}
                  className="brihatri-local-productAccordionBtn flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  aria-expanded={openAccordions.nutrition}
                >
                  <span className="brihatri-local-productAccordionLabel flex items-center gap-2 text-[14px] text-[#1d2430]">
                    <FileText className="brihatri-local-productAccordionIcon h-[18px] w-[18px]" strokeWidth={1.8} />
                    Nutritional information
                  </span>
                  <ChevronDown
                    className={`brihatri-local-productAccordionArrow h-[18px] w-[18px] text-[#262c35] transition-transform duration-300 ${
                      openAccordions.nutrition ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <div
                  className={`brihatri-local-productAccordionContent b-MiniMal-productAccordionContent ${
                    openAccordions.nutrition
                      ? 'max-h-[900px] border-t border-[#d8d8d8] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="brihatri-local-productNutritionBody px-4 pb-4 pt-3">
                    <div className="brihatri-local-productNutritionHead mb-2 flex justify-between text-[14px] text-[#1f252e]">
                      <span>Amount per serving</span>
                      <span>% Daily Value *</span>
                    </div>
                    <div className="brihatri-local-productNutritionTable divide-y divide-[#dfdfdf] border-y border-[#dfdfdf]">
                      {nutritionRows.map(([label, value]) => (
                        <div key={label} className="brihatri-local-productNutritionRow flex justify-between py-1 text-[14px] text-[#1f252e]">
                          <span>{label}</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="brihatri-local-productNutritionNote mt-4 text-[14px] leading-[1.35] text-[#434950]">
                      * The % Daily Value tells you how much a nutrient in a serving of food
                      contributes to a daily diet.
                    </p>
                  </div>
                </div>
              </article>

              <article className="brihatri-local-productAccordionItem overflow-hidden rounded-[10px] border border-[#d8d8d8] bg-[#f2f2f2] md:rounded-[12px]">
                <button
                  type="button"
                  onClick={() => toggleAccordion('goesWellWith')}
                  className="brihatri-local-productAccordionBtn flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  aria-expanded={openAccordions.goesWellWith}
                >
                  <span className="brihatri-local-productAccordionLabel text-[14px] text-[#1d2430]">Goes well with</span>
                  <ChevronDown
                    className={`brihatri-local-productAccordionArrow h-[18px] w-[18px] text-[#262c35] transition-transform duration-300 ${
                      openAccordions.goesWellWith ? 'rotate-180' : 'rotate-0'
                    }`}
                  />
                </button>

                <div
                  className={`brihatri-local-productAccordionContent b-MiniMal-productAccordionContent ${
                    openAccordions.goesWellWith
                      ? 'max-h-[460px] border-t border-[#d8d8d8] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="brihatri-local-productRecommendedList space-y-3 p-4">
                    {recommendedProducts.map((item) => (
                      <article
                        key={`recommended-${item.id}`}
                        className="brihatri-local-productRecommendedItem flex items-center gap-3 rounded-[10px] border border-[#dddddd] bg-[#f7f7f7] p-2"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="brihatri-local-productRecommendedImage h-[58px] w-[58px] rounded-[6px] object-contain"
                        />
                        <div className="brihatri-local-productRecommendedInfo flex-1">
                          <p className="brihatri-local-productRecommendedTitle text-[16px] leading-[1.2] text-[#1a2129]">{item.name}</p>
                          <p className="brihatri-local-productRecommendedPrice text-[14px] text-[#6e6e6e]">{item.price}</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => onNavigate?.('/product')}
                          className="brihatri-local-productRecommendedCta inline-flex h-[34px] min-w-[78px] items-center justify-center rounded-full border border-[#2f343b] px-4 text-[14px] text-[#1a2129]"
                        >
                          Buy now
                        </button>
                      </article>
                    ))}
                  </div>
                </div>
              </article>

              <article className="brihatri-local-productPickupCard overflow-hidden rounded-[10px] border border-[#d8d8d8] bg-[#f2f2f2] md:rounded-[12px]">
                <div className="brihatri-local-productPickupHeader flex items-center gap-2 border-b border-[#d8d8d8] px-4 py-3 text-[14px] text-[#1d2430]">
                  <Check className="brihatri-local-productPickupHeaderIcon h-[18px] w-[18px]" strokeWidth={2} />
                  Available for pickup at
                </div>

                <div className="brihatri-local-productPickupRows divide-y divide-[#d8d8d8]">
                  <div className="brihatri-local-productPickupRow flex items-start justify-between gap-4 px-4 py-3 text-[14px] text-[#1f252e]">
                    <div className="brihatri-local-productPickupStore flex items-start gap-2">
                      <Store className="brihatri-local-productPickupStoreIcon mt-[1px] h-[16px] w-[16px]" strokeWidth={1.8} />
                      <div>
                        <p>Warehouse</p>
                        <p>+ Store details</p>
                      </div>
                    </div>
                    <p className="brihatri-local-productPickupTime">Usually ready in 24 hours</p>
                  </div>
                  <div className="brihatri-local-productPickupRow flex items-start justify-between gap-4 px-4 py-3 text-[14px] text-[#1f252e]">
                    <div className="brihatri-local-productPickupStore flex items-start gap-2">
                      <Store className="brihatri-local-productPickupStoreIcon mt-[1px] h-[16px] w-[16px]" strokeWidth={1.8} />
                      <div>
                        <p>Champs Elysees</p>
                        <p>+ Store details</p>
                      </div>
                    </div>
                    <p className="brihatri-local-productPickupTime">Usually ready in 24 hours</p>
                  </div>
                </div>

                <a
                  href="#check-other-stores"
                  className="brihatri-local-productLink b-MiniMal-productLink inline-flex px-4 py-3 text-[14px] text-[#222a33] underline"
                >
                  Check availability at other stores
                </a>
              </article>
            </div>

            <div className="brihatri-local-productShare mt-8">
              <h3 className="brihatri-local-productShareTitle text-[20px] font-normal text-[#161d25] md:text-[28px]">Share</h3>
              <div className="brihatri-local-productShareLinks mt-3 flex flex-wrap items-center gap-4 text-[14px] text-[#20262f]">
                <a href="#facebook" className="brihatri-local-productLink b-MiniMal-productLink inline-flex items-center gap-2 text-[#20262f]">
                  <Facebook className="brihatri-local-productShareIcon h-[16px] w-[16px]" strokeWidth={2} />
                  Facebook
                </a>
                <a href="#twitter" className="brihatri-local-productLink b-MiniMal-productLink inline-flex items-center gap-2 text-[#20262f]">
                  <Twitter className="brihatri-local-productShareIcon h-[16px] w-[16px]" strokeWidth={2} />X (Twitter)
                </a>
                <a href="#pinterest" className="brihatri-local-productLink b-MiniMal-productLink inline-flex items-center gap-2 text-[#20262f]">
                  <Pin className="brihatri-local-productShareIcon h-[16px] w-[16px]" strokeWidth={2} />
                  Pinterest
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brihatri-local-bestSellerSection b-MiniMal-bestSellerSection mx-auto w-full max-w-[1440px] bg-[#ffffff] px-4 pb-12 pt-6 md:px-12 md:pb-14 md:pt-10">
        <div className="brihatri-local-bestSellerHeader b-MiniMal-bestSellerHeader flex items-end justify-between gap-3">
          <h2 className="brihatri-local-bestSellerTitle b-MiniMal-bestSellerTitle text-[24px] font-normal leading-[1.14] tracking-[-0.2px] text-[#161d24] md:text-[40px]">
            You may also like
          </h2>
        </div>

        <div
          className="brihatri-local-bestSellerViewport b-MiniMal-bestSellerViewport mt-6 overflow-hidden md:mt-7"
          onTouchStart={handleYouMayAlsoLikeTouchStart}
          onTouchEnd={handleYouMayAlsoLikeTouchEnd}
        >
          <div
            className="brihatri-local-bestSellerTrack b-MiniMal-bestSellerTrack flex gap-4 transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translate3d(-${youMayAlsoLikeTranslateX}px, 0, 0)` }}
          >
            {youMayAlsoLikeItems.map((item) => (
              <article
                key={`you-may-like-${item.id}`}
                className={`brihatri-local-bestSellerCard b-MiniMal-bestSellerCard relative rounded-[10px] border border-[#d8d8d8] bg-[#ffffff] p-4 md:rounded-[12px] md:p-5 ${
                  isDesktop
                    ? 'h-[550px] min-h-[550px] max-h-[550px] w-[292px] min-w-[292px] max-w-[292px]'
                    : 'h-[420px] min-h-[420px] max-h-[420px] w-[172px] min-w-[172px] max-w-[172px]'
                }`}
              >
                {item.badge ? (
                  <span className="brihatri-local-bestSellerBadge absolute right-3 top-3 rounded-[4px] bg-[#3d9448] px-[8px] py-[3px] text-[12px] text-white">
                    {item.badge}
                  </span>
                ) : null}

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="brihatri-local-bestSellerImage h-[160px] w-full object-contain md:h-[250px]"
                />

                <div className="brihatri-local-bestSellerPriceRow mt-3 flex items-center gap-2">
                  <p className="brihatri-local-bestSellerPrice text-[16px] text-[#131922]">{item.price}</p>
                  {item.oldPrice ? (
                    <p className="brihatri-local-bestSellerOldPrice text-[16px] text-[#8b8b8b] line-through">{item.oldPrice}</p>
                  ) : null}
                </div>

                <h3 className="brihatri-local-bestSellerTitleText mt-2 text-[16px] font-normal leading-[1.15] tracking-[-0.1px] text-[#161d24] md:text-[24px]">
                  {item.name}
                </h3>

                <div className="brihatri-local-bestSellerRating mt-2 flex items-center gap-[3px] text-[#1d1d1d]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={`you-may-like-rating-${item.id}-${index + 1}`}
                      className="brihatri-local-bestSellerStar h-[14px] w-[14px]"
                      fill={index < item.rating ? 'currentColor' : 'none'}
                      strokeWidth={1.8}
                    />
                  ))}
                  <span className="brihatri-local-bestSellerReviews ml-1 text-[14px] text-[#222833]">{item.reviews}</span>
                </div>

                <p className="brihatri-local-bestSellerDesc mt-2 text-[14px] leading-[1.3] text-[#4f555d]">{item.description}</p>

                <button
                  type="button"
                  onClick={() => {
                    onAddToCart?.(
                      {
                        productId: `you-may-like-${item.id}`,
                        name: item.name,
                        variant: '',
                        image: item.image,
                        price: item.price,
                      },
                      1,
                    )
                    onNavigate?.('/product')
                  }}
                  className="brihatri-local-bestSellerCta mt-4 inline-flex h-[42px] w-full items-center justify-center rounded-full border border-[#2e333a] bg-transparent text-[18px] text-[#1b2128] transition-colors hover:bg-[#14181f] hover:text-white md:h-[50px]"
                >
                  Buy now
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="brihatri-local-bestSellerControls mt-5 flex items-center justify-center gap-4 text-[14px]">
          <button
            type="button"
            onClick={goToPreviousYouMayAlsoLikePage}
            className="brihatri-local-bestSellerArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6a6a6a] transition-colors hover:text-[#1f1f23]"
            aria-label="Previous products"
          >
            <ChevronLeft className="brihatri-local-bestSellerArrowIcon h-[18px] w-[18px]" strokeWidth={2} />
          </button>

          <div className="brihatri-local-bestSellerDots flex items-center gap-2">
            {youMayAlsoLikeStarts.map((_, index) => (
              <button
                key={`you-may-like-dot-${index + 1}`}
                type="button"
                onClick={() => goToYouMayAlsoLikePage(index)}
                className={`brihatri-local-bestSellerDot h-[10px] w-[10px] rounded-full transition-all ${
                  index === youMayAlsoLikePageIndex ? 'w-[30px] bg-[#1e2126]' : 'bg-[#bbbbbb]'
                }`}
                aria-label={`Go to products page ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNextYouMayAlsoLikePage}
            className="brihatri-local-bestSellerArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6a6a6a] transition-colors hover:text-[#1f1f23]"
            aria-label="Next products"
          >
            <ChevronRight className="brihatri-local-bestSellerArrowIcon h-[18px] w-[18px]" strokeWidth={2} />
          </button>
        </div>
      </section>
    </main>
  )
}

export default ProductPage
