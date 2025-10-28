

🚀 How to Run
Option 1: Direct File Opening

Download the index.html file
Double-click the file to open it in your default browser
Start adding tasks!

Option 2: Using a Local Server

Clone or download this repository
Navigate to the project directory
Open index.html in your browser, or use a local server:

bash   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js with http-server
   npx http-server

Open your browser and go to http://localhost:8000

Option 3: GitHub Pages

Fork this repository
Go to Settings → Pages
Select the main branch as source
Your app will be live at https://yourusername.github.io/todo-list-app

🛠️ Technologies Used

HTML5: Structure and semantic markup
CSS3: Styling with gradients, animations, and flexbox
JavaScript (ES6): Core functionality and DOM manipulation

📋 How It Works
The application uses JavaScript concepts including:
1. DOM Manipulation

Dynamic element creation and removal
Event listeners for user interactions
Real-time UI updates

2. Array Methods

push() - Adding new tasks
filter() - Removing tasks
find() - Locating specific tasks
forEach() - Rendering task list

3. Event Handling

Click events for buttons
Keyboard events (Enter key)
Change events for checkboxes

4. Conditional Rendering

Show/hide edit mode
Display empty state when no tasks
Visual feedback for completed tasks

5. State Management

Tasks stored in memory during session
Real-time statistics calculation
Edit mode tracking

🎨 Design Features

Gradient Background: Eye-catching purple gradient
Glass-morphism: Semi-transparent container with backdrop blur
Smooth Animations: Slide-in effects for new tasks
Hover Effects: Interactive button and task item animations
Custom Scrollbar: Styled scrollbar for the task list
Responsive Layout: Adapts to different screen sizes

🧪 Testing Checklist

 Add new tasks by clicking "Add Task" button
 Add new tasks by pressing Enter key
 Edit existing tasks inline
 Delete tasks with confirmation
 Mark tasks as complete/incomplete
 Statistics update in real-time
 Empty state displays when no tasks
 Responsive design works on mobile
 Smooth animations throughout
 Input validation (empty tasks prevented)

📱 Browser Compatibility
Works on all modern browsers:

Chrome (recommended)
Firefox
Safari
Edge

🎓 Learning Concepts Demonstrated
This project demonstrates key JavaScript concepts:

Variables and data types
Functions and arrow functions
Array manipulation
Object handling
DOM traversal and manipulation
Event delegation
Conditional statements
Template literals
Modern ES6+ syntax

📝 Future Enhancements
Possible improvements:

Local storage persistence
Task categories/tags
Due dates and reminders
Dark/light theme toggle
Drag and drop reordering
Search and filter functionality
Export/import tasks

👨‍💻 Author
Created as part of a JavaScript learning assignment.
📄 License
Free to use for educational purposes.

Enjoy organizing your tasks with style! ✨