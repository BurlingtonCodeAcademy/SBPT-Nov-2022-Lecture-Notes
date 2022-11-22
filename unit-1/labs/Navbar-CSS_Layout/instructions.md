# CSS Layout Challenge
## Generic Navbar

- Create two files:
  - index.html
  - css_layout.css
- Connect the two files.

## index.html
- Create 3 different main elements within the ```<body>``` element.
  - ```<nav>```
    - This will hold 3 ```unordered list``` elements, each with ```anchors``` elements.
      - Each ```anchor``` will have a reference and name:
        - Brand
        - About
        - Shop
  - ```<div>```
    - This will represent the ```about``` section.
    - Provide it a ```lorem ipsum``` of about 25-50 words.
      - *hint*: ```lorem25```
  - ```<div>```
    - This will represent the ```shop``` section.
    - This can stay empty.

## css_layout.css
- ```html / body```
  - Set the ```html``` and ```body``` to have a **0 margin**.

- ```nav```
  - This should be fixed to the top of the page. 
  - It should span the width of the viewport
  - Give it a background color of your choice.
  - ```li```
    - The bullet points should not be displayed.
    - All three ```li``` should be shown in a horizontal line.
    - Provide a margine between each element. *no margin on top or bottom*
    - With the exception of the **brand**, these should float to the left.
      - Brand should be to the right.

- ```about```
  - Pad the text: **5em** on the top and bottom, **2em** on the left and right.
  - This section should span the complete height of the viewport.
  - Give this section a background color of your choosing (different from the nav).

- ```shop```
  - This section should span the complete height of the viewport.
  - Give this section a different background color as the other two main elements.

