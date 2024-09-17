#!/usr/bin/env node

import indexGame from '../src/index.js';
import { progression, rules } from '../src/games/progression.js';

indexGame(progression, rules);
