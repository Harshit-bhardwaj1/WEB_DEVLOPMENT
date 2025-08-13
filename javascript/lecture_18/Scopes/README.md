Scopes = accessibility

lexical scope = local memory + parent lexical scope

Scopes are of 4 types:-

1. global                      2. script
3. function                    4. block


CASE:-1 :- KYA AAPKA variable {} ke andar hai.

    1. NOT(NHI H):- global, script

        CASE:- 1.1 :- WHICH DECLARATIVE IS USED

            1. VAR :- GLOBAL

            2. LET/CONST :- SCRIPT


    2. YES (ANDAR H):-  block, fn, global

        CASE:-2.1 :- {} fn (ye wo function jese sam wgaera wale jo hum banate h) ki vajah se hai (isme if else, while, do while wagera nhi aate sirf fn aate h )

            "NO" :- "VAR" se declare h to :- GLOBAL

                    let/const  :- BLOCK

            "YES" :- VAR       :- FUNCTIONAL scope

                     LET/CONST :- BLOCK

# note:- when FUNCTION AND BLOCK both are come together then it is called "local".
