import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CommunityEngagement = () => {
  const initiatives = [
    {
      title: "Tree Planting Drive",
      description: "Join us in planting trees to restore our planet's green cover.",
      date: "April 22, 2025",
    },
    {
      title: "Beach Cleanup",
      description: "Help us clean up our beaches and protect marine life.",
      date: "May 15, 2025",
    },
    {
      title: "Sustainability Workshop",
      description: "Learn sustainable practices to reduce your carbon footprint.",
      date: "June 10, 2025",
    },
    {
      title: "Community Recycling Program",
      description: "Participate in our recycling initiative to reduce waste.",
      date: "July 5, 2025",
    },
  ];

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          Community Engagement
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-green-500">
                  {initiative.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {initiative.description}
                </p>
                <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                  Date: {initiative.date}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityEngagement;