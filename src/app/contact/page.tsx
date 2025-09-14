import type { Metadata } from 'next';
import ContactClient from './contact-client';

export const metadata: Metadata = {
  title: 'Contacto - Hablemos de tu Crecimiento | LeaderLeads',
  description: 'Ponte en contacto con LeaderLeads. Completa nuestro formulario, llámanos o envíanos un email para discutir cómo podemos escalar tu negocio juntos.',
};

export default function ContactPage() {
  return <ContactClient />;
}