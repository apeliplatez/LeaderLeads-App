import type { Metadata } from 'next';
import SomosLlClient from './somos-ll-client';

export const metadata: Metadata = {
  title: 'Somos LeaderLeads - Tu Socio de Crecimiento Estratégico',
  description: 'Conoce al equipo, la historia y los valores de LeaderLeads. No somos una agencia más, somos una extensión de tu equipo, obsesionados con tu éxito.',
};

export default function SomosLlPage() {
  return <SomosLlClient />;
}