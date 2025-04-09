import Link from "next/link"
import { Search, ShoppingBag, Store } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MainHeader() {
  return (
    <header className="sticky px-4 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Store className="h-6 w-6" />
            <span className="hidden md:inline-block">MarketPlace</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              href="/categories"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Catégories
            </Link>
            <Link
              href="/boutiques"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Boutiques
            </Link>
            <Link
              href="/promotions"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Promotions
            </Link>
            <Link
              href="/nouveautes"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Nouveautés
            </Link>
          </nav>
        </div>

        <div className="hidden md:flex relative w-full max-w-sm items-center mx-4">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Rechercher des produits, boutiques..." className="pl-8" />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Rechercher</span>
          </Button>
          <Link href="/panier">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Panier</span>
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                0
              </span>
            </Button>
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <Button variant="outline" asChild>
              <Link href="/signin">Connexion</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Inscription</Link>
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="outline" size="sm" asChild>
              <Link href="/signin">Connexion</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 