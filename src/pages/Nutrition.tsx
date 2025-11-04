import { Leaf, Utensils, Heart, Book } from "lucide-react";
import Navigation from "@/components/Navigation";
import nutritionHero from "@/assets/nutrition-hero.jpg";

const Nutrition = () => {
  const topics = [
    {
      icon: Leaf,
      title: "Making the Most of Fresh Produce",
      description: "Simple ways to store and prepare fruits and vegetables to keep them fresh longer.",
      color: "bg-primary/10",
    },
    {
      icon: Utensils,
      title: "Budget-Friendly Meal Ideas",
      description: "Nutritious recipes using common ingredients that are easy to find and prepare.",
      color: "bg-accent",
    },
    {
      icon: Heart,
      title: "Nutrition Basics",
      description: "Understanding what your body needs and how to meet those needs with confidence.",
      color: "bg-primary/10",
    },
    {
      icon: Book,
      title: "Food Preservation Tips",
      description: "Learn how to freeze, can, and store food safely to reduce waste and save money.",
      color: "bg-accent",
    },
  ];

  const quickTips = [
    "Freeze ripe bananas for smoothies and baking",
    "Store herbs in water like fresh flowers",
    "Save vegetable scraps for homemade broth",
    "Batch cook grains and beans on weekends",
    "Keep a running list of what you have on hand",
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/10">
        <div className="max-w-lg mx-auto px-6 pt-8 pb-8">
          <img 
            src={nutritionHero}
            alt="Fresh produce"
            className="w-full h-48 object-cover rounded-2xl mb-6 shadow-[var(--shadow-soft)]"
          />
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Nutrition & Wellness
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Knowledge is power. Learn practical ways to nourish yourself and your family with what you have.
          </p>
        </div>
      </div>

      {/* Topics */}
      <div className="max-w-lg mx-auto px-6 mt-6 space-y-4">
        {topics.map((topic, index) => {
          const Icon = topic.icon;
          return (
            <div
              key={index}
              className="card-dignified p-6 cursor-pointer group animate-slide-up-soft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-2xl ${topic.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1.5">
                    {topic.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {topic.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Tips */}
      <div className="max-w-lg mx-auto px-6 mt-8">
        <div className="card-dignified p-6 bg-gradient-to-br from-primary/5 to-accent/10">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Leaf className="w-5 h-5 text-primary" />
            Quick Tips for Today
          </h3>
          <ul className="space-y-3">
            {quickTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Community Section */}
      <div className="max-w-lg mx-auto px-6 mt-6">
        <div className="card-dignified p-6 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Have a tip to share?
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            Your experience and knowledge can help others in our community thrive.
          </p>
          <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
            Share your wisdom →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
