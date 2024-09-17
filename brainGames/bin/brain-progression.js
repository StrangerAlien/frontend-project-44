#!/usr/bin/env node

import indexGame from '../src/index.js';
import { progressionGame, rules } from '../src/games/progression.js';

indexGame(progressionGame, rules);
