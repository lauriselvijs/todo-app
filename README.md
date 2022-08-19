# Frontend Mentor - Todo app solution

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Todo app solution](#frontend-mentor---todo-app-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Edit existing todos
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![Todo app dark mode mobile](https://user-images.githubusercontent.com/85683069/166263142-5f100334-edf8-41b3-acd9-a2678f6b5b43.png)
![Todo app light mode mobile](https://user-images.githubusercontent.com/85683069/166263145-f19409c8-f904-4b88-8bb6-e2e00cf17c8d.png)
![Todo app dark mode desktop](https://user-images.githubusercontent.com/85683069/166263146-5eb93fa5-1929-46db-b1c5-8a9a57810bdf.png)
![Todo app light mode desktop](https://user-images.githubusercontent.com/85683069/166263149-389d384a-0edb-4bda-b8e4-abf7b0dd49dc.png)

### Links

- Solution URL: [Github](https://github.com/lauriselvijs/todo-app)
- Live Site URL: [Netlify](https://81fd79-todo-app.netlify.app/)

## My process

### Built with

- HTML5 markup
- [SCSS](https://sass-lang.com/) - advanced variant of CSS
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - Strongly typed programming language for JS
- [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development

### What I learned

Using redux toolkit for more efficient global state implementation

```js
export const darkMode = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    setDarkMode: (state, action: PayloadAction<string>) => {
      if (action.payload && !state.darkMode) {
        document.body.className = action.payload;
      } else if (state.darkMode) {
        document.body.className = "";
      }

      state.darkMode = !state.darkMode;
    },
  },
});
};
```

Using global css variables to change themes of webpage

```css
:root {
  --main-bg-color: var(--imported-main-bg-color, #{$very-light-grayish-blue});
}

body {
  margin: 0;
  font-family: $font-family;
  background-color: var(--main-bg-color);
}
```

### Continued development

- Continued use of Redux Toolkit as well features like createAsyncThunk and RTK Query
- Using css variables for different theme implementation

### Useful resources

- [TypeScript Docs](https://www.typescriptlang.org/docs/) - Docs to better understand typescript
- [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - JS docs
- [w3schools CSS docs](https://www.w3schools.com/css/default.asp) - Great documentation to understand CSS
- [w3schools HTML docs](https://www.w3schools.com/html/default.asp) - Great documentation to understand HTML
- [ReactJS](https://reactjs.org/docs/getting-started.html) - Great documentation to understand ReactJS
- [Redux Toolkit](https://redux-toolkit.js.org/usage/usage-guide) - Great documentation to understand Redux Toolkit

## Author

- Website - [Lauris](https://portfolio-rouge-seven.vercel.app/)
- Frontend Mentor - [lauriselvijs](https://www.frontendmentor.io/profile/lauriselvijs)
