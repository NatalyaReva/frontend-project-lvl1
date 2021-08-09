#!/usr/bin/env node

import greetings from '../src/greeting.js';
import getUserName from '../src/cli.js';
import questionResultExpression from '../src/calc.js';

greetings();
questionResultExpression(getUserName());
