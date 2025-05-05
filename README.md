# Fake News Detection Game - README

## 📌 Overview
This is a browser-based game designed to test your ability to identify fake and real news from around the world. The game offers a user-friendly interface, interactive avatars, and country-specific news data.

## 🚀 How to Run the Game

Since this game uses `localStorage`, it needs to be run from a local server. You cannot simply open the HTML files in your browser using the `file://` protocol.

### Option 1: Using Visual Studio Code with Live Server

1. Open the project folder in VS Code.
2. Install the "Live Server" extension (if not already installed).
3. Right-click on `index.html` and select **"Open with Live Server"**.
4. The game will open in your default browser using `http://localhost:PORT`.

### Option 2: Using Python (if you don't have VS Code)

1. Open a terminal or command prompt.
2. Navigate to the game folder.
3. Run:
   - For Python 3: `python -m http.server`
   - For Python 2: `python -m SimpleHTTPServer`
4. Open your browser and go to `http://localhost:8000`.

---

## 📁 Folder Structure

- 📄 `index.html`, `instructions.html`, `welcome.html`, `avatars.html`, `country.html`, `news.html`, `results.html`  
  — These are the main HTML pages for the game, located in the root directory.

- 📁 `css/`  
  — Contains stylesheets for layout and visuals.

- 📁 `js/`  
  — JavaScript files that control interactivity, data handling, and game logic.

- 📁 `data/`  
  — JSON files with news content for each country:  
    - `news_USA.json`, `news_France.json`, `news_Ukraine.json`, `news_Brazil.json`, `news_China.json`, `news_Venezuela.json`

- 📁 `logo/`  
  — Contains different versions of the game’s logo.

- 📁 `icons/`  
  — Includes:
    - Icons for the results (correct/incorrect responses).
    - An image for the instructions page.

- 📁 `avatars/`  
  — Avatars for the player, each with two mood variations:
    - A “saint” version shown if the player gets more than 50% correct.
    - A “devilish” version shown otherwise.

- 📁 `flags/`  
  — Country flag icons used on the country selection page.

---

## 💾 Stored Data

The game uses `localStorage` to remember the following information during a session:
- Player’s name
- Chosen avatar
- Selected country
- Total score
- Answers (correct/incorrect, fake/real)

---

## 🔄 Page Flow

1. `index.html` — Game start screen  
2. `instructions.html` — How to play  
3. `welcome.html` — Player name input  
4. `avatars.html` — Avatar selection  
5. `country.html` — Country selection  
6. `news.html` — Gameplay screen (news judging)  
7. `results.html` — Final results and feedback

---

## 🎨 Design Note

All visual assets and UI elements were custom-designed specifically for this game. No external libraries or templates were used for the graphic design.

---

Have fun and stay sharp! 🔍📰
