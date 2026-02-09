export const portfolios = {
  conservative: {
    name: 'Cartera Conservadora',
    description: 'Enfocada en la preservación del capital con riesgo mínimo',
    allocation: [
      { name: 'Bonos Gubernamentales', percentage: 50, color: '#3b82f6' },
      { name: 'Bonos Corporativos', percentage: 25, color: '#10b981' },
      { name: 'Acciones Defensivas', percentage: 15, color: '#f59e0b' },
      { name: 'Efectivo', percentage: 10, color: '#6b7280' }
    ],
    expectedReturn: '4-6%',
    riskLevel: 'Bajo'
  },
  moderate: {
    name: 'Cartera Moderada',
    description: 'Balance entre crecimiento y estabilidad',
    allocation: [
      { name: 'Acciones Nacionales', percentage: 30, color: '#3b82f6' },
      { name: 'Acciones Internacionales', percentage: 20, color: '#10b981' },
      { name: 'Bonos', percentage: 35, color: '#f59e0b' },
      { name: 'REITs', percentage: 10, color: '#8b5cf6' },
      { name: 'Efectivo', percentage: 5, color: '#6b7280' }
    ],
    expectedReturn: '6-8%',
    riskLevel: 'Medio'
  },
  aggressive: {
    name: 'Cartera Agresiva',
    description: 'Máximo potencial de crecimiento con alta volatilidad',
    allocation: [
      { name: 'Acciones de Crecimiento', percentage: 40, color: '#3b82f6' },
      { name: 'Acciones Internacionales', percentage: 25, color: '#10b981' },
      { name: 'Tecnología', percentage: 15, color: '#f59e0b' },
      { name: 'Mercados Emergentes', percentage: 10, color: '#8b5cf6' },
      { name: 'Bonos', percentage: 10, color: '#6b7280' }
    ],
    expectedReturn: '8-12%',
    riskLevel: 'Alto'
  }
};