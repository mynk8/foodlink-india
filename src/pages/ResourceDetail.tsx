import {
  ArrowLeft,
  Calendar,
  Clock,
  ExternalLink,
  HeartHandshake,
  Info,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Tag,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { resourceIndex } from "@/data/resources";

const ResourceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const resource = slug ? resourceIndex[slug] : undefined;

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      <div className="relative h-[320px] sm:h-[360px] md:h-[420px]">
        <img
          src={resource.heroImage}
          alt={resource.name}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

        <div className="absolute inset-x-0 top-6 px-6">
          <div className="mx-auto flex max-w-5xl items-center justify-between">
            <Link
              to="/resources"
              className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-foreground shadow-md transition hover:bg-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to partner map
            </Link>

            <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-muted-foreground shadow-md">
              <ShieldCheck className="h-4 w-4 text-primary" />
              Verified partner
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 w-full -translate-x-1/2 px-6">
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center text-balance">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-primary shadow-sm">
              Waste-to-Plate · {resource.location.neighborhood}
            </span>
            <h1 className="text-3xl font-semibold text-background sm:text-4xl md:text-5xl">
              {resource.name}
            </h1>
            <p className="mt-4 max-w-2xl text-sm text-background/90 sm:text-base">
              {resource.summary}
            </p>
            <p className="mt-3 text-xs font-semibold uppercase tracking-[0.3em] text-background/80">
              Surplus shared with dignity · calm, trusted distribution
            </p>
          </div>
        </div>
      </div>

      <div className="-mt-12 px-6 sm:-mt-16">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
          <section className="rounded-3xl border border-border/60 bg-card/95 p-6 shadow-xl backdrop-blur-sm sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                Verified surplus partner
              </div>
              {resource.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {resource.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground/80">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-2">
                <HeartHandshake className="h-4 w-4 text-primary" />
                Hospitality partners redirecting abundance
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-2">
                <Leaf className="h-4 w-4 text-primary" />
                Sustainable, low-waste nourishment
              </span>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-10">
              <section className="rounded-3xl border border-border/60 bg-card/95 p-6 shadow-lg sm:p-8">
                <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                  Why Neighbors Feel Welcome
                </h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {resource.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 rounded-2xl border border-border/50 bg-muted/40 p-4"
                    >
                      <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-3xl border border-border/60 bg-card/95 p-6 shadow-lg sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                    Community Support Programs
                  </h2>
                  <Calendar className="hidden h-6 w-6 text-primary sm:block" />
                </div>
                <div className="mt-6 space-y-4">
                  {resource.programs.map((program) => (
                    <div
                      key={program.title}
                      className="rounded-3xl border border-border/40 bg-background/70 p-5 shadow-sm"
                    >
                      <h3 className="text-lg font-semibold text-foreground">
                        {program.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {program.description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <Clock className="h-4 w-4" />
                        {program.schedule}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="group rounded-3xl border border-border/60 bg-card/95 p-6 shadow-lg sm:p-8">
                <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                  Space Preview
                </h2>
                <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {resource.gallery.map((image, index) => (
                    <div
                      key={image}
                      className={`relative overflow-hidden rounded-2xl bg-muted/50 ${
                        index === 0 ? "col-span-2 sm:col-span-3 h-48" : "h-32"
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${resource.name} gallery ${index + 1}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-border/60 bg-card/95 p-6 shadow-lg sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                    Food Support Offerings
                  </h2>
                </div>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {resource.meals.map((meal) => (
                    <li
                      key={meal}
                      className="rounded-2xl border border-border/40 bg-background/70 px-4 py-3 text-sm font-medium text-muted-foreground"
                    >
                      {meal}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-3xl border border-border/60 bg-card/95 p-6 shadow-lg sm:p-8">
                <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                  Comfort Amenities
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Thoughtful touches that help every guest feel grounded and welcomed.
                </p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {resource.amenities.map((amenity) => (
                    <li
                      key={amenity}
                      className="rounded-2xl border border-border/40 bg-background/70 px-4 py-3 text-sm font-medium text-muted-foreground"
                    >
                      {amenity}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-3xl border border-border/60 bg-card/95 p-6 shadow-lg sm:p-8">
                <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                  Community Voices
                </h2>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {resource.testimonials.map((testimonial) => (
                    <figure
                      key={testimonial.name}
                      className="rounded-3xl border border-border/40 bg-background/70 p-5 shadow-sm"
                    >
                      <blockquote className="text-sm italic text-muted-foreground">
                        “{testimonial.quote}”
                      </blockquote>
                      <figcaption className="mt-4 text-xs font-semibold uppercase tracking-wide text-primary">
                        {testimonial.name} · {testimonial.context}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-border/60 bg-card/95 p-6 shadow-lg sm:p-8">
                <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
                  Visit Guidance
                </h2>
                <ul className="mt-4 space-y-3">
                  {resource.tips.map((tip) => (
                    <li
                      key={tip}
                      className="rounded-2xl border border-border/40 bg-background/70 px-4 py-3 text-sm text-muted-foreground"
                    >
                      {tip}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            <aside className="flex flex-col gap-6 lg:sticky lg:top-28">
              <div className="rounded-3xl border border-border/60 bg-card/95 p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-foreground">Plan Your Visit</h2>

                <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <Clock className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Service Hours</p>
                      <p>{resource.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                    <div>
                      <p className="font-semibold text-foreground">Location</p>
                      <p>{resource.location.address}</p>
                      {resource.location.directions && (
                        <p className="mt-1 text-xs text-muted-foreground/80">
                          {resource.location.directions}
                        </p>
                      )}
                      {resource.distance && (
                        <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          Nearby · {resource.distance}
                        </p>
                      )}
                    </div>
                  </div>

                  {resource.contact.phone && (
                    <a
                      className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3 font-medium text-foreground transition hover:border-primary hover:bg-primary/10"
                      href={`tel:${resource.contact.phone}`}
                    >
                      <Phone className="h-4 w-4 text-primary" />
                      {resource.contact.phone}
                    </a>
                  )}

                  {resource.contact.email && (
                    <a
                      className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-sm font-medium text-foreground transition hover:border-primary hover:bg-primary/10"
                      href={`mailto:${resource.contact.email}`}
                    >
                      <Mail className="h-4 w-4 text-primary" />
                      {resource.contact.email}
                    </a>
                  )}

                  {resource.contact.website && (
                    <a
                      className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-sm font-semibold text-primary transition hover:border-primary hover:bg-primary/10"
                      href={resource.contact.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Visit website
                    </a>
                  )}
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-border/60 shadow-lg">
                <iframe
                  title={`Map for ${resource.name}`}
                  src={`https://maps.google.com/maps?q=${resource.location.lat},${resource.location.lng}&z=15&output=embed`}
                  className="h-64 w-full"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="rounded-3xl border border-border/60 bg-card/95 p-6 shadow-lg">
                <h2 className="text-lg font-semibold text-foreground">Volunteer Impact</h2>
                <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
                  Gentle hospitality in action
                </p>
                <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                  {resource.volunteerOpportunities.map((opportunity) => (
                    <li
                      key={opportunity}
                      className="rounded-2xl border border-border/50 bg-background/70 px-4 py-3"
                    >
                      {opportunity}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceDetail;


