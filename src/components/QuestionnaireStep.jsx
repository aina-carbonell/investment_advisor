import React from 'react';

const QuestionnaireStep = ({ question, answer, onAnswer }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {question.title}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {question.question}
        </p>

        <div className="space-y-4">
          {question.options.map((option) => (
            <label
              key={option.value}
              className={`block p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 hover:bg-blue-50 ${answer === option.value
                  ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-blue-300'
                }`}
            >
              <input
                type="radio"
                name={question.id}
                value={option.value}
                checked={answer === option.value}
                onChange={(e) => onAnswer(question.id, parseInt(e.target.value))}
                className="sr-only"
              />
              <div className="flex items-center">
                <div className={`flex-shrink-0 w-4 h-4 border-2 rounded-full mr-3 ${answer === option.value
                    ? 'border-blue-500 bg-blue-500'
                    : 'border-gray-300'
                  }`}>
                  {answer === option.value && (
                    <div className="w-full h-full bg-white rounded-full scale-50"></div>
                  )}
                </div>
                <span className="text-gray-700 font-medium">
                  {option.label}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionnaireStep;