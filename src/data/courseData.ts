import { SolutionItem, CurriculumModule, VideoItem, Testimonial, FaqItem } from '../types';
import mod1Img from '../assets/images/module_1_prompts_1787431879682.jpg';
import mod2Img from '../assets/images/module_2_whatsapp_1787431891869.jpg';
import mod3Img from '../assets/images/module_3_quote_1787431919016.jpg';
import mod4Img from '../assets/images/module_4_knowledge_1787431930881.jpg';
import mod5Img from '../assets/images/module_5_video_1787431943093.jpg';
import mod6Img from '../assets/images/module_6_nocode_1787431957509.jpg';
import mod7Img from '../assets/images/module_7_scale_1787431970058.jpg';

export const COURSE_PRICING = {
  currencySymbol: 'S/',
  currencyCode: 'PEN',
  regularPrice: 490,
  discountedPrice: 147,
  discountPercentage: '70% OFF',
  usdEquivalent: '$39 USD',
  yapePhone: '958050928',
  yapePhoneFormatted: '+51 958 050 928',
  yapeTitular: 'Engelberth Egoavil',
  whatsappPhone: '51958050928',
  totalSlots: 20,
  availableSlots: 6,
};

export const SEVEN_SOLUTIONS: SolutionItem[] = [
  {
    id: 'solucion-1',
    number: '01',
    title: 'Campañas Premium de Marketing Turístico',
    shortDesc: 'Generación de anuncios de alta conversión, segmentación y copys persuasivos para destinos estrella.',
    fullDesc: 'Diseña y lanza en minutos campañas publicitarias en Meta Ads, Google y TikTok con prompts especializados para turismo. Aprende a crear paquetes irresistibles para Cusco, Cancún, Punta Cana y Europa que capturan viajeros calificados.',
    tools: ['ChatGPT Plus', 'Midjourney v6', 'Meta Ads AI'],
    metric: '3.4x',
    metricLabel: 'Mayor Retorno de Inversión en Anuncios',
    iconName: 'Target',
    badge: 'Marketing y Tráfico',
    gridSpan: 'col-span-12 lg:col-span-7',
    demoPrompt: 'Crea 3 ángulos de copys para un paquete a Cancún Todo Incluido 5D/4N enfocado en parejas jóvenes peruanas con llamado a la acción a WhatsApp.',
    bgGradient: 'from-amber-500/10 via-slate-900/80 to-slate-950/90',
  },
  {
    id: 'solucion-2',
    number: '02',
    title: 'Agentes de Ventas y Atención 24/7 en WhatsApp',
    shortDesc: 'Chatbots inteligentes que responden tarifas, itinerarios y cierran ventas mientras duermes.',
    fullDesc: 'Configura asistentes conversacionales que entienden preguntas complejas de turistas, verifican disponibilidad, envían itinerarios en PDF y filtran prospectos de alto valor sin intervención humana inicial.',
    tools: ['WhatsApp Cloud API', 'Make / Zapier', 'OpenAI Assistant'],
    metric: '< 15 seg',
    metricLabel: 'Tiempo de respuesta a consultas nocturnas',
    iconName: 'MessageSquareText',
    badge: 'Automatización 24/7',
    gridSpan: 'col-span-12 lg:col-span-5',
    demoPrompt: 'Configuración de nodo condicional para detectar presupuesto del viajero y enviar PDF del destino automáticamente.',
    bgGradient: 'from-cyan-500/10 via-slate-900/80 to-slate-950/90',
  },
  {
    id: 'solucion-3',
    number: '03',
    title: 'Cotizaciones Ultrarrápidas con DeepSeek & LLMs',
    shortDesc: 'Arma presupuestos detallados con vuelos, hoteles y tours en menos de 30 segundos.',
    fullDesc: 'Elimina el cuello de botella más grande de una agencia de viajes. Conecta modelos de razonamiento como DeepSeek R1 para cruzar tarifas de proveedores, generar cotizaciones personalizadas en PDF y calcular márgenes automáticamente.',
    tools: ['DeepSeek R1', 'Claude 3.7 Sonnet', 'Prompt Engineering'],
    metric: '30 seg',
    metricLabel: 'De 45 minutos a 30s por cotización',
    iconName: 'Zap',
    badge: 'Operaciones Ágiles',
    gridSpan: 'col-span-12 lg:col-span-4',
    demoPrompt: 'Cotiza itinerario familiar a Cartagena para 2 adultos y 1 niño (6 años), 4 noches, hotel 4 estrellas con traslados y tour a Islas del Rosario.',
    bgGradient: 'from-blue-500/10 via-slate-900/80 to-slate-950/90',
  },
  {
    id: 'solucion-4',
    number: '04',
    title: 'Asistente Turístico con NotebookLM',
    shortDesc: 'Crea el cerebro digital de tu agencia: políticas de equipaje, visados y fichas de hoteles al instante.',
    fullDesc: 'Convierte cientos de PDFs de tus operadores mayoristas, normativas de aerolíneas y catálogos de hoteles en una base de conocimientos inteligente con NotebookLM. Tu equipo consultará cualquier duda técnica en 2 segundos con fuente citada.',
    tools: ['Google NotebookLM', 'RAG Turístico', 'Google Drive'],
    metric: '100%',
    metricLabel: 'Cero errores en requisitos migratorios',
    iconName: 'BookOpenCheck',
    badge: 'Base de Conocimientos',
    gridSpan: 'col-span-12 lg:col-span-4',
    demoPrompt: '¿Cuáles son los requisitos de visa y vacunas actuales para ciudadanos peruanos viajando a Egipto y Turquía?',
    bgGradient: 'from-amber-400/10 via-slate-900/80 to-slate-950/90',
  },
  {
    id: 'solucion-5',
    number: '05',
    title: 'Generación de Videos Virales para TikTok / Reels',
    shortDesc: 'Guiones virales, avatares con IA y edición acelerada sin necesidad de pararte frente a la cámara.',
    fullDesc: 'Aprende a producir videos cinematográficos de destinos turísticos con avatares ultra realistas en HeyGen, clonación de voz y efectos visuales generados por IA que acumulan miles de reproducciones y atraen clientes orgánicamente.',
    tools: ['HeyGen AI', 'CapCut AI', 'Runway Gen-3', 'ElevenLabs'],
    metric: '10x',
    metricLabel: 'Más contenido generado por semana',
    iconName: 'Video',
    badge: 'Contenido Viral',
    gridSpan: 'col-span-12 lg:col-span-4',
    demoPrompt: 'Genera un guión de 30 segundos con gancho de escasez: "3 errores fatales que cometen los peruanos al viajar a Europa por primera vez".',
    bgGradient: 'from-purple-500/10 via-slate-900/80 to-slate-950/90',
  },
  {
    id: 'solucion-6',
    number: '06',
    title: 'Análisis de Mercado & Detección de Tendencias',
    shortDesc: 'Anticípate a la demanda turística, analiza a la competencia y encuentra paquetes de alto margen.',
    fullDesc: 'Utiliza IA para raspar tendencias de búsqueda de vuelos y hoteles, predecir meses de alta demanda en destinos emergentes y ajustar los precios de tus paquetes para maximizar tu rentabilidad antes que otras agencias.',
    tools: ['Google Trends IA', 'Deep Research AI', 'Perplexity Pro'],
    metric: '+45%',
    metricLabel: 'Incremento en margen de ganancia',
    iconName: 'TrendingUp',
    badge: 'Inteligencia de Negocio',
    gridSpan: 'col-span-12 lg:col-span-6',
    demoPrompt: 'Analiza los 5 destinos de playa internacionales con mayor crecimiento de búsquedas en Perú para el próximo feriado largo.',
    bgGradient: 'from-emerald-500/10 via-slate-900/80 to-slate-950/90',
  },
  {
    id: 'solucion-7',
    number: '07',
    title: 'Catálogo Web Interactivo & Itinerarios a Medida',
    shortDesc: 'Presentaciones digitales interactivas con mapas dinámicos y fotos que deslumbran al viajero.',
    fullDesc: 'Transforma aburridos correos de texto en experiencias visuales interactivas. Genera micro-páginas web de itinerarios con fotos generadas por IA, mapa paso a paso y botón de pago directo que duplica la tasa de cierre.',
    tools: ['Gamma App AI', 'Notion AI', 'HTML5 Embeds'],
    metric: '2.8x',
    metricLabel: 'Aumento en tasa de cierre de cotizaciones',
    iconName: 'Globe',
    badge: 'Experiencia del Cliente',
    gridSpan: 'col-span-12 lg:col-span-6',
    demoPrompt: 'Crea la estructura de un itinerario interactivo de 7 días "Ruta Clásica Japón" con hoteles recomendados, tren bala y tips gastronómicos.',
    bgGradient: 'from-cyan-500/10 via-slate-900/80 to-slate-950/90',
  },
];

