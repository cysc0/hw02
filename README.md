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
Input handling:  
Trying to enter a number w/ mutliple decimals results in ignored input.  
Trying to enter an operator w/o having entered a number first results in ignored input.  
  
After entering an equation, subsequent clicks of the += button will result
in applying the previous calculation repeatedly
&nbsp;&nbsp;&nbsp;input:3&nbsp;+=&nbsp;2&nbsp;+=&nbsp;+=&nbsp;+=
&nbsp;&nbsp;     output:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5&nbsp;&nbsp;7&nbsp;&nbsp;