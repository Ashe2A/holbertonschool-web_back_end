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
            page_size (int, optional): Number of elements in the page. Defaults to 10.

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
        """Simple helper function

        Args:
            page (int): Page displayed
            page_size (int): Number of elements in a page

        Returns:
            tuple[int]: indexes of the first and last elements displayed
        """
        return ((page - 1) * page_size, page * page_size)
