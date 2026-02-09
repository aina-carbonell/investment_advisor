import React, { useState } from 'react';
import { questions } from './data/questions';
import { portfolios } from './data/portfolios';
import { calculatePortfolioRecommendation, generateInvestmentTips } from './utils/investmentLogic';
import QuestionnaireStep from './components/QuestionnaireStep';
import ResultsDisplay from './components/ResultsDisplay';
import { TrendingUp, ArrowLeft, RotateCcw } from 'lucide-react';

function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const nextStep = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetQuestionnaire = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  const recommendedPortfolio = calculatePortfolioRecommendation(answers);

  if (showResults) {
    return (
      <ResultsDisplay
        portfolio={portfolios[recommendedPortfolio]}
        answers={answers}
        onReset={resetQuestionnaire}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center mb-4">
            <TrendingUp className="h-12 w-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">
              Asesor de Inversiones
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Responde algunas preguntas para recibir una recomendación personalizada de cartera de inversión
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Pregunta {currentStep + 1} de {questions.length}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(((currentStep + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <QuestionnaireStep
          question={questions[currentStep]}
          answer={answers[questions[currentStep].id]}
          onAnswer={handleAnswer}
        />

        {/* Navigation */}
        <div className="max-w-2xl mx-auto mt-8 flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className="flex items-center px-6 py-2 text-gray-600 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior
          </button>

          <button
            onClick={nextStep}
            disabled={!answers[questions[currentStep].id]}
            className="flex items-center px-8 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {currentStep === questions.length - 1 ? 'Ver Resultados' : 'Siguiente'}
          </button>
        </div>

        {/* Reset Button */}
        {Object.keys(answers).length > 0 && (
          <div className="text-center mt-6">
            <button
              onClick={resetQuestionnaire}
              className="flex items-center mx-auto px-4 py-2 text-gray-500 hover:text-gray-700"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reiniciar Cuestionario
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App; // ← AQUEST ÉS ESSENTIAL