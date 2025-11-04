import { useState } from "react";
import { Search, X } from "lucide-react";
import ResourceCard from "@/components/ResourceCard";
import { Button } from "@/components/ui/button";

const FindResources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

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
    <div className="min-h-screen bg-background">
      
      {/* Header */}
      <div className="bg-gradient-to-br from-primary/5 to-accent/10 pt-8 pb-8 px-6">
        <div className="max-w-lg mx-auto">
          <div className="w-12 h-1 bg-primary rounded-full mb-4"></div>
          <h1 className="text-3xl font-bold text-foreground mb-3">
            Food Resources Near You
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            All locations welcome everyone with open arms
          </p>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="max-w-lg mx-auto px-6 -mt-3 mb-6">
        <div className="relative">
          {/* Main Search Bar - Airbnb Style */}
          <div
            className={`
              relative flex items-center gap-3 bg-card border-2 rounded-full shadow-lg
              transition-all duration-200 ease-out
              ${isSearchFocused || searchQuery 
                ? 'border-primary shadow-xl shadow-primary/10 scale-[1.01]' 
                : 'border-border hover:border-primary/50 hover:shadow-xl'
              }
            `}
          >
            {/* Search Icon */}
            <div className="pl-5 flex-shrink-0">
              <Search className={`w-5 h-5 transition-colors ${
                isSearchFocused || searchQuery 
                  ? 'text-primary' 
                  : 'text-muted-foreground'
              }`} />
            </div>
            
            {/* Search Input */}
            <input
              type="text"
              placeholder="Search by name or type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              className="
                flex-1 h-14 bg-transparent border-0 outline-none
                text-base text-foreground placeholder:text-muted-foreground
                focus:ring-0 focus-visible:ring-0 focus-visible:outline-none
              "
            />
            
            {/* Clear Button */}
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mr-2 p-2 rounded-full hover:bg-muted transition-colors flex-shrink-0"
                aria-label="Clear search"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            )}
            
            {/* Search Button */}
            <Button
              size="lg"
              className="
                mr-2 my-2 h-10 px-6 rounded-full
                bg-primary hover:bg-primary/90
                text-primary-foreground font-medium
                shadow-md hover:shadow-lg
                transition-all duration-200
              "
              onClick={() => {
                // Search is handled by the filter automatically
              }}
            >
              Search
            </Button>
          </div>
          
          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2 mt-4 px-1">
            {["All", "Food Pantry", "Community Kitchen", "Hot Meal Service", "Fresh Produce"].map((filter) => (
              <button
                key={filter}
                onClick={() => setSearchQuery(filter === "All" ? "" : filter)}
                className={`
                  px-4 py-2 rounded-full text-sm font-medium
                  transition-all duration-200
                  ${
                    (filter === "All" && searchQuery === "") || 
                    (filter !== "All" && searchQuery.toLowerCase() === filter.toLowerCase())
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:shadow-sm'
                  }
                `}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Resources List */}
      <div className="max-w-lg mx-auto px-6">
        <div className="grid grid-cols-1 gap-8">
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
