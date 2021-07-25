#!/usr/bin/env node
import getUserName from '../src/cli.js';

const greetings = () => {
  console.log('Welcome to the Brain Games!');
};
greetings();
getUserName();
