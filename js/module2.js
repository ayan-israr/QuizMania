let nextQues = [
    {
        question: "Q.2. _______ property of the navigator object retrieves the version number and platform of the browser.",
        option1: "appVersion",
        option2: "version",
        option3: "appVer",
        option4: "ver",
    },
    {
        question: "Q.3. _________ styles are placed inside the <head> section of a particular Web page source code.",
        option1: "External",
        option2: "Inline",
        option3: "Indented",
        option4: "Internal",
    },
    {
        question: "Q.4. Identify the attribute of a span tag which is used in specifying a language code for the content in an element, in XHTML documents.",
        option1: "lang",
        option2: "xml:lang",
        option3: "class",
        option4: "id",
    },
    {
        question: "Q.5. The property of CSS is used to specify the space between element border and the element content.",
        option1: "Max-height",
        option2: "Min-width",
        option3: "padding",
        option4: "spacing",
    },
    {
        question: "Q.6. Which of the following escape sequence is used in JavaScript to insert a horizontal tab in an HTML page?",
        option1: "\\\\n",
        option2: "\\\\r",
        option3: "\\\\f",
        option4: "\\\\t",
    },
    {
        question: "Q.7. Which of the following options is a composite data type in JavaScript?",
        option1: "Boolean",
        option2: "Number",
        option3: "String",
        option4: "Object",
    },
    {
        question: "Q.8. To use an event on a page using jQuery, in which of the following functions should the user call the event?",
        option1: "$(document).call()",
        option2: "$(document).ready()",
        option3: "$(document).start()",
        option4: "$(document).run()",
    },
    {
        question: "Q.9. Identify the correct syntax to declare a pseudo-class.",
        option1: "Selector_name:state_name{values}",
        option2: "Selector_name:state_name {property: value}",
        option3: "State_name:selector_name {property: value}",
        option4: "Selector_name:state_name{}",
    },
    {
        question: "Q.10. _______ storage keeps track of data specific to one window or tab and discards it as soon as the user closes the tab.",
        option1: "Session",
        option2: "Application",
        option3: "Local",
        option4: "Page",
    },
    {
        question: "Q.11. _______ uses JavaScript and CSS to make dynamic web pages.",
        option1: "JavaScript",
        option2: "CSS",
        option3: "XHTML",
        option4: "DHTML",
    },
    {
        question: "Q.12. Which attribute of Audio tag identifies whether to replay the audio once it has stopped?",
        option1: "autoplay",
        option2: "preload",
        option3: "loop",
        option4: "autobuffer",
    },
    {
        question: "Q.13. Identify the correct syntax of doctype in HTML5.",
        option1: "< ?DOCTYPE html> ",
        option2: "< !DOCTYPE html >",
        option3: "< !DOCTYPE html! >",
        option4: "< ?DOCTYPE htm? >",
    },
    {
        question: "Q.14. The _______ element is a column or a selection that generally contains data linked to the main information but not as relevant or important as the main information.",
        option1: "< aside >",
        option2: "< nav >",
        option3: "< mark >",
        option4: "< selection >",
    },
    {
        question: "Q.15. The _______ element emphasizes the text as compared to its surrounding text.",
        option1: "STRONG",
        option2: "SUB",
        option3: "SUP",
        option4: "INS",
    },
    {
        question: "Q.16. Identify the category of pattern matching where characters or symbols allow matching characters that reappear frequently in a string.",
        option1: "Position matching",
        option2: "Character classes",
        option3: "Repetition",
        option4: "Back Reference",
    },
    {
        question: "Q.17. Identify the correct method for displaying an image on a Web page.",
        option1: "< IMG source=”sample.jph” width=”200” height=”100” >",
        option2: "< IMG path=”sample.jph” width=”200” height=”100” >",
        option3: "< IMG name=”sample.jph” width=”200” height=”100” >",
        option4: "< IMG src=”sample.jph” width=”200” height=”100” >",
    },
    {
        question: "Q.18. Which of the following meta tags indicates that the web application runs in a full-screen mode?",
        option1: "< meta name='HandheldFriendly' content='true'/ >",
        option2: "< meta name='MobileOptimized' content='width'/ >",
        option3: "< meta name='apple-mobile-web-app-capable' content='yes'/ >",
        option4: "< meta name='Formatdetection' content='telephone=no'/ >",
    },
    {
        question: "Q.19. Identify the correct syntax to create a geolocation object in JavaScript.",
        option1: "< var geoloc = windows.navigator.geolocation; >",
        option2: "< var geoloc = window.navigator.geolocation; >",
        option3: "< var geoloc = navigator.geolocation; >",
        option4: "< var geoloc = navigator.window.geolocation; >",
    },
    {
        question: "Q.20. Which of the following options is a text-level semantic tag?",
        option1: "Selection",
        option2: "Aside",
        option3: "Nav",
        option4: "Mark",
    },
    {
        question: "Q.21. Identify the correct syntax for specifying an inline style for the <p> tag.",
        option1: '< p style="font-size: 20 px; color: red;" ></ p >',
        option2: '< p fontstyle="font-size: 20 px; color: red;" ></ p >',
        option3: '< p font-size: 20 px; color: red;" ></ p >',
        option4: '< p style="font-size: 20; color: red;" ></ p >',
    },
    {
        question: "Q.22. Identify the correct syntax to invoke a JavaScript function named Sum() on the click of a button on an HTML page.",
        option1: '< input type="click" value="Add" onclick="Sum();"/ >',
        option2: '< input type="button" value="Add" onclick="Sum();"/ >',
        option3: '< input type="onclick" value="Add" onclick="Sum();"/ >',
        option4: '< button value="Add" onClick="Sum():" ></ button >',
    },
    {
        question: "Q.23. The ______ attribute allows the user to span a cell along a horizontal row in an HTML table.",
        option1: "colspan",
        option2: "rowspan",
        option3: "cellspan",
        option4: "span",
    },
    {
        question: "Q.24. The ______ tag is used for displaying information about the data.",
        option1: "html",
        option2: "meta",
        option3: "title",
        option4: "script",
    },
    {
        question: "Q.25. Identify the satellite navigation system that provides information about the location from any part of the globe.",
        option1: "GSM",
        option2: "Bluetooth",
        option3: "WIFI",
        option4: "GPS",
    },
    {
        question: "Q.26. HTML5 canvas allows the user to create quadratic curves using the ________ method.",
        option1: "makeQuadraticCurve",
        option2: "quadraticCurveTo()",
        option3: "drawQuadraticCurve()",
        option4: "quadraticCurve()",
    },
    {
        question: "Q.27. Identify the correct syntax of the <embed> tag to insert an external file into an HTML page.",
        option1: '< embed source="sample.mp3"/ >',
        option2: "< embed >",
        option3: '< embed src="sample.mp3"/ >',
        option4: '< embed file="sample.mp3"/ >',
    },
    {
        question: "Q.28. Identify the four components of a box model.",
        option1: "Margins, padding, type, and content",
        option2: "Selection, padding, borders, and content",
        option3: "Margins, padding, borders, and content",
        option4: "Margins, selection, borders, and content",
    },
    {
        question: "Q.29. _______ makes the structure of a grid.",
        option1: "Grid cell",
        option2: "Grid line",
        option3: "Grid track",
        option4: "Grid area",
    },
    {
        question: "Q.30. All grid items are placed inside ________.",
        option1: "Columns and rows",
        option2: "Grid gap",
        option3: "Grid area",
        option4: "Vertical grid line",
    },
    {
        question: "Q.31. What component makes a block-level grid container?",
        option1: "Display",
        option2: "Flex direction",
        option3: "Grid",
        option4: "Flex item",
    },
    {
        question: "Q.32. In a flexbox, the start point of the cross-axis is ________.",
        option1: "Cross start",
        option2: "Cross begin",
        option3: "start",
        option4: "cross-start",
    },
    {
        question: "Q.33. ________ is a form-specific element.",
        option1: "datalist",
        option2: "progress",
        option3: "meter",
        option4: "output",
    },
    {
        question: "Q.34. The ______ is a textbox control that provides a list of suggestions to select from as a user types.",
        option1: "Autocomplete",
        option2: "Form",
        option3: "Pattern",
        option4: "Title",
    },
    {
        question: "Q.35. To allow multiple addresses in the e-mail field, each address needs to be separated with ________.",
        option1: "Double semicolon",
        option2: "Colon",
        option3: "comma",
        option4: "semicolon",
    },
    {
        question: "Q.36. In the <img> tag, use the _________ attribute to define the image map name.",
        option1: "image map",
        option2: "usemap",
        option3: "image map",
        option4: "use-map",
    },
    {
        question: "Q.37. An object that represents eventual success or failure of an asynchronous operation is ______.",
        option1: "method",
        option2: "class",
        option3: "promise",
        option4: "handler",
    },
    {
        question: "Q.38. To declare a private class field, prefix the name of the class field with ______.",
        option1: "#",
        option2: "*",
        option3: "$",
        option4: "~",
    },
    {
        question: "Q.39. The two features in JSON are _______.",
        option1: "Strong and exchange",
        option2: "Serialization and deserialization",
        option3: "Stack and unstack",
        option4: "Form and deform",
    },
    {
        question: "Q.40 .flex-container {display: flex;} what does this indicate?",
        option1: "This defines how the flex items should be stacked.",
        option2: "This specifies that flex items will wrap if required.",
        option3: "This defines the type of flexbox of the parent container.",
        option4: "This keeps all flex items on one line.",
    },
    {
        question: "Q.41 John needs to adjust the spacing before and between the flex lines. Which property should he ideally use?",
        option1: "Flex-wrap",
        option2: "Flex-flow",
        option3: "Align content",
        option4: "Align items",
    },
    {
        question: "Q.42 The box model refers to the ______ of an HTML element.",
        option1: "selectors",
        option2: "design and layout",
        option3: "alignment",
        option4: "text styles",
    },
    {
        question: "Q.43 Identify the correct method to assign a value sample.jpg to the src attribute of the IMG tag having id img1 using the document object.",
        option1: "< document.getElement('img1').src = 'sample.jpg'; >",
        option2: "< document.getElement('img1').id = 'sample.jpg'; >",
        option3: "< document.getElementById('img1').id = 'sample.jpg'; >",
        option4: "< document.getElementById('img1').src = 'sample.jpg'; >",
    },
    {
        question: "Q.44 Which of the following options will be correctly identified by the pattern /[^AB]PQ/?",
        option1: "APQ",
        option2: "BPQ",
        option3: "CPQ",
        option4: "ARQ",
    },
];

