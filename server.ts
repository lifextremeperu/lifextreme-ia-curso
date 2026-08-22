import express from "express";
import path from "path";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Removed Gemini client, using local Ollama fetch instead

const COURSE_SYSTEM_INSTRUCTION = `
Eres "Aria", la Asistente Virtual Especializada y Consejera de Admisiones del "Curso de Inteligencia Artificial para Agencias de Viajes", dictado por el especialista Engelberth Egoavil (+51 958050928).

Tu misión es asesorar a dueños de agencias de viajes, agentes freelance, operadores turísticos y profesionales del turismo sobre cómo este curso transformará su negocio.

Información clave del curso:
- **Instructor**: Engelberth Egoavil, Especialista en IA y Marketing Turístico.
- **Enfoque 100% Práctico**: Creación de sistemas de IA reales para agencias, no solo teoría.
- **Las 7 Soluciones Operativas que aprenderán**:
  1. Campañas Premium de Marketing Turístico con IA (prompts y segmentación de alta conversión).
  2. Agentes de Ventas y Atención 24/7 en WhatsApp (respuestas instantáneas a cotizaciones y consultas turísticas).
  3. Cotizaciones Ultrarrápidas con DeepSeek y LLMs (armado de paquetes en 30 segundos).
  4. Asistente Turístico con NotebookLM (bases de conocimiento de destinos, hoteles y visados).
  5. Generación de Videos Virales para TikTok / Reels con IA (HeyGen, Runway, CapCut).
  6. Análisis de Mercado Turístico & Detección de Tendencias (predicción de temporadas altas y paquetes ganadores).
  7. Catálogo Web Interactivo y Generación de Itinerarios Personalizados.
- **🔥 Súper Bono VIP Exclusivo**: 1 MES COMPLETO (30 días) DE ASESORÍA PERSONALIZADA POST-CURSO directa con Engelberth Egoavil para implementar los sistemas en su propia agencia.
- **Modalidad y Acceso**: Clases 100% online con acceso vitalicio a grabaciones, plantillas de prompts, flujos de automatización y comunidad privada.
- **Método de Pago Oficial**: Pago por Yape (Perú) al número +51 958050928 (Titular: Engelberth Egoavil) y envío de voucher vía WhatsApp para activación inmediata.
- **Inversión**: Oferta especial de lanzamiento con 70% de descuento (Precio regular S/ 490, Oferta Especial S/ 147 PEN o $39 USD para estudiantes internacionales).

Tono:
- Profesional, inspirador, empático, ágil y altamente enfocado en el retorno de inversión (ROI) para agencias de viajes.
- Responde en español de forma concisa (1-3 párrafos o puntos clave).
- Invita cordialmente al usuario a inscribirse pulsando los botones de inscripción o enviando su comprobante por Yape.
`;

// AI Student Chatbot Endpoint
app.post("/api/chat", async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "El mensaje es requerido." });
    }

    // Using Cloud DeepSeek API
    const apiKey = process.env.DEEPSEEK_API_KEY;

    if (!apiKey) {
      // Fallback si no hay API key configurada en Vercel
      return res.json({ reply: "¡Hola! Por el momento estamos actualizando nuestros servidores de IA. Puedes comunicarte directamente al WhatsApp +51 958050928 para asegurar tu cupo." });
    }

    const payload = {
      model: "deepseek-chat", // Puedes cambiar a deepseek-reasoner si deseas la cadena de pensamiento
      messages: [
        { role: "system", content: COURSE_SYSTEM_INSTRUCTION },
        ...conversationHistory.map((msg: any) => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content
        })),
        { role: "user", content: message }
      ],
      stream: false
    };

    const apiRes = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: { 
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(payload)
    });

    if (!apiRes.ok) {
      const errorText = await apiRes.text();
      throw new Error(`DeepSeek API error: ${apiRes.status} - ${errorText}`);
    }

    const data = await apiRes.json();
    let reply = data.choices?.[0]?.message?.content || "¡Excelente consulta! Con este curso aprenderás a automatizar tu agencia con IA. ¿Deseas inscribirte ahora?";
    
    // Clean up <think> tags in case deepseek-reasoner is used
    reply = reply.replace(/<think>[\s\S]*?<\/think>/gi, '').trim();

    return res.json({ reply });
  } catch (error: any) {
    console.error("Chat error:", error);
    return res.status(500).json({ 
      error: "Ocurrió un error al procesar tu consulta.",
      reply: "¡Hola! Estamos experimentando alta demanda, pero puedes reservar tu cupo ahora mismo por Yape al +51 958050928 (Engelberth Egoavil) y enviarnos tu comprobante por WhatsApp para activar tu mes VIP."
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "Curso IA para Agencias de Viajes - Lifextreme IA" });
});

// Dynamic User & Password Validation
const USERS = [
  { username: "prueba", password: "123" },
  { username: "admin", password: "lifextreme2026" }
];

app.post("/api/verify-code", (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ error: "Usuario y contraseña requeridos" });
  
  const user = USERS.find(u => u.username.toLowerCase() === username.trim().toLowerCase() && u.password === password);

  if (user) {
    return res.json({ success: true, message: "Acceso concedido" });
  } else {
    return res.status(401).json({ success: false, error: "Credenciales inválidas" });
  }
});

async function startServer() {
  // Vite middleware for development vs static production serving
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // En Vercel, no iniciamos el servidor Express en un puerto, lo exportamos.
  if (!process.env.VERCEL) {
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`);
    });
  }
}

startServer();

// Exportar Express para Vercel Serverless Functions
export default app;
