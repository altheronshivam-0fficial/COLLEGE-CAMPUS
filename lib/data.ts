// Mock data for the application
export interface Post {
  id: string
  institution: string
  date: string
  course: string
  content: string
  author: string
  likes: number
  comments: number
  shares: number
}

export interface Subject {
  id: string
  name: string
  code: string
  professor: string
  type: "theory" | "lab"
}

export const posts: Post[] = [
  {
    id: "1",
    institution: "Shobhit Institute of Engineering and Technology",
    date: "25/09/2025",
    course: "BCA (A)",
    content:
      "IMPORTANT - ATTENTION ALL LECTURES OF CLASSES ARE NOW AVAILABLE FOR VIEW ONLY.\n\nT01BBCCA0302 – Object Oriented Programming using C++\nT01BCCA0303 – Fundamental Of Database Management System\nT01BCCA0304 – Digital Electronics and Computer Organization",
    author: "Shivam Kumar",
    likes: 0,
    comments: 0,
    shares: 0,
  },
]

export const subjects: Subject[] = [
  {
    id: "1",
    name: "OBJECT ORIENTED PROGRAMMING USING C++",
    code: "T01BCCA0302",
    professor: "Dr. Surbhi Saroha",
    type: "theory",
  },
  {
    id: "2",
    name: "FUNDAMENTAL OF DATABASE MANAGEMENT SYSTEM",
    code: "T01BCCA0303",
    professor: "Priyanka Saini",
    type: "theory",
  },
  {
    id: "3",
    name: "DIGITAL ELECTRONICS AND COMPUTER ORGANIZATION",
    code: "T01BCCA0304",
    professor: "Rakhi Bhardwaj",
    type: "theory",
  },
  {
    id: "4",
    name: "FUNDAMENTAL OF DATABASE MANAGEMENT SYSTEM LAB",
    code: "T01BCCA0303",
    professor: "Priyanka Saini",
    type: "lab",
  },
  {
    id: "5",
    name: "OBJECT ORIENTED PROGRAMMING USING C++ LAB",
    code: "T01BCCA0302",
    professor: "Dr. Surbhi Saroha",
    type: "lab",
  },
]

export const menuItems = [
  { id: "events", label: "EVENTS", icon: "📅", href: "/events" },
  { id: "classroom", label: "CLASSROOM", icon: "🏫", href: "/classroom" },
  { id: "subscription", label: "SUBSCRIPTION", icon: "💳", href: "/subscription" },
  { id: "earnings", label: "YOUR EARNINGS", icon: "💰", href: "/earnings" },
  { id: "feedback", label: "FEEDBACK", icon: "💬", href: "/feedback" },
  { id: "lost-found", label: "LOST & FOUND", icon: "🔍", href: "/lost-found" },
  { id: "help", label: "HELP", icon: "❓", href: "/help" },
  { id: "settings", label: "SETTINGS", icon: "⚙️", href: "/settings" },
]
