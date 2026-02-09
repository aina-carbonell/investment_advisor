export const questions = [
  {
    id: 'riskTolerance',
    title: 'Tolerancia al Riesgo',
    question: '¿Cómo te sientes respecto al riesgo en tus inversiones?',
    options: [
      { value: 1, label: 'Conservador - Prefiero seguridad sobre rentabilidad' },
      { value: 2, label: 'Moderado - Acepto algo de riesgo por mejores retornos' },
      { value: 3, label: 'Agresivo - Busco máximos retornos, acepto alta volatilidad' }
    ]
  },
  {
    id: 'investmentGoals',
    title: 'Objetivos de Inversión',
    question: '¿Cuál es tu objetivo principal de inversión?',
    options: [
      { value: 1, label: 'Preservar capital y generar ingresos estables' },
      { value: 2, label: 'Crecimiento moderado del capital' },
      { value: 3, label: 'Máximo crecimiento del capital a largo plazo' }
    ]
  },
  {
    id: 'timeHorizon',
    title: 'Horizonte Temporal',
    question: '¿Por cuánto tiempo planeas invertir?',
    options: [
      { value: 1, label: 'Menos de 3 años' },
      { value: 2, label: '3-7 años' },
      { value: 3, label: 'Más de 7 años' }
    ]
  },
  {
    id: 'financialKnowledge',
    title: 'Conocimiento Financiero',
    question: '¿Cómo calificarías tu conocimiento sobre inversiones?',
    options: [
      { value: 1, label: 'Principiante - Conocimiento básico' },
      { value: 2, label: 'Intermedio - Entiendo conceptos fundamentales' },
      { value: 3, label: 'Avanzado - Amplia experiencia en inversiones' }
    ]
  },
  {
    id: 'investmentPreferences',
    title: 'Preferencias de Inversión',
    question: '¿Qué tipo de inversiones prefieres?',
    options: [
      { value: 1, label: 'Renta fija y productos garantizados' },
      { value: 2, label: 'Combinación equilibrada de renta fija y variable' },
      { value: 3, label: 'Principalmente renta variable y productos alternativos' }
    ]
  }
];