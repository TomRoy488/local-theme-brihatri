import { CheckCircle2, Clock3, MapPin, Package, Truck } from 'lucide-react'
import './OrderDetailsPage.css'

const items = [
  {
    id: 1,
    name: 'Keto Crunch',
    variant: 'Student Mix',
    qty: 1,
    price: '$4.99',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/2-a.jpg?v=1653626304&width=220',
  },
  {
    id: 2,
    name: 'Coconut Water',
    variant: '6.5oz',
    qty: 2,
    price: '$6.00',
    image: 'https://local-theme-main.myshopify.com/cdn/shop/products/1-a.jpg?v=1653626228&width=220',
  },
]

function OrderDetailsPage() {
  return (
    <main className="brihatri-local-orderDetailsPage b-MiniMal-orderDetailsPage">
      <section className="brihatri-local-orderDetailsSection b-MiniMal-orderDetailsSection mx-auto w-full max-w-[1280px] px-4 pb-12 pt-5 md:px-12 md:pb-16 md:pt-7">
        <nav className="brihatri-local-orderDetailsBreadcrumb b-MiniMal-orderDetailsBreadcrumb mb-4 flex flex-wrap items-center gap-[10px] text-[14px] text-[#2a2f37] md:mb-5">
          <a href="/" className="brihatri-local-orderDetailsLink b-MiniMal-orderDetailsLink text-[#2a2f37]">
            Home
          </a>
          <span>/</span>
          <a href="/orders" className="brihatri-local-orderDetailsLink b-MiniMal-orderDetailsLink text-[#2a2f37]">
            Order history
          </a>
          <span>/</span>
          <span>Order details</span>
        </nav>

        <div className="brihatri-local-orderDetailsHeader b-MiniMal-orderDetailsHeader rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-6">
          <div className="brihatri-local-orderDetailsHeaderTop b-MiniMal-orderDetailsHeaderTop flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <h1 className="brihatri-local-orderDetailsTitle b-MiniMal-orderDetailsTitle text-[24px] font-normal leading-[1.12] text-[#141c24] md:text-[40px]">
              Order #BRI-2026-1087
            </h1>
            <span className="brihatri-local-orderDetailsStatus b-MiniMal-orderDetailsStatus inline-flex h-[30px] w-fit items-center rounded-full bg-[#e8f5ea] px-3 text-[12px] text-[#2f8d3d]">
              Delivered
            </span>
          </div>
          <p className="brihatri-local-orderDetailsDate b-MiniMal-orderDetailsDate mt-2 inline-flex items-center gap-2 text-[14px] text-[#6d737b]">
            <Clock3 className="h-[14px] w-[14px]" strokeWidth={2} />
            Placed on Feb 22, 2026
          </p>
        </div>

        <div className="brihatri-local-orderDetailsLayout b-MiniMal-orderDetailsLayout mt-6 grid grid-cols-1 gap-6 md:grid-cols-[1fr_360px] md:gap-8">
          <article className="brihatri-local-orderDetailsItemsCard b-MiniMal-orderDetailsItemsCard rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-5">
            <h2 className="brihatri-local-orderDetailsItemsTitle b-MiniMal-orderDetailsItemsTitle flex items-center gap-2 text-[20px] text-[#171e26] md:text-[24px]">
              <Package className="h-[18px] w-[18px]" strokeWidth={2} />
              Items
            </h2>

            <div className="brihatri-local-orderDetailsItemsList b-MiniMal-orderDetailsItemsList mt-4 space-y-3">
              {items.map((item) => (
                <div
                  key={`order-details-item-${item.id}`}
                  className="brihatri-local-orderDetailsItem b-MiniMal-orderDetailsItem flex items-center gap-3 rounded-[8px] border border-[#ececec] bg-[#fafafa] p-2"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                    className="brihatri-local-orderDetailsItemImage b-MiniMal-orderDetailsItemImage h-[58px] w-[58px] rounded-[6px] object-contain"
                  />
                  <div className="brihatri-local-orderDetailsItemInfo b-MiniMal-orderDetailsItemInfo min-w-0 flex-1">
                    <p className="brihatri-local-orderDetailsItemName b-MiniMal-orderDetailsItemName truncate text-[14px] text-[#171e26]">
                      {item.name}
                    </p>
                    <p className="brihatri-local-orderDetailsItemMeta b-MiniMal-orderDetailsItemMeta text-[12px] text-[#6c727a]">
                      {item.variant} x{item.qty}
                    </p>
                  </div>
                  <p className="brihatri-local-orderDetailsItemPrice b-MiniMal-orderDetailsItemPrice text-[14px] text-[#171e26]">
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            <div className="brihatri-local-orderDetailsTracking b-MiniMal-orderDetailsTracking mt-5 rounded-[8px] border border-[#ececec] bg-[#fafafa] p-3">
              <h3 className="brihatri-local-orderDetailsTrackingTitle b-MiniMal-orderDetailsTrackingTitle flex items-center gap-2 text-[14px] text-[#1f252e]">
                <Truck className="h-[14px] w-[14px]" strokeWidth={2} />
                Tracking updates
              </h3>
              <ul className="brihatri-local-orderDetailsTrackingList b-MiniMal-orderDetailsTrackingList mt-3 space-y-2 text-[14px] text-[#4b525c]">
                <li className="brihatri-local-orderDetailsTrackingItem b-MiniMal-orderDetailsTrackingItem inline-flex items-center gap-2">
                  <CheckCircle2 className="h-[14px] w-[14px] text-[#3f9a4b]" strokeWidth={2} />
                  Delivered - Left at front door
                </li>
                <li className="brihatri-local-orderDetailsTrackingItem b-MiniMal-orderDetailsTrackingItem">
                  Out for delivery - Feb 24, 9:12 AM
                </li>
                <li className="brihatri-local-orderDetailsTrackingItem b-MiniMal-orderDetailsTrackingItem">
                  Shipment picked up - Feb 23, 2:35 PM
                </li>
              </ul>
            </div>
          </article>

          <aside className="brihatri-local-orderDetailsSummary b-MiniMal-orderDetailsSummary rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-5">
            <h2 className="brihatri-local-orderDetailsSummaryTitle b-MiniMal-orderDetailsSummaryTitle text-[20px] text-[#171e26] md:text-[24px]">
              Summary
            </h2>
            <div className="brihatri-local-orderDetailsSummaryRows b-MiniMal-orderDetailsSummaryRows mt-4 space-y-2 border-b border-[#ececec] pb-4 text-[14px] text-[#2d333b]">
              <div className="brihatri-local-orderDetailsSummaryRow b-MiniMal-orderDetailsSummaryRow flex items-center justify-between">
                <span>Subtotal</span>
                <span>$10.99</span>
              </div>
              <div className="brihatri-local-orderDetailsSummaryRow b-MiniMal-orderDetailsSummaryRow flex items-center justify-between">
                <span>Shipping</span>
                <span>$4.00</span>
              </div>
              <div className="brihatri-local-orderDetailsSummaryRow b-MiniMal-orderDetailsSummaryRow flex items-center justify-between">
                <span>Tax</span>
                <span>$1.60</span>
              </div>
            </div>
            <div className="brihatri-local-orderDetailsSummaryTotal b-MiniMal-orderDetailsSummaryTotal mt-4 flex items-center justify-between text-[20px] text-[#121921] md:text-[24px]">
              <span>Total</span>
              <span>$16.59</span>
            </div>

            <div className="brihatri-local-orderDetailsAddress b-MiniMal-orderDetailsAddress mt-5 rounded-[8px] border border-[#ececec] bg-[#fafafa] p-3 text-[14px] text-[#4b525c]">
              <p className="brihatri-local-orderDetailsAddressTitle b-MiniMal-orderDetailsAddressTitle inline-flex items-center gap-2 text-[#1f252e]">
                <MapPin className="h-[14px] w-[14px]" strokeWidth={2} />
                Shipping address
              </p>
              <p className="brihatri-local-orderDetailsAddressText b-MiniMal-orderDetailsAddressText mt-2">
                221B Baker Street
                <br />
                London NW1 6XE
                <br />
                United Kingdom
              </p>
            </div>

            <a
              href="/orders"
              className="brihatri-local-orderDetailsLink b-MiniMal-orderDetailsLink mt-5 inline-flex h-[46px] w-full items-center justify-center rounded-full border border-[#2d323a] px-7 text-[18px] text-[#111820]"
            >
              Back to orders
            </a>
          </aside>
        </div>
      </section>
    </main>
  )
}

export default OrderDetailsPage
