
import { Module } from '../types';

import { M0 } from './modules/m00';
import { M1 } from './modules/m1';
import { M2 } from './modules/m2';
import { M3 } from './modules/m3';
import { M4 } from './modules/m4';
import { M5 } from './modules/m5';

// Lista Mestra de Todos os Módulos Disponíveis na Plataforma
export const COURSE_DATA: Module[] = [
  M0,  // Manual de Bordo (Comum a todos)
  M1, M2, M3, M4, M5
];
