This project is made for a Law Chatbot project  but for now its just a basic chatbot UI
# LawBot - Modern Chatbot Interface

LawBot is a modern, responsive chatbot interface built with React and TypeScript. It features a clean design, auto-scrolling chat window, loading indicators, and customizable styling. This project serves as a frontend template for integrating with any chatbot backend.

## Features

*   **Clean & Modern UI:** Minimalist design with a professional look and feel.
*   **Navbar:** Simple navigation bar with a placeholder for a logo (currently "LawBot").
*   **Chat Window:**
    *   Displays messages from both the user and the AI.
    *   **Auto-scrolls** to the latest message.
    *   **Modern scrollbar styling** for a consistent look across browsers (WebKit & Firefox).
    *   Timestamps for each message.
*   **Message Input:**
    *   Clear input field for users to type their messages.
    *   "Send" button.
    *   Input and button are disabled while waiting for an AI response.
*   **Loading Indicator:** A visual loader is displayed while the "AI" is "thinking" (simulating an API call).
*   **Responsive Design:** Basic responsiveness for various screen sizes.
*   **TypeScript:** For type safety and improved developer experience.
*   **Component-Based:** Structured with reusable React components.

## Technologies Used

*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **CSS3:** For styling the components, including modern scrollbar styles.
*   **HTML5:** For the basic structure.
*   **Create React App:** Used to bootstrap the project.

## Project Structure
my-lawbot-app/   
├── public/        
│ ├── index.html    
│ └── ... (other public assets)    
├── src/    
│ ├── components/    
│ │ ├── ChatWindow.tsx    
│ │ ├── Loader.tsx   
│ │ ├── MessageInput.tsx   
│ │ └── Navbar.tsx    
│ ├── App.tsx   
│ ├── index.tsx   
│ ├── styles.css // Global and component styles    
│ └── ... (other TS files like react-app-env.d.ts)   
├── .gitignore    
├── package.json    
├── README.md // You are here!    
└── tsconfig.json```    

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
## Prerequisites
* Node.js (v14 or later recommended)
* **npm** (usually comes with Node.js) or **yarn**

## Installation
### Clone the repository:

```bash
  git clone https://github.com/semihcakir18/BasicChatbot.git
  cd BasicChatbot
```

## Install dependencies:

```bash
  npm install
```
### or if you prefer yarn:

```bash
  yarn install
```

## Running the Application

To start the development server:

```bash
  npm start
```

or

```bash
  yarn start
```

This will open the application in your default web browser, usually at http://localhost:3000. The page will reload if you make edits.

## Building for Production
### To create an optimized build of the app for production:
    npm run build
### or
    yarn build

This will create a build folder in your project directory with the static assets.

## How It Works

* **App.tsx:** The main component that orchestrates the Navbar, ChatWindow, and MessageInput. It manages the state of messages and the loading status.
* **Navbar.tsx:** Displays the top navigation bar with the "LawBot" title.
* **ChatWindow.tsx:**
    *    Renders the list of messages.
    *    Uses a useRef and useEffect hook to automatically scroll to the bottom when new messages are added.
    *    Displays the Loader component when isLoading is true.
* **MessageInput.tsx:** Provides a form for the user to type and send messages. It calls the onSendMessage prop when a message is submitted.
* **Loader.tsx:** A simple CSS-based loading spinner component.
* **styles.css:** Contains all the CSS for the application, including global styles, component-specific styles, and modern scrollbar implementations.
The AI responses are currently simulated using setTimeout in App.tsx. To connect to a real backend, you would replace this simulation with an API call (e.g., using fetch or axios) in the handleSendMessage function.

## Customization
* **Logo:** Change "LawBot" in src/components/Navbar.tsx to your desired logo text or an <img> tag.
* **Styling:** Modify src/styles.css to change colors, fonts, and layout. The CSS is organized by component for easier navigation.
* **AI Integration:** Update the handleSendMessage function in src/App.tsx to make requests to your chatbot backend API.
* **Initial Message:** Change the initial AI message in the useEffect hook within App.tsx.

## Future Enhancements (Suggestions)
* **Implement actual API calls to a chatbot backend.**
* **Add error handling for API requests.**
* **Persist chat history (e.g., using local storage or a backend database).**
* **Support for markdown rendering in messages.**
* **Add user authentication.**
* **Improve accessibility (ARIA attributes, keyboard navigation).**
* **More sophisticated state management (e.g., Redux, Zustand).**