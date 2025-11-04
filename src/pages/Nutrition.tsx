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
      <div className="max-w-lg mx-auto px-6 mt-6">
        <div className="grid grid-cols-1 gap-6">
          {topics.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <div
                key={index}
                className="group cursor-pointer animate-slide-up-soft"
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  transitionDelay: `${index * 0.2}s`
                }}
              >
                <div 
                  className="bg-card rounded-2xl p-6 hover:-translate-y-1"
                  style={{
                    transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  }}
                >
                  <div className="flex items-start gap-5">
                    <div 
                      className={`w-14 h-14 rounded-2xl ${topic.color} flex items-center justify-center group-hover:scale-110 flex-shrink-0`}
                      style={{
                        transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transitionDelay: `${index * 0.2}s`
                      }}
                    >
                      <Icon className="w-7 h-7" style={{ color: topic.iconColor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 
                        className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary"
                        style={{
                          transition: 'color 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          transitionDelay: `${index * 0.2}s`
                        }}
                      >
                        {topic.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {topic.description}
                      </p>
                      <div 
                        className="flex items-center gap-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100"
                        style={{
                          transition: 'opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                          transitionDelay: `${index * 0.2}s`
                        }}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3 h-3 text-primary" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
