import React from "react";
import Plot from "react-plotly.js";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Statistics = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-20">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          Climate Change by the Numbers
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Global Temperature Rise Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-500">
                Global Temperature Rise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Plot
                data={[
                  {
                    x: ["1880", "1920", "1960", "2000", "2020"],
                    y: [0, 0.2, 0.4, 0.8, 1.1],
                    type: "scatter",
                    mode: "lines+markers",
                    marker: { color: "red" },
                  },
                ]}
                layout={{
                  title: "Temperature Rise (°C)",
                  xaxis: { title: "Year" },
                  yaxis: { title: "Temperature Anomaly (°C)" },
                  paper_bgcolor: "transparent",
                  plot_bgcolor: "transparent",
                  font: { color: "#ffffff" },
                  margin: { l: 40, r: 20, t: 40, b: 40 }, // Adjust margins
                }}
                config={{
                  responsive: true,
                  displayModeBar: false, // Disable the mode bar
                }}
                style={{ width: "100%", height: "300px" }}
              />
            </CardContent>
          </Card>

          {/* CO2 Emissions Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-500">
                Global CO2 Emissions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Plot
                data={[
                  {
                    labels: ["Energy", "Industry", "Transport", "Agriculture"],
                    values: [40, 30, 20, 10],
                    type: "pie",
                  },
                ]}
                layout={{
                  title: "CO2 Emissions by Sector",
                  paper_bgcolor: "transparent",
                  plot_bgcolor: "transparent",
                  font: { color: "#ffffff" },
                  margin: { l: 20, r: 20, t: 40, b: 20 }, // Adjust margins
                }}
                config={{
                  responsive: true,
                  displayModeBar: false, // Disable the mode bar
                }}
                style={{ width: "100%", height: "300px" }}
              />
            </CardContent>
          </Card>

          {/* Sea Level Rise Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-500">
                Sea Level Rise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Plot
                data={[
                  {
                    x: ["1900", "1950", "2000", "2020"],
                    y: [0, 50, 150, 200],
                    type: "bar",
                    marker: { color: "blue" },
                  },
                ]}
                layout={{
                  title: "Sea Level Rise (mm)",
                  xaxis: { title: "Year" },
                  yaxis: { title: "Sea Level (mm)" },
                  paper_bgcolor: "transparent",
                  plot_bgcolor: "transparent",
                  font: { color: "#ffffff" },
                  margin: { l: 40, r: 20, t: 40, b: 40 }, // Adjust margins
                }}
                config={{
                  responsive: true,
                  displayModeBar: false, // Disable the mode bar
                }}
                style={{ width: "100%", height: "300px" }}
              />
            </CardContent>
          </Card>

          {/* Deforestation Chart */}
          <Card className="bg-white dark:bg-gray-800 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-green-500">
                Deforestation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Plot
                data={[
                  {
                    x: ["2000", "2005", "2010", "2015", "2020"],
                    y: [16, 14, 12, 10, 8],
                    type: "scatter",
                    mode: "lines+markers",
                    marker: { color: "green" },
                  },
                ]}
                layout={{
                  title: "Forest Area Lost (Million Hectares)",
                  xaxis: { title: "Year" },
                  yaxis: { title: "Forest Area (Mha)" },
                  paper_bgcolor: "transparent",
                  plot_bgcolor: "transparent",
                  font: { color: "#ffffff" },
                  margin: { l: 40, r: 20, t: 40, b: 40 }, // Adjust margins
                }}
                config={{
                  responsive: true,
                  displayModeBar: false, // Disable the mode bar
                }}
                style={{ width: "100%", height: "300px" }}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Statistics;