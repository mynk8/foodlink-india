import Navigation from "@/components/Navigation";
import PhonePortraitWarning from "@/components/PhonePortraitWarning";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";

const AppLayout = () => {
  const location = useLocation();

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <PhonePortraitWarning />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="flex-1 pb-24"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Navigation />
    </div>
  );
};

export default AppLayout;

