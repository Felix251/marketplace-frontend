'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "sonner"

export default function SignInPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      
      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Une erreur est survenue")
      }
      
      toast.success("Connexion réussie !")
      router.push("/dashboard")
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Une erreur est survenue")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>
        
        <Card className="border-blue-100 shadow-md">
          <CardHeader className="bg-white rounded-t-lg border-b border-blue-100">
            <CardTitle className="text-2xl font-bold text-center text-blue-700">Connexion</CardTitle>
            <CardDescription className="text-center text-blue-500">
              Entrez vos identifiants pour accéder à votre compte
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4 pt-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-700">Email</Label>
                <Input 
                  id="email" 
                  name="email"
                  type="email" 
                  placeholder="exemple@email.com" 
                  required
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="border-blue-200 bg-blue-50 focus:border-blue-400 focus:ring-blue-300"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="text-blue-700">Mot de passe</Label>
                  <Link
                    href="/mot-de-passe-oublie"
                    className="text-xs text-blue-500 hover:text-blue-700 underline-offset-4 hover:underline"
                  >
                    Mot de passe oublié?
                  </Link>
                </div>
                <Input 
                  id="password" 
                  name="password"
                  type="password" 
                  required
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="border-blue-200 bg-blue-50 focus:border-blue-400 focus:ring-blue-300"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
                disabled={isLoading}
              >
                {isLoading ? "Connexion en cours..." : "Se connecter"}
              </Button>
              
              <div className="relative flex items-center justify-center">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-blue-100" />
                </div>
                <span className="relative bg-white px-2 text-xs text-blue-500">Ou continuer avec</span>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <Button type="button" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                    <path
                      d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
                      fill="#EA4335"
                    />
                    <path
                      d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.08L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12.0004 24C15.2404 24 17.9654 22.935 19.9454 21.095L16.0804 18.075C15.0054 18.785 13.6204 19.25 12.0004 19.25C8.8704 19.25 6.21537 17.14 5.2654 14.295L1.27539 17.39C3.25539 21.31 7.3104 24 12.0004 24Z"
                      fill="#34A853"
                    />
                  </svg>
                  Google
                </Button>
                <Button type="button" variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                      fill="#1877F2"
                    />
                  </svg>
                  Facebook
                </Button>
              </div>
            </CardContent>
          </form>
          
          <CardFooter className="flex flex-col items-center gap-2 bg-white rounded-b-lg border-t border-blue-100 pt-4">
            <div className="text-sm text-blue-500">
              Vous n&apos;avez pas de compte?{" "}
              <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-800 underline-offset-4 hover:underline">
                S&apos;inscrire
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}