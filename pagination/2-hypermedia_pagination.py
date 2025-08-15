#!/usr/bin/env python3
"""Simple pagination"""
import csv
import math
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Get Page list

        Args:
            page (int, optional): Page displayed. Defaults to 1.
            page_size (int, optional): Number of elements in the page.
            Defaults to 10.

        Returns:
            list[list]: List of the elements from the data_set
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0
        page_list = []
        dataset = self.dataset()
        idx_rng = self.index_range(page, page_size)
        if idx_rng[1] < len(dataset):
            for i in range(idx_rng[0], idx_rng[1]):
                page_list.append(dataset[i])
        return page_list

    def index_range(self, page: int, page_size: int) -> tuple[int]:
        """Simple helper

        Args:
            page (int): Page displayed
            page_size (int): Number of elements in a page

        Returns:
            tuple[int]: indexes of the first and last elements displayed
        """
        return ((page - 1) * page_size, page * page_size)

    def get_hyper(self, page: int = 1, page_size: int = 10) -> dict:
        """Hypermedia pagination

        Args:
            page (int, optional): Page displayed. Defaults to 1.
            page_size (int, optional): Number of elements in the page.
            Defaults to 10.

        Returns:
            dict: Dictionary containing the following key-value pairs:
                "page_size": the length of the returned dataset page
                "page": the current page number
                "data": the dataset page (equivalent to return from previous task)
                "next_page": number of the next page, None if no next page
                "prev_page": number of the previous page, None if no previous page
                "total_pages": the total number of pages in the dataset as an integer
        """
        dataset = self.dataset()
        total_pages = math.ceil(len(dataset) / page_size)

        displayed_page = self.get_page(page, page_size)

        next_page = None
        prev_page = None
        if page < total_pages:
            next_page = page + 1
        if page > 1:
            prev_page = page - 1

        return {
            "page_size": len(displayed_page),
            "page": page,
            "data": displayed_page,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": total_pages
        }
