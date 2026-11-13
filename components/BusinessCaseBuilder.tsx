import React, { useState } from 'react';
import { Bot, RefreshCw, Send, CheckCircle2 } from './icons';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface BusinessCaseBuilderProps {
    roiData: {
        currentCost: number;
        currentRevenue: number;
        costReductionPct: number;
        revenueIncreasePct: number;
        newCost: number;
        newRevenue: number;
        currentProfit: number;
        newProfit: number;
    };
}

const BusinessCaseBuilder: React.FC<BusinessCaseBuilderProps> = ({ roiData }) => {
    const caseRef = React.useRef<HTMLDivElement>(null);
    const [processName, setProcessName] = useState('');
    const [processPainPoints, setProcessPainPoints] = useState('');
    const [teamSize, setTeamSize] = useState('');
    
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedCase, setGeneratedCase] = useState<string | null>(null);

    const handleDownloadPdf = async () => {
        if (!caseRef.current) return;
        try {
            const canvas = await html2canvas(caseRef.current, { scale: 2 });
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4');
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
            
            pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
            pdf.save('Business-Case-IA.pdf');
        } catch (error) {
            console.error('Erro ao gerar PDF', error);
        }
    };

    const handleGenerate = async () => {
        if (!processName || !processPainPoints || !teamSize) {
            alert('Preencha os dados do processo.');
            return;
        }
        
        setIsGenerating(true);
        setGeneratedCase(null);
        try {
            if (!process.env.API_KEY) throw new Error("API Key não configurada");
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
            
            const prompt = `
            Atue como um Consultor C-Level especialista em Transformação Digital e IA.
            O usuário tem um processo de negócio com os seguintes detalhes:
            - Nome do Processo: ${processName}
            - Dores/Problemas: ${processPainPoints}
            - Tamanho da Equipe: ${teamSize} pessoas

            E a simulação de ROI indicou:
            - Custo Atual: R$ ${roiData.currentCost}
            - Receita Atual: R$ ${roiData.currentRevenue}
            - Redução de Custos Esperada: ${roiData.costReductionPct}% (Novo custo: R$ ${roiData.newCost})
            - Aumento de Receita Esperado: ${roiData.revenueIncreasePct}% (Nova receita: R$ ${roiData.newRevenue})
            - Lucro Adicional Estimado: R$ ${roiData.newProfit - roiData.currentProfit}

            Sua Tarefa:
            Gere um Business Case detalhado, profissional e persuasivo para a implementação de IA neste processo.
            O documento deve incluir:
            1. Resumo Executivo
            2. Solução Baseada em IA Sugerida
            3. Análise Detalhada de ROI (usando os números fornecidos acima)
            4. Próximos Passos recomendados.

            Formate em Markdown usando títulos, marcadores e parágrafos curtos.
            Use um tom altamente executivo e focado em resultados em Português Brasileiro.
            `;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: [{ parts: [{ text: prompt }] }]
            });
            
            setGeneratedCase(response.text || 'Falha ao gerar o case.');
        } catch (error: any) {
            console.error(error);
            if (error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("quota") || error?.message?.includes("429")) {
                setGeneratedCase('Não foi possível gerar o Business Case no momento devido ao limite de requisições da plataforma. Por favor, tente novamente em alguns instantes (Erro 429).');
            } else {
                setGeneratedCase('Ocorreu um erro ao gerar o Business Case. Tente novamente.');
            }
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="bg-white dark:bg-black/40 border border-slate-200 dark:border-white/10 p-6 md:p-8 rounded-3xl shadow-xl mt-12 mb-12 animate-fade-in relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
                <Bot className="w-32 h-32" />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2 font-sans relative z-10 flex items-center gap-3">
                <div className="p-2 bg-brand-100 dark:bg-cyber-primary/20 text-brand-600 dark:text-cyber-primary rounded-xl">
                    <Bot className="w-6 h-6" />
                </div>
                Business Case Builder
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 relative z-10">
                Descreva um processo atual da sua empresa e deixe nossa IA estruturar um Business Case completo para automatização, com estimativas de ROI.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="space-y-6 relative z-10 bg-slate-50 dark:bg-black/50 p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Processo de Negócio</label>
                        <input
                            type="text"
                            placeholder="Ex: Atendimento ao Cliente Nível 1"
                            value={processName}
                            onChange={(e) => setProcessName(e.target.value)}
                            className="w-full bg-white dark:bg-black/50 border border-slate-300 dark:border-white/10 rounded-xl p-3 focus:outline-none focus:border-brand-500 dark:focus:border-cyber-primary transition-colors text-slate-800 dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Dores e Gargalos Principais</label>
                        <textarea
                            placeholder="Ex: Tempo de resposta alto, respostas inconsistentes, custo elevado de equipe aos fins de semana."
                            value={processPainPoints}
                            onChange={(e) => setProcessPainPoints(e.target.value)}
                            rows={4}
                            className="w-full bg-white dark:bg-black/50 border border-slate-300 dark:border-white/10 rounded-xl p-3 focus:outline-none focus:border-brand-500 dark:focus:border-cyber-primary transition-colors text-slate-800 dark:text-white resize-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Tamanho da Equipe Envolvida</label>
                        <input
                            type="text"
                            placeholder="Ex: 5 pessoas"
                            value={teamSize}
                            onChange={(e) => setTeamSize(e.target.value)}
                            className="w-full bg-white dark:bg-black/50 border border-slate-300 dark:border-white/10 rounded-xl p-3 focus:outline-none focus:border-brand-500 dark:focus:border-cyber-primary transition-colors text-slate-800 dark:text-white"
                        />
                    </div>
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-brand-600 to-brand-500 dark:from-cyber-primary dark:to-cyber-secondary text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(217,70,239,0.4)] transition-all disabled:opacity-50"
                    >
                        {isGenerating ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                        {isGenerating ? 'ANALISANDO DADOS...' : 'GERAR BUSINESS CASE DE IA'}
                    </button>
                </div>

                <div className="relative z-10 w-full h-full flex flex-col">
                    {generatedCase ? (
                        <div className="bg-white dark:bg-cyber-panel border border-brand-200 dark:border-cyber-primary/20 rounded-2xl p-6 shadow-xl flex-grow overflow-y-auto custom-scrollbar max-h-[500px]">
                             <div className="flex justify-between items-center mb-6 border-b border-emerald-100 dark:border-emerald-900/30 pb-3">
                                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold font-mono text-sm">
                                    <CheckCircle2 className="w-4 h-4" />
                                    CASE GERADO COM SUCESSO
                                </div>
                                <button onClick={handleDownloadPdf} className="text-sm px-3 py-1 bg-brand-100 dark:bg-cyber-primary/20 text-brand-600 dark:text-cyber-primary rounded-lg font-bold flex items-center gap-2 hover:bg-brand-200 dark:hover:bg-cyber-primary/40 transition-colors">
                                    EXPORTAR PDF
                                </button>
                             </div>
                            <div ref={caseRef} className="prose prose-slate dark:prose-invert max-w-none prose-h1:text-xl md:prose-h1:text-2xl prose-h2:text-lg prose-h3:text-base prose-p:text-sm prose-li:text-sm prose-p:leading-relaxed bg-white dark:bg-cyber-panel p-4">
                                <Markdown>{generatedCase}</Markdown>
                            </div>
                        </div>
                    ) : (
                        <div className="flex-grow border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center p-8 text-center bg-slate-50/50 dark:bg-black/20">
                            <Bot className="w-12 h-12 text-slate-300 dark:text-slate-600 mb-4" />
                            <h3 className="text-lg font-bold text-slate-500 dark:text-slate-400 mb-2">Aguardando Input</h3>
                            <p className="text-sm text-slate-400 dark:text-slate-500 max-w-sm">
                                Preencha os detalhes do seu processo ao lado e clique em gerar para ver a análise estratégica da IA.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BusinessCaseBuilder;
