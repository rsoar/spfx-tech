import { useEffect, useState } from "react";

export interface IPaginationHook<T> {
  itemsPage: T[];
  totalPages: number;
  currentPage: number;
  goToPreviousPage: () => void;
  hasPreviousPage: boolean;
  goToNextPage: () => void;
  hasNextPage: boolean;
  goToFirstPage: () => void;
  goToLastPage: () => void;
}

export const usePagination = <T extends unknown>(
  data: T[],
  _pageSize?: number
): IPaginationHook<T> => {
  const [pageItems, setPageItems] = useState<T[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrevious, setHasPrevious] = useState(false);
  const [pageSize, setPageSize] = useState(0);

  const _goToNextPage = () => {
    if (currentPage + 1 > totalPages) return;
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    setPageSize(_pageSize ? _pageSize : 10);
  }, []);

  const _goToFirstPage = () => setCurrentPage(0);
  const _goToLastPage = () => setCurrentPage(totalPages - 1);

  const _goToPreviousPage = () => {
    if (currentPage - 1 < 0) return;
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setHasNext(currentPage + 1 < totalPages);
    setHasPrevious(currentPage - 1 >= 0);
  }, [data, totalPages, currentPage]);

  useEffect(() => {
    setPageItems(
      data.slice(currentPage * pageSize, currentPage * pageSize + pageSize)
    );
  }, [data, currentPage, pageSize]);

  useEffect(() => {
    setTotalPages(Math.ceil(data.length / pageSize));
  }, [data, pageSize]);

  return {
    itemsPage: pageItems,
    currentPage: currentPage + 1,
    totalPages: totalPages,
    hasNextPage: hasNext,
    hasPreviousPage: hasPrevious,
    goToFirstPage: _goToFirstPage,
    goToPreviousPage: _goToPreviousPage,
    goToNextPage: _goToNextPage,
    goToLastPage: _goToLastPage,
  };
};