export const CURRICULUM_MODULES: CurriculumModule[] = [
  {
    number: 1,
    title: 'Fundamentos de Inteligencia Artificial para el Sector Turístico',
    duration: 'Semana 1 • 2 Módulos',
    summary: 'Comprende el ecosistema de IA generativa y configura el stack tecnológico base para tu agencia.',
    lessons: [
      'Panorama de la IA en el turismo global: Casos de estudio de agencias líderes',
      'Configuración de cuentas PRO, API Keys y entornos de trabajo seguros',
      'Ingeniería de Prompts Turísticos: Estructura perfecta para obtener respuestas exactas',
      'Creación de tu manual de marca y tono de comunicación para alimentar a la IA',
    ],
    toolsUsed: ['ChatGPT 4o', 'Claude 3.7', 'DeepSeek'],
    exampleImage: mod1Img,
    exampleCaption: 'Entorno de ingeniería de prompts configurado con el manual de marca de tu agencia para generar paquetes turísticos exactos.',
    practicalOutcome: 'Plantilla de Mega-Prompts Turísticos + Manual de Tono Personalizado',
  },
  {
    number: 2,
    title: 'Agentes de Ventas Automatizados en WhatsApp y Redes Sociales',
    duration: 'Semana 1 • 3 Módulos',
    summary: 'Construye tu primer chatbot autónomo para captar y atender viajeros 24/7 sin perder ventas.',
    lessons: [
      'Arquitectura de un embudo conversacional turístico en WhatsApp',
      'Conexión de WhatsApp Cloud API con Make y webhooks inteligentes',
      'Entrenamiento del bot con tus paquetes, precios y políticas de cancelación',
      'Handoff humano: Cómo hacer que el bot transfiera la conversación al asesor cuando el cliente está listo para pagar',
    ],
    toolsUsed: ['Make.com', 'WhatsApp API', 'OpenAI Assistant API'],
    exampleImage: mod2Img,
    exampleCaption: 'Flujo conversacional en WhatsApp con respuestas instantáneas a deshoras, cotizaciones y enlaces de pago automáticos.',
    practicalOutcome: 'Chatbot Turístico 24/7 en WhatsApp activo y conectado a tu inventario',
  },
  {
    number: 3,
    title: 'Cotizaciones y Paquetes Turísticos en 30 Segundos con DeepSeek',
    duration: 'Semana 2 • 2 Módulos',
    summary: 'Automatiza la cotización de itinerarios multidestino, cruce de tarifas y cálculo de margen de ganancia.',
    lessons: [
      'Creación del Mega-Prompt Cotizador con modelos de razonamiento (DeepSeek R1)',
      'Extracción automática de datos desde tarifarios mayoristas en Excel y PDF',
      'Generación de itinerarios día a día con recomendaciones locales personalizadas',
      'Exportación directa a formato PDF corporativo con diseño premium para el cliente',
    ],
    toolsUsed: ['DeepSeek R1', 'Google Sheets AI', 'Canva AI'],
    exampleImage: mod3Img,
    exampleCaption: 'Cotización digital en PDF con desglose de vuelos, hoteles 5★, cálculo de margen comercial y conversión de divisas en 30s.',
    practicalOutcome: 'Cotizador Rápido en PDF con cálculo de margen comercial automático',
  },
  {
    number: 4,
    title: 'NotebookLM: El Cerebro Digital de Políticas, Destinos y Visados',
    duration: 'Semana 2 • 2 Módulos',
    summary: 'Centraliza toda la documentación de tu agencia en un copiloto inteligente que responde al instante.',
    lessons: [
      'Creación de fuentes estructuradas: Requisitos migratorios, vacunas y visados por país',
      'Carga de catálogos de cadenas hoteleras y operadores receptivos',
      'Consultas complejas con citación exacta de fuentes para evitar errores operativos',
      'Generación de resúmenes ejecutivos para enviar a tus pasajeros antes de viajar',
    ],
    toolsUsed: ['Google NotebookLM', 'Google Drive', 'PDF Intelligence'],
    exampleImage: mod4Img,
    exampleCaption: 'Base de conocimiento RAG de tu agencia resolviendo consultas migratorias y requisitos de viaje con fuentes oficiales citadas.',
    practicalOutcome: 'Copiloto de Información Turística con 100% de precisión en políticas',
  },
  {
    number: 5,
    title: 'Video Marketing Viral con Avatares y Voz con IA',
    duration: 'Semana 3 • 3 Módulos',
    summary: 'Crea contenido turístico viral para TikTok, Reels y YouTube Shorts a escala masiva.',
    lessons: [
      'Fórmula de ganchos virales para paquetes de viaje y destinos en tendencia',
      'Creación de avatares turísticos hiperrealistas con HeyGen y voz clonada',
      'Generación de imágenes y videos cinematográficos de paisajes con Runway y Midjourney',
      'Edición y subtitulado automático de alto impacto en CapCut',
    ],
    toolsUsed: ['HeyGen AI', 'ElevenLabs', 'Runway Gen-3', 'CapCut Pro'],
    exampleImage: mod5Img,
    exampleCaption: 'Estudio de creación de Reels y TikToks con avatar digital hiperrealista, ganchos persuasivos y subtítulos dinámicos sin salir en cámara.',
    practicalOutcome: 'Sistema de Creación de Videos Virales para TikTok/Instagram Reels',
  },
  {
    number: 6,
    title: 'Automatizaciones Sin Código (No-Code) para Agencias',
    duration: 'Semana 3 • 2 Módulos',
    summary: 'Conecta tu CRM, correos de confirmación, encuestas de satisfacción y pagos automáticos.',
    lessons: [
      'Flujo automático: De formulario web -> WhatsApp -> Google Sheets -> Notificación interna',
      'Envío automático de recordatorios de pago y vouchers de viaje al pasajero',
      'Encuestas post-viaje con análisis de sentimiento para fidelizar clientes',
      'Seguridad de datos de clientes y mejores prácticas de privacidad',
    ],
    toolsUsed: ['Make.com', 'Google Sheets', 'Gmail API', 'Airtable'],
    exampleImage: mod6Img,
    exampleCaption: 'Escenario No-Code en Make que conecta captura de clientes potenciales, registro en Sheets CRM y despacho automático de vouchers.',
    practicalOutcome: 'Ecosistema de Automatización de Operaciones y Fidelización Post-Venta',
  },
  {
    number: 7,
    title: 'Implementación Real y Escalabilidad de tu Agencia con IA',
    duration: 'Semana 4 • Taller Práctico',
    summary: 'Auditoría de tu agencia y puesta en marcha de tu sistema con el acompañamiento de Engelberth Egoavil.',
    lessons: [
      'Plan de despliegue en 14 días para tu agencia de viajes',
      'Capacitación a tus ejecutivos de venta para usar las herramientas sin resistencia',
      'Medición de KPIs: Ahorro de horas hombre, costo por lead y tasa de cierre',
      'Activación de tu Mes de Asesoría VIP Directa para resolver casos específicos',
    ],
    toolsUsed: ['Auditoría Personalizada', 'Soporte VIP 1-a-1'],
    exampleImage: mod7Img,
    exampleCaption: 'Dashboard de métricas de crecimiento, horas ahorradas y roadmap de escalabilidad con sesión 1-a-1 de Engelberth Egoavil.',
    practicalOutcome: 'Plan de Escala a 14 Días + Activación del Mes de Asesoría VIP 1-a-1',
  },
];

