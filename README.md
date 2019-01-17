### HW02
  
  
#### Files in this directory:
  
0) README.md  
1) assets/animal.css - css file for part A  
2) assets/calc.css - css file for part B  
3) assets/calc.js - js file for part B  
4) index.html - landing page for HW02  
5) partA.html - html page for part A  
6) partB.html - html page for part B  
7) hw02.zombo.club - nginx config for hw02 subdomain
  
#### About the calculator:
I blocked erroneous input. Trying to enter a number with multiple decimal points
results in the input being ignored. Trying to press subsequent operators (without
operands) results in ignored input.  
After successfully entering a full equation and receiving a result, subsequent
clicks of the += operator will continuously re-apply the most recent operation,
allowing for incrementing behavior.
Also, after entering an equation and receiving a result, any NUMERIC button
press will result in starting an entirely new equation.