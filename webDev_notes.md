# Notes 

## HTML
- anchor tag <\a> also has a target attribute which tells the browser how to interact with the link
    setting it to _blank will make the link open in new tab.

## CSS
- Avoid using ID's instead use classes
- css attributes are applied in accordance to specificity, inheritance and rule order(ie the 
last defined one wins) in the given order.
- padding increases the space between the border of a box and the content of the box.
- border adds space (even if it’s only a pixel or two) between the margin and the padding.
- margin increases the space between the borders of a box and the borders of adjacent boxes.
    Margin also coincides when there are multiple boxes side by side
- In box-sizing: content-box adds padding & border in addition to the box's dimensions while border-box adds
    padding & border as a part of the box's dimensions
    Use border-box.
- Display type
    - block: (generic div container)
        - The box will break onto a new line.
        - The width and height properties are respected.
        - Padding, margin and border will cause other elements to be pushed away from the box.
        - If width is not specified, the box will extend in the inline direction to fill the space available in its container.
    - Inline: (generic span container)
        - The box will not break onto a new line.
        - The width, height, and top and bottom margins will have no effect.
        - Top and bottom padding and borders will change the size of the box without affecting the position of surrounding content, which can cause overlapping.
        - Left and right padding, margins, and borders will affect the position of surrounding inline content.
    - Inline-block: 
        They behave as inline elements but have a block-style padding and margin. Use flexbox instead of these.
    - Flex: discussed below
### Flexbox
It is a container type useful for putting items into rows and columns.
Some important values associated with a flex container are:
- flex-grow: controls how the extra space is distributed when the items are smaller than their container. Default 1
- flex-shrink: controls how space is removed when the items are bigger than their container. 0 will make the item not shrink even if it out grows the Flexbox. Default 1.
- flex-basis: suggestion for the length of an item along the primary axis (acts as height/width) and the base value from which growth and shrink are calculated. 0% will render shrink in-effective. Default auto.
- flex-direction: Sets the main and cross axis for a flex container and decides how flex elements are arranged. Default row.
- justify-content: aligns items across the main axis
- align-items: aligns items acorss the cross axis
- align-self: it is applied to the child and not the entire container
- gap: it is like adding margin between flex items
- flex-wrap: wraps items if space is insufficient. creates more rows/columns. ALWAYS specify flex-basis in items for this to work.
- align-content: aligns more than 1 item along the cross axis. Used when flex-wrap is applied
- order: sets the order in which the element occurs. Can take negative values. Default is source order. 
- flex-flow: shorthand for flex-direction and flex-wrap

Only one of flex-grow and flex-shrink can be active at once as there only either be space surplus or deficit but not both.<br>
flex is shorthand for flex-grow, flex-shrink and flex-basis. Some defaults are:
- initial: Flex item doesn't grow but can shrink. This default value expands to flex: 0 1 auto. 
- auto: Flex item can grow and shrink. This value expands to flex: 1 1 auto.
- none: The flex item neither grows nor shrinks. This value expands to flex: 0 0 auto. 
- flex: <number [1,∞]>: The flex item's main size will be proportional to the number set. This value expands to flex: <number> 1 0. 

The children of a Flexbox cluster at the start of primary/main axis and spread to fit the cross axis.<br>
Auto margins in a Flexbox will gobble up the extra space, and apply it to the element's margin. It gives us precise control over where to distribute the extra space.

Different justify-content types:
- space-between: The first item is flush with the start edge, and the last item is flush with the end edge. Leftover space is distributed only between the items.
- space-around: Items have "equal space around them". The empty space on the left/right of the first/last items is exactly half the width of the space between any two items.
- space-evenly: Every single gap between items is exactly equal, and the space between the outer items and the container edges matches that exact same gap size.

## JAVASCRIPT

