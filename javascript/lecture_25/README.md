# Async :-
It always return Promise.
It does not depend on "await".

# 
=> Agar humne kuch return kiya h function to wo value Promise ki fulfilled value me aa jayegi lekin return promise hi hoga.

=> Agar humne return value me naya Promise bhej de to jo humne Promise banaya h wo return hota h.
Overide kar deta h humra Promise


# Await :-
1. jab tak data fetch kar rahe h jab tak wait karo. Mtlb wo function hi block ho jaygea to function ke bahar jo agli line hogi wo chalgi.
2. Await cannot operate without async.
3. we use await when Promise is returned.


# Fetch :- 
1. fetch always take partial data (meta data)  in the first call.
2. .json() is used to wait till the complete data.

# json() :- also returns a Promise.



# Axios :-
1. Axios give all the data at once.
2. It also return Promises.