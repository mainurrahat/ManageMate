# 📌 Task Manager (React)

A simple and elegant Task Management Application built with React, featuring:

Add Task


Edit Task


Delete Task


Favourite / Unfavourite


Search Task


Modal form (Framer Motion)


Beautiful UI with Tailwind CSS


Toast notifications


Clean Component Architecture

🚀 Features
✅ Add New Task

Click “Add Task” → Modal opens → Fill details → Task added to the list.

✏️ Edit Existing Task

Click Edit on any task → Modal opens with pre-filled data → Save → Task updated.

⭐ Favourite / Unfavourite

Click star icon to toggle as favorite.

❌ Delete Task

Click Delete to remove the task from the list.

🔍 Search Task

Search bar filters tasks in real-time.

🎨 Smooth Animations

Handled using Framer Motion.

🔔 Notifications

Success messages using React Toastify.

🧩 Project Structure
src/

│
├── assets/

│
├── Components/

│   ├── TaskPacket/

│   │   ├── AddTaskModal.jsx

│   │   ├── SearchTask.jsx

│   │   ├── TaskAction.jsx

│   │   ├── TaskBoard.jsx

│   │   ├── TaskList.jsx

│   │

│   ├── Footer.jsx

│   ├── Hero.jsx

│   ├── Navber.jsx

│
├── App.css

├── App.jsx

├── main.jsx

└── index.css


📦 Technologies Used

Technology	Purpose

React	Frontend UI

Tailwind CSS	Styling

Framer Motion	Animations

Lucide Icons	Icons

React Toastify	Notifications

UUID / crypto	Unique Task IDs

⚙️ How It Works

🔸 Add Task Flow

Add Task Button → Open Modal → User Fills Input → Save → Task added to state → UI updates

🔸 Edit Task Flow

Edit Button → Open Modal with filled fields → Save → Task updated in state → UI updates

🔸 Delete Task Flow

Delete Button → Task removed from array → UI updates

📥 Installation
``
npm install
``

Install extra libraries:
``
npm install framer-motion react-toastify lucide-react
``
▶️ Run the Project
``
npm run dev
``
📝 Example Task Object
``
{
  id: "uuid",
  title: "Learn React",
  description: "Study the React documentation",
  tags: ["web", "frontend"],
  priority: "High",
  isFavourite: true
}
``

❤️ Author

Made by Mainur Islam Rahat
React Developer | JavaScript | Tailwind CSS<img width="568" height="1160" alt="image" src="https://github.com/user-attachments/assets/32586021-deb9-4f4a-b5d4-def9c61bfc6e" />
