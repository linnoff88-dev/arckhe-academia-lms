
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { BrainCircuit, ArrowRight } from '../components/icons';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const success = login(email, password);
    if (success) {
      navigate('/');
    } else {
      setError('Credenciais inválidas. Tente novamente.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-140px)] relative overflow-hidden">
      {/* Background FX */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[120px] animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[120px] animate-blob animation-delay-2000"></div>

      <div className="w-full max-w-md p-8 rounded-3xl bg-cyber-panel/80 backdrop-blur-xl border border-white/10 shadow-2xl relative z-10 animate-slide-up">
        <div className="flex flex-col items-center mb-8">
            <div className="p-3 bg-gradient-to-br from-cyber-primary to-cyber-secondary rounded-xl shadow-lg shadow-cyber-primary/20 mb-4">
                <BrainCircuit className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white tracking-tight font-sans">Bem-vindo de volta</h2>
            <p className="text-slate-400 mt-2 text-sm">Acesse o hub de inteligência.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-all"
              placeholder="seu@email.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-cyber-primary focus:ring-1 focus:ring-cyber-primary transition-all"
              placeholder="••••••••"
            />
          </div>
          
          {error && <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">{error}</div>}
          
          <button
            type="submit"
            className="w-full py-3.5 bg-white hover:bg-slate-200 text-black font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            Acessar Sistema <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
        
        <p className="text-sm text-center text-slate-500 mt-8">
          Ainda não tem acesso?{' '}
          <Link to="/signup" className="font-bold text-cyber-primary hover:text-white transition-colors">
            Criar conta
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
