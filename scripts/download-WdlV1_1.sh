#!/bin/bash
SCRIPT_DIR=$(dirname "$(realpath "$0")")

mkdir -p ${SCRIPT_DIR}/../src/WdlV1_1

curl -L https://raw.githubusercontent.com/openwdl/wdl-parsers/refs/heads/main/antlr4/1.1/WdlV1_1Lexer.g4 -o ${SCRIPT_DIR}/../src/WdlV1_1/WdlV1_1Lexer.g4
curl -L https://raw.githubusercontent.com/openwdl/wdl-parsers/refs/heads/main/antlr4/1.1/WdlV1_1Parser.g4 -o ${SCRIPT_DIR}/../src/WdlV1_1/WdlV1_1Parser.g4
