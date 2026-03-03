import { useMemo, useState } from 'react'
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import './CartPage.css'

const initialCartItems = [
  {
    id: 1,
    name: 'Keto Crunch',
    variant: 'Student Mix',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/2-a.jpg?v=1653626304&width=420',
    price: 4.99,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Coconut Water',
    variant: '6.5oz',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/1-a.jpg?v=1653626228&width=420',
    price: 3.0,
    quantity: 2,
  },
  {
    id: 3,
    name: 'Sliced Tomato Puree',
    variant: 'Organic',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/4-a.jpg?v=1653636911&width=420',
    price: 3.5,
    quantity: 1,
  },
]

function CartPage({ cartItems, onUpdateQuantity, onRemoveItem, onNavigate }) {
  const [localCartItems, setLocalCartItems] = useState(initialCartItems)
  const resolvedCartItems = cartItems ?? localCartItems

  const updateItemQty = (id, delta) => {
    if (onUpdateQuantity) {
      const currentItem = resolvedCartItems.find((item) => (item.lineId ?? item.id) === id)
      if (!currentItem) {
        return
      }
      onUpdateQuantity(id, Math.max(1, currentItem.quantity + delta))
      return
    }
    setLocalCartItems((prev) =>
      prev.map((item) =>
        (item.lineId ?? item.id) === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    )
  }

  const removeItem = (id) => {
    if (onRemoveItem) {
      onRemoveItem(id)
      return
    }
    setLocalCartItems((prev) => prev.filter((item) => (item.lineId ?? item.id) !== id))
  }

  const subtotal = useMemo(
    () => resolvedCartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [resolvedCartItems],
  )
  const shipping = subtotal > 0 ? 4 : 0
  const total = subtotal + shipping

  return (
    <main className="brihatri-local-cartPage b-MiniMal-cartPage">
      <section className="brihatri-local-cartSection b-MiniMal-cartSection mx-auto w-full max-w-[1440px] px-4 pb-12 pt-5 md:px-12 md:pb-16 md:pt-7">
        <nav className="brihatri-local-cartBreadcrumb b-MiniMal-cartBreadcrumb mb-4 flex flex-wrap items-center gap-[10px] text-[14px] text-[#2a2f37] md:mb-5">
          <a href="/" className="brihatri-local-cartLink b-MiniMal-cartLink text-[#2a2f37]">
            Home
          </a>
          <span>/</span>
          <span>Cart</span>
        </nav>

        <div className="brihatri-local-cartHeader b-MiniMal-cartHeader mb-6 flex items-center gap-3 md:mb-8">
          <ShoppingBag className="h-[24px] w-[24px] text-[#181d24] md:h-[30px] md:w-[30px]" />
          <h1 className="brihatri-local-cartTitle b-MiniMal-cartTitle text-[24px] font-normal leading-[1.1] text-[#141c24] md:text-[40px]">
            Your Cart
          </h1>
        </div>

        <div className="brihatri-local-cartLayout b-MiniMal-cartLayout grid grid-cols-1 gap-6 md:grid-cols-[1fr_360px] md:gap-8">
          <div className="brihatri-local-cartItemsWrap b-MiniMal-cartItemsWrap space-y-4 md:space-y-5">
            {resolvedCartItems.length === 0 ? (
              <div className="brihatri-local-cartEmpty b-MiniMal-cartEmpty rounded-[12px] border border-[#dbdbdb] bg-white px-5 py-10 text-center">
                <p className="text-[18px] text-[#222933] md:text-[20px]">Your cart is empty.</p>
                <a
                  href="/category"
                  className="brihatri-local-cartLink b-MiniMal-cartLink mt-4 inline-flex h-[44px] items-center justify-center rounded-full border border-[#2d323a] px-8 text-[18px] text-[#111820]"
                >
                  Browse products
                </a>
              </div>
            ) : (
              resolvedCartItems.map((item) => (
                <article
                  key={`cart-item-${item.lineId ?? item.id}`}
                  className="brihatri-local-cartItem b-MiniMal-cartItem rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-5"
                >
                  <div className="brihatri-local-cartItemRow b-MiniMal-cartItemRow flex items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="brihatri-local-cartItemImage b-MiniMal-cartItemImage h-[88px] w-[88px] rounded-[8px] border border-[#ececec] object-contain md:h-[104px] md:w-[104px]"
                    />

                    <div className="brihatri-local-cartItemInfo b-MiniMal-cartItemInfo min-w-0 flex-1">
                      <h2 className="brihatri-local-cartItemTitle b-MiniMal-cartItemTitle text-[18px] font-normal leading-[1.15] text-[#161d24] md:text-[22px]">
                        {item.name}
                      </h2>
                      <p className="brihatri-local-cartItemVariant b-MiniMal-cartItemVariant mt-1 text-[14px] text-[#737980]">
                        {item.variant}
                      </p>
                      <p className="brihatri-local-cartItemPrice b-MiniMal-cartItemPrice mt-2 text-[18px] text-[#151c24] md:text-[20px]">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeItem(item.lineId ?? item.id)}
                      className="brihatri-local-cartRemoveBtn b-MiniMal-cartRemoveBtn inline-flex h-9 w-9 items-center justify-center rounded-full text-[#6d737b] transition-colors hover:bg-[#f2f2f2] hover:text-[#20262f]"
                      aria-label={`Remove ${item.name}`}
                    >
                      <Trash2 className="h-[16px] w-[16px]" strokeWidth={2} />
                    </button>
                  </div>

                  <div className="brihatri-local-cartItemFooter b-MiniMal-cartItemFooter mt-4 flex items-center justify-between">
                    <div className="brihatri-local-cartQtyWrap b-MiniMal-cartQtyWrap flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateItemQty(item.lineId ?? item.id, -1)}
                        className="brihatri-local-cartQtyBtn b-MiniMal-cartQtyBtn inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#30353d] text-[#1a1f27]"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-[16px] w-[16px]" strokeWidth={2.2} />
                      </button>
                      <span className="brihatri-local-cartQtyValue b-MiniMal-cartQtyValue min-w-[24px] text-center text-[14px] text-[#1a1f27]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateItemQty(item.lineId ?? item.id, 1)}
                        className="brihatri-local-cartQtyBtn b-MiniMal-cartQtyBtn inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#30353d] text-[#1a1f27]"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-[16px] w-[16px]" strokeWidth={2.2} />
                      </button>
                    </div>

                    <p className="brihatri-local-cartItemLineTotal b-MiniMal-cartItemLineTotal text-[18px] text-[#111820] md:text-[20px]">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </article>
              ))
            )}
          </div>

          <aside className="brihatri-local-cartSummary b-MiniMal-cartSummary rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-5">
            <h2 className="brihatri-local-cartSummaryTitle b-MiniMal-cartSummaryTitle text-[20px] font-normal text-[#161d24] md:text-[24px]">
              Order Summary
            </h2>

            <div className="brihatri-local-cartSummaryRows b-MiniMal-cartSummaryRows mt-4 space-y-2 border-b border-[#ececec] pb-4 text-[14px] text-[#2d333b]">
              <div className="brihatri-local-cartSummaryRow b-MiniMal-cartSummaryRow flex items-center justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="brihatri-local-cartSummaryRow b-MiniMal-cartSummaryRow flex items-center justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
            </div>

            <div className="brihatri-local-cartSummaryTotal b-MiniMal-cartSummaryTotal mt-4 flex items-center justify-between text-[20px] text-[#121921] md:text-[24px]">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              type="button"
              onClick={() => onNavigate?.('/checkout')}
              className="brihatri-local-cartCheckout b-MiniMal-cartCheckout mt-5 inline-flex h-[52px] w-full items-center justify-center rounded-full bg-[#181b22] px-8 text-[20px] font-semibold text-white transition-colors hover:bg-[#262c35]"
              disabled={resolvedCartItems.length === 0}
            >
              Proceed to checkout
            </button>

            <a
              href="/category"
              className="brihatri-local-cartLink b-MiniMal-cartLink mt-3 inline-flex h-[48px] w-full items-center justify-center rounded-full border border-[#2d323a] px-8 text-[18px] text-[#111820]"
            >
              Continue shopping
            </a>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default CartPage
