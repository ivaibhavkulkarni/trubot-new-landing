import React from "react";
import { products } from "../../utils/data";

const Products = () => {
  // show only first 4 products
  const visibleProducts = products.slice(0, 4);

  return (
    <section className="py-16 bg-background-light dark:bg-background-dark h-[80vh]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <h1 className="text-4xl text-text-light dark:text-text-dark mb-12">
          Discover Products & Pricing
        </h1>

        {/* Product Grid (4 items max) */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="group rounded-2xl bg-transparent shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-40 object-contain group-hover:scale-105 transition-transform duration-300"
              />

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 ">
                  {product.name}
                </h3>
                <p className="text-base text-gray-800 mt-1">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Products Button */}
        <div className="mt-12 flex justify-center">
          <button className="block text-center rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 px-5 py-2.5 text-sm text-white shadow-primary-glow hover:scale-105 transition-transform">
            Explore All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
