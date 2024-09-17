#!/usr/bin/env node

import indexGame from '../src/index.js';
import { primeGame, rules } from '../src/games/prime.js';

indexGame(primeGame, rules);
