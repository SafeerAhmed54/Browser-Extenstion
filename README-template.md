# Frontend Mentor - Browser extensions manager UI solution

This is a solution to the [Browser extensions manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [AI Collaboration](#ai-collaboration)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Toggle extensions between active and inactive states
- Filter active and inactive extensions
- Remove extensions from the list
- Select their color theme
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Tailwind CSS
- Vanilla JavaScript
- Fetch API for loading JSON data

### What I learned

The biggest learning for me in this project was working with JSON data in JavaScript. I learned how to use the Fetch API to load external data and dynamically create HTML elements based on that data.

```js
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    allExtensions = data;
    renderCards("all");
  });
```

I also learned about the importance of timing in asynchronous JavaScript - understanding that code inside `.then()` runs after the data loads, while code outside runs immediately. This was crucial for getting the cards to display properly.

Another key concept was managing state with JavaScript - tracking the current theme and filter, then updating the UI accordingly:

```js
let currentTheme = "dark";
let currentFilter = "all";
let activeFilterButton = allButton;
```

Working with `classList` methods to dynamically add and remove CSS classes based on user interactions was also a valuable skill to practice.

### Continued development

I want to continue improving my JavaScript skills, particularly:
- Working with more complex data structures
- Understanding asynchronous operations better
- Building more interactive UIs with state management
- Improving my debugging skills with browser DevTools

### AI Collaboration

I used Kiro (Claude AI assistant) throughout this project for:

- **Debugging async issues**: Understanding why my `cardList` was empty and learning about the timing of fetch operations
- **Theme switching logic**: Implementing the dark/light theme toggle with proper class management
- **Event handling**: Learning about valid JavaScript events and fixing issues with event listeners
- **CSS class conflicts**: Debugging why styles weren't applying correctly when switching themes

What worked well: Getting explanations for WHY things weren't working, not just the fix. This helped me understand the concepts better.

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
