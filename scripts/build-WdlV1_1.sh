#!/usr/bin/env bash
SCRIPT_DIR=$(dirname "$(realpath "$0")")

(
  cd "${SCRIPT_DIR}/../src/WdlV1_1"
  antlr4 -Dlanguage=TypeScript WdlV1_1Lexer.g4 WdlV1_1Parser.g4 -visitor
)
