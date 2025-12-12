// Authentication utility functions
export interface User {
  email: string
  name: string
  studentId: string
  section: string
  enrollmentNo: string
}

const VALID_CREDENTIALS = {
  email: "Shivamshandilya27@gmail.com",
  password: "Shobhit@123",
  userData: {
    email: "Shivamshandilya27@gmail.com",
    name: "Shivam Kumar",
    studentId: "20240110339",
    section: "2nd Year Section – A",
    enrollmentNo: "MRT24UGBCA065",
  },
}

export function validateCredentials(email: string, password: string): User | null {
  if (email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password) {
    return VALID_CREDENTIALS.userData
  }
  return null
}

export function setAuthToken(user: User) {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user))
  }
}

export function getAuthToken(): User | null {
  if (typeof window !== "undefined") {
    const user = localStorage.getItem("user")
    return user ? JSON.parse(user) : null
  }
  return null
}

export function clearAuthToken() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user")
  }
}
