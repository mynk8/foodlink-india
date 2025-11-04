import { Link } from "react-router-dom";
import { MapPin, Heart, BookOpen, Users } from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/10">

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
        <img
          src={heroImage}
          alt="Community gathering"
          className="w-full h-48 object-cover opacity-30 inset-3 backdrop-filter blur-md"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-3 animate-fade-in-slow">
            Welcome Home
          </h1>
          <p className="text-lg text-muted-foreground max-w-md animate-slide-up-soft">
            Your community is here for you. Find resources, share what you can,
            and grow together.
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-6 mt-8 -mb-1">
        <div className="card-dignified p-6 bg-gradient-to-br from-primary/5 to-accent/10">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-primary" />
            <h3 className="font-semibold text-foreground">
              This Week in Our Community
            </h3>
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">1,247</div>
              <div className="text-xs text-muted-foreground mt-1">
                Meals shared
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">89</div>
              <div className="text-xs text-muted-foreground mt-1">
                Contributors
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">23</div>
              <div className="text-xs text-muted-foreground mt-1">
                Locations
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Actions - Bento Grid */}
      <div className="max-w-5xl mx-auto mt-8 px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          <Link to="/resources" className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
            <div className="h-full p-6 group cursor-pointer bg-gradient-to-br from-primary/12 via-primary/8 to-primary/10 rounded-2xl transition-all duration-300 hover:shadow-[var(--shadow-gentle)] relative overflow-hidden border border-primary/20 hover:border-primary/30 hover:scale-[1.01] flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h2 className="text-xl font-semibold text-foreground relative w-full group-hover:text-primary transition-colors duration-300 mb-2">
                  Find Resources Nearby
                </h2>
                <p className="text-sm text-muted-foreground">
                  Discover food banks, community kitchens, and local support services in your area
                </p>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
            </div>
          </Link>

          <Link to="/contribute" className="sm:col-span-2 lg:col-span-2 lg:row-span-1">
            <div className="h-full p-6 group cursor-pointer bg-gradient-to-br from-primary/12 via-primary/8 to-primary/10 rounded-2xl transition-all duration-300 hover:shadow-[var(--shadow-gentle)] relative overflow-hidden border border-primary/20 hover:border-primary/30 hover:scale-[1.01] flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <Heart className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground relative w-full group-hover:text-primary transition-colors duration-300">
                  Share & Contribute
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Give back to your community
                </p>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
            </div>
          </Link>

          <Link to="/nutrition" className="sm:col-span-2 lg:col-span-2 lg:row-span-1">
            <div className="h-full p-6 group cursor-pointer bg-gradient-to-br from-primary/12 via-primary/8 to-primary/10 rounded-2xl transition-all duration-300 hover:shadow-[var(--shadow-gentle)] relative overflow-hidden border border-primary/20 hover:border-primary/30 hover:scale-[1.01] flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                <BookOpen className="w-7 h-7 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-foreground relative w-full group-hover:text-primary transition-colors duration-300">
                  Nutrition & Wellness
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  Learn about healthy eating and wellness
                </p>
              </div>
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary rounded-full transition-all duration-300 group-hover:w-full"></span>
            </div>
          </Link>
        </div>
      </div>

      {/* Community Stats */}
      
    </div>
  );
};

export default Index;
