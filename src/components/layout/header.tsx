"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Logo from '@/components/layout/logo';
import { ThemeToggle } from '@/components/theme-toggle';

type NavItem = {
  href: string;
  label: string;
  subItems?: { href: string; label: string; description: string }[];
};

const navItems: NavItem[] = [
  {
    href: '/servicios',
    label: 'Servicios',
    subItems: [
      {
        href: '/servicios/generacion-leads',
        label: 'Sistema de Generación de leads',
        description: 'Atrae clientes cualificados de forma predecible.',
      },
      {
        href: '/servicios/marketing-automatizado',
        label: 'Marketing Automatizado',
        description: 'Funnels inteligentes que nutren e incentivan la compra.',
      },
      {
        href: '/servicios/ecommerce',
        label: 'Construcción y gestión de E-commerce',
        description: 'Tiendas optimizadas para máxima conversión.',
      },
      {
        href: '/servicios/soporte-rrhh',
        label: 'Soporte en RRHH para tus leads',
        description: 'Talento humano entrenado para cerrar tus ventas.',
      },
    ],
  },
  { href: '/modelo-ll', label: 'Modelo LL' },
  { href: '/somos-ll', label: 'Somos LL' },
  { href: '/#opiniones', label: 'Opiniones' },
  { href: '/insights', label: 'Insights' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (label: string) => {
    if (openMobileDropdown === label) {
      setOpenMobileDropdown(null);
    } else {
      setOpenMobileDropdown(label);
    }
  };

  return (
    <header className="bg-card/80 backdrop-blur-lg sticky top-0 left-0 right-0 z-50 border-b">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex space-x-2 items-center">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.subItems ? (
                  <>
                    <Link href={item.href} className="flex items-center gap-1 text-muted-foreground transition-colors text-sm font-medium px-3 py-2 rounded-md group-hover:bg-primary/10 group-hover:text-primary border border-transparent group-hover:border-primary/20">
                      {item.label}
                      <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                    </Link>
                    <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-primary/20 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block p-3 rounded-lg hover:bg-primary/5 hover:text-primary transition-colors group/item"
                        >
                          <div className="font-semibold text-foreground group-hover/item:text-primary">
                            {subItem.label}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1">
                            {subItem.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:bg-muted hover:text-primary transition-colors text-sm font-medium px-3 py-2 rounded-md"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <Button asChild>
              <Link href="/contact">Solicitar Auditoría</Link>
            </Button>
          </nav>
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card overflow-y-auto">
              <div className="flex justify-between items-center pr-6 pt-2">
                <Link href="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                  <Logo />
                </Link>
              </div>
              <nav className="flex flex-col space-y-2 pt-10">
                {navItems.map((item) => (
                  <div key={item.label} className="w-full">
                    {item.subItems ? (
                      <>
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className="flex items-center justify-between w-full px-6 py-3 text-left text-muted-foreground hover:bg-muted rounded-md font-medium"
                        >
                          {item.label}
                          <ChevronDown
                            className={`h-4 w-4 transition-transform ${openMobileDropdown === item.label ? 'rotate-180' : ''}`}
                          />
                        </button>
                        {openMobileDropdown === item.label && (
                          <div className="pl-6 w-full flex flex-col space-y-1 mt-1 border-l-2 border-primary/20 ml-6">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-2 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary rounded-md"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-6 py-3 text-muted-foreground hover:bg-muted rounded-md font-medium"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="px-6 pt-4 pb-10">
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
      </div>
    </header>
  );
}
