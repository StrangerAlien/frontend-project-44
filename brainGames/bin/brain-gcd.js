#!/usr/bin/env node

import indexGame from '../src/index.js';
import { gcdGame, rules } from '../src/games/gcd.js';

indexGame(gcdGame, rules);
