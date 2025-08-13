3 types of declarative:

var :- redeclare, reassign

let :- can't redeclare but can reassign

const :- neither redeclare nor reassign



1. The Shortest JAVASCRIPT code  that exists is ______________________(ANS:- EMPTY JS FILE)

2. Whenever a JS CODE runs a GLOBAL EXECUTION CONTEXT (GEC) is created. Inside that GEC we have 2 phases:-
a. MEMORY CREATION PHASE (MCP)
B. CODE EXECUTION PHASE (CEP)

3. MCP runs when zero  line of code is executed i.e. before the CEP PHASE, the role of MCP is to allocate memory :-
a. to all the variables
b. to all the functions

4. The role of CEP is to execute after McP and to runs the code line by line.

5. All the JS CODE is getting executed because of "call stack", GEC is actually running inside the call stack.

6. Whenever any function is executes a new EXECUTION CONTEXT is created and the name of newly EXECUTION CONTEXT is same that name of function.

* 7. Whenever GEC is created along with that global object(WINDOW) is also created.


#NOTE:-
1. VAR is stored in MCP but without value and JS ENGINE will point that variable to "UNDEFINED";
2. FUNCTION is stored in MCP as it is; chahe function ke andar var hi kyu na ho but hum andar nhi jaa sakte.