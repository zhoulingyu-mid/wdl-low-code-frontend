import { CharStreams, CommonTokenStream } from 'antlr4';
import WdlV1_1Lexer from 'src/WdlV1_1/WdlV1_1Lexer';
import WdlV1_1Parser, { AddContext, Bound_declsContext, DocumentContext, ExprContext, Infix0Context, Infix1Context, Infix2Context, Infix3Context, Infix4Context, Infix5Context, InputContext, NumberContext, Primitive_literalContext, PrimitivesContext, String_partContext, StringContext, Unbound_declsContext, Wdl_typeContext } from 'src/WdlV1_1/WdlV1_1Parser';
import WdlV1_1ParserVisitor from 'src/WdlV1_1/WdlV1_1ParserVisitor';

export type WdlInputShape = {
  wdlType: Wdl_typeContext;
  defaultValue: unknown | null;
}

export function getDocument(wdlContent: string): DocumentContext {
  const inputStream = CharStreams.fromString(wdlContent);
  const lexer = new WdlV1_1Lexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new WdlV1_1Parser(tokenStream);
  const document = parser.document();

  return document;
}

/*
 Given Wdl content as string, return a list of input with their name, Wdl_typeContext and defaultValue
 */
export function getWorkflowInputDecls(wdlDocument: DocumentContext): Array<Bound_declsContext | Unbound_declsContext> {
  const wdlInputDecls: Array<Bound_declsContext | Unbound_declsContext> = [];
  const workflowElements = wdlDocument.workflow().workflow_element_list()

  for (const workflowElement of workflowElements) {
    if (workflowElement instanceof InputContext) {
      const workflowInput = workflowElement.workflow_input();
      for (const decl of workflowInput.any_decls_list()) {
        const unbounded = decl.unbound_decls();
        const bounded = decl.bound_decls();
        if (unbounded) {
          wdlInputDecls.push(unbounded);
        }
        if (bounded) {
          wdlInputDecls.push(bounded);
        }
      }
    }
  }
  return wdlInputDecls;
}

export function getStructDefinitions(wdlDocument: DocumentContext): Record<string, Record<string, Wdl_typeContext>> {
  const structDefinitions: Record<string, Record<string, Wdl_typeContext>> = {};
  for (const documentElement of wdlDocument.document_element_list()) {
    const structDefinition = documentElement.struct();
    if (structDefinition) {
      const structMapping: Record<string, Wdl_typeContext> = {};
      for (const decl of structDefinition.unbound_decls_list()) {
        structMapping[decl.Identifier().getText()] = decl.wdl_type();
      }
      structDefinitions[structDefinition.Identifier().getText()] = structMapping;
    }
  }

  return structDefinitions;
}

