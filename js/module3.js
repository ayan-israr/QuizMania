let nextQues = [
    {
        question: "Q.2. Glyphicons are available in the font format in _____________ files of the font folder?",
        option1: "Glyphicons Halflings",
        option2: "Glyphs Head",
        option3: "Heading Font Heads",
        option4: "Font Heads",
    },
    {
        question: "Q.3. A navbar is set _____________, when the existing width of the viewport increases.",
        option1: "Vertically",
        option2: "Horizontally",
        option3: "Inline",
        option4: "Expanded",
    },
    {
        question: "Q.4. A JQuery Selector refers to a function in the form of an expression for ____________ the matching element in the DOM.",
        option1: "Searching",
        option2: "Deleting",
        option3: "Sorting",
        option4: "Adding",
    },
    {
        question: "Q.5. What is the full form of DOM?",
        option1: "Domestic Object Module",
        option2: "Document Object Module",
        option3: "Document Object Model",
        option4: "Dynamic Object Module",
    },
    {
        question: "Q.6. ID selector works by relying on the function.",
        option1: "$.getbyID();",
        option2: "document.getElementById()",
        option3: "document.selectElementById()",
        option4: "$.getElementById()",
    },
    {
        question: "Q.7. The property of any event refers to the element that originated the event.",
        option1: "action",
        option2: "event",
        option3: "target",
        option4: "get",
    },
    {
        question: "Q.8. Which method converts a given value into a string?",
        option1: "toString()",
        option2: "toUppercasse()",
        option3: "toLowercase()",
        option4: "substr",
    },
    {
        question: "Q.9. The built-in method delegates single or multiple event handlers for all elements that match with the selector and defines a function to occur.",
        option1: "delegate()",
        option2: "event()",
        option3: "live()",
        option4: "on()",
    },
    {
        question: "Q.10. Which class defines the dialog layout of the modal?",
        option1: "modal-dialog",
        option2: "modal-fade",
        option3: "modal-header",
        option4: "modal-content",
    },
    {
        question: "Q.11. Which of the following helper file is used by Web developers for applying a few basic transition effects?",
        option1: "bootstrap.js",
        option2: "*.js",
        option3: "transition.js",
        option4: "bootstrap.min.js",
    },
    {
        question: "Q.12. What files are included in precompiled bootstrap file structure?",
        option1: "bootstrap-theme.min.css.map",
        option2: "bootstrap-theme.css.map",
        option3: "bootstrap-theme.min.css",
        option4: "All of these",
    },
    {
        question: "Q.13. The Bootstrap version in use should include the ___________ for proper functioning of popovers.",
        option1: "tooltp.js",
        option2: "popover.min",
        option3: "form.css",
        option4: "tool.min.plugin",
    },
    {
        question: "Q.14. What is the full form of JSON?",
        option1: "JavaScript Online Notation",
        option2: "jQuery Object Notation",
        option3: "JavaScript Object Notation",
        option4: "jQuery UI Notation",
    },
    {
        question: "Q.15. Progress bars in bootstrap implements __________ as well as transitions for a few effects.",
        option1: "CSS3",
        option2: "Animations",
        option3: "HTML",
        option4: "LESS API",
    },
    {
        question: "Q.16. To add a page header, a Web developer needs to wrap the title within _______ and use the _____ class",
        option1: "<span>, page-head",
        option2: "<div>, page",
        option3: "<nav>, header",
        option4: "<div>, page-header",
    },
    {
        question: "Q.17. Which files are added so that IE 8 can render the HTML5 elements?",
        option1: "Html.js and font.js",
        option2: "Form.js",
        option3: "Respond.min.js html5shiv.js",
        option4: "Container.min.js and font.min.js",
    },
    {
        question: "Q.18. What input types are included in datetime input in HTML5?",
        option1: "Datetime-local, month, week, date, and time",
        option2: "Week, day, date",
        option3: "Year, month, day",
        option4: "Datetime-local, Year, month, day, week",
    },
    {
        question: "Q.19. The maximum width of the viewport display is ________ pixels.",
        option1: "986 pixels",
        option2: "675 pixels",
        option3: "768 pixels",
        option4: "988 pixels",
    },
    {
        question: "Q.20. How many ways are there to use Bootstrap on a website?",
        option1: "three",
        option2: "one",
        option3: "two",
        option4: "four",
    },
    {
        question: "Q.21. What is the JavaScript code for the collapsible content?",
        option1: "$(‘.collapse’).collapse();",
        option2: "$(‘myBtn’).collapse();",
        option3: "$(‘.collapse’).click();",
        option4: "$(#demo).click();",
    },
    {
        question: "Q.22. Which symbol represents the number of columns in the column definition?",
        option1: "$",
        option2: "*",
        option3: "#",
        option4: "&",
    },
    {
        question: "Q.23. What is the full form of CDN?",
        option1: "Content delivery network",
        option2: "Context delivery network",
        option3: "Content data network",
        option4: "Conceptual data network",
    },
    {
        question: "Q.24. Which method facilitates event delegation in jQuery?",
        option1: "On() and off()",
        option2: "On() and revoke()",
        option3: "Delegation() and event()",
        option4: "On() and delegate()",
    },
    {
        question: "Q.25. How many pixels for slight padding are allowed for a Bootstrap table?",
        option1: "6",
        option2: "10",
        option3: "8",
        option4: "12",
    },
    {
        question: "Q.26. Is it also possible to change the well size by controlling its ________?",
        option1: "size",
        option2: "width",
        option3: "padding",
        option4: "viewport",
    },
    {
        question: "Q.27. How many predefined grid classes are provided by Bootstrap 3?",
        option1: "2",
        option2: "3",
        option3: "4",
        option4: "5",
    },
    {
        question: "Q.28. What are the benefits of event delegations?",
        option1: "Better performance",
        option2: "Reduce risk of crashing",
        option3: "Risk handlers",
        option4: "All of these",
    },
    {
        question: "Q.29. The JSON.parse() takes the string as a ________ and converts it into a JSON __________.",
        option1: "Parameter, array",
        option2: "Variable, string",
        option3: "Parameter, variable",
        option4: "Array, string",
    },
    {
        question: "Q.30. Bootstrap 3 activates horizontal scrolling on a small device whose screen width is not more than ______ pixels.",
        option1: "768",
        option2: "1170",
        option3: "950",
        option4: "991",
    },
    {
        question: "Q.31. What are the different types of progress bars?",
        option1: "Default",
        option2: "Stacked, striped",
        option3: "Animated",
        option4: "All of these",
    },
    {
        question: "Q.32. A web developer can create only up to ________ columns on a web page regardless of the viewport, but can have unlimited rows.",
        option1: "20",
        option2: "25",
        option3: "12",
        option4: "14",
    },
    {
        question: "Q.33. Which are the selectors in jQuery?",
        option1: "ID, class, name, variable",
        option2: "ID, class name, tag name, attribute",
        option3: "Attribute values",
        option4: "Variable, functions, name",
    },
    {
        question: "Q.34. What are the options that a web developer can pass as parameters to the tooltip() method?",
        option1: "A and C",
        option2: "B and D",
        option3: "A and B",
        option4: "A, B, C",
    },
    {
        question: "Q.35. What types of alerts are indicated by contextual classes for emphasizing a cell or row?",
        option1: "Success, danger",
        option2: "Warning",
        option3: "Info",
        option4: "All",
    },
    {
        question: "Q.36. What is the full form of CSS?",
        option1: "Causal shaped sheets",
        option2: "Cascading style sheets",
        option3: "Common spread sheet",
        option4: "Cascaded spread sheets",
    },
    {
        question: "Q.37. Bootstrap is an intuitive and open-source framework that makes ________ development of web applications simpler as well as quicker.",
        option1: "Front-end",
        option2: "Back-end",
        option3: "End-to-end",
        option4: "Static",
    },
    {
        question: "Q.38. To create a JSON array, include the objects in ___________ and separate each by a ____________.",
        option1: "Parentheses, colon",
        option2: "Square brackets, colon",
        option3: "Parentheses, comma",
        option4: "Square brackets, comma",
    },
    {
        question: "Q.39. A fluid grid handles sizing of a page element in _______ units.",
        option1: "Relative",
        option2: "Absolute",
        option3: "Equal",
        option4: "Unequal",
    }
];


