"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Vérification des mots de passe
      if (formData.password !== formData.confirmPassword) {
        toast.error("Les mots de passe ne correspondent pas");
        return;
      }

      // Vérification des conditions d'utilisation
      if (!formData.acceptTerms) {
        toast.error("Veuillez accepter les conditions d'utilisation");
        return;
      }

      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Une erreur est survenue");
      }

      toast.success("Inscription réussie !");
      router.push("/login");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Une erreur est survenue");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800 transition-colors">
          <ArrowLeft className="h-4 w-4" />
          Retour à l&apos;accueil
        </Link>
        
        <Card className="w-full max-w-md border-blue-100 shadow-md overflow-hidden">
          <CardHeader className="bg-white rounded-t-lg border-b border-blue-100 pb-6">
            <CardTitle className="text-2xl font-bold text-center text-blue-700">Créer un compte</CardTitle>
            <CardDescription className="text-center text-blue-500">
              Déjà un compte ?{" "}
              <Link href="/signin" className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline">
                Se connecter
              </Link>
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-5 pt-6 bg-white">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-blue-700 font-medium">Prénom</Label>
                  <div className="relative">
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      disabled={isLoading}
                      placeholder="Jean"
                      className="border-blue-200 bg-white focus:border-blue-400 focus:ring-blue-300 rounded-md pl-3 h-10 shadow-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-blue-700 font-medium">Nom</Label>
                  <div className="relative">
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      disabled={isLoading}
                      placeholder="Dupont"
                      className="border-blue-200 bg-white focus:border-blue-400 focus:ring-blue-300 rounded-md pl-3 h-10 shadow-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-blue-700 font-medium">Email</Label>
                <div className="relative">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="exemple@email.com"
                    className="border-blue-200 bg-white focus:border-blue-400 focus:ring-blue-300 rounded-md pl-3 h-10 shadow-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-blue-700 font-medium">Mot de passe</Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="••••••••"
                    className="border-blue-200 bg-white focus:border-blue-400 focus:ring-blue-300 rounded-md pl-3 h-10 shadow-sm"
                  />
                </div>
                <p className="text-xs text-blue-500 mt-1">Au moins 8 caractères avec des lettres, chiffres et caractères spéciaux</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword" className="text-blue-700 font-medium">Confirmer le mot de passe</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="••••••••"
                    className="border-blue-200 bg-white focus:border-blue-400 focus:ring-blue-300 rounded-md pl-3 h-10 shadow-sm"
                  />
                </div>
              </div>
              <div className="flex items-start space-x-2 pt-2">
                <Checkbox
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) =>
                    setFormData((prev) => ({ ...prev, acceptTerms: checked as boolean }))
                  }
                  disabled={isLoading}
                  className="text-indigo-600 border-blue-300 focus:ring-blue-200 mt-1"
                />
                <Label htmlFor="acceptTerms" className="text-sm text-blue-600 font-normal">
                  J&apos;accepte les{" "}
                  <Link href="/terms" className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline">
                    conditions d&apos;utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link href="/privacy" className="text-indigo-600 hover:text-indigo-800 font-medium hover:underline">
                    politique de confidentialité
                  </Link>
                </Label>
              </div>
            </CardContent>
            <CardFooter className="bg-white rounded-b-lg border-t border-blue-100 pt-6 pb-6">
              <Button 
                type="submit" 
                className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-medium h-11 rounded-md shadow-sm transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Inscription en cours..." : "S'inscrire"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}