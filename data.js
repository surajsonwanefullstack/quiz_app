const quizCategory = [
    { 
        'quiz_name': 'html', 
        'questions': [
            { 'question': 'What does HTML stand for?', 'answers': ['Hyper Text Markup Language', 'High Text Markup Language', 'Hyper Tool Markup Language', 'Hyperlink Markup Language'], 'answer': 'Hyper Text Markup Language' },
            { 'question': 'Which HTML tag is used to define an unordered list?', 'answers': ['<ol>', '<ul>', '<li>', '<list>'], 'answer': '<ul>' },
            { 'question': 'Which attribute specifies an alternate text for an image?', 'answers': ['alt', 'title', 'src', 'href'], 'answer': 'alt' },
            { 'question': 'Which tag is used to create a hyperlink?', 'answers': ['<link>', '<a>', '<href>', '<url>'], 'answer': '<a>' },
            { 'question': 'What is the correct HTML for inserting a line break?', 'answers': ['<br>', '<lb>', '<break>', '<nl>'], 'answer': '<br>' },
            { 'question': 'Which HTML element is used to define important text?', 'answers': ['<strong>', '<b>', '<important>', '<em>'], 'answer': '<strong>' },
            { 'question': 'How do you specify the character encoding in HTML5?', 'answers': ['<meta charset="UTF-8">', '<charset>UTF-8</charset>', '<encoding>UTF-8</encoding>', '<meta encoding="UTF-8">'], 'answer': '<meta charset="UTF-8">' },
            { 'question': 'Which tag is used to define a table row?', 'answers': ['<tr>', '<td>', '<th>', '<row>'], 'answer': '<tr>' },
            { 'question': 'What is the default display property of a <div> element?', 'answers': ['inline', 'block', 'flex', 'grid'], 'answer': 'block' },
            { 'question': 'Which tag is used to define a footer for a document?', 'answers': ['<footer>', '<bottom>', '<section>', '<end>'], 'answer': '<footer>' }
        ] 
    },

    { 
        'quiz_name': 'css', 
        'questions': [
            { 'question': 'What does CSS stand for?', 'answers': ['Cascading Style Sheets', 'Creative Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets'], 'answer': 'Cascading Style Sheets' },
            { 'question': 'Which property is used to change text color in CSS?', 'answers': ['color', 'text-color', 'font-color', 'background-color'], 'answer': 'color' },
            { 'question': 'Which CSS property controls the text size?', 'answers': ['font-size', 'text-size', 'size', 'font-style'], 'answer': 'font-size' },
            { 'question': 'What is the default position value in CSS?', 'answers': ['static', 'relative', 'absolute', 'fixed'], 'answer': 'static' },
            { 'question': 'Which CSS property is used to change background color?', 'answers': ['background-color', 'color', 'bg-color', 'background'], 'answer': 'background-color' },
            { 'question': 'Which property is used to make a font bold?', 'answers': ['font-weight', 'bold', 'text-style', 'font-style'], 'answer': 'font-weight' },
            { 'question': 'Which value of position property makes an element stick to its nearest positioned ancestor?', 'answers': ['relative', 'absolute', 'fixed', 'sticky'], 'answer': 'sticky' },
            { 'question': 'Which CSS unit is relative to the root element’s font size?', 'answers': ['em', 'rem', 'px', '%'], 'answer': 'rem' },
            { 'question': 'Which CSS property is used for spacing between lines of text?', 'answers': ['line-height', 'spacing', 'letter-spacing', 'text-indent'], 'answer': 'line-height' },
            { 'question': 'Which CSS property is used to hide elements without removing them from the layout?', 'answers': ['visibility', 'display', 'opacity', 'hide'], 'answer': 'visibility' }
        ] 
    },

    { 
        'quiz_name': 'javascript', 
        'questions': [
            { 'question': 'Which keyword is used to declare a variable in JavaScript?', 'answers': ['var', 'let', 'const', 'All of the above'], 'answer': 'All of the above' },
            { 'question': 'Which symbol is used for single-line comments in JavaScript?', 'answers': ['//', '/*', '#', '--'], 'answer': '//' },
            { 'question': 'What is the output of `typeof null`?', 'answers': ['null', 'undefined', 'object', 'number'], 'answer': 'object' },
            { 'question': 'Which method is used to print something to the console?', 'answers': ['console.log()', 'print()', 'echo()', 'write()'], 'answer': 'console.log()' },
            { 'question': 'Which JavaScript function converts a string to an integer?', 'answers': ['parseInt()', 'parseFloat()', 'toInteger()', 'Number()'], 'answer': 'parseInt()' },
            { 'question': 'What does the `NaN` value stand for?', 'answers': ['Not a Null', 'No Assigned Number', 'Not a Number', 'None'], 'answer': 'Not a Number' },
            { 'question': 'Which JavaScript data type is not primitive?', 'answers': ['String', 'Object', 'Boolean', 'Number'], 'answer': 'Object' },
            { 'question': 'Which keyword is used to define a function in JavaScript?', 'answers': ['func', 'function', 'def', 'fn'], 'answer': 'function' },
            { 'question': 'Which method removes the last element from an array?', 'answers': ['pop()', 'push()', 'shift()', 'splice()'], 'answer': 'pop()' },
            { 'question': 'Which JavaScript loop executes at least once before checking the condition?', 'answers': ['for', 'while', 'do...while', 'foreach'], 'answer': 'do...while' }
        ] 
    },

    { 
        'quiz_name': 'reactjs', 
        'questions': [
            { 'question': 'What is React primarily used for?', 'answers': ['Backend development', 'Building user interfaces', 'Database management', 'Server-side rendering'], 'answer': 'Building user interfaces' },
            { 'question': 'Which company developed React?', 'answers': ['Google', 'Facebook', 'Microsoft', 'Apple'], 'answer': 'Facebook' },
            { 'question': 'What is JSX?', 'answers': ['JavaScript XML', 'Java Syntax Extension', 'JSON Extension', 'Java XML Syntax'], 'answer': 'JavaScript XML' },
            { 'question': 'Which React hook is used for state management?', 'answers': ['useState', 'useEffect', 'useReducer', 'useContext'], 'answer': 'useState' },
            { 'question': 'Which method is used to render components in React?', 'answers': ['ReactDOM.render()', 'render()', 'React.render()', 'componentRender()'], 'answer': 'ReactDOM.render()' },
            { 'question': 'Which React hook runs after every render by default?', 'answers': ['useState', 'useEffect', 'useRef', 'useMemo'], 'answer': 'useEffect' },
            { 'question': 'Which prop helps pass data from a parent to a child component?', 'answers': ['state', 'props', 'context', 'hook'], 'answer': 'props' },
            { 'question': 'What is the default behavior of React in terms of updates?', 'answers': ['Synchronous updates', 'Asynchronous updates', 'Lazy updates', 'Real-time updates'], 'answer': 'Asynchronous updates' },
            { 'question': 'What does the useRef hook return?', 'answers': ['A DOM reference', 'A state variable', 'A reducer function', 'An event listener'], 'answer': 'A DOM reference' },
            { 'question': 'Which lifecycle method is invoked after a component is mounted?', 'answers': ['componentDidMount', 'componentWillMount', 'componentWillUpdate', 'componentDidUpdate'], 'answer': 'componentDidMount' }
        ] 
    }
];


