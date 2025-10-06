const HeroSection = () => {
  return (
    <main className="flex-grow font-sans">

      {/* Hero Section */}
      <section className="py-24 h-[100vh]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex-row justify-center mt-0 sm:mt-20">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-tight text-gray-800">
            iPhone. iPad. Mac. Watch.
            <br/>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-extrabold">
              Expertly Repaired.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Your trusted destination for premium device repair and the latest gadgets. Experience unparalleled service and get back to what you love, faster.
          </p>
        </div>
      </section>

      {/* Shop Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Shop the latest.</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
              Discover a curated selection of premium devices and accessories. We only sell products we believe in.
            </p>
            <div className="mt-8">
              <a href="#" className="rounded-full bg-orange-500 px-6 py-3 text-white font-semibold shadow-lg hover:scale-105 transition-transform">
                Shop Now
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXqjTJUuveOdxmKkt9CAPojredgnq0ZGXT05It--OBAfvq3qZFg9fdREV-9XdM6aQNpD9A7aS_k_rQjOKb0gzFQF9fYjjWJVOkiwpVXWTF2j5tZYHYnBIqi-BEPFaDOD6-sFaGqNqo7zWpsPvMBwY5SqfYbUVr05DAltAl2lrG-8x3hr6uR9ZFEwWz52lswl_hqBTJ4-PWJitNqmg2F1C3iG4xDCGg4G3GfcyqhJaPicRFd0nU3JiR06yjFulkgJDbBVtKJFp6aBk"
              alt="Assortment of Apple products on a clean background"
              className="rounded-xl shadow-2xl dark:shadow-orange-300/10"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
