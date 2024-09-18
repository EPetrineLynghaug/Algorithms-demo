# 	Lecture Notes, Algorithms.


## Description

This project demonstrates how algorithms work, focusing on sorting and searching techniques. The demo will explore various key features of algorithms, pseudocode, and efficiency analysis.


## Key Features 

<details>
  <summary><strong>Click to read more</strong></summary>

  - **Sorting algorithms:** Demonstrating common sorting methods such as bubble sort, quicksort, and merge sort.
  - **Searching algorithms:** Exploring both linear search and binary search.  
  - **Pseudocode examples:** Step-by-step breakdowns of how each algorithm is structured.
  - **Performance analysis:** Time and space complexity comparisons using Big O notation.
  - **Interactive examples:** Users can input data to see how algorithms process and return results.

</details>

## Algorithms: Sorting and Searching

<details>
  <summary><strong>Click to read more</strong></summary>
An algorithm is a step-by-step procedure used to solve a problem, similar to following a recipe in cooking. By following a defined set of rules or instructions, algorithms produce a result or solve a computational problem. The process is rooted in mathematics, and with a defined approach, an algorithm guarantees a solution. For example, troubleshooting a broken lamp by checking if it’s plugged in or if the bulb is out can be viewed as an algorithm. In programming, algorithms are often visualized in flowcharts that break down the logic into yes/no decisions or loops, making complex operations easier to understand.
</details>

	
## Pseudocode

<details>
  <summary><strong>Click to read more</strong></summary>
Pseudocode is a simple, human-readable way to describe the logic of a program without worrying about specific syntax. It is written in plain language, making it easier for people from different backgrounds to understand how an algorithm should work. Since pseudocode is not tied to any programming language, it can be used across various platforms. A well-written pseudocode serves as a bridge between the algorithm’s logic and the actual implementation in code. It is especially helpful during the planning stages of development, as it allows teams to map out the logic clearly before converting it into real code.

</details>

## Big O Notation

<details>
  <summary><strong>Click to read more</strong></summary>
Big O notation describes the efficiency of an algorithm, specifically how it performs as the input size increases. It helps developers understand how much time or space an algorithm will consume. This is important because computing resources are limited, and optimizing both time and memory usage is essential for performance. Big O evaluates the algorithm’s performance in the worst-case, best-case, and average scenarios, with common classifications such as O(1) for constant time, O(n) for linear time, or O(log n) for logarithmic time. The notation is particularly useful when comparing algorithms to identify the most efficient one for large datasets.
</details>

## Linear Search

<details>
  <summary><strong>Click to read more</strong></summary>
Linear search is a straightforward searching method that scans through a list element by element until it finds the target value. It works with unsorted data and can be applied to any data type. While it is simple to implement, its O(n) time complexity means that it becomes inefficient for larger datasets, as it may need to check every element. Linear search is practical when working with small data sets or when the data is not sorted, but it doesn’t scale well for large-scale applications.
</details>

## Binary Search

<details>
  <summary><strong>Click to read more</strong></summary>
Binary search is an efficient method for searching through a sorted list. It works by repeatedly dividing the search space in half and checking if the target value is greater or smaller than the middle element. By eliminating half of the possible elements with each step, binary search reduces the time complexity to O(log n), making it much faster than linear search for large datasets. However, it requires the data to be sorted first, which may add extra overhead if the list is not already in order. Despite this, binary search is a preferred method for fast lookups in large, organized data.

These paragraphs summarize the practical uses and benefits of algorithms, pseudocode, Big O notation, linear search, and binary search. They highlight why each concept is important and when they are most effective.
</details>


## Code Example: Performance Demonstration

<details>
  <summary><strong>Click to read more</strong></summary>

This code demonstrates the practical application of sorting and searching algorithms, along with performance measurement using `console.time()` and `console.timeEnd()`.

```javascript
// Find maximum value
console.time("findMaxNumber");
let max = findMaxNumber(myList);
console.timeEnd("findMaxNumber");
console.log("max: " + max);

// Linear search on unsorted list
let needle = 942_042;
let result;

console.time("linear search unsorted");
result = linearSearch(myList, needle);
console.log(result);
console.timeEnd("linear search unsorted");

// Sorting the list
console.time("standard sort");
let sortedArr = myList.toSorted((a, b) => a - b);
console.timeEnd("standard sort");
console.log(sortedArr);

// Linear search on sorted list
console.time("linear search sorted");
result = linearSearch(sortedArr, needle);
console.log(result);
console.timeEnd("linear search sorted");

// Binary search on sorted list
console.time("binary search");
result = binarySearch(sortedArr, needle);
console.log(result);
console.timeEnd("binary search");
```
</details>


## Sorting Algorithm: Insertion Sort
<details>
  <summary><strong>Click to read more</strong></summary>

