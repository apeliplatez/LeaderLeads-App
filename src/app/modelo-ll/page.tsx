import type { Metadata } from 'next';
import ModeloLlClient from './modelo-ll-client';

export const metadata: Metadata = {
  title: 'Nuestro Modelo de Crecimiento: Adquisición + Retención | LeaderLeads',
  description: 'Descubre nuestro modelo integral que une la generación de leads de alto impacto con sistemas de retención y venta para crear un crecimiento sostenible.',
};

export default function ModeloLlPage() {
  return <ModeloLlClient />;
}