- using back ticks to create strings will make them behave like python f string and variable can be used in them by ${var}
- typing $0 in browser console will give the current selected node
- you can define anonymous functions like 
```javascript
(
    function(params) {
        do something;
        return something;
    }
)
```
- the arrow function is a way of defining anonymous functions
```javascript
(params) => {
    do something;
    return something;
}
```
if a function only takes a single param and has only 1 line that is a return statement then
```javascript
param => do something with param
```
- function declarations can be called earlier than defined but this does not hold for function expressions
- js uses ```for(let var of group)``` loops for iterators
- loops can be given names using labels and breaking those label will break all the nested loops till the label. Example
```javascript
LabelName: /* can also put the loop here */
for(...)
    for(...)
        break LabelName; /* breaks out of both loops and not just the inner for loop */
```
Avoid using labels instead use function calls
- Arrays can have mixed types and support the following methods (hence act like both a stack and a queue)
    - ```push()```: add element at the end of the array
    - ```pop()```: remove the last element and return it
    - ```shift()```: remove the first element and return it
    - ```unshift()```: add element to the start of an array.
    - ```splice(start,[delete_count], [elem1,2,...])```: used to remove, replace and add(delete_count = 0).
            returns the removed elements.
    - ```slice([start], [end])```: returns array from start(inclusive) to end(exclusive)
    - ```map(function)```: performs function on each element of the array. NOTE: `NodeLists` don't support maps
    - ```reduce(function(accumulator, currentValue), initialValue)```: passes the return value of fun to the next iteration's accumulator and returns the final value. `initialValue` specifies the `accumulator`'s initial value which if blank becomes the first element of the array.
    - to return an object literal from a function use `()` outside of `{}` like so `x => ({ value: x })` this returns an object
- can use ```for(let var in group)``` loops with array to get the index
- don't use == or === to compare arrays
- array.length is a public property which tells the length of the array and .length() is a method which gives the length of a string

- **Test Driven Development (TDD)** is the practice of writing automated tests **before** writing your code.
### DOM
- methods:
    - element.querySelector(selector) - returns a reference to the first match of selector.
    - element.querySelectorAll(selectors) - returns a “NodeList” containing references to all of the matches of the selectors. NodeLists have less features than arrays.
    - document.createElement(tagName, [options]) - creates a new element of tag type tagName. The element is not added to DOM
    - parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.
    - parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode.
    - parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child.
- When accessing a kebab-cased CSS with JS, either use camelCase with dot notation or bracket notation. When using bracket notation, use either camelCase or kebab-case, but the property name must be a string.
- Prefer using textContent over innerHTML to avoid scripting attacks
- **Bubbling** mean starting from innermost to outermost and **capturing** means from outermost to innermost. To allow capturing add `true` at the end of `addEventListener()`
- `callback` is like a function pointer in c++
- use const to lock the **reference** to HTML elements. you can still chang it's properties.
- **Event delegation** means to add eventListener to the parent container and check if the target of the event was the intended child. Do this instead of adding eventListeners to all child elements.
- `event.target` returns the deepest level element of the event
- `event.currentTarget` doesn't bubble throught the DOM tree and check the element at each level but instead just returns the element which owns the eventListner
- `event.target.closest()` can be used to get the element between the deepest element and the owner of the event.
-  Use **function expressions** when you treat functions as data values to be assigned, passed around, or executed exactly where they are written
- DO NOT assign function return values in place of callbacks
- `getElementsByClassName()` returns a live `HTMLCollection` hence may not work properly when doing removal/addition of elements
-  `querySelectorAll()` returns a static `NodeList` which is safer to use than a `HTMLCollection`
- JavaScript cannot access css properties which are not inline directly so use `getComputedStyle()` to get values
- `var == NaN` OR `var === NaN` will always return false. Use `isNaN()` instead
- Avoid adding `eventListeners()` in functions. And don't add `return` statements to them either unless is for an early exit.
#### RegEx
- Used with `String.match()`to check if a string contains any of the regex values.
- Enclosed withing `/` like `/[a-z]/`
- Character classes:
    - `[abc]` Char set: Matches any char in the set
    - `[^abc]` Negated set: Matches any char not in the set
    - `[i-nA-Z3-7]` Range: Matches a character having a character code between the two specified characters inclusive
    - `.` dot: Matches any character except linebreaks. Equivalent to [^\n\r]
    - `\w` word: Matches any word character (alphanumeric & underscore).Equivalent to `[A-Za-z0-9_]`. And `\W` = not word
    - `\d` digit & `\D` not digit
    - `\s` whitespace: Matches any whitespace character (spaces, tabs, line breaks).`\S` = not whitespace
    - `[\s\S]` maatch any
    - `a* a+ a?`:	0 or more, 1 or more, 0 or 1 of char (here a)
    - `a{5} a{2,} a{1,3}`:	exactly five, two or more, between one & three of char (here a)
    - `a+? a{2,}?`;	match as few as possible
    - `ab|cd`:	match ab or cd