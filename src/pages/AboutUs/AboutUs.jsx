import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark min-h-screen font-sans">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We craft powerful software solutions to help businesses grow, innovate, and succeed in the digital era.
        </p>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-semibold mb-4 text-primary">Our Mission</h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            Our mission is to empower businesses by delivering cutting-edge digital solutions that combine creativity,
            technology, and innovation. We believe in building experiences that truly make a difference.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4 text-primary">Our Vision</h2>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-300">
            We envision a future where technology bridges every gap — making software smarter, businesses faster, and
            people more connected.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-subtle-light dark:bg-subtle-dark">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-8">Meet Our Team</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <img
                src="/assets/team1.jpg"
                alt="Team Member 1"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Vaibhav Kulkarni</h3>
              <p className="text-primary font-medium">Founder & Software Engineer</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                Passionate about crafting seamless web and mobile experiences powered by AI and modern tech stacks.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <img
                src="/assets/team2.jpg"
                alt="Team Member 2"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Aarav Sharma</h3>
              <p className="text-primary font-medium">UI/UX Designer</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                Designs user-centric interfaces that balance functionality and aesthetics.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
              <img
                src="/assets/team3.jpg"
                alt="Team Member 3"
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold">Riya Patel</h3>
              <p className="text-primary font-medium">Frontend Developer</p>
              <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm">
                Builds modern, responsive, and performance-focused interfaces using React and Tailwind.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
