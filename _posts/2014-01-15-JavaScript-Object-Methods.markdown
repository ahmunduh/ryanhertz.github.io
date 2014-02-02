---
layout: post
title:  "JavaScript Object Methods"
date:   2014-01-15 11:51:00
categories: JavaScript
---

I've been a little confused about JavaScript methods. Methods can be added to the constructor, or to the object prototype. Here are some examples:

Adding a method to the constructor:

	function Box (x, y) {
		this.x = x;
		this.y = y;
		this.getArea = function () { return x*y};
	}

Adding a method using the prototype:

	function Box (x, y) {
		this.x = x;
		this.y = y;		
	}
	Box.prototype.getArea = function () { return x*y};
	
This example may be a little too simple because the area could be represented as a property, but you get the idea.

One of the benefits of using the prototype is that the `getArea()` method is only declared once. Putting the method in the constructor causes a separate copy of the method to be created with every instance of the Box object. This probably isn't necessary because the `getArea()` method doesn’t change for each instance.

References:

[http://pivotallabs.com/javascript-constructors-prototypes-and-the-new-keyword/] (http://pivotallabs.com/javascript-constructors-prototypes-and-the-new-keyword/)

[http://thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/] (http://thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/)


