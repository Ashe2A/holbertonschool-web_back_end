#!/usr/bin/python3
"""Simple helper function"""


def index_range(page: int, page_size: int) -> tuple[int]:
    """Simple helper

    Args:
        page (int): Page displayed
        page_size (int): Number of elements in a page

    Returns:
        tuple[int]: indexes of the first and last elements displayed
    """
    return ((page - 1) * page_size, page * page_size)
