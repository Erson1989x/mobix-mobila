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
    }, []);
  
    useEffect(() => {
      if (isBrowser) {
        sessionStorage.setItem("currentPage", currentPage);
      }
    }, [currentPage]);
  
    useEffect(() => {
      return () => {
        if (isBrowser) {
          sessionStorage.removeItem("currentPage");
        }
      };
    }, []);
  
    return [currentPage, setCurrentPage];
  };