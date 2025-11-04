import { useEffect, useState } from "react";
import { Smartphone, RotateCcw } from "lucide-react";

const PhonePortraitWarning = () => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 
                       (window.innerWidth <= 768 && window.innerHeight <= 1024);
      const isPortrait = window.innerHeight > window.innerWidth;
      
      // Show warning if not on mobile or not in portrait mode
      setShowWarning(!isMobile || !isPortrait);
    };

    // Check on mount
    checkOrientation();

    // Check on resize/orientation change
    window.addEventListener("resize", checkOrientation);
    window.addEventListener("orientationchange", checkOrientation);

    return () => {
      window.removeEventListener("resize", checkOrientation);
      window.removeEventListener("orientationchange", checkOrientation);
    };
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-background flex items-center justify-center p-6">
      <div className="max-w-sm w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
            <Smartphone className="w-10 h-10 text-primary" />
          </div>
        </div>
        
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-foreground">
            Please Use Portrait Mode
          </h2>
          <p className="text-muted-foreground">
            This app is designed to be used on phones in portrait orientation only.
          </p>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <RotateCcw className="w-4 h-4" />
          <span>Please rotate your device to portrait mode</span>
        </div>
      </div>
    </div>
  );
};

export default PhonePortraitWarning;

