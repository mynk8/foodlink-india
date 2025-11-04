import { Home, MapPin, Heart, BookOpen, type LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const MotionLink = motion(Link);

const Navigation = () => {
  const location = useLocation();

  const navItems: Array<{
    icon: LucideIcon;
    label: string;
    path: string;
  }> = [
    { icon: Home, label: "Home", path: "/" },
    { icon: MapPin, label: "Resources", path: "/resources" },
    { icon: Heart, label: "Contribute", path: "/contribute" },
    { icon: BookOpen, label: "Learn", path: "/nutrition" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-bottom">
      <div className="max-w-lg mx-auto px-4 py-3">
        <div className="flex items-center justify-around gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <MotionLink
                key={item.path}
                to={item.path}
                aria-current={isActive ? "page" : undefined}
                layout
                whileTap={{ scale: 0.94 }}
                transition={{ layout: { type: "spring", stiffness: 500, damping: 35 } }}
                className={`relative group flex h-11 items-center overflow-hidden rounded-full px-3 flex-shrink-0 transition-colors duration-300 ${
                  isActive
                    ? "gap-2 justify-start text-primary"
                    : "justify-center text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-pill"
                    className="absolute inset-0 z-0 rounded-full bg-primary/10 shadow-sm"
                    transition={{ type: "spring", stiffness: 500, damping: 38 }}
                  />
                )}
                <motion.span
                  layout="position"
                  className="relative z-10 flex items-center justify-center"
                  animate={{ scale: isActive ? 1.05 : 1 }}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                >
                  <Icon
                    className="h-5 w-5"
                    strokeWidth={isActive ? 0 : 1.6}
                    fill={isActive ? "currentColor" : "none"}
                    style={{ transition: "fill 0.2s ease, stroke-width 0.2s ease" }}
                  />
                </motion.span>
                <AnimatePresence>
                  {isActive && (
                    <motion.span
                      key={item.label}
                      layout="position"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -8 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="relative z-10 text-sm font-medium whitespace-nowrap"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
              </MotionLink>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
