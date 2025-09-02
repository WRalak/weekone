import Image from "next/image";
import { IoChevronDownOutline } from "react-icons/io5";

export default function Dashboard() {
  return (
    <section className="w-full max-w-[1251px] mx-auto flex flex-col lg:flex-row lg:items-start justify-between px-4 md:px-10 lg:px-10 py-12 gap-10 lg:gap-16">
      {/* LEFT SIDE */}
      <div className="flex-1">
        {/* Heading */}
        <div className="flex items-center gap-3 mb-6">
          <hr className="md:block w-12 border-t-2 border-gray-400" />
          <p className="text-gray-700 font-medium tracking-wide">COACHES</p>
        </div>

        <h1 className="text-[40px] font-black  md:text-[51px] font-bold leading-snug">
          Get Paid On Time, <br />
          <span className="text-[#FE5A2F]">Every Time</span>
        </h1>

        {/* Orders List */}
        <div className="mt-8 space-y-4">
          {[
            {
              img: "/food.png",
              title: "Chicken Hell",
              status: "On The Way",
              time: "3:09 PM",
              statusColor: "text-gray-500",
            },
            {
              img: "/fud.png",
              title: "Swe Dish",
              status: "Delivered",
              time: "Yesterday",
              statusColor: "text-gray-500",
            },
            {
              img: "/fd.png",
              title: "Fish Hell Veg",
              status: "Cancelled",
              time: "Yesterday",
              statusColor: "text-red-500",
            },
          ].map((order, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md w-full max-w-md"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={order.img}
                  alt={order.title}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <p className="font-extrabold">{order.title}</p>
                  <p className={`${order.statusColor} text-sm`}>
                    {order.status}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">{order.time}</span>
            </div>
          ))}
        </div>
      </div>

    
     <div className="flex justify-center md:hidden">
  <Image
    src="/Vector 14.png" 
    alt="Connector"
    width={100}
    height={100}
    className="my-6 rotate-270 translate-x-29"
  />
</div>


      {/* RIGHT SIDE */}
      <div className="flex-1 w-full bg-white p-6 rounded-2xl shadow-2xl border border-gray-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-lg md:text-[28px]">Purchases</h2>
          <button className="flex items-center gap-3 px-3 py-1 bg-gray-100 rounded-lg text-sm">
            This month <IoChevronDownOutline />
          </button>
        </div>

        {/* Expense Card */}
        <div className="p-4 rounded-xl border border-gray-300 mb-7">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image src={"/icon.png"} width={50} height={50} alt="icon" />
              <div>
                <p className="font-semibold">Expense</p>
                <p className="text-gray-500 text-sm">Increased By 10%</p>
              </div>
            </div>
            <p className="font-bold">$409.00</p>
          </div>
          <div className="h-2 bg-orange-100 rounded-full mt-3">
            <div className="h-2 bg-orange-500 rounded-full w-[70%]" />
          </div>
        </div>

        {/* Voucher Usage Card */}
        <div className="p-4 border border-gray-300 rounded-xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Image src={"/ico.png"} width={50} height={50} alt="icon" />
              <div>
                <p className="font-semibold">Voucher Usage</p>
                <p className="text-gray-500 text-sm">Increased By 5%</p>
              </div>
            </div>
            <p className="font-bold">$45.78</p>
          </div>
          <div className="h-2 bg-yellow-100 rounded-full mt-3">
            <div className="h-2 bg-yellow-500 rounded-full w-[40%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
