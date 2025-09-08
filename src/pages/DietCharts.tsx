import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChefHat, Clock, Leaf, Flame, User } from "lucide-react";

const DietCharts = () => {
  const demoDietChart = {
    patientName: "Rajesh Kumar",
    dosha: "Pitta-Kapha",
    season: "Summer",
    meals: [
      {
        time: "Breakfast (7:00 AM)",
        items: [
          { name: "Oats Porridge", quantity: "1 bowl (150g)", rasa: "Madhura", virya: "Shita", dosha: "Pacifies Pitta" },
          { name: "Coconut Water", quantity: "1 glass (200ml)", rasa: "Madhura", virya: "Shita", dosha: "Pacifies Pitta" },
          { name: "Almonds (soaked)", quantity: "5 pieces", rasa: "Madhura", virya: "Ushna", dosha: "Balances Vata" },
        ]
      },
      {
        time: "Lunch (12:30 PM)",
        items: [
          { name: "Brown Rice", quantity: "1 cup (180g)", rasa: "Madhura", virya: "Shita", dosha: "Pacifies Pitta" },
          { name: "Dal (Moong)", quantity: "1 bowl (100g)", rasa: "Madhura, Kashaya", virya: "Shita", dosha: "Tridosha Balancing" },
          { name: "Cucumber Salad", quantity: "1 bowl (80g)", rasa: "Madhura", virya: "Shita", dosha: "Pacifies Pitta" },
          { name: "Coriander Chutney", quantity: "2 tbsp", rasa: "Tikta", virya: "Shita", dosha: "Pacifies Pitta" },
        ]
      },
      {
        time: "Dinner (7:00 PM)",
        items: [
          { name: "Quinoa Khichdi", quantity: "1 bowl (150g)", rasa: "Madhura", virya: "Shita", dosha: "Pacifies Pitta-Kapha" },
          { name: "Steamed Vegetables", quantity: "1 cup (120g)", rasa: "Madhura, Tikta", virya: "Shita", dosha: "Pacifies Pitta" },
          { name: "Buttermilk", quantity: "1 glass (150ml)", rasa: "Amla, Madhura", virya: "Shita", dosha: "Pacifies Pitta" },
        ]
      }
    ],
    nutritionalBreakdown: {
      calories: 1650,
      protein: 65,
      carbs: 210,
      fat: 55,
      fiber: 35
    },
    ayurvedicPrinciples: [
      { principle: "Rasa Balance", description: "Madhura (Sweet) dominant to pacify Pitta", status: "optimal" },
      { principle: "Virya Effect", description: "Shita (Cooling) foods for summer season", status: "good" },
      { principle: "Dosha Harmony", description: "Specifically designed for Pitta-Kapha constitution", status: "excellent" },
      { principle: "Agni Support", description: "Light, easily digestible foods to maintain digestive fire", status: "good" },
    ]
  };

  const getRasaColor = (rasa: string) => {
    const rasaColors: { [key: string]: string } = {
      "Madhura": "bg-emerald-100 text-emerald-800",
      "Amla": "bg-yellow-100 text-yellow-800",
      "Lavana": "bg-blue-100 text-blue-800",
      "Katu": "bg-red-100 text-red-800",
      "Tikta": "bg-green-100 text-green-800",
      "Kashaya": "bg-purple-100 text-purple-800"
    };
    return rasaColors[rasa] || "bg-gray-100 text-gray-800";
  };

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      "excellent": "bg-green-500",
      "good": "bg-blue-500",
      "optimal": "bg-emerald-500",
      "needs improvement": "bg-yellow-500"
    };
    return colors[status] || "bg-gray-500";
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Diet Charts</h1>
            <p className="text-muted-foreground">Personalized Ayurvedic diet recommendations with nutritional analysis.</p>
          </div>
          <Button className="flex items-center gap-2">
            <ChefHat className="h-4 w-4" />
            Generate New Chart
          </Button>
        </div>
        
        {/* Patient Info Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5 text-primary" />
              Patient: {demoDietChart.patientName}
            </CardTitle>
            <CardDescription className="flex items-center gap-4">
              <Badge variant="outline">Constitution: {demoDietChart.dosha}</Badge>
              <Badge variant="outline">Season: {demoDietChart.season}</Badge>
              <Badge variant="outline">Generated: Today</Badge>
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Meal Plan */}
        <div className="grid gap-6">
          {demoDietChart.meals.map((meal, mealIndex) => (
            <Card key={mealIndex}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-4 w-4 text-primary" />
                  {meal.time}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {meal.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between p-4 bg-card border rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.quantity}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.rasa.split(', ').map((rasa, rasaIndex) => (
                          <Badge key={rasaIndex} className={getRasaColor(rasa)} variant="secondary">
                            {rasa}
                          </Badge>
                        ))}
                        <Badge variant="outline" className="text-xs">
                          {item.virya}
                        </Badge>
                        <Badge variant="outline" className="text-xs bg-sage-50 text-sage-700">
                          {item.dosha}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nutritional Breakdown */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" />
                Nutritional Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Calories</span>
                  <span className="text-sm">{demoDietChart.nutritionalBreakdown.calories} kcal</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Protein</span>
                  <span className="text-sm">{demoDietChart.nutritionalBreakdown.protein}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Carbohydrates</span>
                  <span className="text-sm">{demoDietChart.nutritionalBreakdown.carbs}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Fat</span>
                  <span className="text-sm">{demoDietChart.nutritionalBreakdown.fat}g</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Fiber</span>
                  <span className="text-sm">{demoDietChart.nutritionalBreakdown.fiber}g</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                Ayurvedic Principles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {demoDietChart.ayurvedicPrinciples.map((principle, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{principle.principle}</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getStatusColor(principle.status)}`}></div>
                      <span className="text-xs capitalize text-muted-foreground">{principle.status}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">{principle.description}</p>
                  <Progress 
                    value={principle.status === 'excellent' ? 100 : principle.status === 'good' ? 80 : principle.status === 'optimal' ? 95 : 60} 
                    className="h-1" 
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          <Button variant="outline">Edit Diet Chart</Button>
          <Button variant="outline">Download PDF</Button>
          <Button variant="outline">Send to Patient</Button>
          <Button>Save Chart</Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DietCharts;