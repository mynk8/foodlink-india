import { MapPin, Clock, Phone } from "lucide-react";

interface ResourceCardProps {
  name: string;
  type: string;
  address: string;
  hours: string;
  phone?: string;
  distance?: string;
}

const ResourceCard = ({ name, type, address, hours, phone, distance }: ResourceCardProps) => {
  return (
    <div className="card-dignified p-5 animate-slide-up-soft">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-foreground text-lg mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground font-medium">{type}</p>
        </div>
        {distance && (
          <span className="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-full font-medium">
            {distance}
          </span>
        )}
      </div>
      
      <div className="space-y-2.5 text-sm">
        <div className="flex items-start gap-2 text-muted-foreground">
          <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
          <span>{address}</span>
        </div>
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4 flex-shrink-0 text-primary" />
          <span>{hours}</span>
        </div>
        
        {phone && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
            <a href={`tel:${phone}`} className="hover:text-primary transition-colors">
              {phone}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResourceCard;
