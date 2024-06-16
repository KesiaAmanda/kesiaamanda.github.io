import { useEffect, useRef } from 'react';

export const useOutsideClick = (callback: () => void) => {
   const ref = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent | TouchEvent) => {
         const node = event.target as Node


         if (String(node.parentElement) !== '[object HTMLButtonElement]') {
            if (ref.current && !ref.current.contains(event.target as Node)) {
               callback();
            }
         }
      };

      document.addEventListener('mouseup', handleClickOutside);
      document.addEventListener('touchend', handleClickOutside);


      return () => {
         document.removeEventListener('mouseup', handleClickOutside);
         document.removeEventListener('touchend', handleClickOutside);
      };
   }, [callback]);

   return ref;
};