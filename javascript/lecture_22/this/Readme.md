## THIS 

=> this depends on how it is being called.

=> this will point to the window.

1. function calling  :- in this case "this" will always pointing to window which is global object.

2. method calling :- in this case "this" will point to the object of that method.

3. constructor calling :- in this case "this" points to the newly created object.

4. indirect calling :-
    a. call()
    b. apply()
    c. bind()

5. arrow function calling  := in this case "this" will point on its parent "this".