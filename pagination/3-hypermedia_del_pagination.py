#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math
from typing import List, Dict


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Initial Cached dataset

        Returns:
            List[List]: The cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0

        Returns:
            Dict[int, List]: Indexed dataset with position sorting
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """Get Hyper Index

        Args:
            index (int, optional): Index of the starting element.
                Defaults to None.
            page_size (int, optional): Page size. Defaults to 10.

        Returns:
            Dict: The dictionary of the dynamic pagination data.
                - index: the current start index of the return page.
                - next_index: the next index to query with.
                - page_size: the current page size.
                - data: the actual page of the dataset.
        """
        idx_dataset = self.indexed_dataset()
        dataset = self.dataset()
        indexes = sorted(idx_dataset.keys())

        if index is None:
            index = 0
        assert isinstance(index, int) and 0 <= index <= len(dataset)

        page_list = []
        last_index = None
        for i in indexes:
            if i >= index and len(page_list) < page_size:
                page_list.append(idx_dataset[i])
                last_index = i

        next_index = None
        if last_index is not None and\
           last_index + 1 <= indexes[len(indexes) - 1]:
            for i in indexes:
                if i > last_index and next_index is None:
                    next_index = i

        return {
            "index": index,
            "data": page_list,
            "page_size": len(page_list),
            "next_index": next_index
        }
