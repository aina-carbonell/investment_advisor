export const calculatePortfolioRecommendation = (answers) => {
  const totalScore = Object.values(answers).reduce((sum, value) => sum + value, 0);
  const averageScore = totalScore / Object.keys(answers).length;

  if (averageScore <= 1.5) {
    return 'conservative';
  } else if (averageScore <= 2.5) {
    return 'moderate';
  } else {
    return 'aggressive';
  }
};

export const generateInvestmentTips = (portfolioType, answers) => {
  const tips = {
    conservative: [
      'Diversifica en diferentes tipos de bonos',
      'Considera certificados de depósito a plazo',
      'Mantén una reserva de emergencia',
      'Revisa tu cartera cada 6-12 meses'
    ],
    moderate: [
      'Rebalancea tu cartera trimestralmente',
      'Considera fondos indexados para diversificación',
      'No temas a la volatilidad a corto plazo',
      'Aumenta gradualmente tu exposición a acciones'
    ],
    aggressive: [
      'Mantén un horizonte de inversión a largo plazo',
      'Diversifica geográficamente',
      'Considera inversiones alternativas',
      'No inviertas dinero que necesites en 5 años'
    ]
  };

  return tips[portfolioType] || tips.moderate;
};