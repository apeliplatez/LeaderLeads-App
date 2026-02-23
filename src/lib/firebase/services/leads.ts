import { db } from "../config";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { app } from "../config"; // Reutilizamos la misma instancia

export interface PersonalData {
    name: string;
    company: string;
    personalEmail: string;
    companyEmail: string;
    contactNumber: string;
    whatsapp: string;
    businessDescription: string;
    // Campos opcionales dependiendo del tipo de embudo B2B
    problem?: string; // Landing Auditoria
    selectedService?: string; // Landing Mes Gratis
    serviceExpectation?: string; // Landing Mes Gratis
    contactReason?: string; // Landing Contacto General
    // Metadatos de legacy form
    email?: string;
}

export interface CreateLeadParams {
    personalData: PersonalData;
    source: string;
    initialMessage?: string;
    formType?: string;
}

/**
 * Creates a new lead in Firestore and logs the initial interaction.
 * Designed for Future AI context processing.
 */
export async function createLead({ personalData, source, initialMessage, formType }: CreateLeadParams) {
    try {
        console.log("=== INICIANDO CREACIÓN DE LEAD EN FIRESTORE ===");
        console.log("Datos a enviar a Leads:", { personalData, source });

        // Sanitizar objeto para evitar Exception de Firebase (Unsupported field value: undefined)
        const cleanPersonalData = Object.fromEntries(
            Object.entries(personalData).filter(([_, v]) => v !== undefined)
        );

        // 1. Create the Lead Master Record
        const leadsRef = collection(db, "Leads");
        const leadDoc = await addDoc(leadsRef, {
            personal_data: cleanPersonalData,
            source: source,
            status: "Lead",
            ai_summary: "New lead acquired. Awaiting initial analysis.",
            created_at: serverTimestamp(),
        });

        // 2. Create the first Interaction Log (The "Brain" for AI)
        const interactionsRef = collection(db, "Interactions_Log");
        await addDoc(interactionsRef, {
            lead_id: leadDoc.id,
            interaction_type: "Formulario Website",
            content: initialMessage || "El prospecto dejó sus datos de contacto sin mensaje adicional.",
            sentiment: "Neutro", // AI or human will adjust this later based on analysis
            timestamp: serverTimestamp(),
        });

        // 3. Disparar el Correo de Bienvenida (Cloud Function)
        try {
            const functions = getFunctions(app, "us-central1");
            const enviarEmail = httpsCallable(functions, "sendWelcomeEmailCallable");
            await enviarEmail({
                name: personalData.name,
                // Aseguramos que Resend envíe el correo a personalEmail preferentemente
                email: personalData.personalEmail || personalData.email || personalData.companyEmail,
                formType: formType || "contacto"
            });
            console.log("Cloud Function de Email invocada exitosamente.");
        } catch (emailError) {
            console.error("El lead fue guardado, pero falló el envío del Email de Bienvenida:", emailError);
            // No retornamos false porque el lead sí se guardó en Firestore
        }

        return { success: true, leadId: leadDoc.id };
    } catch (error) {
        console.error("Error creating Lead in Firestore:", error);
        return { success: false, error };
    }
}
