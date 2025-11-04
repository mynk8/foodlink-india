import { useState } from "react";
import { Search, Filter, MapPin } from "lucide-react";
import Navigation from "@/components/Navigation";
import ResourceCard from "@/components/ResourceCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FindResources = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const resources = [
    {
      name: "Sunshine Community Kitchen",
      type: "Community Kitchen",
      address: "245 Oak Street, Downtown",
      hours: "Mon-Fri: 11:30am - 1:30pm, 5:00pm - 7:00pm",
      phone: "(555) 123-4567",
      distance: "0.3 mi",
    },
    {
      name: "Harvest Food Pantry",
      type: "Food Pantry",
      address: "892 Maple Avenue, Riverside",
      hours: "Tue & Thu: 9:00am - 4:00pm, Sat: 10:00am - 2:00pm",
      phone: "(555) 234-5678",
      distance: "0.8 mi",
    },
    {
      name: "Green Market Community Share",
      type: "Fresh Produce Distribution",
      address: "1523 Pine Boulevard, Westside",
      hours: "Wed & Fri: 3:00pm - 6:00pm",
      distance: "1.2 mi",
    },
    {
      name: "Neighborhood Meals Program",
      type: "Hot Meal Service",
      address: "67 Elm Street, Central",
      hours: "Daily: 12:00pm - 1:00pm, 6:00pm - 7:00pm",
      phone: "(555) 345-6789",
      distance: "1.5 mi",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navigation />
      
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/10 pt-8 pb-6 px-6">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Food Resources Near You
          </h1>
          <p className="text-muted-foreground">
            All locations welcome everyone with open arms
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="max-w-lg mx-auto px-6 -mt-3 mb-6">
        <div className="card-dignified p-4 bg-card">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by name or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 border-muted bg-background"
              />
            </div>
            <Button variant="outline" size="icon" className="flex-shrink-0">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Map View Teaser */}
      <div className="max-w-lg mx-auto px-6 mb-6">
        <div className="relative h-48 rounded-2xl overflow-hidden card-dignified bg-accent/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Map view coming soon</p>
            </div>
          </div>
        </div>
      </div>

      {/* Resources List */}
      <div className="max-w-lg mx-auto px-6 space-y-4">
        {resources
          .filter(
            (resource) =>
              searchQuery === "" ||
              resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              resource.type.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
      </div>

      {/* Empty State */}
      {resources.filter(
        (resource) =>
          searchQuery === "" ||
          resource.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          resource.type.toLowerCase().includes(searchQuery.toLowerCase())
      ).length === 0 && (
        <div className="max-w-lg mx-auto px-6 text-center py-12">
          <p className="text-muted-foreground">
            No resources found matching "{searchQuery}"
          </p>
        </div>
      )}
    </div>
  );
};

export default FindResources;
