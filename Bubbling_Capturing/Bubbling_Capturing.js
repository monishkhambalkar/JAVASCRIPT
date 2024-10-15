// Event bubbling and capturing are two phases in the way browser events propagate through the Document Object Model (DOM) in JavaScript.

// 1. Event Bubbling (Bottom to Top):
// In event bubbling, the event is first captured and handled by the innermost element, and then it propagates (or bubbles) outward to its ancestors in the DOM.
// For example, if you have nested elements (like a div inside a section inside a body), and you click on the div, the event bubbles up from the div to the section, and finally to the body.
// 2. Event Capturing (Top to Bottom):
// In event capturing (also called the capture phase), the event is first handled by the outermost element and then propagates inward toward the target element.
// Using the same example (div inside section inside body), in capturing, the body would handle the event first, followed by the section, and finally the div.
// Phases of Event Propagation:
// Capture Phase: Events move from the outermost element (like body) down to the target element.
// Target Phase: The event reaches the target element (the one that was actually interacted with).
// Bubbling Phase: After the target phase, the event bubbles back up to the outer elements.
// How to Use Event Capturing and Bubbling:
// By default, event listeners in JavaScript use bubbling. However, you can make them use capturing by passing a third parameter (true) to addEventListener.
// javascript
// Copy code
// // Event Bubbling (default)
// element.addEventListener('click', function(event) {
//   console.log('Event Bubbling');
// });

// // Event Capturing
// element.addEventListener('click', function(event) {
//   console.log('Event Capturing');
// }, true);  // Passing true enables capturing phase
// Stopping Event Propagation:
// To stop an event from bubbling or capturing further, you can use event.stopPropagation().
// javascript
// Copy code
// element.addEventListener('click', function(event) {
//   event.stopPropagation();  // Prevents the event from bubbling or capturing further
//   console.log('Propagation stopped');
// });
// Practical Example:
// html
// Copy code
// <body>
//   <section>
//     <div>Click Me!</div>
//   </section>
// </body>

// <script>
//   document.body.addEventListener('click', () => console.log('Body Clicked'), false);  // Bubbling (default)
//   document.querySelector('section').addEventListener('click', () => console.log('Section Clicked'), false);  // Bubbling
//   document.querySelector('div').addEventListener('click', () => console.log('Div Clicked'), false);  // Bubbling
  
//   // Capturing version
//   document.body.addEventListener('click', () => console.log('Body Captured'), true);  // Capturing
//   document.querySelector('section').addEventListener('click', () => console.log('Section Captured'), true);  // Capturing
//   document.querySelector('div').addEventListener('click', () => console.log('Div Captured'), true);  // Capturing
// </script>
// If you click on the div, the output would show both bubbling and capturing behaviors.





// You said:
//  document.body.addEventListener('click', () => console.log('Body Clicked'), false);  // Bubbling (default)
//   document.querySelector('section').addEventListener('click', () => console.log('Section Clicked'), false);  // Bubbling
//   document.querySelector('div').addEventListener('click', () => console.log('Div Clicked'), false);  // Bubbling
  
//   // Capturing version
//   document.body.addEventListener('click', () => console.log('Body Captured'), true);  // Capturing
//   document.querySelector('section').addEventListener('click', () => console.log('Section Captured'), true);  // Capturing
//   document.querySelector('div').addEventListener('click', () => console.log('Div Captured'), true);  // Capturing
// </script>
// If you click on

// please explin with eample 
// ChatGPT said:
// ChatGPT
// Let's break down what happens when you run the code you provided and click on the div. The code contains both event bubbling and event capturing listeners.

// Code Breakdown:
// Bubbling Listeners (default)

// These listeners trigger when the event is in the bubbling phase (when the event propagates from the target element outward to its ancestors).
// You have set bubbling event listeners on div, section, and body using false as the third parameter (or the default behavior if omitted).
// Capturing Listeners

