import { MessageCircle, Phone, MapPin } from "lucide-react";
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
                      className="h-12 w-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
                      onClick={() => window.open("https://www.facebook.com/profile.php?id=61572925680179", "_blank")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="left">
                    <p>{t('floating.facebook')}</p>
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
                      className="h-12 w-12 rounded-full bg-gray-800 hover:bg-gray-900 text-white shadow-lg"
                      onClick={() => window.open("https://maps.app.goo.gl/gMianxidIZlmPwKy1", "_blank")}
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
            isOpen ? "bg-primary text-primary-foreground rotate-45" : "bg-green-500 hover:bg-green-600 text-white"
          }`}
          onClick={toggleOpen}
        >
           {isOpen ? (
             <span className="text-2xl">+</span> 
           ) : (
             <MessageCircle className="h-7 w-7" />
           )}
        </Button>
        
        {/* Pulse effect when closed */}
        {!isOpen && (
          <span className="absolute top-0 left-0 -z-10 h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
        )}
      </motion.div>
      
      {/* Direct WhatsApp Link Handler for the main button action if user prefers direct click */}
      {isOpen && (
         <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="absolute bottom-16 right-16 bg-white dark:bg-zinc-800 py-2 px-4 rounded-lg shadow-lg border border-gray-100 dark:border-zinc-700 whitespace-nowrap"
         >
            <a href="https://wa.me/905050719501" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-green-600 transition-colors">
               <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                {t('floating.whatsapp')}
            </a>
         </motion.div>
      )}
    </div>
  );
}
