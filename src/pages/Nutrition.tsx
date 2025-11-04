import { Leaf, Utensils, Heart, Book, ArrowRight } from "lucide-react";

const Nutrition = () => {
  const topics = [
    {
      icon: Leaf,
      title: "Making the Most of Fresh Produce",
      description: "Simple ways to store and prepare fruits and vegetables to keep them fresh longer.",
      color: "bg-primary/10",
      iconColor: "hsl(155, 40%, 45%)", // Brighter sage green
    },
    {
      icon: Utensils,
      title: "Budget-Friendly Meal Ideas",
      description: "Nutritious recipes using common ingredients that are easy to find and prepare.",
      color: "bg-accent",
      iconColor: "hsl(15, 65%, 55%)", // Warm coral/orange
    },
    {
      icon: Heart,
      title: "Nutrition Basics",
      description: "Understanding what your body needs and how to meet those needs with confidence.",
      color: "bg-primary/10",
      iconColor: "hsl(350, 60%, 60%)", // Warm rose/pink
    },
    {
      icon: Book,
      title: "Food Preservation Tips",
      description: "Learn how to freeze, can, and store food safely to reduce waste and save money.",
      color: "bg-accent",
      iconColor: "hsl(40, 70%, 55%)", // Warm amber/yellow
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
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/10 pt-8 pb-8 px-6">
        <div className="max-w-lg mx-auto">
          <div className="w-12 h-1 bg-primary rounded-full mb-4"></div>
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Nutrition & Wellness
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Knowledge is power. Learn practical ways to nourish yourself and your family with what you have.
          </p>
        </div>
      </div>

      {/* Topics */}
      <div className="max-w-xl mx-auto px-4 mt-6">
        <div className="flex flex-col gap-3">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <article
                key={index}
                className="rounded-xl border border-foreground/10 bg-card/90 p-4 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${topic.color}`}
                  >
                    <Icon className="h-5 w-5" style={{ color: topic.iconColor }} />
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-semibold text-foreground">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {topic.description}
                    </p>
                  </div>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground" />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Quick Tips */}
      <div className="max-w-lg mx-auto px-6 mt-8">
        <div 
          className="bg-card rounded-2xl p-6 bg-gradient-to-br from-primary/5 to-accent/10"
          style={{
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <h3 className="text-lg font-semibold text-foreground mb-5 flex items-center gap-2">
            <Leaf className="w-5 h-5" style={{ color: "hsl(155, 40%, 45%)" }} />
            Quick Tips for Today
          </h3>
          <ul className="space-y-3.5">
            {quickTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-3 text-sm">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground leading-relaxed">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Community Section */}
      <div className="max-w-lg mx-auto px-6 mt-6 mb-8">
        <div 
          className="bg-card rounded-2xl p-6 text-center cursor-pointer group"
          style={{
            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          <h3 
            className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary"
            style={{
              transition: 'color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            Have a tip to share?
          </h3>
          <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
            Your experience and knowledge can help others in our community thrive.
          </p>
          <button 
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 group-hover:gap-3"
            style={{
              transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <span>Share your wisdom</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
