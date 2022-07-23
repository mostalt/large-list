# FYI

I clearly understand that this solution is not ideal. `IntersectionObserver` is created for each element and we don't know exactly which elements we have in the view port.
If we need a more optimized component, it makes sense to use [react-window](https://github.com/bvaughn/react-window), or write your own similar implementation.
For a list of more than 10,000 items, the Observable solution does not work well because you still need to create nodes that Observable monitors. Ideally, the solution will understand how many elements we have in the viewport and update the list for rendering as we scroll.