export const YOUTUBE_SHOWCASE: VideoItem[] = [
  {
    id: 'video-1',
    title: 'Demostración en Vivo: Cómo armar un paquete a Cusco en 30 segundos con IA',
    category: 'Demostración Práctica',
    duration: '08:45 min',
    youtubeId: 'L_LUpnjgPso', // Generic high quality travel tech presentation placeholder
    thumbnail: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=1200&auto=format&fit=crop',
    description: 'Mira cómo Engelberth Egoavil ingresa la solicitud de un cliente y genera una cotización completa con vuelos, hoteles y tours con DeepSeek.',
  },
  {
    id: 'video-2',
    title: 'Chatbot de WhatsApp respondiendo consultas y enviando PDFs en automático',
    category: 'Automatización 24/7',
    duration: '06:20 min',
    youtubeId: 'dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?q=80&w=1200&auto=format&fit=crop',
    description: 'Prueba real de un bot de WhatsApp para una agencia de viajes atendiendo a un cliente a las 2:00 AM y cerrando la reserva.',
  },
  {
    id: 'video-3',
    title: 'Creando videos virales de viajes para TikTok con Avatares de IA en HeyGen',
    category: 'Video Marketing',
    duration: '10:15 min',
    youtubeId: 'kJQP7kiw5Fk',
    thumbnail: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
    description: 'Paso a paso para crear contenido turístico sin mostrar tu rostro utilizando avatares de IA y voces humanas.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Carlos Mendoza',
    role: 'Director General',
    agency: 'Inca Trail Explorers (Cusco)',
    city: 'Cusco, Perú',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    quote: 'Antes nos demorábamos hasta 2 horas armando una cotización compleja a medida para turistas extranjeros. Con el método de DeepSeek y las plantillas de Engelberth, ahora respondemos en menos de 2 minutos y triplicamos nuestras ventas este mes.',
    result: '+240% Velocidad de Cierre de Cotizaciones',
    rating: 5,
  },
  {
    id: 'test-2',
    name: 'Mariana Valdivia',
    role: 'Gerente Comercial',
    agency: 'Viajes & Destinos Perú',
    city: 'Lima, Perú',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop',
    quote: 'El bono de 1 mes de asesoría con Engelberth pagó el curso 10 veces. Nos ayudó a conectar nuestro WhatsApp Business con Make. Ahora ningún lead se queda sin respuesta a medianoche y cerramos paquetes de Cancún en automático.',
    result: '18 Paquetes Vendidos en la primera semana',
    rating: 5,
  },
  {
    id: 'test-3',
    name: 'Alejandro Ramos',
    role: 'Agente Independiente & Fundador',
    agency: 'Ruta Maya & Caribe',
    city: 'Arequipa, Perú',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop',
    quote: 'No tenía idea de cómo hacer videos para TikTok y me daba vergüenza salir en cámara. Aprendí a usar HeyGen y CapCut con IA y en 15 días un video de paquetes a Punta Cana superó las 80,000 vistas, llenándome el WhatsApp de clientes.',
    result: '80K+ Vistas orgánicas en TikTok',
    rating: 5,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: '¿Necesito conocimientos previos de programación o tecnología avanzada?',
    answer: 'No, en lo absoluto. El curso está diseñado desde cero para dueños de agencias, operadores turísticos y agentes de viajes. Todas las herramientas que enseñamos son visuales y "No-Code" (sin código). Solo necesitas una computadora y ganas de transformar tu negocio.',
  },
  {
    id: 'faq-2',
    category: 'asesoria',
    question: '¿En qué consiste el Bono VIP de 1 Mes de Asesoría Post-Curso?',
    answer: 'Al inscribirte hoy, no te dejamos solo. Obtienes 30 días de acceso directo y personalizado a nuestro especialista Engelberth Egoavil vía WhatsApp y sesiones de revisión. Podrás consultar dudas específicas sobre los sistemas de tu propia agencia, revisar tus flujos y optimizar tus prompts en casos reales.',
  },
  {
    id: 'faq-3',
    category: 'pago',
    question: '¿Cómo realizo mi pago por Yape en Perú y cómo recibo mi acceso?',
    answer: 'Es muy fácil: 1) Haz clic en cualquier botón "Ir al Pago", 2) Ingresa tus datos (Nombre, Agencia, Teléfono), 3) Escanea el código QR de Yape o transfiere al +51 958050928 a nombre de Engelberth Egoavil por el monto de oferta (S/ 147), 4) Pulsa "Ya Yapeé - Enviar Comprobante" para enviarnos la captura por WhatsApp y activaremos tu cuenta de inmediato.',
  },
  {
    id: 'faq-4',
    category: 'temario',
    question: '¿Qué pasa si no puedo asistir a las clases en los horarios en vivo?',
    answer: 'No te preocupes. Todas las sesiones quedan grabadas en alta definición y alojadas en nuestra plataforma exclusiva con acceso vitalicio. Podrás verlas a tu propio ritmo cuantas veces quieras desde cualquier dispositivo.',
  },
  {
    id: 'faq-5',
    category: 'temario',
    question: '¿Las herramientas de IA que enseñan son de pago o gratuitas?',
    answer: 'Enseñamos opciones gratuitas y de bajo costo para cada una de las 7 soluciones (por ejemplo: NotebookLM es 100% gratuito de Google, DeepSeek tiene acceso libre de alta potencia, y para herramientas como ChatGPT o HeyGen te mostramos cómo optimizar cada centavo de crédito).',
  },
  {
    id: 'faq-6',
    category: 'pago',
    question: '¿Puedo pagar si estoy fuera de Perú o no tengo Yape?',
    answer: 'Sí. Aunque Yape es nuestro método preferido para Perú, también aceptamos Plin, Transferencia Bancaria (BCP/BBVA/Interbank) y PayPal / Tarjeta de Crédito para participantes internacionales ($39 USD). Solo dale clic a escribirnos al WhatsApp +51 958050928 para brindarte el link alternativo.',
  },
];

