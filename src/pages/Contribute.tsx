import { useState } from "react";
import { Heart, Package, Clock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import shareImage from "@/assets/share.png";
import volunteerImage from "@/assets/volunteer.png";

const ImageOverlayCard = ({ 
  imageUrl,
  title,
  subtitle,
  description,
  onClick,
  className = ""
}: {
  imageUrl: string;
  title: string;
  subtitle?: string;
  description: string;
  onClick?: () => void;
  className?: string;
}) => {
  return (
    <div 
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
      
      {/* Text Content */}
      <div className="relative p-6 h-64 flex flex-col justify-end">
        {subtitle && (
          <p className="text-white/90 text-sm font-medium mb-2 tracking-wide uppercase">
            {subtitle}
          </p>
        )}
        <h3 className="text-white text-2xl font-bold mb-2">
          {title}
        </h3>
        {description && (
          <p className="text-white/80 text-sm leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

const Contribute = () => {
  const [contributionType, setContributionType] = useState<"food" | "time" | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Thank you for your kindness",
      description: "Your contribution has been noted. We'll reach out soon with next steps.",
    });
    
    setTimeout(() => {
      setSubmitted(false);
      setContributionType(null);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center animate-fade-in-slow">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">
            You're all set
          </h2>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Your contribution strengthens our community. Thank you for being here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/10 pt-8 pb-8 px-6">
        <div className="max-w-lg mx-auto">
          <div className="w-12 h-1 bg-primary rounded-full mb-4"></div>
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Share What You Can
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Every contribution, big or small, makes a real difference
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-6 mt-6">
        {!contributionType ? (
          <div className="space-y-4 animate-slide-up-soft">
            <ImageOverlayCard
              imageUrl={shareImage}
              title="Share Surplus Food"
              subtitle="Food Donation"
              description="Have extra groceries, a home garden harvest, or prepared meals to share? Let us know what you have."
              onClick={() => setContributionType("food")}
              className="w-full"
            />

            <ImageOverlayCard
              imageUrl={volunteerImage}
              title="Volunteer Your Time"
              subtitle="Time Contribution"
              description="Help with meal prep, delivery, or organization. Any amount of time helps strengthen our community."
              onClick={() => setContributionType("time")}
              className="w-full"
            />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up-soft">
            <div className="card-dignified p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  {contributionType === "food" ? (
                    <Package className="w-5 h-5 text-primary" />
                  ) : (
                    <Clock className="w-5 h-5 text-primary" />
                  )}
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  {contributionType === "food" ? "Food Contribution" : "Volunteer Opportunity"}
                </h2>
              </div>

              <div className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-foreground mb-2 block">
                    Your name (optional)
                  </Label>
                  <Input
                    id="name"
                    placeholder="How should we address you?"
                    className="bg-background border-muted"
                  />
                </div>

                <div>
                  <Label htmlFor="contact" className="text-foreground mb-2 block">
                    Contact info
                  </Label>
                  <Input
                    id="contact"
                    type="email"
                    placeholder="Email or phone number"
                    className="bg-background border-muted"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="details" className="text-foreground mb-2 block">
                    {contributionType === "food" 
                      ? "What would you like to share?"
                      : "When are you available?"}
                  </Label>
                  <Textarea
                    id="details"
                    placeholder={
                      contributionType === "food"
                        ? "e.g., Fresh vegetables from my garden, 5 cans of soup, homemade meals..."
                        : "e.g., Weekday mornings, weekends, specific days..."
                    }
                    className="bg-background border-muted min-h-[120px]"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setContributionType(null)}
                className="flex-1"
              >
                Back
              </Button>
              <Button type="submit" className="flex-1 bg-primary hover:bg-primary/90">
                <Heart className="w-4 h-4 mr-2" />
                Submit
              </Button>
            </div>

            <p className="text-xs text-center text-muted-foreground leading-relaxed">
              Your information is kept private and only used to coordinate contributions.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contribute;