let crrAns = [
    "3", // Q1: anchor
    "1", // Q2: appVersion
    "4", // Q3: Internal
    "2", // Q4: xml:lang
    "3", // Q5: padding
    "4", // Q6: \t
    "4", // Q7: Object
    "2", // Q8: $(document).ready()
    "2", // Q9: Selector_name:state_name {property: value}
    "1", // Q10: Session
    "4", // Q11: DHTML
    "3", // Q12: loop
    "2", // Q13: <!DOCTYPE html>
    "1", // Q14: <aside>
    "1", // Q15: STRONG
    "3", // Q16: Repetition
    "4", // Q17: <IMG src="sample.jph" width="200" height="100">
    "3", // Q18: <meta name=?apple-mobile-web-app-capable? content=?yes?/>
    "2", // Q19: <var geoloc = window.navigator.geolocation;>
    "4", // Q20: Mark
    "1", // Q21: <p style="font-size: 20 px; color: red;"></p>
    "2", // Q22: <input type="button" value="Add" onclick="Sum();">
    "1", // Q23: colspan
    "2", // Q24: meta
    "4", // Q25: GPS
    "2", // Q26: quadraticCurveTo()
    "3", // Q27: <embed src="sample.mp3"/>
    "3", // Q28: Margins, padding, borders, and content
    "4", // Q29: Grid area
    "1", // Q30: Columns and rows
    "3", // Q31: Grid
    "4", // Q32: cross-start
    "4", // Q33: output
    "1", // Q34: Autocomplete
    "3", // Q35: comma
    "2", // Q36: usemap
    "3", // Q37: promise
    "1", // Q38: #
    "2", // Q39: Serialization and deserialization
    "3", // Q40: This defines the type of flexbox of the parent container
    "3", // Q41: Align content
    "2", // Q42: design and layout
    "4", // Q43: <document.getElementById('img1').src = 'sample.jpg';>
    "3", // Q44: CPQ
];

