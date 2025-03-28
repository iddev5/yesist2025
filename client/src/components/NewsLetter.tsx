import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Stay Updated with Our Newsletter
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Subscribe to receive the latest news, updates, and tips on climate action.
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-96"
          />
          <Button variant="default" className="px-6 py-3">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;