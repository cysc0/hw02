### HW02
------ 
#### Files in this directory
0) README.md  
1) assets/animal.css - css file for part A  
2) assets/calc.css - css file for part B  
3) assets/calc.js - js file for part B  
4) index.html - landing page for HW02  
5) animal.html - html page for part A  
6) calc.html - html page for part B  
7) hw02.zombo.club - nginx config for hw02 subdomain
------ 
#### About the calculator
Input handling:  
Trying to enter a number w/ mutliple decimals results in ignored input.  
Trying to enter an operator w/o having entered a number first results in ignored input.  
After entering an equation, subsequent clicks of the += button will result in applying the previous calculation repeatedly:
  
| Input  | 5 | += | 2 | += | += | += |
| ------ | - | -- | - | -- | -- | -- |
| Output |   |    |   | 7  | 9  | 11 |
  
| Input  | 5 | * | 2 | += | += | += |
| ------ | - | - | - | -- | -- | -- |
| Output |   |   |   | 10 | 20 | 40 |  
  
I watched a youtube video on rapidman 800 operation, and it seemed like pressing any operator should instantly calculate the most recently entered (full) equation:  
  
| Input  | 3 | * | 2 | - | 1 | += | 12 | += | 1 | += | += | - | 14 | += |
| ------ | - | - | - | - | - | -- | -- | -- | - | -- | -- | - | -- | -- |
| Output |   |   |   | 6 |   | 5  |    | 17 |   | 18 | 19 |   |    | 5  | 
   
------
#### Chaining input
The one side effect of this is that chaining addition must be done in a specific way:  
How to properly chain addition:  
  
| Input  | 3 | += | 2 | += | 4 | += | 12 | += | 32 | += |
| ------ | - | -- | - | -- | - | -- | -- | -- | -- | -- |
| Output |   |    |   | 5  |   | 9  |    | 21 |    | 53 |  
  
How NOT to chain addition (this repeats last operation, rather than allows for new operand entry):  
  
| Input  | 3 | += | 2 | += | += (WRONG) |
| ------ | - | -- | - | -- | ---------- |
| Output |   |    |   | 5  |     7      |