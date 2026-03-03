import { useEffect, useMemo, useState } from 'react'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import CategoryPage from './pages/CategoryPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import OrderConfirmationPage from './pages/OrderConfirmationPage'
import OrderHistoryPage from './pages/OrderHistoryPage'
import OrderDetailsPage from './pages/OrderDetailsPage'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

const CART_STORAGE_KEY = 'brihatri-local-cart'

const normalizePathname = (pathnameRaw) =>
  pathnameRaw.length > 1 && pathnameRaw.endsWith('/')
    ? pathnameRaw.slice(0, -1)
    : pathnameRaw

const parseInitialCart = () => {
  if (typeof window === 'undefined') {
    return []
  }
  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY)
    if (!stored) {
      return []
    }
    const parsed = JSON.parse(stored)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function App() {
  const [pathname, setPathname] = useState(() => {
    const pathnameRaw = typeof window !== 'undefined' ? window.location.pathname : '/'
    return normalizePathname(pathnameRaw)
  })
  const [cartItems, setCartItems] = useState(parseInitialCart)

  const navigate = (targetPath) => {
    if (typeof window === 'undefined') {
      return
    }
    const normalizedPath = normalizePathname(targetPath || '/')
    if (normalizedPath === pathname) {
      return
    }
    window.history.pushState({}, '', normalizedPath)
    setPathname(normalizedPath)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const addToCart = (item, quantity = 1) => {
    if (!item || !item.name || !item.image || !item.price) {
      return
    }
    const parsedPrice =
      typeof item.price === 'number'
        ? item.price
        : Number.parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0
    if (!parsedPrice) {
      return
    }
    const safeQuantity = Math.max(1, Number(quantity) || 1)
    const productId = item.productId || item.id || item.name
    const variant = item.variant || ''
    const lineId = `${productId}-${variant || 'default'}`

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((line) => line.lineId === lineId)
      if (existingIndex >= 0) {
        return prev.map((line, index) =>
          index === existingIndex
            ? { ...line, quantity: line.quantity + safeQuantity }
            : line,
        )
      }
      return [
        ...prev,
        {
          lineId,
          productId,
          name: item.name,
          variant,
          image: item.image,
          price: parsedPrice,
          quantity: safeQuantity,
        },
      ]
    })
  }

  const updateCartItemQuantity = (lineId, quantity) => {
    const safeQuantity = Math.max(1, Number(quantity) || 1)
    setCartItems((prev) =>
      prev.map((item) => (item.lineId === lineId ? { ...item, quantity: safeQuantity } : item)),
    )
  }

  const removeCartItem = (lineId) => {
    setCartItems((prev) => prev.filter((item) => item.lineId !== lineId))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const cartCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )
  const cartTotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems],
  )

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    const onPopState = () => {
      setPathname(normalizePathname(window.location.pathname))
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const onDocumentClick = (event) => {
      const target = event.target
      if (!(target instanceof Element)) {
        return
      }
      const anchor = target.closest('a[href]')
      if (!anchor) {
        return
      }
      const href = anchor.getAttribute('href')
      if (!href || !href.startsWith('/')) {
        return
      }
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }
      event.preventDefault()
      navigate(href)
    }
    document.addEventListener('click', onDocumentClick)
    return () => document.removeEventListener('click', onDocumentClick)
  }, [pathname])

  let page = <HomePage />

  if (pathname === '/' || pathname === '/home') {
    page = <HomePage />
  } else if (pathname === '/product') {
    page = <ProductPage onAddToCart={addToCart} onNavigate={navigate} />
  } else if (pathname === '/category') {
    page = <CategoryPage onAddToCart={addToCart} onNavigate={navigate} />
  } else if (pathname === '/cart') {
    page = (
      <CartPage
        cartItems={cartItems}
        onUpdateQuantity={updateCartItemQuantity}
        onRemoveItem={removeCartItem}
        onNavigate={navigate}
      />
    )
  } else if (pathname === '/checkout') {
    page = (
      <CheckoutPage
        cartItems={cartItems}
        onNavigate={navigate}
        onPlaceOrder={() => {
          clearCart()
          navigate('/orderConfirmation')
        }}
      />
    )
  } else if (pathname === '/orderConfirmation' || pathname === '/order-confirmation') {
    page = <OrderConfirmationPage />
  } else if (pathname === '/orderHistory' || pathname === '/orders') {
    page = <OrderHistoryPage />
  } else if (pathname === '/orderDetails' || pathname === '/order-details') {
    page = <OrderDetailsPage />
  }
  return (
    <>
      <SiteHeader cartCount={cartCount} cartTotal={cartTotal} onNavigate={navigate} />
      {page}
      <SiteFooter />
    </>
  )
}

export default App
