import type { Metadata } from 'next';
import InsightsClient from './insights-client';

export const metadata: Metadata = {
  title: 'Insights & Estrategias de Crecimiento | LeaderLeads',
  description: 'Explora nuestros artículos y análisis sobre marketing digital, ventas, tecnología y retención de clientes.',
};

export default function InsightsPage() {
  return <InsightsClient />;
}