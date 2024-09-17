#!/usr/bin/env node

import indexGame from '../src/index.js';
import { calcGame, rules } from '../src/games/calc.js';

indexGame(calcGame, rules);