export function evaluateExpression(expr: ExprContext): unknown {
  console.debug('evaluateExpression', expr.getText(), expr)

  const visitor = new WdlV1_1ParserVisitor<unknown>();

  visitor.visitExpr = (expr: ExprContext) => {
    console.log('visitExpr');
    return visitor.visit(expr.expr_infix());
  };

  visitor.visitInfix0 = (expr: Infix0Context) => {
    console.log('visitInfix0');
    if (expr.expr_infix0() instanceof Infix1Context) {
      return visitor.visit(expr.expr_infix0());
    }
    return undefined;
  }

  visitor.visitInfix1 = (expr: Infix1Context) => {
    console.log('visitInfix1');
    if (expr.expr_infix1() instanceof Infix2Context) {
      return visitor.visit(expr.expr_infix1());
    }
    return undefined;
  }

  visitor.visitInfix2 = (expr: Infix2Context) => {
    console.log('visitInfix2');
    if (expr.expr_infix2() instanceof Infix3Context) {
      return visitor.visit(expr.expr_infix2());
    }
    return undefined;
  }

  visitor.visitInfix3 = (expr: Infix3Context) => {
    console.log('visitInfix3');
    if (expr.expr_infix3() instanceof AddContext) {
      return visitor.visit(expr.expr_infix3());
    }
    if (expr.expr_infix3() instanceof Infix4Context) {
      return visitor.visit(expr.expr_infix3());
    }
  }

  visitor.visitAdd = (expr: AddContext) => {
    console.log('visitAdd');
    const res = (visitor.visit(expr.expr_infix3()) as number)
      + (visitor.visit(expr.expr_infix4()) as number);
    return res;
  }

  visitor.visitInfix4 = (expr: Infix4Context) => {
    console.log('visitInfix4');
    if (expr.expr_infix4() instanceof Infix5Context) {
      return visitor.visit(expr.expr_infix4());
    }
    return undefined;
  }

  visitor.visitInfix5 = (expr: Infix5Context) => {
    console.log('visitInfix5');
    if (expr.expr_infix5().expr_core() instanceof PrimitivesContext) {
      return visitor.visit(expr.expr_infix5().expr_core())
    }
  }

  visitor.visitPrimitives = (expr: PrimitivesContext) => {
    console.log('visitPrimitives');
    return visitor.visit(expr.primitive_literal());
  }

  visitor.visitPrimitive_literal = (expr: Primitive_literalContext) => {
    console.log('visitPrimitive_literal');
    if (expr.BoolLiteral()) {
      return expr.BoolLiteral().getText().toLowerCase() === 'true';
    }
    if (expr.number_()) {
      return visitor.visit(expr.number_());
    }
    if (expr.string_()) {
      return visitor.visit(expr.string_());
    }
    // todo, other primitives
  }

  visitor.visitNumber = (expr: NumberContext) => {
    console.log('visitNumber');
    if (expr.IntLiteral()) {
      return parseInt(expr.IntLiteral().getText());
    }
    if (expr.FloatLiteral()) {
      return parseFloat(expr.FloatLiteral().getText());
    }
  }

  visitor.visitString = (expr: StringContext) => {
    console.log('visitString');
    return visitor.visit(expr.string_part());
  }

  visitor.visitString_part = (expr: String_partContext) => {
    console.log('visitString_part');
    return expr.StringPart(0).getText();
  }

  const res = visitor.visitExpr(expr);
  console.debug('evaluateExpression', res);
  return res;
}


export function getInitValue(
  wdlType: Wdl_typeContext,
  structDefinitions: Record<string, Record<string, Wdl_typeContext>>,
  defaultValue: unknown,
  blacklist: Set<unknown>,
): unknown {
  if (defaultValue !== undefined) {
    return defaultValue;
  }

  if (wdlType.OPTIONAL()) {
    return null;
  }

  if (wdlType.type_base().STRING()) {
    for (let initValue = 'text', i = 0; i < 100; i++) {
      if (blacklist.has(initValue)) {
        initValue = `text_${i + 1}`;
        continue;
      }
      return initValue;
    }
  }
  if (wdlType.type_base().FILE()) {
    return null;
  }
  if (wdlType.type_base().INT()) {
    for (let i = 0; i < 100; i++) {
      if (blacklist.has(i)) {
        continue;
      }
      return i;
    }
  }
  if (wdlType.type_base().FLOAT()) {
    for (let i = 0; i < 100; i++) {
      if (blacklist.has(i)) {
        continue;
      }
      return i;
    }
  }
  if (wdlType.type_base().BOOLEAN()) {
    if (!blacklist.has('false')) {
      return false;
    }
    if (!blacklist.has('true')) {
      return true;
    }
    return false;
  }
  if (wdlType.type_base().array_type()) {
    const initArray = [];
    if (wdlType.type_base().array_type().PLUS()) {
      initArray.push(
        getInitValue(wdlType.type_base().array_type().wdl_type(), structDefinitions, undefined, new Set())
      );
    }
    return initArray;
  }
  if (wdlType.type_base().map_type()) {
    return {};
  }

  // Struct type:
  if (wdlType.type_base().Identifier()) {
    const sturctName = wdlType.type_base().Identifier().getText();
    const structObj: Record<string, unknown> = {};
    for (const [k, wt] of Object.entries(structDefinitions[sturctName])) {
      structObj[k] = getInitValue(wt, structDefinitions, undefined, new Set());
    }
    return structObj;
  }

  console.debug(wdlType);
  throw new Error("Unhandled input type: ");
}
