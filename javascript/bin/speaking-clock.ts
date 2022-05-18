#!/usr/bin/env node --loader ts-node/esm
import { speak } from '../lib/speak.js'

console.log(speak(process.argv[0]))
