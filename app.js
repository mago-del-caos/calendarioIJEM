/* ==========================================================================
   CALENDARIO ESCOLAR 2026-2027 | PREPARATORIA JUVENTUD
   Lógica de la Aplicación, Fechas Oficiales y Gestión de Notas (app.js)
   ========================================================================== */

const MONTHS_CONFIG = [
  { year: 2026, month: 7, name: "Agosto" },
  { year: 2026, month: 8, name: "Septiembre" },
  { year: 2026, month: 9, name: "Octubre" },
  { year: 2026, month: 10, name: "Noviembre" },
  { year: 2026, month: 11, name: "Diciembre" },
  { year: 2027, month: 0, name: "Enero" },
  { year: 2027, month: 1, name: "Febrero" },
  { year: 2027, month: 2, name: "Marzo" },
  { year: 2027, month: 3, name: "Abril" },
  { year: 2027, month: 4, name: "Mayo" },
  { year: 2027, month: 5, name: "Junio" },
  { year: 2027, month: 6, name: "Julio" }
];

const WEEKDAYS_SHORT = ["D", "L", "M", "M", "J", "V", "S"];

/* Catálogo completo de eventos oficiales del Ciclo Escolar 2026-2027 */
const OFFICIAL_EVENTS = [
  // AGOSTO 2026
  { date: "2026-08-17", title: "Inicio de ciclo escolar", category: "academico", color: "#00C853", textColor: "#000000", shape: "square" },
  { date: "2026-08-18", title: "Junta inicio Padres Familia 4°", category: "academico", color: "#00E5FF", textColor: "#000000", shape: "square" },
  { date: "2026-08-19", title: "Junta inicio Padres Familia 5°", category: "academico", color: "#A7F3D0", textColor: "#000000", shape: "square" },
  { date: "2026-08-20", title: "Junta inicio Padres Familia 6°", category: "academico", color: "#FFB300", textColor: "#000000", shape: "square" },
  { date: "2026-08-21", title: "Retiro Educadores Josefinos y Día no laborable", category: "pastoral", color: "#9E9E9E", textColor: "#FFFFFF", shape: "circle" },
  { date: "2026-08-28", title: "Misa inicio ciclo escolar", category: "pastoral", color: "#F50057", textColor: "#FFFFFF", shape: "square" },

  // SEPTIEMBRE 2026
  { date: "2026-09-15", title: "Tarde mexicana", category: "pastoral", color: "#1B5E20", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-09-16", title: "Día no laborable (Independencia de México)", category: "vacaciones", color: "#757575", textColor: "#FFFFFF", shape: "circle" },
  { date: "2026-09-21", title: "Misa Aniv. de la Fundación de la Congregación de Misioneros Josefinos", category: "pastoral", color: "#00BFA5", textColor: "#000000", shape: "square" },
  { date: "2026-09-24", title: "Conferencia Caminando juntos", category: "pastoral", color: "#00B0F0", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-09-28", title: "Exámenes de periodo (1er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-09-29", title: "Exámenes de periodo (1er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-09-30", title: "Exámenes de periodo (1er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },

  // OCTUBRE 2026
  { date: "2026-10-01", title: "Exámenes de periodo (1er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-10-02", title: "Exámenes de periodo (1er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-10-05", title: "Exámenes de periodo (1er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-10-06", title: "Exámenes de periodo (1er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-10-07", title: "Exámenes de periodo (1er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-10-08", title: "Exámenes de periodo (1er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-10-09", title: "Exámenes de periodo (1er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-10-18", title: "Copa San José (Peribán)", category: "pastoral", color: "#00CC00", textColor: "#000000", shape: "square" },
  { date: "2026-10-19", title: "Copa San José (Peribán)", category: "pastoral", color: "#00CC00", textColor: "#000000", shape: "square" },
  { date: "2026-10-20", title: "Copa San José (Peribán)", category: "pastoral", color: "#00CC00", textColor: "#000000", shape: "square" },
  { date: "2026-10-21", title: "Copa San José (Peribán)", category: "pastoral", color: "#00CC00", textColor: "#000000", shape: "square" },
  { date: "2026-10-22", title: "Publicación de calificaciones y Copa San José", category: "examenes", color: "#4ADE80", textColor: "#000000", shape: "square" },
  { date: "2026-10-23", title: "Copa San José (Peribán)", category: "pastoral", color: "#00CC00", textColor: "#000000", shape: "square" },
  { date: "2026-10-30", title: "XXXII Concurso de Altares de muertos", category: "pastoral", color: "#D97706", textColor: "#FFFFFF", shape: "circle" },

  // NOVIEMBRE 2026
  { date: "2026-11-02", title: "Día no laborable", category: "vacaciones", color: "#757575", textColor: "#FFFFFF", shape: "circle" },
  { date: "2026-11-03", title: "Misa de difuntos (pendiente)", category: "pastoral", color: "#7030A0", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-11-10", title: "Sesión Informativa de 4º grado", category: "academico", color: "#E040FB", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-11-11", title: "Sesión Informativa de 5º grado", category: "academico", color: "#F48FB1", textColor: "#000000", shape: "square" },
  { date: "2026-11-12", title: "Sesión Informativa de 6º grado", category: "academico", color: "#00E676", textColor: "#000000", shape: "square" },
  { date: "2026-11-13", title: "Juventour y Promoción del Buen Fin", category: "pastoral", color: "#1D4ED8", textColor: "#FFFFFF", shape: "circle" },
  { date: "2026-11-14", title: "Promoción del Buen Fin", category: "academico", color: "#0284C7", textColor: "#FFFFFF", shape: "circle" },
  { date: "2026-11-15", title: "Promoción del Buen Fin", category: "academico", color: "#0284C7", textColor: "#FFFFFF", shape: "circle" },
  { date: "2026-11-16", title: "Día no laborable y Promoción del Buen Fin", category: "vacaciones", color: "#757575", textColor: "#FFFFFF", shape: "circle" },
  { date: "2026-11-17", title: "Exámenes Extraordinarios 1er. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-11-18", title: "Exámenes Extraordinarios 1er. Período y Peregrinación Basílica de Guadalupe", category: "examenes", color: "#FF6699", textColor: "#000000", shape: "square" },
  { date: "2026-11-19", title: "Exámenes Extraordinarios 1er. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-11-20", title: "Exámenes Extraordinarios 1er. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-11-23", title: "Exámenes Extraordinarios 1er. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-11-24", title: "Exámenes Extraordinarios 1er. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-11-25", title: "Exámenes Extraordinarios 1er. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-11-26", title: "Exámenes Extraordinarios 1er. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-11-27", title: "Exámenes Extraordinarios 1er. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-11-30", title: "Exámenes de periodo (2do Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },

  // DICIEMBRE 2026
  { date: "2026-12-01", title: "Navidad con San José y Exámenes de periodo", category: "pastoral", color: "#64748B", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-02", title: "Navidad con San José y Exámenes de periodo", category: "pastoral", color: "#64748B", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-03", title: "Navidad con San José y Exámenes de periodo", category: "pastoral", color: "#64748B", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-04", title: "Navidad con San José y Exámenes de periodo", category: "pastoral", color: "#64748B", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-07", title: "Exámenes de periodo (2do Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-08", title: "Exámenes de periodo (2do Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-09", title: "Exámenes de periodo (2do Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-10", title: "Exámenes de periodo (2do Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-11", title: "Misa Ntra. Señora de Guadalupe y Fin de Exámenes", category: "pastoral", color: "#0D9488", textColor: "#FFFFFF", shape: "circle" },
  { date: "2026-12-17", title: "Posada Preparatoria", category: "pastoral", color: "#86EFAC", textColor: "#000000", shape: "square" },
  { date: "2026-12-18", title: "Comida Navidad Educadores", category: "pastoral", color: "#94A3B8", textColor: "#000000", shape: "square" },
  { date: "2026-12-21", title: "Vacaciones de Invierno", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-22", title: "Vacaciones de Invierno", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-23", title: "Vacaciones de Invierno", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-24", title: "Vacaciones de Invierno", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-25", title: "Vacaciones de Invierno (Navidad)", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-28", title: "Vacaciones de Invierno", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-29", title: "Vacaciones de Invierno", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-30", title: "Vacaciones de Invierno", category: "vacaciones", color: "#800000", textColor: "#FFFFFF", shape: "square" },
  { date: "2026-12-31", title: "Vacaciones de Invierno", category: "vacaciones", color: "#800000", textColor: "#FFFFFF", shape: "square" },

  // ENERO 2027
  { date: "2027-01-01", title: "Vacaciones de Invierno (Año Nuevo)", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-01-04", title: "Vacaciones de Invierno", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-01-05", title: "Vacaciones de Invierno", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-01-06", title: "Vacaciones de Invierno", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-01-07", title: "Vacaciones de Invierno", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-01-08", title: "Vacaciones de Invierno", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-01-14", title: "Publicación de calificaciones (2do Periodo)", category: "examenes", color: "#4ADE80", textColor: "#000000", shape: "square" },
  { date: "2027-01-19", title: "Misa nacimiento P. Vilaseca", category: "pastoral", color: "#FACC15", textColor: "#000000", shape: "square" },

  // FEBRERO 2027
  { date: "2027-02-01", title: "Día no laborable (Constitución)", category: "vacaciones", color: "#757575", textColor: "#FFFFFF", shape: "circle" },
  { date: "2027-02-15", title: "Exámenes de periodo (3er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-02-16", title: "Exámenes de periodo (3er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-02-17", title: "Exámenes de periodo (3er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-02-18", title: "Exámenes de periodo (3er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-02-19", title: "Exámenes de periodo (3er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-02-22", title: "Exámenes de periodo (3er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-02-23", title: "Exámenes de periodo (3er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-02-24", title: "Exámenes de periodo (3er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-02-25", title: "Exámenes de periodo (3er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-02-26", title: "Exámenes de periodo (3er Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },

  // MARZO 2027
  { date: "2027-03-06", title: "Copa Vilaseca", category: "pastoral", color: "#65A30D", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-03-11", title: "Publicación de calificaciones (3er Periodo)", category: "examenes", color: "#4ADE80", textColor: "#000000", shape: "square" },
  { date: "2027-03-13", title: "Fiestas Josefinas", category: "pastoral", color: "#EA580C", textColor: "#FFFFFF", shape: "circle" },
  { date: "2027-03-14", title: "Carrera Juventud", category: "pastoral", color: "#660033", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-03-15", title: "Día no laborable (Natalicio de Benito Juárez)", category: "vacaciones", color: "#757575", textColor: "#FFFFFF", shape: "circle" },
  { date: "2027-03-19", title: "Misa en honor a San José", category: "pastoral", color: "#D97706", textColor: "#FFFFFF", shape: "diamond" },
  { date: "2027-03-22", title: "Vacaciones de Primavera", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-03-23", title: "Vacaciones de Primavera", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-03-24", title: "Vacaciones de Primavera", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-03-25", title: "Vacaciones de Primavera", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-03-26", title: "Vacaciones de Primavera", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-03-29", title: "Vacaciones de Primavera", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-03-30", title: "Vacaciones de Primavera", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-03-31", title: "Vacaciones de Primavera", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },

  // ABRIL 2027
  { date: "2027-04-01", title: "Vacaciones de Primavera", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-04-02", title: "Vacaciones de Primavera", category: "vacaciones", color: "#990000", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-04-19", title: "Exámenes de periodo (4to Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-04-20", title: "Exámenes de periodo (4to Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-04-21", title: "Exámenes de periodo (4to Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-04-22", title: "Exámenes de periodo (4to Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-04-23", title: "Exámenes de periodo (4to Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-04-24", title: "Chiquilladas", category: "pastoral", color: "#99CC00", textColor: "#000000", shape: "square" },
  { date: "2027-04-26", title: "Exámenes de periodo (4to Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-04-27", title: "Exámenes de periodo (4to Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-04-28", title: "Exámenes de periodo (4to Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-04-29", title: "Exámenes de periodo (4to Periodo)", category: "examenes", color: "#5B93D7", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-04-30", title: "Día de la niñez y Exámenes de 4° periodo", category: "pastoral", color: "#00C853", textColor: "#000000", shape: "square" },

  // MAYO 2027
  { date: "2027-05-01", title: "Día no laborable (Día del Trabajo)", category: "vacaciones", color: "#757575", textColor: "#FFFFFF", shape: "circle" },
  { date: "2027-05-06", title: "Publicación de boletas 4° periodo", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "circle" },
  { date: "2027-05-07", title: "Misa Día de las Madres y Fin de curso Preparatoria", category: "academico", color: "#86EFAC", textColor: "#000000", shape: "diamond" },
  { date: "2027-05-10", title: "Día no laborable (Día de las Madres)", category: "vacaciones", color: "#757575", textColor: "#FFFFFF", shape: "circle" },
  { date: "2027-05-11", title: "Asesoría Exámenes Ordinarios", category: "examenes", color: "#38BDF8", textColor: "#000000", shape: "circle" },
  { date: "2027-05-12", title: "Asesoría Exámenes Ordinarios", category: "examenes", color: "#38BDF8", textColor: "#000000", shape: "circle" },
  { date: "2027-05-13", title: "Asesoría Exámenes Ordinarios", category: "examenes", color: "#38BDF8", textColor: "#000000", shape: "circle" },
  { date: "2027-05-14", title: "Comida educadores Josefinos y Lista de exentos", category: "academico", color: "#00E5FF", textColor: "#000000", shape: "diamond" },
  { date: "2027-05-15", title: "Día no laborable (Día del Maestro)", category: "vacaciones", color: "#757575", textColor: "#FFFFFF", shape: "circle" },
  { date: "2027-05-16", title: "Retiro sacramentos", category: "pastoral", color: "#0099CC", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-05-17", title: "Exámenes de Primera Vuelta", category: "examenes", color: "#84CC16", textColor: "#000000", shape: "square" },
  { date: "2027-05-18", title: "Exámenes de Primera Vuelta", category: "examenes", color: "#84CC16", textColor: "#000000", shape: "square" },
  { date: "2027-05-19", title: "Exámenes de Primera Vuelta", category: "examenes", color: "#84CC16", textColor: "#000000", shape: "square" },
  { date: "2027-05-20", title: "Exámenes de Primera Vuelta", category: "examenes", color: "#84CC16", textColor: "#000000", shape: "square" },
  { date: "2027-05-21", title: "Exámenes de Primera Vuelta", category: "examenes", color: "#84CC16", textColor: "#000000", shape: "square" },
  { date: "2027-05-24", title: "Exámenes de Primera Vuelta", category: "examenes", color: "#84CC16", textColor: "#000000", shape: "square" },
  { date: "2027-05-25", title: "Exámenes de Primera Vuelta", category: "examenes", color: "#84CC16", textColor: "#000000", shape: "square" },
  { date: "2027-05-26", title: "Exámenes de Primera Vuelta", category: "examenes", color: "#84CC16", textColor: "#000000", shape: "square" },
  { date: "2027-05-27", title: "Exámenes de Primera Vuelta", category: "examenes", color: "#84CC16", textColor: "#000000", shape: "square" },
  { date: "2027-05-28", title: "Exámenes de Primera Vuelta", category: "examenes", color: "#84CC16", textColor: "#000000", shape: "square" },
  { date: "2027-05-30", title: "Festejo mamá y papá", category: "pastoral", color: "#EC4899", textColor: "#FFFFFF", shape: "circle" },
  { date: "2027-05-31", title: "Exámenes de Segunda Vuelta", category: "examenes", color: "#CC00CC", textColor: "#FFFFFF", shape: "square" },

  // JUNIO 2027
  { date: "2027-06-01", title: "Exámenes de Segunda Vuelta", category: "examenes", color: "#D946EF", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-02", title: "Exámenes de Segunda Vuelta", category: "examenes", color: "#D946EF", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-03", title: "Exámenes de Segunda Vuelta", category: "examenes", color: "#D946EF", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-04", title: "Exámenes de Segunda Vuelta y Misa Sagrado Corazón", category: "examenes", color: "#D946EF", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-07", title: "Exámenes de Segunda Vuelta", category: "examenes", color: "#D946EF", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-08", title: "Exámenes de Segunda Vuelta", category: "examenes", color: "#D946EF", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-09", title: "Exámenes de Segunda Vuelta", category: "examenes", color: "#D946EF", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-10", title: "Exámenes de Segunda Vuelta", category: "examenes", color: "#D946EF", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-11", title: "Exámenes de Segunda Vuelta", category: "examenes", color: "#D946EF", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-14", title: "Trámites y preparación para Extraordinarios", category: "examenes", color: "#FACC15", textColor: "#000000", shape: "square" },
  { date: "2027-06-15", title: "Exámenes Extraordinarios 2do. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-16", title: "Exámenes Extraordinarios 2do. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-17", title: "Exámenes Extraordinarios 2do. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-18", title: "Exámenes Extraordinarios 2do. Período y Misa Día del Padre", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-21", title: "Exámenes Extraordinarios 2do. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-22", title: "Exámenes Extraordinarios 2do. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-23", title: "Exámenes Extraordinarios 2do. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-24", title: "Exámenes Extraordinarios 2do. Período", category: "examenes", color: "#00B050", textColor: "#FFFFFF", shape: "square" },
  { date: "2027-06-25", title: "Exámenes Extraordinarios 2do. Período y Ceremonia de Graduación 6º Preparatoria", category: "academico", color: "#1D4ED8", textColor: "#FFFFFF", shape: "square" }
];

/* Simbología agrupada para el panel lateral */
const LEGEND_ITEMS = [
  { title: "Inicio de ciclo escolar", dateHint: "17 Ago 2026", color: "#00C853", shape: "square", firstDate: "2026-08-17" },
  { title: "Junta inicio Padres Familia 4°", dateHint: "18 Ago 2026", color: "#00E5FF", shape: "square", firstDate: "2026-08-18" },
  { title: "Junta inicio Padres Familia 5°", dateHint: "19 Ago 2026", color: "#A7F3D0", shape: "square", firstDate: "2026-08-19" },
  { title: "Junta inicio Padres Familia 6°", dateHint: "20 Ago 2026", color: "#FFB300", shape: "square", firstDate: "2026-08-20" },
  { title: "Retiro Educadores Josefinos", dateHint: "21 Ago 2026", color: "#9E9E9E", shape: "circle", firstDate: "2026-08-21" },
  { title: "Misa inicio ciclo escolar", dateHint: "28 Ago 2026", color: "#F50057", shape: "square", firstDate: "2026-08-28" },
  { title: "Tarde mexicana", dateHint: "15 Sep 2026", color: "#1B5E20", shape: "square", firstDate: "2026-09-15" },
  { title: "Día no laborable", dateHint: "Oficiales", color: "#757575", shape: "circle", firstDate: "2026-09-16" },
  { title: "Misa Aniv. Fundación Misioneros Josefinos", dateHint: "21 Sep 2026", color: "#00BFA5", shape: "square", firstDate: "2026-09-21" },
  { title: "Conferencia Caminando juntos", dateHint: "24 Sep 2026", color: "#00B0F0", shape: "square", firstDate: "2026-09-24" },
  { title: "Exámenes de periodo", dateHint: "4 Periodos", color: "#5B93D7", shape: "square", firstDate: "2026-09-28" },
  { title: "Copa San José (Peribán)", dateHint: "18-23 Oct 2026", color: "#00CC00", shape: "square", firstDate: "2026-10-18" },
  { title: "Publicación de calificaciones", dateHint: "Oct, Ene, Mar", color: "#4ADE80", shape: "square", firstDate: "2026-10-22" },
  { title: "XXXII Concurso de Altares de muertos", dateHint: "30 Oct 2026", color: "#D97706", shape: "circle", firstDate: "2026-10-30" },
  { title: "Misa de difuntos (pendiente)", dateHint: "3 Nov 2026", color: "#7030A0", shape: "square", firstDate: "2026-11-03" },
  { title: "Sesión Informativa 4º, 5º y 6º grado", dateHint: "10-12 Nov 2026", color: "#E040FB", shape: "square", firstDate: "2026-11-10" },
  { title: "Juventour y Promoción del Buen Fin", dateHint: "13-16 Nov 2026", color: "#1D4ED8", shape: "circle", firstDate: "2026-11-13" },
  { title: "Peregrinación Basílica de Guadalupe", dateHint: "18 Nov 2026", color: "#FF6699", shape: "square", firstDate: "2026-11-18" },
  { title: "Exámenes Extraordinarios (1er y 2do Período)", dateHint: "Nov y Jun", color: "#00B050", shape: "square", firstDate: "2026-11-17" },
  { title: "Navidad con San José", dateHint: "1-4 Dic 2026", color: "#64748B", shape: "square", firstDate: "2026-12-01" },
  { title: "Misa Ntra. Señora de Guadalupe", dateHint: "11 Dic 2026", color: "#0D9488", shape: "circle", firstDate: "2026-12-11" },
  { title: "Posada Preparatoria y Comida Navidad", dateHint: "17-18 Dic 2026", color: "#86EFAC", shape: "square", firstDate: "2026-12-17" },
  { title: "Vacaciones de Invierno y Primavera", dateHint: "Dic-Ene / Mar-Abr", color: "#990000", shape: "square", firstDate: "2026-12-21" },
  { title: "Misa nacimiento P. Vilaseca", dateHint: "19 Ene 2027", color: "#FACC15", shape: "square", firstDate: "2027-01-19" },
  { title: "Copa Vilaseca y Fiestas Josefinas", dateHint: "6 y 13 Mar 2027", color: "#65A30D", shape: "square", firstDate: "2027-03-06" },
  { title: "Carrera Juventud", dateHint: "14 Mar 2027", color: "#660033", shape: "square", firstDate: "2027-03-14" },
  { title: "Misa en honor a San José", dateHint: "19 Mar 2027", color: "#D97706", shape: "diamond", firstDate: "2027-03-19" },
  { title: "Chiquilladas y Día de la niñez", dateHint: "24 y 30 Abr 2027", color: "#99CC00", shape: "square", firstDate: "2027-04-24" },
  { title: "Publicación de boletas 4° periodo", dateHint: "6 May 2027", color: "#00B050", shape: "circle", firstDate: "2027-05-06" },
  { title: "Misa Día de las Madres y Fin de curso", dateHint: "7 May 2027", color: "#86EFAC", shape: "diamond", firstDate: "2027-05-07" },
  { title: "Asesoría Exámenes Ordinarios y Exentos", dateHint: "11-14 May 2027", color: "#00E5FF", shape: "diamond", firstDate: "2027-05-11" },
  { title: "Retiro sacramentos", dateHint: "16 May 2027", color: "#0099CC", shape: "square", firstDate: "2027-05-16" },
  { title: "Exámenes de Primera Vuelta", dateHint: "17-28 May 2027", color: "#84CC16", shape: "square", firstDate: "2027-05-17" },
  { title: "Festejo mamá y papá", dateHint: "30 May 2027", color: "#EC4899", shape: "circle", firstDate: "2027-05-30" },
  { title: "Exámenes de Segunda Vuelta", dateHint: "31 May - 11 Jun", color: "#D946EF", shape: "square", firstDate: "2027-05-31" },
  { title: "Trámites para Extraordinarios", dateHint: "14 Jun 2027", color: "#FACC15", shape: "square", firstDate: "2027-06-14" },
  { title: "Ceremonia de Graduación 6º Preparatoria", dateHint: "25 Jun 2027", color: "#1D4ED8", shape: "square", firstDate: "2027-06-25" }
];

/* ==========================================================================
   ESTADO DE LA APLICACIÓN Y PERSISTENCIA EN LOCALSTORAGE
   ========================================================================== */
const STORAGE_KEYS = {
  NOTES: "juventud_calendario_2627_notes",
  THEME: "juventud_calendario_2627_theme",
  CUSTOM_COLOR: "juventud_calendario_2627_custom_color"
};

let state = {
  viewMode: "annual", // 'annual' | 'month'
  activeMonthIndex: 0, // 0 = Agosto 2026 ... 11 = Julio 2027
  activeFilter: "all", // 'all' | 'user' | 'academico' | 'examenes' | 'pastoral' | 'vacaciones'
  searchQuery: "",
  selectedDate: "2026-08-17",
  selectedNoteColor: "#7A123A",
  userNotes: []
};

/* Inicialización */
document.addEventListener("DOMContentLoaded", () => {
  loadPersistedState();
  bindUIEvents();
  renderAll();
});

function loadPersistedState() {
  try {
    const savedNotes = localStorage.getItem(STORAGE_KEYS.NOTES);
    if (savedNotes) {
      state.userNotes = JSON.parse(savedNotes);
    }
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme) {
      setTheme(savedTheme, false);
    }
    const savedCustomColor = localStorage.getItem(STORAGE_KEYS.CUSTOM_COLOR);
    if (savedCustomColor) {
      applyCustomPrimaryColor(savedCustomColor, false);
    }
  } catch (e) {
    console.warn("No se pudo acceder a localStorage:", e);
  }
}

function saveNotesToStorage() {
  try {
    localStorage.setItem(STORAGE_KEYS.NOTES, JSON.stringify(state.userNotes));
  } catch (e) {
    console.warn("Error guardando notas:", e);
  }
}

/* ==========================================================================
   RENDERIZADO PRINCIPAL
   ========================================================================== */
function renderAll() {
  renderCalendarGrid();
  renderUserNotesSidebar();
  renderOfficialLegend();
  updateCounters();
}

function formatISO(year, monthIndex, day) {
  const m = String(monthIndex + 1).padStart(2, "0");
  const d = String(day).padStart(2, "0");
  return `${year}-${m}-${d}`;
}

function formatReadableDate(isoString) {
  const [y, m, d] = isoString.split("-").map(Number);
  const dateObj = new Date(y, m - 1, d);
  return dateObj.toLocaleDateString("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

function getOfficialEventsForDate(isoDate) {
  return OFFICIAL_EVENTS.filter(ev => ev.date === isoDate);
}

function getUserNotesForDate(isoDate) {
  return state.userNotes.filter(n => n.date === isoDate);
}

function doesDayMatchFilterAndSearch(isoDate, officialEvents, userNotes) {
  const hasFilter = state.activeFilter !== "all";
  const hasSearch = state.searchQuery.trim().length > 0;

  if (!hasFilter && !hasSearch) return true;

  let filterMatch = false;
  if (!hasFilter) {
    filterMatch = officialEvents.length > 0 || userNotes.length > 0;
  } else if (state.activeFilter === "user") {
    filterMatch = userNotes.length > 0;
  } else {
    filterMatch = officialEvents.some(ev => ev.category === state.activeFilter);
  }

  let searchMatch = true;
  if (hasSearch) {
    const q = state.searchQuery.toLowerCase();
    const inOfficial = officialEvents.some(ev => ev.title.toLowerCase().includes(q));
    const inUser = userNotes.some(
      n => n.title.toLowerCase().includes(q) || (n.description && n.description.toLowerCase().includes(q))
    );
    searchMatch = inOfficial || inUser;
  }

  return filterMatch && searchMatch;
}

function renderCalendarGrid() {
  const container = document.getElementById("calendarGrid");
  container.innerHTML = "";

  const isSingleMonth = state.viewMode === "month";
  container.classList.toggle("single-month-mode", isSingleMonth);
  document.getElementById("monthNavigator").hidden = !isSingleMonth;

  const monthsToRender = isSingleMonth
    ? [MONTHS_CONFIG[state.activeMonthIndex]]
    : MONTHS_CONFIG;

  if (isSingleMonth) {
    const currentM = MONTHS_CONFIG[state.activeMonthIndex];
    document.getElementById("currentMonthLabel").textContent = `${currentM.name} ${currentM.year}`;
  }

  const todayISO = new Date().toISOString().slice(0, 10);
  const isFilteringOrSearching = state.activeFilter !== "all" || state.searchQuery.trim() !== "";

  monthsToRender.forEach(mCfg => {
    const monthCard = document.createElement("article");
    monthCard.className = "month-card";

    // Header del mes
    const header = document.createElement("div");
    header.className = "month-card-header";
    header.innerHTML = `
      <span class="month-name">${mCfg.name}</span>
      <span class="month-year-tag">${mCfg.year}</span>
    `;
    monthCard.appendChild(header);

    // Fila de días de la semana
    const weekdaysRow = document.createElement("div");
    weekdaysRow.className = "weekdays-row";
    WEEKDAYS_SHORT.forEach(w => {
      const span = document.createElement("span");
      span.textContent = w;
      weekdaysRow.appendChild(span);
    });
    monthCard.appendChild(weekdaysRow);

    // Días del mes
    const daysGrid = document.createElement("div");
    daysGrid.className = "days-grid";

    const firstDayOfWeek = new Date(mCfg.year, mCfg.month, 1).getDay();
    const totalDays = new Date(mCfg.year, mCfg.month + 1, 0).getDate();

    // Celdas vacías previas al día 1
    for (let i = 0; i < firstDayOfWeek; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.className = "day-cell empty";
      daysGrid.appendChild(emptyCell);
    }

    const monthFeaturedEvents = [];

    for (let day = 1; day <= totalDays; day++) {
      const isoDate = formatISO(mCfg.year, mCfg.month, day);
      const officialEvents = getOfficialEventsForDate(isoDate);
      const userNotes = getUserNotesForDate(isoDate);

      if (officialEvents.length > 0 || userNotes.length > 0) {
        monthFeaturedEvents.push({ day, isoDate, officialEvents, userNotes });
      }

      const cell = document.createElement("div");
      cell.className = "day-cell";
      if (isoDate === todayISO) cell.classList.add("is-today");

      // Color principal de la celda si tiene evento oficial o nota del usuario
      if (officialEvents.length > 0) {
        const primaryEv = officialEvents[0];
        cell.style.backgroundColor = primaryEv.color;
        cell.style.color = primaryEv.textColor || "#FFFFFF";
        if (primaryEv.shape && primaryEv.shape !== "square") {
          cell.classList.add(`shape-${primaryEv.shape}`);
        }
      } else if (userNotes.length > 0) {
        cell.style.backgroundColor = `${userNotes[0].color}22`;
        cell.style.borderColor = userNotes[0].color;
      }

      // Filtro o búsqueda
      if (isFilteringOrSearching) {
        const matches = doesDayMatchFilterAndSearch(isoDate, officialEvents, userNotes);
        if (!matches) cell.classList.add("dimmed");
      }

      // Número del día
      const numEl = document.createElement("div");
      numEl.className = "day-number";
      numEl.innerHTML = `<span>${day}</span>`;
      cell.appendChild(numEl);

      // Indicador estrella si el usuario añadió recordatorio propio
      if (userNotes.length > 0) {
        const star = document.createElement("span");
        star.className = "user-note-star";
        star.style.backgroundColor = userNotes[0].color;
        star.title = `${userNotes.length} recordatorio(s) personal(es)`;
        cell.appendChild(star);
      }

      // En vista mensual mostramos píldoras con los títulos directamente en la casilla
      if (isSingleMonth) {
        const pillsWrap = document.createElement("div");
        pillsWrap.className = "month-view-pills";
        officialEvents.forEach(ev => {
          const pill = document.createElement("div");
          pill.className = "day-pill-item";
          pill.style.backgroundColor = "rgba(0,0,0,0.28)";
          pill.style.color = ev.textColor || "#FFFFFF";
          pill.textContent = ev.title;
          pillsWrap.appendChild(pill);
        });
        userNotes.forEach(note => {
          const pill = document.createElement("div");
          pill.className = "day-pill-item";
          pill.style.backgroundColor = note.color;
          pill.textContent = `📌 ${note.time ? note.time + " " : ""}${note.title}`;
          pillsWrap.appendChild(pill);
        });
        cell.appendChild(pillsWrap);
      } else if (officialEvents.length > 1 || (officialEvents.length > 0 && userNotes.length > 0)) {
        // Puntitos indicadores cuando hay múltiples eventos en el mismo día
        const dots = document.createElement("div");
        dots.className = "day-indicators";
        userNotes.forEach(n => {
          const d = document.createElement("span");
          d.className = "event-dot";
          d.style.backgroundColor = n.color;
          dots.appendChild(d);
        });
        cell.appendChild(dots);
      }

      // Tooltip descriptivo
      const tooltipParts = [
        ...officialEvents.map(e => `• ${e.title}`),
        ...userNotes.map(n => `📌 ${n.title}`)
      ];
      cell.title = tooltipParts.length
        ? `${day} de ${mCfg.name}:\n${tooltipParts.join("\n")}`
        : `${day} de ${mCfg.name} (Clic para añadir recordatorio)`;

      cell.addEventListener("click", () => openDayModal(isoDate));
      daysGrid.appendChild(cell);
    }

    monthCard.appendChild(daysGrid);

    // Pie de tarjeta con resumen de eventos del mes
    if (monthFeaturedEvents.length > 0 && !isSingleMonth) {
      const footer = document.createElement("div");
      footer.className = "month-events-footer";

      // Agrupar títulos consecutivos para que sea limpio y legible
      monthFeaturedEvents.forEach(item => {
        item.officialEvents.forEach(ev => {
          const row = document.createElement("div");
          row.className = "footer-event-row";
          row.innerHTML = `
            <span class="footer-swatch" style="background:${ev.color}"></span>
            <span class="footer-date-badge">${item.day} ${mCfg.name.slice(0, 3)}</span>
            <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${ev.title}</span>
          `;
          row.addEventListener("click", () => openDayModal(item.isoDate));
          footer.appendChild(row);
        });
        item.userNotes.forEach(note => {
          const row = document.createElement("div");
          row.className = "footer-event-row";
          row.innerHTML = `
            <span class="footer-swatch" style="background:${note.color}"></span>
            <span class="footer-date-badge">${item.day} ${mCfg.name.slice(0, 3)}</span>
            <span style="white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:600;">📌 ${note.title}</span>
          `;
          row.addEventListener("click", () => openDayModal(item.isoDate));
          footer.appendChild(row);
        });
      });

      monthCard.appendChild(footer);
    }

    container.appendChild(monthCard);
  });
}

/* ==========================================================================
   SIDEBAR: MIS RECORDATORIOS Y SIMBOLOGÍA OFICIAL
   ========================================================================== */
function renderUserNotesSidebar() {
  const listEl = document.getElementById("userNotesList");
  listEl.innerHTML = "";

  if (state.userNotes.length === 0) {
    listEl.innerHTML = `
      <div style="text-align:center;padding:1.2rem 0.5rem;color:var(--text-muted);font-size:0.82rem;">
        Aún no tienes recordatorios personales.<br/>Haz clic en cualquier día o en <strong>+ Nuevo Recordatorio</strong>.
      </div>
    `;
    return;
  }

  const sorted = [...state.userNotes].sort((a, b) => {
    const cmp = a.date.localeCompare(b.date);
    if (cmp !== 0) return cmp;
    return (a.time || "").localeCompare(b.time || "");
  });

  sorted.forEach(note => {
    const card = document.createElement("div");
    card.className = "note-item-card";
    card.style.borderLeftColor = note.color;

    const info = document.createElement("div");
    info.className = "note-item-info";
    info.innerHTML = `
      <h5>${escapeHTML(note.title)}</h5>
      <div class="note-item-meta">📅 ${note.date} ${note.time ? "• ⏰ " + note.time : ""}</div>
      ${note.description ? `<p class="note-item-desc">${escapeHTML(note.description)}</p>` : ""}
    `;
    info.addEventListener("click", () => openDayModal(note.date, note.id));

    const delBtn = document.createElement("button");
    delBtn.className = "btn-delete-mini";
    delBtn.title = "Eliminar recordatorio";
    delBtn.textContent = "🗑";
    delBtn.addEventListener("click", e => {
      e.stopPropagation();
      deleteUserNote(note.id);
    });

    card.appendChild(info);
    card.appendChild(delBtn);
    listEl.appendChild(card);
  });
}

function renderOfficialLegend() {
  const legendEl = document.getElementById("officialLegendList");
  legendEl.innerHTML = "";

  LEGEND_ITEMS.forEach(item => {
    const row = document.createElement("div");
    row.className = "legend-row";
    row.innerHTML = `
      <span class="legend-symbol ${item.shape}" style="background:${item.color}"></span>
      <span class="legend-text">${item.title}</span>
      <span class="legend-date-hint">${item.dateHint}</span>
    `;
    row.addEventListener("click", () => openDayModal(item.firstDate));
    legendEl.appendChild(row);
  });
}

function updateCounters() {
  const total = state.userNotes.length;
  document.getElementById("countUserNotes").textContent = total;
  document.getElementById("badgeTotalNotes").textContent = total;
}

/* ==========================================================================
   MODAL DE GESTIÓN DE RECORDATORIOS Y DETALLE DEL DÍA
   ========================================================================== */
function openDayModal(isoDate, editNoteId = null) {
  state.selectedDate = isoDate;
  const modal = document.getElementById("dayModal");
  document.getElementById("modalDateTitle").textContent = capitalizeFirst(formatReadableDate(isoDate));
  document.getElementById("noteDateInput").value = isoDate;

  // Renderizar eventos oficiales de la fecha
  const officialContainer = document.getElementById("modalOfficialEvents");
  const officialSection = document.getElementById("modalOfficialSection");
  const officialEvents = getOfficialEventsForDate(isoDate);

  officialContainer.innerHTML = "";
  if (officialEvents.length === 0) {
    officialSection.hidden = true;
  } else {
    officialSection.hidden = false;
    officialEvents.forEach(ev => {
      const box = document.createElement("div");
      box.className = "event-detail-box";
      box.style.borderLeftColor = ev.color;
      box.innerHTML = `
        <div>
          <h5>${ev.title}</h5>
          <p>Fecha oficial del Calendario Preparatoria 2026-2027</p>
        </div>
      `;
      officialContainer.appendChild(box);
    });
  }

  // Renderizar recordatorios del usuario de la fecha
  const userContainer = document.getElementById("modalUserEvents");
  const userNotes = getUserNotesForDate(isoDate);
  userContainer.innerHTML = "";

  if (userNotes.length === 0) {
    userContainer.innerHTML = `<p style="font-size:0.8rem;color:var(--text-muted);">No hay recordatorios personales registrados para este día.</p>`;
  } else {
    userNotes.forEach(note => {
      const box = document.createElement("div");
      box.className = "event-detail-box";
      box.style.borderLeftColor = note.color;
      box.innerHTML = `
        <div>
          <h5>${escapeHTML(note.title)} ${note.time ? `<span style="font-weight:500;font-size:0.78rem;color:var(--text-muted);">(${note.time})</span>` : ""}</h5>
          ${note.description ? `<p>${escapeHTML(note.description)}</p>` : ""}
        </div>
        <div class="event-actions">
          <button type="button" class="btn-secondary" data-edit="${note.id}" style="padding:3px 8px;font-size:0.75rem;">Editar</button>
          <button type="button" class="btn-delete-mini" data-del="${note.id}">🗑</button>
        </div>
      `;
      box.querySelector(`[data-edit="${note.id}"]`).addEventListener("click", () => populateFormForEdit(note));
      box.querySelector(`[data-del="${note.id}"]`).addEventListener("click", () => {
        deleteUserNote(note.id);
        openDayModal(isoDate);
      });
      userContainer.appendChild(box);
    });
  }

  resetNoteForm(isoDate);

  if (editNoteId) {
    const target = state.userNotes.find(n => n.id === editNoteId);
    if (target) populateFormForEdit(target);
  }

  modal.hidden = false;
}

function populateFormForEdit(note) {
  document.getElementById("formTitleHeading").textContent = "✏️ Editar Recordatorio";
  document.getElementById("noteIdInput").value = note.id;
  document.getElementById("noteDateInput").value = note.date;
  document.getElementById("noteTimeInput").value = note.time || "";
  document.getElementById("noteTitleInput").value = note.title;
  document.getElementById("noteDescInput").value = note.description || "";
  selectNoteColorSwatch(note.color);
  document.getElementById("btnCancelEdit").hidden = false;
  document.getElementById("btnSaveNote").textContent = "Actualizar Cambios";
}

function resetNoteForm(defaultDate) {
  document.getElementById("formTitleHeading").textContent = "➕ Añadir Recordatorio o Nota";
  document.getElementById("noteIdInput").value = "";
  document.getElementById("noteDateInput").value = defaultDate || state.selectedDate;
  document.getElementById("noteTimeInput").value = "";
  document.getElementById("noteTitleInput").value = "";
  document.getElementById("noteDescInput").value = "";
  document.getElementById("btnCancelEdit").hidden = true;
  document.getElementById("btnSaveNote").textContent = "Guardar Recordatorio";
}

function selectNoteColorSwatch(colorHex) {
  state.selectedNoteColor = colorHex;
  document.querySelectorAll("#noteColorSwatches .color-Option").forEach(btn => {
    btn.classList.toggle("selected", btn.dataset.color.toLowerCase() === colorHex.toLowerCase());
  });
  document.getElementById("noteCustomColor").value = colorHex;
}

function deleteUserNote(noteId) {
  state.userNotes = state.userNotes.filter(n => n.id !== noteId);
  saveNotesToStorage();
  renderAll();
}

/* ==========================================================================
   TEMAS Y PERSONALIZACIÓN DE COLOR
   ========================================================================== */
function setTheme(themeName, persist = true) {
  document.documentElement.setAttribute("data-theme", themeName);
  document.documentElement.style.removeProperty("--primary");
  document.documentElement.style.removeProperty("--primary-soft");

  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.themeSet === themeName);
  });

  if (persist) {
    localStorage.setItem(STORAGE_KEYS.THEME, themeName);
    localStorage.removeItem(STORAGE_KEYS.CUSTOM_COLOR);
  }
}

function applyCustomPrimaryColor(hexColor, persist = true) {
  document.documentElement.style.setProperty("--primary", hexColor);
  document.documentElement.style.setProperty("--primary-soft", `${hexColor}1F`);
  document.getElementById("customAccentInput").value = hexColor;

  if (persist) {
    localStorage.setItem(STORAGE_KEYS.CUSTOM_COLOR, hexColor);
  }
}

/* ==========================================================================
   EVENTOS DE INTERFAZ
   ========================================================================== */
function bindUIEvents() {
  // Selectores de tema predefinidos
  document.querySelectorAll(".theme-btn").forEach(btn => {
    btn.addEventListener("click", () => setTheme(btn.dataset.themeSet));
  });

  // Selector libre de color de acento para la aplicación
  document.getElementById("customAccentInput").addEventListener("input", e => {
    applyCustomPrimaryColor(e.target.value);
  });

  // Cambio de Vista Anual / Vista Mensual
  const btnAnnual = document.getElementById("btnViewAnnual");
  const btnMonth = document.getElementById("btnViewMonth");

  btnAnnual.addEventListener("click", () => {
    state.viewMode = "annual";
    btnAnnual.classList.add("active");
    btnMonth.classList.remove("active");
    renderCalendarGrid();
  });

  btnMonth.addEventListener("click", () => {
    state.viewMode = "month";
    btnMonth.classList.add("active");
    btnAnnual.classList.remove("active");
    renderCalendarGrid();
  });

  // Navegación de meses en Vista Mensual
  document.getElementById("btnPrevMonth").addEventListener("click", () => {
    state.activeMonthIndex = (state.activeMonthIndex - 1 + MONTHS_CONFIG.length) % MONTHS_CONFIG.length;
    renderCalendarGrid();
  });

  document.getElementById("btnNextMonth").addEventListener("click", () => {
    state.activeMonthIndex = (state.activeMonthIndex + 1) % MONTHS_CONFIG.length;
    renderCalendarGrid();
  });

  // Buscador en tiempo real
  const searchInput = document.getElementById("searchInput");
  const btnClearSearch = document.getElementById("btnClearSearch");

  searchInput.addEventListener("input", e => {
    state.searchQuery = e.target.value;
    btnClearSearch.hidden = state.searchQuery.length === 0;
    renderCalendarGrid();
  });

  btnClearSearch.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    btnClearSearch.hidden = true;
    renderCalendarGrid();
  });

  // Chips de filtros por categoría
  document.querySelectorAll("#categoryFilters .filter-chip").forEach(chip => {
    chip.addEventListener("click", () => {
      document.querySelectorAll("#categoryFilters .filter-chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.activeFilter = chip.dataset.filter;
      renderCalendarGrid();
    });
  });

  // Botón rápido "+ Nuevo Recordatorio"
  document.getElementById("btnNewNoteQuick").addEventListener("click", () => {
    openDayModal(state.selectedDate || "2026-08-17");
  });

  // Cerrar modal
  document.getElementById("btnCloseModal").addEventListener("click", () => {
    document.getElementById("dayModal").hidden = true;
  });

  document.getElementById("dayModal").addEventListener("click", e => {
    if (e.target.id === "dayModal") {
      document.getElementById("dayModal").hidden = true;
    }
  });

  // Swatches de color para nota
  document.querySelectorAll("#noteColorSwatches .color-Option").forEach(btn => {
    btn.addEventListener("click", () => selectNoteColorSwatch(btn.dataset.color));
  });

  document.getElementById("noteCustomColor").addEventListener("input", e => {
    selectNoteColorSwatch(e.target.value);
  });

  // Cancelar edición en formulario
  document.getElementById("btnCancelEdit").addEventListener("click", () => {
    resetNoteForm(state.selectedDate);
  });

  // Guardar / Actualizar Recordatorio
  document.getElementById("noteForm").addEventListener("submit", e => {
    e.preventDefault();
    const id = document.getElementById("noteIdInput").value;
    const date = document.getElementById("noteDateInput").value;
    const time = document.getElementById("noteTimeInput").value;
    const title = document.getElementById("noteTitleInput").value.trim();
    const description = document.getElementById("noteDescInput").value.trim();

    if (!title || !date) return;

    if (id) {
      const idx = state.userNotes.findIndex(n => n.id === id);
      if (idx !== -1) {
        state.userNotes[idx] = {
          ...state.userNotes[idx],
          date,
          time,
          title,
          description,
          color: state.selectedNoteColor
        };
      }
    } else {
      state.userNotes.push({
        id: "note_" + Date.now() + "_" + Math.random().toString(36).slice(2, 6),
        date,
        time,
        title,
        description,
        color: state.selectedNoteColor
      });
    }

    saveNotesToStorage();
    renderAll();
    openDayModal(date);
  });

  // Exportar notas a archivo JSON
  document.getElementById("btnExportJSON").addEventListener("click", () => {
    const dataStr = JSON.stringify(state.userNotes, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "recordatorios-juventud-2026-2027.json";
    a.click();
    URL.revokeObjectURL(url);
  });

  // Importar notas desde archivo JSON
  document.getElementById("inputImportJSON").addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      try {
        const imported = JSON.parse(ev.target.result);
        if (Array.isArray(imported)) {
          state.userNotes = imported;
          saveNotesToStorage();
          renderAll();
          alert("Recordatorios importados correctamente.");
        }
      } catch (err) {
        alert("El archivo JSON no tiene un formato válido.");
      }
    };
    reader.readAsText(file);
  });
}

/* Utilidades */
function capitalizeFirst(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}
