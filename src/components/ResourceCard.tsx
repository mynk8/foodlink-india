import { MapPin, Clock, Phone, Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface ResourceCardProps {
  slug: string;
  name: string;
  type: string;
  address: string;
  hours: string;
  phone?: string;
  distance?: string;
}

const ResourceCard = ({ slug, name, type, address, hours, phone, distance }: ResourceCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Link
      to={`/resources/${slug}`}
      className="group block cursor-pointer animate-slide-up-soft focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/40 rounded-3xl"
    >
      {/* Google Maps Embed - Airbnb Style */}
      <div className="relative w-full aspect-[4/3] mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/20">
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Map for ${name}`}
          className="absolute inset-0"
        />
        
        {/* Like Button - Airbnb Style */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:bg-white transition-all duration-200 hover:scale-110 z-10"
          aria-label="Save resource"
        >
          <Heart
            className={`w-4 h-4 transition-all duration-200 ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-700"
            }`}
          />
        </button>

        {/* Distance Badge */}
        {distance && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-sm shadow-md z-10">
            <span className="text-xs font-semibold text-foreground">{distance} away</span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="px-1">
        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground mb-1 line-clamp-1 group-hover:text-primary transition-colors duration-200">
              {name}
            </h3>
            <p className="text-sm text-muted-foreground font-medium">{type}</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="space-y-2.5 mb-3">
          <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/70" />
            <span className="leading-relaxed line-clamp-1">{address}</span>
          </div>

          <div className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary/70" />
            <span className="leading-relaxed line-clamp-2">{hours}</span>
          </div>

          {phone && (
            <div className="flex items-center gap-2.5 text-sm">
              <Phone className="w-4 h-4 flex-shrink-0 text-primary/70" />
              <a
                href={`tel:${phone}`}
                className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
              >
                {phone}
              </a>
            </div>
          )}
        </div>

        {/* Hover Effect Indicator */}
        <div className="flex items-center gap-1 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span>View details</span>
          <span className="text-primary">→</span>
        </div>
      </div>
    </Link>
  );
};

export default ResourceCard;
