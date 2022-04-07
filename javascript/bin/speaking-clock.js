#!/usr/bin/env node
import { speak } from '../lib/speak.ts'

console.log(speak(process.argv[0]))
