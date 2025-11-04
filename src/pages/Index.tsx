import { Link } from "react-router-dom";
import { MapPin, Heart, BookOpen, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-community.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10 pb-24">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
        <img 
          src={heroImage}
          alt="Community gathering"
          className="w-full h-64 object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3 animate-fade-in-slow">
            Welcome Home
          </h1>
          <p className="text-lg text-muted-foreground max-w-md animate-slide-up-soft">
            Your community is here for you. Find resources, share what you can, and grow together.
          </p>
        </div>
      </div>

      {/* Main Actions */}
      <div className="max-w-lg mx-auto px-6 -mt-8 space-y-4">
        <Link to="/resources">
          <div className="card-dignified p-6 group cursor-pointer bg-gradient-to-br from-card to-accent/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground mb-1.5">
                  Find Resources Nearby
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Discover community kitchens, food pantries, and fresh food access points near you.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/contribute">
          <div className="card-dignified p-6 group cursor-pointer bg-gradient-to-br from-card to-accent/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground mb-1.5">
                  Share & Contribute
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Have surplus food or time to share? Your contribution strengthens our community.
                </p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/nutrition">
          <div className="card-dignified p-6 group cursor-pointer bg-gradient-to-br from-card to-accent/5">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-foreground mb-1.5">
                  Nutrition & Wellness
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Learn about nutrition, recipes, and making the most of what you have.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Community Stats */}
      <div className="max-w-lg mx-auto px-6 mt-8">
        <div className="card-dignified p-6 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">This Week in Our Community</h3>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">1,247</div>
              <div className="text-xs text-muted-foreground mt-1">Meals shared</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">89</div>
              <div className="text-xs text-muted-foreground mt-1">Contributors</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">23</div>
              <div className="text-xs text-muted-foreground mt-1">Locations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
