import { Phone, MapPin, Share2, Instagram as InstagramIcon, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full bg-gradient-to-tr from-orange-500 to-purple-600 hover:from-orange-600 hover:to-purple-700 text-white shadow-lg"
                      onClick={() => window.open("https://www.instagram.com/shining.beauty.wellness", "_blank")}
                    >
                      <InstagramIcon className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                      onClick={() => window.open("https://www.facebook.com/profile.php?id=61572925680179", "_blank")}
                    >
                      <Facebook className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      size="icon"
                      className="h-12 w-12 rounded-full bg-slate-700 hover:bg-slate-800 text-white shadow-lg"
                      onClick={() => window.open("https://www.google.com/maps/place//data=!4m2!3m1!1s0x15288fe1189465c1:0xa28b25b106cdb9c0?sa=X&ved=1t:8290&ictx=111", "_blank")}
                    >
                      <MapPin className="h-5 w-5" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>{t('floating.directions')}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative"
      >
        <Button
          size="lg"
          className={`h-14 w-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-primary/80 text-primary-foreground rotate-45" : "bg-primary/70 hover:bg-primary/80 text-primary-foreground backdrop-blur-sm"
          }`}
          onClick={toggleOpen}
        >
           {isOpen ? (
             <span className="text-2xl">+</span> 
           ) : (
             <Share2 className="h-6 w-6" />
           )}
        </Button>
        
        {/* Pulse effect when closed */}
        {!isOpen && (
          <span className="absolute top-0 left-0 -z-10 h-full w-full animate-pulse rounded-full bg-primary/30 opacity-75"></span>
        )}
      </motion.div>
    </div>
  );
}

