import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/card';
import climateLogo from "../assets/climate.svg";


const Hero = () => {
  return (
    <section id='home' className="relative bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-15 dark:from-gray-800 dark:via-gray-900 dark:to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between space-y-10 lg:space-y-0">
        {/* Text Content */}
        <Card className="w-full lg:w-1/2 bg-opacity-80 backdrop-blur-md shadow-lg dark:bg-gray-800 dark:text-gray-100">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-center lg:text-left">
              Empowering Youth for a Sustainable Future
            </CardTitle>
            <CardDescription className="mt-4 text-base sm:text-lg lg:text-xl text-gray-200 dark:text-gray-400 text-center lg:text-left">
              Climate change is one of the greatest challenges of our time. Together, we can inspire young minds to take action through awareness, motivation, and community-driven initiatives.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mt-6 flex justify-center lg:justify-start">
              <Button variant="default" className="px-6 py-3 text-base sm:text-lg font-semibold bg-white text-black hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
                Join the Movement
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={climateLogo}
            alt="Climate Action"
            className="w-3/4 sm:w-2/3 lg:w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Quotes Section */}
      <div className="mt-16 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          "The Earth is what we all have in common." – Wendell Berry
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 dark:text-gray-400">
          "We do not inherit the Earth from our ancestors, we borrow it from our children." – Native American Proverb
        </p>
      </div>

      {/* Grid Section */}
      <div className="mt-16 container mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8">
          Global Challenges We Face
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/115969525/photo/deforestation.jpg?s=612x612&w=0&k=20&c=1hZLqEboqFyVgFDzvyQyHYdFnRDA161h0KoPZYXoLWo="
              alt="Deforestation"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
              Deforestation
            </div>
          </div>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1141520118/photo/ecological-catastrophy.jpg?s=612x612&w=0&k=20&c=hPbX_vmideFRGfEeOKQhusIrlmc31H2G9pPlT3yTCEw="
              alt="Pollution"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
              Pollution
            </div>
          </div>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/1061549950/photo/calving-glacier-alaska-hubbard-glacier-a-huge-iceberg-calves-into-disenchantment-bay-st-elias.jpg?s=612x612&w=0&k=20&c=ri7A1uiTq5PI5iSxzmt22oAAOtrizXffP4JvA6nFTf4="
              alt="Melting Ice Caps"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
              Melting Ice Caps
            </div>
          </div>
          <div className="relative">
            <img
              src="https://media.istockphoto.com/id/157478613/photo/forest-fire.jpg?s=612x612&w=0&k=20&c=Msdq1JFokyn2jOXs07Ff8mPYblnAz-g7lvxl71OSw3s="
              alt="Wildfires"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black/30 bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
              Wildfires
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-green-300 rounded-full blur-3xl opacity-50 dark:bg-green-700"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 sm:w-48 sm:h-48 bg-blue-400 rounded-full blur-3xl opacity-50 dark:bg-blue-700"></div>
    </section>
  );
};

export default Hero;