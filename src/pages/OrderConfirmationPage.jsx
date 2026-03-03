import { CheckCircle2, Clock3, Mail, MapPin, PackageCheck } from 'lucide-react'
import './OrderConfirmationPage.css'

const orderItems = [
  {
    id: 1,
    name: 'Keto Crunch',
    variant: 'Student Mix',
    quantity: 1,
    price: '$4.99',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/2-a.jpg?v=1653626304&width=220',
  },
  {
    id: 2,
    name: 'Coconut Water',
    variant: '6.5oz',
    quantity: 2,
    price: '$6.00',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/1-a.jpg?v=1653626228&width=220',
  },
]

function OrderConfirmationPage() {
  return (
    <main className="brihatri-local-orderConfirmationPage b-MiniMal-orderConfirmationPage">
      <section className="brihatri-local-orderConfirmationSection b-MiniMal-orderConfirmationSection mx-auto w-full max-w-[1280px] px-4 pb-12 pt-5 md:px-12 md:pb-16 md:pt-7">
        <nav className="brihatri-local-orderConfirmationBreadcrumb b-MiniMal-orderConfirmationBreadcrumb mb-4 flex flex-wrap items-center gap-[10px] text-[14px] text-[#2a2f37] md:mb-5">
          <a
            href="/"
            className="brihatri-local-orderConfirmationLink b-MiniMal-orderConfirmationLink text-[#2a2f37]"
          >
            Home
          </a>
          <span>/</span>
          <a
            href="/checkout"
            className="brihatri-local-orderConfirmationLink b-MiniMal-orderConfirmationLink text-[#2a2f37]"
          >
            Checkout
          </a>
          <span>/</span>
          <span>Order confirmation</span>
        </nav>

        <div className="brihatri-local-orderConfirmationHero b-MiniMal-orderConfirmationHero rounded-[10px] border border-[#dddddd] bg-white p-5 md:rounded-[12px] md:p-8">
          <div className="brihatri-local-orderConfirmationHead b-MiniMal-orderConfirmationHead flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="brihatri-local-orderConfirmationTitleWrap b-MiniMal-orderConfirmationTitleWrap">
              <p className="brihatri-local-orderConfirmationOrderNo b-MiniMal-orderConfirmationOrderNo text-[14px] text-[#646b74]">
                Order #BRI-2026-1087
              </p>
              <h1 className="brihatri-local-orderConfirmationTitle b-MiniMal-orderConfirmationTitle mt-1 flex items-center gap-2 text-[24px] font-normal leading-[1.12] text-[#141c24] md:text-[40px]">
                <CheckCircle2 className="h-[22px] w-[22px] text-[#3f9a4b] md:h-[28px] md:w-[28px]" />
                Thank you for your order!
              </h1>
              <p className="brihatri-local-orderConfirmationSubtitle b-MiniMal-orderConfirmationSubtitle mt-2 text-[14px] text-[#4d545d] md:text-[16px]">
                We’ve received your order and started processing it.
              </p>
            </div>

            <a
              href="/category"
              className="brihatri-local-orderConfirmationLink b-MiniMal-orderConfirmationLink inline-flex h-[44px] items-center justify-center rounded-full border border-[#2d323a] px-7 text-[18px] text-[#111820] md:h-[50px]"
            >
              Continue shopping
            </a>
          </div>

          <div className="brihatri-local-orderConfirmationMeta b-MiniMal-orderConfirmationMeta mt-5 grid grid-cols-1 gap-3 text-[14px] text-[#1f252e] md:grid-cols-3">
            <div className="brihatri-local-orderConfirmationMetaItem b-MiniMal-orderConfirmationMetaItem flex items-start gap-2 rounded-[8px] border border-[#ececec] bg-[#fafafa] px-3 py-3">
              <Clock3 className="mt-[1px] h-[16px] w-[16px]" strokeWidth={2} />
              <div>
                <p className="text-[#68707a]">Estimated delivery</p>
                <p>Tue, Feb 25 - Thu, Feb 27</p>
              </div>
            </div>
            <div className="brihatri-local-orderConfirmationMetaItem b-MiniMal-orderConfirmationMetaItem flex items-start gap-2 rounded-[8px] border border-[#ececec] bg-[#fafafa] px-3 py-3">
              <MapPin className="mt-[1px] h-[16px] w-[16px]" strokeWidth={2} />
              <div>
                <p className="text-[#68707a]">Shipping to</p>
                <p>221B Baker Street, London</p>
              </div>
            </div>
            <div className="brihatri-local-orderConfirmationMetaItem b-MiniMal-orderConfirmationMetaItem flex items-start gap-2 rounded-[8px] border border-[#ececec] bg-[#fafafa] px-3 py-3">
              <Mail className="mt-[1px] h-[16px] w-[16px]" strokeWidth={2} />
              <div>
                <p className="text-[#68707a]">Confirmation sent to</p>
                <p>hello@example.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="brihatri-local-orderConfirmationLayout b-MiniMal-orderConfirmationLayout mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr_360px] md:gap-8">
          <article className="brihatri-local-orderConfirmationItems b-MiniMal-orderConfirmationItems rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-5">
            <h2 className="brihatri-local-orderConfirmationItemsTitle b-MiniMal-orderConfirmationItemsTitle flex items-center gap-2 text-[20px] font-normal text-[#171e26] md:text-[24px]">
              <PackageCheck className="h-[18px] w-[18px]" strokeWidth={2} />
              Ordered Items
            </h2>

            <div className="brihatri-local-orderConfirmationItemsList b-MiniMal-orderConfirmationItemsList mt-4 space-y-3">
              {orderItems.map((item) => (
                <div
                  key={`order-item-${item.id}`}
                  className="brihatri-local-orderConfirmationItem b-MiniMal-orderConfirmationItem flex items-center gap-3 rounded-[8px] border border-[#ececec] bg-[#fafafa] p-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="brihatri-local-orderConfirmationItemImage b-MiniMal-orderConfirmationItemImage h-[58px] w-[58px] rounded-[6px] object-contain"
                  />
                  <div className="brihatri-local-orderConfirmationItemInfo b-MiniMal-orderConfirmationItemInfo min-w-0 flex-1">
                    <p className="brihatri-local-orderConfirmationItemName b-MiniMal-orderConfirmationItemName truncate text-[14px] text-[#171e26]">
                      {item.name}
                    </p>
                    <p className="brihatri-local-orderConfirmationItemMeta b-MiniMal-orderConfirmationItemMeta text-[12px] text-[#6c727a]">
                      {item.variant} x{item.quantity}
                    </p>
                  </div>
                  <p className="brihatri-local-orderConfirmationItemPrice b-MiniMal-orderConfirmationItemPrice text-[14px] text-[#171e26]">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <aside className="brihatri-local-orderConfirmationSummary b-MiniMal-orderConfirmationSummary rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-5">
            <h2 className="brihatri-local-orderConfirmationSummaryTitle b-MiniMal-orderConfirmationSummaryTitle text-[20px] font-normal text-[#171e26] md:text-[24px]">
              Payment Summary
            </h2>

            <div className="brihatri-local-orderConfirmationSummaryRows b-MiniMal-orderConfirmationSummaryRows mt-4 space-y-2 border-b border-[#ececec] pb-4 text-[14px] text-[#2d333b]">
              <div className="brihatri-local-orderConfirmationSummaryRow b-MiniMal-orderConfirmationSummaryRow flex items-center justify-between">
                <span>Subtotal</span>
                <span>$10.99</span>
              </div>
              <div className="brihatri-local-orderConfirmationSummaryRow b-MiniMal-orderConfirmationSummaryRow flex items-center justify-between">
                <span>Shipping</span>
                <span>$4.00</span>
              </div>
              <div className="brihatri-local-orderConfirmationSummaryRow b-MiniMal-orderConfirmationSummaryRow flex items-center justify-between">
                <span>Tax</span>
                <span>$1.60</span>
              </div>
            </div>

            <div className="brihatri-local-orderConfirmationSummaryTotal b-MiniMal-orderConfirmationSummaryTotal mt-4 flex items-center justify-between text-[20px] text-[#121921] md:text-[24px]">
              <span>Total paid</span>
              <span>$16.59</span>
            </div>

            <a
              href="/"
              className="brihatri-local-orderConfirmationLink b-MiniMal-orderConfirmationLink mt-5 inline-flex h-[50px] w-full items-center justify-center rounded-full bg-[#181b22] px-8 text-[20px] font-semibold text-white"
            >
              Back to home
            </a>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default OrderConfirmationPage
