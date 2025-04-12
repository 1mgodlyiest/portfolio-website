import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, LineChart, PieChart } from "@/components/ui/chart"

export function VisualizationsSection() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2">Data Visualizations</h2>
        <p className="text-muted-foreground">Interactive data visualizations and analytics projects.</p>
      </div>

      <Tabs defaultValue="chart1">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="chart1">User Engagement</TabsTrigger>
          <TabsTrigger value="chart2">Revenue Growth</TabsTrigger>
          <TabsTrigger value="chart3">Market Segments</TabsTrigger>
        </TabsList>

        <TabsContent value="chart1">
          <Card>
            <CardHeader>
              <CardTitle>User Engagement Metrics</CardTitle>
              <CardDescription>Monthly active users and session duration over time</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <LineChart
                data={[
                  { name: "Jan", "Active Users": 2500, "Session Duration": 45 },
                  { name: "Feb", "Active Users": 3000, "Session Duration": 52 },
                  { name: "Mar", "Active Users": 3200, "Session Duration": 55 },
                  { name: "Apr", "Active Users": 3800, "Session Duration": 58 },
                  { name: "May", "Active Users": 4200, "Session Duration": 62 },
                  { name: "Jun", "Active Users": 4800, "Session Duration": 65 },
                  { name: "Jul", "Active Users": 5500, "Session Duration": 68 },
                  { name: "Aug", "Active Users": 6000, "Session Duration": 72 },
                  { name: "Sep", "Active Users": 6300, "Session Duration": 75 },
                  { name: "Oct", "Active Users": 6800, "Session Duration": 78 },
                  { name: "Nov", "Active Users": 7200, "Session Duration": 81 },
                  { name: "Dec", "Active Users": 7800, "Session Duration": 85 },
                ]}
                index="name"
                categories={["Active Users", "Session Duration"]}
                colors={["blue", "green"]}
                valueFormatter={(value) => `${value.toLocaleString()}`}
                yAxisWidth={60}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chart2">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Growth</CardTitle>
              <CardDescription>Quarterly revenue by product category</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px]">
              <BarChart
                data={[
                  { quarter: "Q1 2023", "Product A": 45000, "Product B": 32000, "Product C": 18000 },
                  { quarter: "Q2 2023", "Product A": 52000, "Product B": 38000, "Product C": 24000 },
                  { quarter: "Q3 2023", "Product A": 61000, "Product B": 42000, "Product C": 30000 },
                  { quarter: "Q4 2023", "Product A": 78000, "Product B": 50000, "Product C": 36000 },
                  { quarter: "Q1 2024", "Product A": 82000, "Product B": 54000, "Product C": 42000 },
                  { quarter: "Q2 2024", "Product A": 91000, "Product B": 60000, "Product C": 48000 },
                ]}
                index="quarter"
                categories={["Product A", "Product B", "Product C"]}
                colors={["violet", "indigo", "purple"]}
                valueFormatter={(value) => `$${value.toLocaleString()}`}
                yAxisWidth={80}
              />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="chart3">
          <Card>
            <CardHeader>
              <CardTitle>Market Segments</CardTitle>
              <CardDescription>Distribution of customers by industry</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <div className="w-[350px]">
                <PieChart
                  data={[
                    { name: "Technology", value: 35 },
                    { name: "Healthcare", value: 20 },
                    { name: "Finance", value: 18 },
                    { name: "Education", value: 12 },
                    { name: "Retail", value: 10 },
                    { name: "Other", value: 5 },
                  ]}
                  index="name"
                  category="value"
                  valueFormatter={(value) => `${value}%`}
                  colors={["blue", "cyan", "teal", "green", "lime", "yellow"]}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
