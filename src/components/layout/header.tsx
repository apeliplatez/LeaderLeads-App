
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { href: '/servicios', label: 'Servicios' },
  { href: '/modelo-ll', label: 'Modelo LL' },
  { href: '/somos-ll', label: 'Somos LL' },
  { href: '/#opiniones', label: 'Opiniones' },
  { href: '/insights', label: 'Insights' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-card/80 backdrop-blur-lg sticky top-0 left-0 right-0 z-50 border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Leader<span className="text-primary">Leads</span>
        </Link>
        <nav className="hidden md:flex space-x-2 items-center">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              href={item.href} 
              className="text-muted-foreground hover:bg-muted hover:text-primary transition-colors text-sm font-medium px-3 py-2 rounded-md"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild>
            <Link href="/contact">Solicitar Auditoría</Link>
          </Button>
        </nav>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card">
            <div className="flex justify-between items-center pr-6 pt-2">
                <Link href="/" className="text-2xl font-bold">
                  Leader<span className="text-primary">Leads</span>
                </Link>
            </div>
            <nav className="flex flex-col space-y-4 pt-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-3 text-muted-foreground hover:bg-muted rounded-md"
                >
                  {item.label}
                </Link>
              ))}
               <div className="px-6 pt-4">
                 <Button asChild className="w-full mt-4">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Solicitar Auditoría
                  </Link>
                </Button>
               </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
