---
layout: post
title:  "JavaScript call() and apply()"
date:   2014-01-21 15:14:00
categories: JavaScript
---

The JavaScript `.call()` and `.apply()` methods are very similar. They allow you to call any method on any object like this.


    theFunction.apply(theObject, arrayOfArgs)

    theFunction.call(theObject, arg1, arg2, ...)


The difference is that `.apply()` takes an array of arguments and `.call()` requires a list of separate arguments. That doesn't really make it clear how this could be used though so here is a better example:


    function alertAddedValue(number) {
        alert(this.value + number);
    }
    
    var obj1 = {
           value: 10
        },
        obj2 = {
            value: 20
        };
    
    alertAddedValue.call(obj1, 100);    // alerts 110
    alertAddedValue.call(obj2, 100);    // alerts 120

And you would use `.apply()` like this:

    alertAddedValue.apply(obj1, [100]);     // alerts 110
    alertAddedValue.apply(obj2, [100]);     // alerts 120
    
Inside of the `alertAddedValue` function, `this` refers to the object that was passed to `.call()` or `.apply()`.


Sources:

[http://chimera.labs.oreilly.com/books/1234000000262/ch03.html#method_context] (http://chimera.labs.oreilly.com/books/1234000000262/ch03.html#method_context)

[http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply] (http://stackoverflow.com/questions/1986896/what-is-the-difference-between-call-and-apply)