import React from 'react';
import PortfolioChart from './PortfolioChart';
import { generateInvestmentTips } from '../utils/investmentLogic';
import { TrendingUp, Shield, Target, Clock, Brain, Heart, RotateCcw } from 'lucide-react';

const ResultsDisplay = ({ portfolio, answers, onReset }) => {
  const tips = generateInvestmentTips(portfolio.name.toLowerCase().includes('conservadora') ? 'conservative' :
    portfolio.name.toLowerCase().includes('moderada') ? 'moderate' : 'aggressive', answers);

  const getIconForCategory = (category) => {
    const icons = {
      riskTolerance: Shield,
      investmentGoals: Target,
      timeHorizon: Clock,
      financialKnowledge: Brain,
      investmentPreferences: Heart
    };
    return icons[category] || TrendingUp;
  };

  const getCategoryName = (category) => {
    const names = {
      riskTolerance: 'Tolerancia al Riesgo',
      investmentGoals: 'Objetivos de Inversión',
      timeHorizon: 'Horizonte Temporal',
      financialKnowledge: 'Conocimiento Financiero',
      investmentPreferences: 'Preferencias de Inversión'
    };
    return names[category] || category;
  };

  const getAnswerLabel = (category, value) => {
    const labels = {
      riskTolerance: ['Conservador', 'Moderado', 'Agresivo'],
      investmentGoals: ['Preservar Capital', 'Crecimiento Moderado', 'Máximo Crecimiento'],
      timeHorizon: ['< 3 años', '3-7 años', '> 7 años'],
      financialKnowledge: ['Principiante', 'Intermedio', 'Avanzado'],
      investmentPreferences: ['Renta Fija', 'Equilibrada', 'Renta Variable']
    };
    return labels[category]?.[value - 1] || `Opción ${value}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <TrendingUp className="h-12 w-12 text-green-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">
              Tu Recomendación Personalizada
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Basada en tus respuestas, hemos diseñado la cartera ideal para ti
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Portfolio Recommendation */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                  {portfolio.name}
                </h2>
                <p className="text-lg text-gray-600 mb-4">
                  {portfolio.description}
                </p>
                <div className="flex justify-center space-x-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">
                      {portfolio.expectedReturn}
                    </div>
                    <div className="text-sm text-gray-500">Retorno Esperado</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">
                      {portfolio.riskLevel}
                    </div>
                    <div className="text-sm text-gray-500">Nivel de Riesgo</div>
                  </div>
                </div>
              </div>

              <PortfolioChart allocation={portfolio.allocation} />
            </div>
          </div>

          {/* Your Responses */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Tus Respuestas
            </h3>
            <div className="space-y-4">
              {Object.entries(answers).map(([category, value]) => {
                const IconComponent = getIconForCategory(category);
                return (
                  <div key={category} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <IconComponent className="h-5 w-5 text-blue-600 mr-3" />
                    <div>
                      <div className="font-medium text-gray-800">
                        {getCategoryName(category)}
                      </div>
                      <div className="text-sm text-gray-600">
                        {getAnswerLabel(category, value)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Investment Tips */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Consejos Personalizados
            </h3>
            <div className="space-y-3">
              {tips.map((tip, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Asset Allocation Table */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Distribución Detallada de Activos
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">
                      Tipo de Activo
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">
                      Porcentaje
                    </th>
                    <th className="text-right py-3 px-4 font-semibold text-gray-700">
                      Indicador
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {portfolio.allocation.map((asset, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div
                            className="w-4 h-4 rounded-full mr-3"
                            style={{ backgroundColor: asset.color }}
                          ></div>
                          {asset.name}
                        </div>
                      </td>
                      <td className="text-right py-3 px-4 font-semibold">
                        {asset.percentage}%
                      </td>
                      <td className="text-right py-3 px-4">
                        <div className="w-full bg-gray-200 rounded-full h-2 max-w-20 ml-auto">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${asset.percentage}%`,
                              backgroundColor: asset.color
                            }}
                          ></div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-8">
          <button
            onClick={onReset}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RotateCcw className="h-5 w-5 mr-2" />
            Hacer Nuevo Cuestionario
          </button>
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-800">
              <strong>Aviso Legal:</strong> Esta recomendación es solo para fines educativos y no constituye asesoramiento financiero profesional. Consulta con un asesor financiero certificado antes de tomar decisiones de inversión.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;