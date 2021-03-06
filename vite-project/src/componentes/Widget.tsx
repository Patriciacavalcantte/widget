import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
  return (
   
          <div className="absolute bottom-5 right-5">
            <button className="rounded-full px-3 h-12 bg-amber-500 text-white flex items-center group">
            
            <ChatTeardropDots className ="w-12 h-12"/>

            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
            
            </button>
          </div>
        
  
  );
}