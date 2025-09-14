
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-card text-foreground border-t">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold mb-2">
              Leader<span className="text-primary">Leads</span>
            </Link>
            <p className="text-muted-foreground mt-2">De clics a clientes leales.</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Compañía</h4>
            <ul className="space-y-3">
              <li><Link href="/servicios" className="text-muted-foreground hover:text-primary transition-colors">Servicios</Link></li>
              <li><Link href="/modelo-ll" className="text-muted-foreground hover:text-primary transition-colors">Modelo LL</Link></li>
              <li><Link href="/somos-ll" className="text-muted-foreground hover:text-primary transition-colors">Somos LL</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Recursos</h4>
            <ul className="space-y-3">
              <li><Link href="/#opiniones" className="text-muted-foreground hover:text-primary transition-colors">Opiniones</Link></li>
              <li><Link href="/insights" className="text-muted-foreground hover:text-primary transition-colors">Insights</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div className="md:col-span-1 col-span-2">
             <h4 className="font-bold text-lg mb-4">Legal</h4>
             <ul className="space-y-3">
                 <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
                 <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a></li>
             </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 flex justify-between items-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} LeaderLeads. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
