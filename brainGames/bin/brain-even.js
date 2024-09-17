#!/usr/bin/env node

import indexGame from '../src/index.js';
import { even, rules } from '../src/games/even.js';

indexGame(even, rules);
