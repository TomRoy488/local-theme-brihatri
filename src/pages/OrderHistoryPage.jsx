import { Clock3, Package, Search } from 'lucide-react'
import './OrderHistoryPage.css'

const orders = [
  {
    id: 'BRI-2026-1087',
    date: 'Feb 22, 2026',
    status: 'Delivered',
    total: '$16.59',
    items: 3,
  },
  {
    id: 'BRI-2026-1071',
    date: 'Feb 17, 2026',
    status: 'In transit',
    total: '$29.98',
    items: 5,
  },
  {
    id: 'BRI-2026-1039',
    date: 'Feb 08, 2026',
    status: 'Delivered',
    total: '$12.40',
    items: 2,
  },
  {
    id: 'BRI-2026-0994',
    date: 'Jan 31, 2026',
    status: 'Cancelled',
    total: '$8.99',
    items: 1,
  },
]

function OrderHistoryPage() {
  return (
    <main className="brihatri-local-orderHistoryPage b-MiniMal-orderHistoryPage">
      <section className="brihatri-local-orderHistorySection b-MiniMal-orderHistorySection mx-auto w-full max-w-[1280px] px-4 pb-12 pt-5 md:px-12 md:pb-16 md:pt-7">
        <nav className="brihatri-local-orderHistoryBreadcrumb b-MiniMal-orderHistoryBreadcrumb mb-4 flex flex-wrap items-center gap-[10px] text-[14px] text-[#2a2f37] md:mb-5">
          <a href="/" className="brihatri-local-orderHistoryLink b-MiniMal-orderHistoryLink text-[#2a2f37]">
            Home
          </a>
          <span>/</span>
          <span>Order history</span>
        </nav>

        <div className="brihatri-local-orderHistoryHead b-MiniMal-orderHistoryHead flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h1 className="brihatri-local-orderHistoryTitle b-MiniMal-orderHistoryTitle text-[24px] font-normal leading-[1.12] tracking-[-0.2px] text-[#141c24] md:text-[40px]">
            Order History
          </h1>
          <label className="brihatri-local-orderHistorySearch b-MiniMal-orderHistorySearch inline-flex h-[46px] w-full max-w-[340px] items-center gap-2 rounded-[8px] border border-[#d5d8dc] bg-white px-3 text-[14px] text-[#505761]">
            <Search className="h-[16px] w-[16px]" strokeWidth={2} />
            <input
              type="text"
              placeholder="Search order ID"
              className="brihatri-local-orderHistorySearchInput b-MiniMal-orderHistorySearchInput w-full border-0 bg-transparent p-0 text-[14px] text-[#1d2430] outline-none"
            />
          </label>
        </div>

        <div className="brihatri-local-orderHistoryList b-MiniMal-orderHistoryList mt-6 space-y-3 md:mt-7 md:space-y-4">
          {orders.map((order) => (
            <article
              key={order.id}
              className="brihatri-local-orderHistoryCard b-MiniMal-orderHistoryCard rounded-[10px] border border-[#dddddd] bg-white p-4 md:rounded-[12px] md:p-5"
            >
              <div className="brihatri-local-orderHistoryCardTop b-MiniMal-orderHistoryCardTop flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="brihatri-local-orderHistoryCardLeft b-MiniMal-orderHistoryCardLeft">
                  <p className="brihatri-local-orderHistoryId b-MiniMal-orderHistoryId text-[16px] text-[#161d24] md:text-[18px]">
                    {order.id}
                  </p>
                  <p className="brihatri-local-orderHistoryDate b-MiniMal-orderHistoryDate mt-1 inline-flex items-center gap-2 text-[14px] text-[#6d737b]">
                    <Clock3 className="h-[14px] w-[14px]" strokeWidth={2} />
                    {order.date}
                  </p>
                </div>

                <div className="brihatri-local-orderHistoryCardRight b-MiniMal-orderHistoryCardRight flex flex-wrap items-center gap-3">
                  <span
                    className={`brihatri-local-orderHistoryStatus b-MiniMal-orderHistoryStatus inline-flex h-[30px] items-center rounded-full px-3 text-[12px] ${
                      order.status === 'Delivered'
                        ? 'bg-[#e8f5ea] text-[#2f8d3d]'
                        : order.status === 'In transit'
                          ? 'bg-[#ebf1ff] text-[#325cc6]'
                          : 'bg-[#ffeceb] text-[#c7433a]'
                    }`}
                  >
                    {order.status}
                  </span>
                  <p className="brihatri-local-orderHistoryTotal b-MiniMal-orderHistoryTotal text-[16px] text-[#161d24] md:text-[18px]">
                    {order.total}
                  </p>
                </div>
              </div>

              <div className="brihatri-local-orderHistoryMeta b-MiniMal-orderHistoryMeta mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#ececec] pt-4">
                <p className="brihatri-local-orderHistoryItems b-MiniMal-orderHistoryItems inline-flex items-center gap-2 text-[14px] text-[#4b525c]">
                  <Package className="h-[14px] w-[14px]" strokeWidth={2} />
                  {order.items} items
                </p>
                <a
                  href="/order-details"
                  className="brihatri-local-orderHistoryLink b-MiniMal-orderHistoryLink inline-flex h-[40px] items-center justify-center rounded-full border border-[#2d323a] px-5 text-[14px] text-[#111820]"
                >
                  View details
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default OrderHistoryPage
