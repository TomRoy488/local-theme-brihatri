import { useEffect, useMemo, useRef, useState } from 'react'
import {
  ChevronLeft,
  ChevronRight,
  Circle,
  Droplets,
  Egg,
  Info,
  Leaf,
  MapPin,
  Minus,
  Plus,
  Search,
  Star,
  Wheat,
} from 'lucide-react'
import './HomePage.css'

const slides = [
  {
    id: 1,
    title: 'Fresh.\nOrganic.\nDelivered.',
    subtitle: 'rating',
    rating: '4.9 (589)',
    cta: 'SHOP NOW',
    ctaLink: '#shop-now',
    ctaBackground: '#32433c',
    desktopImage:
      'https://local-theme-main.myshopify.com/cdn/shop/files/Fruit-Bowl.1261_d2611357-2fd8-4419-a823-7d8ef9cd4adc.jpg?v=1742290032&width=3360',
    mobileImage:
      'https://local-theme-main.myshopify.com/cdn/shop/files/fcgfsdfesw.jpg?v=1760967254&width=640',
  },
  {
    id: 2,
    title: 'Kitchen &\nDining Sale',
    subtitle: 'UP TO 40% OFF',
    rating: '',
    cta: 'BUY NOW',
    ctaLink: '#buy-now',
    ctaBackground: '#1e1f22',
    desktopImage:
      'https://local-theme-main.myshopify.com/cdn/shop/files/hero2.jpg?v=1742290819&width=3360',
    mobileImage:
      'https://local-theme-main.myshopify.com/cdn/shop/files/hero_local2.jpg?v=1750245569&width=640',
  },
]

const categoryItems = [
  {
    id: 1,
    title: 'Bread & Bakery',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/files/p1.jpg',
  },
  {
    id: 2,
    title: 'Flour & Baking',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/cat2_5a49a6c9-8515-4b59-bf25-f2351c6b3e90.jpg',
  },
  {
    id: 3,
    title: 'Fruits & Vegetables',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/cat3_b7efbfc9-6fd4-4a83-9100-205c605fa035.jpg',
  },
  {
    id: 4,
    title: 'Fresh Meals & Pizzas',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/cat4_5d87c5ad-ac90-4d83-ab46-f475be4f0f6d.jpg',
  },
  {
    id: 5,
    title: 'Beverages',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/cat5_93861299-77ce-4c1f-b869-0a8d614eab5a.jpg',
  },
  {
    id: 6,
    title: 'Fresh Meat',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/cat6_4642f068-551f-4324-9419-617736584e3e.jpg',
  },
  {
    id: 7,
    title: 'Dairy & Eggs',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/files/cat7.jpg',
  },
  {
    id: 8,
    title: 'Sauces & Marinades',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/cat8_731bbc81-d2f0-4b82-af63-71a10a4db2a7.jpg',
  },
]

const promoCards = [
  {
    id: 1,
    subtitle: 'Fresh everyday',
    title: 'Finest Bread',
    cta: 'Show more',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/promo1_4575bd47-9a81-46da-8853-4cda5aacf922.jpg?crop=center&height=1080&v=1737708555&width=1080',
    bgColor: '#ebe0c9',
  },
  {
    id: 2,
    subtitle: 'Just arrived!',
    title: 'Superfoods',
    cta: 'Show more',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/promo2_043a93e8-22be-4755-9405-ee2b99a7bf78.jpg?crop=center&height=1080&v=1737708476&width=1080',
    bgColor: '#cfded3',
  },
  {
    id: 3,
    subtitle: 'Collection',
    title: 'Pure Organic',
    cta: 'Show more',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/promo3.jpg?crop=center&height=1080&v=1737618799&width=1080',
    bgColor: '#cddce4',
  },
]

const lifestyleItems = [
  {
    id: 1,
    title: 'Vegan',
    description: 'Plant based goodness',
    icon: 'https://local-theme-main.myshopify.com/cdn/shop/files/Organic_f3e8aba8-cedd-4677-9f66-f39c28672456.png?crop=center&height=64&v=1655107114&width=64',
    bgColor: '#c8dbc6',
  },
  {
    id: 2,
    title: 'Gluten-Free',
    description: "Only whole foods that don't contain gluten",
    icon: 'https://local-theme-main.myshopify.com/cdn/shop/files/Gluten-free_17e28c68-26fb-46cc-a43f-9009f8fc0bae.png?crop=center&height=64&v=1655107154&width=64',
    bgColor: '#d9d2c2',
  },
  {
    id: 3,
    title: 'Paleo',
    description: 'Ancient ingredients, modern flavors',
    icon: 'https://local-theme-main.myshopify.com/cdn/shop/files/corn-1084_f6e8128e-cecb-4905-974e-cf688e4845a1.png?crop=center&height=64&v=1655107234&width=64',
    bgColor: '#c6d7d3',
  },
  {
    id: 4,
    title: 'Keto',
    description: 'Good fats served in flavor-forward food',
    icon: 'https://local-theme-main.myshopify.com/cdn/shop/files/meat-1037_ca0e1c8c-1dc9-4771-998e-f8947c4dc6a3.png?crop=center&height=64&v=1655107271&width=64',
    bgColor: '#dcced1',
  },
  {
    id: 5,
    title: 'Plant-Based',
    description: 'Introducing',
    icon: 'https://local-theme-main.myshopify.com/cdn/shop/files/wheat-1092_57864e9e-321e-4334-ae67-5660d953f941.png?crop=center&height=64&v=1655107306&width=64',
    bgColor: '#c8d8db',
  },
]

const productDetailImages = [
  'https://local-theme-main.myshopify.com/cdn/shop/products/2-a.jpg?v=1653626304&width=1080',
  'https://local-theme-main.myshopify.com/cdn/shop/products/2-b.jpg?v=1653626303&width=1080',
]

const hotMealsItems = [
  {
    id: 1,
    image: 'https://local-theme-main.myshopify.com/cdn/shop/files/p1.jpg?v=1737625283&width=480',
    price: 'From $6.00',
    title: 'Neapolitan Pizza',
    rating: 2,
  },
  {
    id: 2,
    image: 'https://local-theme-main.myshopify.com/cdn/shop/files/p2.jpg?v=1737625336&width=480',
    price: 'From $6.00',
    title: 'Noodle Salad',
    rating: 4,
  },
  {
    id: 3,
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/43-a.jpg?v=1655710682&width=480',
    price: 'From $5.50',
    title: 'Crispy Chicken',
    rating: 4,
  },
  {
    id: 4,
    image: 'https://local-theme-main.myshopify.com/cdn/shop/files/p3.jpg?v=1737625310&width=480',
    price: 'From $7.00',
    title: 'Greek Salad',
    rating: 4,
  },
  {
    id: 5,
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/44-a.jpg?v=1655795707&width=480',
    price: 'From $5.80',
    title: 'Hamburger',
    rating: 5,
  },
  {
    id: 6,
    image: 'https://local-theme-main.myshopify.com/cdn/shop/files/p4.jpg?v=1737625282&width=480',
    price: 'From $6.90',
    title: 'Power Breakfast',
    rating: 3,
  },
]

const testimonialItems = [
  {
    id: 1,
    name: 'Michael Smith',
    role: 'Customer',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/fresh_food_5ed4c2ea-d46c-4d9d-9e25-6cd9a62119d5.jpg?crop=center&height=140&v=1655966780&width=140',
    quote:
      "Great products. Always fresh, eco stuff that i can't find anywhere else in the city. I wouldn't imagine my daily life without them!",
  },
  {
    id: 2,
    name: 'John Forest',
    role: 'Customer',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/preparing-food-with-gloves.jpg?crop=center&height=140&v=1653641705&width=140',
    quote:
      'What i love about this shop is the fact that they have great assistance after buying. They offer free recipes and a lot of freebies on each purchase.',
  },
]

const latestArticleItems = [
  {
    id: 1,
    date: 'June 7, 2022',
    title: '11 Top Chef Grilling Recipes to Make This Summer',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/articles/blog2.jpg?crop=center&height=480&v=1654590847&width=640',
    link: '#article-1',
  },
  {
    id: 2,
    date: 'June 5, 2022',
    title: '10 Ideas for a Healthy High Fiber Diet',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/articles/blog1_7f0c9c13-08c3-4d03-844f-7a07d5a10098.jpg?crop=center&height=480&v=1654586669&width=640',
    link: '#article-2',
  },
  {
    id: 3,
    date: 'June 1, 2022',
    title: 'Healthy Sweets?',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/articles/blog3.jpg?crop=center&height=480&v=1654592092&width=640',
    link: '#article-3',
  },
]

const upcomingEventItems = [
  {
    id: 1,
    title: 'WINE TASTING',
    location: 'Saint Germain.',
    schedule: 'Thu Sep 24th 6.00pm - 8.00pm',
    details: [
      'Spend a decadent afternoon in our Saint Germain store with a wine and cheese tasting, guided by a knowledgeable sommelier.',
      'Sample wines from various regions, including Rhone, Bordeaux and Sancerre, learning how each region produces different wines.',
      '- Find out the proper way to taste wine.',
      '- Nibble on wine-friendly snacks like French cheeses and cured meats for lunch while you sip in a comfortable converted wine cellar in the center of Paris.',
      '- Taste five different wines from regions such as Bordeaux, Sancerre and Champagne Sample artisanal cheese and tasty charcuterie',
      '- Learn about the best wine-tasting techniques from your trained sommelier guide Relax',
    ],
  },
  {
    id: 2,
    title: 'Free cooking class',
    location: 'Champs Elysees.',
    schedule: 'Wed Oct 11th 5.00pm - 8.00pm',
    details: [
      'In our third MasterClass, Chef John Doe focuses on preparing fresh seafood like lobster and salmon, making classic desserts such as apple pie and lemon tart, and showing how sous vide cooking can be done at home to enhance flavor and texture.',
      "Whether you're a beginning or advanced cook, you'll learn the techniques and principles that will give you the understanding and skills to get the most delicious results.",
    ],
  },
  {
    id: 3,
    title: 'Pumpkin carving contest',
    location: 'La Defense.',
    schedule: 'Fri Oct 18th 5.00pm - 8.00pm',
    details: [
      "This year's contest will be conducted as follows:",
      'Pumpkins will be carved at home and brought to school on Wednesday, October 30th, no later than 9:00am. Pumpkins will be displayed in the front hall, and the judging will take place on Wednesday, October 30th at 3:00pm. They will be lit and displayed on the stage for the school to view on Thursday at 1:00pm.',
      'A battery operated candle must be provided by the student in order for the pumpkin to be lit.',
    ],
  },
]

const bestSellerItems = [
  {
    id: 1,
    name: 'Sliced Tomato Puree',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/4-a.jpg?v=1653636911&width=480',
    price: 'From $3.50',
    oldPrice: '',
    rating: 4,
    reviews: '(3)',
    description: 'Rich, smooth texture',
    badge: '',
    badgeColor: '',
    features: ['grain', 'leaf', 'vegan'],
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
    badge: 'UP TO -29%',
    badgeColor: 'red',
    features: ['vegan', 'grain', 'fruit'],
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
    badgeColor: '',
    features: ['leaf'],
  },
  {
    id: 4,
    name: 'Coconut Water',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/1-a.jpg?v=1653626228&width=480',
    price: '$3.00',
    oldPrice: '',
    rating: 5,
    reviews: '(7)',
    description: 'Rich taste!',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'vegan'],
  },
  {
    id: 5,
    name: 'Power Breakfast',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/p4.jpg?v=1737625282&width=480',
    price: 'From $2.00',
    oldPrice: '',
    rating: 3,
    reviews: '(1)',
    description: 'Protein bomb!',
    badge: 'PREORDER NOW',
    badgeColor: 'brown',
    features: ['grain', 'vegan', 'leaf'],
  },
  {
    id: 6,
    name: 'Chocolate Cookie',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/34-a.jpg?v=1655373960&width=480',
    price: '$9.00',
    oldPrice: '',
    rating: 5,
    reviews: '(4)',
    description: 'No added sugar!',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'egg'],
  },
  {
    id: 7,
    name: 'Pomegranate',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/13-b.jpg?v=1653637435&width=480',
    price: '$4.99',
    oldPrice: '$6.99',
    rating: 4,
    reviews: '(6)',
    description: 'High contents of polyphenols',
    badge: '-29%',
    badgeColor: 'red',
    features: ['leaf', 'fruit'],
  },
  {
    id: 8,
    name: 'Sourdough Perth',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/29-a.jpg?v=1655367914&width=480',
    price: '$2.50',
    oldPrice: '',
    rating: 5,
    reviews: '(1)',
    description: '100% rye flour',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'egg'],
  },
  {
    id: 9,
    name: 'BBQ Sauce',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/5-a.jpg?v=1653637901&width=480',
    price: 'From $5.00',
    oldPrice: '',
    rating: 5,
    reviews: '(6)',
    description: 'Fat free, sweet and tangy',
    badge: '',
    badgeColor: '',
    features: ['grain', 'egg', 'droplet'],
  },
  {
    id: 10,
    name: 'Hamburger',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/44-a.jpg?v=1655795707&width=480',
    price: 'On Sale from $3.50',
    oldPrice: '',
    rating: 5,
    reviews: '(3)',
    description: 'Fresh everyday!',
    badge: 'UP TO -22%',
    badgeColor: 'red',
    features: ['egg', 'grain', 'leaf', 'vegan', 'droplet'],
  },
  {
    id: 11,
    name: 'Mozzarella',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/40-a.jpg?v=1655708394&width=480',
    price: '$0.00',
    oldPrice: '',
    rating: 0,
    reviews: 'No reviews',
    description: '',
    badge: 'SOLD OUT',
    badgeColor: 'gray',
    features: ['leaf', 'droplet'],
    soldOut: true,
  },
  {
    id: 12,
    name: 'Greek Salad',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/files/p3.jpg?v=1737625310&width=480',
    price: 'From $6.00',
    oldPrice: '',
    rating: 5,
    reviews: '(1)',
    description: 'Greek style',
    badge: '',
    badgeColor: '',
    features: ['grain', 'egg', 'leaf'],
  },
  {
    id: 13,
    name: 'Chili Pepper',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/17-a.jpg?v=1655452094&width=480',
    price: '$1.50',
    oldPrice: '',
    rating: 0,
    reviews: 'No reviews',
    description: 'Very hot!',
    badge: '',
    badgeColor: '',
    features: [],
  },
  {
    id: 14,
    name: 'Lemon',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/10-a.jpg?v=1655452040&width=480',
    price: '$2.99',
    oldPrice: '$3.50',
    rating: 5,
    reviews: '(1)',
    description: 'Organic',
    badge: '-15%',
    badgeColor: 'red',
    features: [],
  },
  {
    id: 15,
    name: 'Potatoes',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/37-a.jpg?v=1655451830&width=480',
    price: '$2.00',
    oldPrice: '',
    rating: 0,
    reviews: 'No reviews',
    description: 'Mild melon aroma',
    badge: '',
    badgeColor: '',
    features: [],
  },
  {
    id: 16,
    name: 'Yellow Pepper',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/36-b.jpg?v=1655448290&width=480',
    price: '$2.99',
    oldPrice: '$3.50',
    rating: 0,
    reviews: 'No reviews',
    description: 'Milder taste',
    badge: '-15%',
    badgeColor: 'red',
    features: [],
  },
]

