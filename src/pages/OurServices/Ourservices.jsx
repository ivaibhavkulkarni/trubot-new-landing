import React from 'react'

const OurServices = () => {
  return (
    <div>
      {/* What We Fix Section */}
      <section className="py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl tracking-tight text-gray-100">What We Fix</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
              From cracked screens to battery replacements, our certified technicians handle it all.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: 'phone_iphone', title: 'iPhone Repair', desc: 'Screen, battery, camera, and more.' },
              { icon: 'laptop_mac', title: 'MacBook Repair', desc: 'Keyboard, trackpad, display issues.' },
              { icon: 'tablet_mac', title: 'iPad Repair', desc: 'Glass, LCD, charging port fixes.' },
              { icon: 'watch', title: 'Watch Repair', desc: 'Screen and battery replacements.' },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-black">
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default OurServices


// {/* Shop Section */}
//       <section className="py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
//           <div className="order-2 lg:order-1">
//             <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Shop the latest.</h2>
//             <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
//               Discover a curated selection of premium devices and accessories. We only sell products we believe in.
//             </p>
//             <div className="mt-8">
//               <a href="#" className="rounded-full bg-orange-500 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
//                 Shop Now
//               </a>
//             </div>
//           </div>
//           <div className="order-1 lg:order-2">
//             <img
//               src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXqjTJUuveOdxmKkt9CAPojredgnq0ZGXT05It--OBAfvq3qZFg9fdREV-9XdM6aQNpD9A7aS_k_rQjOKb0gzFQF9fYjjWJVOkiwpVXWTF2j5tZYHYnBIqi-BEPFaDOD6-sFaGqNqo7zWpsPvMBwY5SqfYbUVr05DAltAl2lrG-8x3hr6uR9ZFEwWz52lswl_hqBTJ4-PWJitNqmg2F1C3iG4xDCGg4G3GfcyqhJaPicRFd0nU3JiR06yjFulkgJDbBVtKJFp6aBk"
//               alt="Assortment of Apple products on a clean background"
//               className="rounded-xl shadow-2xl dark:shadow-orange-300/10"
//             />
//           </div>
//         </div>
//       </section>