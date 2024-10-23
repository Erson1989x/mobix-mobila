import { useEffect, useState } from "react";


export const useCurrentPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const isBrowser = typeof window !== "undefined";
  
    useEffect(() => {
      if (isBrowser) {
        const storedPage = sessionStorage.getItem("currentPage");
        if (storedPage) {
          setCurrentPage(parseInt(storedPage));
        }
      }
    }, [isBrowser]);
  
    useEffect(() => {
      if (isBrowser) {
        sessionStorage.setItem("currentPage", currentPage);
      }
    }, [currentPage, setCurrentPage, isBrowser]);
  
    useEffect(() => {
      return () => {
        if (isBrowser) {
          sessionStorage.removeItem("currentPage");
        }
      };
    }, [isBrowser]);
  
    return [currentPage, setCurrentPage, isBrowser];
  };