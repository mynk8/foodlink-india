import { Link } from "react-router-dom";
import {
  MapPin,
  Heart,
  BookOpen,
  Users,
  ArrowRight,
  Calendar,
  Navigation,
  MessageCircle,
  CalendarCheck,
  PartyPopper,
  Sparkles,
} from "lucide-react";
import heroImage from "@/assets/hero-community.jpg";

const Index = () => {
  const quickActions = [
    {
      label: "Find support",
      description: "Pantries, fridges, kitchens",
      to: "/resources",
      icon: MapPin,
      accent: "from-primary/70 via-primary/60 to-primary/40",
    },
    {
      label: "Offer help",
      description: "Donate meals or time",
      to: "/contribute",
      icon: Heart,
      accent: "from-rose-500 via-rose-400 to-rose-300",
    },
    {
      label: "Wellness studio",
      description: "Guides & nutrition boosts",
      to: "/nutrition",
      icon: BookOpen,
      accent: "from-indigo-500 via-indigo-400 to-indigo-300",
    },
  ];

  const journeySteps = [
    {
      title: "Tap in",
      copy: "Drop your pin, set the vibe, and see who's cooking nearby in seconds.",
      icon: Navigation,
      accent: "from-primary/80 via-primary/60 to-primary/40",
      span: "col-span-2",
    },
    {
      title: "Match up",
      copy: "Chat with hosts or volunteers, then lock in a pickup or drop-off.",
      icon: MessageCircle,
      accent: "from-emerald-500 via-emerald-400 to-emerald-300",
    },
    {
      title: "Track the flow",
      copy: "Get nudges when your order is prepped, on the way, or ready to grab.",
      icon: CalendarCheck,
      accent: "from-indigo-500 via-indigo-400 to-indigo-300",
    },
    {
      title: "Celebrate wins",
      copy: "Save favorite hubs, share gratitude, and keep the good energy moving.",
      icon: PartyPopper,
      accent: "from-rose-500 via-rose-400 to-rose-300",
      span: "col-span-2",
    },
  ];

  const liveMoments = [
    { label: "Meals shared", value: "1,247" },
    { label: "Active neighbors", value: "89" },
    { label: "Open hubs", value: "23" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted/30 text-foreground">
      <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-28 pt-6">
        <main className="flex flex-1 flex-col space-y-8">
          <section className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-primary/10 via-background to-background/60 p-4 shadow-lg shadow-primary/10">
            <div className="absolute right-3 top-3 h-20 w-20 rounded-4xl bg-cover bg-center opacity-70" style={{ backgroundImage: `url(${heroImage})` }} />
            <div className="relative flex flex-col gap-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[11px] font-semibold tracking-wide text-primary">
                <Sparkles className="h-3 w-3" />
                Welcome back, Jordan
              </span>
              <h1 className="max-w-[85%] text-balance text-2xl font-semibold leading-snug">
                Your next meal plan, ready in a tap.
              </h1>
              <p className="max-w-sm text-xs text-muted-foreground">
                Sync up with nearby hubs and volunteers in moments.
              </p>
              <div className="flex items-center gap-2">
                <Link
                  to="/resources"
                  className="inline-flex flex-1 items-center justify-center rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:scale-[1.01]"
                >
                  Explore nearby
                </Link>
                <Link
                  to="/contribute"
                  className="inline-flex items-center justify-center rounded-full border border-primary/20 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wide text-primary transition hover:border-primary hover:bg-primary/5"
                >
                  Pitch in
                </Link>
              </div>
            </div>
          </section>

          <section>
            <p className="text-sm font-semibold text-foreground">Quick actions</p>
            <div className="mt-4 grid gap-3">
              {quickActions.map(({ label, description, icon: Icon, to, accent }) => (
                <Link
                  key={label}
                  to={to}
                  className={`group relative flex items-center justify-between rounded-3xl bg-gradient-to-r ${accent} p-4 text-primary-foreground shadow-md transition hover:scale-[1.01]`}
                >
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-background/20">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold leading-tight">{label}</p>
                      <p className="text-[11px] text-primary-foreground/70">{description}</p>
                    </div>
                  </div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white shadow-sm transition group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </Link>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium uppercase text-muted-foreground">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Users className="h-3.5 w-3.5" />
              </span>
              Live in your circle
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              {liveMoments.map(({ label, value }) => (
                <div key={label} className="rounded-3xl border border-foreground/10 bg-background/80 p-4 shadow-sm">
                  <p className="text-lg font-semibold">{value}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-foreground/10 bg-background/80 p-4 text-sm shadow-sm">
              <div className="flex items-center justify-between text-xs font-semibold uppercase text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Today · 5:30 PM
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-primary">12 slots left</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                Courtyard Collective is prepping fresh produce boxes. Reserve a pickup or request delivery while spots last.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
              Plan your day
            </div>
            <div className="grid grid-cols-2 gap-3">
              {journeySteps.map(({ title, copy, icon: Icon, accent, span }) => (
                <div
                  key={title}
                  className={`group relative flex min-h-[120px] flex-col justify-between rounded-3xl bg-gradient-to-br ${accent} p-4 text-primary-foreground shadow-md shadow-primary/20 transition hover:translate-y-0.5 ${span ?? ""}`}
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-background/20 text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold leading-tight">{title}</p>
                    <p className="text-xs text-primary-foreground/80">{copy}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground/70">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8 rounded-4xl border border-foreground/10 bg-background/80 p-6 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Heart className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Stories from the network</p>
                <p className="text-xs text-muted-foreground">Latasha · Uptown Collective</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              “Feels as smooth as ordering a ride, but with the heart of a neighbor. Every drop-off is scheduled, tracked, and full of warmth.”
            </p>
            <div className="mt-5 flex gap-3">
              <Link
                to="/resources"
                className="flex-1 rounded-full bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground shadow-md transition hover:scale-[1.01]"
              >
                Browse hubs
              </Link>
              <Link
                to="/nutrition"
                className="flex-1 rounded-full border border-primary/20 px-4 py-3 text-center text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/5"
              >
                Wellness tips
              </Link>
            </div>
          </section>
        </main>
      </div>

    </div>
  );
};

export default Index;