Insertion sort is one of the simplest sorting methods available. It is often one of the first sorting algorithms you will encounter when learning about algorithms in general. While not as efficient as quicksort, it has its own advantages:

- **Easy to Implement:** Insertion sort is straightforward and can be implemented in just a few lines of code (e.g., a 3-line C++ implementation).
- **Efficient on Small Datasets:** Despite its time complexity of O(n²), it is often faster than other algorithms on small datasets due to its simplicity.
- **Adaptive:** If the input list is already sorted, or nearly sorted, insertion sort can outperform more theoretically efficient algorithms.
- **Stable:** It preserves the relative order of equal elements, which is a useful property in many scenarios.
- **In-Place:** It doesn’t require additional memory, making it memory efficient.

### How It Works
Insertion sort works by building a sorted array, one element at a time. Starting from the second element, each element is compared to those before it and inserted in the correct position.

![Insertion Sort Example](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

### Best Case
Insertion sort performs very well with an already sorted list. It has a time complexity of O(n) in the best case.

### Worst Case
In the worst case, where the list is in reverse order, the time complexity is O(n²). For larger unsorted lists, other algorithms like quicksort are generally more efficient.

</details>

## Quick Sort

<details>
  <summary><strong>Click to read more</strong></summary>

Quick sort was developed around the 1960s and follows the *divide and conquer* principle. The algorithm breaks down a larger problem into smaller subproblems, solving them recursively. What makes quick sort efficient is how it selects a "pivot" element and rearranges the list so that smaller elements are moved to the left and larger elements to the right. This process ensures that the pivot is correctly positioned, and it allows us to recursively sort the sublists on either side of the pivot. Eventually, we get down to lists with one or two elements, which are trivially sorted.

However, because quick sort moves elements to the left or right based on comparisons, it is not a stable sort. Stability refers to whether equal elements retain their relative order; quick sort may change this order due to the way it swaps elements.

### How It Works
1. **Base Case:** If the list contains 1 or 2 elements, it is already sorted, and the algorithm simply returns the list.
2. **Recursive Case:** Otherwise, quick sort selects a pivot and partitions the list so that elements smaller than the pivot go to the left, and larger elements go to the right. The pivot is now in its correct position.
3. **Subproblem:** The process is repeated on the left and right sublists until all elements are sorted.

A critical aspect of quick sort is **pivot selection**. The efficiency of the algorithm heavily depends on choosing a good pivot.

### Worst Case Scenario
In the worst case, quick sort can degrade to O(n²) time complexity. This happens when the pivot consistently divides the list unevenly, such as when selecting the largest or smallest element as the pivot. Fortunately, this is rare and can be mitigated by choosing a better pivot selection strategy.

### Choosing an Efficient Pivot
- **First Element Pivot:** Early versions of quick sort often used the first element as the pivot. However, this leads to performance issues when the list is already sorted, causing the algorithm to enter its worst-case scenario.
- **Random Pivot:** A more reliable approach is to select a random pivot. By choosing a pivot randomly, you significantly reduce the chances of consistently poor performance.
- **Median-of-Three Pivot:** Another commonly used strategy is the "median of three" method. This technique chooses the pivot as the median of the first, middle, and last elements of the list. It’s a quick and easy method to find a more balanced pivot, which tends to reduce the chances of hitting the worst-case scenario.

### Best Case Scenario
The best-case scenario occurs when the pivot consistently divides the list into two nearly equal parts. In this case, quick sort runs in O(n log n) time, which is one of the fastest sorting algorithms available for large datasets.

</details>

## Exercise

<details>
  <summary><strong>Click to read more</strong></summary>

### Task:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

</details>

## Conclusion

<details>
  <summary><strong>Click to read more</strong></summary>

In this project, we explored and implemented several fundamental algorithms, with a primary focus on sorting and searching techniques. By analyzing and benchmarking these algorithms, we gained valuable insights into their computational efficiency and practical applications in various scenarios.

We conducted experiments to measure execution times for different operations, including:
- Finding the maximum value in a list,
- Performing linear searches on both unsorted and sorted data,
- Sorting datasets using various algorithms,
- Conducting binary searches on pre-sorted lists.

These experiments provided a clear understanding of how different algorithms behave under varying conditions, highlighting their strengths and weaknesses. For instance, we observed how sorting algorithms like **quick sort** and **insertion sort** perform on small versus large datasets, and how searching algorithms like **binary search** significantly improve performance when dealing with sorted data compared to **linear search**.

By understanding the time complexities and performance characteristics of these algorithms, you can make more informed decisions when designing solutions to computational problems. This knowledge is crucial for optimizing performance, managing data effectively, and ensuring that applications can scale and handle large datasets efficiently.

</details>




