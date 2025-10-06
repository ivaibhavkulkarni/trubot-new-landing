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
    </main>
  );
};

export default HeroSection;