let crrAns = [
    "2", // Q.1. Extended Support Release
    "1", // Q.2. Glyphicons Halflings
    "2", // Q.3. Horizontally
    "1", // Q.4. Searching
    "3", // Q.5. Document Object Model
    "2", // Q.6. document.getElementById()
    "3", // Q.7. target
    "1", // Q.8. toString()
    "4", // Q.9. on()
    "1", // Q.10. modal-dialog
    "3", // Q.11. transition.js
    "4", // Q.12. All of these
    "1", // Q.13. tooltp.js
    "3", // Q.14. JavaScript Object Notation
    "1", // Q.15. CSS3
    "4", // Q.16. <div>, page-header
    "3", // Q.17. Respond.min.js html5shiv.js
    "1", // Q.18. Datetime-local, month, week, date, and time
    "3", // Q.19. 768 pixels
    "1", // Q.20. three
    "1", // Q.21. $(‘.collapse’).collapse();
    "2", // Q.22. *
    "1", // Q.23. Content delivery network
    "4", // Q.24. On() and delegate()
    "3", // Q.25. 8
    "3", // Q.26. padding
    "3", // Q.27. 4
    "4", // Q.28. All of these
    "3", // Q.29. Parameter, variable
    "1", // Q.30. 768
    "4", // Q.31. All of these
    "3", // Q.32. 12
    "2", // Q.33. ID, class name, tag name, attribute
    "4", // Q.34. A, B, C
    "4", // Q.35. All
    "2", // Q.36. Cascading style sheets
    "1", // Q.37. Front-end
    "4", // Q.38. Square brackets, comma
    "1", // Q.39. Relative
];
