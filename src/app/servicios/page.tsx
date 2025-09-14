import type { Metadata } from 'next';
import ServiciosClient from './servicios-client';

export const metadata: Metadata = {
  title: 'Servicios de Crecimiento: Adquisición y Retención | LeaderLeads',
  description: 'Explora nuestros servicios de generacion de leads de alto impacto y modelos de atencion al cliente diseñados para convertir y fidelizar. Lidera tu mercado con LeaderLeads.',
};

export default function ServiciosPage() {
  return <ServiciosClient />;
}