
import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, ArrowRight, Sparkles } from './icons';
import { useCourseProgress } from '../context/ProgressContext';

interface QuizProps {
  quizData: QuizQuestion[];
  onComplete: (score: number) => void;
  isCompleted: boolean;
  lessonId: string;
}

const Quiz: React.FC<QuizProps> = ({ quizData = [], onComplete, isCompleted, lessonId }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(isCompleted);
  const { registerInteraction } = useCourseProgress();

  if (!quizData || quizData.length === 0) {
      return (
          <div className="bg-slate-900 border border-cyber-accent/20 text-white p-8 rounded-3xl text-center">
              Nenhum quiz disponível para esta aula.
              <button onClick={() => onComplete(100)} className="ml-4 px-4 py-2 bg-cyber-primary rounded text-black font-bold">Continuar</button>
          </div>
      )
  }

  if (isCompleted || showResults) {
    return (
        <div className="bg-gradient-to-br from-cyber-panel to-slate-900 border border-cyber-accent/20 text-white p-8 md:p-12 rounded-3xl shadow-2xl animate-slide-up relative overflow-hidden mx-4 mb-8">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
                <div className="p-6 bg-cyber-accent/10 rounded-full mb-6 ring-1 ring-cyber-accent/50 shadow-[0_0_30px_rgba(16,185,129,0.2)] animate-scale-in">
                    <CheckCircle2 className="h-16 w-16 text-cyber-accent"/>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 font-sans tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300">
                    Validação Concluída
                </h3>
                <p className="text-slate-300 text-base md:text-lg mb-8 max-w-md leading-relaxed font-serif">
                    Conceitos assimilados com sucesso. Você está pronto para o próximo nível.
                </p>
                {!isCompleted && (
                    <div className="w-full max-w-xs bg-slate-800 rounded-full h-3 mb-2 border border-white/10 overflow-hidden">
                        <div className="bg-cyber-accent h-full rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" style={{ width: `${(score / quizData.length) * 100}%` }}></div>
                    </div>
                )}
            </div>
        </div>
    );
  }

  const question = quizData[currentQuestionIndex];

  const handleOptionClick = (index: number) => {
    if (isAnswerChecked) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    setIsAnswerChecked(true);
    if (selectedOption === question.correctAnswerIndex) {
        setScore(prev => prev + 1);
        registerInteraction(lessonId, 'quiz_correct', `q_${currentQuestionIndex}_try_${Date.now()}`);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizData.length - 1) {
        setCurrentQuestionIndex(prev => prev + 1);
        setSelectedOption(null);
        setIsAnswerChecked(false);
    } else {
        if (score >= Math.floor(quizData.length / 2)) {
            const finalPercentage = Math.round((score / quizData.length) * 100);
            onComplete(finalPercentage);
            setShowResults(true);
        } else {
            alert("Precisão insuficiente. Reiniciando protocolo de validação.");
            setCurrentQuestionIndex(0);
            setSelectedOption(null);
            setIsAnswerChecked(false);
            setScore(0);
        }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4 pb-12">
      {/* Progress Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8 gap-4">
        <span className="text-xs font-mono text-cyber-primary/80 font-bold tracking-widest flex items-center gap-2 bg-cyber-primary/5 px-3 py-1 rounded-full border border-cyber-primary/10">
            <span className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse"></span>
            QUESTÃO {currentQuestionIndex + 1} / {quizData.length}
        </span>
        <div className="w-full sm:w-32 h-1.5 bg-slate-800 rounded-full overflow-hidden border border-white/5">
            <div 
                className="h-full bg-cyber-primary shadow-[0_0_10px_#06b6d4] transition-all duration-500 ease-out"
                style={{ width: `${((currentQuestionIndex + 1) / quizData.length) * 100}%` }}
            ></div>
        </div>
      </div>

      {/* Question Title */}
      <div className="mb-6 sm:mb-8 min-h-[60px] sm:min-h-[80px]">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-snug font-sans tracking-wide">
          {question.question}
        </h3>
      </div>

      {/* Option Cards */}
      <div className="space-y-3 sm:space-y-4">
        {question.options.map((option, index) => {
            let containerClass = "border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/30 text-slate-300 cursor-pointer transform hover:scale-[1.01]";
            let indicatorClass = "border-white/20 text-white/40 group-hover:border-white/50 group-hover:text-white/80";
            
            // Estado Selecionado (Antes de confirmar)
            if (selectedOption === index && !isAnswerChecked) {
                containerClass = "border-cyber-primary bg-cyber-primary/10 text-white shadow-[0_0_15px_rgba(6,182,212,0.15)] scale-[1.02] ring-1 ring-cyber-primary/50";
                indicatorClass = "border-cyber-primary text-cyber-primary bg-cyber-primary/20 font-bold";
            }

            // Estado Verificado
            if (isAnswerChecked) {
                if (index === question.correctAnswerIndex) {
                    // Correto
                    containerClass = "border-emerald-500 bg-emerald-500/10 text-white shadow-[0_0_20px_rgba(16,185,129,0.2)]";
                    indicatorClass = "border-emerald-500 bg-emerald-500 text-black font-bold";
                } else if (selectedOption === index) {
                    // Errado
                    containerClass = "border-red-500 bg-red-500/10 text-red-200 opacity-80";
                    indicatorClass = "border-red-500 text-red-500";
                } else {
                    // Neutro
                    containerClass = "border-transparent bg-black/20 text-slate-600 opacity-40 grayscale";
                    indicatorClass = "border-slate-800 text-slate-800";
                }
            }

            return (
                <div
                    key={index}
                    onClick={() => handleOptionClick(index)}
                    className={`
                        w-full text-left p-4 sm:p-6 rounded-2xl border-2 transition-all duration-200 flex items-start gap-4 group relative overflow-hidden active:scale-95
                        ${containerClass}
                    `}
                >
                    <div className={`
                        w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 rounded-lg border-2 flex items-center justify-center text-xs sm:text-sm font-mono transition-all mt-0.5
                        ${indicatorClass}
                    `}>
                        {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-base sm:text-lg font-medium leading-relaxed font-serif tracking-wide">{option}</span>
                    
                    {/* Feedback Icons */}
                    {isAnswerChecked && index === question.correctAnswerIndex && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-emerald-500/20 p-1 rounded-full">
                            <CheckCircle2 className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400 animate-scale-in drop-shadow-glow" />
                        </div>
                    )}
                    {isAnswerChecked && selectedOption === index && index !== question.correctAnswerIndex && (
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-500/20 p-1 rounded-full">
                            <XCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-400 animate-scale-in" />
                        </div>
                    )}
                </div>
            );
        })}
      </div>

      {/* Footer Actions */}
      <div className="mt-8 sm:mt-10 pt-6 border-t border-white/5 flex justify-center sm:justify-end">
        {!isAnswerChecked ? (
            <button
                onClick={handleCheckAnswer}
                disabled={selectedOption === null}
                className="
                    w-full sm:w-auto px-8 py-3.5 bg-cyber-primary text-black font-bold rounded-xl 
                    hover:bg-cyan-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none
                    shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] 
                    active:translate-y-0.5 font-mono text-sm tracking-widest uppercase flex items-center justify-center gap-3
                "
            >
                CONFIRMAR <Sparkles className="w-4 h-4" />
            </button>
        ) : (
            <button
                onClick={handleNext}
                className="
                    w-full sm:w-auto px-8 py-3.5 bg-white text-black font-bold rounded-xl 
                    hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl active:translate-y-0.5
                    flex items-center justify-center gap-3 font-mono text-sm tracking-widest uppercase
                "
            >
                {currentQuestionIndex < quizData.length - 1 ? 'PRÓXIMA' : 'FINALIZAR'} <ArrowRight className="w-5 h-5" />
            </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
