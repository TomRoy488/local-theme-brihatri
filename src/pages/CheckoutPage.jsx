import { useMemo, useState } from 'react'
import { CheckCircle2, CreditCard, Lock, MapPin, Truck } from 'lucide-react'
import './CheckoutPage.css'

const checkoutItems = [
  {
    id: 1,
    name: 'Keto Crunch',
    variant: 'Student Mix',
    price: 4.99,
    quantity: 1,
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/2-a.jpg?v=1653626304&width=220',
  },
  {
    id: 2,
    name: 'Coconut Water',
    variant: '6.5oz',
    price: 3.0,
    quantity: 2,
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/1-a.jpg?v=1653626228&width=220',
  },
]

function CheckoutPage({ cartItems, onNavigate, onPlaceOrder }) {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const resolvedItems = cartItems?.length ? cartItems : checkoutItems
  const subtotal = useMemo(
    () => resolvedItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [resolvedItems],
  )
  const shipping = 4
  const tax = 1.6
  const total = subtotal + shipping + tax

  return (
    <main className="brihatri-local-checkoutPage b-MiniMal-checkoutPage">
      <section className="brihatri-local-checkoutSection b-MiniMal-checkoutSection mx-auto w-full max-w-[1440px] px-4 pb-12 pt-5 md:px-12 md:pb-16 md:pt-7">
        <nav className="brihatri-local-checkoutBreadcrumb b-MiniMal-checkoutBreadcrumb mb-4 flex flex-wrap items-center gap-[10px] text-[14px] text-[#2a2f37] md:mb-5">
          <a href="/" className="brihatri-local-checkoutLink b-MiniMal-checkoutLink text-[#2a2f37]">
            Home
          </a>
          <span>/</span>
          <a href="/cart" className="brihatri-local-checkoutLink b-MiniMal-checkoutLink text-[#2a2f37]">
            Cart
          </a>
          <span>/</span>
          <span>Checkout</span>
        </nav>

        <h1 className="brihatri-local-checkoutTitle b-MiniMal-checkoutTitle text-[24px] font-normal leading-[1.12] tracking-[-0.2px] text-[#141c24] md:text-[40px]">
          Checkout
        </h1>

        <div className="brihatri-local-checkoutLayout b-MiniMal-checkoutLayout mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr_380px] md:gap-8">
          <div className="brihatri-local-checkoutFormWrap b-MiniMal-checkoutFormWrap space-y-4 md:space-y-5">
            <article className="brihatri-local-checkoutCard b-MiniMal-checkoutCard rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-5">
              <h2 className="brihatri-local-checkoutCardTitle b-MiniMal-checkoutCardTitle flex items-center gap-2 text-[20px] text-[#171e26] md:text-[24px]">
                <MapPin className="h-[18px] w-[18px]" strokeWidth={2} />
                Contact & Shipping
              </h2>

              <div className="brihatri-local-checkoutFields b-MiniMal-checkoutFields mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                <input className="brihatri-local-checkoutInput b-MiniMal-checkoutInput h-[46px] rounded-[8px] border border-[#d5d8dc] px-3 text-[14px]" placeholder="First name" />
                <input className="brihatri-local-checkoutInput b-MiniMal-checkoutInput h-[46px] rounded-[8px] border border-[#d5d8dc] px-3 text-[14px]" placeholder="Last name" />
                <input className="brihatri-local-checkoutInput b-MiniMal-checkoutInput h-[46px] rounded-[8px] border border-[#d5d8dc] px-3 text-[14px] md:col-span-2" placeholder="Email address" />
                <input className="brihatri-local-checkoutInput b-MiniMal-checkoutInput h-[46px] rounded-[8px] border border-[#d5d8dc] px-3 text-[14px] md:col-span-2" placeholder="Street address" />
                <input className="brihatri-local-checkoutInput b-MiniMal-checkoutInput h-[46px] rounded-[8px] border border-[#d5d8dc] px-3 text-[14px]" placeholder="City" />
                <input className="brihatri-local-checkoutInput b-MiniMal-checkoutInput h-[46px] rounded-[8px] border border-[#d5d8dc] px-3 text-[14px]" placeholder="ZIP code" />
              </div>
            </article>

            <article className="brihatri-local-checkoutCard b-MiniMal-checkoutCard rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-5">
              <h2 className="brihatri-local-checkoutCardTitle b-MiniMal-checkoutCardTitle flex items-center gap-2 text-[20px] text-[#171e26] md:text-[24px]">
                <Truck className="h-[18px] w-[18px]" strokeWidth={2} />
                Delivery Method
              </h2>

              <label className="brihatri-local-checkoutRadioRow b-MiniMal-checkoutRadioRow mt-4 flex items-center justify-between rounded-[8px] border border-[#d5d8dc] px-3 py-3 text-[14px] text-[#1d2430]">
                <span className="flex items-center gap-2">
                  <input type="radio" name="delivery" defaultChecked />
                  Standard shipping (2-4 days)
                </span>
                <span>$4.00</span>
              </label>

              <label className="brihatri-local-checkoutRadioRow b-MiniMal-checkoutRadioRow mt-3 flex items-center justify-between rounded-[8px] border border-[#d5d8dc] px-3 py-3 text-[14px] text-[#1d2430]">
                <span className="flex items-center gap-2">
                  <input type="radio" name="delivery" />
                  Express shipping (next day)
                </span>
                <span>$8.00</span>
              </label>
            </article>

            <article className="brihatri-local-checkoutCard b-MiniMal-checkoutCard rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-5">
              <h2 className="brihatri-local-checkoutCardTitle b-MiniMal-checkoutCardTitle flex items-center gap-2 text-[20px] text-[#171e26] md:text-[24px]">
                <CreditCard className="h-[18px] w-[18px]" strokeWidth={2} />
                Payment
              </h2>

              <div className="brihatri-local-checkoutPaymentTabs b-MiniMal-checkoutPaymentTabs mt-4 flex gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`brihatri-local-checkoutPayTab b-MiniMal-checkoutPayTab inline-flex h-[40px] items-center justify-center rounded-full border px-5 text-[14px] ${
                    paymentMethod === 'card'
                      ? 'border-[#2e333a] bg-[#181b22] text-white'
                      : 'border-[#cfd2d6] bg-transparent text-[#1f252d]'
                  }`}
                >
                  Card
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`brihatri-local-checkoutPayTab b-MiniMal-checkoutPayTab inline-flex h-[40px] items-center justify-center rounded-full border px-5 text-[14px] ${
                    paymentMethod === 'paypal'
                      ? 'border-[#2e333a] bg-[#181b22] text-white'
                      : 'border-[#cfd2d6] bg-transparent text-[#1f252d]'
                  }`}
                >
                  PayPal
                </button>
              </div>

              {paymentMethod === 'card' ? (
                <div className="brihatri-local-checkoutFields b-MiniMal-checkoutFields mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                  <input className="brihatri-local-checkoutInput b-MiniMal-checkoutInput h-[46px] rounded-[8px] border border-[#d5d8dc] px-3 text-[14px] md:col-span-2" placeholder="Card number" />
                  <input className="brihatri-local-checkoutInput b-MiniMal-checkoutInput h-[46px] rounded-[8px] border border-[#d5d8dc] px-3 text-[14px]" placeholder="MM / YY" />
                  <input className="brihatri-local-checkoutInput b-MiniMal-checkoutInput h-[46px] rounded-[8px] border border-[#d5d8dc] px-3 text-[14px]" placeholder="CVC" />
                </div>
              ) : (
                <p className="brihatri-local-checkoutPaypalNote b-MiniMal-checkoutPaypalNote mt-4 text-[14px] text-[#505761]">
                  You will be redirected to PayPal after clicking place order.
                </p>
              )}
            </article>
          </div>

          <aside className="brihatri-local-checkoutSummary b-MiniMal-checkoutSummary rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-5">
            <h2 className="brihatri-local-checkoutSummaryTitle b-MiniMal-checkoutSummaryTitle text-[20px] text-[#171e26] md:text-[24px]">
              Order Summary
            </h2>

            <div className="brihatri-local-checkoutSummaryItems b-MiniMal-checkoutSummaryItems mt-4 space-y-3">
              {resolvedItems.map((item) => (
                <div
                  key={`checkout-summary-${item.lineId ?? item.id}`}
                  className="brihatri-local-checkoutSummaryItem b-MiniMal-checkoutSummaryItem flex items-center gap-3 rounded-[8px] border border-[#ececec] bg-[#fafafa] p-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="brihatri-local-checkoutSummaryImage b-MiniMal-checkoutSummaryImage h-[56px] w-[56px] rounded-[6px] object-contain"
                  />
                  <div className="brihatri-local-checkoutSummaryInfo b-MiniMal-checkoutSummaryInfo min-w-0 flex-1">
                    <p className="brihatri-local-checkoutSummaryItemTitle b-MiniMal-checkoutSummaryItemTitle truncate text-[14px] text-[#171e26]">
                      {item.name}
                    </p>
                    <p className="brihatri-local-checkoutSummaryItemMeta b-MiniMal-checkoutSummaryItemMeta text-[12px] text-[#6c727a]">
                      {item.variant} x{item.quantity}
                    </p>
                  </div>
                  <p className="brihatri-local-checkoutSummaryItemPrice b-MiniMal-checkoutSummaryItemPrice text-[14px] text-[#171e26]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <div className="brihatri-local-checkoutTotals b-MiniMal-checkoutTotals mt-4 space-y-2 border-t border-[#ececec] pt-4 text-[14px] text-[#2d333b]">
              <div className="brihatri-local-checkoutTotalRow b-MiniMal-checkoutTotalRow flex items-center justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="brihatri-local-checkoutTotalRow b-MiniMal-checkoutTotalRow flex items-center justify-between">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="brihatri-local-checkoutTotalRow b-MiniMal-checkoutTotalRow flex items-center justify-between">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="brihatri-local-checkoutGrandTotal b-MiniMal-checkoutGrandTotal mt-4 flex items-center justify-between text-[20px] text-[#121921] md:text-[24px]">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button
              type="button"
              onClick={() => {
                if (onPlaceOrder) {
                  onPlaceOrder()
                  return
                }
                onNavigate?.('/orderConfirmation')
              }}
              className="brihatri-local-checkoutPlaceOrder b-MiniMal-checkoutPlaceOrder mt-5 inline-flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#181b22] px-8 text-[20px] font-semibold text-white transition-colors hover:bg-[#262c35]"
            >
              <Lock className="h-[16px] w-[16px]" strokeWidth={2.2} />
              Place order
            </button>

            <p className="brihatri-local-checkoutSecureNote b-MiniMal-checkoutSecureNote mt-3 inline-flex items-center gap-2 text-[12px] text-[#666c75]">
              <CheckCircle2 className="h-[14px] w-[14px]" strokeWidth={2} />
              Secure checkout with SSL encryption
            </p>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default CheckoutPage
