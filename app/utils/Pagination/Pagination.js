export const getNumberOfPages = (products, productsPerPage) => {
  return Math.ceil(products.length / productsPerPage);
};

export const handlePaginationChange = (setCurrentPage, router, value, scrollToTop, urlPath, totalPages) => {
  const newPage = Math.max(1, Math.min(value, totalPages));
  setCurrentPage(newPage);
  router.push(`${urlPath}?page=${newPage}`, undefined, {
    shallow: true,
  });
  scrollToTop();
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

