import { useState } from "react";
import { Heart, Package, Clock, CheckCircle2 } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

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
      <div className="min-h-screen bg-background pb-24 flex items-center justify-center px-6">
        <Navigation />
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
    <div className="min-h-screen bg-background pb-24">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/10 pt-8 pb-6 px-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Share What You Can
          </h1>
          <p className="text-muted-foreground">
            Every contribution, big or small, makes a real difference
          </p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-6 mt-6">
        {!contributionType ? (
          <div className="space-y-4 animate-slide-up-soft">
            <button
              onClick={() => setContributionType("food")}
              className="w-full card-dignified p-6 text-left group cursor-pointer hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Package className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-1.5">
                    Share Surplus Food
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Have extra groceries, a home garden harvest, or prepared meals to share? Let us know what you have.
                  </p>
                </div>
              </div>
            </button>

            <button
              onClick={() => setContributionType("time")}
              className="w-full card-dignified p-6 text-left group cursor-pointer hover:border-primary/30"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-foreground mb-1.5">
                    Volunteer Your Time
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Help with meal prep, delivery, or organization. Any amount of time helps strengthen our community.
                  </p>
                </div>
              </div>
            </button>
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