// These listeners trigger in the capturing phase (when the event propagates from the outermost element inward to the target).
// You set capturing event listeners on div, section, and body using true as the third parameter.
// Example HTML Structure:
// html
// Copy code
// <body>
//   <section>
//     <div>Click Me!</div>
//   </section>
// </body>
// Expected Event Propagation:
// Case 1: Clicking the div
// When you click the div, the event first goes through the capturing phase (from the body down to the div), and then the bubbling phase (from the div back up to the body).

// Here’s the detailed sequence:

// Capturing Phase (Top-Down):

// The event starts at the outermost element, which is body, and works its way down to div.
// In the capturing phase:
// Body Captured gets logged first.
// Section Captured gets logged second.
// Div Captured gets logged third.
// Target Phase:

// The event reaches the div, which is the element you clicked.
// Bubbling Phase (Bottom-Up):

// After the event reaches the target, it starts bubbling up from div to its ancestors.
// In the bubbling phase:
// Div Clicked gets logged first.
// Section Clicked gets logged second.
// Body Clicked gets logged third.
// Summary of Event Sequence When You Click div:
// Body Captured (capturing phase)
// Section Captured (capturing phase)
// Div Captured (capturing phase)
// Div Clicked (bubbling phase)
// Section Clicked (bubbling phase)
// Body Clicked (bubbling phase)
// Complete Example Code:
// html
// Copy code
//<body>
//   <section>
//     <div>Click Me!</div>
//   </section>

  <script>
    // Bubbling (default)
    document.body.addEventListener('click', () => console.log('Body Clicked'), false);  
    document.querySelector('section').addEventListener('click', () => console.log('Section Clicked'), false);  
    document.querySelector('div').addEventListener('click', () => console.log('Div Clicked'), false);  
    
    // Capturing version
    document.body.addEventListener('click', () => console.log('Body Captured'), true);  
    document.querySelector('section').addEventListener('click', () => console.log('Section Captured'), true);  
    document.querySelector('div').addEventListener('click', () => console.log('Div Captured'), true);  
{/* </script> */}
{/* </body> */}


{/* Visualizing the Propagation:
Capturing phase (Top to Bottom):

Body -> Section -> Div
Bubbling phase (Bottom to Top):

Div -> Section -> Body
By clicking on div, both capturing and bubbling phases are triggered, and you can see how the event flows through the DOM from the outermost to the innermost element and back up again.

 */}



{/* 
You said:
means how console will print in both case
ChatGPT said:
ChatGPT
When you click on the div, the console will log messages during both the capturing and bubbling phases. The order of logs will depend on which phase the event is currently in.

Let's break it down in two steps:

1. Capturing Phase (Top to Bottom):
The event flows from the outermost element (body) down to the target element (div).
During this phase, the capturing event listeners (those with the third parameter set to true) are triggered first.
2. Bubbling Phase (Bottom to Top):
After reaching the target element (div), the event flows back up to the outermost element (body).
During this phase, the bubbling event listeners (those with the third parameter set to false or omitted) are triggered.
Console Log Output:
When You Click the div, the Console Will Print:
Capturing Phase (Top-Down):

The event is captured from body → section → div.
The console will log:
text
Copy code
Body Captured
Section Captured
Div Captured
Bubbling Phase (Bottom-Up):

After the event is captured and reaches the div, it bubbles back from div → section → body.
The console will log:
text
Copy code
Div Clicked
Section Clicked
Body Clicked
Full Output in the Console:
When you click the div, the complete output in the console will look like this:

text
Copy code
Body Captured   // Capturing phase (top to bottom)
Section Captured
Div Captured
Div Clicked     // Bubbling phase (bottom to top)
Section Clicked
Body Clicked
Flow of Events:
Capturing Phase: The event is captured as it moves down the DOM tree, starting from body, to section, and finally to div.
Bubbling Phase: After reaching div, the event bubbles up the DOM tree from div, to section, and then to body.
By seeing this output, you can visualize how event propagation works in the DOM and how capturing and bubbling listeners get triggered. */}