const breadBakeryItems = [
  {
    id: 1,
    name: 'Sourdough Perth',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/29-a.jpg?v=1655367914&width=480',
    price: '$2.50',
    oldPrice: '',
    rating: 5,
    reviews: '(1)',
    description: '100% rye flour',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'egg'],
  },
  {
    id: 2,
    name: 'Sandwich Bun',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/33-a.jpg?v=1655373876&width=480',
    price: '$0.80',
    oldPrice: '',
    rating: 5,
    reviews: '(2)',
    description: 'With seeds',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'egg'],
  },
  {
    id: 3,
    name: 'Bread Sticks',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/32-a.jpg?v=1655369474&width=480',
    price: '$6.50',
    oldPrice: '',
    rating: 5,
    reviews: '(2)',
    description: 'Super crusty',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'egg'],
  },
  {
    id: 4,
    name: 'White Sourdough',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/31-a.jpg?v=1655369261&width=480',
    price: '$2.50',
    oldPrice: '',
    rating: 5,
    reviews: '(2)',
    description: 'Crisp crust',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'egg'],
  },
  {
    id: 5,
    name: 'French Baguette',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/30-a.jpg?v=1655368820&width=480',
    price: '$2.50',
    oldPrice: '',
    rating: 4,
    reviews: '(4)',
    description: '2 feet long',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'egg'],
  },
  {
    id: 6,
    name: 'Chocolate Cookie',
    image:
      'https://local-theme-main.myshopify.com/cdn/shop/products/34-a.jpg?v=1655373960&width=480',
    price: '$9.00',
    oldPrice: '',
    rating: 5,
    reviews: '(4)',
    description: 'No added sugar!',
    badge: 'NEW',
    badgeColor: 'green',
    features: ['grain', 'egg'],
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

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== 'undefined' ? window.innerWidth >= 768 : false,
  )
  const [categoryPageIndex, setCategoryPageIndex] = useState(0)
  const [bestSellerPageIndex, setBestSellerPageIndex] = useState(0)
  const [breadBakeryPageIndex, setBreadBakeryPageIndex] = useState(0)
  const [productImageIndex, setProductImageIndex] = useState(0)
  const [lifestylePageIndex, setLifestylePageIndex] = useState(0)
  const [hotMealsPageIndex, setHotMealsPageIndex] = useState(0)
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [openEventId, setOpenEventId] = useState(null)
  const [productStyle, setProductStyle] = useState('Student Mix')
  const [productQty, setProductQty] = useState(1)
  const swipeStartXRef = useRef(0)
  const bestSellerSwipeStartXRef = useRef(0)
  const breadBakerySwipeStartXRef = useRef(0)
  const productImageSwipeStartXRef = useRef(0)
  const lifestyleSwipeStartXRef = useRef(0)
  const hotMealsSwipeStartXRef = useRef(0)
  const testimonialSwipeStartXRef = useRef(0)

  const totalSlides = slides.length
  const currentSlide = slides[activeSlide]
  const desktopCategoryStarts = useMemo(
    () => getPageStarts(categoryItems.length, 6, 2),
    [],
  )
  const mobileCategoryStarts = useMemo(
    () => getPageStarts(categoryItems.length, 2, 2),
    [],
  )
  const categoryStarts = isDesktop ? desktopCategoryStarts : mobileCategoryStarts
  const categoryPageCount = categoryStarts.length
  const categoryStartIndex = categoryStarts[categoryPageIndex] ?? 0
  const categoryCardWidth = isDesktop ? 200 : 160
  const categoryGap = isDesktop ? 40 : 16
  const categoryTranslateX = categoryStartIndex * (categoryCardWidth + categoryGap)

  const mobileCounter = useMemo(
    () => `${activeSlide + 1} / ${totalSlides}`,
    [activeSlide, totalSlides],
  )
  const categoryMobileCounter = useMemo(
    () => `${categoryPageIndex + 1} / ${categoryPageCount}`,
    [categoryPageIndex, categoryPageCount],
  )
  const bestSellerDesktopStarts = useMemo(
    () => getPageStarts(bestSellerItems.length, 4, 4),
    [],
  )
  const bestSellerMobileStarts = useMemo(
    () => getPageStarts(bestSellerItems.length, 2, 2),
    [],
  )
  const bestSellerStarts = isDesktop ? bestSellerDesktopStarts : bestSellerMobileStarts
  const bestSellerPageCount = bestSellerStarts.length
  const bestSellerStartIndex = bestSellerStarts[bestSellerPageIndex] ?? 0
  const bestSellerCardWidth = isDesktop ? 370 : 172
  const bestSellerGap = 16
  const bestSellerTranslateX =
    bestSellerStartIndex * (bestSellerCardWidth + bestSellerGap)
  const bestSellerMobileCounter = useMemo(
    () => `${bestSellerPageIndex + 1} / ${bestSellerPageCount}`,
    [bestSellerPageIndex, bestSellerPageCount],
  )
  const breadBakeryDesktopStarts = useMemo(
    () => getPageStarts(breadBakeryItems.length, 4, 4),
    [],
  )
  const breadBakeryMobileStarts = useMemo(
    () => getPageStarts(breadBakeryItems.length, 2, 2),
    [],
  )
  const breadBakeryStarts = isDesktop ? breadBakeryDesktopStarts : breadBakeryMobileStarts
  const breadBakeryPageCount = breadBakeryStarts.length
  const breadBakeryStartIndex = breadBakeryStarts[breadBakeryPageIndex] ?? 0
  const breadBakeryCardWidth = isDesktop ? 370 : 172
  const breadBakeryGap = 16
  const breadBakeryTranslateX =
    breadBakeryStartIndex * (breadBakeryCardWidth + breadBakeryGap)
  const breadBakeryMobileCounter = useMemo(
    () => `${breadBakeryPageIndex + 1} / ${breadBakeryPageCount}`,
    [breadBakeryPageIndex, breadBakeryPageCount],
  )
  const lifestyleMobileStarts = useMemo(
    () => getPageStarts(lifestyleItems.length, 2, 2),
    [],
  )
  const lifestylePageCount = lifestyleMobileStarts.length
  const lifestyleStartIndex = lifestyleMobileStarts[lifestylePageIndex] ?? 0
  const lifestyleCardWidth = 168
  const lifestyleGap = 16
  const lifestyleTranslateX = lifestyleStartIndex * (lifestyleCardWidth + lifestyleGap)
  const lifestyleMobileCounter = useMemo(
    () => `${lifestylePageIndex + 1} / ${lifestylePageCount}`,
    [lifestylePageIndex, lifestylePageCount],
  )
  const hotMealsDesktopStarts = useMemo(
    () => getPageStarts(hotMealsItems.length, 2, 2),
    [],
  )
  const hotMealsMobileStarts = useMemo(
    () => getPageStarts(hotMealsItems.length, 1, 1),
    [],
  )
  const hotMealsStarts = isDesktop ? hotMealsDesktopStarts : hotMealsMobileStarts
  const hotMealsPageCount = hotMealsStarts.length
  const hotMealsStartIndex = hotMealsStarts[hotMealsPageIndex] ?? 0
  const hotMealsCardWidth = 336
  const hotMealsGap = 16
  const hotMealsTranslateX = isDesktop
    ? hotMealsStartIndex * (hotMealsCardWidth + hotMealsGap)
    : hotMealsStartIndex * 100
  const hotMealsMobileCounter = useMemo(
    () => `${hotMealsPageIndex + 1} / ${hotMealsPageCount}`,
    [hotMealsPageIndex, hotMealsPageCount],
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides)
    }, 6000)

    return () => clearInterval(timer)
  }, [totalSlides])

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    setCategoryPageIndex((prev) => Math.min(prev, categoryPageCount - 1))
  }, [categoryPageCount])
  useEffect(() => {
    setBestSellerPageIndex((prev) => Math.min(prev, bestSellerPageCount - 1))
  }, [bestSellerPageCount])
  useEffect(() => {
    setBreadBakeryPageIndex((prev) => Math.min(prev, breadBakeryPageCount - 1))
  }, [breadBakeryPageCount])
  useEffect(() => {
    setLifestylePageIndex((prev) => Math.min(prev, lifestylePageCount - 1))
  }, [lifestylePageCount])
  useEffect(() => {
    setHotMealsPageIndex((prev) => Math.min(prev, hotMealsPageCount - 1))
  }, [hotMealsPageCount])

  const goToSlide = (index) => setActiveSlide(index)
  const goToPrevious = () =>
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  const goToNext = () => setActiveSlide((prev) => (prev + 1) % totalSlides)
  const goToCategoryPage = (index) => setCategoryPageIndex(index)
  const goToPreviousCategoryPage = () =>
    setCategoryPageIndex((prev) => (prev - 1 + categoryPageCount) % categoryPageCount)
  const goToNextCategoryPage = () =>
    setCategoryPageIndex((prev) => (prev + 1) % categoryPageCount)
  const goToBestSellerPage = (index) => setBestSellerPageIndex(index)
  const goToPreviousBestSellerPage = () =>
    setBestSellerPageIndex((prev) => (prev - 1 + bestSellerPageCount) % bestSellerPageCount)
  const goToNextBestSellerPage = () =>
    setBestSellerPageIndex((prev) => (prev + 1) % bestSellerPageCount)
  const goToBreadBakeryPage = (index) => setBreadBakeryPageIndex(index)
  const goToPreviousBreadBakeryPage = () =>
    setBreadBakeryPageIndex((prev) => (prev - 1 + breadBakeryPageCount) % breadBakeryPageCount)
  const goToNextBreadBakeryPage = () =>
    setBreadBakeryPageIndex((prev) => (prev + 1) % breadBakeryPageCount)
  const goToProductImage = (index) => setProductImageIndex(index)
  const goToPreviousProductImage = () =>
    setProductImageIndex((prev) => (prev - 1 + productDetailImages.length) % productDetailImages.length)
  const goToNextProductImage = () =>
    setProductImageIndex((prev) => (prev + 1) % productDetailImages.length)
  const goToPreviousLifestylePage = () =>
    setLifestylePageIndex((prev) => (prev - 1 + lifestylePageCount) % lifestylePageCount)
  const goToNextLifestylePage = () =>
    setLifestylePageIndex((prev) => (prev + 1) % lifestylePageCount)
  const goToHotMealsPage = (index) => setHotMealsPageIndex(index)
  const goToPreviousHotMealsPage = () =>
    setHotMealsPageIndex((prev) => (prev - 1 + hotMealsPageCount) % hotMealsPageCount)
  const goToNextHotMealsPage = () =>
    setHotMealsPageIndex((prev) => (prev + 1) % hotMealsPageCount)
  const goToTestimonial = (index) => setTestimonialIndex(index)
  const goToPreviousTestimonial = () =>
    setTestimonialIndex((prev) => (prev - 1 + testimonialItems.length) % testimonialItems.length)
  const goToNextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonialItems.length)
  const toggleEvent = (eventId) =>
    setOpenEventId((prev) => (prev === eventId ? null : eventId))

  const handleCategoryTouchStart = (event) => {
    swipeStartXRef.current = event.changedTouches[0].clientX
  }

  const handleCategoryTouchEnd = (event) => {
    const swipeDelta = event.changedTouches[0].clientX - swipeStartXRef.current
    if (Math.abs(swipeDelta) < 40) {
      return
    }
    if (swipeDelta < 0) {
      goToNextCategoryPage()
      return
    }
    goToPreviousCategoryPage()
  }
  const handleBestSellerTouchStart = (event) => {
    bestSellerSwipeStartXRef.current = event.changedTouches[0].clientX
  }
  const handleBestSellerTouchEnd = (event) => {
    const swipeDelta =
      event.changedTouches[0].clientX - bestSellerSwipeStartXRef.current
    if (Math.abs(swipeDelta) < 40) {
      return
    }
    if (swipeDelta < 0) {
      goToNextBestSellerPage()
      return
    }
    goToPreviousBestSellerPage()
  }
  const handleBreadBakeryTouchStart = (event) => {
    breadBakerySwipeStartXRef.current = event.changedTouches[0].clientX
  }
  const handleBreadBakeryTouchEnd = (event) => {
    const swipeDelta =
      event.changedTouches[0].clientX - breadBakerySwipeStartXRef.current
    if (Math.abs(swipeDelta) < 40) {
      return
    }
    if (swipeDelta < 0) {
      goToNextBreadBakeryPage()
      return
    }
    goToPreviousBreadBakeryPage()
  }
  const handleProductImageTouchStart = (event) => {
    productImageSwipeStartXRef.current = event.changedTouches[0].clientX
  }
  const handleProductImageTouchEnd = (event) => {
    const swipeDelta =
      event.changedTouches[0].clientX - productImageSwipeStartXRef.current
    if (Math.abs(swipeDelta) < 40) {
      return
    }
    if (swipeDelta < 0) {
      goToNextProductImage()
      return
    }
    goToPreviousProductImage()
  }
  const handleLifestyleTouchStart = (event) => {
    lifestyleSwipeStartXRef.current = event.changedTouches[0].clientX
  }
  const handleLifestyleTouchEnd = (event) => {
    const swipeDelta =
      event.changedTouches[0].clientX - lifestyleSwipeStartXRef.current
    if (Math.abs(swipeDelta) < 40) {
      return
    }
    if (swipeDelta < 0) {
      goToNextLifestylePage()
      return
    }
    goToPreviousLifestylePage()
  }
  const handleHotMealsTouchStart = (event) => {
    hotMealsSwipeStartXRef.current = event.changedTouches[0].clientX
  }
  const handleHotMealsTouchEnd = (event) => {
    const swipeDelta = event.changedTouches[0].clientX - hotMealsSwipeStartXRef.current
    if (Math.abs(swipeDelta) < 40) {
      return
    }
    if (swipeDelta < 0) {
      goToNextHotMealsPage()
      return
    }
    goToPreviousHotMealsPage()
  }
  const handleTestimonialTouchStart = (event) => {
    testimonialSwipeStartXRef.current = event.changedTouches[0].clientX
  }
  const handleTestimonialTouchEnd = (event) => {
    const swipeDelta = event.changedTouches[0].clientX - testimonialSwipeStartXRef.current
    if (Math.abs(swipeDelta) < 40) {
      return
    }
    if (swipeDelta < 0) {
      goToNextTestimonial()
      return
    }
    goToPreviousTestimonial()
  }
  const decreaseQty = () => setProductQty((prev) => Math.max(1, prev - 1))
  const increaseQty = () => setProductQty((prev) => prev + 1)
  const getBadgeClass = (badgeColor) => {
    if (badgeColor === 'red') {
      return 'bg-[#d74b4b] text-white'
    }
    if (badgeColor === 'green') {
      return 'bg-[#3f9447] text-white'
    }
    if (badgeColor === 'gray') {
      return 'bg-[#666d74] text-white'
    }
    if (badgeColor === 'brown') {
      return 'bg-[#a4674e] text-white'
    }
    return 'bg-transparent text-transparent'
  }
  const renderFeatureIcon = (featureKey) => {
    if (featureKey === 'grain') return <Wheat className="h-[14px] w-[14px]" strokeWidth={1.7} />
    if (featureKey === 'leaf') return <Leaf className="h-[14px] w-[14px]" strokeWidth={1.7} />
    if (featureKey === 'egg') return <Egg className="h-[14px] w-[14px]" strokeWidth={1.7} />
    if (featureKey === 'droplet') return <Droplets className="h-[14px] w-[14px]" strokeWidth={1.7} />
    if (featureKey === 'fruit') return <Circle className="h-[14px] w-[14px]" strokeWidth={1.7} />
    return <Leaf className="h-[14px] w-[14px]" strokeWidth={1.7} />
  }

  return (
    <main className="brihatri-local-homepage b-MiniMal-homepage">
      <section className="brihatri-local-hero b-MiniMal-hero relative mx-auto w-full max-w-[1920px]">
        <div className="brihatri-local-heroTrack b-MiniMal-heroTrack relative h-[520px] min-h-[520px] max-h-[520px] w-full overflow-hidden bg-[#ecebea]">
          {slides.map((slide, index) => (
            <article
              key={slide.id}
              className={`brihatri-local-slide b-MiniMal-slide absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeSlide
                  ? 'z-20 opacity-100'
                  : 'pointer-events-none z-10 opacity-0'
              }`}
              aria-hidden={index !== activeSlide}
            >
              <div className="brihatri-local-imageLayer b-MiniMal-imageLayer absolute inset-0">
                <img
                  src={slide.mobileImage}
                  alt={slide.title.replace(/\n/g, ' ')}
                  className="brihatri-local-slideImage b-MiniMal-slideImage absolute inset-0 h-full w-full object-cover object-[62%_center] md:hidden"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
                <img
                  src={slide.desktopImage}
                  alt={slide.title.replace(/\n/g, ' ')}
                  className="brihatri-local-slideImage b-MiniMal-slideImage absolute inset-0 hidden h-full w-full object-cover object-center md:block"
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              </div>
            </article>
          ))}

          <div className="brihatri-local-heroContent b-MiniMal-heroContent relative z-30 flex h-full items-start px-5 pt-[150px] md:items-center md:px-[74px] md:pt-2">
            <div className="brihatri-local-copyWrap b-MiniMal-copyWrap max-w-[535px]">
              {currentSlide.subtitle === 'rating' ? (
                <div className="brihatri-local-rating b-MiniMal-rating mb-8 flex items-center gap-3 md:mb-10">
                  <span className="brihatri-local-stars b-MiniMal-stars flex items-center gap-1 text-[#399e5a]">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star
                        key={`star-${index}`}
                        className="h-4 w-4"
                        fill="currentColor"
                        strokeWidth={1.5}
                      />
                    ))}
                  </span>
                  <p className="brihatri-local-ratingText b-MiniMal-ratingText text-[14px] leading-[20px] text-[#1f2f35]">
                    {currentSlide.rating}
                  </p>
                </div>
              ) : (
                <p className="brihatri-local-kicker b-MiniMal-kicker mb-9 text-[14px] uppercase tracking-[0.2px] text-[#0f2f4a] md:mb-10 md:text-[14px]">
                  {currentSlide.subtitle}
                </p>
              )}

              <h1 className="brihatri-local-mainTitle b-MiniMal-mainTitle max-w-[300px] whitespace-pre-line text-[50px] font-medium leading-[0.95] tracking-[-1px] text-[#34423c] md:max-w-[420px] md:text-[68px] md:tracking-[-1.4px]">
                {currentSlide.title}
              </h1>

              <a
                href={currentSlide.ctaLink}
                className="brihatri-local-cta b-MiniMal-cta mt-8 inline-flex h-[40px] min-h-[40px] max-h-[40px] min-w-[165px] items-center justify-center rounded-full px-[36px] py-[10px] text-[18px] font-medium uppercase leading-none text-white transition-transform duration-300 hover:scale-[1.02] md:mt-11 md:h-[60px] md:min-h-[60px] md:max-h-[60px] md:min-w-[222px] md:text-[20px]"
                style={{ backgroundColor: currentSlide.ctaBackground }}
              >
                {currentSlide.cta}
              </a>
            </div>
          </div>
        </div>

        <div className="brihatri-local-controls b-MiniMal-controls relative z-40 flex h-[78px] items-center justify-center gap-5 bg-[#ffffff] md:h-[84px]">
          <button
            type="button"
            onClick={goToPrevious}
            className="brihatri-local-arrow b-MiniMal-arrow hidden h-9 w-9 items-center justify-center rounded-full border border-transparent text-[#6b6b6b] transition-colors hover:border-[#d6d6d6] hover:text-[#1f1f23] md:inline-flex"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={2} />
          </button>

          <div className="brihatri-local-desktopPagination b-MiniMal-desktopPagination hidden items-center gap-2 md:flex">
            {slides.map((slide, index) => (
              <button
                key={`dot-${slide.id}`}
                type="button"
                onClick={() => goToSlide(index)}
                className={`brihatri-local-dot b-MiniMal-dot h-[11px] w-[11px] rounded-full transition-all ${
                  index === activeSlide ? 'w-[37px] bg-[#1f1f23]' : 'bg-[#cbcbcb]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goToNext}
            className="brihatri-local-arrow b-MiniMal-arrow hidden h-9 w-9 items-center justify-center rounded-full border border-transparent text-[#6b6b6b] transition-colors hover:border-[#d6d6d6] hover:text-[#1f1f23] md:inline-flex"
            aria-label="Next slide"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={2} />
          </button>

          <div className="brihatri-local-mobilePagination b-MiniMal-mobilePagination flex items-center gap-5 text-[14px] md:hidden">
            <button
              type="button"
              onClick={goToPrevious}
              className="brihatri-local-mobileArrow b-MiniMal-mobileArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6b6b6b]"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
            </button>

            <p className="brihatri-local-mobileCounter b-MiniMal-mobileCounter min-w-[54px] text-center text-[14px] font-normal leading-none text-[#303030]">
              {mobileCounter}
            </p>

            <button
              type="button"
              onClick={goToNext}
              className="brihatri-local-mobileArrow b-MiniMal-mobileArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6b6b6b]"
              aria-label="Next slide"
            >
              <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      

      <section className="brihatri-local-categorySection b-MiniMal-categorySection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-12 pt-10 md:px-[74px] md:pb-14 md:pt-16">
        <h2 className="brihatri-local-categoryTitle b-MiniMal-categoryTitle text-[24px] font-normal leading-[1.2] tracking-[-0.2px] text-[#151820] md:text-[28px]">
          Shop by Category
        </h2>

        <div
          className="brihatri-local-categoryViewport b-MiniMal-categoryViewport mt-7 overflow-hidden md:mt-9 pb-[2px]"
          onTouchStart={handleCategoryTouchStart}
          onTouchEnd={handleCategoryTouchEnd}
        >
          <div
            className="brihatri-local-categoryGrid b-MiniMal-categoryGrid flex gap-4 transition-transform duration-500 ease-out will-change-transform md:gap-10"
            style={{ transform: `translate3d(-${categoryTranslateX}px, 0, 0)` }}
          >
            {categoryItems.map((item) => (
              <article
                key={item.id}
                className="brihatri-local-categoryCard b-MiniMal-categoryCard flex h-[210px] min-h-[210px] max-h-[210px] w-[160px] min-w-[160px] max-w-[160px] flex-col items-center justify-between rounded-[12px] border border-[#cfcfce] bg-[#ffffff] px-4 pb-5 pt-5 md:h-[260px] md:min-h-[260px] md:max-h-[260px] md:w-[200px] md:min-w-[200px] md:max-w-[200px] md:px-5 md:pb-7 md:pt-7"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="brihatri-local-categoryImage b-MiniMal-categoryImage h-[104px] w-[120px] object-contain md:h-[132px] md:w-[148px]"
                />
                <h3 className="brihatri-local-categoryCardTitle b-MiniMal-categoryCardTitle max-w-[140px] text-center text-[18px] font-normal leading-[1.03] tracking-[-0.1px] text-[#1f252e] md:max-w-[160px] md:leading-[1.05]">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>

        <div className="brihatri-local-categoryControls b-MiniMal-categoryControls mt-6 flex items-center justify-center gap-5 text-[14px] md:mt-7">
          <button
            type="button"
            onClick={goToPreviousCategoryPage}
            className="brihatri-local-categoryArrow b-MiniMal-categoryArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#626262] transition-colors hover:text-[#1f1f23]"
            aria-label="Previous category page"
          >
            <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>

          {isDesktop ? (
            <div className="brihatri-local-categoryDots b-MiniMal-categoryDots flex items-center gap-2">
              {categoryStarts.map((_, index) => (
                <button
                  key={`category-dot-${index + 1}`}
                  type="button"
                  onClick={() => goToCategoryPage(index)}
                  className={`brihatri-local-categoryDot b-MiniMal-categoryDot h-[11px] w-[11px] rounded-full transition-all ${
                    index === categoryPageIndex ? 'w-[37px] bg-[#1f1f23]' : 'bg-[#c3c3c3]'
                  }`}
                  aria-label={`Go to category page ${index + 1}`}
                />
              ))}
            </div>
          ) : (
            <p className="brihatri-local-categoryCounter b-MiniMal-categoryCounter min-w-[58px] text-center text-[14px] leading-none text-[#2e2e2e]">
              {categoryMobileCounter}
            </p>
          )}

          <button
            type="button"
            onClick={goToNextCategoryPage}
            className="brihatri-local-categoryArrow b-MiniMal-categoryArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#626262] transition-colors hover:text-[#1f1f23]"
            aria-label="Next category page"
          >
            <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
        </div>
      </section>

      <section className="brihatri-local-bestSellerSection b-MiniMal-bestSellerSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-12 pt-8 md:px-14 md:pb-10 md:pt-5">
        <div className="brihatri-local-bestSellerHeader b-MiniMal-bestSellerHeader flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
          <h2 className="brihatri-local-bestSellerTitle b-MiniMal-bestSellerTitle text-[24px] font-normal leading-[1.15] tracking-[-0.2px] text-[#111722] md:text-[40px]">
            Best Sellers
          </h2>
          <a
            href="#all-products"
            className="brihatri-local-bestSellerLink b-MiniMal-bestSellerLink inline-flex w-fit border-b border-[#2f2f2f] pb-[2px] text-[14px] font-normal text-[#1f1f23] no-underline md:text-[14px]"
          >
            View all products
          </a>
        </div>

        <div
          className="brihatri-local-bestSellerViewport b-MiniMal-bestSellerViewport mt-4 overflow-hidden md:mt-6"
          onTouchStart={handleBestSellerTouchStart}
          onTouchEnd={handleBestSellerTouchEnd}
        >
          <div
            className="brihatri-local-bestSellerTrack b-MiniMal-bestSellerTrack flex gap-4 transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translate3d(-${bestSellerTranslateX}px, 0, 0)` }}
          >
            {bestSellerItems.map((item) => (
              <article
                key={item.id}
                className="brihatri-local-bestSellerCard b-MiniMal-bestSellerCard relative flex h-[535px] min-h-[535px] max-h-[535px] w-[172px] min-w-[172px] max-w-[172px] flex-col rounded-[10px] border border-[#d0d0d0] bg-[#ffffff] p-[14px] md:h-[716px] md:min-h-[716px] md:max-h-[716px] md:w-[370px] md:min-w-[370px] md:max-w-[370px] md:rounded-[12px] md:p-6"
              >
                {item.badge ? (
                  <span
                    className={`brihatri-local-bestSellerBadge b-MiniMal-bestSellerBadge absolute right-2 top-2 rounded-[4px] px-[8px] py-[3px] text-[12px] leading-none ${getBadgeClass(item.badgeColor)}`}
                  >
                    {item.badge}
                  </span>
                ) : null}

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="brihatri-local-bestSellerImage b-MiniMal-bestSellerImage h-[158px] w-full object-contain md:h-[360px]"
                />

                <div className="brihatri-local-bestSellerBody b-MiniMal-bestSellerBody mt-4 flex flex-1 flex-col md:mt-6">
                  <div className="brihatri-local-bestSellerPriceRow b-MiniMal-bestSellerPriceRow flex items-center gap-2">
                    <span className="brihatri-local-bestSellerPrice b-MiniMal-bestSellerPrice text-[16px] leading-tight text-[#172233] md:text-[16px]">
                      {item.price}
                    </span>
                    {item.oldPrice ? (
                      <span className="brihatri-local-bestSellerOldPrice b-MiniMal-bestSellerOldPrice text-[16px] text-[#7a7a7a] line-through md:text-[16px]">
                        {item.oldPrice}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="brihatri-local-bestSellerName b-MiniMal-bestSellerName mt-2 text-[18px] font-normal leading-[1.1] tracking-[-0.15px] text-[#111722] md:mt-3 md:text-[18px]">
                    {item.name}
                  </h3>

                  <div className="brihatri-local-bestSellerRating b-MiniMal-bestSellerRating mt-2 flex items-center gap-2">
                    <div className="brihatri-local-bestSellerStars b-MiniMal-bestSellerStars flex items-center gap-[3px] text-[#151515]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={`${item.id}-rating-${index}`}
                          className="h-[14px] w-[14px]"
                          fill={index < item.rating ? 'currentColor' : 'none'}
                          strokeWidth={1.9}
                        />
                      ))}
                    </div>
                    <span className="brihatri-local-bestSellerReviewText b-MiniMal-bestSellerReviewText text-[14px] text-[#2f3f52] md:text-[14px]">
                      {item.reviews}
                    </span>
                  </div>

                  <p className="brihatri-local-bestSellerDesc b-MiniMal-bestSellerDesc mt-2 min-h-[38px] text-[18px] leading-[1.22] text-[#565d66] md:mt-3 md:min-h-[47px] md:text-[18px]">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    disabled={item.soldOut}
                    className="brihatri-local-bestSellerCta b-MiniMal-bestSellerCta mt-3 h-[40px] min-h-[40px] max-h-[40px] rounded-full border border-[#232323] bg-transparent text-[18px] font-normal text-[#111722] transition-colors hover:bg-[#111722] hover:text-white disabled:cursor-not-allowed disabled:border-[#b4b4b4] disabled:text-[#9a9a9a] md:mt-5 md:h-[52px] md:min-h-[52px] md:max-h-[52px] md:text-[20px]"
                  >
                    {item.soldOut ? 'Sold Out' : 'Buy now'}
                  </button>

                  <div className="brihatri-local-bestSellerMeta b-MiniMal-bestSellerMeta mt-3 flex items-start gap-1 text-[#393f46] md:mt-4">
                    <Circle className="mt-[2px] h-[10px] w-[10px]" />
                    <p className="brihatri-local-bestSellerMetaText b-MiniMal-bestSellerMetaText text-[14px] leading-[1.15] text-[#303840] md:text-[14px]">
                      Choose a store to see local availability
                    </p>
                  </div>

                  <div className="brihatri-local-bestSellerFeatures b-MiniMal-bestSellerFeatures mt-3 flex flex-wrap items-center gap-2 text-[#1b1f25] md:mt-4">
                    {item.features.map((feature, index) => (
                      <span
                        key={`${item.id}-feature-${index}`}
                        className="brihatri-local-bestSellerFeatureIcon b-MiniMal-bestSellerFeatureIcon inline-flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#1f1f1f] md:h-[30px] md:w-[30px]"
                      >
                        {renderFeatureIcon(feature)}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="brihatri-local-bestSellerControls b-MiniMal-bestSellerControls mt-6 flex items-center justify-center gap-4 text-[14px] md:mt-5">
          <button
            type="button"
            onClick={goToPreviousBestSellerPage}
            className="brihatri-local-bestSellerArrow b-MiniMal-bestSellerArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#656565] transition-colors hover:text-[#191d21]"
            aria-label="Previous best sellers page"
          >
            <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>

          {isDesktop ? (
            <div className="brihatri-local-bestSellerDots b-MiniMal-bestSellerDots flex items-center gap-2">
              {bestSellerStarts.map((_, index) => (
                <button
                  key={`best-seller-dot-${index + 1}`}
                  type="button"
                  onClick={() => goToBestSellerPage(index)}
                  className={`brihatri-local-bestSellerDot b-MiniMal-bestSellerDot h-[10px] w-[10px] rounded-full transition-all ${
                    index === bestSellerPageIndex ? 'w-[37px] bg-[#1c1d20]' : 'bg-[#c3c3c3]'
                  }`}
                  aria-label={`Go to best sellers page ${index + 1}`}
                />
              ))}
            </div>
          ) : (
            <p className="brihatri-local-bestSellerCounter b-MiniMal-bestSellerCounter min-w-[58px] text-center text-[14px] leading-none text-[#2f2f2f]">
              {bestSellerMobileCounter}
            </p>
          )}

          <button
            type="button"
            onClick={goToNextBestSellerPage}
            className="brihatri-local-bestSellerArrow b-MiniMal-bestSellerArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#656565] transition-colors hover:text-[#191d21]"
            aria-label="Next best sellers page"
          >
            <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
        </div>
      </section>

      <section className="brihatri-local-promoSection b-MiniMal-promoSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-10 pt-4 md:px-14 md:pb-14 md:pt-8">
        <div className="brihatri-local-promoGrid b-MiniMal-promoGrid grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {promoCards.map((card) => (
            <article
              key={card.id}
              className="brihatri-local-promoCard b-MiniMal-promoCard flex overflow-hidden rounded-[10px] md:rounded-[12px]"
              style={{ backgroundColor: card.bgColor }}
            >
              <div className="brihatri-local-promoCardInner b-MiniMal-promoCardInner flex w-full flex-col items-center pb-8 pt-4 md:pb-10 md:pt-5">
                <img
                  src={card.image}
                  alt={card.title}
                  loading="lazy"
                  className="brihatri-local-promoImage b-MiniMal-promoImage h-[360px] w-full object-contain md:h-[520px]"
                />

                <p className="brihatri-local-promoSubtitle b-MiniMal-promoSubtitle mt-3 text-[18px] font-normal leading-[1.2] text-[#2c2d2f] md:mt-4 md:text-[16px]">
                  {card.subtitle}
                </p>

                <h3 className="brihatri-local-promoTitle b-MiniMal-promoTitle mt-2 text-[24px] font-normal leading-[1.08] tracking-[-0.2px] text-[#161c22] md:text-[40px]">
                  {card.title}
                </h3>

                <a
                  href="#shop-more"
                  className="brihatri-local-promoCta b-MiniMal-promoCta mt-5 inline-flex h-[40px] min-h-[40px] max-h-[40px] min-w-[146px] items-center justify-center rounded-full bg-[#1b1d21] px-7 text-[18px] font-medium text-white no-underline transition-colors hover:bg-[#0f1114] md:mt-6 md:h-[48px] md:min-h-[48px] md:max-h-[48px] md:min-w-[176px] md:text-[20px]"
                >
                  {card.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="brihatri-local-bestSellerSection brihatri-local-breadBakerySection b-MiniMal-bestSellerSection b-MiniMal-breadBakerySection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-12 pt-8 md:px-14 md:pb-10 md:pt-5">
        <div className="brihatri-local-bestSellerHeader b-MiniMal-bestSellerHeader flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
          <h2 className="brihatri-local-bestSellerTitle b-MiniMal-bestSellerTitle text-[24px] font-normal leading-[1.15] tracking-[-0.2px] text-[#111722] md:text-[40px]">
            Bread &amp; Bakery
          </h2>
          <a
            href="#bread-bakery-products"
            className="brihatri-local-bestSellerLink b-MiniMal-bestSellerLink inline-flex w-fit border-b border-[#2f2f2f] pb-[2px] text-[14px] font-normal text-[#1f1f23] no-underline md:text-[14px]"
          >
            View all products
          </a>
        </div>

        <div
          className="brihatri-local-bestSellerViewport brihatri-local-breadBakeryViewport b-MiniMal-bestSellerViewport b-MiniMal-breadBakeryViewport mt-4 overflow-hidden md:mt-6"
          onTouchStart={handleBreadBakeryTouchStart}
          onTouchEnd={handleBreadBakeryTouchEnd}
        >
          <div
            className="brihatri-local-bestSellerTrack brihatri-local-breadBakeryTrack b-MiniMal-bestSellerTrack b-MiniMal-breadBakeryTrack flex gap-4 transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translate3d(-${breadBakeryTranslateX}px, 0, 0)` }}
          >
            {breadBakeryItems.map((item) => (
              <article
                key={item.id}
                className="brihatri-local-bestSellerCard brihatri-local-breadBakeryCard b-MiniMal-bestSellerCard b-MiniMal-breadBakeryCard relative flex h-[535px] min-h-[535px] max-h-[535px] w-[172px] min-w-[172px] max-w-[172px] flex-col rounded-[10px] border border-[#d0d0d0] bg-[#ffffff] p-[14px] md:h-[716px] md:min-h-[716px] md:max-h-[716px] md:w-[370px] md:min-w-[370px] md:max-w-[370px] md:rounded-[12px] md:p-6"
              >
                {item.badge ? (
                  <span
                    className={`brihatri-local-bestSellerBadge brihatri-local-breadBakeryBadge b-MiniMal-bestSellerBadge b-MiniMal-breadBakeryBadge absolute right-2 top-2 rounded-[4px] px-[8px] py-[3px] text-[12px] leading-none ${getBadgeClass(item.badgeColor)}`}
                  >
                    {item.badge}
                  </span>
                ) : null}

                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="brihatri-local-bestSellerImage brihatri-local-breadBakeryImage b-MiniMal-bestSellerImage b-MiniMal-breadBakeryImage h-[158px] w-full object-contain md:h-[360px]"
                />

                <div className="brihatri-local-bestSellerBody brihatri-local-breadBakeryBody b-MiniMal-bestSellerBody b-MiniMal-breadBakeryBody mt-4 flex flex-1 flex-col md:mt-6">
                  <div className="brihatri-local-bestSellerPriceRow brihatri-local-breadBakeryPriceRow b-MiniMal-bestSellerPriceRow b-MiniMal-breadBakeryPriceRow flex items-center gap-2">
                    <span className="brihatri-local-bestSellerPrice brihatri-local-breadBakeryPrice b-MiniMal-bestSellerPrice b-MiniMal-breadBakeryPrice text-[16px] leading-tight text-[#172233] md:text-[16px]">
                      {item.price}
                    </span>
                    {item.oldPrice ? (
                      <span className="brihatri-local-bestSellerOldPrice brihatri-local-breadBakeryOldPrice b-MiniMal-bestSellerOldPrice b-MiniMal-breadBakeryOldPrice text-[16px] text-[#7a7a7a] line-through md:text-[16px]">
                        {item.oldPrice}
                      </span>
                    ) : null}
                  </div>

                  <h3 className="brihatri-local-bestSellerName brihatri-local-breadBakeryName b-MiniMal-bestSellerName b-MiniMal-breadBakeryName mt-2 text-[18px] font-normal leading-[1.1] tracking-[-0.15px] text-[#111722] md:mt-3 md:text-[18px]">
                    {item.name}
                  </h3>

                  <div className="brihatri-local-bestSellerRating brihatri-local-breadBakeryRating b-MiniMal-bestSellerRating b-MiniMal-breadBakeryRating mt-2 flex items-center gap-2">
                    <div className="brihatri-local-bestSellerStars brihatri-local-breadBakeryStars b-MiniMal-bestSellerStars b-MiniMal-breadBakeryStars flex items-center gap-[3px] text-[#151515]">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star
                          key={`${item.id}-bread-bakery-rating-${index}`}
                          className="h-[14px] w-[14px]"
                          fill={index < item.rating ? 'currentColor' : 'none'}
                          strokeWidth={1.9}
                        />
                      ))}
                    </div>
                    <span className="brihatri-local-bestSellerReviewText brihatri-local-breadBakeryReviewText b-MiniMal-bestSellerReviewText b-MiniMal-breadBakeryReviewText text-[14px] text-[#2f3f52] md:text-[14px]">
                      {item.reviews}
                    </span>
                  </div>

                  <p className="brihatri-local-bestSellerDesc brihatri-local-breadBakeryDesc b-MiniMal-bestSellerDesc b-MiniMal-breadBakeryDesc mt-2 min-h-[38px] text-[18px] leading-[1.22] text-[#565d66] md:mt-3 md:min-h-[47px] md:text-[18px]">
                    {item.description}
                  </p>

                  <button
                    type="button"
                    className="brihatri-local-bestSellerCta brihatri-local-breadBakeryCta b-MiniMal-bestSellerCta b-MiniMal-breadBakeryCta mt-3 h-[40px] min-h-[40px] max-h-[40px] rounded-full border border-[#232323] bg-transparent text-[18px] font-normal text-[#111722] transition-colors hover:bg-[#111722] hover:text-white md:mt-5 md:h-[52px] md:min-h-[52px] md:max-h-[52px] md:text-[20px]"
                  >
                    Buy now
                  </button>

                  <div className="brihatri-local-bestSellerMeta brihatri-local-breadBakeryMeta b-MiniMal-bestSellerMeta b-MiniMal-breadBakeryMeta mt-3 flex items-start gap-1 text-[#393f46] md:mt-4">
                    <Circle className="mt-[2px] h-[10px] w-[10px]" />
                    <p className="brihatri-local-bestSellerMetaText brihatri-local-breadBakeryMetaText b-MiniMal-bestSellerMetaText b-MiniMal-breadBakeryMetaText text-[14px] leading-[1.15] text-[#303840] md:text-[14px]">
                      Choose a store to see local availability
                    </p>
                  </div>

                  <div className="brihatri-local-bestSellerFeatures brihatri-local-breadBakeryFeatures b-MiniMal-bestSellerFeatures b-MiniMal-breadBakeryFeatures mt-3 flex flex-wrap items-center gap-2 text-[#1b1f25] md:mt-4">
                    {item.features.map((feature, index) => (
                      <span
                        key={`${item.id}-bread-bakery-feature-${index}`}
                        className="brihatri-local-bestSellerFeatureIcon brihatri-local-breadBakeryFeatureIcon b-MiniMal-bestSellerFeatureIcon b-MiniMal-breadBakeryFeatureIcon inline-flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#1f1f1f] md:h-[30px] md:w-[30px]"
                      >
                        {renderFeatureIcon(feature)}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="brihatri-local-bestSellerControls brihatri-local-breadBakeryControls b-MiniMal-bestSellerControls b-MiniMal-breadBakeryControls mt-6 flex items-center justify-center gap-4 text-[14px] md:mt-5">
          <button
            type="button"
            onClick={goToPreviousBreadBakeryPage}
            className="brihatri-local-bestSellerArrow brihatri-local-breadBakeryArrow b-MiniMal-bestSellerArrow b-MiniMal-breadBakeryArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#656565] transition-colors hover:text-[#191d21]"
            aria-label="Previous bread and bakery page"
          >
            <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>

          {isDesktop ? (
            <div className="brihatri-local-bestSellerDots brihatri-local-breadBakeryDots b-MiniMal-bestSellerDots b-MiniMal-breadBakeryDots flex items-center gap-2">
              {breadBakeryStarts.map((_, index) => (
                <button
                  key={`bread-bakery-dot-${index + 1}`}
                  type="button"
                  onClick={() => goToBreadBakeryPage(index)}
                  className={`brihatri-local-bestSellerDot brihatri-local-breadBakeryDot b-MiniMal-bestSellerDot b-MiniMal-breadBakeryDot h-[10px] w-[10px] rounded-full transition-all ${
                    index === breadBakeryPageIndex ? 'w-[37px] bg-[#1c1d20]' : 'bg-[#c3c3c3]'
                  }`}
                  aria-label={`Go to bread and bakery page ${index + 1}`}
                />
              ))}
            </div>
          ) : (
            <p className="brihatri-local-bestSellerCounter brihatri-local-breadBakeryCounter b-MiniMal-bestSellerCounter b-MiniMal-breadBakeryCounter min-w-[58px] text-center text-[14px] leading-none text-[#2f2f2f]">
              {breadBakeryMobileCounter}
            </p>
          )}

          <button
            type="button"
            onClick={goToNextBreadBakeryPage}
            className="brihatri-local-bestSellerArrow brihatri-local-breadBakeryArrow b-MiniMal-bestSellerArrow b-MiniMal-breadBakeryArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#656565] transition-colors hover:text-[#191d21]"
            aria-label="Next bread and bakery page"
          >
            <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
        </div>
      </section>

      <section className="brihatri-local-organicCtaSection b-MiniMal-organicCtaSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-10 pt-2 md:px-14 md:pb-14 md:pt-5">
        <div className="brihatri-local-organicCtaWrap b-MiniMal-organicCtaWrap flex min-h-[360px] w-full flex-col items-center justify-center rounded-[10px] bg-[#e2ede2] px-6 py-10 text-center md:min-h-[780px] md:rounded-[12px] md:px-10 md:py-12">
          <p className="brihatri-local-organicCtaKicker b-MiniMal-organicCtaKicker text-[14px] font-normal uppercase leading-[1.2] tracking-[0.2px] text-[#2e3433] md:text-[14px]">
            Fresh, Organic Goodness
          </p>

          <h2 className="brihatri-local-organicCtaTitle b-MiniMal-organicCtaTitle mt-4 max-w-[880px] text-[24px] font-normal leading-[1.1] tracking-[-0.2px] text-[#252d2d] md:mt-8 md:text-[50px]">
            Locally <em className="font-normal italic">sourced</em> &amp;{' '}
            <em className="font-normal italic">delivered</em> to your doorstep
          </h2>

          <div className="brihatri-local-organicCtaActions b-MiniMal-organicCtaActions mt-6 flex flex-row items-center justify-center gap-3 md:mt-8 md:gap-4">
            <a
              href="#about-us"
              className="brihatri-local-organicPrimaryCta b-MiniMal-organicPrimaryCta inline-flex h-[40px] min-h-[40px] max-h-[40px] min-w-[138px] items-center justify-center rounded-full bg-[#22292a] px-6 text-[18px] font-medium uppercase text-white no-underline transition-colors hover:bg-[#111516] md:h-[48px] md:min-h-[48px] md:max-h-[48px] md:min-w-[170px] md:text-[20px]"
            >
              About Us
            </a>
            <a
              href="#faq"
              className="brihatri-local-organicSecondaryCta b-MiniMal-organicSecondaryCta inline-flex h-[40px] min-h-[40px] max-h-[40px] min-w-[138px] items-center justify-center rounded-full border border-[#394241] bg-transparent px-6 text-[18px] font-normal uppercase text-[#2d3333] no-underline transition-colors hover:bg-[#d5e4d5] md:h-[48px] md:min-h-[48px] md:max-h-[48px] md:min-w-[126px] md:text-[20px]"
            >
              F.A.Q.
            </a>
          </div>
        </div>
      </section>

      <section className="brihatri-local-newsTickerSection b-MiniMal-newsTickerSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-0 py-8 md:py-10">
        <div className="brihatri-local-newsTickerViewport b-MiniMal-newsTickerViewport overflow-hidden">
          <div className="brihatri-local-newsTickerTrack b-MiniMal-newsTickerTrack flex w-max items-center">
            {Array.from({ length: 2 }).map((_, groupIndex) => (
              <div
                key={`ticker-group-${groupIndex + 1}`}
                className="brihatri-local-newsTickerGroup b-MiniMal-newsTickerGroup flex items-center"
                aria-hidden={groupIndex === 1}
              >
                {Array.from({ length: 3 }).map((__, itemIndex) => (
                  <article
                    key={`ticker-item-${groupIndex + 1}-${itemIndex + 1}`}
                    className="brihatri-local-newsTickerItem b-MiniMal-newsTickerItem mx-5 flex items-center gap-5 md:mx-10 md:gap-8"
                  >
                    <img
                      src="https://local-theme-main.myshopify.com/cdn/shop/files/1_6f9918b1-4fda-420c-bb6a-1836d3286164.jpg?v=1656417589&width=240"
                      alt="Store entrance"
                      loading="lazy"
                      className="brihatri-local-newsTickerImage b-MiniMal-newsTickerImage h-[110px] w-[110px] rounded-full object-cover md:h-[180px] md:w-[180px]"
                    />
                    <h3 className="brihatri-local-newsTickerText b-MiniMal-newsTickerText whitespace-nowrap text-[48px] font-semibold leading-none tracking-[-0.4px] text-[#5d9464] md:text-[60px]">
                      New store in{' '}
                      <span className="italic underline decoration-[3px] underline-offset-[6px]">
                        New York
                      </span>
                    </h3>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="brihatri-local-organicHeroSection b-MiniMal-organicHeroSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-0 pb-0 pt-2 md:pt-4">
        <div className="brihatri-local-organicHeroWrap b-MiniMal-organicHeroWrap relative h-[460px] w-full overflow-hidden bg-[#eef0ef] md:h-[760px]">
          <img
            src="https://local-theme-main.myshopify.com/cdn/shop/files/hero_new_3.jpg?v=1742293476&width=3360"
            alt="Organic food assortment"
            loading="lazy"
            className="brihatri-local-organicHeroBgImage b-MiniMal-organicHeroBgImage absolute inset-0 z-10 h-full w-full object-cover object-center"
          />

          <div className="brihatri-local-organicHeroOverlay b-MiniMal-organicHeroOverlay absolute inset-0 z-20 flex items-center justify-center">
            <div className="brihatri-local-organicHeroContent b-MiniMal-organicHeroContent flex w-full max-w-[780px] flex-col items-center px-5 text-center">
              <p className="brihatri-local-organicHeroKicker b-MiniMal-organicHeroKicker text-[14px] font-normal leading-[1.2] tracking-[0.2px] text-[#4e8558] md:text-[14px]">
                100%
              </p>

              <h2 className="brihatri-local-organicHeroTitle b-MiniMal-organicHeroTitle mt-3 text-[24px] font-normal leading-[1.08] tracking-[-0.2px] text-[#4e8558] md:mt-4 md:text-[64px]">
                Organic Food
              </h2>

              <a
                href="#view-products"
                className="brihatri-local-organicHeroCta b-MiniMal-organicHeroCta mt-5 inline-flex h-[40px] min-h-[40px] max-h-[40px] min-w-[200px] items-center justify-center rounded-full bg-[#4f8658] px-7 text-[18px] font-medium text-white no-underline transition-colors hover:bg-[#3f6e47] md:mt-6 md:h-[68px] md:min-h-[68px] md:max-h-[68px] md:min-w-[286px] md:text-[20px]"
              >
                View products
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="brihatri-local-productDetailSection b-MiniMal-productDetailSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-12 pt-10 md:px-14 md:pb-14 md:pt-12">
        <div className="brihatri-local-productDetailGrid b-MiniMal-productDetailGrid grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-8">
          <div className="brihatri-local-productMediaColumn b-MiniMal-productMediaColumn">
            <div
              className="brihatri-local-productMediaFrame b-MiniMal-productMediaFrame relative h-[420px] overflow-hidden rounded-[10px] border border-[#d4d4d4] bg-[#ffffff] md:h-[720px] md:rounded-[12px]"
              onTouchStart={handleProductImageTouchStart}
              onTouchEnd={handleProductImageTouchEnd}
            >
              {productDetailImages.map((image, index) => (
                <img
                  key={`product-detail-image-${index + 1}`}
                  src={image}
                  alt={`Keto Crunch view ${index + 1}`}
                  className={`brihatri-local-productMediaImage b-MiniMal-productMediaImage absolute inset-0 h-full w-full object-contain p-5 transition-opacity duration-500 ease-out md:p-8 ${
                    index === productImageIndex
                      ? 'z-20 opacity-100'
                      : 'pointer-events-none z-10 opacity-0'
                  }`}
                  loading={index === 0 ? 'eager' : 'lazy'}
                />
              ))}

              <button
                type="button"
                className="brihatri-local-productZoom b-MiniMal-productZoom absolute right-3 top-3 z-30 inline-flex h-8 w-8 items-center justify-center rounded-full text-[#2e2f31] transition-colors hover:bg-[#ebebeb]"
                aria-label="Zoom image"
              >
                <Search className="h-[19px] w-[19px]" strokeWidth={2} />
              </button>
            </div>

            <div className="brihatri-local-productMediaControls b-MiniMal-productMediaControls mt-4 flex items-center justify-center gap-4 text-[14px]">
              <button
                type="button"
                onClick={goToPreviousProductImage}
                className="brihatri-local-productMediaArrow b-MiniMal-productMediaArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#5d5d5d] transition-colors hover:text-[#1d1f22]"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
              </button>

              <div className="brihatri-local-productMediaDots b-MiniMal-productMediaDots flex items-center gap-2">
                {productDetailImages.map((_, index) => (
                  <button
                    key={`product-image-dot-${index + 1}`}
                    type="button"
                    onClick={() => goToProductImage(index)}
                    className={`brihatri-local-productMediaDot b-MiniMal-productMediaDot h-[10px] w-[10px] rounded-full transition-all ${
                      index === productImageIndex ? 'w-[30px] bg-[#1f2227]' : 'bg-[#c2c2c2]'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goToNextProductImage}
                className="brihatri-local-productMediaArrow b-MiniMal-productMediaArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#5d5d5d] transition-colors hover:text-[#1d1f22]"
                aria-label="Next image"
              >
                <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
              </button>
            </div>
          </div>

          <div className="brihatri-local-productInfoColumn b-MiniMal-productInfoColumn">
            <div className="brihatri-local-productPriceRow b-MiniMal-productPriceRow flex items-center gap-3">
              <p className="brihatri-local-productPrice b-MiniMal-productPrice text-[16px] text-[#111722]">$4.99</p>
              <p className="brihatri-local-productOldPrice b-MiniMal-productOldPrice text-[16px] text-[#868686] line-through">
                $6.00
              </p>
            </div>

            <h2 className="brihatri-local-productTitle b-MiniMal-productTitle mt-2 text-[24px] font-normal leading-[1.08] tracking-[-0.2px] text-[#111722] md:text-[56px]">
              Keto Crunch
            </h2>

            <div className="brihatri-local-productRating b-MiniMal-productRating mt-3 flex items-center gap-2">
              <div className="brihatri-local-productStars b-MiniMal-productStars flex items-center gap-[3px] text-[#1c1c1c]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`product-rating-${index + 1}`}
                    className="h-[14px] w-[14px]"
                    fill={index < 4 ? 'currentColor' : 'none'}
                    strokeWidth={1.8}
                  />
                ))}
              </div>
              <span className="brihatri-local-productReviewCount b-MiniMal-productReviewCount text-[14px] text-[#25374a]">
                (9)
              </span>
            </div>

            <p className="brihatri-local-productShortDesc b-MiniMal-productShortDesc mt-4 text-[18px] text-[#1e232a]">
              Keto-friendly combination
            </p>

            <p className="brihatri-local-productLongDesc b-MiniMal-productLongDesc mt-4 text-[18px] leading-[1.35] text-[#222932] md:max-w-[92%]">
              Keto-friendly combination of pecans, almonds, walnuts, pepitas and no
              sugar added dark chocolate. This protein-rich trail mix comes in a 10 oz
              resealable pouch, ensuring maximum freshness.
            </p>

            <h3 className="brihatri-local-productSubTitle b-MiniMal-productSubTitle mt-6 text-[18px] font-normal text-[#1c2128]">
              Allergens
            </h3>

            <div className="brihatri-local-productAllergens b-MiniMal-productAllergens mt-3 grid grid-cols-2 gap-x-5 gap-y-3 md:grid-cols-4 md:gap-x-8">
              <div className="brihatri-local-productAllergenItem b-MiniMal-productAllergenItem flex items-center gap-2 text-[18px] text-[#1f252d]">
                <Leaf className="h-[16px] w-[16px]" strokeWidth={1.8} />
                <span>Corn</span>
              </div>
              <div className="brihatri-local-productAllergenItem b-MiniMal-productAllergenItem flex items-center gap-2 text-[18px] text-[#1f252d]">
                <Wheat className="h-[16px] w-[16px]" strokeWidth={1.8} />
                <span>Gluten</span>
              </div>
              <div className="brihatri-local-productAllergenItem b-MiniMal-productAllergenItem flex items-center gap-2 text-[18px] text-[#1f252d]">
                <Circle className="h-[16px] w-[16px]" strokeWidth={1.8} />
                <span>Nuts</span>
              </div>
              <div className="brihatri-local-productAllergenItem b-MiniMal-productAllergenItem flex items-center gap-2 text-[18px] text-[#1f252d]">
                <Droplets className="h-[16px] w-[16px]" strokeWidth={1.8} />
                <span>Peanuts</span>
              </div>
            </div>

            <div className="brihatri-local-nutriCard b-MiniMal-nutriCard mt-6 rounded-[10px] border border-[#d1d1d1] bg-[#f5f5f5]">
              <div className="brihatri-local-nutriHeader b-MiniMal-nutriHeader flex items-center gap-2 border-b border-[#d7d7d7] px-4 py-3">
                <p className="text-[18px] text-[#1e2329]">Nutriscore</p>
                <div className="brihatri-local-nutriInfoWrap b-MiniMal-nutriInfoWrap relative">
                  <button
                    type="button"
                    className="brihatri-local-nutriInfoButton b-MiniMal-nutriInfoButton peer inline-flex h-[28px] w-[28px] items-center justify-center rounded-full border border-[#b6b8bc] bg-[#f5f5f5] text-[#3d3f44]"
                    aria-label="Nutriscore information"
                  >
                    <Info className="h-[15px] w-[15px]" strokeWidth={1.9} />
                  </button>
                  <div className="brihatri-local-nutriTooltip b-MiniMal-nutriTooltip pointer-events-none absolute left-1/2 top-[-14px] z-30 w-[280px] -translate-x-1/2 -translate-y-full rounded-[8px] bg-[#1f1f21] px-4 py-3 text-[14px] leading-[1.25] text-white opacity-0 transition-opacity duration-200 peer-hover:opacity-100 peer-focus-visible:opacity-100">
                    Make healthier food choices at a glance. It assigns a score to
                    food and beverages based on their nutritional quality, represented
                    by a color-coded scale from A (green) to E (red).
                    <span className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#1f1f21]" />
                  </div>
                </div>
              </div>
              <div className="px-4 pb-4 pt-4">
                <div className="relative">
                  <div className="h-[6px] w-full overflow-hidden rounded-full bg-gradient-to-r from-[#19943f] via-[#dcd63f] to-[#df2f15]" />
                  <span className="absolute left-1/2 top-[-14px] h-0 w-0 -translate-x-1/2 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#222327]" />
                </div>
                <div className="mt-2 flex justify-between text-[16px] text-[#989898]">
                  <span>A</span>
                  <span>B</span>
                  <span className="text-[18px] font-medium leading-none text-[#1e2430]">C</span>
                  <span>D</span>
                  <span>E</span>
                </div>
              </div>
            </div>

            <h3 className="brihatri-local-productSubTitle b-MiniMal-productSubTitle mt-6 text-[18px] font-normal text-[#1c2128]">
              Style
            </h3>

            <div className="brihatri-local-productStyleOptions b-MiniMal-productStyleOptions mt-3 flex items-center gap-2">
              {['Student Mix', 'Smart Mix'].map((styleName) => (
                <button
                  key={styleName}
                  type="button"
                  onClick={() => setProductStyle(styleName)}
                  className={`brihatri-local-styleButton b-MiniMal-styleButton inline-flex h-[40px] min-h-[40px] max-h-[40px] items-center justify-center rounded-full px-5 text-[18px] transition-colors ${
                    productStyle === styleName
                      ? 'border border-[#2a2f37] bg-white text-[#111722]'
                      : 'border border-[#c9c9c9] bg-[#f8f8f8] text-[#232a33]'
                  }`}
                >
                  {styleName}
                </button>
              ))}
            </div>

            <div className="brihatri-local-productFinalPriceBlock b-MiniMal-productFinalPriceBlock mt-6 border-t border-[#dfdfdf] pt-5">
              <div className="flex items-end gap-3">
                <p className="text-[38px] leading-none text-[#111722] md:text-[56px]">$4.99</p>
                <p className="text-[16px] text-[#868686] line-through">$6.00</p>
              </div>
              <p className="mt-1 text-[14px] text-[#6e7480]">you save $1.01</p>
            </div>

            <div className="brihatri-local-productActionWrap b-MiniMal-productActionWrap mt-5 md:flex md:items-center md:gap-3">
              <div className="brihatri-local-productActionRow b-MiniMal-productActionRow flex items-center gap-2 md:gap-3">
              <button
                type="button"
                onClick={decreaseQty}
                className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#333842] text-[#20252b]"
                aria-label="Decrease quantity"
              >
                <Minus className="h-[20px] w-[20px]" strokeWidth={2.2} />
              </button>
              <p className="min-w-[32px] text-center text-[18px] text-[#1d232b]">{productQty}</p>
              <button
                type="button"
                onClick={increaseQty}
                className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-full border border-[#333842] text-[#20252b]"
                aria-label="Increase quantity"
              >
                <Plus className="h-[20px] w-[20px]" strokeWidth={2.2} />
              </button>

              <button
                type="button"
                className="ml-1 inline-flex h-[52px] min-w-[168px] items-center justify-center rounded-full bg-[#191b20] px-8 text-[18px] font-medium text-white md:min-w-[272px] md:text-[20px]"
              >
                Add to cart
              </button>
              </div>

              <button
                type="button"
                className="brihatri-local-productBuyNow b-MiniMal-productBuyNow mt-3 inline-flex h-[52px] w-full items-center justify-center rounded-full border border-[#2c3238] bg-white px-8 text-[18px] text-[#12171d] md:mt-0 md:w-auto md:min-w-[180px] md:text-[20px]"
              >
                Buy it now
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="brihatri-local-promiseSection b-MiniMal-promiseSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-12 pt-2 md:px-14 md:pb-14 md:pt-4">
        <h2 className="brihatri-local-promiseTitle b-MiniMal-promiseTitle text-[24px] font-normal leading-[1.15] tracking-[-0.2px] text-[#181d23] md:text-[40px]">
          We promise!
        </h2>

        <div className="brihatri-local-promiseGrid b-MiniMal-promiseGrid mt-4 grid grid-cols-1 gap-4 md:mt-6 md:grid-cols-2 md:gap-6">
          <article className="brihatri-local-promiseCard b-MiniMal-promiseCard relative h-[340px] min-h-[340px] max-h-[340px] overflow-hidden rounded-[10px] bg-[#f2f1ee] md:h-[440px] md:min-h-[440px] md:max-h-[440px] md:rounded-[12px]">
            <img
              src="https://local-theme-main.myshopify.com/cdn/shop/files/promo1_bfcfe85c-f825-4e69-b87c-bf6fc8b32875.jpg?v=1737709415&width=1080"
              alt="Fresh bakery items"
              loading="lazy"
              className="brihatri-local-promiseCardBg b-MiniMal-promiseCardBg absolute inset-0 z-10 h-full w-full object-cover object-center"
            />

            <div className="brihatri-local-promiseCardContent b-MiniMal-promiseCardContent absolute inset-x-0 bottom-0 z-20 px-6 pb-6 pt-16 md:px-8 md:pb-8">
              <p className="brihatri-local-promiseKicker b-MiniMal-promiseKicker text-[18px] leading-[1.2] text-[#34383d]">
                Every day
              </p>
              <h3 className="brihatri-local-promiseCardTitle b-MiniMal-promiseCardTitle mt-2 text-[24px] font-normal leading-[1.1] tracking-[-0.2px] text-[#161c22] md:text-[40px]">
                Fresh backery
              </h3>
              <a
                href="#fresh-bakery"
                className="brihatri-local-promiseCta b-MiniMal-promiseCta mt-5 inline-flex h-[40px] min-h-[40px] max-h-[40px] min-w-[130px] items-center justify-center rounded-full bg-[#1a1c21] px-6 text-[18px] font-medium text-white no-underline transition-colors hover:bg-[#111316] md:mt-6 md:h-[52px] md:min-h-[52px] md:max-h-[52px] md:min-w-[172px] md:text-[20px]"
              >
                Grab It!
              </a>
            </div>
          </article>

          <article className="brihatri-local-promiseCard b-MiniMal-promiseCard relative h-[340px] min-h-[340px] max-h-[340px] overflow-hidden rounded-[10px] bg-[#eaf2ea] md:h-[440px] md:min-h-[440px] md:max-h-[440px] md:rounded-[12px]">
            <img
              src="https://local-theme-main.myshopify.com/cdn/shop/files/promo2_ca26926a-c131-44e9-8dd2-8f4d11b485cf.jpg?v=1737709415&width=1080"
              alt="Fresh fruits and vegetables"
              loading="lazy"
              className="brihatri-local-promiseCardBg b-MiniMal-promiseCardBg absolute inset-0 z-10 h-full w-full object-cover object-center"
            />

            <div className="brihatri-local-promiseCardContent b-MiniMal-promiseCardContent absolute inset-x-0 bottom-0 z-20 px-6 pb-6 pt-16 md:px-8 md:pb-8">
              <p className="brihatri-local-promiseKicker b-MiniMal-promiseKicker text-[18px] leading-[1.2] text-[#34383d]">
                Hand-picked
              </p>
              <h3 className="brihatri-local-promiseCardTitle b-MiniMal-promiseCardTitle mt-2 text-[24px] font-normal leading-[1.1] tracking-[-0.2px] text-[#161c22] md:text-[40px]">
                Fruits &amp; vegetables
              </h3>
              <a
                href="#fruits-vegetables"
                className="brihatri-local-promiseCta b-MiniMal-promiseCta mt-5 inline-flex h-[40px] min-h-[40px] max-h-[40px] min-w-[150px] items-center justify-center rounded-full bg-[#1a1c21] px-6 text-[18px] font-medium text-white no-underline transition-colors hover:bg-[#111316] md:mt-6 md:h-[52px] md:min-h-[52px] md:max-h-[52px] md:min-w-[172px] md:text-[20px]"
              >
                Shop now
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="brihatri-local-lifestyleSection b-MiniMal-lifestyleSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-10 pt-9 md:px-14 md:pb-12 md:pt-10">
        <h2 className="brihatri-local-lifestyleTitle b-MiniMal-lifestyleTitle text-[24px] font-normal leading-[1.15] tracking-[-0.2px] text-[#191d22] md:text-[40px]">
          Shop By Lifestyle
        </h2>

        <div className="brihatri-local-lifestyleDesktopGrid b-MiniMal-lifestyleDesktopGrid mt-8 hidden grid-cols-5 gap-7 md:grid">
          {lifestyleItems.map((item) => (
            <article
              key={`lifestyle-desktop-${item.id}`}
              className="brihatri-local-lifestyleItem b-MiniMal-lifestyleItem flex flex-col items-center text-center"
            >
              <div
                className="brihatri-local-lifestyleIconCircle b-MiniMal-lifestyleIconCircle flex h-[150px] w-[150px] items-center justify-center rounded-full"
                style={{ backgroundColor: item.bgColor }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  loading="lazy"
                  className="brihatri-local-lifestyleIcon b-MiniMal-lifestyleIcon h-16 w-16 object-contain"
                />
              </div>
              <h3 className="brihatri-local-lifestyleItemTitle b-MiniMal-lifestyleItemTitle mt-5 text-[18px] font-normal text-[#23282e]">
                {item.title}
              </h3>
              <p className="brihatri-local-lifestyleItemDesc b-MiniMal-lifestyleItemDesc mt-2 max-w-[245px] text-[18px] leading-[1.28] text-[#757575]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div
          className="brihatri-local-lifestyleMobileViewport b-MiniMal-lifestyleMobileViewport mt-7 overflow-hidden md:hidden"
          onTouchStart={handleLifestyleTouchStart}
          onTouchEnd={handleLifestyleTouchEnd}
        >
          <div
            className="brihatri-local-lifestyleMobileTrack b-MiniMal-lifestyleMobileTrack flex gap-4 transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `translate3d(-${lifestyleTranslateX}px, 0, 0)` }}
          >
            {lifestyleItems.map((item) => (
              <article
                key={`lifestyle-mobile-${item.id}`}
                className="brihatri-local-lifestyleItem b-MiniMal-lifestyleItem flex w-[168px] min-w-[168px] max-w-[168px] flex-col items-center text-center"
              >
                <div
                  className="brihatri-local-lifestyleIconCircle b-MiniMal-lifestyleIconCircle flex h-[126px] w-[126px] items-center justify-center rounded-full"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <img
                    src={item.icon}
                    alt={item.title}
                    loading="lazy"
                    className="brihatri-local-lifestyleIcon b-MiniMal-lifestyleIcon h-[52px] w-[52px] object-contain"
                  />
                </div>
                <h3 className="brihatri-local-lifestyleItemTitle b-MiniMal-lifestyleItemTitle mt-4 text-[18px] font-normal text-[#23282e]">
                  {item.title}
                </h3>
                <p className="brihatri-local-lifestyleItemDesc b-MiniMal-lifestyleItemDesc mt-2 text-[18px] leading-[1.28] text-[#757575]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="brihatri-local-lifestyleMobileControls b-MiniMal-lifestyleMobileControls mt-6 flex items-center justify-center gap-5 text-[14px] md:hidden">
          <button
            type="button"
            onClick={goToPreviousLifestylePage}
            className="brihatri-local-lifestyleArrow b-MiniMal-lifestyleArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6a6a6a] transition-colors hover:text-[#1f1f23]"
            aria-label="Previous lifestyle page"
          >
            <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>

          <p className="brihatri-local-lifestyleCounter b-MiniMal-lifestyleCounter min-w-[58px] text-center text-[14px] leading-none text-[#2f2f2f]">
            {lifestyleMobileCounter}
          </p>

          <button
            type="button"
            onClick={goToNextLifestylePage}
            className="brihatri-local-lifestyleArrow b-MiniMal-lifestyleArrow inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6a6a6a] transition-colors hover:text-[#1f1f23]"
            aria-label="Next lifestyle page"
          >
            <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
          </button>
        </div>
      </section>

      <section className="brihatri-local-hotMealsSection b-MiniMal-hotMealsSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-10 pt-8 md:px-14 md:pb-12 md:pt-8">
        <h2 className="brihatri-local-hotMealsTitle b-MiniMal-hotMealsTitle text-[24px] font-normal leading-[1.15] tracking-[-0.2px] text-[#161d24] md:text-[40px]">
          Shop Hot Meals
        </h2>

        <div className="brihatri-local-hotMealsWrap b-MiniMal-hotMealsWrap mt-4 rounded-[10px] bg-[#f2f2f2] p-0 md:mt-6 md:rounded-[12px]">
          <div className="brihatri-local-hotMealsGrid b-MiniMal-hotMealsGrid grid grid-cols-1 gap-4 p-0 md:grid-cols-[1fr_688px] md:gap-6">
            <div className="brihatri-local-hotMealsVisual b-MiniMal-hotMealsVisual overflow-hidden rounded-[10px] md:rounded-[12px]">
              <img
                src="https://local-theme-main.myshopify.com/cdn/shop/files/shop_the_look.jpg?v=1749721058&width=1080"
                alt="Shop hot meals assortment"
                loading="lazy"
                className="h-[380px] w-full object-cover object-center md:h-[680px]"
              />
            </div>

            <div className="brihatri-local-hotMealsSliderArea b-MiniMal-hotMealsSliderArea px-4 pb-4 md:px-0 md:pb-0 md:pr-6 md:pt-6">
              <div
                className="brihatri-local-hotMealsViewport b-MiniMal-hotMealsViewport overflow-hidden"
                onTouchStart={handleHotMealsTouchStart}
                onTouchEnd={handleHotMealsTouchEnd}
              >
                <div
                  className={`brihatri-local-hotMealsTrack b-MiniMal-hotMealsTrack flex transition-transform duration-500 ease-out will-change-transform ${
                    isDesktop ? 'gap-4' : 'gap-0'
                  }`}
                  style={
                    isDesktop
                      ? { transform: `translate3d(-${hotMealsTranslateX}px, 0, 0)` }
                      : { transform: `translate3d(-${hotMealsTranslateX}%, 0, 0)` }
                  }
                >
                  {hotMealsItems.map((item) => (
                    <article
                      key={`hot-meal-${item.id}`}
                      className={`brihatri-local-hotMealsCard b-MiniMal-hotMealsCard rounded-[10px] border border-[#d8d8d8] bg-[#ffffff] p-4 md:rounded-[12px] md:p-6 ${
                        isDesktop
                          ? 'h-[600px] min-h-[600px] max-h-[600px] w-[336px] min-w-[336px] max-w-[336px]'
                          : 'h-auto min-h-[540px] w-full min-w-full max-w-full'
                      }`}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        className="h-[320px] w-full object-contain md:h-[360px]"
                      />

                      <p className="mt-3 text-[16px] text-[#1f242b]">{item.price}</p>
                      <h3 className="mt-1 text-[24px] font-normal leading-[1.1] tracking-[-0.15px] text-[#161d24] md:text-[40px]">
                        {item.title}
                      </h3>

                      <div className="mt-2 flex items-center gap-[3px] text-[#1d1d1d]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star
                            key={`hot-meal-rating-${item.id}-${index + 1}`}
                            className="h-[14px] w-[14px]"
                            fill={index < item.rating ? 'currentColor' : 'none'}
                            strokeWidth={1.8}
                          />
                        ))}
                      </div>

                      <button
                        type="button"
                        className="mt-4 inline-flex h-[44px] w-full items-center justify-center rounded-full border border-[#2e333a] bg-transparent text-[18px] text-[#1b2128] transition-colors hover:bg-[#14181f] hover:text-white md:h-[52px] md:text-[20px]"
                      >
                        Buy now
                      </button>
                    </article>
                  ))}
                </div>
              </div>

              <div className="brihatri-local-hotMealsControls b-MiniMal-hotMealsControls mt-5 flex items-center justify-center gap-4 text-[14px]">
                <button
                  type="button"
                  onClick={goToPreviousHotMealsPage}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6a6a6a] transition-colors hover:text-[#1f1f23]"
                  aria-label="Previous hot meals page"
                >
                  <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
                </button>

                {isDesktop ? (
                  <div className="flex items-center gap-2">
                    {hotMealsStarts.map((_, index) => (
                      <button
                        key={`hot-meal-dot-${index + 1}`}
                        type="button"
                        onClick={() => goToHotMealsPage(index)}
                        className={`h-[10px] w-[10px] rounded-full transition-all ${
                          index === hotMealsPageIndex ? 'w-[30px] bg-[#1e2126]' : 'bg-[#bbbbbb]'
                        }`}
                        aria-label={`Go to hot meals page ${index + 1}`}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="min-w-[58px] text-center text-[14px] leading-none text-[#2f2f2f]">
                    {hotMealsMobileCounter}
                  </p>
                )}

                <button
                  type="button"
                  onClick={goToNextHotMealsPage}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6a6a6a] transition-colors hover:text-[#1f1f23]"
                  aria-label="Next hot meals page"
                >
                  <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="brihatri-local-recipesSection b-MiniMal-recipesSection mx-auto h-[360px] w-full max-w-[1920px] bg-[#e1e0d7] px-4 py-0 md:h-[680px] md:px-14">
        <div className="brihatri-local-recipesCard b-MiniMal-recipesCard h-full overflow-hidden rounded-[10px] bg-[#e1e0d7] md:rounded-[12px]">
          <img
            src="https://local-theme-main.myshopify.com/cdn/shop/files/recipes_150921b8-28c7-49f5-be74-c34ee80d63cb.jpg?v=1655131846&width=2100"
            alt="Delicious recipes ingredients"
            loading="lazy"
            className="h-[170px] min-h-[170px] max-h-[170px] w-full object-contain md:h-[385px] md:min-h-[385px] md:max-h-[385px]"
          />

          <div className="brihatri-local-recipesContent b-MiniMal-recipesContent flex h-[190px] flex-col items-center justify-center px-4 py-4 text-center md:h-[295px] md:px-8 md:py-6">
            <h2 className="brihatri-local-recipesTitle b-MiniMal-recipesTitle text-[24px] font-normal leading-[1.12] tracking-[-0.2px] text-[#171d24] md:text-[56px]">
              Delicious Recipes
            </h2>

            <a
              href="#explore-recipes"
              className="brihatri-local-recipesCta b-MiniMal-recipesCta mt-5 inline-flex h-[48px] min-h-[48px] max-h-[48px] min-w-[170px] items-center justify-center rounded-full border border-[#35393f] bg-transparent px-8 text-[18px] font-normal text-[#181e25] no-underline transition-colors hover:bg-[#161b22] hover:text-white md:mt-6 md:h-[68px] md:min-h-[68px] md:max-h-[68px] md:min-w-[246px] md:text-[20px]"
            >
              Explore All
            </a>
          </div>
        </div>
      </section>

      <section className="brihatri-local-kitchenDealsSection b-MiniMal-kitchenDealsSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-12 pt-8 md:px-14 md:pb-14 md:pt-10">
        <div className="brihatri-local-kitchenDealsHeader b-MiniMal-kitchenDealsHeader flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="brihatri-local-kitchenDealsTitle b-MiniMal-kitchenDealsTitle text-[24px] font-normal leading-[1.15] tracking-[-0.2px] text-[#161d24] md:text-[40px]">
            Kitchenware Deals!
          </h2>
          <a
            href="#kitchenware-products"
            className="brihatri-local-kitchenDealsLink b-MiniMal-kitchenDealsLink inline-flex w-fit border-b border-[#2f2f2f] pb-[2px] text-[14px] font-normal text-[#1f1f23] no-underline md:text-[14px]"
          >
            View all products
          </a>
        </div>

        <div className="brihatri-local-kitchenDealsGrid b-MiniMal-kitchenDealsGrid mt-6 grid grid-cols-2 gap-4 md:mt-7 md:grid-cols-4 md:gap-6">
          {[
            {
              id: 1,
              image:
                'https://local-theme-main.myshopify.com/cdn/shop/products/25-a.jpg?v=1655127670&width=480',
              price: '$29.00',
              oldPrice: '$35.00',
              title: 'Cutting Board',
              badge: '-17%',
              rating: 5,
            },
            {
              id: 2,
              image:
                'https://local-theme-main.myshopify.com/cdn/shop/files/1_63e13c70-edb8-4362-883c-5c34cd39f808.jpg?v=1737876511&width=480',
              price: '$80.00',
              oldPrice: '$145.00',
              title: 'PTFE Trying Pan',
              badge: '-45%',
              rating: 5,
            },
            {
              id: 3,
              image:
                'https://local-theme-main.myshopify.com/cdn/shop/files/2_08544a3c-b961-4ba1-844e-b6c8f35350f2.jpg?v=1737876536&width=480',
              price: '$15.00',
              oldPrice: '$30.00',
              title: 'Salt & Pepper Shakers',
              badge: '-50%',
              rating: 5,
            },
            {
              id: 4,
              image:
                'https://local-theme-main.myshopify.com/cdn/shop/products/24-a.jpg?v=1655126304&width=480',
              price: '$69.00',
              oldPrice: '$100.00',
              title: 'Kitchen Knifes',
              badge: '-31%',
              rating: 4,
            },
            {
              id: 5,
              image:
                'https://local-theme-main.myshopify.com/cdn/shop/products/22-a.jpg?v=1655123364&width=480',
              price: '$95.50',
              oldPrice: '',
              title: 'Teapot',
              badge: '',
              rating: 5,
            },
            {
              id: 6,
              image:
                'https://local-theme-main.myshopify.com/cdn/shop/files/3_83a9e94c-095c-4c6b-8df2-62c2c40a67bf.jpg?v=1738925238&width=480',
              price: 'On Sale from $20.00',
              oldPrice: '',
              title: 'Kitchen Tools',
              badge: '-25%',
              rating: 4,
            },
            {
              id: 7,
              image:
                'https://local-theme-main.myshopify.com/cdn/shop/products/27-a.jpg?v=1655134826&width=480',
              price: '$15.00',
              oldPrice: '$25.00',
              title: 'Wooden Bowls',
              badge: '-40%',
              rating: 5,
            },
            {
              id: 8,
              image:
                'https://local-theme-main.myshopify.com/cdn/shop/products/28-a.jpg?v=1655204207&width=480',
              price: '$22.00',
              oldPrice: '$30.00',
              title: 'Potholder',
              badge: '-27%',
              rating: 5,
            },
          ].map((item) => (
            <article
              key={`kitchen-deal-${item.id}`}
              className="brihatri-local-kitchenDealsCard b-MiniMal-kitchenDealsCard relative rounded-[10px] border border-[#dedede] bg-[#ffffff] p-4 md:rounded-[12px] md:p-5"
            >
              {item.badge ? (
                <span className="brihatri-local-kitchenDealsBadge b-MiniMal-kitchenDealsBadge absolute right-3 top-3 rounded-[4px] bg-[#d74b4b] px-[10px] py-[3px] text-[12px] text-white">
                  {item.badge}
                </span>
              ) : null}

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="h-[180px] w-full object-contain md:h-[300px]"
              />

              <div className="mt-3 flex items-center gap-2">
                <p className="text-[16px] text-[#131922]">{item.price}</p>
                {item.oldPrice ? (
                  <p className="text-[16px] text-[#8b8b8b] line-through">{item.oldPrice}</p>
                ) : null}
              </div>

              <h3 className="mt-2 text-[16px] font-normal leading-[1.1] tracking-[-0.15px] text-[#161d24] md:text-[24px]">
                {item.title}
              </h3>

              <div className="mt-2 flex items-center gap-[3px] text-[#1d1d1d]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={`kitchen-rating-${item.id}-${index + 1}`}
                    className="h-[14px] w-[14px]"
                    fill={index < item.rating ? 'currentColor' : 'none'}
                    strokeWidth={1.8}
                  />
                ))}
              </div>

              <button
                type="button"
                className="mt-4 inline-flex h-[44px] w-full items-center justify-center rounded-full border border-[#2e333a] bg-transparent text-[18px] text-[#1b2128] transition-colors hover:bg-[#14181f] hover:text-white md:h-[52px] md:text-[20px]"
              >
                Buy now
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="brihatri-local-testimonialSection b-MiniMal-testimonialSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-10 pt-6 md:px-14 md:pb-14 md:pt-10">
        <div
          className="brihatri-local-testimonialCard b-MiniMal-testimonialCard relative overflow-hidden rounded-[10px] border border-[#d8d8d8] bg-[#f7f7f7] px-5 py-10 md:rounded-[12px] md:px-16 md:py-16"
          onTouchStart={handleTestimonialTouchStart}
          onTouchEnd={handleTestimonialTouchEnd}
        >
          {testimonialItems.map((item, index) => (
            <article
              key={`testimonial-${item.id}`}
              className={`brihatri-local-testimonialSlide b-MiniMal-testimonialSlide transition-all duration-500 ease-out ${
                index === testimonialIndex
                  ? 'relative z-20 translate-x-0 opacity-100'
                  : 'pointer-events-none absolute inset-0 z-10 translate-x-2 opacity-0'
              }`}
            >
              <div className="mx-auto flex w-full max-w-[920px] flex-col items-center text-center">
                <div className="flex items-center gap-4 md:gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="h-[72px] w-[72px] rounded-full object-cover md:h-[84px] md:w-[84px]"
                  />
                  <div className="text-left">
                    <h3 className="text-[18px] font-normal leading-[1.1] tracking-[-0.1px] text-[#141a22] md:text-[18px]">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-[14px] leading-[1.2] text-[#1d2430] md:text-[14px] md:leading-[1.2]">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="brihatri-local-testimonialQuote b-MiniMal-testimonialQuote mt-9 max-w-[900px] text-[24px] italic leading-[1.25] tracking-[-0.1px] text-[#121822] md:mt-12 md:text-[24px] md:leading-[1.25]">
                  {item.quote}
                </p>
              </div>
            </article>
          ))}

          <div className="mt-8 flex items-center justify-center gap-4 text-[14px] md:mt-9">
            <button
              type="button"
              onClick={goToPreviousTestimonial}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6a6a6a] transition-colors hover:text-[#1f1f23]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-[18px] w-[18px]" strokeWidth={2} />
            </button>

            {isDesktop ? (
              <div className="flex items-center gap-2">
                {testimonialItems.map((item, index) => (
                  <button
                    key={`testimonial-dot-${item.id}`}
                    type="button"
                    onClick={() => goToTestimonial(index)}
                    className={`h-[10px] w-[10px] rounded-full transition-all ${
                      index === testimonialIndex ? 'w-[30px] bg-[#1e2126]' : 'bg-[#bbbbbb]'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            ) : null}

            <button
              type="button"
              onClick={goToNextTestimonial}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6a6a6a] transition-colors hover:text-[#1f1f23]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-[18px] w-[18px]" strokeWidth={2} />
            </button>
          </div>
        </div>
      </section>

      <section className="brihatri-local-latestArticlesSection b-MiniMal-latestArticlesSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-12 pt-8 md:px-14 md:pb-14 md:pt-10">
        <div className="brihatri-local-latestArticlesHeader b-MiniMal-latestArticlesHeader flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <h2 className="brihatri-local-latestArticlesTitle b-MiniMal-latestArticlesTitle text-[24px] font-normal leading-[1.14] tracking-[-0.2px] text-[#161d24] md:text-[40px]">
            Latest Articles
          </h2>
          <a
            href="#visit-blog"
            className="brihatri-local-latestArticlesLink b-MiniMal-latestArticlesLink inline-flex w-fit border-b border-[#2e2e2e] pb-[2px] text-[14px] font-normal leading-none text-[#1e232b] no-underline md:text-[14px]"
          >
            Visit the blog
          </a>
        </div>

        <div className="brihatri-local-latestArticlesGrid b-MiniMal-latestArticlesGrid mt-6 grid grid-cols-1 gap-7 md:mt-8 md:grid-cols-3 md:gap-6">
          {latestArticleItems.map((article) => (
            <article
              key={`latest-article-${article.id}`}
              className="brihatri-local-latestArticlesCard b-MiniMal-latestArticlesCard"
            >
              <a
                href={article.link}
                className="brihatri-local-latestArticlesImageWrap b-MiniMal-latestArticlesImageWrap block overflow-hidden rounded-[10px] no-underline md:rounded-[12px]"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  loading="lazy"
                  className="brihatri-local-latestArticlesImage b-MiniMal-latestArticlesImage h-[300px] w-full object-cover object-center md:h-[460px]"
                />
              </a>

              <p className="brihatri-local-latestArticlesDate b-MiniMal-latestArticlesDate mt-5 text-[14px] font-normal leading-[1.2] text-[#8f8f8f] md:mt-6 md:text-[14px]">
                {article.date}
              </p>

              <a
                href={article.link}
                className="brihatri-local-latestArticlesCardTitle b-MiniMal-latestArticlesCardTitle mt-3 block text-[16px] font-normal leading-[1.28] tracking-[-0.1px] text-[#131a22] no-underline md:text-[24px] md:leading-[1.2]"
              >
                {article.title}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="brihatri-local-upcomingEventsSection b-MiniMal-upcomingEventsSection mx-auto w-full max-w-[1920px] bg-[#ffffff] px-4 pb-10 pt-8 md:px-14 md:pb-14 md:pt-10">
        <h2 className="brihatri-local-upcomingEventsTitle b-MiniMal-upcomingEventsTitle text-[24px] font-normal leading-[1.15] tracking-[-0.2px] text-[#161d24] md:text-[40px]">
          Upcoming Events
        </h2>

        <div className="brihatri-local-upcomingEventsAccordion b-MiniMal-upcomingEventsAccordion mt-6 overflow-hidden rounded-[10px] border border-[#d7d7d7] bg-[#f7f7f7] md:mt-8 md:rounded-[12px]">
          {upcomingEventItems.map((event, index) => {
            const isOpen = openEventId === event.id

            return (
              <article
                key={`upcoming-event-${event.id}`}
                className={`brihatri-local-upcomingEventItem b-MiniMal-upcomingEventItem ${index !== 0 ? 'border-t border-[#d0d0d0]' : ''}`}
              >
                <div className="brihatri-local-upcomingEventHeader b-MiniMal-upcomingEventHeader flex flex-col gap-4 px-4 py-5 md:flex-row md:items-center md:justify-between md:px-6 md:py-5">
                  <button
                    type="button"
                    onClick={() => toggleEvent(event.id)}
                    aria-expanded={isOpen}
                    aria-controls={`brihatri-local-event-content-${event.id}`}
                    className="brihatri-local-upcomingEventToggle b-MiniMal-upcomingEventToggle flex flex-1 items-start gap-3 text-left"
                  >
                    <span className="mt-[2px] inline-flex h-6 w-6 items-center justify-center text-[#1a1f27]">
                      {isOpen ? (
                        <Minus className="h-[22px] w-[22px]" strokeWidth={2.2} />
                      ) : (
                        <Plus className="h-[22px] w-[22px]" strokeWidth={2.2} />
                      )}
                    </span>

                    <span className="block">
                      <span className="block text-[16px] font-normal leading-[1.15] tracking-[-0.1px] text-[#151c24] md:text-[24px]">
                        {event.title}
                      </span>
                      <span className="mt-2 inline-flex items-center gap-2 text-[14px] leading-[1.25] text-[#1f2630] md:mt-[10px] md:text-[14px]">
                        <MapPin className="h-[18px] w-[18px]" strokeWidth={1.8} />
                        <span>
                          {event.location} {event.schedule}
                        </span>
                      </span>
                    </span>
                  </button>

                  <a
                    href="#register-event"
                    className="brihatri-local-upcomingEventCta b-MiniMal-upcomingEventCta inline-flex h-[44px] min-h-[44px] max-h-[44px] min-w-[134px] items-center justify-center rounded-full bg-[#17191f] px-7 text-[18px] font-semibold text-white no-underline transition-colors hover:bg-[#252a33] md:h-[60px] md:min-h-[60px] md:max-h-[60px] md:min-w-[192px] md:px-10 md:text-[20px]"
                  >
                    Register
                  </a>
                </div>

                <div
                  id={`brihatri-local-event-content-${event.id}`}
                  className={`brihatri-local-upcomingEventContent b-MiniMal-upcomingEventContent overflow-hidden border-t transition-all duration-300 ease-out ${
                    isOpen
                      ? 'max-h-[760px] border-[#d0d0d0] opacity-100'
                      : 'max-h-0 border-transparent opacity-0'
                  }`}
                  aria-hidden={!isOpen}
                >
                  <div className="px-10 pb-6 pt-5 md:px-14 md:pb-8 md:pt-7">
                    <div className="space-y-4 md:space-y-5">
                      {event.details.map((line, detailIndex) => (
                        <p
                          key={`event-detail-${event.id}-${detailIndex + 1}`}
                          className="text-[16px] font-normal leading-[1.45] text-[#1a2029] md:text-[16px]"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </section>

    </main>
  )
}

export default HomePage
