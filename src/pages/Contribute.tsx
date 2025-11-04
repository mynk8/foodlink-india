import { useState } from "react";
import { Heart, Package, Clock, CheckCircle2, ChevronLeft } from "lucide-react";
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
  const isFood = contributionType === "food";

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
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 animate-slide-up-soft pb-4">
            <div className="card-dignified space-y-6 border-border/60 bg-card/95 p-5 backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="-ml-2 px-2 text-muted-foreground sm:hidden"
                  onClick={() => setContributionType(null)}
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back
                </Button>
                <div className="ml-auto flex items-center gap-2 rounded-full bg-muted/60 px-3 py-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {isFood ? "Food contribution" : "Volunteer shift"}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {isFood ? <Package className="h-5 w-5" /> : <Clock className="h-5 w-5" />}
                </div>
                <div className="flex-1 space-y-1">
                  <h2 className="text-xl font-semibold text-foreground">
                    {isFood ? "Share your food contribution" : "Volunteer opportunity"}
                  </h2>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {isFood
                      ? "Tell us what you have available and we'll coordinate pickup or drop-off details."
                      : "Let us know when you're free so we can match you with the right volunteer shift."}
                  </p>
                </div>
              </div>

              <div className="grid gap-5 sm:gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    Your name (optional)
                  </Label>
                  <Input
                    id="name"
                    autoComplete="name"
                    placeholder="How should we address you?"
                    className="rounded-xl border-border/70 bg-background/80 px-4 py-3 text-base shadow-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-foreground">
                    Contact info
                  </Label>
                  <Input
                    id="contact"
                    type="text"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="Email or phone number"
                    className="rounded-xl border-border/70 bg-background/80 px-4 py-3 text-base shadow-none"
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    We'll reach out only with essential next steps.
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details" className="text-foreground">
                    {isFood ? "What would you like to share?" : "When are you available?"}
                  </Label>
                  <Textarea
                    id="details"
                    placeholder={
                      isFood
                        ? "e.g., Fresh vegetables from my garden, 5 cans of soup, homemade meals..."
                        : "e.g., Weekday mornings, weekends, specific days..."
                    }
                    className="min-h-[140px] rounded-2xl border-border/70 bg-background/80 px-4 py-3 text-base leading-relaxed shadow-none sm:min-h-[120px]"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                type="button"
                variant="outline"
                onClick={() => setContributionType(null)}
                className="hidden w-full rounded-xl sm:inline-flex sm:flex-1"
              >
                Back
              </Button>
              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl bg-primary text-base font-semibold shadow-sm hover:bg-primary/90 sm:flex-1"
              >
                <Heart className="h-5 w-5" />
                Submit
              </Button>
            </div>

            <p className="px-2 text-center text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Your information is kept private and only used to coordinate contributions.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contribute;
