"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ServiceFinderForm() {
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-lg rounded-2xl bg-background">
        <CardHeader>
          <CardTitle className="text-2xl text-center gradient-text">
            Herramienta de IA en Mantenimiento
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8 text-center text-muted-foreground">
          <p>Nuestra recomendación de servicios impulsada por IA estará disponible pronto.</p>
        </CardContent>
      </Card>
    </div>
  );
}
