---
layout: post
title:  "Git Snippets"
date:   2014-02-2 07:35:00
categories: git
---

This website is hosted on GitHub Pages so I make all changes using git. I keep forgetting how to do certain things with git, so this post is going to be an ongoing list of some common tasks that I can't seem to remember.

Adding files:

	git add . 		// adds all changes or new files, but doesn't remove files
	git add -u 		// adds all changes and removes files, but doesn't add any new files
	git add -A 		// does both

Add all files except one:

	git add -A
	git reset -- filename

Show the contents of the .gitignore file:

	cat .gitignore
