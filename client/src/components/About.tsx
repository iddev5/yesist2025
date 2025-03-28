const About = () => {
    return (
      <section id="about" className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            About Us
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-400 mb-12">
            At ClimateAction, we are committed to empowering individuals and communities to take meaningful steps toward a sustainable future. Our mission is to raise awareness, inspire action, and foster collaboration to combat climate change.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-500 mb-4">Our Mission</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                To inspire and empower individuals to take action against climate change through education, innovation, and community-driven initiatives.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-500 mb-4">Our Vision</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                A world where every individual contributes to a sustainable and environmentally conscious future.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-green-500 mb-4">Our Values</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Collaboration, innovation, and sustainability are at the core of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;