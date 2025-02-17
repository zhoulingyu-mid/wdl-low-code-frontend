// Generated from WdlV1_1Parser.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import WdlV1_1ParserListener from "./WdlV1_1ParserListener.js";
import WdlV1_1ParserVisitor from "./WdlV1_1ParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class WdlV1_1Parser extends Parser {
	public static readonly LINE_COMMENT = 1;
	public static readonly VERSION = 2;
	public static readonly IMPORT = 3;
	public static readonly WORKFLOW = 4;
	public static readonly TASK = 5;
	public static readonly STRUCT = 6;
	public static readonly SCATTER = 7;
	public static readonly CALL = 8;
	public static readonly IF = 9;
	public static readonly THEN = 10;
	public static readonly ELSE = 11;
	public static readonly ALIAS = 12;
	public static readonly AS = 13;
	public static readonly In = 14;
	public static readonly INPUT = 15;
	public static readonly OUTPUT = 16;
	public static readonly PARAMETERMETA = 17;
	public static readonly META = 18;
	public static readonly RUNTIME = 19;
	public static readonly BOOLEAN = 20;
	public static readonly INT = 21;
	public static readonly FLOAT = 22;
	public static readonly STRING = 23;
	public static readonly FILE = 24;
	public static readonly ARRAY = 25;
	public static readonly MAP = 26;
	public static readonly OBJECT = 27;
	public static readonly OBJECTLITERAL = 28;
	public static readonly SEPEQUAL = 29;
	public static readonly DEFAULTEQUAL = 30;
	public static readonly PAIR = 31;
	public static readonly AFTER = 32;
	public static readonly COMMAND = 33;
	public static readonly NONELITERAL = 34;
	public static readonly IntLiteral = 35;
	public static readonly FloatLiteral = 36;
	public static readonly BoolLiteral = 37;
	public static readonly LPAREN = 38;
	public static readonly RPAREN = 39;
	public static readonly LBRACE = 40;
	public static readonly RBRACE = 41;
	public static readonly LBRACK = 42;
	public static readonly RBRACK = 43;
	public static readonly ESC = 44;
	public static readonly COLON = 45;
	public static readonly LT = 46;
	public static readonly GT = 47;
	public static readonly GTE = 48;
	public static readonly LTE = 49;
	public static readonly EQUALITY = 50;
	public static readonly NOTEQUAL = 51;
	public static readonly EQUAL = 52;
	public static readonly AND = 53;
	public static readonly OR = 54;
	public static readonly OPTIONAL = 55;
	public static readonly STAR = 56;
	public static readonly PLUS = 57;
	public static readonly MINUS = 58;
	public static readonly DOLLAR = 59;
	public static readonly COMMA = 60;
	public static readonly SEMI = 61;
	public static readonly DOT = 62;
	public static readonly NOT = 63;
	public static readonly TILDE = 64;
	public static readonly DIVIDE = 65;
	public static readonly MOD = 66;
	public static readonly SQUOTE = 67;
	public static readonly DQUOTE = 68;
	public static readonly WHITESPACE = 69;
	public static readonly Identifier = 70;
	public static readonly StringPart = 71;
	public static readonly BeginWhitespace = 72;
	public static readonly BeginHereDoc = 73;
	public static readonly BeginLBrace = 74;
	public static readonly HereDocUnicodeEscape = 75;
	public static readonly CommandUnicodeEscape = 76;
	public static readonly StringCommandStart = 77;
	public static readonly EndCommand = 78;
	public static readonly CommandStringPart = 79;
	public static readonly VersionWhitespace = 80;
	public static readonly ReleaseVersion = 81;
	public static readonly BeginMeta = 82;
	public static readonly MetaWhitespace = 83;
	public static readonly MetaBodyComment = 84;
	public static readonly MetaIdentifier = 85;
	public static readonly MetaColon = 86;
	public static readonly EndMeta = 87;
	public static readonly MetaBodyWhitespace = 88;
	public static readonly MetaValueComment = 89;
	public static readonly MetaBool = 90;
	public static readonly MetaInt = 91;
	public static readonly MetaFloat = 92;
	public static readonly MetaNull = 93;
	public static readonly MetaSquote = 94;
	public static readonly MetaDquote = 95;
	public static readonly MetaEmptyObject = 96;
	public static readonly MetaEmptyArray = 97;
	public static readonly MetaLbrack = 98;
	public static readonly MetaLbrace = 99;
	public static readonly MetaValueWhitespace = 100;
	public static readonly MetaStringPart = 101;
	public static readonly MetaArrayComment = 102;
	public static readonly MetaArrayCommaRbrack = 103;
	public static readonly MetaArrayComma = 104;
	public static readonly MetaRbrack = 105;
	public static readonly MetaArrayWhitespace = 106;
	public static readonly MetaObjectIdentifier = 107;
	public static readonly MetaObjectColon = 108;
	public static readonly MetaObjectCommaRbrace = 109;
	public static readonly MetaObjectComma = 110;
	public static readonly MetaRbrace = 111;
	public static readonly MetaObjectWhitespace = 112;
	public static readonly HereDocEscapedEnd = 113;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_map_type = 0;
	public static readonly RULE_array_type = 1;
	public static readonly RULE_pair_type = 2;
	public static readonly RULE_type_base = 3;
	public static readonly RULE_wdl_type = 4;
	public static readonly RULE_unbound_decls = 5;
	public static readonly RULE_bound_decls = 6;
	public static readonly RULE_any_decls = 7;
	public static readonly RULE_number = 8;
	public static readonly RULE_expression_placeholder_option = 9;
	public static readonly RULE_string_part = 10;
	public static readonly RULE_string_expr_part = 11;
	public static readonly RULE_string_expr_with_string_part = 12;
	public static readonly RULE_string = 13;
	public static readonly RULE_primitive_literal = 14;
	public static readonly RULE_expr = 15;
	public static readonly RULE_expr_infix = 16;
	public static readonly RULE_expr_infix0 = 17;
	public static readonly RULE_expr_infix1 = 18;
	public static readonly RULE_expr_infix2 = 19;
	public static readonly RULE_expr_infix3 = 20;
	public static readonly RULE_expr_infix4 = 21;
	public static readonly RULE_expr_infix5 = 22;
	public static readonly RULE_member = 23;
	public static readonly RULE_expr_core = 24;
	public static readonly RULE_version = 25;
	public static readonly RULE_import_alias = 26;
	public static readonly RULE_import_as = 27;
	public static readonly RULE_import_doc = 28;
	public static readonly RULE_struct = 29;
	public static readonly RULE_meta_value = 30;
	public static readonly RULE_meta_string_part = 31;
	public static readonly RULE_meta_string = 32;
	public static readonly RULE_meta_array = 33;
	public static readonly RULE_meta_object = 34;
	public static readonly RULE_meta_object_kv = 35;
	public static readonly RULE_meta_kv = 36;
	public static readonly RULE_parameter_meta = 37;
	public static readonly RULE_meta = 38;
	public static readonly RULE_task_runtime_kv = 39;
	public static readonly RULE_task_runtime = 40;
	public static readonly RULE_task_input = 41;
	public static readonly RULE_task_output = 42;
	public static readonly RULE_task_command_string_part = 43;
	public static readonly RULE_task_command_expr_part = 44;
	public static readonly RULE_task_command_expr_with_string = 45;
	public static readonly RULE_task_command = 46;
	public static readonly RULE_task_element = 47;
	public static readonly RULE_task = 48;
	public static readonly RULE_inner_workflow_element = 49;
	public static readonly RULE_call_alias = 50;
	public static readonly RULE_call_input = 51;
	public static readonly RULE_call_inputs = 52;
	public static readonly RULE_call_body = 53;
	public static readonly RULE_call_after = 54;
	public static readonly RULE_call_name = 55;
	public static readonly RULE_call = 56;
	public static readonly RULE_scatter = 57;
	public static readonly RULE_conditional = 58;
	public static readonly RULE_workflow_input = 59;
	public static readonly RULE_workflow_output = 60;
	public static readonly RULE_workflow_element = 61;
	public static readonly RULE_workflow = 62;
	public static readonly RULE_document_element = 63;
	public static readonly RULE_document = 64;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'version'", 
                                                            "'import'", 
                                                            "'workflow'", 
                                                            "'task'", "'struct'", 
                                                            "'scatter'", 
                                                            "'call'", "'if'", 
                                                            "'then'", "'else'", 
                                                            "'alias'", "'as'", 
                                                            "'in'", "'input'", 
                                                            "'output'", 
                                                            "'parameter_meta'", 
                                                            "'meta'", "'runtime'", 
                                                            "'Boolean'", 
                                                            "'Int'", "'Float'", 
                                                            "'String'", 
                                                            "'File'", "'Array'", 
                                                            "'Map'", "'Object'", 
                                                            "'object'", 
                                                            "'sep='", "'default='", 
                                                            "'Pair'", "'after'", 
                                                            "'command'", 
                                                            "'None'", null, 
                                                            null, null, 
                                                            "'('", "')'", 
                                                            null, null, 
                                                            "'['", null, 
                                                            "'\\'", null, 
                                                            "'<'", "'>'", 
                                                            "'>='", "'<='", 
                                                            "'=='", "'!='", 
                                                            "'='", "'&&'", 
                                                            "'||'", "'?'", 
                                                            "'*'", "'+'", 
                                                            "'-'", null, 
                                                            null, "';'", 
                                                            "'.'", "'!'", 
                                                            null, "'/'", 
                                                            "'%'", null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'<<<'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'null'", 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'\\>>>'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "LINE_COMMENT", 
                                                             "VERSION", 
                                                             "IMPORT", "WORKFLOW", 
                                                             "TASK", "STRUCT", 
                                                             "SCATTER", 
                                                             "CALL", "IF", 
                                                             "THEN", "ELSE", 
                                                             "ALIAS", "AS", 
                                                             "In", "INPUT", 
                                                             "OUTPUT", "PARAMETERMETA", 
                                                             "META", "RUNTIME", 
                                                             "BOOLEAN", 
                                                             "INT", "FLOAT", 
                                                             "STRING", "FILE", 
                                                             "ARRAY", "MAP", 
                                                             "OBJECT", "OBJECTLITERAL", 
                                                             "SEPEQUAL", 
                                                             "DEFAULTEQUAL", 
                                                             "PAIR", "AFTER", 
                                                             "COMMAND", 
                                                             "NONELITERAL", 
                                                             "IntLiteral", 
                                                             "FloatLiteral", 
                                                             "BoolLiteral", 
                                                             "LPAREN", "RPAREN", 
                                                             "LBRACE", "RBRACE", 
                                                             "LBRACK", "RBRACK", 
                                                             "ESC", "COLON", 
                                                             "LT", "GT", 
                                                             "GTE", "LTE", 
                                                             "EQUALITY", 
                                                             "NOTEQUAL", 
                                                             "EQUAL", "AND", 
                                                             "OR", "OPTIONAL", 
                                                             "STAR", "PLUS", 
                                                             "MINUS", "DOLLAR", 
                                                             "COMMA", "SEMI", 
                                                             "DOT", "NOT", 
                                                             "TILDE", "DIVIDE", 
                                                             "MOD", "SQUOTE", 
                                                             "DQUOTE", "WHITESPACE", 
                                                             "Identifier", 
                                                             "StringPart", 
                                                             "BeginWhitespace", 
                                                             "BeginHereDoc", 
                                                             "BeginLBrace", 
                                                             "HereDocUnicodeEscape", 
                                                             "CommandUnicodeEscape", 
                                                             "StringCommandStart", 
                                                             "EndCommand", 
                                                             "CommandStringPart", 
                                                             "VersionWhitespace", 
                                                             "ReleaseVersion", 
                                                             "BeginMeta", 
                                                             "MetaWhitespace", 
                                                             "MetaBodyComment", 
                                                             "MetaIdentifier", 
                                                             "MetaColon", 
                                                             "EndMeta", 
                                                             "MetaBodyWhitespace", 
                                                             "MetaValueComment", 
                                                             "MetaBool", 
                                                             "MetaInt", 
                                                             "MetaFloat", 
                                                             "MetaNull", 
                                                             "MetaSquote", 
                                                             "MetaDquote", 
                                                             "MetaEmptyObject", 
                                                             "MetaEmptyArray", 
                                                             "MetaLbrack", 
                                                             "MetaLbrace", 
                                                             "MetaValueWhitespace", 
                                                             "MetaStringPart", 
                                                             "MetaArrayComment", 
                                                             "MetaArrayCommaRbrack", 
                                                             "MetaArrayComma", 
                                                             "MetaRbrack", 
                                                             "MetaArrayWhitespace", 
                                                             "MetaObjectIdentifier", 
                                                             "MetaObjectColon", 
                                                             "MetaObjectCommaRbrace", 
                                                             "MetaObjectComma", 
                                                             "MetaRbrace", 
                                                             "MetaObjectWhitespace", 
                                                             "HereDocEscapedEnd" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"map_type", "array_type", "pair_type", "type_base", "wdl_type", "unbound_decls", 
		"bound_decls", "any_decls", "number", "expression_placeholder_option", 
		"string_part", "string_expr_part", "string_expr_with_string_part", "string", 
		"primitive_literal", "expr", "expr_infix", "expr_infix0", "expr_infix1", 
		"expr_infix2", "expr_infix3", "expr_infix4", "expr_infix5", "member", 
		"expr_core", "version", "import_alias", "import_as", "import_doc", "struct", 
		"meta_value", "meta_string_part", "meta_string", "meta_array", "meta_object", 
		"meta_object_kv", "meta_kv", "parameter_meta", "meta", "task_runtime_kv", 
		"task_runtime", "task_input", "task_output", "task_command_string_part", 
		"task_command_expr_part", "task_command_expr_with_string", "task_command", 
		"task_element", "task", "inner_workflow_element", "call_alias", "call_input", 
		"call_inputs", "call_body", "call_after", "call_name", "call", "scatter", 
		"conditional", "workflow_input", "workflow_output", "workflow_element", 
		"workflow", "document_element", "document",
	];
	public get grammarFileName(): string { return "WdlV1_1Parser.g4"; }
	public get literalNames(): (string | null)[] { return WdlV1_1Parser.literalNames; }
	public get symbolicNames(): (string | null)[] { return WdlV1_1Parser.symbolicNames; }
	public get ruleNames(): string[] { return WdlV1_1Parser.ruleNames; }
	public get serializedATN(): number[] { return WdlV1_1Parser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, WdlV1_1Parser._ATN, WdlV1_1Parser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public map_type(): Map_typeContext {
		let localctx: Map_typeContext = new Map_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, WdlV1_1Parser.RULE_map_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 130;
			this.match(WdlV1_1Parser.MAP);
			this.state = 131;
			this.match(WdlV1_1Parser.LBRACK);
			this.state = 132;
			this.wdl_type();
			this.state = 133;
			this.match(WdlV1_1Parser.COMMA);
			this.state = 134;
			this.wdl_type();
			this.state = 135;
			this.match(WdlV1_1Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public array_type(): Array_typeContext {
		let localctx: Array_typeContext = new Array_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, WdlV1_1Parser.RULE_array_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 137;
			this.match(WdlV1_1Parser.ARRAY);
			this.state = 138;
			this.match(WdlV1_1Parser.LBRACK);
			this.state = 139;
			this.wdl_type();
			this.state = 140;
			this.match(WdlV1_1Parser.RBRACK);
			this.state = 142;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===57) {
				{
				this.state = 141;
				this.match(WdlV1_1Parser.PLUS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public pair_type(): Pair_typeContext {
		let localctx: Pair_typeContext = new Pair_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, WdlV1_1Parser.RULE_pair_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 144;
			this.match(WdlV1_1Parser.PAIR);
			this.state = 145;
			this.match(WdlV1_1Parser.LBRACK);
			this.state = 146;
			this.wdl_type();
			this.state = 147;
			this.match(WdlV1_1Parser.COMMA);
			this.state = 148;
			this.wdl_type();
			this.state = 149;
			this.match(WdlV1_1Parser.RBRACK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_base(): Type_baseContext {
		let localctx: Type_baseContext = new Type_baseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, WdlV1_1Parser.RULE_type_base);
		let _la: number;
		try {
			this.state = 155;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 25:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 151;
				this.array_type();
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 152;
				this.map_type();
				}
				break;
			case 31:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 153;
				this.pair_type();
				}
				break;
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 27:
			case 70:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 154;
				_la = this._input.LA(1);
				if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 166723584) !== 0) || _la===70)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public wdl_type(): Wdl_typeContext {
		let localctx: Wdl_typeContext = new Wdl_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, WdlV1_1Parser.RULE_wdl_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 161;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				this.state = 157;
				this.type_base();
				this.state = 158;
				this.match(WdlV1_1Parser.OPTIONAL);
				}
				break;
			case 2:
				{
				this.state = 160;
				this.type_base();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unbound_decls(): Unbound_declsContext {
		let localctx: Unbound_declsContext = new Unbound_declsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, WdlV1_1Parser.RULE_unbound_decls);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this.wdl_type();
			this.state = 164;
			this.match(WdlV1_1Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public bound_decls(): Bound_declsContext {
		let localctx: Bound_declsContext = new Bound_declsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, WdlV1_1Parser.RULE_bound_decls);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 166;
			this.wdl_type();
			this.state = 167;
			this.match(WdlV1_1Parser.Identifier);
			this.state = 168;
			this.match(WdlV1_1Parser.EQUAL);
			this.state = 169;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public any_decls(): Any_declsContext {
		let localctx: Any_declsContext = new Any_declsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, WdlV1_1Parser.RULE_any_decls);
		try {
			this.state = 173;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 171;
				this.unbound_decls();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 172;
				this.bound_decls();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_(): NumberContext {
		let localctx: NumberContext = new NumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, WdlV1_1Parser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 175;
			_la = this._input.LA(1);
			if(!(_la===35 || _la===36)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression_placeholder_option(): Expression_placeholder_optionContext {
		let localctx: Expression_placeholder_optionContext = new Expression_placeholder_optionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, WdlV1_1Parser.RULE_expression_placeholder_option);
		try {
			this.state = 187;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 37:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 177;
				this.match(WdlV1_1Parser.BoolLiteral);
				this.state = 178;
				this.match(WdlV1_1Parser.EQUAL);
				this.state = 179;
				this.string_();
				}
				break;
			case 30:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 180;
				this.match(WdlV1_1Parser.DEFAULTEQUAL);
				this.state = 183;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 67:
				case 68:
					{
					this.state = 181;
					this.string_();
					}
					break;
				case 35:
				case 36:
					{
					this.state = 182;
					this.number_();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 29:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 185;
				this.match(WdlV1_1Parser.SEPEQUAL);
				this.state = 186;
				this.string_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_part(): String_partContext {
		let localctx: String_partContext = new String_partContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, WdlV1_1Parser.RULE_string_part);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 192;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===71) {
				{
				{
				this.state = 189;
				this.match(WdlV1_1Parser.StringPart);
				}
				}
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_expr_part(): String_expr_partContext {
		let localctx: String_expr_partContext = new String_expr_partContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, WdlV1_1Parser.RULE_string_expr_part);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 195;
			this.match(WdlV1_1Parser.StringCommandStart);
			this.state = 199;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 196;
					this.expression_placeholder_option();
					}
					}
				}
				this.state = 201;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 7, this._ctx);
			}
			this.state = 202;
			this.expr();
			this.state = 203;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_expr_with_string_part(): String_expr_with_string_partContext {
		let localctx: String_expr_with_string_partContext = new String_expr_with_string_partContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, WdlV1_1Parser.RULE_string_expr_with_string_part);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 205;
			this.string_expr_part();
			this.state = 206;
			this.string_part();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_(): StringContext {
		let localctx: StringContext = new StringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, WdlV1_1Parser.RULE_string);
		let _la: number;
		try {
			this.state = 228;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 68:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 208;
				this.match(WdlV1_1Parser.DQUOTE);
				this.state = 209;
				this.string_part();
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===77) {
					{
					{
					this.state = 210;
					this.string_expr_with_string_part();
					}
					}
					this.state = 215;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 216;
				this.match(WdlV1_1Parser.DQUOTE);
				}
				break;
			case 67:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 218;
				this.match(WdlV1_1Parser.SQUOTE);
				this.state = 219;
				this.string_part();
				this.state = 223;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===77) {
					{
					{
					this.state = 220;
					this.string_expr_with_string_part();
					}
					}
					this.state = 225;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 226;
				this.match(WdlV1_1Parser.SQUOTE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public primitive_literal(): Primitive_literalContext {
		let localctx: Primitive_literalContext = new Primitive_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, WdlV1_1Parser.RULE_primitive_literal);
		try {
			this.state = 235;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 37:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 230;
				this.match(WdlV1_1Parser.BoolLiteral);
				}
				break;
			case 35:
			case 36:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 231;
				this.number_();
				}
				break;
			case 67:
			case 68:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 232;
				this.string_();
				}
				break;
			case 34:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 233;
				this.match(WdlV1_1Parser.NONELITERAL);
				}
				break;
			case 70:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 234;
				this.match(WdlV1_1Parser.Identifier);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let localctx: ExprContext = new ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, WdlV1_1Parser.RULE_expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 237;
			this.expr_infix();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_infix(): Expr_infixContext {
		let localctx: Expr_infixContext = new Expr_infixContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, WdlV1_1Parser.RULE_expr_infix);
		try {
			localctx = new Infix0Context(this, localctx);
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 239;
			this.expr_infix0(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr_infix0(): Expr_infix0Context;
	public expr_infix0(_p: number): Expr_infix0Context;
	// @RuleVersion(0)
	public expr_infix0(_p?: number): Expr_infix0Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Expr_infix0Context = new Expr_infix0Context(this, this._ctx, _parentState);
		let _prevctx: Expr_infix0Context = localctx;
		let _startState: number = 34;
		this.enterRecursionRule(localctx, 34, WdlV1_1Parser.RULE_expr_infix0, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Infix1Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 242;
			this.expr_infix1(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 249;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new LorContext(this, new Expr_infix0Context(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix0);
					this.state = 244;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 245;
					this.match(WdlV1_1Parser.OR);
					this.state = 246;
					this.expr_infix1(0);
					}
					}
				}
				this.state = 251;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public expr_infix1(): Expr_infix1Context;
	public expr_infix1(_p: number): Expr_infix1Context;
	// @RuleVersion(0)
	public expr_infix1(_p?: number): Expr_infix1Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Expr_infix1Context = new Expr_infix1Context(this, this._ctx, _parentState);
		let _prevctx: Expr_infix1Context = localctx;
		let _startState: number = 36;
		this.enterRecursionRule(localctx, 36, WdlV1_1Parser.RULE_expr_infix1, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Infix2Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 253;
			this.expr_infix2(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 260;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					{
					localctx = new LandContext(this, new Expr_infix1Context(this, _parentctx, _parentState));
					this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix1);
					this.state = 255;
					if (!(this.precpred(this._ctx, 2))) {
						throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
					}
					this.state = 256;
					this.match(WdlV1_1Parser.AND);
					this.state = 257;
					this.expr_infix2(0);
					}
					}
				}
				this.state = 262;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 13, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public expr_infix2(): Expr_infix2Context;
	public expr_infix2(_p: number): Expr_infix2Context;
	// @RuleVersion(0)
	public expr_infix2(_p?: number): Expr_infix2Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Expr_infix2Context = new Expr_infix2Context(this, this._ctx, _parentState);
		let _prevctx: Expr_infix2Context = localctx;
		let _startState: number = 38;
		this.enterRecursionRule(localctx, 38, WdlV1_1Parser.RULE_expr_infix2, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Infix3Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 264;
			this.expr_infix3(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 286;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 284;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
					case 1:
						{
						localctx = new EqeqContext(this, new Expr_infix2Context(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix2);
						this.state = 266;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 267;
						this.match(WdlV1_1Parser.EQUALITY);
						this.state = 268;
						this.expr_infix3(0);
						}
						break;
					case 2:
						{
						localctx = new NeqContext(this, new Expr_infix2Context(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix2);
						this.state = 269;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 270;
						this.match(WdlV1_1Parser.NOTEQUAL);
						this.state = 271;
						this.expr_infix3(0);
						}
						break;
					case 3:
						{
						localctx = new LteContext(this, new Expr_infix2Context(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix2);
						this.state = 272;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 273;
						this.match(WdlV1_1Parser.LTE);
						this.state = 274;
						this.expr_infix3(0);
						}
						break;
					case 4:
						{
						localctx = new GteContext(this, new Expr_infix2Context(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix2);
						this.state = 275;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 276;
						this.match(WdlV1_1Parser.GTE);
						this.state = 277;
						this.expr_infix3(0);
						}
						break;
					case 5:
						{
						localctx = new LtContext(this, new Expr_infix2Context(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix2);
						this.state = 278;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 279;
						this.match(WdlV1_1Parser.LT);
						this.state = 280;
						this.expr_infix3(0);
						}
						break;
					case 6:
						{
						localctx = new GtContext(this, new Expr_infix2Context(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix2);
						this.state = 281;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 282;
						this.match(WdlV1_1Parser.GT);
						this.state = 283;
						this.expr_infix3(0);
						}
						break;
					}
					}
				}
				this.state = 288;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 15, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public expr_infix3(): Expr_infix3Context;
	public expr_infix3(_p: number): Expr_infix3Context;
	// @RuleVersion(0)
	public expr_infix3(_p?: number): Expr_infix3Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Expr_infix3Context = new Expr_infix3Context(this, this._ctx, _parentState);
		let _prevctx: Expr_infix3Context = localctx;
		let _startState: number = 40;
		this.enterRecursionRule(localctx, 40, WdlV1_1Parser.RULE_expr_infix3, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Infix4Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 290;
			this.expr_infix4(0);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 300;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 298;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
					case 1:
						{
						localctx = new AddContext(this, new Expr_infix3Context(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix3);
						this.state = 292;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 293;
						this.match(WdlV1_1Parser.PLUS);
						this.state = 294;
						this.expr_infix4(0);
						}
						break;
					case 2:
						{
						localctx = new SubContext(this, new Expr_infix3Context(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix3);
						this.state = 295;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 296;
						this.match(WdlV1_1Parser.MINUS);
						this.state = 297;
						this.expr_infix4(0);
						}
						break;
					}
					}
				}
				this.state = 302;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 17, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public expr_infix4(): Expr_infix4Context;
	public expr_infix4(_p: number): Expr_infix4Context;
	// @RuleVersion(0)
	public expr_infix4(_p?: number): Expr_infix4Context {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Expr_infix4Context = new Expr_infix4Context(this, this._ctx, _parentState);
		let _prevctx: Expr_infix4Context = localctx;
		let _startState: number = 42;
		this.enterRecursionRule(localctx, 42, WdlV1_1Parser.RULE_expr_infix4, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			{
			localctx = new Infix5Context(this, localctx);
			this._ctx = localctx;
			_prevctx = localctx;

			this.state = 304;
			this.expr_infix5();
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 317;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 315;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
					case 1:
						{
						localctx = new MulContext(this, new Expr_infix4Context(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix4);
						this.state = 306;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 307;
						this.match(WdlV1_1Parser.STAR);
						this.state = 308;
						this.expr_infix5();
						}
						break;
					case 2:
						{
						localctx = new DivideContext(this, new Expr_infix4Context(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix4);
						this.state = 309;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 310;
						this.match(WdlV1_1Parser.DIVIDE);
						this.state = 311;
						this.expr_infix5();
						}
						break;
					case 3:
						{
						localctx = new ModContext(this, new Expr_infix4Context(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_infix4);
						this.state = 312;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 313;
						this.match(WdlV1_1Parser.MOD);
						this.state = 314;
						this.expr_infix5();
						}
						break;
					}
					}
				}
				this.state = 319;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expr_infix5(): Expr_infix5Context {
		let localctx: Expr_infix5Context = new Expr_infix5Context(this, this._ctx, this.state);
		this.enterRule(localctx, 44, WdlV1_1Parser.RULE_expr_infix5);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 320;
			this.expr_core(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public member(): MemberContext {
		let localctx: MemberContext = new MemberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, WdlV1_1Parser.RULE_member);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
			this.match(WdlV1_1Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expr_core(): Expr_coreContext;
	public expr_core(_p: number): Expr_coreContext;
	// @RuleVersion(0)
	public expr_core(_p?: number): Expr_coreContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Expr_coreContext = new Expr_coreContext(this, this._ctx, _parentState);
		let _prevctx: Expr_coreContext = localctx;
		let _startState: number = 48;
		this.enterRecursionRule(localctx, 48, WdlV1_1Parser.RULE_expr_core, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 453;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				localctx = new ApplyContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 325;
				this.match(WdlV1_1Parser.Identifier);
				this.state = 326;
				this.match(WdlV1_1Parser.LPAREN);
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & 3188195329) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 371294209) !== 0)) {
					{
					this.state = 327;
					this.expr();
					this.state = 332;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 328;
							this.match(WdlV1_1Parser.COMMA);
							this.state = 329;
							this.expr();
							}
							}
						}
						this.state = 334;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
					}
					this.state = 336;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===60) {
						{
						this.state = 335;
						this.match(WdlV1_1Parser.COMMA);
						}
					}

					}
				}

				this.state = 340;
				this.match(WdlV1_1Parser.RPAREN);
				}
				break;
			case 2:
				{
				localctx = new Array_literalContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 341;
				this.match(WdlV1_1Parser.LBRACK);
				this.state = 355;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & 3188195329) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 371294209) !== 0)) {
					{
					{
					this.state = 342;
					this.expr();
					this.state = 347;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 343;
							this.match(WdlV1_1Parser.COMMA);
							this.state = 344;
							this.expr();
							}
							}
						}
						this.state = 349;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 23, this._ctx);
					}
					this.state = 351;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===60) {
						{
						this.state = 350;
						this.match(WdlV1_1Parser.COMMA);
						}
					}

					}
					}
					this.state = 357;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 358;
				this.match(WdlV1_1Parser.RBRACK);
				}
				break;
			case 3:
				{
				localctx = new Pair_literalContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 359;
				this.match(WdlV1_1Parser.LPAREN);
				this.state = 360;
				this.expr();
				this.state = 361;
				this.match(WdlV1_1Parser.COMMA);
				this.state = 362;
				this.expr();
				this.state = 363;
				this.match(WdlV1_1Parser.RPAREN);
				}
				break;
			case 4:
				{
				localctx = new Map_literalContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 365;
				this.match(WdlV1_1Parser.LBRACE);
				this.state = 384;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 9)) & ~0x1F) === 0 && ((1 << (_la - 9)) & 3188195329) !== 0) || ((((_la - 42)) & ~0x1F) === 0 && ((1 << (_la - 42)) & 371294209) !== 0)) {
					{
					{
					this.state = 366;
					this.expr();
					this.state = 367;
					this.match(WdlV1_1Parser.COLON);
					this.state = 368;
					this.expr();
					this.state = 376;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 369;
							this.match(WdlV1_1Parser.COMMA);
							this.state = 370;
							this.expr();
							this.state = 371;
							this.match(WdlV1_1Parser.COLON);
							this.state = 372;
							this.expr();
							}
							}
						}
						this.state = 378;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 26, this._ctx);
					}
					this.state = 380;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===60) {
						{
						this.state = 379;
						this.match(WdlV1_1Parser.COMMA);
						}
					}

					}
					}
					this.state = 386;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 387;
				this.match(WdlV1_1Parser.RBRACE);
				}
				break;
			case 5:
				{
				localctx = new Object_literalContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 388;
				this.match(WdlV1_1Parser.OBJECTLITERAL);
				this.state = 389;
				this.match(WdlV1_1Parser.LBRACE);
				this.state = 408;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===70) {
					{
					{
					this.state = 390;
					this.member();
					this.state = 391;
					this.match(WdlV1_1Parser.COLON);
					this.state = 392;
					this.expr();
					this.state = 400;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 393;
							this.match(WdlV1_1Parser.COMMA);
							this.state = 394;
							this.member();
							this.state = 395;
							this.match(WdlV1_1Parser.COLON);
							this.state = 396;
							this.expr();
							}
							}
						}
						this.state = 402;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 29, this._ctx);
					}
					this.state = 404;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===60) {
						{
						this.state = 403;
						this.match(WdlV1_1Parser.COMMA);
						}
					}

					}
					}
					this.state = 410;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 411;
				this.match(WdlV1_1Parser.RBRACE);
				}
				break;
			case 6:
				{
				localctx = new Struct_literalContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 412;
				this.match(WdlV1_1Parser.Identifier);
				this.state = 413;
				this.match(WdlV1_1Parser.LBRACE);
				this.state = 432;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===70) {
					{
					{
					this.state = 414;
					this.member();
					this.state = 415;
					this.match(WdlV1_1Parser.COLON);
					this.state = 416;
					this.expr();
					this.state = 424;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 417;
							this.match(WdlV1_1Parser.COMMA);
							this.state = 418;
							this.member();
							this.state = 419;
							this.match(WdlV1_1Parser.COLON);
							this.state = 420;
							this.expr();
							}
							}
						}
						this.state = 426;
						this._errHandler.sync(this);
						_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
					}
					this.state = 428;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la===60) {
						{
						this.state = 427;
						this.match(WdlV1_1Parser.COMMA);
						}
					}

					}
					}
					this.state = 434;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 435;
				this.match(WdlV1_1Parser.RBRACE);
				}
				break;
			case 7:
				{
				localctx = new IfthenelseContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 436;
				this.match(WdlV1_1Parser.IF);
				this.state = 437;
				this.expr();
				this.state = 438;
				this.match(WdlV1_1Parser.THEN);
				this.state = 439;
				this.expr();
				this.state = 440;
				this.match(WdlV1_1Parser.ELSE);
				this.state = 441;
				this.expr();
				}
				break;
			case 8:
				{
				localctx = new Expression_groupContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 443;
				this.match(WdlV1_1Parser.LPAREN);
				this.state = 444;
				this.expr();
				this.state = 445;
				this.match(WdlV1_1Parser.RPAREN);
				}
				break;
			case 9:
				{
				localctx = new NegateContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 447;
				this.match(WdlV1_1Parser.NOT);
				this.state = 448;
				this.expr();
				}
				break;
			case 10:
				{
				localctx = new UnarysignedContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 449;
				_la = this._input.LA(1);
				if(!(_la===57 || _la===58)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				this.state = 450;
				this.expr();
				}
				break;
			case 11:
				{
				localctx = new PrimitivesContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 451;
				this.primitive_literal();
				}
				break;
			case 12:
				{
				localctx = new Left_nameContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 452;
				this.match(WdlV1_1Parser.Identifier);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 465;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 463;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
					case 1:
						{
						localctx = new AtContext(this, new Expr_coreContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_core);
						this.state = 455;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 456;
						this.match(WdlV1_1Parser.LBRACK);
						this.state = 457;
						this.expr();
						this.state = 458;
						this.match(WdlV1_1Parser.RBRACK);
						}
						break;
					case 2:
						{
						localctx = new Get_nameContext(this, new Expr_coreContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, WdlV1_1Parser.RULE_expr_core);
						this.state = 460;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 461;
						this.match(WdlV1_1Parser.DOT);
						this.state = 462;
						this.match(WdlV1_1Parser.Identifier);
						}
						break;
					}
					}
				}
				this.state = 467;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public version(): VersionContext {
		let localctx: VersionContext = new VersionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, WdlV1_1Parser.RULE_version);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 468;
			this.match(WdlV1_1Parser.VERSION);
			this.state = 469;
			this.match(WdlV1_1Parser.ReleaseVersion);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public import_alias(): Import_aliasContext {
		let localctx: Import_aliasContext = new Import_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, WdlV1_1Parser.RULE_import_alias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 471;
			this.match(WdlV1_1Parser.ALIAS);
			this.state = 472;
			this.match(WdlV1_1Parser.Identifier);
			this.state = 473;
			this.match(WdlV1_1Parser.AS);
			this.state = 474;
			this.match(WdlV1_1Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public import_as(): Import_asContext {
		let localctx: Import_asContext = new Import_asContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, WdlV1_1Parser.RULE_import_as);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 476;
			this.match(WdlV1_1Parser.AS);
			this.state = 477;
			this.match(WdlV1_1Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public import_doc(): Import_docContext {
		let localctx: Import_docContext = new Import_docContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, WdlV1_1Parser.RULE_import_doc);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 479;
			this.match(WdlV1_1Parser.IMPORT);
			this.state = 480;
			this.string_();
			this.state = 482;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 481;
				this.import_as();
				}
			}

			this.state = 487;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===12) {
				{
				{
				this.state = 484;
				this.import_alias();
				}
				}
				this.state = 489;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public struct(): StructContext {
		let localctx: StructContext = new StructContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, WdlV1_1Parser.RULE_struct);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 490;
			this.match(WdlV1_1Parser.STRUCT);
			this.state = 491;
			this.match(WdlV1_1Parser.Identifier);
			this.state = 492;
			this.match(WdlV1_1Parser.LBRACE);
			this.state = 496;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2414870528) !== 0) || _la===70) {
				{
				{
				this.state = 493;
				this.unbound_decls();
				}
				}
				this.state = 498;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 499;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public meta_value(): Meta_valueContext {
		let localctx: Meta_valueContext = new Meta_valueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, WdlV1_1Parser.RULE_meta_value);
		try {
			this.state = 508;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 93:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 501;
				this.match(WdlV1_1Parser.MetaNull);
				}
				break;
			case 90:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 502;
				this.match(WdlV1_1Parser.MetaBool);
				}
				break;
			case 91:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 503;
				this.match(WdlV1_1Parser.MetaInt);
				}
				break;
			case 92:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 504;
				this.match(WdlV1_1Parser.MetaFloat);
				}
				break;
			case 94:
			case 95:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 505;
				this.meta_string();
				}
				break;
			case 96:
			case 99:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 506;
				this.meta_object();
				}
				break;
			case 97:
			case 98:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 507;
				this.meta_array();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public meta_string_part(): Meta_string_partContext {
		let localctx: Meta_string_partContext = new Meta_string_partContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, WdlV1_1Parser.RULE_meta_string_part);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 513;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===101) {
				{
				{
				this.state = 510;
				this.match(WdlV1_1Parser.MetaStringPart);
				}
				}
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public meta_string(): Meta_stringContext {
		let localctx: Meta_stringContext = new Meta_stringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, WdlV1_1Parser.RULE_meta_string);
		try {
			this.state = 524;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 95:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 516;
				this.match(WdlV1_1Parser.MetaDquote);
				this.state = 517;
				this.meta_string_part();
				this.state = 518;
				this.match(WdlV1_1Parser.MetaDquote);
				}
				break;
			case 94:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 520;
				this.match(WdlV1_1Parser.MetaSquote);
				this.state = 521;
				this.meta_string_part();
				this.state = 522;
				this.match(WdlV1_1Parser.MetaSquote);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public meta_array(): Meta_arrayContext {
		let localctx: Meta_arrayContext = new Meta_arrayContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, WdlV1_1Parser.RULE_meta_array);
		let _la: number;
		try {
			this.state = 538;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 97:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 526;
				this.match(WdlV1_1Parser.MetaEmptyArray);
				}
				break;
			case 98:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 527;
				this.match(WdlV1_1Parser.MetaLbrack);
				this.state = 528;
				this.meta_value();
				this.state = 533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===104) {
					{
					{
					this.state = 529;
					this.match(WdlV1_1Parser.MetaArrayComma);
					this.state = 530;
					this.meta_value();
					}
					}
					this.state = 535;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 536;
				_la = this._input.LA(1);
				if(!(_la===103 || _la===105)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public meta_object(): Meta_objectContext {
		let localctx: Meta_objectContext = new Meta_objectContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, WdlV1_1Parser.RULE_meta_object);
		let _la: number;
		try {
			this.state = 552;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 96:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 540;
				this.match(WdlV1_1Parser.MetaEmptyObject);
				}
				break;
			case 99:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 541;
				this.match(WdlV1_1Parser.MetaLbrace);
				this.state = 542;
				this.meta_object_kv();
				this.state = 547;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===110) {
					{
					{
					this.state = 543;
					this.match(WdlV1_1Parser.MetaObjectComma);
					this.state = 544;
					this.meta_object_kv();
					}
					}
					this.state = 549;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 550;
				_la = this._input.LA(1);
				if(!(_la===109 || _la===111)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public meta_object_kv(): Meta_object_kvContext {
		let localctx: Meta_object_kvContext = new Meta_object_kvContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, WdlV1_1Parser.RULE_meta_object_kv);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 554;
			this.match(WdlV1_1Parser.MetaObjectIdentifier);
			this.state = 555;
			this.match(WdlV1_1Parser.MetaObjectColon);
			this.state = 556;
			this.meta_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public meta_kv(): Meta_kvContext {
		let localctx: Meta_kvContext = new Meta_kvContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, WdlV1_1Parser.RULE_meta_kv);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 558;
			this.match(WdlV1_1Parser.MetaIdentifier);
			this.state = 559;
			this.match(WdlV1_1Parser.MetaColon);
			this.state = 560;
			this.meta_value();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter_meta(): Parameter_metaContext {
		let localctx: Parameter_metaContext = new Parameter_metaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, WdlV1_1Parser.RULE_parameter_meta);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 562;
			this.match(WdlV1_1Parser.PARAMETERMETA);
			this.state = 563;
			this.match(WdlV1_1Parser.BeginMeta);
			this.state = 567;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 564;
				this.meta_kv();
				}
				}
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 570;
			this.match(WdlV1_1Parser.EndMeta);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public meta(): MetaContext {
		let localctx: MetaContext = new MetaContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, WdlV1_1Parser.RULE_meta);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 572;
			this.match(WdlV1_1Parser.META);
			this.state = 573;
			this.match(WdlV1_1Parser.BeginMeta);
			this.state = 577;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===85) {
				{
				{
				this.state = 574;
				this.meta_kv();
				}
				}
				this.state = 579;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 580;
			this.match(WdlV1_1Parser.EndMeta);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public task_runtime_kv(): Task_runtime_kvContext {
		let localctx: Task_runtime_kvContext = new Task_runtime_kvContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, WdlV1_1Parser.RULE_task_runtime_kv);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 582;
			this.match(WdlV1_1Parser.Identifier);
			this.state = 583;
			this.match(WdlV1_1Parser.COLON);
			this.state = 584;
			this.expr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public task_runtime(): Task_runtimeContext {
		let localctx: Task_runtimeContext = new Task_runtimeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, WdlV1_1Parser.RULE_task_runtime);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 586;
			this.match(WdlV1_1Parser.RUNTIME);
			this.state = 587;
			this.match(WdlV1_1Parser.LBRACE);
			this.state = 591;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===70) {
				{
				{
				this.state = 588;
				this.task_runtime_kv();
				}
				}
				this.state = 593;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 594;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public task_input(): Task_inputContext {
		let localctx: Task_inputContext = new Task_inputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 82, WdlV1_1Parser.RULE_task_input);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 596;
			this.match(WdlV1_1Parser.INPUT);
			this.state = 597;
			this.match(WdlV1_1Parser.LBRACE);
			this.state = 601;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2414870528) !== 0) || _la===70) {
				{
				{
				this.state = 598;
				this.any_decls();
				}
				}
				this.state = 603;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 604;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public task_output(): Task_outputContext {
		let localctx: Task_outputContext = new Task_outputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, WdlV1_1Parser.RULE_task_output);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 606;
			this.match(WdlV1_1Parser.OUTPUT);
			this.state = 607;
			this.match(WdlV1_1Parser.LBRACE);
			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2414870528) !== 0) || _la===70) {
				{
				{
				this.state = 608;
				this.bound_decls();
				}
				}
				this.state = 613;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 614;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public task_command_string_part(): Task_command_string_partContext {
		let localctx: Task_command_string_partContext = new Task_command_string_partContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, WdlV1_1Parser.RULE_task_command_string_part);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 619;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===79) {
				{
				{
				this.state = 616;
				this.match(WdlV1_1Parser.CommandStringPart);
				}
				}
				this.state = 621;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public task_command_expr_part(): Task_command_expr_partContext {
		let localctx: Task_command_expr_partContext = new Task_command_expr_partContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, WdlV1_1Parser.RULE_task_command_expr_part);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 622;
			this.match(WdlV1_1Parser.StringCommandStart);
			this.state = 626;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 54, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 623;
					this.expression_placeholder_option();
					}
					}
				}
				this.state = 628;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 54, this._ctx);
			}
			this.state = 629;
			this.expr();
			this.state = 630;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public task_command_expr_with_string(): Task_command_expr_with_stringContext {
		let localctx: Task_command_expr_with_stringContext = new Task_command_expr_with_stringContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, WdlV1_1Parser.RULE_task_command_expr_with_string);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 632;
			this.task_command_expr_part();
			this.state = 633;
			this.task_command_string_part();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public task_command(): Task_commandContext {
		let localctx: Task_commandContext = new Task_commandContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, WdlV1_1Parser.RULE_task_command);
		let _la: number;
		try {
			this.state = 657;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 635;
				this.match(WdlV1_1Parser.COMMAND);
				this.state = 636;
				this.match(WdlV1_1Parser.BeginLBrace);
				this.state = 637;
				this.task_command_string_part();
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===77) {
					{
					{
					this.state = 638;
					this.task_command_expr_with_string();
					}
					}
					this.state = 643;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 644;
				this.match(WdlV1_1Parser.EndCommand);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 646;
				this.match(WdlV1_1Parser.COMMAND);
				this.state = 647;
				this.match(WdlV1_1Parser.BeginHereDoc);
				this.state = 648;
				this.task_command_string_part();
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===77) {
					{
					{
					this.state = 649;
					this.task_command_expr_with_string();
					}
					}
					this.state = 654;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 655;
				this.match(WdlV1_1Parser.EndCommand);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public task_element(): Task_elementContext {
		let localctx: Task_elementContext = new Task_elementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, WdlV1_1Parser.RULE_task_element);
		try {
			this.state = 666;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 659;
				this.task_input();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 660;
				this.task_output();
				}
				break;
			case 33:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 661;
				this.task_command();
				}
				break;
			case 19:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 662;
				this.task_runtime();
				}
				break;
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 31:
			case 70:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 663;
				this.bound_decls();
				}
				break;
			case 17:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 664;
				this.parameter_meta();
				}
				break;
			case 18:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 665;
				this.meta();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public task(): TaskContext {
		let localctx: TaskContext = new TaskContext(this, this._ctx, this.state);
		this.enterRule(localctx, 96, WdlV1_1Parser.RULE_task);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 668;
			this.match(WdlV1_1Parser.TASK);
			this.state = 669;
			this.match(WdlV1_1Parser.Identifier);
			this.state = 670;
			this.match(WdlV1_1Parser.LBRACE);
			this.state = 672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 671;
				this.task_element();
				}
				}
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 15)) & ~0x1F) === 0 && ((1 << (_la - 15)) & 335871) !== 0) || _la===70);
			this.state = 676;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public inner_workflow_element(): Inner_workflow_elementContext {
		let localctx: Inner_workflow_elementContext = new Inner_workflow_elementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 98, WdlV1_1Parser.RULE_inner_workflow_element);
		try {
			this.state = 682;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 31:
			case 70:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 678;
				this.bound_decls();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 679;
				this.call();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 680;
				this.scatter();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 681;
				this.conditional();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call_alias(): Call_aliasContext {
		let localctx: Call_aliasContext = new Call_aliasContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, WdlV1_1Parser.RULE_call_alias);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 684;
			this.match(WdlV1_1Parser.AS);
			this.state = 685;
			this.match(WdlV1_1Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call_input(): Call_inputContext {
		let localctx: Call_inputContext = new Call_inputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 102, WdlV1_1Parser.RULE_call_input);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 687;
			this.match(WdlV1_1Parser.Identifier);
			this.state = 690;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===52) {
				{
				this.state = 688;
				this.match(WdlV1_1Parser.EQUAL);
				this.state = 689;
				this.expr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call_inputs(): Call_inputsContext {
		let localctx: Call_inputsContext = new Call_inputsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 104, WdlV1_1Parser.RULE_call_inputs);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 692;
			this.match(WdlV1_1Parser.INPUT);
			this.state = 693;
			this.match(WdlV1_1Parser.COLON);
			this.state = 707;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===70) {
				{
				{
				this.state = 694;
				this.call_input();
				this.state = 699;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 695;
						this.match(WdlV1_1Parser.COMMA);
						this.state = 696;
						this.call_input();
						}
						}
					}
					this.state = 701;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 62, this._ctx);
				}
				this.state = 703;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===60) {
					{
					this.state = 702;
					this.match(WdlV1_1Parser.COMMA);
					}
				}

				}
				}
				this.state = 709;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call_body(): Call_bodyContext {
		let localctx: Call_bodyContext = new Call_bodyContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, WdlV1_1Parser.RULE_call_body);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 710;
			this.match(WdlV1_1Parser.LBRACE);
			this.state = 712;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 711;
				this.call_inputs();
				}
			}

			this.state = 714;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call_after(): Call_afterContext {
		let localctx: Call_afterContext = new Call_afterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, WdlV1_1Parser.RULE_call_after);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 716;
			this.match(WdlV1_1Parser.AFTER);
			this.state = 717;
			this.match(WdlV1_1Parser.Identifier);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call_name(): Call_nameContext {
		let localctx: Call_nameContext = new Call_nameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, WdlV1_1Parser.RULE_call_name);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 719;
			this.match(WdlV1_1Parser.Identifier);
			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===62) {
				{
				{
				this.state = 720;
				this.match(WdlV1_1Parser.DOT);
				this.state = 721;
				this.match(WdlV1_1Parser.Identifier);
				}
				}
				this.state = 726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public call(): CallContext {
		let localctx: CallContext = new CallContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, WdlV1_1Parser.RULE_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 727;
			this.match(WdlV1_1Parser.CALL);
			this.state = 728;
			this.call_name();
			this.state = 730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===13) {
				{
				this.state = 729;
				this.call_alias();
				}
			}

			this.state = 735;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===32) {
				{
				{
				this.state = 732;
				this.call_after();
				}
				}
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 739;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===40) {
				{
				this.state = 738;
				this.call_body();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public scatter(): ScatterContext {
		let localctx: ScatterContext = new ScatterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, WdlV1_1Parser.RULE_scatter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 741;
			this.match(WdlV1_1Parser.SCATTER);
			this.state = 742;
			this.match(WdlV1_1Parser.LPAREN);
			this.state = 743;
			this.match(WdlV1_1Parser.Identifier);
			this.state = 744;
			this.match(WdlV1_1Parser.In);
			this.state = 745;
			this.expr();
			this.state = 746;
			this.match(WdlV1_1Parser.RPAREN);
			this.state = 747;
			this.match(WdlV1_1Parser.LBRACE);
			this.state = 751;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2414871424) !== 0) || _la===70) {
				{
				{
				this.state = 748;
				this.inner_workflow_element();
				}
				}
				this.state = 753;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 754;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public conditional(): ConditionalContext {
		let localctx: ConditionalContext = new ConditionalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, WdlV1_1Parser.RULE_conditional);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 756;
			this.match(WdlV1_1Parser.IF);
			this.state = 757;
			this.match(WdlV1_1Parser.LPAREN);
			this.state = 758;
			this.expr();
			this.state = 759;
			this.match(WdlV1_1Parser.RPAREN);
			this.state = 760;
			this.match(WdlV1_1Parser.LBRACE);
			this.state = 764;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2414871424) !== 0) || _la===70) {
				{
				{
				this.state = 761;
				this.inner_workflow_element();
				}
				}
				this.state = 766;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 767;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public workflow_input(): Workflow_inputContext {
		let localctx: Workflow_inputContext = new Workflow_inputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, WdlV1_1Parser.RULE_workflow_input);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 769;
			this.match(WdlV1_1Parser.INPUT);
			this.state = 770;
			this.match(WdlV1_1Parser.LBRACE);
			this.state = 774;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2414870528) !== 0) || _la===70) {
				{
				{
				this.state = 771;
				this.any_decls();
				}
				}
				this.state = 776;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 777;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public workflow_output(): Workflow_outputContext {
		let localctx: Workflow_outputContext = new Workflow_outputContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, WdlV1_1Parser.RULE_workflow_output);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 779;
			this.match(WdlV1_1Parser.OUTPUT);
			this.state = 780;
			this.match(WdlV1_1Parser.LBRACE);
			this.state = 784;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2414870528) !== 0) || _la===70) {
				{
				{
				this.state = 781;
				this.bound_decls();
				}
				}
				this.state = 786;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 787;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public workflow_element(): Workflow_elementContext {
		let localctx: Workflow_elementContext = new Workflow_elementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, WdlV1_1Parser.RULE_workflow_element);
		try {
			this.state = 794;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				localctx = new InputContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 789;
				this.workflow_input();
				}
				break;
			case 16:
				localctx = new OutputContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 790;
				this.workflow_output();
				}
				break;
			case 7:
			case 8:
			case 9:
			case 20:
			case 21:
			case 22:
			case 23:
			case 24:
			case 25:
			case 26:
			case 27:
			case 31:
			case 70:
				localctx = new Inner_elementContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 791;
				this.inner_workflow_element();
				}
				break;
			case 17:
				localctx = new Parameter_meta_elementContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 792;
				this.parameter_meta();
				}
				break;
			case 18:
				localctx = new Meta_elementContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 793;
				this.meta();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public workflow(): WorkflowContext {
		let localctx: WorkflowContext = new WorkflowContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, WdlV1_1Parser.RULE_workflow);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 796;
			this.match(WdlV1_1Parser.WORKFLOW);
			this.state = 797;
			this.match(WdlV1_1Parser.Identifier);
			this.state = 798;
			this.match(WdlV1_1Parser.LBRACE);
			this.state = 802;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2415362944) !== 0) || _la===70) {
				{
				{
				this.state = 799;
				this.workflow_element();
				}
				}
				this.state = 804;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 805;
			this.match(WdlV1_1Parser.RBRACE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public document_element(): Document_elementContext {
		let localctx: Document_elementContext = new Document_elementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, WdlV1_1Parser.RULE_document_element);
		try {
			this.state = 810;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 3:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 807;
				this.import_doc();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 808;
				this.struct();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 809;
				this.task();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public document(): DocumentContext {
		let localctx: DocumentContext = new DocumentContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, WdlV1_1Parser.RULE_document);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 812;
			this.version();
			this.state = 816;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 104) !== 0)) {
				{
				{
				this.state = 813;
				this.document_element();
				}
				}
				this.state = 818;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 826;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===4) {
				{
				this.state = 819;
				this.workflow();
				this.state = 823;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 104) !== 0)) {
					{
					{
					this.state = 820;
					this.document_element();
					}
					}
					this.state = 825;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 828;
			this.match(WdlV1_1Parser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 17:
			return this.expr_infix0_sempred(localctx as Expr_infix0Context, predIndex);
		case 18:
			return this.expr_infix1_sempred(localctx as Expr_infix1Context, predIndex);
		case 19:
			return this.expr_infix2_sempred(localctx as Expr_infix2Context, predIndex);
		case 20:
			return this.expr_infix3_sempred(localctx as Expr_infix3Context, predIndex);
		case 21:
			return this.expr_infix4_sempred(localctx as Expr_infix4Context, predIndex);
		case 24:
			return this.expr_core_sempred(localctx as Expr_coreContext, predIndex);
		}
		return true;
	}
	private expr_infix0_sempred(localctx: Expr_infix0Context, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_infix1_sempred(localctx: Expr_infix1Context, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_infix2_sempred(localctx: Expr_infix2Context, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return this.precpred(this._ctx, 7);
		case 3:
			return this.precpred(this._ctx, 6);
		case 4:
			return this.precpred(this._ctx, 5);
		case 5:
			return this.precpred(this._ctx, 4);
		case 6:
			return this.precpred(this._ctx, 3);
		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_infix3_sempred(localctx: Expr_infix3Context, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 3);
		case 9:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_infix4_sempred(localctx: Expr_infix4Context, predIndex: number): boolean {
		switch (predIndex) {
		case 10:
			return this.precpred(this._ctx, 4);
		case 11:
			return this.precpred(this._ctx, 3);
		case 12:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expr_core_sempred(localctx: Expr_coreContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 6);
		case 14:
			return this.precpred(this._ctx, 5);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,113,831,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,1,0,1,0,1,0,1,0,1,0,1,0,1,0,
	1,1,1,1,1,1,1,1,1,1,3,1,143,8,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,
	1,3,3,3,156,8,3,1,4,1,4,1,4,1,4,3,4,162,8,4,1,5,1,5,1,5,1,6,1,6,1,6,1,6,
	1,6,1,7,1,7,3,7,174,8,7,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,3,9,184,8,9,1,9,
	1,9,3,9,188,8,9,1,10,5,10,191,8,10,10,10,12,10,194,9,10,1,11,1,11,5,11,
	198,8,11,10,11,12,11,201,9,11,1,11,1,11,1,11,1,12,1,12,1,12,1,13,1,13,1,
	13,5,13,212,8,13,10,13,12,13,215,9,13,1,13,1,13,1,13,1,13,1,13,5,13,222,
	8,13,10,13,12,13,225,9,13,1,13,1,13,3,13,229,8,13,1,14,1,14,1,14,1,14,1,
	14,3,14,236,8,14,1,15,1,15,1,16,1,16,1,17,1,17,1,17,1,17,1,17,1,17,5,17,
	248,8,17,10,17,12,17,251,9,17,1,18,1,18,1,18,1,18,1,18,1,18,5,18,259,8,
	18,10,18,12,18,262,9,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,
	19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,285,8,19,
	10,19,12,19,288,9,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,5,20,
	299,8,20,10,20,12,20,302,9,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
	21,1,21,1,21,1,21,5,21,316,8,21,10,21,12,21,319,9,21,1,22,1,22,1,23,1,23,
	1,24,1,24,1,24,1,24,1,24,1,24,5,24,331,8,24,10,24,12,24,334,9,24,1,24,3,
	24,337,8,24,3,24,339,8,24,1,24,1,24,1,24,1,24,1,24,5,24,346,8,24,10,24,
	12,24,349,9,24,1,24,3,24,352,8,24,5,24,354,8,24,10,24,12,24,357,9,24,1,
	24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
	1,24,5,24,375,8,24,10,24,12,24,378,9,24,1,24,3,24,381,8,24,5,24,383,8,24,
	10,24,12,24,386,9,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
	1,24,5,24,399,8,24,10,24,12,24,402,9,24,1,24,3,24,405,8,24,5,24,407,8,24,
	10,24,12,24,410,9,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
	1,24,5,24,423,8,24,10,24,12,24,426,9,24,1,24,3,24,429,8,24,5,24,431,8,24,
	10,24,12,24,434,9,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,
	1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,454,8,24,1,24,1,24,1,24,1,
	24,1,24,1,24,1,24,1,24,5,24,464,8,24,10,24,12,24,467,9,24,1,25,1,25,1,25,
	1,26,1,26,1,26,1,26,1,26,1,27,1,27,1,27,1,28,1,28,1,28,3,28,483,8,28,1,
	28,5,28,486,8,28,10,28,12,28,489,9,28,1,29,1,29,1,29,1,29,5,29,495,8,29,
	10,29,12,29,498,9,29,1,29,1,29,1,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,
	509,8,30,1,31,5,31,512,8,31,10,31,12,31,515,9,31,1,32,1,32,1,32,1,32,1,
	32,1,32,1,32,1,32,3,32,525,8,32,1,33,1,33,1,33,1,33,1,33,5,33,532,8,33,
	10,33,12,33,535,9,33,1,33,1,33,3,33,539,8,33,1,34,1,34,1,34,1,34,1,34,5,
	34,546,8,34,10,34,12,34,549,9,34,1,34,1,34,3,34,553,8,34,1,35,1,35,1,35,
	1,35,1,36,1,36,1,36,1,36,1,37,1,37,1,37,5,37,566,8,37,10,37,12,37,569,9,
	37,1,37,1,37,1,38,1,38,1,38,5,38,576,8,38,10,38,12,38,579,9,38,1,38,1,38,
	1,39,1,39,1,39,1,39,1,40,1,40,1,40,5,40,590,8,40,10,40,12,40,593,9,40,1,
	40,1,40,1,41,1,41,1,41,5,41,600,8,41,10,41,12,41,603,9,41,1,41,1,41,1,42,
	1,42,1,42,5,42,610,8,42,10,42,12,42,613,9,42,1,42,1,42,1,43,5,43,618,8,
	43,10,43,12,43,621,9,43,1,44,1,44,5,44,625,8,44,10,44,12,44,628,9,44,1,
	44,1,44,1,44,1,45,1,45,1,45,1,46,1,46,1,46,1,46,5,46,640,8,46,10,46,12,
	46,643,9,46,1,46,1,46,1,46,1,46,1,46,1,46,5,46,651,8,46,10,46,12,46,654,
	9,46,1,46,1,46,3,46,658,8,46,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,667,
	8,47,1,48,1,48,1,48,1,48,4,48,673,8,48,11,48,12,48,674,1,48,1,48,1,49,1,
	49,1,49,1,49,3,49,683,8,49,1,50,1,50,1,50,1,51,1,51,1,51,3,51,691,8,51,
	1,52,1,52,1,52,1,52,1,52,5,52,698,8,52,10,52,12,52,701,9,52,1,52,3,52,704,
	8,52,5,52,706,8,52,10,52,12,52,709,9,52,1,53,1,53,3,53,713,8,53,1,53,1,
	53,1,54,1,54,1,54,1,55,1,55,1,55,5,55,723,8,55,10,55,12,55,726,9,55,1,56,
	1,56,1,56,3,56,731,8,56,1,56,5,56,734,8,56,10,56,12,56,737,9,56,1,56,3,
	56,740,8,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,5,57,750,8,57,10,57,
	12,57,753,9,57,1,57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,5,58,763,8,58,10,
	58,12,58,766,9,58,1,58,1,58,1,59,1,59,1,59,5,59,773,8,59,10,59,12,59,776,
	9,59,1,59,1,59,1,60,1,60,1,60,5,60,783,8,60,10,60,12,60,786,9,60,1,60,1,
	60,1,61,1,61,1,61,1,61,1,61,3,61,795,8,61,1,62,1,62,1,62,1,62,5,62,801,
	8,62,10,62,12,62,804,9,62,1,62,1,62,1,63,1,63,1,63,3,63,811,8,63,1,64,1,
	64,5,64,815,8,64,10,64,12,64,818,9,64,1,64,1,64,5,64,822,8,64,10,64,12,
	64,825,9,64,3,64,827,8,64,1,64,1,64,1,64,0,6,34,36,38,40,42,48,65,0,2,4,
	6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
	56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,
	104,106,108,110,112,114,116,118,120,122,124,126,128,0,5,3,0,20,24,27,27,
	70,70,1,0,35,36,1,0,57,58,2,0,103,103,105,105,2,0,109,109,111,111,882,0,
	130,1,0,0,0,2,137,1,0,0,0,4,144,1,0,0,0,6,155,1,0,0,0,8,161,1,0,0,0,10,
	163,1,0,0,0,12,166,1,0,0,0,14,173,1,0,0,0,16,175,1,0,0,0,18,187,1,0,0,0,
	20,192,1,0,0,0,22,195,1,0,0,0,24,205,1,0,0,0,26,228,1,0,0,0,28,235,1,0,
	0,0,30,237,1,0,0,0,32,239,1,0,0,0,34,241,1,0,0,0,36,252,1,0,0,0,38,263,
	1,0,0,0,40,289,1,0,0,0,42,303,1,0,0,0,44,320,1,0,0,0,46,322,1,0,0,0,48,
	453,1,0,0,0,50,468,1,0,0,0,52,471,1,0,0,0,54,476,1,0,0,0,56,479,1,0,0,0,
	58,490,1,0,0,0,60,508,1,0,0,0,62,513,1,0,0,0,64,524,1,0,0,0,66,538,1,0,
	0,0,68,552,1,0,0,0,70,554,1,0,0,0,72,558,1,0,0,0,74,562,1,0,0,0,76,572,
	1,0,0,0,78,582,1,0,0,0,80,586,1,0,0,0,82,596,1,0,0,0,84,606,1,0,0,0,86,
	619,1,0,0,0,88,622,1,0,0,0,90,632,1,0,0,0,92,657,1,0,0,0,94,666,1,0,0,0,
	96,668,1,0,0,0,98,682,1,0,0,0,100,684,1,0,0,0,102,687,1,0,0,0,104,692,1,
	0,0,0,106,710,1,0,0,0,108,716,1,0,0,0,110,719,1,0,0,0,112,727,1,0,0,0,114,
	741,1,0,0,0,116,756,1,0,0,0,118,769,1,0,0,0,120,779,1,0,0,0,122,794,1,0,
	0,0,124,796,1,0,0,0,126,810,1,0,0,0,128,812,1,0,0,0,130,131,5,26,0,0,131,
	132,5,42,0,0,132,133,3,8,4,0,133,134,5,60,0,0,134,135,3,8,4,0,135,136,5,
	43,0,0,136,1,1,0,0,0,137,138,5,25,0,0,138,139,5,42,0,0,139,140,3,8,4,0,
	140,142,5,43,0,0,141,143,5,57,0,0,142,141,1,0,0,0,142,143,1,0,0,0,143,3,
	1,0,0,0,144,145,5,31,0,0,145,146,5,42,0,0,146,147,3,8,4,0,147,148,5,60,
	0,0,148,149,3,8,4,0,149,150,5,43,0,0,150,5,1,0,0,0,151,156,3,2,1,0,152,
	156,3,0,0,0,153,156,3,4,2,0,154,156,7,0,0,0,155,151,1,0,0,0,155,152,1,0,
	0,0,155,153,1,0,0,0,155,154,1,0,0,0,156,7,1,0,0,0,157,158,3,6,3,0,158,159,
	5,55,0,0,159,162,1,0,0,0,160,162,3,6,3,0,161,157,1,0,0,0,161,160,1,0,0,
	0,162,9,1,0,0,0,163,164,3,8,4,0,164,165,5,70,0,0,165,11,1,0,0,0,166,167,
	3,8,4,0,167,168,5,70,0,0,168,169,5,52,0,0,169,170,3,30,15,0,170,13,1,0,
	0,0,171,174,3,10,5,0,172,174,3,12,6,0,173,171,1,0,0,0,173,172,1,0,0,0,174,
	15,1,0,0,0,175,176,7,1,0,0,176,17,1,0,0,0,177,178,5,37,0,0,178,179,5,52,
	0,0,179,188,3,26,13,0,180,183,5,30,0,0,181,184,3,26,13,0,182,184,3,16,8,
	0,183,181,1,0,0,0,183,182,1,0,0,0,184,188,1,0,0,0,185,186,5,29,0,0,186,
	188,3,26,13,0,187,177,1,0,0,0,187,180,1,0,0,0,187,185,1,0,0,0,188,19,1,
	0,0,0,189,191,5,71,0,0,190,189,1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,
	192,193,1,0,0,0,193,21,1,0,0,0,194,192,1,0,0,0,195,199,5,77,0,0,196,198,
	3,18,9,0,197,196,1,0,0,0,198,201,1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,
	0,200,202,1,0,0,0,201,199,1,0,0,0,202,203,3,30,15,0,203,204,5,41,0,0,204,
	23,1,0,0,0,205,206,3,22,11,0,206,207,3,20,10,0,207,25,1,0,0,0,208,209,5,
	68,0,0,209,213,3,20,10,0,210,212,3,24,12,0,211,210,1,0,0,0,212,215,1,0,
	0,0,213,211,1,0,0,0,213,214,1,0,0,0,214,216,1,0,0,0,215,213,1,0,0,0,216,
	217,5,68,0,0,217,229,1,0,0,0,218,219,5,67,0,0,219,223,3,20,10,0,220,222,
	3,24,12,0,221,220,1,0,0,0,222,225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,
	0,224,226,1,0,0,0,225,223,1,0,0,0,226,227,5,67,0,0,227,229,1,0,0,0,228,
	208,1,0,0,0,228,218,1,0,0,0,229,27,1,0,0,0,230,236,5,37,0,0,231,236,3,16,
	8,0,232,236,3,26,13,0,233,236,5,34,0,0,234,236,5,70,0,0,235,230,1,0,0,0,
	235,231,1,0,0,0,235,232,1,0,0,0,235,233,1,0,0,0,235,234,1,0,0,0,236,29,
	1,0,0,0,237,238,3,32,16,0,238,31,1,0,0,0,239,240,3,34,17,0,240,33,1,0,0,
	0,241,242,6,17,-1,0,242,243,3,36,18,0,243,249,1,0,0,0,244,245,10,2,0,0,
	245,246,5,54,0,0,246,248,3,36,18,0,247,244,1,0,0,0,248,251,1,0,0,0,249,
	247,1,0,0,0,249,250,1,0,0,0,250,35,1,0,0,0,251,249,1,0,0,0,252,253,6,18,
	-1,0,253,254,3,38,19,0,254,260,1,0,0,0,255,256,10,2,0,0,256,257,5,53,0,
	0,257,259,3,38,19,0,258,255,1,0,0,0,259,262,1,0,0,0,260,258,1,0,0,0,260,
	261,1,0,0,0,261,37,1,0,0,0,262,260,1,0,0,0,263,264,6,19,-1,0,264,265,3,
	40,20,0,265,286,1,0,0,0,266,267,10,7,0,0,267,268,5,50,0,0,268,285,3,40,
	20,0,269,270,10,6,0,0,270,271,5,51,0,0,271,285,3,40,20,0,272,273,10,5,0,
	0,273,274,5,49,0,0,274,285,3,40,20,0,275,276,10,4,0,0,276,277,5,48,0,0,
	277,285,3,40,20,0,278,279,10,3,0,0,279,280,5,46,0,0,280,285,3,40,20,0,281,
	282,10,2,0,0,282,283,5,47,0,0,283,285,3,40,20,0,284,266,1,0,0,0,284,269,
	1,0,0,0,284,272,1,0,0,0,284,275,1,0,0,0,284,278,1,0,0,0,284,281,1,0,0,0,
	285,288,1,0,0,0,286,284,1,0,0,0,286,287,1,0,0,0,287,39,1,0,0,0,288,286,
	1,0,0,0,289,290,6,20,-1,0,290,291,3,42,21,0,291,300,1,0,0,0,292,293,10,
	3,0,0,293,294,5,57,0,0,294,299,3,42,21,0,295,296,10,2,0,0,296,297,5,58,
	0,0,297,299,3,42,21,0,298,292,1,0,0,0,298,295,1,0,0,0,299,302,1,0,0,0,300,
	298,1,0,0,0,300,301,1,0,0,0,301,41,1,0,0,0,302,300,1,0,0,0,303,304,6,21,
	-1,0,304,305,3,44,22,0,305,317,1,0,0,0,306,307,10,4,0,0,307,308,5,56,0,
	0,308,316,3,44,22,0,309,310,10,3,0,0,310,311,5,65,0,0,311,316,3,44,22,0,
	312,313,10,2,0,0,313,314,5,66,0,0,314,316,3,44,22,0,315,306,1,0,0,0,315,
	309,1,0,0,0,315,312,1,0,0,0,316,319,1,0,0,0,317,315,1,0,0,0,317,318,1,0,
	0,0,318,43,1,0,0,0,319,317,1,0,0,0,320,321,3,48,24,0,321,45,1,0,0,0,322,
	323,5,70,0,0,323,47,1,0,0,0,324,325,6,24,-1,0,325,326,5,70,0,0,326,338,
	5,38,0,0,327,332,3,30,15,0,328,329,5,60,0,0,329,331,3,30,15,0,330,328,1,
	0,0,0,331,334,1,0,0,0,332,330,1,0,0,0,332,333,1,0,0,0,333,336,1,0,0,0,334,
	332,1,0,0,0,335,337,5,60,0,0,336,335,1,0,0,0,336,337,1,0,0,0,337,339,1,
	0,0,0,338,327,1,0,0,0,338,339,1,0,0,0,339,340,1,0,0,0,340,454,5,39,0,0,
	341,355,5,42,0,0,342,347,3,30,15,0,343,344,5,60,0,0,344,346,3,30,15,0,345,
	343,1,0,0,0,346,349,1,0,0,0,347,345,1,0,0,0,347,348,1,0,0,0,348,351,1,0,
	0,0,349,347,1,0,0,0,350,352,5,60,0,0,351,350,1,0,0,0,351,352,1,0,0,0,352,
	354,1,0,0,0,353,342,1,0,0,0,354,357,1,0,0,0,355,353,1,0,0,0,355,356,1,0,
	0,0,356,358,1,0,0,0,357,355,1,0,0,0,358,454,5,43,0,0,359,360,5,38,0,0,360,
	361,3,30,15,0,361,362,5,60,0,0,362,363,3,30,15,0,363,364,5,39,0,0,364,454,
	1,0,0,0,365,384,5,40,0,0,366,367,3,30,15,0,367,368,5,45,0,0,368,376,3,30,
	15,0,369,370,5,60,0,0,370,371,3,30,15,0,371,372,5,45,0,0,372,373,3,30,15,
	0,373,375,1,0,0,0,374,369,1,0,0,0,375,378,1,0,0,0,376,374,1,0,0,0,376,377,
	1,0,0,0,377,380,1,0,0,0,378,376,1,0,0,0,379,381,5,60,0,0,380,379,1,0,0,
	0,380,381,1,0,0,0,381,383,1,0,0,0,382,366,1,0,0,0,383,386,1,0,0,0,384,382,
	1,0,0,0,384,385,1,0,0,0,385,387,1,0,0,0,386,384,1,0,0,0,387,454,5,41,0,
	0,388,389,5,28,0,0,389,408,5,40,0,0,390,391,3,46,23,0,391,392,5,45,0,0,
	392,400,3,30,15,0,393,394,5,60,0,0,394,395,3,46,23,0,395,396,5,45,0,0,396,
	397,3,30,15,0,397,399,1,0,0,0,398,393,1,0,0,0,399,402,1,0,0,0,400,398,1,
	0,0,0,400,401,1,0,0,0,401,404,1,0,0,0,402,400,1,0,0,0,403,405,5,60,0,0,
	404,403,1,0,0,0,404,405,1,0,0,0,405,407,1,0,0,0,406,390,1,0,0,0,407,410,
	1,0,0,0,408,406,1,0,0,0,408,409,1,0,0,0,409,411,1,0,0,0,410,408,1,0,0,0,
	411,454,5,41,0,0,412,413,5,70,0,0,413,432,5,40,0,0,414,415,3,46,23,0,415,
	416,5,45,0,0,416,424,3,30,15,0,417,418,5,60,0,0,418,419,3,46,23,0,419,420,
	5,45,0,0,420,421,3,30,15,0,421,423,1,0,0,0,422,417,1,0,0,0,423,426,1,0,
	0,0,424,422,1,0,0,0,424,425,1,0,0,0,425,428,1,0,0,0,426,424,1,0,0,0,427,
	429,5,60,0,0,428,427,1,0,0,0,428,429,1,0,0,0,429,431,1,0,0,0,430,414,1,
	0,0,0,431,434,1,0,0,0,432,430,1,0,0,0,432,433,1,0,0,0,433,435,1,0,0,0,434,
	432,1,0,0,0,435,454,5,41,0,0,436,437,5,9,0,0,437,438,3,30,15,0,438,439,
	5,10,0,0,439,440,3,30,15,0,440,441,5,11,0,0,441,442,3,30,15,0,442,454,1,
	0,0,0,443,444,5,38,0,0,444,445,3,30,15,0,445,446,5,39,0,0,446,454,1,0,0,
	0,447,448,5,63,0,0,448,454,3,30,15,0,449,450,7,2,0,0,450,454,3,30,15,0,
	451,454,3,28,14,0,452,454,5,70,0,0,453,324,1,0,0,0,453,341,1,0,0,0,453,
	359,1,0,0,0,453,365,1,0,0,0,453,388,1,0,0,0,453,412,1,0,0,0,453,436,1,0,
	0,0,453,443,1,0,0,0,453,447,1,0,0,0,453,449,1,0,0,0,453,451,1,0,0,0,453,
	452,1,0,0,0,454,465,1,0,0,0,455,456,10,6,0,0,456,457,5,42,0,0,457,458,3,
	30,15,0,458,459,5,43,0,0,459,464,1,0,0,0,460,461,10,5,0,0,461,462,5,62,
	0,0,462,464,5,70,0,0,463,455,1,0,0,0,463,460,1,0,0,0,464,467,1,0,0,0,465,
	463,1,0,0,0,465,466,1,0,0,0,466,49,1,0,0,0,467,465,1,0,0,0,468,469,5,2,
	0,0,469,470,5,81,0,0,470,51,1,0,0,0,471,472,5,12,0,0,472,473,5,70,0,0,473,
	474,5,13,0,0,474,475,5,70,0,0,475,53,1,0,0,0,476,477,5,13,0,0,477,478,5,
	70,0,0,478,55,1,0,0,0,479,480,5,3,0,0,480,482,3,26,13,0,481,483,3,54,27,
	0,482,481,1,0,0,0,482,483,1,0,0,0,483,487,1,0,0,0,484,486,3,52,26,0,485,
	484,1,0,0,0,486,489,1,0,0,0,487,485,1,0,0,0,487,488,1,0,0,0,488,57,1,0,
	0,0,489,487,1,0,0,0,490,491,5,6,0,0,491,492,5,70,0,0,492,496,5,40,0,0,493,
	495,3,10,5,0,494,493,1,0,0,0,495,498,1,0,0,0,496,494,1,0,0,0,496,497,1,
	0,0,0,497,499,1,0,0,0,498,496,1,0,0,0,499,500,5,41,0,0,500,59,1,0,0,0,501,
	509,5,93,0,0,502,509,5,90,0,0,503,509,5,91,0,0,504,509,5,92,0,0,505,509,
	3,64,32,0,506,509,3,68,34,0,507,509,3,66,33,0,508,501,1,0,0,0,508,502,1,
	0,0,0,508,503,1,0,0,0,508,504,1,0,0,0,508,505,1,0,0,0,508,506,1,0,0,0,508,
	507,1,0,0,0,509,61,1,0,0,0,510,512,5,101,0,0,511,510,1,0,0,0,512,515,1,
	0,0,0,513,511,1,0,0,0,513,514,1,0,0,0,514,63,1,0,0,0,515,513,1,0,0,0,516,
	517,5,95,0,0,517,518,3,62,31,0,518,519,5,95,0,0,519,525,1,0,0,0,520,521,
	5,94,0,0,521,522,3,62,31,0,522,523,5,94,0,0,523,525,1,0,0,0,524,516,1,0,
	0,0,524,520,1,0,0,0,525,65,1,0,0,0,526,539,5,97,0,0,527,528,5,98,0,0,528,
	533,3,60,30,0,529,530,5,104,0,0,530,532,3,60,30,0,531,529,1,0,0,0,532,535,
	1,0,0,0,533,531,1,0,0,0,533,534,1,0,0,0,534,536,1,0,0,0,535,533,1,0,0,0,
	536,537,7,3,0,0,537,539,1,0,0,0,538,526,1,0,0,0,538,527,1,0,0,0,539,67,
	1,0,0,0,540,553,5,96,0,0,541,542,5,99,0,0,542,547,3,70,35,0,543,544,5,110,
	0,0,544,546,3,70,35,0,545,543,1,0,0,0,546,549,1,0,0,0,547,545,1,0,0,0,547,
	548,1,0,0,0,548,550,1,0,0,0,549,547,1,0,0,0,550,551,7,4,0,0,551,553,1,0,
	0,0,552,540,1,0,0,0,552,541,1,0,0,0,553,69,1,0,0,0,554,555,5,107,0,0,555,
	556,5,108,0,0,556,557,3,60,30,0,557,71,1,0,0,0,558,559,5,85,0,0,559,560,
	5,86,0,0,560,561,3,60,30,0,561,73,1,0,0,0,562,563,5,17,0,0,563,567,5,82,
	0,0,564,566,3,72,36,0,565,564,1,0,0,0,566,569,1,0,0,0,567,565,1,0,0,0,567,
	568,1,0,0,0,568,570,1,0,0,0,569,567,1,0,0,0,570,571,5,87,0,0,571,75,1,0,
	0,0,572,573,5,18,0,0,573,577,5,82,0,0,574,576,3,72,36,0,575,574,1,0,0,0,
	576,579,1,0,0,0,577,575,1,0,0,0,577,578,1,0,0,0,578,580,1,0,0,0,579,577,
	1,0,0,0,580,581,5,87,0,0,581,77,1,0,0,0,582,583,5,70,0,0,583,584,5,45,0,
	0,584,585,3,30,15,0,585,79,1,0,0,0,586,587,5,19,0,0,587,591,5,40,0,0,588,
	590,3,78,39,0,589,588,1,0,0,0,590,593,1,0,0,0,591,589,1,0,0,0,591,592,1,
	0,0,0,592,594,1,0,0,0,593,591,1,0,0,0,594,595,5,41,0,0,595,81,1,0,0,0,596,
	597,5,15,0,0,597,601,5,40,0,0,598,600,3,14,7,0,599,598,1,0,0,0,600,603,
	1,0,0,0,601,599,1,0,0,0,601,602,1,0,0,0,602,604,1,0,0,0,603,601,1,0,0,0,
	604,605,5,41,0,0,605,83,1,0,0,0,606,607,5,16,0,0,607,611,5,40,0,0,608,610,
	3,12,6,0,609,608,1,0,0,0,610,613,1,0,0,0,611,609,1,0,0,0,611,612,1,0,0,
	0,612,614,1,0,0,0,613,611,1,0,0,0,614,615,5,41,0,0,615,85,1,0,0,0,616,618,
	5,79,0,0,617,616,1,0,0,0,618,621,1,0,0,0,619,617,1,0,0,0,619,620,1,0,0,
	0,620,87,1,0,0,0,621,619,1,0,0,0,622,626,5,77,0,0,623,625,3,18,9,0,624,
	623,1,0,0,0,625,628,1,0,0,0,626,624,1,0,0,0,626,627,1,0,0,0,627,629,1,0,
	0,0,628,626,1,0,0,0,629,630,3,30,15,0,630,631,5,41,0,0,631,89,1,0,0,0,632,
	633,3,88,44,0,633,634,3,86,43,0,634,91,1,0,0,0,635,636,5,33,0,0,636,637,
	5,74,0,0,637,641,3,86,43,0,638,640,3,90,45,0,639,638,1,0,0,0,640,643,1,
	0,0,0,641,639,1,0,0,0,641,642,1,0,0,0,642,644,1,0,0,0,643,641,1,0,0,0,644,
	645,5,78,0,0,645,658,1,0,0,0,646,647,5,33,0,0,647,648,5,73,0,0,648,652,
	3,86,43,0,649,651,3,90,45,0,650,649,1,0,0,0,651,654,1,0,0,0,652,650,1,0,
	0,0,652,653,1,0,0,0,653,655,1,0,0,0,654,652,1,0,0,0,655,656,5,78,0,0,656,
	658,1,0,0,0,657,635,1,0,0,0,657,646,1,0,0,0,658,93,1,0,0,0,659,667,3,82,
	41,0,660,667,3,84,42,0,661,667,3,92,46,0,662,667,3,80,40,0,663,667,3,12,
	6,0,664,667,3,74,37,0,665,667,3,76,38,0,666,659,1,0,0,0,666,660,1,0,0,0,
	666,661,1,0,0,0,666,662,1,0,0,0,666,663,1,0,0,0,666,664,1,0,0,0,666,665,
	1,0,0,0,667,95,1,0,0,0,668,669,5,5,0,0,669,670,5,70,0,0,670,672,5,40,0,
	0,671,673,3,94,47,0,672,671,1,0,0,0,673,674,1,0,0,0,674,672,1,0,0,0,674,
	675,1,0,0,0,675,676,1,0,0,0,676,677,5,41,0,0,677,97,1,0,0,0,678,683,3,12,
	6,0,679,683,3,112,56,0,680,683,3,114,57,0,681,683,3,116,58,0,682,678,1,
	0,0,0,682,679,1,0,0,0,682,680,1,0,0,0,682,681,1,0,0,0,683,99,1,0,0,0,684,
	685,5,13,0,0,685,686,5,70,0,0,686,101,1,0,0,0,687,690,5,70,0,0,688,689,
	5,52,0,0,689,691,3,30,15,0,690,688,1,0,0,0,690,691,1,0,0,0,691,103,1,0,
	0,0,692,693,5,15,0,0,693,707,5,45,0,0,694,699,3,102,51,0,695,696,5,60,0,
	0,696,698,3,102,51,0,697,695,1,0,0,0,698,701,1,0,0,0,699,697,1,0,0,0,699,
	700,1,0,0,0,700,703,1,0,0,0,701,699,1,0,0,0,702,704,5,60,0,0,703,702,1,
	0,0,0,703,704,1,0,0,0,704,706,1,0,0,0,705,694,1,0,0,0,706,709,1,0,0,0,707,
	705,1,0,0,0,707,708,1,0,0,0,708,105,1,0,0,0,709,707,1,0,0,0,710,712,5,40,
	0,0,711,713,3,104,52,0,712,711,1,0,0,0,712,713,1,0,0,0,713,714,1,0,0,0,
	714,715,5,41,0,0,715,107,1,0,0,0,716,717,5,32,0,0,717,718,5,70,0,0,718,
	109,1,0,0,0,719,724,5,70,0,0,720,721,5,62,0,0,721,723,5,70,0,0,722,720,
	1,0,0,0,723,726,1,0,0,0,724,722,1,0,0,0,724,725,1,0,0,0,725,111,1,0,0,0,
	726,724,1,0,0,0,727,728,5,8,0,0,728,730,3,110,55,0,729,731,3,100,50,0,730,
	729,1,0,0,0,730,731,1,0,0,0,731,735,1,0,0,0,732,734,3,108,54,0,733,732,
	1,0,0,0,734,737,1,0,0,0,735,733,1,0,0,0,735,736,1,0,0,0,736,739,1,0,0,0,
	737,735,1,0,0,0,738,740,3,106,53,0,739,738,1,0,0,0,739,740,1,0,0,0,740,
	113,1,0,0,0,741,742,5,7,0,0,742,743,5,38,0,0,743,744,5,70,0,0,744,745,5,
	14,0,0,745,746,3,30,15,0,746,747,5,39,0,0,747,751,5,40,0,0,748,750,3,98,
	49,0,749,748,1,0,0,0,750,753,1,0,0,0,751,749,1,0,0,0,751,752,1,0,0,0,752,
	754,1,0,0,0,753,751,1,0,0,0,754,755,5,41,0,0,755,115,1,0,0,0,756,757,5,
	9,0,0,757,758,5,38,0,0,758,759,3,30,15,0,759,760,5,39,0,0,760,764,5,40,
	0,0,761,763,3,98,49,0,762,761,1,0,0,0,763,766,1,0,0,0,764,762,1,0,0,0,764,
	765,1,0,0,0,765,767,1,0,0,0,766,764,1,0,0,0,767,768,5,41,0,0,768,117,1,
	0,0,0,769,770,5,15,0,0,770,774,5,40,0,0,771,773,3,14,7,0,772,771,1,0,0,
	0,773,776,1,0,0,0,774,772,1,0,0,0,774,775,1,0,0,0,775,777,1,0,0,0,776,774,
	1,0,0,0,777,778,5,41,0,0,778,119,1,0,0,0,779,780,5,16,0,0,780,784,5,40,
	0,0,781,783,3,12,6,0,782,781,1,0,0,0,783,786,1,0,0,0,784,782,1,0,0,0,784,
	785,1,0,0,0,785,787,1,0,0,0,786,784,1,0,0,0,787,788,5,41,0,0,788,121,1,
	0,0,0,789,795,3,118,59,0,790,795,3,120,60,0,791,795,3,98,49,0,792,795,3,
	74,37,0,793,795,3,76,38,0,794,789,1,0,0,0,794,790,1,0,0,0,794,791,1,0,0,
	0,794,792,1,0,0,0,794,793,1,0,0,0,795,123,1,0,0,0,796,797,5,4,0,0,797,798,
	5,70,0,0,798,802,5,40,0,0,799,801,3,122,61,0,800,799,1,0,0,0,801,804,1,
	0,0,0,802,800,1,0,0,0,802,803,1,0,0,0,803,805,1,0,0,0,804,802,1,0,0,0,805,
	806,5,41,0,0,806,125,1,0,0,0,807,811,3,56,28,0,808,811,3,58,29,0,809,811,
	3,96,48,0,810,807,1,0,0,0,810,808,1,0,0,0,810,809,1,0,0,0,811,127,1,0,0,
	0,812,816,3,50,25,0,813,815,3,126,63,0,814,813,1,0,0,0,815,818,1,0,0,0,
	816,814,1,0,0,0,816,817,1,0,0,0,817,826,1,0,0,0,818,816,1,0,0,0,819,823,
	3,124,62,0,820,822,3,126,63,0,821,820,1,0,0,0,822,825,1,0,0,0,823,821,1,
	0,0,0,823,824,1,0,0,0,824,827,1,0,0,0,825,823,1,0,0,0,826,819,1,0,0,0,826,
	827,1,0,0,0,827,828,1,0,0,0,828,829,5,0,0,1,829,129,1,0,0,0,80,142,155,
	161,173,183,187,192,199,213,223,228,235,249,260,284,286,298,300,315,317,
	332,336,338,347,351,355,376,380,384,400,404,408,424,428,432,453,463,465,
	482,487,496,508,513,524,533,538,547,552,567,577,591,601,611,619,626,641,
	652,657,666,674,682,690,699,703,707,712,724,730,735,739,751,764,774,784,
	794,802,810,816,823,826];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!WdlV1_1Parser.__ATN) {
			WdlV1_1Parser.__ATN = new ATNDeserializer().deserialize(WdlV1_1Parser._serializedATN);
		}

		return WdlV1_1Parser.__ATN;
	}


	static DecisionsToDFA = WdlV1_1Parser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Map_typeContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MAP(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MAP, 0);
	}
	public LBRACK(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACK, 0);
	}
	public wdl_type_list(): Wdl_typeContext[] {
		return this.getTypedRuleContexts(Wdl_typeContext) as Wdl_typeContext[];
	}
	public wdl_type(i: number): Wdl_typeContext {
		return this.getTypedRuleContext(Wdl_typeContext, i) as Wdl_typeContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(WdlV1_1Parser.COMMA, 0);
	}
	public RBRACK(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACK, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_map_type;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMap_type) {
	 		listener.enterMap_type(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMap_type) {
	 		listener.exitMap_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMap_type) {
			return visitor.visitMap_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Array_typeContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ARRAY(): TerminalNode {
		return this.getToken(WdlV1_1Parser.ARRAY, 0);
	}
	public LBRACK(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACK, 0);
	}
	public wdl_type(): Wdl_typeContext {
		return this.getTypedRuleContext(Wdl_typeContext, 0) as Wdl_typeContext;
	}
	public RBRACK(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACK, 0);
	}
	public PLUS(): TerminalNode {
		return this.getToken(WdlV1_1Parser.PLUS, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_array_type;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterArray_type) {
	 		listener.enterArray_type(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitArray_type) {
	 		listener.exitArray_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitArray_type) {
			return visitor.visitArray_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Pair_typeContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PAIR(): TerminalNode {
		return this.getToken(WdlV1_1Parser.PAIR, 0);
	}
	public LBRACK(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACK, 0);
	}
	public wdl_type_list(): Wdl_typeContext[] {
		return this.getTypedRuleContexts(Wdl_typeContext) as Wdl_typeContext[];
	}
	public wdl_type(i: number): Wdl_typeContext {
		return this.getTypedRuleContext(Wdl_typeContext, i) as Wdl_typeContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(WdlV1_1Parser.COMMA, 0);
	}
	public RBRACK(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACK, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_pair_type;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterPair_type) {
	 		listener.enterPair_type(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitPair_type) {
	 		listener.exitPair_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitPair_type) {
			return visitor.visitPair_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Type_baseContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public array_type(): Array_typeContext {
		return this.getTypedRuleContext(Array_typeContext, 0) as Array_typeContext;
	}
	public map_type(): Map_typeContext {
		return this.getTypedRuleContext(Map_typeContext, 0) as Map_typeContext;
	}
	public pair_type(): Pair_typeContext {
		return this.getTypedRuleContext(Pair_typeContext, 0) as Pair_typeContext;
	}
	public STRING(): TerminalNode {
		return this.getToken(WdlV1_1Parser.STRING, 0);
	}
	public FILE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.FILE, 0);
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.BOOLEAN, 0);
	}
	public INT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.INT, 0);
	}
	public FLOAT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.FLOAT, 0);
	}
	public OBJECT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.OBJECT, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_type_base;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterType_base) {
	 		listener.enterType_base(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitType_base) {
	 		listener.exitType_base(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitType_base) {
			return visitor.visitType_base(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Wdl_typeContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public type_base(): Type_baseContext {
		return this.getTypedRuleContext(Type_baseContext, 0) as Type_baseContext;
	}
	public OPTIONAL(): TerminalNode {
		return this.getToken(WdlV1_1Parser.OPTIONAL, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_wdl_type;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterWdl_type) {
	 		listener.enterWdl_type(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitWdl_type) {
	 		listener.exitWdl_type(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitWdl_type) {
			return visitor.visitWdl_type(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Unbound_declsContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public wdl_type(): Wdl_typeContext {
		return this.getTypedRuleContext(Wdl_typeContext, 0) as Wdl_typeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_unbound_decls;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterUnbound_decls) {
	 		listener.enterUnbound_decls(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitUnbound_decls) {
	 		listener.exitUnbound_decls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitUnbound_decls) {
			return visitor.visitUnbound_decls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Bound_declsContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public wdl_type(): Wdl_typeContext {
		return this.getTypedRuleContext(Wdl_typeContext, 0) as Wdl_typeContext;
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(WdlV1_1Parser.EQUAL, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_bound_decls;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterBound_decls) {
	 		listener.enterBound_decls(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitBound_decls) {
	 		listener.exitBound_decls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitBound_decls) {
			return visitor.visitBound_decls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Any_declsContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public unbound_decls(): Unbound_declsContext {
		return this.getTypedRuleContext(Unbound_declsContext, 0) as Unbound_declsContext;
	}
	public bound_decls(): Bound_declsContext {
		return this.getTypedRuleContext(Bound_declsContext, 0) as Bound_declsContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_any_decls;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterAny_decls) {
	 		listener.enterAny_decls(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitAny_decls) {
	 		listener.exitAny_decls(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitAny_decls) {
			return visitor.visitAny_decls(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IntLiteral(): TerminalNode {
		return this.getToken(WdlV1_1Parser.IntLiteral, 0);
	}
	public FloatLiteral(): TerminalNode {
		return this.getToken(WdlV1_1Parser.FloatLiteral, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_number;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterNumber) {
	 		listener.enterNumber(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitNumber) {
	 		listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_placeholder_optionContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BoolLiteral(): TerminalNode {
		return this.getToken(WdlV1_1Parser.BoolLiteral, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(WdlV1_1Parser.EQUAL, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public DEFAULTEQUAL(): TerminalNode {
		return this.getToken(WdlV1_1Parser.DEFAULTEQUAL, 0);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public SEPEQUAL(): TerminalNode {
		return this.getToken(WdlV1_1Parser.SEPEQUAL, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_expression_placeholder_option;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterExpression_placeholder_option) {
	 		listener.enterExpression_placeholder_option(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitExpression_placeholder_option) {
	 		listener.exitExpression_placeholder_option(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitExpression_placeholder_option) {
			return visitor.visitExpression_placeholder_option(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_partContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringPart_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.StringPart);
	}
	public StringPart(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.StringPart, i);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_string_part;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterString_part) {
	 		listener.enterString_part(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitString_part) {
	 		listener.exitString_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitString_part) {
			return visitor.visitString_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_expr_partContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringCommandStart(): TerminalNode {
		return this.getToken(WdlV1_1Parser.StringCommandStart, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public expression_placeholder_option_list(): Expression_placeholder_optionContext[] {
		return this.getTypedRuleContexts(Expression_placeholder_optionContext) as Expression_placeholder_optionContext[];
	}
	public expression_placeholder_option(i: number): Expression_placeholder_optionContext {
		return this.getTypedRuleContext(Expression_placeholder_optionContext, i) as Expression_placeholder_optionContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_string_expr_part;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterString_expr_part) {
	 		listener.enterString_expr_part(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitString_expr_part) {
	 		listener.exitString_expr_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitString_expr_part) {
			return visitor.visitString_expr_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class String_expr_with_string_partContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public string_expr_part(): String_expr_partContext {
		return this.getTypedRuleContext(String_expr_partContext, 0) as String_expr_partContext;
	}
	public string_part(): String_partContext {
		return this.getTypedRuleContext(String_partContext, 0) as String_partContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_string_expr_with_string_part;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterString_expr_with_string_part) {
	 		listener.enterString_expr_with_string_part(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitString_expr_with_string_part) {
	 		listener.exitString_expr_with_string_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitString_expr_with_string_part) {
			return visitor.visitString_expr_with_string_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DQUOTE_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.DQUOTE);
	}
	public DQUOTE(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.DQUOTE, i);
	}
	public string_part(): String_partContext {
		return this.getTypedRuleContext(String_partContext, 0) as String_partContext;
	}
	public string_expr_with_string_part_list(): String_expr_with_string_partContext[] {
		return this.getTypedRuleContexts(String_expr_with_string_partContext) as String_expr_with_string_partContext[];
	}
	public string_expr_with_string_part(i: number): String_expr_with_string_partContext {
		return this.getTypedRuleContext(String_expr_with_string_partContext, i) as String_expr_with_string_partContext;
	}
	public SQUOTE_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.SQUOTE);
	}
	public SQUOTE(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.SQUOTE, i);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_string;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterString) {
	 		listener.enterString(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitString) {
	 		listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Primitive_literalContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BoolLiteral(): TerminalNode {
		return this.getToken(WdlV1_1Parser.BoolLiteral, 0);
	}
	public number_(): NumberContext {
		return this.getTypedRuleContext(NumberContext, 0) as NumberContext;
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public NONELITERAL(): TerminalNode {
		return this.getToken(WdlV1_1Parser.NONELITERAL, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_primitive_literal;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterPrimitive_literal) {
	 		listener.enterPrimitive_literal(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitPrimitive_literal) {
	 		listener.exitPrimitive_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitPrimitive_literal) {
			return visitor.visitPrimitive_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_infix(): Expr_infixContext {
		return this.getTypedRuleContext(Expr_infixContext, 0) as Expr_infixContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_expr;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitExpr) {
			return visitor.visitExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_infixContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_expr_infix;
	}
	public override copyFrom(ctx: Expr_infixContext): void {
		super.copyFrom(ctx);
	}
}
export class Infix0Context extends Expr_infixContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infixContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix0(): Expr_infix0Context {
		return this.getTypedRuleContext(Expr_infix0Context, 0) as Expr_infix0Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterInfix0) {
	 		listener.enterInfix0(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitInfix0) {
	 		listener.exitInfix0(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitInfix0) {
			return visitor.visitInfix0(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_infix0Context extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_expr_infix0;
	}
	public override copyFrom(ctx: Expr_infix0Context): void {
		super.copyFrom(ctx);
	}
}
export class Infix1Context extends Expr_infix0Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix0Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix1(): Expr_infix1Context {
		return this.getTypedRuleContext(Expr_infix1Context, 0) as Expr_infix1Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterInfix1) {
	 		listener.enterInfix1(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitInfix1) {
	 		listener.exitInfix1(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitInfix1) {
			return visitor.visitInfix1(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LorContext extends Expr_infix0Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix0Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix0(): Expr_infix0Context {
		return this.getTypedRuleContext(Expr_infix0Context, 0) as Expr_infix0Context;
	}
	public OR(): TerminalNode {
		return this.getToken(WdlV1_1Parser.OR, 0);
	}
	public expr_infix1(): Expr_infix1Context {
		return this.getTypedRuleContext(Expr_infix1Context, 0) as Expr_infix1Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterLor) {
	 		listener.enterLor(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitLor) {
	 		listener.exitLor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitLor) {
			return visitor.visitLor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_infix1Context extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_expr_infix1;
	}
	public override copyFrom(ctx: Expr_infix1Context): void {
		super.copyFrom(ctx);
	}
}
export class Infix2Context extends Expr_infix1Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix1Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix2(): Expr_infix2Context {
		return this.getTypedRuleContext(Expr_infix2Context, 0) as Expr_infix2Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterInfix2) {
	 		listener.enterInfix2(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitInfix2) {
	 		listener.exitInfix2(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitInfix2) {
			return visitor.visitInfix2(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LandContext extends Expr_infix1Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix1Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix1(): Expr_infix1Context {
		return this.getTypedRuleContext(Expr_infix1Context, 0) as Expr_infix1Context;
	}
	public AND(): TerminalNode {
		return this.getToken(WdlV1_1Parser.AND, 0);
	}
	public expr_infix2(): Expr_infix2Context {
		return this.getTypedRuleContext(Expr_infix2Context, 0) as Expr_infix2Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterLand) {
	 		listener.enterLand(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitLand) {
	 		listener.exitLand(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitLand) {
			return visitor.visitLand(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_infix2Context extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_expr_infix2;
	}
	public override copyFrom(ctx: Expr_infix2Context): void {
		super.copyFrom(ctx);
	}
}
export class EqeqContext extends Expr_infix2Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix2(): Expr_infix2Context {
		return this.getTypedRuleContext(Expr_infix2Context, 0) as Expr_infix2Context;
	}
	public EQUALITY(): TerminalNode {
		return this.getToken(WdlV1_1Parser.EQUALITY, 0);
	}
	public expr_infix3(): Expr_infix3Context {
		return this.getTypedRuleContext(Expr_infix3Context, 0) as Expr_infix3Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterEqeq) {
	 		listener.enterEqeq(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitEqeq) {
	 		listener.exitEqeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitEqeq) {
			return visitor.visitEqeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LtContext extends Expr_infix2Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix2(): Expr_infix2Context {
		return this.getTypedRuleContext(Expr_infix2Context, 0) as Expr_infix2Context;
	}
	public LT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LT, 0);
	}
	public expr_infix3(): Expr_infix3Context {
		return this.getTypedRuleContext(Expr_infix3Context, 0) as Expr_infix3Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterLt) {
	 		listener.enterLt(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitLt) {
	 		listener.exitLt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitLt) {
			return visitor.visitLt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Infix3Context extends Expr_infix2Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix3(): Expr_infix3Context {
		return this.getTypedRuleContext(Expr_infix3Context, 0) as Expr_infix3Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterInfix3) {
	 		listener.enterInfix3(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitInfix3) {
	 		listener.exitInfix3(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitInfix3) {
			return visitor.visitInfix3(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GteContext extends Expr_infix2Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix2(): Expr_infix2Context {
		return this.getTypedRuleContext(Expr_infix2Context, 0) as Expr_infix2Context;
	}
	public GTE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.GTE, 0);
	}
	public expr_infix3(): Expr_infix3Context {
		return this.getTypedRuleContext(Expr_infix3Context, 0) as Expr_infix3Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterGte) {
	 		listener.enterGte(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitGte) {
	 		listener.exitGte(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitGte) {
			return visitor.visitGte(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NeqContext extends Expr_infix2Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix2(): Expr_infix2Context {
		return this.getTypedRuleContext(Expr_infix2Context, 0) as Expr_infix2Context;
	}
	public NOTEQUAL(): TerminalNode {
		return this.getToken(WdlV1_1Parser.NOTEQUAL, 0);
	}
	public expr_infix3(): Expr_infix3Context {
		return this.getTypedRuleContext(Expr_infix3Context, 0) as Expr_infix3Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterNeq) {
	 		listener.enterNeq(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitNeq) {
	 		listener.exitNeq(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitNeq) {
			return visitor.visitNeq(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LteContext extends Expr_infix2Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix2(): Expr_infix2Context {
		return this.getTypedRuleContext(Expr_infix2Context, 0) as Expr_infix2Context;
	}
	public LTE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LTE, 0);
	}
	public expr_infix3(): Expr_infix3Context {
		return this.getTypedRuleContext(Expr_infix3Context, 0) as Expr_infix3Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterLte) {
	 		listener.enterLte(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitLte) {
	 		listener.exitLte(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitLte) {
			return visitor.visitLte(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class GtContext extends Expr_infix2Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix2Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix2(): Expr_infix2Context {
		return this.getTypedRuleContext(Expr_infix2Context, 0) as Expr_infix2Context;
	}
	public GT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.GT, 0);
	}
	public expr_infix3(): Expr_infix3Context {
		return this.getTypedRuleContext(Expr_infix3Context, 0) as Expr_infix3Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterGt) {
	 		listener.enterGt(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitGt) {
	 		listener.exitGt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitGt) {
			return visitor.visitGt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_infix3Context extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_expr_infix3;
	}
	public override copyFrom(ctx: Expr_infix3Context): void {
		super.copyFrom(ctx);
	}
}
export class AddContext extends Expr_infix3Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix3(): Expr_infix3Context {
		return this.getTypedRuleContext(Expr_infix3Context, 0) as Expr_infix3Context;
	}
	public PLUS(): TerminalNode {
		return this.getToken(WdlV1_1Parser.PLUS, 0);
	}
	public expr_infix4(): Expr_infix4Context {
		return this.getTypedRuleContext(Expr_infix4Context, 0) as Expr_infix4Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterAdd) {
	 		listener.enterAdd(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitAdd) {
	 		listener.exitAdd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitAdd) {
			return visitor.visitAdd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SubContext extends Expr_infix3Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix3(): Expr_infix3Context {
		return this.getTypedRuleContext(Expr_infix3Context, 0) as Expr_infix3Context;
	}
	public MINUS(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MINUS, 0);
	}
	public expr_infix4(): Expr_infix4Context {
		return this.getTypedRuleContext(Expr_infix4Context, 0) as Expr_infix4Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterSub) {
	 		listener.enterSub(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitSub) {
	 		listener.exitSub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitSub) {
			return visitor.visitSub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Infix4Context extends Expr_infix3Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix3Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix4(): Expr_infix4Context {
		return this.getTypedRuleContext(Expr_infix4Context, 0) as Expr_infix4Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterInfix4) {
	 		listener.enterInfix4(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitInfix4) {
	 		listener.exitInfix4(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitInfix4) {
			return visitor.visitInfix4(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_infix4Context extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_expr_infix4;
	}
	public override copyFrom(ctx: Expr_infix4Context): void {
		super.copyFrom(ctx);
	}
}
export class ModContext extends Expr_infix4Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix4Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix4(): Expr_infix4Context {
		return this.getTypedRuleContext(Expr_infix4Context, 0) as Expr_infix4Context;
	}
	public MOD(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MOD, 0);
	}
	public expr_infix5(): Expr_infix5Context {
		return this.getTypedRuleContext(Expr_infix5Context, 0) as Expr_infix5Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMod) {
	 		listener.enterMod(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMod) {
	 		listener.exitMod(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMod) {
			return visitor.visitMod(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class MulContext extends Expr_infix4Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix4Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix4(): Expr_infix4Context {
		return this.getTypedRuleContext(Expr_infix4Context, 0) as Expr_infix4Context;
	}
	public STAR(): TerminalNode {
		return this.getToken(WdlV1_1Parser.STAR, 0);
	}
	public expr_infix5(): Expr_infix5Context {
		return this.getTypedRuleContext(Expr_infix5Context, 0) as Expr_infix5Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMul) {
	 		listener.enterMul(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMul) {
	 		listener.exitMul(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMul) {
			return visitor.visitMul(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DivideContext extends Expr_infix4Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix4Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix4(): Expr_infix4Context {
		return this.getTypedRuleContext(Expr_infix4Context, 0) as Expr_infix4Context;
	}
	public DIVIDE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.DIVIDE, 0);
	}
	public expr_infix5(): Expr_infix5Context {
		return this.getTypedRuleContext(Expr_infix5Context, 0) as Expr_infix5Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterDivide) {
	 		listener.enterDivide(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitDivide) {
	 		listener.exitDivide(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitDivide) {
			return visitor.visitDivide(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Infix5Context extends Expr_infix4Context {
	constructor(parser: WdlV1_1Parser, ctx: Expr_infix4Context) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_infix5(): Expr_infix5Context {
		return this.getTypedRuleContext(Expr_infix5Context, 0) as Expr_infix5Context;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterInfix5) {
	 		listener.enterInfix5(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitInfix5) {
	 		listener.exitInfix5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitInfix5) {
			return visitor.visitInfix5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_infix5Context extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr_core(): Expr_coreContext {
		return this.getTypedRuleContext(Expr_coreContext, 0) as Expr_coreContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_expr_infix5;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterExpr_infix5) {
	 		listener.enterExpr_infix5(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitExpr_infix5) {
	 		listener.exitExpr_infix5(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitExpr_infix5) {
			return visitor.visitExpr_infix5(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MemberContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_member;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMember) {
	 		listener.enterMember(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMember) {
	 		listener.exitMember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMember) {
			return visitor.visitMember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expr_coreContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_expr_core;
	}
	public override copyFrom(ctx: Expr_coreContext): void {
		super.copyFrom(ctx);
	}
}
export class Pair_literalContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LPAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA(): TerminalNode {
		return this.getToken(WdlV1_1Parser.COMMA, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RPAREN, 0);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterPair_literal) {
	 		listener.enterPair_literal(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitPair_literal) {
	 		listener.exitPair_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitPair_literal) {
			return visitor.visitPair_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class UnarysignedContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(WdlV1_1Parser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MINUS, 0);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterUnarysigned) {
	 		listener.enterUnarysigned(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitUnarysigned) {
	 		listener.exitUnarysigned(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitUnarysigned) {
			return visitor.visitUnarysigned(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ApplyContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LPAREN, 0);
	}
	public RPAREN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RPAREN, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.COMMA, i);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterApply) {
	 		listener.enterApply(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitApply) {
	 		listener.exitApply(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitApply) {
			return visitor.visitApply(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Expression_groupContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RPAREN, 0);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterExpression_group) {
	 		listener.enterExpression_group(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitExpression_group) {
	 		listener.exitExpression_group(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitExpression_group) {
			return visitor.visitExpression_group(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PrimitivesContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public primitive_literal(): Primitive_literalContext {
		return this.getTypedRuleContext(Primitive_literalContext, 0) as Primitive_literalContext;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterPrimitives) {
	 		listener.enterPrimitives(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitPrimitives) {
	 		listener.exitPrimitives(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitPrimitives) {
			return visitor.visitPrimitives(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Left_nameContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterLeft_name) {
	 		listener.enterLeft_name(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitLeft_name) {
	 		listener.exitLeft_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitLeft_name) {
			return visitor.visitLeft_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AtContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_core(): Expr_coreContext {
		return this.getTypedRuleContext(Expr_coreContext, 0) as Expr_coreContext;
	}
	public LBRACK(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACK, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RBRACK(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACK, 0);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterAt) {
	 		listener.enterAt(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitAt) {
	 		listener.exitAt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitAt) {
			return visitor.visitAt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NegateContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.NOT, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterNegate) {
	 		listener.enterNegate(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitNegate) {
	 		listener.exitNegate(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitNegate) {
			return visitor.visitNegate(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Map_literalContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.COLON, i);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.COMMA, i);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMap_literal) {
	 		listener.enterMap_literal(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMap_literal) {
	 		listener.exitMap_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMap_literal) {
			return visitor.visitMap_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IfthenelseContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IF(): TerminalNode {
		return this.getToken(WdlV1_1Parser.IF, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public THEN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.THEN, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.ELSE, 0);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterIfthenelse) {
	 		listener.enterIfthenelse(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitIfthenelse) {
	 		listener.exitIfthenelse(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitIfthenelse) {
			return visitor.visitIfthenelse(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Get_nameContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expr_core(): Expr_coreContext {
		return this.getTypedRuleContext(Expr_coreContext, 0) as Expr_coreContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.DOT, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterGet_name) {
	 		listener.enterGet_name(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitGet_name) {
	 		listener.exitGet_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitGet_name) {
			return visitor.visitGet_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Object_literalContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OBJECTLITERAL(): TerminalNode {
		return this.getToken(WdlV1_1Parser.OBJECTLITERAL, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public member_list(): MemberContext[] {
		return this.getTypedRuleContexts(MemberContext) as MemberContext[];
	}
	public member(i: number): MemberContext {
		return this.getTypedRuleContext(MemberContext, i) as MemberContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.COLON, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.COMMA, i);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterObject_literal) {
	 		listener.enterObject_literal(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitObject_literal) {
	 		listener.exitObject_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitObject_literal) {
			return visitor.visitObject_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Array_literalContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRACK(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACK, 0);
	}
	public RBRACK(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACK, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.COMMA, i);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterArray_literal) {
	 		listener.enterArray_literal(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitArray_literal) {
	 		listener.exitArray_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitArray_literal) {
			return visitor.visitArray_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Struct_literalContext extends Expr_coreContext {
	constructor(parser: WdlV1_1Parser, ctx: Expr_coreContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public member_list(): MemberContext[] {
		return this.getTypedRuleContexts(MemberContext) as MemberContext[];
	}
	public member(i: number): MemberContext {
		return this.getTypedRuleContext(MemberContext, i) as MemberContext;
	}
	public COLON_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.COLON);
	}
	public COLON(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.COLON, i);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.COMMA, i);
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterStruct_literal) {
	 		listener.enterStruct_literal(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitStruct_literal) {
	 		listener.exitStruct_literal(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitStruct_literal) {
			return visitor.visitStruct_literal(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VersionContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VERSION(): TerminalNode {
		return this.getToken(WdlV1_1Parser.VERSION, 0);
	}
	public ReleaseVersion(): TerminalNode {
		return this.getToken(WdlV1_1Parser.ReleaseVersion, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_version;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterVersion) {
	 		listener.enterVersion(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitVersion) {
	 		listener.exitVersion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitVersion) {
			return visitor.visitVersion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_aliasContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ALIAS(): TerminalNode {
		return this.getToken(WdlV1_1Parser.ALIAS, 0);
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, i);
	}
	public AS(): TerminalNode {
		return this.getToken(WdlV1_1Parser.AS, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_import_alias;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterImport_alias) {
	 		listener.enterImport_alias(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitImport_alias) {
	 		listener.exitImport_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitImport_alias) {
			return visitor.visitImport_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_asContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(WdlV1_1Parser.AS, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_import_as;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterImport_as) {
	 		listener.enterImport_as(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitImport_as) {
	 		listener.exitImport_as(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitImport_as) {
			return visitor.visitImport_as(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Import_docContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.IMPORT, 0);
	}
	public string_(): StringContext {
		return this.getTypedRuleContext(StringContext, 0) as StringContext;
	}
	public import_as(): Import_asContext {
		return this.getTypedRuleContext(Import_asContext, 0) as Import_asContext;
	}
	public import_alias_list(): Import_aliasContext[] {
		return this.getTypedRuleContexts(Import_aliasContext) as Import_aliasContext[];
	}
	public import_alias(i: number): Import_aliasContext {
		return this.getTypedRuleContext(Import_aliasContext, i) as Import_aliasContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_import_doc;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterImport_doc) {
	 		listener.enterImport_doc(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitImport_doc) {
	 		listener.exitImport_doc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitImport_doc) {
			return visitor.visitImport_doc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StructContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRUCT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.STRUCT, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public unbound_decls_list(): Unbound_declsContext[] {
		return this.getTypedRuleContexts(Unbound_declsContext) as Unbound_declsContext[];
	}
	public unbound_decls(i: number): Unbound_declsContext {
		return this.getTypedRuleContext(Unbound_declsContext, i) as Unbound_declsContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_struct;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterStruct) {
	 		listener.enterStruct(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitStruct) {
	 		listener.exitStruct(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitStruct) {
			return visitor.visitStruct(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_valueContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MetaNull(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaNull, 0);
	}
	public MetaBool(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaBool, 0);
	}
	public MetaInt(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaInt, 0);
	}
	public MetaFloat(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaFloat, 0);
	}
	public meta_string(): Meta_stringContext {
		return this.getTypedRuleContext(Meta_stringContext, 0) as Meta_stringContext;
	}
	public meta_object(): Meta_objectContext {
		return this.getTypedRuleContext(Meta_objectContext, 0) as Meta_objectContext;
	}
	public meta_array(): Meta_arrayContext {
		return this.getTypedRuleContext(Meta_arrayContext, 0) as Meta_arrayContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_meta_value;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMeta_value) {
	 		listener.enterMeta_value(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMeta_value) {
	 		listener.exitMeta_value(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMeta_value) {
			return visitor.visitMeta_value(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_string_partContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MetaStringPart_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.MetaStringPart);
	}
	public MetaStringPart(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaStringPart, i);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_meta_string_part;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMeta_string_part) {
	 		listener.enterMeta_string_part(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMeta_string_part) {
	 		listener.exitMeta_string_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMeta_string_part) {
			return visitor.visitMeta_string_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_stringContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MetaDquote_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.MetaDquote);
	}
	public MetaDquote(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaDquote, i);
	}
	public meta_string_part(): Meta_string_partContext {
		return this.getTypedRuleContext(Meta_string_partContext, 0) as Meta_string_partContext;
	}
	public MetaSquote_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.MetaSquote);
	}
	public MetaSquote(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaSquote, i);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_meta_string;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMeta_string) {
	 		listener.enterMeta_string(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMeta_string) {
	 		listener.exitMeta_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMeta_string) {
			return visitor.visitMeta_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_arrayContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MetaEmptyArray(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaEmptyArray, 0);
	}
	public MetaLbrack(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaLbrack, 0);
	}
	public meta_value_list(): Meta_valueContext[] {
		return this.getTypedRuleContexts(Meta_valueContext) as Meta_valueContext[];
	}
	public meta_value(i: number): Meta_valueContext {
		return this.getTypedRuleContext(Meta_valueContext, i) as Meta_valueContext;
	}
	public MetaArrayCommaRbrack(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaArrayCommaRbrack, 0);
	}
	public MetaRbrack(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaRbrack, 0);
	}
	public MetaArrayComma_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.MetaArrayComma);
	}
	public MetaArrayComma(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaArrayComma, i);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_meta_array;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMeta_array) {
	 		listener.enterMeta_array(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMeta_array) {
	 		listener.exitMeta_array(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMeta_array) {
			return visitor.visitMeta_array(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_objectContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MetaEmptyObject(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaEmptyObject, 0);
	}
	public MetaLbrace(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaLbrace, 0);
	}
	public meta_object_kv_list(): Meta_object_kvContext[] {
		return this.getTypedRuleContexts(Meta_object_kvContext) as Meta_object_kvContext[];
	}
	public meta_object_kv(i: number): Meta_object_kvContext {
		return this.getTypedRuleContext(Meta_object_kvContext, i) as Meta_object_kvContext;
	}
	public MetaObjectCommaRbrace(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaObjectCommaRbrace, 0);
	}
	public MetaRbrace(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaRbrace, 0);
	}
	public MetaObjectComma_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.MetaObjectComma);
	}
	public MetaObjectComma(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaObjectComma, i);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_meta_object;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMeta_object) {
	 		listener.enterMeta_object(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMeta_object) {
	 		listener.exitMeta_object(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMeta_object) {
			return visitor.visitMeta_object(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_object_kvContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MetaObjectIdentifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaObjectIdentifier, 0);
	}
	public MetaObjectColon(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaObjectColon, 0);
	}
	public meta_value(): Meta_valueContext {
		return this.getTypedRuleContext(Meta_valueContext, 0) as Meta_valueContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_meta_object_kv;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMeta_object_kv) {
	 		listener.enterMeta_object_kv(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMeta_object_kv) {
	 		listener.exitMeta_object_kv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMeta_object_kv) {
			return visitor.visitMeta_object_kv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Meta_kvContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public MetaIdentifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaIdentifier, 0);
	}
	public MetaColon(): TerminalNode {
		return this.getToken(WdlV1_1Parser.MetaColon, 0);
	}
	public meta_value(): Meta_valueContext {
		return this.getTypedRuleContext(Meta_valueContext, 0) as Meta_valueContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_meta_kv;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMeta_kv) {
	 		listener.enterMeta_kv(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMeta_kv) {
	 		listener.exitMeta_kv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMeta_kv) {
			return visitor.visitMeta_kv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Parameter_metaContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PARAMETERMETA(): TerminalNode {
		return this.getToken(WdlV1_1Parser.PARAMETERMETA, 0);
	}
	public BeginMeta(): TerminalNode {
		return this.getToken(WdlV1_1Parser.BeginMeta, 0);
	}
	public EndMeta(): TerminalNode {
		return this.getToken(WdlV1_1Parser.EndMeta, 0);
	}
	public meta_kv_list(): Meta_kvContext[] {
		return this.getTypedRuleContexts(Meta_kvContext) as Meta_kvContext[];
	}
	public meta_kv(i: number): Meta_kvContext {
		return this.getTypedRuleContext(Meta_kvContext, i) as Meta_kvContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_parameter_meta;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterParameter_meta) {
	 		listener.enterParameter_meta(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitParameter_meta) {
	 		listener.exitParameter_meta(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitParameter_meta) {
			return visitor.visitParameter_meta(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MetaContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public META(): TerminalNode {
		return this.getToken(WdlV1_1Parser.META, 0);
	}
	public BeginMeta(): TerminalNode {
		return this.getToken(WdlV1_1Parser.BeginMeta, 0);
	}
	public EndMeta(): TerminalNode {
		return this.getToken(WdlV1_1Parser.EndMeta, 0);
	}
	public meta_kv_list(): Meta_kvContext[] {
		return this.getTypedRuleContexts(Meta_kvContext) as Meta_kvContext[];
	}
	public meta_kv(i: number): Meta_kvContext {
		return this.getTypedRuleContext(Meta_kvContext, i) as Meta_kvContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_meta;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMeta) {
	 		listener.enterMeta(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMeta) {
	 		listener.exitMeta(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMeta) {
			return visitor.visitMeta(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Task_runtime_kvContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(WdlV1_1Parser.COLON, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_task_runtime_kv;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterTask_runtime_kv) {
	 		listener.enterTask_runtime_kv(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitTask_runtime_kv) {
	 		listener.exitTask_runtime_kv(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitTask_runtime_kv) {
			return visitor.visitTask_runtime_kv(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Task_runtimeContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RUNTIME(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RUNTIME, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public task_runtime_kv_list(): Task_runtime_kvContext[] {
		return this.getTypedRuleContexts(Task_runtime_kvContext) as Task_runtime_kvContext[];
	}
	public task_runtime_kv(i: number): Task_runtime_kvContext {
		return this.getTypedRuleContext(Task_runtime_kvContext, i) as Task_runtime_kvContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_task_runtime;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterTask_runtime) {
	 		listener.enterTask_runtime(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitTask_runtime) {
	 		listener.exitTask_runtime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitTask_runtime) {
			return visitor.visitTask_runtime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Task_inputContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INPUT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.INPUT, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public any_decls_list(): Any_declsContext[] {
		return this.getTypedRuleContexts(Any_declsContext) as Any_declsContext[];
	}
	public any_decls(i: number): Any_declsContext {
		return this.getTypedRuleContext(Any_declsContext, i) as Any_declsContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_task_input;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterTask_input) {
	 		listener.enterTask_input(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitTask_input) {
	 		listener.exitTask_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitTask_input) {
			return visitor.visitTask_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Task_outputContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.OUTPUT, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public bound_decls_list(): Bound_declsContext[] {
		return this.getTypedRuleContexts(Bound_declsContext) as Bound_declsContext[];
	}
	public bound_decls(i: number): Bound_declsContext {
		return this.getTypedRuleContext(Bound_declsContext, i) as Bound_declsContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_task_output;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterTask_output) {
	 		listener.enterTask_output(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitTask_output) {
	 		listener.exitTask_output(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitTask_output) {
			return visitor.visitTask_output(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Task_command_string_partContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CommandStringPart_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.CommandStringPart);
	}
	public CommandStringPart(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.CommandStringPart, i);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_task_command_string_part;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterTask_command_string_part) {
	 		listener.enterTask_command_string_part(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitTask_command_string_part) {
	 		listener.exitTask_command_string_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitTask_command_string_part) {
			return visitor.visitTask_command_string_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Task_command_expr_partContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public StringCommandStart(): TerminalNode {
		return this.getToken(WdlV1_1Parser.StringCommandStart, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public expression_placeholder_option_list(): Expression_placeholder_optionContext[] {
		return this.getTypedRuleContexts(Expression_placeholder_optionContext) as Expression_placeholder_optionContext[];
	}
	public expression_placeholder_option(i: number): Expression_placeholder_optionContext {
		return this.getTypedRuleContext(Expression_placeholder_optionContext, i) as Expression_placeholder_optionContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_task_command_expr_part;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterTask_command_expr_part) {
	 		listener.enterTask_command_expr_part(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitTask_command_expr_part) {
	 		listener.exitTask_command_expr_part(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitTask_command_expr_part) {
			return visitor.visitTask_command_expr_part(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Task_command_expr_with_stringContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public task_command_expr_part(): Task_command_expr_partContext {
		return this.getTypedRuleContext(Task_command_expr_partContext, 0) as Task_command_expr_partContext;
	}
	public task_command_string_part(): Task_command_string_partContext {
		return this.getTypedRuleContext(Task_command_string_partContext, 0) as Task_command_string_partContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_task_command_expr_with_string;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterTask_command_expr_with_string) {
	 		listener.enterTask_command_expr_with_string(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitTask_command_expr_with_string) {
	 		listener.exitTask_command_expr_with_string(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitTask_command_expr_with_string) {
			return visitor.visitTask_command_expr_with_string(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Task_commandContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public COMMAND(): TerminalNode {
		return this.getToken(WdlV1_1Parser.COMMAND, 0);
	}
	public BeginLBrace(): TerminalNode {
		return this.getToken(WdlV1_1Parser.BeginLBrace, 0);
	}
	public task_command_string_part(): Task_command_string_partContext {
		return this.getTypedRuleContext(Task_command_string_partContext, 0) as Task_command_string_partContext;
	}
	public EndCommand(): TerminalNode {
		return this.getToken(WdlV1_1Parser.EndCommand, 0);
	}
	public task_command_expr_with_string_list(): Task_command_expr_with_stringContext[] {
		return this.getTypedRuleContexts(Task_command_expr_with_stringContext) as Task_command_expr_with_stringContext[];
	}
	public task_command_expr_with_string(i: number): Task_command_expr_with_stringContext {
		return this.getTypedRuleContext(Task_command_expr_with_stringContext, i) as Task_command_expr_with_stringContext;
	}
	public BeginHereDoc(): TerminalNode {
		return this.getToken(WdlV1_1Parser.BeginHereDoc, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_task_command;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterTask_command) {
	 		listener.enterTask_command(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitTask_command) {
	 		listener.exitTask_command(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitTask_command) {
			return visitor.visitTask_command(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Task_elementContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public task_input(): Task_inputContext {
		return this.getTypedRuleContext(Task_inputContext, 0) as Task_inputContext;
	}
	public task_output(): Task_outputContext {
		return this.getTypedRuleContext(Task_outputContext, 0) as Task_outputContext;
	}
	public task_command(): Task_commandContext {
		return this.getTypedRuleContext(Task_commandContext, 0) as Task_commandContext;
	}
	public task_runtime(): Task_runtimeContext {
		return this.getTypedRuleContext(Task_runtimeContext, 0) as Task_runtimeContext;
	}
	public bound_decls(): Bound_declsContext {
		return this.getTypedRuleContext(Bound_declsContext, 0) as Bound_declsContext;
	}
	public parameter_meta(): Parameter_metaContext {
		return this.getTypedRuleContext(Parameter_metaContext, 0) as Parameter_metaContext;
	}
	public meta(): MetaContext {
		return this.getTypedRuleContext(MetaContext, 0) as MetaContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_task_element;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterTask_element) {
	 		listener.enterTask_element(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitTask_element) {
	 		listener.exitTask_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitTask_element) {
			return visitor.visitTask_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TaskContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TASK(): TerminalNode {
		return this.getToken(WdlV1_1Parser.TASK, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public task_element_list(): Task_elementContext[] {
		return this.getTypedRuleContexts(Task_elementContext) as Task_elementContext[];
	}
	public task_element(i: number): Task_elementContext {
		return this.getTypedRuleContext(Task_elementContext, i) as Task_elementContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_task;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterTask) {
	 		listener.enterTask(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitTask) {
	 		listener.exitTask(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitTask) {
			return visitor.visitTask(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Inner_workflow_elementContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public bound_decls(): Bound_declsContext {
		return this.getTypedRuleContext(Bound_declsContext, 0) as Bound_declsContext;
	}
	public call(): CallContext {
		return this.getTypedRuleContext(CallContext, 0) as CallContext;
	}
	public scatter(): ScatterContext {
		return this.getTypedRuleContext(ScatterContext, 0) as ScatterContext;
	}
	public conditional(): ConditionalContext {
		return this.getTypedRuleContext(ConditionalContext, 0) as ConditionalContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_inner_workflow_element;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterInner_workflow_element) {
	 		listener.enterInner_workflow_element(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitInner_workflow_element) {
	 		listener.exitInner_workflow_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitInner_workflow_element) {
			return visitor.visitInner_workflow_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_aliasContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AS(): TerminalNode {
		return this.getToken(WdlV1_1Parser.AS, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_call_alias;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterCall_alias) {
	 		listener.enterCall_alias(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitCall_alias) {
	 		listener.exitCall_alias(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitCall_alias) {
			return visitor.visitCall_alias(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_inputContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
	public EQUAL(): TerminalNode {
		return this.getToken(WdlV1_1Parser.EQUAL, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_call_input;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterCall_input) {
	 		listener.enterCall_input(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitCall_input) {
	 		listener.exitCall_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitCall_input) {
			return visitor.visitCall_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_inputsContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INPUT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.INPUT, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(WdlV1_1Parser.COLON, 0);
	}
	public call_input_list(): Call_inputContext[] {
		return this.getTypedRuleContexts(Call_inputContext) as Call_inputContext[];
	}
	public call_input(i: number): Call_inputContext {
		return this.getTypedRuleContext(Call_inputContext, i) as Call_inputContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_call_inputs;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterCall_inputs) {
	 		listener.enterCall_inputs(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitCall_inputs) {
	 		listener.exitCall_inputs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitCall_inputs) {
			return visitor.visitCall_inputs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_bodyContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public call_inputs(): Call_inputsContext {
		return this.getTypedRuleContext(Call_inputsContext, 0) as Call_inputsContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_call_body;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterCall_body) {
	 		listener.enterCall_body(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitCall_body) {
	 		listener.exitCall_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitCall_body) {
			return visitor.visitCall_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_afterContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public AFTER(): TerminalNode {
		return this.getToken(WdlV1_1Parser.AFTER, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_call_after;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterCall_after) {
	 		listener.enterCall_after(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitCall_after) {
	 		listener.exitCall_after(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitCall_after) {
			return visitor.visitCall_after(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Call_nameContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public Identifier_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.Identifier);
	}
	public Identifier(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, i);
	}
	public DOT_list(): TerminalNode[] {
	    	return this.getTokens(WdlV1_1Parser.DOT);
	}
	public DOT(i: number): TerminalNode {
		return this.getToken(WdlV1_1Parser.DOT, i);
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_call_name;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterCall_name) {
	 		listener.enterCall_name(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitCall_name) {
	 		listener.exitCall_name(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitCall_name) {
			return visitor.visitCall_name(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CALL(): TerminalNode {
		return this.getToken(WdlV1_1Parser.CALL, 0);
	}
	public call_name(): Call_nameContext {
		return this.getTypedRuleContext(Call_nameContext, 0) as Call_nameContext;
	}
	public call_alias(): Call_aliasContext {
		return this.getTypedRuleContext(Call_aliasContext, 0) as Call_aliasContext;
	}
	public call_after_list(): Call_afterContext[] {
		return this.getTypedRuleContexts(Call_afterContext) as Call_afterContext[];
	}
	public call_after(i: number): Call_afterContext {
		return this.getTypedRuleContext(Call_afterContext, i) as Call_afterContext;
	}
	public call_body(): Call_bodyContext {
		return this.getTypedRuleContext(Call_bodyContext, 0) as Call_bodyContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_call;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterCall) {
	 		listener.enterCall(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitCall) {
	 		listener.exitCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ScatterContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SCATTER(): TerminalNode {
		return this.getToken(WdlV1_1Parser.SCATTER, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LPAREN, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
	public In(): TerminalNode {
		return this.getToken(WdlV1_1Parser.In, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RPAREN, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public inner_workflow_element_list(): Inner_workflow_elementContext[] {
		return this.getTypedRuleContexts(Inner_workflow_elementContext) as Inner_workflow_elementContext[];
	}
	public inner_workflow_element(i: number): Inner_workflow_elementContext {
		return this.getTypedRuleContext(Inner_workflow_elementContext, i) as Inner_workflow_elementContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_scatter;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterScatter) {
	 		listener.enterScatter(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitScatter) {
	 		listener.exitScatter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitScatter) {
			return visitor.visitScatter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConditionalContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(WdlV1_1Parser.IF, 0);
	}
	public LPAREN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LPAREN, 0);
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public RPAREN(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RPAREN, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public inner_workflow_element_list(): Inner_workflow_elementContext[] {
		return this.getTypedRuleContexts(Inner_workflow_elementContext) as Inner_workflow_elementContext[];
	}
	public inner_workflow_element(i: number): Inner_workflow_elementContext {
		return this.getTypedRuleContext(Inner_workflow_elementContext, i) as Inner_workflow_elementContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_conditional;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterConditional) {
	 		listener.enterConditional(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitConditional) {
	 		listener.exitConditional(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitConditional) {
			return visitor.visitConditional(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Workflow_inputContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INPUT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.INPUT, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public any_decls_list(): Any_declsContext[] {
		return this.getTypedRuleContexts(Any_declsContext) as Any_declsContext[];
	}
	public any_decls(i: number): Any_declsContext {
		return this.getTypedRuleContext(Any_declsContext, i) as Any_declsContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_workflow_input;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterWorkflow_input) {
	 		listener.enterWorkflow_input(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitWorkflow_input) {
	 		listener.exitWorkflow_input(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitWorkflow_input) {
			return visitor.visitWorkflow_input(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Workflow_outputContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public OUTPUT(): TerminalNode {
		return this.getToken(WdlV1_1Parser.OUTPUT, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public bound_decls_list(): Bound_declsContext[] {
		return this.getTypedRuleContexts(Bound_declsContext) as Bound_declsContext[];
	}
	public bound_decls(i: number): Bound_declsContext {
		return this.getTypedRuleContext(Bound_declsContext, i) as Bound_declsContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_workflow_output;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterWorkflow_output) {
	 		listener.enterWorkflow_output(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitWorkflow_output) {
	 		listener.exitWorkflow_output(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitWorkflow_output) {
			return visitor.visitWorkflow_output(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Workflow_elementContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_workflow_element;
	}
	public override copyFrom(ctx: Workflow_elementContext): void {
		super.copyFrom(ctx);
	}
}
export class OutputContext extends Workflow_elementContext {
	constructor(parser: WdlV1_1Parser, ctx: Workflow_elementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public workflow_output(): Workflow_outputContext {
		return this.getTypedRuleContext(Workflow_outputContext, 0) as Workflow_outputContext;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterOutput) {
	 		listener.enterOutput(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitOutput) {
	 		listener.exitOutput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitOutput) {
			return visitor.visitOutput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InputContext extends Workflow_elementContext {
	constructor(parser: WdlV1_1Parser, ctx: Workflow_elementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public workflow_input(): Workflow_inputContext {
		return this.getTypedRuleContext(Workflow_inputContext, 0) as Workflow_inputContext;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterInput) {
	 		listener.enterInput(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitInput) {
	 		listener.exitInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitInput) {
			return visitor.visitInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Parameter_meta_elementContext extends Workflow_elementContext {
	constructor(parser: WdlV1_1Parser, ctx: Workflow_elementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public parameter_meta(): Parameter_metaContext {
		return this.getTypedRuleContext(Parameter_metaContext, 0) as Parameter_metaContext;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterParameter_meta_element) {
	 		listener.enterParameter_meta_element(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitParameter_meta_element) {
	 		listener.exitParameter_meta_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitParameter_meta_element) {
			return visitor.visitParameter_meta_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Meta_elementContext extends Workflow_elementContext {
	constructor(parser: WdlV1_1Parser, ctx: Workflow_elementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public meta(): MetaContext {
		return this.getTypedRuleContext(MetaContext, 0) as MetaContext;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterMeta_element) {
	 		listener.enterMeta_element(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitMeta_element) {
	 		listener.exitMeta_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitMeta_element) {
			return visitor.visitMeta_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Inner_elementContext extends Workflow_elementContext {
	constructor(parser: WdlV1_1Parser, ctx: Workflow_elementContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public inner_workflow_element(): Inner_workflow_elementContext {
		return this.getTypedRuleContext(Inner_workflow_elementContext, 0) as Inner_workflow_elementContext;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterInner_element) {
	 		listener.enterInner_element(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitInner_element) {
	 		listener.exitInner_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitInner_element) {
			return visitor.visitInner_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WorkflowContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WORKFLOW(): TerminalNode {
		return this.getToken(WdlV1_1Parser.WORKFLOW, 0);
	}
	public Identifier(): TerminalNode {
		return this.getToken(WdlV1_1Parser.Identifier, 0);
	}
	public LBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.LBRACE, 0);
	}
	public RBRACE(): TerminalNode {
		return this.getToken(WdlV1_1Parser.RBRACE, 0);
	}
	public workflow_element_list(): Workflow_elementContext[] {
		return this.getTypedRuleContexts(Workflow_elementContext) as Workflow_elementContext[];
	}
	public workflow_element(i: number): Workflow_elementContext {
		return this.getTypedRuleContext(Workflow_elementContext, i) as Workflow_elementContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_workflow;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterWorkflow) {
	 		listener.enterWorkflow(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitWorkflow) {
	 		listener.exitWorkflow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitWorkflow) {
			return visitor.visitWorkflow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Document_elementContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public import_doc(): Import_docContext {
		return this.getTypedRuleContext(Import_docContext, 0) as Import_docContext;
	}
	public struct(): StructContext {
		return this.getTypedRuleContext(StructContext, 0) as StructContext;
	}
	public task(): TaskContext {
		return this.getTypedRuleContext(TaskContext, 0) as TaskContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_document_element;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterDocument_element) {
	 		listener.enterDocument_element(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitDocument_element) {
	 		listener.exitDocument_element(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitDocument_element) {
			return visitor.visitDocument_element(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DocumentContext extends ParserRuleContext {
	constructor(parser?: WdlV1_1Parser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public version(): VersionContext {
		return this.getTypedRuleContext(VersionContext, 0) as VersionContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(WdlV1_1Parser.EOF, 0);
	}
	public document_element_list(): Document_elementContext[] {
		return this.getTypedRuleContexts(Document_elementContext) as Document_elementContext[];
	}
	public document_element(i: number): Document_elementContext {
		return this.getTypedRuleContext(Document_elementContext, i) as Document_elementContext;
	}
	public workflow(): WorkflowContext {
		return this.getTypedRuleContext(WorkflowContext, 0) as WorkflowContext;
	}
    public get ruleIndex(): number {
    	return WdlV1_1Parser.RULE_document;
	}
	public enterRule(listener: WdlV1_1ParserListener): void {
	    if(listener.enterDocument) {
	 		listener.enterDocument(this);
		}
	}
	public exitRule(listener: WdlV1_1ParserListener): void {
	    if(listener.exitDocument) {
	 		listener.exitDocument(this);
		}
	}
	// @Override
	public accept<Result>(visitor: WdlV1_1ParserVisitor<Result>): Result {
		if (visitor.visitDocument) {
			return visitor.visitDocument(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
