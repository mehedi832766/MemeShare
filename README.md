Meme Share App

A web application where users can share memes with a title and a short description.

🚀 Features

Real-time feature-enriched text editor (TinyMCE)

Share memes with a title and short description

Collection of self-shared memes

View memes shared by everyone in one place

Authentication and Database powered by Appwrite

State Management with RTK (Redux Toolkit)

Form Handling with React Hook Form

Deployed on Vercel

🛠️ Tech Stack

Frontend: React.js (Vite), Tailwind CSS, HTML

Backend & Authentication: Appwrite

State Management: Redux Toolkit (RTK)

Editor: TinyMCE

📂 Project Structure
📦 meme-share
┣ 📂 public             # Public assets (favicon, index.html, etc.)
┣ 📂 src
┃ ┣ 📂 appwrite         # Appwrite config and API services
┃ ┣ 📂 assets           # Static files (images, icons, etc.)
┃ ┣ 📂 components       # UI components (Navbar, MemeCard, etc.)
┃ ┣ 📂 conf             # Configuration files
┃ ┣ 📂 pages            # Page components (Home, Upload, Profile, etc.)
┃ ┣ 📂 store            # Redux Toolkit state management
┃ ┣ 📜 App.jsx           # Main App Component
┃ ┣ 📜 main.jsx         # React DOM entry point
┃ ┣ 📜 App.css          # Global styles
┃ ┣ 📜 index.css        # Tailwind styles
┣ 📜 .env               # Environment variables
┣ 📜 .gitignore         # Git ignore file
┣ 📜 eslint.config.js   # ESLint configuration
┣ 📜 index.html         # Root HTML file
┣ 📜 package.json       # Project dependencies
┣ 📜 package-lock.json  # Dependency lock file
┣ 📜 vite.config.js     # Vite configuration
┣ 📜 README.md          # Project documentation

🏗️ Installation

Clone the repository:

git clone https://github.com/yourusername/meme-share.git

Navigate to the project directory:

cd meme-share

Install dependencies:

npm install

Create an .env file and configure your Appwrite credentials:

VITE_APPWRITE_ENDPOINT=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id

Start the development server:

npm run dev

🚀 Deployment

The project is deployed on Vercel. You can deploy it yourself by running:

vercel

📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

💡 Feel free to contribute to this project! 🎉
