# FYI

I clearly understand that this solution is not ideal. `IntersectionObserver` is created for each element and we don't know exactly which elements we have in the view port, but to be honest, I didn't notice that this greatly reduced performance.
If we need a more optimized component, it makes sense to use [react-window](https://github.com/bvaughn/react-window) , or write your own similar implementation.

