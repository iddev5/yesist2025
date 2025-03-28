import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
          Join the Movement for a Sustainable Future
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-8">
          Take action today to combat climate change and make a difference for future generations.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button variant="default" className="px-6 py-3 text-lg font-semibold">
            Get Involved
          </Button>
          <Button variant="outline" className="px-6 py-3 text-lg font-semibold">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;