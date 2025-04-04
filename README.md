# Password Strength Analyzer
A lightweight, zero-dependency JavaScript utility that evaluates the strength of a password and provides helpful suggestions to improve it.
## Features
- Classifies password strength as `Weak`, `Medium`, or `Strong`
- Provides actionable suggestions to improve weak passwords
- Works in both Node.js and browser environments
- Super easy to use and extend
## Installation
```bash

### Step1:-
First install using this command: ```npm i @nikhil-prajapati/password-analyzer```

### Step2:-
Import the function by adding below line in the top of your script file.
```js
import checkPassword from './node_modules/@nikhil-prajapati/password-analyzer/password-strength-analyzer.js';
```

Also add ```type='module'``` in your script declaration in HTML.
```HTML
<script defer type="module" src="./script.js"></script>
```
### Step3:-
Call the ```checkPassword``` function in your script.

Here,
- first, pass your password string into that function.
- checkPassword return you two values in objects so you have to destructure it.
```{strength, suggestion} = checkPassword(passwoed)```js
- first value is Strength of your password.
- second value is an Suggestion box which is an array of strin.
- Use this details and show this information at the place below the password field.  

```js
checkPassword('abc123');
```
