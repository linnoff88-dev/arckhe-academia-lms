
import React, { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCourseProgress } from '../context/ProgressContext';
import { User } from '../types';
import ProgressBar from '../components/ProgressBar';
import UserDetailsModal from '../components/UserDetailsModal';
import { Users, Eye } from '../components/icons';
import { COURSE_DATA } from '../data/courseData';
import { calculateLevel } from '../utils/gamification';

const AdminDashboard: React.FC = () => {
  const { getAllUsers } = useAuth();
  const { getAllUsersProgress } = useCourseProgress();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const users = getAllUsers();
  const allProgress = getAllUsersProgress();
  const totalLessons = useMemo(() => COURSE_DATA.reduce((acc, module) => acc + module.lessons.length, 0), []);

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="space-y-8 animate-slide-up">
      <div className="bg-white dark:bg-cyber-panel border border-slate-200 dark:border-white/10 p-6 rounded-3xl shadow-lg flex items-center gap-4">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl">
            <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white font-sans">Painel de Controle</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-1">Visão geral do progresso da base de alunos.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-cyber-panel border border-slate-200 dark:border-white/10 rounded-3xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-white/10">
            <thead className="bg-slate-50 dark:bg-slate-900/50">
              <tr>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">
                  Aluno
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">
                  Progresso Global
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">
                  Nível
                </th>
                <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider font-mono">
                  XP Total
                </th>
                <th scope="col" className="relative px-6 py-4">
                  <span className="sr-only">Ações</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-cyber-panel divide-y divide-slate-200 dark:divide-white/10">
              {users.map(user => {
                const userProgress = allProgress[user.id] || { completedLessons: [], xp: 0 };
                const progressPercentage = totalLessons > 0 ? Math.round((userProgress.completedLessons.length / totalLessons) * 100) : 0;
                
                // Cálculo de Nível Centralizado
                const { level } = calculateLevel(userProgress.xp);

                return (
                  <tr key={user.id} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex flex-col">
                          <span className="text-sm font-bold text-slate-900 dark:text-white">{user.username}</span>
                          <span className="text-xs text-slate-500">{user.email}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-24">
                           <ProgressBar percentage={progressPercentage} height="h-2" />
                        </div>
                        <span className="text-xs font-bold text-slate-600 dark:text-slate-300 font-mono">{progressPercentage}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-200 font-mono">
                            Lvl {level}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-mono text-slate-600 dark:text-slate-300">
                        {userProgress.xp.toLocaleString()} XP
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleViewDetails(user)}
                        className="text-cyber-primary hover:text-cyan-300 flex items-center gap-2 ml-auto transition-colors font-bold"
                      >
                        <Eye className="w-4 h-4"/>
                        Detalhes
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          progress={allProgress[selectedUser.id]}
          isOpen={!!selectedUser}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default AdminDashboard;
