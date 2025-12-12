"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { validateCredentials, setAuthToken } from "@/lib/auth"
import { toast, useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const router = useRouter()
  const { toasts } = useToast()   // ← updated


  const handleLogin = () => {
    const user = validateCredentials(email, password)

    if (user) {
      setAuthToken(user)
      toast({
        title: "Login Successful",
        description: `Welcome ${user.name}!`,
      })
      router.push("/home")
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid email or password",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col px-6 py-8">
      <h1 className="text-4xl font-bold text-[#c41e3a] mb-8 text-center">COLLEGE CAMPUS</h1>

      <div className="flex-1 flex flex-col justify-center max-w-md mx-auto w-full">
        <h2 className="text-2xl text-[#2c6975] font-semibold mb-8 text-center">Please Login Here:-</h2>

        <div className="space-y-6">
          <Input
            type="email"
            placeholder="UserId/Username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b-2 border-[#2c6975] border-t-0 border-l-0 border-r-0 rounded-none bg-transparent px-0 text-lg h-12 focus-visible:ring-0 focus-visible:border-[#6c3ba3]"
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-b-2 border-[#2c6975] border-t-0 border-l-0 border-r-0 rounded-none bg-transparent px-0 text-lg h-12 focus-visible:ring-0 focus-visible:border-[#6c3ba3]"
            onKeyDown={(e) => e.key === "Enter" && handleLogin()}
          />

          <div className="flex items-center space-x-2 pt-4">
            <Checkbox
              id="remember"
              checked={rememberMe}
              onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              className="border-2 border-[#2c6975]"
            />
            <label htmlFor="remember" className="text-base text-[#2c6975]">
              CheckBox
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-12">
        <Button
          onClick={handleLogin}
          className="bg-[#6c3ba3] hover:bg-[#5a2f8a] text-white text-xl font-semibold px-16 py-6 rounded-full h-auto"
        >
          Login
        </Button>
      </div>
    </div>
  )
}