export const SAMPLE_PROMPT_SIMULATOR = [
  {
    id: 'prompt-1',
    category: 'Cotizador DeepSeek',
    title: 'Cotización Express Paquete Machu Picchu 3D/2N',
    prompt: `Actúa como el cotizador senior de una agencia de viajes en Perú. Genera un itinerario estructurado de 3 días y 2 noches para 2 pasajeros adultos en Cusco y Machu Picchu. Incluye:
- Vuelos sugeridos Lima-Cusco (hora mañana)
- Hotel 3 estrellas superior en Cusco (con desayuno buffet)
- Boleto turístico parcial y ticket de tren Expedition / Voyager
- Guía privado bilingüe y traslados aeropuerto-hotel-aeropuerto
- Desglose de precio estimado por persona en USD y PEN con margen comercial del 25%
- Términos de reserva claros y llamado a la acción persuasivo`,
    output: `✨ COTIZACIÓN OFICIAL: CUSCO & MACHU PICCHU MÁGICO (3D/2N)
Pasajeros: 2 Adultos | Categoría: Confort 3★ Superior

📅 ITINERARIO DÍA A DÍA:
• DÍA 1: Llegada a Cusco + Check-in + City Tour Arqueológico (Sacsayhuamán, Qenqo) y mate de coca de bienvenida.
• DÍA 2: Excursión de día completo a Machu Picchu en Tren Voyager/Expedition + Almuerzo en Aguas Calientes + Retorno a Cusco.
• DÍA 3: Mañana libre en barrio San Blas + Traslado al aeropuerto de Cusco.

🏨 HOSPEDAJE SELECCIONADO: Hotel Abittare o similar (Incluye desayuno buffet diario y calefacción).
💰 INVERSIÓN TOTAL: $385 USD por persona (S/ 1,445 PEN).
🔒 INCLUYE: Tickets de tren ida/vuelta, entradas oficiales circuito 2A, bus Consettur, guía profesional certificado, traslados privados.

👉 ¿Deseas asegurar las fechas con el 30% de adelanto antes de que suban los cupos de tren?`,
  },
  {
    id: 'prompt-2',
    category: 'WhatsApp Ventas 24/7',
    title: 'Respuesta Automática WhatsApp: Paquete Cancún Todo Incluido',
    prompt: `Redacta un mensaje de WhatsApp amigable, visual y de alta persuasión para un cliente que preguntó a medianoche: "¿Tienen paquetes a Cancún para el próximo mes?". El mensaje debe saludarlo por su nombre, darle 2 opciones de resort Todo Incluido y solicitar su número de viajeros para enviar el PDF.`,
    output: `🌴 ¡Hola! Qué alegría saludarte. En nuestra agencia tenemos promociones exclusivas para Cancún el próximo mes con vuelos directos y resorts Todo Incluido 🏖️🍹

Tenemos 2 opciones increíbles para ti:
1️⃣ Oasis Palm Resort (Ideal para familias/parejas): 5D/4N Todo Incluido desde $699 USD p/p.
2️⃣ Riu Caribe Cancún (Playa premium + fiesta de espuma): 5D/4N Todo Incluido desde $840 USD p/p.

✈️ Ambos incluyen: Boletos aéreos ida y vuelta + Maleta de 23kg + Traslados aeropuerto-hotel-aeropuerto + Comidas y bebidas ilimitadas 24 hrs.

📲 Para enviarte la cotización exacta en PDF con fotos de las habitaciones:
¿Para cuántas personas sería el viaje y qué fechas aproximadas prefieres?`,
  },
  {
    id: 'prompt-3',
    category: 'TikTok Viral Hook',
    title: 'Guión de 30 Segundos para Video de TikTok / Reels',
    prompt: `Crea un guión para video corto de TikTok sobre "Trucos para conseguir vuelos baratos a Europa desde Lima". Debe tener un gancho impactante en los primeros 3 segundos, 3 tips rápidos y un CTA para pedir asesoría por WhatsApp.`,
    output: `🎬 GANCHO (0-3s):
[Visual: Avatar de IA señalando un boleto de avión con texto gigante: "NO compres vuelos a Madrid antes de ver esto 🛑"]
Voz en off: "El 80% de los peruanos paga el doble al viajar a Europa por cometer este simple error..."

💡 CONTENIDO (4-22s):
Tip 1: "Nunca busques vuelos directos un viernes en la noche; las aerolíneas reajustan algoritmos los martes de madrugada."
Tip 2: "Haz escala oculta en Bogotá o Panamá; te ahorrarás hasta $300 dólares por pasajero."
Tip 3: "Utiliza nuestro cotizador inteligente que analiza 40 combinaciones de equipaje en segundos."

🚀 LLAMADO A LA ACCIÓN (23-30s):
"¿Quieres que busquemos la mejor tarifa para tu viaje a Europa? Comenta 'EUROPA' o dale clic al link de nuestro perfil para enviarte las opciones por WhatsApp hoy mismo."`,
  },
];
