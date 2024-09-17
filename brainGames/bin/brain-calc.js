#!/usr/bin/env node

import indexGame from '../src/index.js';
import { calc, rules } from '../src/games/calc.js';

indexGame(calc, rules);
