
import React from 'react';
import { Award, Download } from './icons';

interface CertificateProps {
  studentName: string;
  courseTitle: string;
}

const Certificate: React.FC<CertificateProps> = ({ studentName, courseTitle }) => {
  const completionDate = new Date().toLocaleDateString('pt-BR');

  const handleDownloadCertificate = () => {
    try {
      if (!(window as any).jspdf || typeof (window as any).jspdf.jsPDF !== 'function') {
        console.error("jsPDF library not loaded correctly.");
        alert("Não foi possível gerar o PDF. A biblioteca de geração de PDF não foi carregada corretamente. Por favor, verifique sua conexão com a internet e recarregue a página.");
        return;
      }
      const { jsPDF } = (window as any).jspdf;

      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const sanitizedName = studentName.replace(/[^a-zA-Z0-9]/g, '_');
      const sanitizedCourse = courseTitle.replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `Certificado-${sanitizedCourse}-${sanitizedName}.pdf`;

      // Background & Border
      doc.setFillColor(250, 250, 250); // Very light gray bg
      doc.rect(0, 0, 297, 210, 'F');
      
      doc.setDrawColor(6, 182, 212); // Cyan-500 (Arkhé Brand)
      doc.setLineWidth(2);
      doc.rect(10, 10, 277, 190);
      
      doc.setDrawColor(15, 23, 42); // Slate-900
      doc.setLineWidth(0.5);
      doc.rect(15, 15, 267, 180);

      // Header
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.setTextColor(100, 116, 139); // slate-500
      doc.text("ARKHÉ AI EDUCATION HUB", 20, 25);

      // Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(36);
      doc.setTextColor(15, 23, 42); // slate-900
      doc.text("CERTIFICADO DE CONCLUSÃO", 148.5, 60, { align: 'center' });

      // Intro text
      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(71, 85, 105); // slate-600
      doc.text("Certificamos que", 148.5, 80, { align: 'center' });

      // Student Name
      doc.setFontSize(32);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(6, 182, 212); // Cyan-500
      doc.text(studentName, 148.5, 100, { align: 'center' });
      
      // Line under name
      doc.setDrawColor(203, 213, 225); // slate-300
      doc.setLineWidth(0.5);
      doc.line(70, 105, 227, 105);

      // Course text
      doc.setFontSize(14);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(71, 85, 105);
      doc.text("concluiu com êxito a trilha de especialização", 148.5, 120, { align: 'center' });

      // Course Name
      doc.setFontSize(28);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(15, 23, 42); // slate-900
      doc.text(courseTitle, 148.5, 135, { align: 'center' });

      // Date & Signature line
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 116, 139);
      doc.text(`Concluído em: ${completionDate}`, 148.5, 165, { align: 'center' });
      
      // Footer / Verification code simulation
      doc.setFontSize(8);
      doc.setTextColor(148, 163, 184);
      doc.text(`ID do Certificado: ${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`, 148.5, 195, { align: 'center' });

      doc.save(fileName);
    } catch (error) {
        console.error("An unexpected error occurred during certificate PDF generation:", error);
        alert("Ocorreu um erro inesperado ao tentar gerar o certificado. Por favor, recarregue a página e tente novamente.");
    }
  };


  return (
    <div className="relative overflow-hidden rounded-2xl p-[2px] bg-gradient-to-br from-cyber-primary via-white to-cyber-secondary shadow-2xl animate-slide-up group">
        <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyber-primary/20 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="p-4 bg-gradient-to-br from-cyber-primary/20 to-cyber-secondary/20 rounded-full mb-6 ring-1 ring-white/20 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                    <Award className="h-12 w-12 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-sans tracking-tight">Certificado de Conclusão</h2>
                <p className="text-slate-400 mb-8">Este documento oficial comprova a sua expertise.</p>
                
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 w-full max-w-2xl backdrop-blur-sm mb-8">
                    <p className="text-slate-300 text-sm uppercase tracking-widest mb-2">Certificado Concedido a</p>
                    <p className="text-2xl md:text-3xl font-bold text-cyber-primary mb-6 font-mono">{studentName}</p>
                    
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>
                    
                    <p className="text-slate-300 text-sm uppercase tracking-widest mb-2">Pela conclusão da trilha</p>
                    <p className="text-xl md:text-2xl font-bold text-white font-sans">{courseTitle}</p>
                </div>

                <p className="text-sm text-slate-500 font-mono mb-8">Data de Emissão: {completionDate}</p>
        
                <button
                    onClick={handleDownloadCertificate}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-cyber-primary transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:-translate-y-1 font-mono text-sm tracking-widest uppercase"
                >
                    <Download className="h-5 w-5" />
                    <span>Baixar PDF Oficial</span>
                </button>
            </div>
        </div>
    </div>
  );
};

export default Certificate;
