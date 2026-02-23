"use client";

import { useState } from "react";
import { Loader2, Send, CheckCircle, AlertCircle } from "lucide-react";
import { createLead, PersonalData } from "@/lib/firebase/services/leads";

export type FormType = "auditoria" | "mes-gratis" | "contacto";

interface LeadFormProps {
    type: FormType;
    sourceName: string; // Para el tracking de Firestore
}

export function LeadForm({ type, sourceName }: LeadFormProps) {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as Record<string, string>;

        const personalData: PersonalData = {
            name: data.name,
            company: data.company,
            personalEmail: data.personalEmail,
            companyEmail: data.companyEmail || "N/A",
            contactNumber: data.contactNumber,
            whatsapp: data.whatsapp,
            businessDescription: data.businessDescription,
            // Campos dinámicos
            problem: data.problem,
            selectedService: data.selectedService,
            serviceExpectation: data.serviceExpectation,
            contactReason: data.contactReason,
            // Fallback para la Cloud Function actual
            email: data.companyEmail || data.personalEmail,
        };

        const result = await createLead({
            personalData,
            source: sourceName,
            initialMessage: `Formulario tipo: ${type}. Motivo principal: ${data.contactReason || data.selectedService || data.problem || "Auditoría genérica"}`,
            formType: type
        });

        if (result.success) {
            setStatus("success");
        } else {
            console.error(result.error);
            setStatus("error");
            setErrorMessage("Ocurrió un error de red al intentar enviar tu solicitud. Por favor intenta de nuevo.");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center space-y-4 animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white">¡Solicitud Recibida!</h3>
                <p className="text-gray-400">
                    Hemos procesado tus datos correctamente. Uno de nuestros especialistas se pondrá en contacto contigo en breve a través del correo proporcionado.
                </p>
                <p className="text-sm text-gray-500 pt-4">También hemos enviado una confirmación a tu correo.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 bg-card/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 md:p-8">

            {status === "error" && (
                <div className="bg-destructive/10 border border-destructive/20 text-destructive p-4 rounded-xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 mt-0.5" />
                    <p className="text-sm">{errorMessage}</p>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-300">Nombre Completo *</label>
                    <input required type="text" id="name" name="name" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Ej. Juan Pérez" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">Nombre de la Empresa *</label>
                    <input required type="text" id="company" name="company" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Ej. TechCorp LLC" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="personalEmail" className="text-sm font-medium text-gray-300">Email Personal *</label>
                    <input required type="email" id="personalEmail" name="personalEmail" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="tucorreo@gmail.com" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="companyEmail" className="text-sm font-medium text-gray-300">Email Corporativo</label>
                    <input type="email" id="companyEmail" name="companyEmail" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="Opcional: tunombre@empresa.com" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="contactNumber" className="text-sm font-medium text-gray-300">Número de Contacto *</label>
                    <input required type="tel" id="contactNumber" name="contactNumber" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="+1 234 567 8900" />
                </div>

                <div className="space-y-2">
                    <label htmlFor="whatsapp" className="text-sm font-medium text-gray-300">WhatsApp *</label>
                    <input required type="tel" id="whatsapp" name="whatsapp" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" placeholder="+1 234 567 8900" />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="businessDescription" className="text-sm font-medium text-gray-300">Descripción General de su Negocio *</label>
                <textarea required id="businessDescription" name="businessDescription" rows={3} className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="¿A qué se dedica tu empresa y qué venden principalmente?"></textarea>
            </div>

            {/* CAMPOS DINÁMICOS SEGÚN EL TIPO DE EMBUDO */}

            {type === "auditoria" && (
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <label htmlFor="problem" className="text-sm font-medium text-primary">Problemática actual y cómo desea que funcione *</label>
                    <textarea required id="problem" name="problem" rows={4} className="w-full bg-primary/5 border border-primary/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" placeholder="Describe el dolor principal de tu empresa hoy en día, dónde estás atascado y cómo te gustaría que fuera la solución ideal..."></textarea>
                </div>
            )}

            {type === "mes-gratis" && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <div className="space-y-2">
                        <label htmlFor="selectedService" className="text-sm font-medium text-accent">¿Qué servicio deseas probar gratis? *</label>
                        <select required id="selectedService" name="selectedService" className="w-full bg-accent/5 border border-accent/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors appearance-none cursor-pointer">
                            <option value="" className="bg-card text-gray-400">Selecciona un servicio de la plataforma...</option>
                            <option value="Generación de Leads B2B" className="bg-card text-white">Sistema de Generación de Leads B2B</option>
                            <option value="Marketing Automatizado" className="bg-card text-white">Marketing Automatizado Integral</option>
                            <option value="Construcción eCommerce" className="bg-card text-white">Construcción y Gestión de eCommerce</option>
                            <option value="Soporte RRHH" className="bg-card text-white">Soporte en RRHH para Ventas</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="serviceExpectation" className="text-sm font-medium text-accent">¿Cuál es tu expectativa con este servicio? *</label>
                        <textarea required id="serviceExpectation" name="serviceExpectation" rows={3} className="w-full bg-accent/5 border border-accent/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none" placeholder="¿Qué esperas lograr o qué métrica te gustaría ver mejorada al finalizar tu mes de prueba?"></textarea>
                    </div>
                </div>
            )}

            {type === "contacto" && (
                <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <label htmlFor="contactReason" className="text-sm font-medium text-gray-300">Motivo del contacto *</label>
                    <select required id="contactReason" name="contactReason" className="w-full bg-background border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none cursor-pointer">
                        <option value="" className="bg-card text-gray-400">Selecciona una opción...</option>
                        <option value="Contratar Servicios" className="bg-card text-white">💼 Contratar servicios / Solicitar Propuesta</option>
                        <option value="Alianzas de Marketing" className="bg-card text-white">🤝 Alianzas de Marketing / Partnerships</option>
                        <option value="Trabajar con Nosotros" className="bg-card text-white">🚀 Trabajar con Nosotros / Empleo</option>
                        <option value="Otras Opciones" className="bg-card text-white">✉️ Otras opciones / Consulta general</option>
                    </select>
                </div>
            )}

            <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-destructive hover:bg-destructive/90 text-white font-medium px-6 py-4 rounded-xl flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group mt-4 shadow-lg shadow-destructive/20"
            >
                {status === "loading" ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Procesando datos...
                    </>
                ) : (
                    <>
                        {type === "auditoria" ? "Solicitar Auditoría Gratuita" : type === "mes-gratis" ? "Reclamar mi Mes Gratis" : "Enviar Mensaje Seguro"}
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                )}
            </button>
            <p className="text-xs text-center text-gray-500 mt-4">
                Tus datos están protegidos y encriptados. No enviamos spam.
            </p>
        </form>
    );
}
