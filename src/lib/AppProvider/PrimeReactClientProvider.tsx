// PrimeReactClientProvider.tsx  
"use client"; // Mark this as a client component  

import { PrimeReactProvider } from 'primereact/api';  
import Tailwind from "primereact/passthrough/tailwind";  
import { twMerge } from "tailwind-merge";  

export default function PrimeReactClientProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {  
  return (  
    <PrimeReactProvider   
      value={{   
        unstyled: true,   
        pt: Tailwind,   
        ptOptions: {   
          mergeSections: true,   
          mergeProps: true,   
          classNameMergeFunction: twMerge   
        }   
      }}  
    >  
      {children}  
    </PrimeReactProvider>  
  );  
}