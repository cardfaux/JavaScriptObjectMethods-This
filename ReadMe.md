# Objects, Methods, and This Key word

**Working With Objects**

*Objects can be used to group functions together and then the functions can be called with the dot notation. Making these functions methods.*
*Functions in objects as properties are methods.*

**This Can Be Done With Shorthand**

*In The App.js File there is an example of the shorthand syntax, useing auth as the object and login as a method and logout as a method.*

## This Keyword.

**Working With This**

*There is a couple concrete rules that dictate what the value of this is. "THIS" gives you an object back, The current execution scope. In App.js on line 33*
*This refers to the window object, The sayHi function is added as method onto the window object Window is a blobal object in JavaScript in The Browser*
*It is different in Node. Variables declared with var is added tot he window object or the global scope. Let and Const does not add their values to the*
*globally scoped window object. On Line 39 in App.js "THIS" also refers to the window.*

# Using THIS in Methods

*On line 50 in App.js If I run person.fullName() "THIS" refers to the object itself, the person object. On Line 51 "This refers to the object So"*
*I Use the dot notation to print the valuse of the Object with "This". On Line 55 I have to use "THIS" to run the fullName() method by runnung*
*person.printBio() without "THIS" It Wouldn't work, Use "THIS" to reference the object. Now if we run person.printBio() we get Adam Hagood is a person*
*On line 56. Use "THIS keyword to access other properties on the same object"*

# THIS Invocation Context

**the value of this depends on the invocation context of the function it is used in**