# 🎨 Background Color Changer

A minimal and interactive React application that instantly changes the page background color with a single click.  
Built with **React Hooks** (`useState`, `useEffect`) and a clean, responsive UI – perfect for demonstrating core React skills to recruiters and developers.



---

## ✨ Features

- **Instant Color Switching** – Click any button to update the background color in real time.
- **React Hooks** – Uses `useState` for state management and `useEffect` to synchronize the DOM with state changes.
- **Responsive Design** – Styled with CSS flexbox, relative units (`vh`, `vw`), and rounded corners for a modern look on any device.
- **Modular Code** – Clean separation of concerns: HTML structure, CSS styling, and React component logic.

---

## 🛠️ Built With

- **React** (with Hooks) – UI library
- **ReactDOM** – Rendering
- **CSS3** – Custom styling with flexbox and relative units
- **ES Modules** – For clean JavaScript imports

---

## 📦 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, etc.)
- A local development server (e.g., [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) or [Vite](https://vitejs.dev/))

### Installation & Running

This project uses **ES modules** and imports React from a CDN. To run it correctly, you need to serve it from a web server.

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/background-color-changer.git
   cd background-color-changer
   ```

2. **Add an import map** to your `background.html` (inside the `<head>`) to resolve bare module imports if not already present:
   ```html
   <script type="importmap">
     {
       "imports": {
         "react": "https://esm.sh/react@18",
         "react-dom/client": "https://esm.sh/react-dom@18/client"
       }
     }
   </script>
   ```
   *Your current `background.html` may already include this; if not, add it.*

3. **Serve the project** – Use any static server:
   - **VS Code Live Server** – Right-click `background.html` and select "Open with Live Server".
   - **Python** – `python -m http.server 3000` and visit `http://localhost:3000`.
   - **Node.js** – `npx serve` and open the provided URL.

4. **Explore the app** – Click the color buttons and watch the background change instantly!

---

## 📂 Project Structure

```
background-color-changer/
├── background.html       # Main HTML entry point (loads React and the app)
├── background.css        # All styles (card layout, buttons, body)
├── background.js         # React component and rendering logic
└── README.md             # Project documentation
```

---

## 🚀 How It Works

- The `App` component maintains a `color` state variable (default: `"white"`).
- Each button has an `onClick` handler that updates the state to its respective color.
- The `useEffect` hook listens to changes in `color` and applies the new background color to `document.body`.
- The UI is styled with a centered card, evenly spaced buttons, and subtle shadows.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to fork the repository and submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 👤 Author

**Vansh**  
- GitHub: [@Vansh140507](https://github.com/Vansh140507)  
- LinkedIn: [vansh-bhatnagar-4ba792370](https://linkedin.com/in/vansh-bhatnagar-4ba792370)

---

## 🙏 Acknowledgements

- [React Documentation](https://reactjs.org/) – For the excellent guides and API references.
- [MDN Web Docs](https://developer.mozilla.org/) – For CSS and web standards.
- Inspired by simple UI challenges to practice React fundamentals.

---

⭐️ **If you find this project useful, please give it a star – it helps a lot!**
