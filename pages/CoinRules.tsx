import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Home, TrendingUp, ShieldAlert, GraduationCap, AlertTriangle, Lock, Calendar, ShoppingCart, UserCheck, Heart, Star, Coins, Trophy, Medal, Crown, Wallet, CreditCard } from 'lucide-react';
import { currentUser, mockLeaderboard } from '../services/data';

const CoinRules: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'ganhar' | 'perder' | 'niveis' | 'ranking'>('ganhar');

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-600 to-amber-700 px-6 pt-6 pb-8 rounded-b-[2.5rem] shadow-xl relative overflow-hidden">
         <div className="relative z-10 flex items-center justify-between mb-4">
             <div className="flex items-center gap-4">
                 <button onClick={() => navigate(-1)} className="text-white/80 hover:text-white p-2 -ml-2 rounded-full hover:bg-white/10 transition"><ArrowLeft /></button>
                 <h1 className="text-xl font-bold text-white">Manual CoinZ</h1>
             </div>
             <Link to="/" className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition">
                <Home size={24} />
             </Link>
         </div>
         
         <div className="relative z-10 text-center mt-4">
             <div className="inline-flex justify-center items-center mb-4 relative group">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-30 rounded-full group-hover:opacity-50 transition-opacity duration-500"></div>
                
                {/* CSS Constructed CoinZ Icon */}
                <div className="w-32 h-32 relative z-10 animate-bounce-slow">
                    <div className="w-full h-full rounded-full bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-700 shadow-[0_10px_20px_rgba(0,0,0,0.3)] flex items-center justify-center border-[3px] border-yellow-600">
                        <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-yellow-500 via-yellow-300 to-yellow-500 border border-yellow-600/50 shadow-inner flex flex-col items-center justify-center relative overflow-hidden">
                             {/* Texture */}
                             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-20 mix-blend-overlay"></div>
                             
                             {/* Symbol */}
                             <Coins size={48} className="text-yellow-700 drop-shadow-sm mb-1 relative z-10" strokeWidth={2} />
                             <span className="text-[12px] font-black text-yellow-800 tracking-[0.2em] uppercase opacity-80 relative z-10">CoinZ</span>
                             
                             {/* Shine Reflection */}
                             <div className="absolute -top-10 -right-10 w-20 h-20 bg-white rounded-full opacity-30 blur-xl transform rotate-45"></div>
                        </div>
                    </div>
                </div>

             </div>
             <h2 className="text-2xl font-bold text-white mb-1">Regras & Diretrizes</h2>
             <p className="text-yellow-100 text-sm max-w-xs mx-auto">
                 Entenda como ganhar moedas, subir de nível e evitar penalidades no Clube Salesiano.
             </p>
         </div>

         {/* Abstract Shapes */}
         <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-3xl"></div>
         <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-10 rounded-full -ml-10 -mb-10 blur-2xl"></div>
      </div>

      {/* Tabs */}
      <div className="px-6 -mt-6 relative z-20">
        <div className="bg-slate-900 p-1.5 rounded-xl flex flex-wrap gap-1 shadow-lg border border-slate-800">
            <button 
                onClick={() => setActiveTab('ganhar')}
                className={`flex-1 min-w-[80px] py-2 rounded-lg text-[10px] font-bold transition-all ${activeTab === 'ganhar' ? 'bg-slate-700 text-white shadow' : 'text-gray-500 hover:text-gray-300'}`}
            >
                Como Ganhar
            </button>
            <button 
                onClick={() => setActiveTab('perder')}
                className={`flex-1 min-w-[80px] py-2 rounded-lg text-[10px] font-bold transition-all ${activeTab === 'perder' ? 'bg-red-900/40 text-red-400 shadow' : 'text-gray-500 hover:text-gray-300'}`}
            >
                Punições
            </button>
            <button 
                onClick={() => setActiveTab('niveis')}
                className={`flex-1 min-w-[80px] py-2 rounded-lg text-[10px] font-bold transition-all ${activeTab === 'niveis' ? 'bg-amber-900/40 text-amber-400 shadow' : 'text-gray-500 hover:text-gray-300'}`}
            >
                Níveis
            </button>
             <button 
                onClick={() => setActiveTab('ranking')}
                className={`flex-1 min-w-[100px] py-2 rounded-lg text-[10px] font-bold transition-all flex items-center justify-center gap-1 ${activeTab === 'ranking' ? 'bg-purple-900/40 text-purple-400 shadow' : 'text-gray-500 hover:text-gray-300'}`}
            >
                <Trophy size={12} /> Ranking
            </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        
        {/* GANHAR CONTENT */}
        {activeTab === 'ganhar' && (
            <div className="space-y-4 animate-fadeIn">
                <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-green-500/10 p-2 rounded-lg text-green-500">
                            <TrendingUp size={24} />
                        </div>
                        <h3 className="font-bold text-white">Aceleradores de Ganho</h3>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                            <div>
                                <p className="text-gray-200 font-medium text-sm">Mensalidade Antecipada</p>
                                <p className="text-xs text-gray-500">Pagar 10 dias antes do vcto.</p>
                            </div>
                            <span className="text-yellow-400 font-bold text-sm bg-yellow-400/10 px-2 py-1 rounded">+500</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                            <div>
                                <p className="text-gray-200 font-medium text-sm">Boletim de Ouro</p>
                                <p className="text-xs text-gray-500">Nota {'>'} 8.0 (por matéria)</p>
                            </div>
                            <span className="text-yellow-400 font-bold text-sm bg-yellow-400/10 px-2 py-1 rounded">+100</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                            <div>
                                <p className="text-gray-200 font-medium text-sm">Indicar Parceiro</p>
                                <p className="text-xs text-gray-500">Se fechar contrato: +1.000</p>
                            </div>
                            <span className="text-yellow-400 font-bold text-sm bg-yellow-400/10 px-2 py-1 rounded">+200</span>
                        </div>
                         <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                            <div>
                                <p className="text-gray-200 font-medium text-sm">Aniversário</p>
                                <p className="text-xs text-gray-500">Presente do clube</p>
                            </div>
                            <span className="text-yellow-400 font-bold text-sm bg-yellow-400/10 px-2 py-1 rounded">+300</span>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-sm">
                    <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                        <UserCheck size={18} className="text-blue-400" />
                        Engajamento Diário
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-800 p-3 rounded-xl text-center">
                            <Calendar className="mx-auto text-blue-400 mb-1" size={20} />
                            <p className="text-xs font-bold text-gray-300">Login Diário</p>
                            <span className="text-xs text-yellow-500 font-mono">+10 CoinZ</span>
                        </div>
                        <div className="bg-slate-800 p-3 rounded-xl text-center">
                            <Star className="mx-auto text-blue-400 mb-1" size={20} />
                            <p className="text-xs font-bold text-gray-300">Avaliar</p>
                            <span className="text-xs text-yellow-500 font-mono">+50 CoinZ</span>
                        </div>
                         <div className="bg-slate-800 p-3 rounded-xl text-center">
                            <ShoppingCart className="mx-auto text-blue-400 mb-1" size={20} />
                            <p className="text-xs font-bold text-gray-300">Compra</p>
                            <span className="text-xs text-yellow-500 font-mono">+150 CoinZ</span>
                        </div>
                         <div className="bg-slate-800 p-3 rounded-xl text-center">
                            <Heart className="mx-auto text-blue-400 mb-1" size={20} />
                            <p className="text-xs font-bold text-gray-300">Cadastro</p>
                            <span className="text-xs text-yellow-500 font-mono">+200 CoinZ</span>
                        </div>
                    </div>
                </div>
            </div>
        )}

        {/* PERDER CONTENT */}
        {activeTab === 'perder' && (
            <div className="space-y-4 animate-fadeIn">
                 {/* Inadimplencia Section */}
                 <div className="bg-red-900/10 border border-red-900/30 rounded-2xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-red-500/10 p-2 rounded-lg text-red-500">
                            <ShieldAlert size={24} />
                        </div>
                        <h3 className="font-bold text-red-400">Política de Inadimplência</h3>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="bg-slate-900/50 p-3 rounded-xl border border-red-900/20">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-red-300 font-bold text-sm">Sangria Diária (D+1)</span>
                                <span className="text-red-500 font-bold text-xs bg-red-900/20 px-2 py-0.5 rounded">-50 / dia</span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                A partir do 1º dia de atraso no boleto, serão descontados 50 CoinZ do seu saldo todos os dias até a regularização.
                            </p>
                        </div>

                        <div className="bg-red-950/40 p-3 rounded-xl border border-red-500/20">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-red-200 font-bold text-sm flex items-center gap-1"><Lock size={12}/> Bloqueio Total (D+10)</span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Ao completar 10 dias de atraso, o acesso ao app é <strong>totalmente bloqueado</strong> para o aluno e familiares. Nenhuma vantagem poderá ser resgatada.
                            </p>
                        </div>
                         <div className="bg-slate-900/50 p-3 rounded-xl border border-red-900/20">
                            <div className="flex justify-between items-center mb-1">
                                <span className="text-red-300 font-bold text-sm">Downgrade de Nível</span>
                            </div>
                            <p className="text-xs text-gray-400 leading-relaxed">
                                Usuários bloqueados (D+10) perdem seu nível atual ao retornar (Ex: Ouro vira Prata).
                            </p>
                        </div>
                    </div>
                 </div>

                 {/* Academic Penalties */}
                 <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-orange-500/10 p-2 rounded-lg text-orange-500">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="font-bold text-white">Desempenho Acadêmico</h3>
                    </div>
                     <div className="flex justify-between items-center border-b border-slate-800 pb-3 last:border-0 last:pb-0">
                        <div>
                            <p className="text-gray-200 font-medium text-sm">Boletim de Alerta</p>
                            <p className="text-xs text-gray-500">Nota {'<'} 6.0 (por matéria)</p>
                        </div>
                        <span className="text-red-400 font-bold text-sm bg-red-900/20 px-2 py-1 rounded">-100</span>
                    </div>
                </div>

                <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-gray-700/30 p-2 rounded-lg text-gray-400">
                            <AlertTriangle size={24} />
                        </div>
                        <h3 className="font-bold text-white">Outras Penalidades</h3>
                    </div>
                     <div className="flex justify-between items-center mb-2">
                        <div>
                            <p className="text-gray-200 font-medium text-sm">No-Show</p>
                            <p className="text-xs text-gray-500">Reservar e não ir</p>
                        </div>
                        <span className="text-red-400 font-bold text-sm bg-red-900/20 px-2 py-1 rounded">-300</span>
                    </div>
                     <div className="flex justify-between items-center">
                        <div>
                            <p className="text-gray-200 font-medium text-sm">Inatividade (30 dias)</p>
                            <p className="text-xs text-gray-500">Sem abrir o app</p>
                        </div>
                        <span className="text-red-400 font-bold text-sm bg-red-900/20 px-2 py-1 rounded">-5% Total</span>
                    </div>
                </div>
            </div>
        )}

        {/* NIVEIS CONTENT */}
        {activeTab === 'niveis' && (
             <div className="space-y-4 animate-fadeIn">
                <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-center">
                    <p className="text-gray-400 text-sm mb-4">
                        O nível é definido pelo seu <strong>XP Total Acumulado</strong> desde o cadastro.
                    </p>
                    
                    <div className="relative border-l-2 border-slate-700 ml-4 space-y-8 py-2 text-left">
                        {/* Bronze */}
                        <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-orange-700 border-2 border-slate-900"></div>
                            <h4 className="font-bold text-orange-600 text-lg">Novato (Bronze)</h4>
                            <p className="text-xs text-gray-500">0 - 1.000 XP</p>
                            <p className="text-xs text-gray-300 mt-1">Acesso a descontos básicos.</p>
                        </div>
                         {/* Prata */}
                         <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-gray-400 border-2 border-slate-900"></div>
                            <h4 className="font-bold text-gray-300 text-lg">Explorador (Prata)</h4>
                            <p className="text-xs text-gray-500">1.001 - 5.000 XP</p>
                            <p className="text-xs text-gray-300 mt-1">Acesso a sorteios mensais.</p>
                        </div>
                         {/* Ouro */}
                         <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-yellow-400 border-2 border-slate-900 shadow-[0_0_10px_rgba(250,204,21,0.5)]"></div>
                            <h4 className="font-bold text-yellow-400 text-lg">Embaixador (Ouro)</h4>
                            <p className="text-xs text-gray-500">5.001 - 15.000 XP</p>
                            <p className="text-xs text-gray-300 mt-1">Ofertas VIP e Desconto na Mensalidade.</p>
                        </div>
                         {/* Diamante */}
                         <div className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-400 border-2 border-slate-900 shadow-[0_0_10px_rgba(34,211,238,0.5)]"></div>
                            <h4 className="font-bold text-cyan-400 text-lg">Lendário (Diamante)</h4>
                            <p className="text-xs text-gray-500">15.000+ XP</p>
                            <p className="text-xs text-gray-300 mt-1">Status máximo e prioridade em eventos.</p>
                        </div>
                    </div>
                </div>
             </div>
        )}

        {/* RANKING CONTENT */}
        {activeTab === 'ranking' && (
            <div className="space-y-6 animate-fadeIn">
                
                {/* Semester Draw Banner */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-800 to-indigo-900 p-6 shadow-lg border border-purple-500/30">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-10 -mt-10 blur-2xl"></div>
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                             <Crown className="text-yellow-400" size={24} fill="#fbbf24" />
                             <span className="text-xs font-bold text-purple-200 uppercase tracking-widest bg-white/10 px-2 py-0.5 rounded-full">Sorteio Semestral</span>
                        </div>
                        <h2 className="text-3xl font-black text-white mb-2">R$ 1.000,00</h2>
                        <p className="text-purple-100 text-sm mb-4 leading-relaxed">
                            O aluno com maior engajamento no semestre ganha mil reais em créditos para gastar nos parceiros do clube!
                        </p>
                        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10 flex items-center justify-between">
                             <span className="text-xs text-gray-300">Próximo sorteio:</span>
                             <span className="font-mono font-bold text-white text-sm">30/06/2025</span>
                        </div>
                    </div>
                </div>

                {/* Wallet / Prize Balance Display */}
                {currentUser.prizeBalance !== undefined && (
                    <div className="bg-slate-900 rounded-2xl p-5 border border-emerald-900/50 shadow-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-emerald-500/5 group-hover:bg-emerald-500/10 transition-colors"></div>
                        <div className="relative z-10 flex items-center justify-between">
                            <div>
                                <h3 className="text-emerald-400 font-bold text-sm flex items-center gap-2 mb-1">
                                    <Wallet size={16} /> Sua Carteira de Prêmios
                                </h3>
                                <p className="text-3xl font-bold text-white tracking-tight">
                                    {currentUser.prizeBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                                </p>
                                <p className="text-[10px] text-gray-500 mt-1">Saldo exclusivo para uso em parceiros.</p>
                            </div>
                            <div className="bg-emerald-900/30 p-3 rounded-full border border-emerald-500/20">
                                <CreditCard size={28} className="text-emerald-400" />
                            </div>
                        </div>
                        {currentUser.prizeBalance > 0 && (
                            <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
                                <span className="text-[10px] text-emerald-300 bg-emerald-900/40 px-2 py-1 rounded">Débito Automático</span>
                                <span className="text-[10px] text-gray-400">Ao usar cupom, o valor é debitado daqui.</span>
                            </div>
                        )}
                    </div>
                )}

                {/* Leaderboard Section */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                    <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-800/50">
                        <h3 className="font-bold text-white flex items-center gap-2">
                            <Trophy className="text-yellow-500" size={18} /> Top Alunos
                        </h3>
                        <span className="text-xs text-gray-500">Atualizado hoje</span>
                    </div>

                    <div className="divide-y divide-slate-800">
                        {mockLeaderboard.map((student, index) => (
                            <div 
                                key={student.id} 
                                className={`flex items-center gap-4 p-4 ${student.id === currentUser.id ? 'bg-yellow-500/10' : 'hover:bg-slate-800/50'} transition-colors`}
                            >
                                {/* Position */}
                                <div className="w-8 flex-shrink-0 text-center">
                                    {student.position === 1 && <Medal size={24} className="mx-auto text-yellow-400 fill-yellow-400" />}
                                    {student.position === 2 && <Medal size={24} className="mx-auto text-gray-300 fill-gray-300" />}
                                    {student.position === 3 && <Medal size={24} className="mx-auto text-amber-600 fill-amber-600" />}
                                    {student.position > 3 && <span className="text-sm font-bold text-gray-500">#{student.position}</span>}
                                </div>

                                {/* Avatar */}
                                <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full border border-slate-700 object-cover" />

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <h4 className={`text-sm font-bold truncate ${student.id === currentUser.id ? 'text-yellow-500' : 'text-gray-200'}`}>
                                        {student.name} {student.id === currentUser.id && '(Você)'}
                                    </h4>
                                    <p className="text-xs text-gray-500">{student.grade}</p>
                                </div>

                                {/* XP */}
                                <div className="text-right">
                                    <span className="block font-bold text-white text-sm">{student.xp}</span>
                                    <span className="text-[10px] text-gray-500 uppercase">XP</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer Stats for User */}
                    <div className="p-4 bg-slate-800/80 border-t border-slate-700 flex justify-center">
                        <p className="text-xs text-gray-400">
                            Você está na <strong className="text-white">{currentUser.rankingPosition}ª posição</strong> de 1.250 alunos.
                        </p>
                    </div>
                </div>

            </div>
        )}

      </div>
    </div>
  );
};

export default CoinRules;