M.M.M.M.M.M.M.M.M.M.M.M.M.IMP

Whenever you try to access a variable or function even before its declarartion/initialization then it is called "HOISTING".
but you have to declare later on.
                                    or

It is deafault behaviour of JS, where all the declarations are move to the top of their scope whether it is class declarartion, variable declaration.

This cannot be done with "LET" declarartion.

"LET"  stores "VALUE UNAVAILABLE" so it gives error :- cannnot access "a" before initialisation.
but it doesn't mean it is not defined , it is defined but value is not given, that's why it is value unavailable.


Hoisting are of two types:- 

1. GENERAL = var (undefined)

2. DTZ(dead temporal zone) :- LET, CONST (error)