
import React, { useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { COURSE_DATA } from '../data/courseData';
import { COURSES } from '../data/courses';
import { useCourseProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import Quiz from '../components/Quiz';
import AITutor from '../components/AITutor';
import { ArrowLeft, Download, BotMessageSquare, Headphones, RefreshCw, Sparkles, PlayCircle, ChevronRight, BrainCog, CheckCircle2, Youtube, ArrowRight, Trophy, Eye, Maximize, Minimize } from '../components/icons';
import { GoogleGenAI, Modality, Type } from "@google/genai";
import { QuizQuestion } from '../types';
import { saveArtifact, getArtifact } from '../utils/db';

// URL da música de fundo (Lo-Fi / Ambient). 
const AMBIENT_MUSIC_URL = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3"; 

const getLessonImage = (title: string, moduleId: string): string => {
    const t = title.toLowerCase();
    const keywordMap: Record<string, string> = {
        'história': 'photo-1550751827-4bd374c3f58b', 
        'tipos': 'photo-1620712943543-bcc4688e7485', 
        'futuro': 'photo-1451187580459-43490279c0fa', 
        'ética': 'photo-1507146426996-ef05306b995a', 
        'nlp': 'photo-1555949963-ff9fe0c870eb', 
        'linguagem': 'photo-1546410531-bb4caa6b424d', 
        'prompt': 'photo-1664575602276-acd073f104c1', 
        'chat': 'photo-1531746790731-6c087fecd65a', 
        'llm': 'photo-1655720828018-edd2daec9349', 
        'neural': 'photo-1550684848-fac1c5b4e853', 
        'deep': 'photo-1617791160505-6f00504e3519', 
        'visão': 'photo-1561736778-92e52a7769ef', 
        'dados': 'photo-1518186285589-2f7649de83e0', 
        'data': 'photo-1551288049-bebda4e38f71', 
        'governança': 'photo-1450101499163-c8848c66ca85', 
        'privacidade': 'photo-1563013544-824ae1b704d3', 
        'agente': 'photo-1535376472810-5d229c6bda3c', 
        'automação': 'photo-1485827404703-89b55fcc595e', 
        'rpa': 'photo-1518432031352-d6fc5c10da5a', 
        'bot': 'photo-1531746790731-6c087fecd65a', 
        'vendas': 'photo-1556761175-5973dc0f32e7', 
        'liderança': 'photo-1519389950473-47ba0277781c', 
        'crm': 'photo-1552664730-d307ca884978', 
        'marketing': 'photo-1533750349088-cd871a92f312', 
        'criação': 'photo-1618005182384-a83a8bd57fbe', 
        'código': 'photo-1542831371-29b0f74f9713', 
        'low-code': 'photo-1555099962-4199c345e5dd', 
    };
    const foundKey = Object.keys(keywordMap).find(key => t.includes(key));
    if (foundKey) return `https://images.unsplash.com/${keywordMap[foundKey]}?auto=format&fit=crop&w=1600&q=80`;
    
    return `https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80`;
};

// VALIDAÇÃO RIGOROSA DE YOUTUBE ID
function extractYoutubeId(url: string | undefined | null): string | null {
    if (!url || typeof url !== 'string') return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

function decode(base64: string) {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

// Função para buscar e decodificar a música de fundo
async function fetchAndDecodeMusic(url: string, ctx: AudioContext): Promise<AudioBuffer | null> {
    try {
        const response = await fetch(url);
        if (!response.ok) return null;
        const arrayBuffer = await response.arrayBuffer();
        return await ctx.decodeAudioData(arrayBuffer);
    } catch (e) {
        console.warn("Não foi possível carregar a música de fundo:", e);
        return null;
    }
}

// Função para mixar Voz + Música
async function mixVoiceAndMusic(voiceBuffer: AudioBuffer, musicBuffer: AudioBuffer | null): Promise<AudioBuffer> {
    if (!musicBuffer) return voiceBuffer;

    const offlineCtx = new OfflineAudioContext(2, voiceBuffer.duration * 44100, 44100);

    // 1. Configurar VOZ (Canal Principal)
    const voiceSource = offlineCtx.createBufferSource();
    voiceSource.buffer = voiceBuffer;
    voiceSource.connect(offlineCtx.destination);
    voiceSource.start(0);

    // 2. Configurar MÚSICA (Fundo)
    const musicSource = offlineCtx.createBufferSource();
    musicSource.buffer = musicBuffer;
    musicSource.loop = true; 

    // Controle de Volume da Música (Ducking)
    const musicGain = offlineCtx.createGain();
    musicGain.gain.value = 0.15; 
    
    // Fade In/Out suave na música
    musicGain.gain.setValueAtTime(0, 0);
    musicGain.gain.linearRampToValueAtTime(0.15, 2); 
    musicGain.gain.setValueAtTime(0.15, voiceBuffer.duration - 3);
    musicGain.gain.linearRampToValueAtTime(0, voiceBuffer.duration); 

    musicSource.connect(musicGain);
    musicGain.connect(offlineCtx.destination);
    musicSource.start(0);

    return await offlineCtx.startRendering();
}

function chunkText(text: string, maxLength: number): string[] {
    const chunks: string[] = [];
    let remaining = text;
    while (remaining.length > 0) {
        if (remaining.length <= maxLength) {
            chunks.push(remaining);
            break;
        }
        let splitIndex = remaining.lastIndexOf('.', maxLength);
        if (splitIndex === -1) splitIndex = remaining.lastIndexOf('\n', maxLength);
        if (splitIndex === -1) splitIndex = remaining.lastIndexOf(' ', maxLength);
        if (splitIndex === -1) splitIndex = maxLength;
        chunks.push(remaining.substring(0, splitIndex + 1).trim());
        remaining = remaining.substring(splitIndex + 1).trim();
    }
    return chunks;
}

function concatenateAudioBuffers(buffers: AudioBuffer[], ctx: AudioContext): AudioBuffer {
    if (buffers.length === 0) return ctx.createBuffer(1, 1, ctx.sampleRate);
    if (buffers.length === 1) return buffers[0];
    let totalLength = 0;
    const numberOfChannels = buffers[0].numberOfChannels;
    for (const buffer of buffers) {
        totalLength += buffer.length;
    }
    const outputBuffer = ctx.createBuffer(numberOfChannels, totalLength, ctx.sampleRate);
    for (let channel = 0; channel < numberOfChannels; channel++) {
        const outputData = outputBuffer.getChannelData(channel);
        let offset = 0;
        for (const buffer of buffers) {
            if (channel < buffer.numberOfChannels) {
               outputData.set(buffer.getChannelData(channel), offset);
            }
            offset += buffer.length;
        }
    }
    return outputBuffer;
}

function bufferToWav(buffer: AudioBuffer): Blob {
  const numOfChan = buffer.numberOfChannels;
  const length = buffer.length * numOfChan * 2 + 44;
  const bufferArr = new ArrayBuffer(length);
  const view = new DataView(bufferArr);
  const channels = [];
  let i;
  let sample;
  let offset = 0;
  let pos = 0;

  function setUint16(data: number) { view.setUint16(pos, data, true); pos += 2; }
  function setUint32(data: number) { view.setUint32(pos, data, true); pos += 4; }

  setUint32(0x46464952); setUint32(length - 8); setUint32(0x45564157); 
  setUint32(0x20746d66); setUint32(16); setUint16(1); setUint16(numOfChan);
  setUint32(buffer.sampleRate); setUint32(buffer.sampleRate * 2 * numOfChan); 
  setUint16(numOfChan * 2); setUint16(16); 
  setUint32(0x61746164); setUint32(length - pos - 4); 

  for (i = 0; i < buffer.numberOfChannels; i++) channels.push(buffer.getChannelData(i));

  while (pos < buffer.length) {
    for (i = 0; i < numOfChan; i++) {
      sample = Math.max(-1, Math.min(1, channels[i][pos])); 
      sample = (0.5 + sample < 0 ? sample * 32768 : sample * 32767) | 0; 
      view.setInt16(44 + offset, sample, true);
      offset += 2;
    }
    pos++;
  }
  return new Blob([bufferArr], { type: "audio/wav" });
}

const imageUrlToBase64 = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } catch (error) {
    console.error("Erro ao converter imagem para PDF", error);
    return "";
  }
};

const LessonView: React.FC = () => {
  const { courseId, moduleId, lessonId } = useParams<{ courseId: string; moduleId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const { markLessonAsComplete, isLessonCompleted, registerInteraction } = useCourseProgress();
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  
  const [expandedContent, setExpandedContent] = useState<string | null>(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const [dynamicVideoUrl, setDynamicVideoUrl] = useState<string | null>(null);
  
  const [isZenMode, setIsZenMode] = useState(false);
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  const [isPomodoroActive, setIsPomodoroActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPomodoroActive && pomodoroTime > 0) {
        interval = setInterval(() => {
            setPomodoroTime(prev => prev - 1);
        }, 1000);
    } else if (pomodoroTime === 0 && isPomodoroActive) {
        setIsPomodoroActive(false);
        alert("Sessão Pomodoro concluída! Descanse um pouco.");
        setPomodoroTime(25 * 60);
    }
    return () => clearInterval(interval);
  }, [isPomodoroActive, pomodoroTime]);

  const togglePomodoro = () => setIsPomodoroActive(!isPomodoroActive);
  const formatPomodoroTime = () => {
      const minutes = Math.floor(pomodoroTime / 60);
      const seconds = pomodoroTime % 60;
      return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    if (isZenMode) {
      document.body.classList.add('zen-mode');
    } else {
      document.body.classList.remove('zen-mode');
    }
    return () => {
      document.body.classList.remove('zen-mode');
    };
  }, [isZenMode]);

  const [isGeneratingAudio, setIsGeneratingAudio] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const audioPlayerRef = useRef<HTMLAudioElement | null>(null);

  const [isGeneratingQuiz, setIsGeneratingQuiz] = useState(false);
  const [dynamicQuiz, setDynamicQuiz] = useState<QuizQuestion[] | null>(null);

  const [isGeneratingChallenge, setIsGeneratingChallenge] = useState(false);
  const [practicalChallenge, setPracticalChallenge] = useState<{scenario: string, question: string} | null>(null);
  const [challengeAnswer, setChallengeAnswer] = useState("");
  const [challengeFeedback, setChallengeFeedback] = useState<string | null>(null);
  const [isEvaluatingChallenge, setIsEvaluatingChallenge] = useState(false);

  const [isGeneratingInfographic, setIsGeneratingInfographic] = useState(false);
  const [infographicUrls, setInfographicUrls] = useState<string[]>([]);

  const [readingProgress, setReadingProgress] = useState(0);
  const [needsExpansion, setNeedsExpansion] = useState(false);

  const module = COURSE_DATA.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);
  const isCompleted = lesson ? isLessonCompleted(lesson.id) : false;
  
  // Navigation Logic
  const lessonIndex = module?.lessons.findIndex(l => l.id === lessonId) ?? -1;
  const nextLesson = module?.lessons[lessonIndex + 1];
  
  // Logic for Next Module
  const currentCourse = COURSES.find(c => c.id === courseId);
  const currentModuleIndex = currentCourse?.moduleIds.indexOf(moduleId || '') ?? -1;
  const nextModuleId = currentCourse?.moduleIds[currentModuleIndex + 1];
  const nextModule = nextModuleId ? COURSE_DATA.find(m => m.id === nextModuleId) : null;

  const validVideoId = dynamicVideoUrl ? extractYoutubeId(dynamicVideoUrl) : null;
  const showVideoButton = !!validVideoId;

  useEffect(() => {
    if (lesson) {
        document.title = `${lesson.title} | Arckhé AI Academy`;
        window.scrollTo(0,0);
        setExpandedContent(null);
        setDynamicVideoUrl(null);
        setDynamicQuiz(null);
        stopAudio();
        setAudioBlob(null);

        const userId = currentUser?.id || 'guest';
        getArtifact(userId, lesson.id, 'text').then((text) => {
            if (text) {
                setExpandedContent(text);
                getArtifact(userId, lesson.id, 'video_url').then(url => {
                    if (url && extractYoutubeId(url)) {
                        setDynamicVideoUrl(url);
                    }
                });
            } else {
                setNeedsExpansion(true);
            }
        });

        setIsAudioLoading(true);
        getArtifact(userId, lesson.id, 'audio').then((blob) => {
            if (blob) {
                setAudioBlob(blob);
            }
            setIsAudioLoading(false);
        });

        setInfographicUrls([]);
        getArtifact(userId, lesson.id, 'infographic').then((urlOrUrls) => {
            if (urlOrUrls) {
                if (Array.isArray(urlOrUrls)) {
                    setInfographicUrls(urlOrUrls);
                } else if (typeof urlOrUrls === 'string') {
                    setInfographicUrls([urlOrUrls]);
                }
            }
        });
    }
    return () => {
        stopAudio();
        document.title = "Arckhé AI Academy";
    };
  }, [lessonId, lesson]);

  // ... (Audio effects and Scroll effects remain the same) ...
  useEffect(() => {
    if (audioBlob) {
        const url = URL.createObjectURL(audioBlob);
        if (!audioPlayerRef.current) {
            audioPlayerRef.current = new Audio();
        }
        audioPlayerRef.current.src = url;
        audioPlayerRef.current.playbackRate = playbackRate;
        if ('preservesPitch' in audioPlayerRef.current) {
            (audioPlayerRef.current as any).preservesPitch = true;
        }
        const player = audioPlayerRef.current;
        const handleEnded = () => setIsPlayingAudio(false);
        player.addEventListener('ended', handleEnded);
        return () => {
            player.removeEventListener('ended', handleEnded);
            player.pause();
        };
    }
  }, [audioBlob]);

  useEffect(() => {
      if (audioPlayerRef.current) {
          audioPlayerRef.current.playbackRate = playbackRate;
      }
  }, [playbackRate]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!module || !lesson) {
    return <div className="text-white p-10 text-center">Lição não encontrada. <Link to="/" className="underline text-cyber-primary">Voltar</Link></div>;
  }

  const handleQuizComplete = (score: number) => {
    markLessonAsComplete(lesson.id, score);
    setTimeout(() => {
        const nextButton = document.getElementById('next-lesson-portal');
        if (nextButton) {
            nextButton.scrollIntoView({ behavior: 'smooth' });
        }
    }, 500);
  };

  const handleManualComplete = () => {
      markLessonAsComplete(lesson.id, undefined);
  };

  const handleNextNavigation = (url: string) => {
      registerInteraction(lesson.id, 'next_lesson');
      navigate(url);
  };

  const renderPremiumContent = (content: string) => {
    const lines = content.split('\n');
    return lines.map((line, index) => {
        const cleanLine = line.trim();
        if (!cleanLine) return <div key={index} className="h-6" />;
        if (cleanLine.startsWith('HASH:') || cleanLine.startsWith('SOURCE:') || cleanLine.startsWith('FONTE:')) return null;

        if (cleanLine.startsWith('##')) {
            const titleText = cleanLine.replace(/^##\s*/, '').replace(/\*\*/g, '');
            return (
                <div key={index} className="mt-12 mb-6 border-l-4 border-cyber-primary pl-4 md:pl-6 animate-slide-up">
                    <h2 className="text-xl md:text-3xl font-bold text-white font-sans tracking-tight relative inline-block leading-tight">
                        {titleText}
                    </h2>
                </div>
            );
        }

        if (cleanLine.startsWith('-')) {
            const listText = cleanLine.replace(/^-\s*/, '').replace(/\*\*/g, '');
            return (
                <div key={index} className="flex items-start gap-3 md:gap-4 mb-4 pl-2 md:pl-6 group animate-slide-up" style={{ animationDelay: `${index * 30}ms` }}>
                    <div className="flex-shrink-0 mt-2">
                        <div className="w-1.5 h-1.5 rotate-45 bg-cyber-secondary shadow-[0_0_8px_rgba(217,70,239,0.8)] group-hover:scale-150 transition-transform"></div>
                    </div>
                    <p className="text-base md:text-lg text-slate-300 font-serif leading-relaxed md:leading-loose max-w-3xl">
                        {listText}
                    </p>
                </div>
            );
        }

        const paragraphText = cleanLine.replace(/\*\*/g, '');
        if (paragraphText.includes('[CONTEÚDO EXPANDIDO')) return null;

        return (
            <p key={index} className="text-base md:text-[1.1rem] text-slate-300 font-serif leading-7 md:leading-9 mb-6 md:mb-10 tracking-wide text-justify max-w-3xl animate-slide-up selection:bg-cyber-primary selection:text-black" style={{ animationDelay: `${index * 20}ms` }}>
                {paragraphText}
            </p>
        );
    });
  };

  const stopAudio = () => {
      if (audioPlayerRef.current) {
          audioPlayerRef.current.pause();
          audioPlayerRef.current.currentTime = 0;
      }
      setIsPlayingAudio(false);
  };

  const handleToggleAudio = async () => {
      if (isPlayingAudio) {
          audioPlayerRef.current?.pause();
          setIsPlayingAudio(false);
          return;
      }
      if (audioBlob && audioPlayerRef.current) {
          try {
            await audioPlayerRef.current.play();
            setIsPlayingAudio(true);
          } catch (e) {
              console.error("Playback failed", e);
          }
          return;
      }
      await handleGenerateAudio();
  };

  const handleGenerateAudio = async (overrideText?: string, autoPlay: boolean = true) => {
      setIsGeneratingAudio(true);
      try {
        if (!process.env.API_KEY) throw new Error("API Key não configurada");
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const contentToRead = overrideText || expandedContent || lesson.content;
        const userName = currentUser?.username || "Estudante";
        const userId = currentUser?.id || 'guest';
        
        const scriptPrompt = `
        Aja como uma Coach de Negócios e Tecnologia chamada Kore, extremamente experiente, empática e com oratória perfeita.
        
        **1. ANÁLISE DE GÊNERO DO USUÁRIO:**
        Nome do usuário: "${userName}".
        - Analise este nome.
        - Se for masculino (ex: João, Pedro), trate como "o aluno" e use adjetivos masculinos (ex: "preparado", "ansioso", "bem-vindo").
        - Se for feminino (ex: Maria, Ana), trate como "a aluna" e use adjetivos femininos (ex: "preparada", "ansiosa", "bem-vinda").
        - Se for ambíguo ou neutro, use linguagem neutra ou inclusiva, mas priorize a naturalidade.
        
        **2. TAREFA:**
        Transforme o conteúdo da aula abaixo em um ROTEIRO DE FALA (Script) para ser lido em voz alta.
        
        **3. REGRAS DE HUMANIZAÇÃO (CRÍTICO E MANDATÓRIO):**
        - O texto NÃO pode parecer lido por um robô. Deve ter fluidez de podcast.
        - Comece chamando o usuário pelo primeiro nome de forma calorosa.
        - Use pontuação estratégica (vírgulas, reticências...) para criar pausas naturais de respiração.
        - Explique siglas como se estivesse conversando (ex: fale "I.A." e não "ia", "C.R.M" e não "crm").
        - Se houver listas, não leia "ponto um", "ponto dois". Integre os tópicos na fala de forma fluida.
        - Termine com uma frase motivadora curta.
        - NUNCA FAÇA UM RESUMO EXECUTIVO RÁPIDO. Você deve sempre processar, roteirizar e manter o tamanho original. TODAS AS 800+ PALAVRAS TÊM QUE SER FALADAS!
        - **IMPORTANTE:** RETORNE APENAS O TEXTO BRUTO. SEM CABEÇALHOS, SEM MARKDOWN, SEM ASTERISCOS, SEM FORMATAÇÃO DE CÓDIGO E SEM NENHUMA FRASE DE INTRODUÇÃO COMO "Aqui está o roteiro".
        
        **Conteúdo da Aula:** "${lesson.title}: ${contentToRead}"`;

        const scriptResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: [{ parts: [{ text: scriptPrompt }] }]
        });

        let scriptText = scriptResponse.text;
        if (!scriptText) throw new Error("Falha ao gerar roteiro de áudio.");

        // Clean Markdown that might confuse TTS or cause text return.
        scriptText = scriptText.replace(/```[^\n]*\n?/g, '').replace(/```/g, ''); 
        scriptText = scriptText.replace(/\*\*/g, '').replace(/\*/g, '');
        scriptText = scriptText.trim();

        const chunks = chunkText(scriptText, 1500);
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
        const voiceBuffers: AudioBuffer[] = [];

        for (const chunk of chunks) {
            if (!chunk.trim()) continue;
            const chunkResponse = await ai.models.generateContent({
                model: "gemini-2.5-flash",
                contents: [{ parts: [{ text: chunk }] }],
                config: { 
                    // @ts-ignore
                    responseModalities: ["AUDIO"], 
                    speechConfig: { 
                        voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } 
                    } 
                },
            });

            const chunkBase64 = chunkResponse.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
            if (chunkBase64) {
                const chunkBuffer = await decodeAudioData(decode(chunkBase64), audioContext);
                voiceBuffers.push(chunkBuffer);
            }
        }

        if (voiceBuffers.length === 0) throw new Error("Nenhum áudio gerado.");

        const finalBuffer = concatenateAudioBuffers(voiceBuffers, audioContext);
        const blob = bufferToWav(finalBuffer);
        setAudioBlob(blob);
        await saveArtifact(userId, lesson.id, 'audio', blob);
        registerInteraction(lesson.id, 'audio');

        if (autoPlay) {
            setTimeout(() => {
                if (audioPlayerRef.current) {
                    audioPlayerRef.current.src = URL.createObjectURL(blob);
                    audioPlayerRef.current.play().catch(e => console.error(e));
                    setIsPlayingAudio(true);
                }
            }, 500);
        }

      } catch (error: any) { 
          console.error(error);
          if (error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("quota") || error?.message?.includes("429")) {
              alert("Limite de uso da API excedido (429). Aguarde alguns minutos e tente novamente.");
          } else {
              alert("Erro ao gerar o áudio. Verifique sua conexão."); 
          }
      } finally { 
          setIsGeneratingAudio(false); 
      }
  };

  const handleDownloadAudio = () => {
      if (audioBlob) {
          const url = URL.createObjectURL(audioBlob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `Aula_${lesson.id}.wav`;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
      }
  };

  const handleCycleSpeed = () => {
      const speeds = [0.75, 1.0, 1.25, 1.5, 2.0];
      const currentIndex = speeds.indexOf(playbackRate);
      const nextIndex = (currentIndex + 1) % speeds.length;
      setPlaybackRate(speeds[nextIndex]);
  };

  const handleExpandContent = async () => {
      setIsExpanding(true);
      setDynamicVideoUrl(null); 
      try {
        if (!process.env.API_KEY) throw new Error("API Key missing");
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const userName = currentUser?.username || "Estudante";

        const contentPrompt = `Você é um estrategista de negócios nível C-Level e especialista em IA.
            Reescreva a aula abaixo como um **Artigo Técnico-Executivo** profundo e maduro.
            
            **Personalização:**
            O nome do leitor é "${userName}". Use para personalizar sutilmente, se couber.
            
            **Conteúdo Base da Aula:**
            Título: ${lesson.title}
            Conteúdo Original: ${lesson.content}
            
            **Estrutura Obrigatória:**
            1. **Introdução**: Contextualize a importância estratégica do tema. (Use H2: ## Introdução)
            2. **Capítulos**: Desenvolva o conteúdo em capítulos numerados. (Use H2: ## Capítulo X: [Nome do Capítulo])
            3. **Analogias de Negócios**: Onde houver conceitos técnicos, adicione parágrafos de analogia iniciando com "**Analogia de Negócios:**".
            4. **Implicações Estratégicas/Valor de Negócio**: Destaque o valor e a aplicação do conceito no mundo corporativo.
            5. **Conclusão**: Fechamento executivo focado em ação e visão de futuro. (Use H2: ## Conclusão)
            
            **Regras de Formatação e Tom (CRÍTICAS):**
            - O texto gerado DEVE COMEÇAR DIRETAMENTE no artigo final (ex: "## Introdução").
            - PROIBIDO usar frases como "Como um professor...", "Aqui está o artigo..." ou notas de rodapé de IA. NÃO GERE METATEXTO.
            - O título principal H1 (#) NÃO deve constar no texto gerado, apenas subtítulos H2 (##) para seções e H3 (###) para subseções.
            - Texto denso (800+ palavras), tom de masterclass executiva (Arkhé AI Enterprise), sem condescendência ou explicações infantis.
            - Use listas com bullet points (-) para desdobrar tópicos, causas, soluções ou passos.
        `;

        const textResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: contentPrompt,
        });
        
        let text = textResponse.text || "";
        text = text.replace(/^```markdown\s*/, '').replace(/^```\s*/, '').replace(/```$/, '');
        setExpandedContent(text);
        
        const userId = currentUser?.id || 'guest';
        await saveArtifact(userId, lesson.id, 'text', text);
        registerInteraction(lesson.id, 'expand');

        // Dispara a geração de áudio do texto novo em background e suprime erros de não ter apiKey ou falha
        handleGenerateAudio(text, false).catch(e => console.error("Falha ao gerar background áudio", e));

        const searchPrompt = `
        Atue como um Curador de Conteúdo Educacional Sênior.
        
        **Objetivo:** Encontrar o MELHOR vídeo do YouTube para complementar o artigo que acabei de gerar.
        
        **Contexto do Artigo Gerado (Resumo):**
        "${text.substring(0, 1500).replace(/\n/g, ' ')}"
        
        **Metadados da Lição:**
        Título: "${lesson.title}"
        Módulo: "${module.title}"

        **Sua Missão de Busca (Ordem de Prioridade Rigorosa):**
        1. **PRIORIDADE MÁXIMA:** Encontre um vídeo que corresponda EXATAMENTE aos conceitos técnicos específicos detalhados no "Contexto do Artigo Gerado".
        2. **PRIORIDADE MÉDIA:** Se não houver match exato do texto, busque pelo "Título da Lição".
        3. **FALLBACK:** Se ainda falhar, use palavras-chave do Artigo + Título + Módulo para uma busca ampla.

        **Filtros de Qualidade:**
        - Apenas YouTube.
        - Conteúdo educativo, palestras ou tutoriais técnicos.
        - Preferência PT-BR, mas aceite Inglês se for muito superior.
        - Evite vídeos curtos de entretenimento (Shorts).
        `;

        const searchResponse = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: searchPrompt,
            config: { tools: [{ googleSearch: {} }] }
        });

        let foundUrl = "";
        
        if (searchResponse.candidates?.[0]?.groundingMetadata?.groundingChunks) {
             const chunks = searchResponse.candidates[0].groundingMetadata.groundingChunks;
             const ytChunk = chunks.find(c => 
                (c.web?.uri?.includes('youtube.com/watch') || c.web?.uri?.includes('youtu.be/'))
             );
             if (ytChunk && ytChunk.web?.uri) {
                 foundUrl = ytChunk.web.uri;
             }
        }

        if (!foundUrl && searchResponse.text) {
            const urlMatch = searchResponse.text.match(/https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+/);
            const shortUrlMatch = searchResponse.text.match(/https?:\/\/youtu\.be\/[\w-]+/);
            if (urlMatch) foundUrl = urlMatch[0];
            else if (shortUrlMatch) foundUrl = shortUrlMatch[0];
        }

        if (foundUrl && extractYoutubeId(foundUrl)) {
            setDynamicVideoUrl(foundUrl);
            await saveArtifact(userId, lesson.id, 'video_url', foundUrl);
        } else {
            const staticId = extractYoutubeId(lesson.videoUrl);
            if (staticId) setDynamicVideoUrl(lesson.videoUrl);
        }

      } catch (error: any) {
          console.error(error);
          setDynamicVideoUrl(null);
          if (error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("quota") || error?.message?.includes("429")) {
              alert("Limite de uso da API excedido (429). Aguarde alguns minutos e tente novamente.");
          } else {
              alert("Conteúdo gerado com alerta: " + error.message);
          }
      } finally {
          setIsExpanding(false);
      }
  };

  useEffect(() => {
    if (needsExpansion && !isExpanding && !expandedContent) {
        handleExpandContent();
        setNeedsExpansion(false);
    }
  }, [needsExpansion, isExpanding, expandedContent]);

  const handleGenerateInfographic = async () => {
    const isRegeneration = infographicUrls.length > 0;
    setIsGeneratingInfographic(true);
    try {
        if (!process.env.API_KEY) throw new Error("API Key necessária");
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const sourceText = expandedContent || lesson.content;
        
        const textResponse = await ai.models.generateContent({
             model: 'gemini-2.5-flash',
             contents: `Você é um diretor de arte criativo. Preciso gerar uma sequência de prompts de imagem para criar infográficos coerentes para a lição: "${lesson.title}".\n\nA aula é frequentemente estruturada com introdução, capítulos/desdobramentos e conclusão.\nGere uma lista de 3 a 5 descrições visuais altamente detalhadas baseadas única e exclusivamente no conteúdo fornecido abaixo.\nCada item dessa lista servirá de instrução exata para o modelo de geração de imagens gerar o respectivo infográfico passo a passo acompanhando o ritmo da aula.\n\nRegras OBRIGATÓRIAS:\n1. Mantenha coerência impecável com o assunto, percorrendo logicamente a introdução, os capítulos centrais e a conclusão.\n2. Cada texto deve ser puramente descritivo sobre o que deve ser desenhado (elementos visuais, metáforas, símbolos, pessoas, fluxos).\n3. NÃO use jargões de apresentação como "slide", "infográfico", "a imagem deve mostrar" ou "texto diz".\n4. RETORNE ESTREITAMENTE UM ARRAY JSON contendo as strings e mais NADA.\n\nConteúdo Completo da Aula:\n${sourceText}`,
             config: {
                 responseMimeType: "application/json",
                 responseSchema: {
                     type: Type.ARRAY,
                     items: { type: Type.STRING }
                 }
             }
        });
        
        let prompts = JSON.parse(textResponse.text || "[]");
        if (!prompts || prompts.length === 0) {
             prompts = [`Resumo ilustrativo sobre: ${lesson.title}`];
        }

        const urls: string[] = [];
        
        for (let i = 0; i < prompts.length; i++) {
             const promptText = prompts[i];
             try {
                const response = await ai.models.generateContent({
                    model: 'gemini-2.5-flash',
                    contents: {
                        parts: [
                            { text: `Ilustração técnica simplificada no estilo Cartoon/Quadrinhos (HQ). IMPORTANTE: todos os textos e letreiros contidos na imagem devem estar ESTRITA E EXCLUSIVAMENTE em Português Brasileiro (PT-BR). NUNCA insira informações técnicas textuais como "slide", "formato" ou numerações na imagem. \n\nO que a imagem deve ilustrar e explicar:\n${promptText}` }
                        ]
                    },
                    config: {
                        // @ts-ignore - type bypass for runtime
                        imageConfig: {
                            aspectRatio: "16:9"
                        }
                    }
                });
                
                let gotImage = false;
                for (const part of response.candidates?.[0]?.content?.parts || []) {
                    if (part.inlineData) {
                        const base64Str = part.inlineData.data;
                        const url = `data:${part.inlineData.mimeType || 'image/png'};base64,${base64Str}`;
                        urls.push(url);
                        gotImage = true;
                        break;
                    }
                }
                if (!gotImage) throw new Error("No image data returned from model");
             } catch (e: any) {
                 console.error(`Falha ao gerar a imagem ${i+1}:`, e);
                 // Fallback to placeholder to ensure the app doesn't break
                 urls.push(`https://picsum.photos/seed/infographic_${lesson.id}_${i}/1920/1080?blur=2`);
             }
        }

        if (urls.length === 0) throw new Error("Nenhuma imagem retornada");
        
        setInfographicUrls(urls);
        
        const userId = currentUser?.id || 'guest';
        await saveArtifact(userId, lesson.id, 'infographic', urls);
        registerInteraction(lesson.id, isRegeneration ? 'regenerate_infographic' : 'infographic', isRegeneration ? `regen_${Date.now()}` : undefined);

    } catch (error: any) {
        console.error(error);
        if (error.message === "QUOTA_EXCEEDED" || error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("quota") || error?.message?.includes("429")) {
            alert("Limite de uso da API excedido (429). Por favor, tente novamente mais tarde.");
        } else {
            alert("Erro ao gerar o infográfico.");
        }
    } finally {
        setIsGeneratingInfographic(false);
    }
  };

  const handleGenerateInfiniteQuiz = async () => {
      setIsGeneratingQuiz(true); setDynamicQuiz(null);
      try {
         if (!process.env.API_KEY) throw new Error("API Key necessária");
         const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
         const sourceText = expandedContent || lesson.content;
         const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Baseado em: "${lesson.title}" - ${sourceText}, Crie 5 perguntas de múltipla escolha DESAFIADORAS. Formato JSON estrito.`,
            config: { responseMimeType: "application/json", responseSchema: { type: Type.ARRAY, items: { type: Type.OBJECT, properties: { question: { type: Type.STRING }, options: { type: Type.ARRAY, items: { type: Type.STRING } }, correctAnswerIndex: { type: Type.INTEGER } }, required: ["question", "options", "correctAnswerIndex"] } } }
         });
         const quizText = response.text; 
         if (quizText) {
             setDynamicQuiz(JSON.parse(quizText));
             registerInteraction(lesson.id, 'ai_quiz');
         }
      } catch (error: any) {
          console.error(error);
          if (error?.status === "RESOURCE_EXHAUSTED" || error?.message?.includes("quota") || error?.message?.includes("429")) {
              alert("Limite de uso da API excedido (429). Por favor, tente novamente mais tarde.");
          } else {
              alert("Erro ao gerar quiz.");
          }
      } finally { setIsGeneratingQuiz(false); }
  };

  const handleGeneratePracticalChallenge = async () => {
      setIsGeneratingChallenge(true); setPracticalChallenge(null); setChallengeFeedback(null); setChallengeAnswer("");
      try {
         if (!process.env.API_KEY) throw new Error("API Key necessária");
         const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
         const sourceText = expandedContent || lesson.content;
         const response = await ai.models.generateContent({
             model: 'gemini-2.5-flash',
             contents: `Baseado no conteúdo da aula: "${lesson.title}" - ${sourceText}.\n\nCrie um desafio prático de avaliação aberta (estudo de caso ou simulação) para o usuário resolver.\nRetorne um JSON contendo 'scenario' (o contexto do problema prático) e 'question' (a pergunta ou tarefa que o usuário deve descrever como resolver). Formato: { "scenario": string, "question": string }`,
             config: { responseMimeType: "application/json", responseSchema: { type: Type.OBJECT, properties: { scenario: { type: Type.STRING }, question: { type: Type.STRING } }, required: ["scenario", "question"] } }
         });
         if (response.text) {
             setPracticalChallenge(JSON.parse(response.text));
             registerInteraction(lesson.id, 'ai_quiz'); // can reuse metric or create 'practical_challenge'
         }
      } catch (e) {
         alert("Erro ao gerar desafio prático.");
      } finally { setIsGeneratingChallenge(false); }
  };

  const handleEvaluateChallenge = async () => {
      if (!challengeAnswer.trim() || !practicalChallenge) return;
      setIsEvaluatingChallenge(true); setChallengeFeedback(null);
      try {
         if (!process.env.API_KEY) throw new Error("API Key necessária");
         const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
         const response = await ai.models.generateContent({
             model: 'gemini-2.5-flash',
             contents: `O usuário respondeu a um desafio prático de estudo de caso.\nCenário: ${practicalChallenge.scenario}\nPergunta: ${practicalChallenge.question}\nResposta do usuário: ${challengeAnswer}\n\nAvalie a resposta de forma profissional, didática e motivadora. Pontue os acertos, sugira melhorias com base nas melhores práticas do conteúdo da aula, e diga qual nível de domínio (Básico, Intermediário, Avançado) a resposta demonstra.`
         });
         setChallengeFeedback(response.text || "Avaliação concluída.");
         registerInteraction(lesson.id, 'next_lesson'); // just to give extra XP
      } catch (e) {
         alert("Erro ao avaliar o desafio.");
      } finally { setIsEvaluatingChallenge(false); }
  };

  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    try {
        if (!process.env.API_KEY) throw new Error("API_KEY missing");
        if (!(window as any).jspdf) throw new Error("jsPDF missing");
        
        let contentToPrint = expandedContent || lesson.content;
        const heroImage = getLessonImage(lesson.title, moduleId || '');
        let heroImageBase64 = "";
        try {
            heroImageBase64 = await imageUrlToBase64(heroImage);
        } catch (e) {
            console.warn("Image load failed", e);
        }

        const { jsPDF } = (window as any).jspdf;
        const doc = new jsPDF('p', 'mm', 'a4');
        
        const PAGE_HEIGHT = 297;
        const CONTENT_WIDTH = 170;
        const MARGIN_LEFT = 20;
        const MARGIN_BOTTOM = 22;
        const LINE_HEIGHT_BODY = 7;
        const LINE_HEIGHT_HEADING = 12;

        const COVER_BG_COLOR = [45, 75, 170]; // Royal blue for cover
        const PAGE_BG_COLOR = [255, 255, 255]; // White for content pages
        const TEXT_COLOR = [51, 65, 85]; // Slate 700 for text
        const HEADING_COLOR = [30, 58, 138]; // Blue 900 for headings
        const DIM_COLOR = [100, 116, 139]; // Slate 500 for footer/meta

        let cursorY = 20;

        const setupPage = () => {
            doc.setFillColor(...PAGE_BG_COLOR);
            doc.rect(0, 0, 210, 297, 'F');
            cursorY = 25;
        };

        const checkPageBreak = (heightNeeded: number) => {
            if (cursorY + heightNeeded > PAGE_HEIGHT - MARGIN_BOTTOM) {
                doc.addPage();
                setupPage();
            }
        };

        // --- PAGE 1: COVER PAGE ---
        doc.setFillColor(...COVER_BG_COLOR);
        doc.rect(0, 0, 210, 297, 'F');
        
        const cleanTitle = lesson.title.includes(":") ? lesson.title.split(":")[1].trim() : lesson.title;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(28);
        doc.setTextColor(255, 255, 255);
        
        const titleLines = doc.splitTextToSize(cleanTitle, CONTENT_WIDTH - 20);
        const titleHeight = titleLines.length * 12;
        const startYTitle = 130 - (titleHeight / 2);
        
        doc.text(titleLines, 105, startYTitle, { align: "center" });
        
        doc.setDrawColor(255, 255, 255);
        doc.setLineWidth(0.5);
        doc.line(MARGIN_LEFT, startYTitle + titleHeight + 10, MARGIN_LEFT + CONTENT_WIDTH, startYTitle + titleHeight + 10);
        
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        const moduleTitleRaw = module?.title.toUpperCase() || "";
        const cleanModuleTitle = moduleTitleRaw.replace(/^(MÓDULO\s*\d+\s*[:\-]\s*)/, "");
        const subtitleText = doc.splitTextToSize(cleanModuleTitle, CONTENT_WIDTH - 10);
        doc.text(subtitleText, 105, startYTitle + titleHeight + 25, { align: "center" });

        // --- SECOND PAGE ONWARD: CONTENT ---
        doc.addPage();
        setupPage();

        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.setTextColor(...TEXT_COLOR);

        const cleanContent = contentToPrint.replace(/\*\*/g, '');
        const lines = cleanContent.split('\n');

        lines.forEach((line: string) => {
            const trimmed = line.trim();
            if (!trimmed) { cursorY += 5; return; }
            if (trimmed.startsWith('HASH:') || trimmed.startsWith('SOURCE:')) return;

            if (trimmed.startsWith('##')) {
                const isH3 = trimmed.startsWith('###');
                const text = trimmed.replace(/^#+\s*/, '');
                doc.setFont("helvetica", "bold");
                doc.setFontSize(isH3 ? 14 : 18);
                doc.setTextColor(...HEADING_COLOR);
                const splitText = doc.splitTextToSize(text, CONTENT_WIDTH);
                const blockHeight = splitText.length * LINE_HEIGHT_HEADING;
                checkPageBreak(blockHeight + 15);
                cursorY += 8; // Extra space before heading
                doc.text(splitText, MARGIN_LEFT, cursorY);
                cursorY += blockHeight + 2;
                doc.setFont("helvetica", "normal");
                doc.setFontSize(12);
                doc.setTextColor(...TEXT_COLOR);
            } else if (trimmed.startsWith('-')) {
                const text = "•  " + trimmed.replace(/^-\s*/, '');
                const splitText = doc.splitTextToSize(text, CONTENT_WIDTH - 5);
                const blockHeight = splitText.length * LINE_HEIGHT_BODY;
                checkPageBreak(blockHeight);
                doc.text(splitText, MARGIN_LEFT + 5, cursorY);
                cursorY += blockHeight + 1;
            } else {
                const splitText = doc.splitTextToSize(trimmed, CONTENT_WIDTH);
                const blockHeight = splitText.length * LINE_HEIGHT_BODY;
                checkPageBreak(blockHeight);
                doc.text(splitText, MARGIN_LEFT, cursorY);
                cursorY += blockHeight + 2;
            }
        });
        
        // --- ADD INFOGRAPHICS IF PRESENT ---
        if (infographicUrls && infographicUrls.length > 0) {
            for (let idx = 0; idx < infographicUrls.length; idx++) {
                const url = infographicUrls[idx];
                doc.addPage();
                doc.setFillColor(...COVER_BG_COLOR);
                doc.rect(0, 0, 210, 297, 'F');
                
                doc.setFont("helvetica", "bold");
                doc.setFontSize(22);
                doc.setTextColor(255, 255, 255);
                doc.text(`Infográfico da Aula - Parte ${idx + 1}`, 105, 30, { align: "center" });
                
                try {
                    const formatMatch = url.match(/data:image\/([a-zA-Z]+);base64,/);
                    const format = formatMatch ? formatMatch[1].toUpperCase() : 'PNG';
                    
                    const imgWidth = 190;
                    const imgHeight = imgWidth * (9/16);
                    doc.addImage(url, format, 10, 80, imgWidth, imgHeight);
                } catch (e) {
                    console.warn(`Failed to add infographic ${idx + 1} to PDF`, e);
                }
            }
        }

        const pageCount = (doc as any).internal.getNumberOfPages();
        for(let i = 2; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFont("helvetica", "normal");
            doc.setFontSize(10);
            doc.setTextColor(...DIM_COLOR);
            doc.text(`${i}`, 105, 285, { align: 'center' });
        }

        doc.save(`Aula_${lesson.id}.pdf`);
        registerInteraction(lesson.id, 'pdf');
    } catch (error) { 
        console.error(error);
        alert("Erro ao gerar PDF."); 
    } finally { 
        setIsGeneratingPdf(false); 
    }
  };

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text font-sans selection:bg-cyber-primary selection:text-black pb-32">
        <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-slate-900/50 backdrop-blur-sm">
            <div 
                className="h-full bg-gradient-to-r from-cyber-primary to-cyber-secondary shadow-[0_0_10px_rgba(6,182,212,0.7)]"
                style={{ width: `${readingProgress}%` }}
            ></div>
        </div>

        <div className="relative h-[35vh] md:h-[55vh] w-full overflow-hidden border-b border-white/10 group">
            <div className="absolute inset-0">
                <img src={getLessonImage(lesson.title, moduleId || '')} alt={lesson.title} className="w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-bg via-cyber-bg/80 to-transparent"></div>
                <div className="absolute inset-0 bg-cyber-grid opacity-10 mix-blend-overlay"></div>
            </div>

            <div className="absolute top-4 md:top-6 left-4 md:left-6 z-30">
                <Link to={`/course/${courseId}/module/${moduleId}`} className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-[10px] md:text-xs font-mono font-bold text-white hover:bg-white hover:text-black transition-all duration-300">
                    <ArrowLeft className="w-3 h-3" /> VOLTAR
                </Link>
            </div>

            <div className="absolute bottom-0 left-0 w-full p-4 md:p-12 z-20">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-wrap items-center gap-3 mb-2 md:mb-4 animate-slide-up">
                        <span className="px-2 py-0.5 md:px-3 md:py-1 bg-cyber-primary text-black text-[9px] md:text-[10px] font-mono font-bold uppercase tracking-widest rounded-sm shadow-[0_0_10px_rgba(6,182,212,0.4)]">
                            AULA {lessonIndex + 1}
                        </span>
                    </div>
                    <h1 className="text-2xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-2 md:mb-6 font-sans drop-shadow-lg leading-tight max-w-4xl">
                        {lesson.title.includes(':') ? lesson.title.split(':')[1].trim() : lesson.title}
                    </h1>
                </div>
            </div>
        </div>

        <div className="max-w-4xl mx-auto -mt-6 md:-mt-8 relative z-30 px-2 md:px-4">
            <div className="bg-cyber-panel/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                
                <div className="border-b border-white/5 p-3 md:p-4 flex flex-col md:flex-row gap-3 justify-between items-center bg-black/40">
                    
                    {/* Toolbar Responsiva - Scroll Horizontal em Mobile */}
                    <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
                        {isExpanding ? (
                            <div className="flex items-center gap-2 px-4 py-2 bg-cyber-primary/10 border border-cyber-primary/30 rounded-lg text-cyber-primary font-mono text-[10px] md:text-xs font-bold animate-pulse">
                                <BrainCog className="w-4 h-4 animate-spin" /> GERANDO CONTEÚDO EXPANDIDO...
                            </div>
                        ) : !!expandedContent ? (
                            <>
                                <div className="flex items-center gap-2 p-1 bg-white/5 rounded-lg border border-white/5 shrink-0">
                                    <button 
                                        onClick={handleToggleAudio}
                                        disabled={isGeneratingAudio || isAudioLoading}
                                        className={`px-3 md:px-4 py-2 rounded-md font-mono text-[10px] md:text-xs font-bold uppercase flex items-center gap-2 transition-all whitespace-nowrap ${isPlayingAudio ? 'bg-cyber-secondary text-black shadow-[0_0_15px_rgba(217,70,239,0.5)]' : 'text-white hover:bg-white/10'}`}
                                    >
                                        {isGeneratingAudio ? <RefreshCw className="w-3 h-3 animate-spin"/> : <Headphones className="w-3 h-3"/>}
                                        {isPlayingAudio ? 'PAUSE' : 'OUVIR'}
                                    </button>
                                    
                                    {(audioBlob || isPlayingAudio) && (
                                        <button 
                                            onClick={handleCycleSpeed}
                                            className="px-2 md:px-3 py-2 rounded-md text-white/70 font-mono text-[10px] md:text-xs hover:bg-white/10 w-10 md:w-12 text-center shrink-0"
                                        >
                                            {playbackRate}x
                                        </button>
                                    )}
                                    
                                    {audioBlob && (
                                        <button onClick={handleDownloadAudio} className="p-2 text-white/50 hover:text-white transition-colors shrink-0">
                                            <Download className="w-3 h-3" />
                                        </button>
                                    )}
                                </div>

                                <div className="flex gap-2 shrink-0">
                                    {isZenMode && (
                                        <button onClick={togglePomodoro} className={`px-3 md:px-4 py-2 border rounded-lg font-mono text-[10px] md:text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${isPomodoroActive ? 'bg-red-500 text-white border-red-500 animate-pulse' : 'border-white/10 text-white hover:bg-white/5'}`}>
                                            ⏱ {formatPomodoroTime()} {isPomodoroActive ? 'FOCO' : 'INICIAR POMODORO'}
                                        </button>
                                    )}
                                    <button onClick={() => setIsZenMode(!isZenMode)} className={`px-3 md:px-4 py-2 border rounded-lg font-mono text-[10px] md:text-xs font-bold transition-all flex items-center gap-2 whitespace-nowrap ${isZenMode ? 'bg-white text-black border-white' : 'border-white/10 text-white hover:bg-white/5'}`}>
                                        {isZenMode ? <Minimize className="w-3 h-3" /> : <Maximize className="w-3 h-3" />} {isZenMode ? 'SAIR DO MODO ZEN' : 'MODO ZEN'}
                                    </button>

                                    <button onClick={handleDownloadPdf} className="px-3 md:px-4 py-2 border border-white/10 rounded-lg text-white font-mono text-[10px] md:text-xs font-bold hover:bg-white/5 transition-all flex items-center gap-2 whitespace-nowrap">
                                        {isGeneratingPdf ? <RefreshCw className="w-3 h-3 animate-spin"/> : <Download className="w-3 h-3" />} PDF
                                    </button>

                                    <button onClick={handleGenerateInfographic} disabled={isGeneratingInfographic} className="px-3 md:px-4 py-2 border border-cyber-accent/50 rounded-lg text-cyber-accent font-mono text-[10px] md:text-xs font-bold hover:bg-cyber-accent/10 transition-all flex items-center gap-2 whitespace-nowrap">
                                        {isGeneratingInfographic ? <RefreshCw className="w-3 h-3 animate-spin"/> : <Eye className="w-3 h-3" />} {infographicUrls.length > 0 ? 'REGERAR INFOGRÁFICOS' : 'GERAR INFOGRÁFICO'}
                                    </button>
                                    
                                    {/* Renderização Condicional Estrita e Segura */}
                                    {showVideoButton && dynamicVideoUrl && (
                                        <button onClick={() => {
                                            registerInteraction(lesson.id, 'video_curado');
                                            window.open(dynamicVideoUrl, '_blank');
                                        }} className="px-3 md:px-4 py-2 bg-red-600 text-white rounded-lg font-mono text-[10px] md:text-xs font-bold hover:bg-red-500 transition-all flex items-center gap-2 shadow-lg whitespace-nowrap animate-slide-up" title="Verificado por IA">
                                            <Youtube className="w-3 h-3" /> VÍDEO CURADO
                                        </button>
                                    )}
                                </div>
                            </>
                        ) : null}
                    </div>
                </div>

                <div className="p-4 md:p-12">
                    <div className="prose-invert max-w-3xl mx-auto">
                        <div className="mb-8 md:mb-10 p-4 md:p-6 bg-cyber-primary/5 border-l-2 border-cyber-primary rounded-r-lg">
                            <p className="text-slate-300 font-serif italic text-base md:text-lg">
                                "Esta unidade explora os fundamentos de <span className="text-white font-semibold">{lesson.title.includes(':') ? lesson.title.split(':')[1].trim() : lesson.title}</span>, conectando teoria à prática de mercado."
                            </p>
                        </div>

                        {isExpanding ? (
                            <div className="space-y-6 animate-pulse">
                                <div className="h-6 bg-white/10 rounded w-3/4"></div>
                                <div className="h-4 bg-white/10 rounded w-full"></div>
                                <div className="h-4 bg-white/10 rounded w-full"></div>
                                <div className="h-4 bg-white/10 rounded w-5/6"></div>
                                <div className="h-6 bg-white/10 rounded w-1/2 mt-8"></div>
                                <div className="h-4 bg-white/10 rounded w-full"></div>
                                <div className="h-4 bg-white/10 rounded w-4/5"></div>
                                <div className="flex items-center justify-center py-12">
                                     <div className="flex flex-col items-center gap-4 text-cyber-primary font-mono select-none">
                                         <BrainCog className="w-12 h-12 animate-spin opacity-50" />
                                         <span className="text-sm tracking-widest opacity-70">SINTETIZANDO CONHECIMENTO...</span>
                                     </div>
                                </div>
                            </div>
                        ) : (
                            renderPremiumContent(expandedContent || lesson.content)
                        )}

                        {infographicUrls.length > 0 && (
                            <div className="mt-12 mb-8 animate-fade-in">
                                <h3 className="text-xl font-bold text-cyber-accent mb-4 font-sans border-b border-cyber-accent/20 pb-2">Infográficos Resumo</h3>
                                <div className="grid grid-cols-1 gap-6">
                                    {infographicUrls.map((url, idx) => (
                                        <div key={idx} className="border-4 border-black/40 rounded-xl overflow-hidden shadow-[0_0_20px_rgba(217,70,239,0.3)] mx-auto w-full md:w-3/4">
                                            <img 
                                                src={url} 
                                                alt={`Infográfico da aula ${idx + 1}`} 
                                                className="w-full h-auto aspect-video object-cover cursor-pointer hover:scale-[1.02] transition-transform duration-500" 
                                                onClick={() => window.open(url, '_blank')}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    
                    {!isCompleted && (
                        <div className="mt-12 md:mt-16 flex justify-center">
                            <button 
                                onClick={handleManualComplete}
                                className="text-slate-500 hover:text-cyber-primary text-[10px] md:text-xs font-mono transition-colors flex items-center gap-2 opacity-50 hover:opacity-100"
                            >
                                <CheckCircle2 className="w-3 h-3" /> MARCAR COMO LIDO (SKIP QUIZ)
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 md:mt-12 px-4">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white font-sans">Validação</h2>
                <div className="flex items-center gap-4">
                    <button 
                        onClick={handleGeneratePracticalChallenge}
                        disabled={isGeneratingChallenge}
                        className="text-emerald-400 hover:text-white text-[10px] md:text-xs font-mono font-bold flex items-center gap-2 transition-colors"
                    >
                        {isGeneratingChallenge ? <RefreshCw className="w-3 h-3 animate-spin"/> : <Sparkles className="w-3 h-3"/>}
                        GERAR DESAFIO PRÁTICO
                    </button>
                    {!dynamicQuiz && (
                        <button 
                            onClick={handleGenerateInfiniteQuiz}
                            disabled={isGeneratingQuiz}
                            className="text-cyber-primary hover:text-white text-[10px] md:text-xs font-mono font-bold flex items-center gap-2 transition-colors"
                        >
                            {isGeneratingQuiz ? <RefreshCw className="w-3 h-3 animate-spin"/> : <Sparkles className="w-3 h-3"/>}
                            GERAR NOVO QUIZ
                        </button>
                    )}
                </div>
            </div>

            {practicalChallenge && (
                <div className="mb-12 bg-slate-900 border border-emerald-500/30 rounded-2xl p-6 md:p-8 animate-fade-in shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                    <h3 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                        <Trophy className="w-5 h-5" /> Estudo de Caso Prático
                    </h3>
                    <div className="text-slate-300 text-sm mb-6 bg-slate-950 p-4 rounded-lg border border-white/5">
                        <p className="mb-3"><strong>Cenário:</strong> {practicalChallenge.scenario}</p>
                        <p><strong>Tarefa:</strong> {practicalChallenge.question}</p>
                    </div>
                    
                    {!challengeFeedback ? (
                        <div className="flex flex-col gap-4">
                            <textarea
                                value={challengeAnswer}
                                onChange={(e) => setChallengeAnswer(e.target.value)}
                                placeholder="Descreva sua solução ou resposta aqui..."
                                className="w-full bg-slate-950 border border-white/10 rounded-xl p-4 text-slate-200 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all min-h-[150px] resize-y"
                            />
                            <button
                                onClick={handleEvaluateChallenge}
                                disabled={isEvaluatingChallenge || !challengeAnswer.trim()}
                                className="self-end px-6 py-3 bg-emerald-500 text-black font-bold rounded-xl hover:bg-emerald-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {isEvaluatingChallenge ? <RefreshCw className="w-5 h-5 animate-spin"/> : <BotMessageSquare className="w-5 h-5" />}
                                AVALIAR RESPOSTA
                            </button>
                        </div>
                    ) : (
                        <div className="bg-emerald-950/30 border border-emerald-500/20 p-6 rounded-xl animate-scale-in">
                            <h4 className="text-emerald-400 font-bold mb-3">Feedback do AI Tutor</h4>
                            <div className="prose-invert text-slate-300 text-sm whitespace-pre-wrap leading-relaxed">
                                {challengeFeedback}
                            </div>
                            <button
                                onClick={() => { setPracticalChallenge(null); setChallengeFeedback(null); setChallengeAnswer(""); }}
                                className="mt-6 text-sm text-emerald-500 hover:text-emerald-400 font-bold underline"
                            >
                                Tentar outro desafio
                            </button>
                        </div>
                    )}
                </div>
            )}

            {dynamicQuiz ? (
                <Quiz key={JSON.stringify(dynamicQuiz)} quizData={dynamicQuiz} onComplete={handleQuizComplete} isCompleted={false} lessonId={lesson.id} />
            ) : (
                <Quiz quizData={lesson.quiz} onComplete={handleQuizComplete} isCompleted={isCompleted} lessonId={lesson.id} />
            )}
        </div>

        {/* Portal de Navegação Inteligente (Próxima Lição ou Próximo Módulo) */}
        <div id="next-lesson-portal" className={`max-w-4xl mx-auto mt-8 px-4 transition-all duration-700 ${isCompleted ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4 pointer-events-none'}`}>
            {nextLesson ? (
                // Cenário 1: Próxima Lição no mesmo módulo
                <div 
                    onClick={() => handleNextNavigation(`/course/${courseId}/module/${moduleId}/lesson/${nextLesson.id}`)}
                    className="group cursor-pointer relative overflow-hidden rounded-xl border border-white/10 bg-slate-900 hover:border-cyber-primary/50 transition-all p-6 flex items-center justify-between"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyber-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative z-10">
                        <div className="text-xs font-mono text-cyber-primary mb-1">PRÓXIMA AULA</div>
                        <div className="text-lg md:text-xl font-bold text-white group-hover:translate-x-1 transition-transform line-clamp-1">
                            {nextLesson.title.includes(':') ? nextLesson.title.split(':')[1].trim() : nextLesson.title}
                        </div>
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-cyber-primary group-hover:text-black transition-all shrink-0">
                        <ChevronRight className="w-5 h-5" />
                    </div>
                </div>
            ) : nextModule ? (
                // Cenário 2: Próximo Módulo (Fim do módulo atual)
                <div 
                    onClick={() => handleNextNavigation(`/course/${courseId}/module/${nextModule.id}`)}
                    className="group cursor-pointer relative overflow-hidden rounded-xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-slate-900 hover:border-yellow-500/60 transition-all p-6 flex items-center justify-between shadow-lg"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className="relative z-10">
                        <div className="text-xs font-mono text-yellow-400 mb-1 flex items-center gap-2">
                            <Trophy className="w-3 h-3" /> MÓDULO CONCLUÍDO
                        </div>
                        <div className="text-lg md:text-xl font-bold text-white group-hover:translate-x-1 transition-transform">
                            Iniciar Módulo: {nextModule.title}
                        </div>
                    </div>
                    
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center group-hover:bg-yellow-500 group-hover:text-black transition-all shrink-0 text-yellow-400">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </div>
            ) : (
                // Cenário 3: Fim do Curso
                <div className="p-6 text-center bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-2">Parabéns! Você completou este módulo.</h3>
                    <Link to={`/course/${courseId}`} className="inline-flex items-center gap-2 text-cyber-primary hover:text-white transition-colors">
                        Voltar ao Dashboard <ArrowLeft className="w-4 h-4" />
                    </Link>
                </div>
            )}
        </div>

        <button 
            onClick={() => { setIsTutorOpen(true); }}
            className="fixed bottom-6 right-6 w-12 h-12 bg-cyber-primary text-black rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-110 transition-transform z-50"
            title="Tutor IA"
        >
            <BotMessageSquare className="w-6 h-6" />
        </button>

        <AITutor isOpen={isTutorOpen} onClose={() => setIsTutorOpen(false)} lessonTitle={lesson.title} lessonContent={expandedContent || lesson.content} lessonId={lesson.id} />
    </div>
  );
};

export default LessonView;
