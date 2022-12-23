! function() {
	var e = {
			7677: function(e, t) {
				"use strict";
				var i, n, s, r, o, a, c, l, d, u, h, p, g, m, f = (o = function(e) {
					var t = {},
						i = e,
						n = {
							"&": "&amp;",
							"<": "&lt;",
							">": "&gt;",
							'"': "&quot;",
							"'": "&#x27;",
							"`": "&#x60;"
						},
						s = /[&<>"'`]/g,
						r = /[&<>"'`]/;

					function o(e) {
						return n[e] || "&amp;"
					}
					t.extend = function(e, t) {
						for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
					};
					var a, c = Object.prototype.toString;
					t.toString = c, (a = function(e) {
						return "function" == typeof e
					})(/x/) && (a = function(e) {
						return "function" == typeof e && "[object Function]" === c.call(e)
					}), t.isFunction = a;
					var l = Array.isArray || function(e) {
						return !(!e || "object" != typeof e) && "[object Array]" === c.call(e)
					};
					return t.isArray = l, t.escapeExpression = function(e) {
						return e instanceof i ? e.toString() : e || 0 === e ? (e = "" + e, r.test(e) ? e.replace(s, o) : e) : ""
					}, t.isEmpty = function(e) {
						return !e && 0 !== e || !(!l(e) || 0 !== e.length)
					}, t
				}(r = function() {
					function e(e) {
						this.string = e
					}
					return e.prototype.toString = function() {
						return "" + this.string
					}, e
				}()), c = function(e, t) {
					var i = {},
						n = e,
						s = t;
					i.VERSION = "1.3.0", i.COMPILER_REVISION = 4, i.REVISION_CHANGES = {
						1: "<= 1.0.rc.2",
						2: "== 1.0.0-rc.3",
						3: "== 1.0.0-rc.4",
						4: ">= 1.0.0"
					};
					var r = n.isArray,
						o = n.isFunction,
						a = n.toString,
						c = "[object Object]";

					function l(e, t) {
						var i;
						this.helpers = e || {}, this.partials = t || {}, (i = this).registerHelper("helperMissing", (function(e) {
							if (2 !== arguments.length) throw new s("Missing helper: '" + e + "'")
						})), i.registerHelper("blockHelperMissing", (function(e, t) {
							var n = t.inverse || function() {},
								s = t.fn;
							return o(e) && (e = e.call(this)), !0 === e ? s(this) : !1 === e || null == e ? n(this) : r(e) ? e.length > 0 ? i.helpers.each(e, t) : n(this) : s(e)
						})), i.registerHelper("each", (function(e, t) {
							var i, n = t.fn,
								s = t.inverse,
								a = 0,
								c = "";
							if (o(e) && (e = e.call(this)), t.data && (i = h(t.data)), e && "object" == typeof e)
								if (r(e))
									for (var l = e.length; a < l; a++) i && (i.index = a, i.first = 0 === a, i.last = a === e.length - 1), c += n(e[a], {
										data: i
									});
								else
									for (var d in e) e.hasOwnProperty(d) && (i && (i.key = d, i.index = a, i.first = 0 === a), c += n(e[d], {
										data: i
									}), a++);
							return 0 === a && (c = s(this)), c
						})), i.registerHelper("if", (function(e, t) {
							return o(e) && (e = e.call(this)), !t.hash.includeZero && !e || n.isEmpty(e) ? t.inverse(this) : t.fn(this)
						})), i.registerHelper("unless", (function(e, t) {
							return i.helpers.if.call(this, e, {
								fn: t.inverse,
								inverse: t.fn,
								hash: t.hash
							})
						})), i.registerHelper("with", (function(e, t) {
							if (o(e) && (e = e.call(this)), !n.isEmpty(e)) return t.fn(e)
						})), i.registerHelper("log", (function(e, t) {
							var n = t.data && null != t.data.level ? parseInt(t.data.level, 10) : 1;
							i.log(n, e)
						}))
					}
					i.HandlebarsEnvironment = l, l.prototype = {
						constructor: l,
						logger: d,
						log: u,
						registerHelper: function(e, t, i) {
							if (a.call(e) === c) {
								if (i || t) throw new s("Arg not supported with multiple helpers");
								n.extend(this.helpers, e)
							} else i && (t.not = i), this.helpers[e] = t
						},
						registerPartial: function(e, t) {
							a.call(e) === c ? n.extend(this.partials, e) : this.partials[e] = t
						}
					};
					var d = {
						methodMap: {
							0: "debug",
							1: "info",
							2: "warn",
							3: "error"
						},
						DEBUG: 0,
						INFO: 1,
						WARN: 2,
						ERROR: 3,
						level: 3,
						log: function(e, t) {
							if (d.level <= e) {
								var i = d.methodMap[e];
								"undefined" != typeof console && console[i]
							}
						}
					};

					function u(e, t) {
						d.log(e, t)
					}
					i.logger = d, i.log = u;
					var h = function(e) {
						var t = {};
						return n.extend(t, e), t
					};
					return i.createFrame = h, i
				}(o, a = function() {
					var e = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];

					function t(t, i) {
						var n;
						i && i.firstLine && (t += " - " + (n = i.firstLine) + ":" + i.firstColumn);
						for (var s = Error.prototype.constructor.call(this, t), r = 0; r < e.length; r++) this[e[r]] = s[e[r]];
						n && (this.lineNumber = n, this.column = i.firstColumn)
					}
					return t.prototype = new Error, t
				}()), l = function(e, t, i) {
					var n = {},
						s = e,
						r = t,
						o = i.COMPILER_REVISION,
						a = i.REVISION_CHANGES;

					function c(e, t, i) {
						var n = function(e, n) {
							return t(e, (n = n || {}).data || i)
						};
						return n.program = e, n.depth = 0, n
					}
					return n.checkRevision = function(e) {
						var t = e && e[0] || 1;
						if (t !== o) {
							if (t < o) {
								var i = a[o],
									n = a[t];
								throw new r("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + i + ") or downgrade your runtime to an older version (" + n + ").")
							}
							throw new r("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
						}
					}, n.template = function(e, t) {
						if (!t) throw new r("No environment passed to template");
						var i = {
							escapeExpression: s.escapeExpression,
							invokePartial: function(e, i, n, s, o, a) {
								var c = t.VM.invokePartial.apply(this, arguments);
								if (null != c) return c;
								if (t.compile) {
									var l = {
										helpers: s,
										partials: o,
										data: a
									};
									return o[i] = t.compile(e, {
										data: void 0 !== a
									}, t), o[i](n, l)
								}
								throw new r("The partial " + i + " could not be compiled when running in runtime-only mode")
							},
							programs: [],
							program: function(e, t, i) {
								var n = this.programs[e];
								return i ? n = c(e, t, i) : n || (n = this.programs[e] = c(e, t)), n
							},
							merge: function(e, t) {
								var i = e || t;
								return e && t && e !== t && (i = {}, s.extend(i, t), s.extend(i, e)), i
							},
							programWithDepth: t.VM.programWithDepth,
							noop: t.VM.noop,
							compilerInfo: null
						};
						return function(n, s) {
							var r, o, a = (s = s || {}).partial ? s : t;
							s.partial || (r = s.helpers, o = s.partials);
							var c = e.call(i, a, n, r, o, s.data);
							return s.partial || t.VM.checkRevision(i.compilerInfo), c
						}
					}, n.programWithDepth = function(e, t, i) {
						var n = Array.prototype.slice.call(arguments, 3),
							s = function(e, s) {
								return s = s || {}, t.apply(this, [e, s.data || i].concat(n))
							};
						return s.program = e, s.depth = n.length, s
					}, n.program = c, n.invokePartial = function(e, t, i, n, s, o) {
						var a = {
							partial: !0,
							helpers: n,
							partials: s,
							data: o
						};
						if (void 0 === e) throw new r("The partial " + t + " could not be found");
						if (e instanceof Function) return e(i, a)
					}, n.noop = function() {
						return ""
					}, n
				}(o, a, c), d = function(e, t, i, n, s) {
					var r = e,
						o = t,
						a = i,
						c = n,
						l = s,
						d = function() {
							var e = new r.HandlebarsEnvironment;
							return c.extend(e, r), e.SafeString = o, e.Exception = a, e.Utils = c, e.VM = l, e.template = function(t) {
								return l.template(t, e)
							}, e
						},
						u = d();
					return u.create = d, u
				}(c, r, a, o, l), u = function(e) {
					var t = e;

					function i(e) {
						e = e || {}, this.firstLine = e.first_line, this.firstColumn = e.first_column, this.lastColumn = e.last_column, this.lastLine = e.last_line
					}
					var n = {
						ProgramNode: function(e, t, s, r) {
							var o, a;
							3 === arguments.length ? (r = s, s = null) : 2 === arguments.length && (r = t, t = null), i.call(this, r), this.type = "program", this.statements = e, this.strip = {}, s ? ((a = s[0]) ? (o = {
								first_line: a.firstLine,
								last_line: a.lastLine,
								last_column: a.lastColumn,
								first_column: a.firstColumn
							}, this.inverse = new n.ProgramNode(s, t, o)) : this.inverse = new n.ProgramNode(s, t), this.strip.right = t.left) : t && (this.strip.left = t.right)
						},
						MustacheNode: function(e, t, s, r, o) {
							if (i.call(this, o), this.type = "mustache", this.strip = r, null != s && s.charAt) {
								var a = s.charAt(3) || s.charAt(2);
								this.escaped = "{" !== a && "&" !== a
							} else this.escaped = !!s;
							e instanceof n.SexprNode ? this.sexpr = e : this.sexpr = new n.SexprNode(e, t), this.sexpr.isRoot = !0, this.id = this.sexpr.id, this.params = this.sexpr.params, this.hash = this.sexpr.hash, this.eligibleHelper = this.sexpr.eligibleHelper, this.isHelper = this.sexpr.isHelper
						},
						SexprNode: function(e, t, n) {
							i.call(this, n), this.type = "sexpr", this.hash = t;
							var s = this.id = e[0],
								r = this.params = e.slice(1),
								o = this.eligibleHelper = s.isSimple;
							this.isHelper = o && (r.length || t)
						},
						PartialNode: function(e, t, n, s) {
							i.call(this, s), this.type = "partial", this.partialName = e, this.context = t, this.strip = n
						},
						BlockNode: function(e, n, s, r, o) {
							if (i.call(this, o), e.sexpr.id.original !== r.path.original) throw new t(e.sexpr.id.original + " doesn't match " + r.path.original, this);
							this.type = "block", this.mustache = e, this.program = n, this.inverse = s, this.strip = {
								left: e.strip.left,
								right: r.strip.right
							}, (n || s).strip.left = e.strip.right, (s || n).strip.right = r.strip.left, s && !n && (this.isInverse = !0)
						},
						ContentNode: function(e, t) {
							i.call(this, t), this.type = "content", this.string = e
						},
						HashNode: function(e, t) {
							i.call(this, t), this.type = "hash", this.pairs = e
						},
						IdNode: function(e, n) {
							i.call(this, n), this.type = "ID";
							for (var s = "", r = [], o = 0, a = 0, c = e.length; a < c; a++) {
								var l = e[a].part;
								if (s += (e[a].separator || "") + l, ".." === l || "." === l || "this" === l) {
									if (r.length > 0) throw new t("Invalid path: " + s, this);
									".." === l ? o++ : this.isScoped = !0
								} else r.push(l)
							}
							this.original = s, this.parts = r, this.string = r.join("."), this.depth = o, this.isSimple = 1 === e.length && !this.isScoped && 0 === o, this.stringModeValue = this.string
						},
						PartialNameNode: function(e, t) {
							i.call(this, t), this.type = "PARTIAL_NAME", this.name = e.original
						},
						DataNode: function(e, t) {
							i.call(this, t), this.type = "DATA", this.id = e
						},
						StringNode: function(e, t) {
							i.call(this, t), this.type = "STRING", this.original = this.string = this.stringModeValue = e
						},
						IntegerNode: function(e, t) {
							i.call(this, t), this.type = "INTEGER", this.original = this.integer = e, this.stringModeValue = Number(e)
						},
						BooleanNode: function(e, t) {
							i.call(this, t), this.type = "BOOLEAN", this.bool = e, this.stringModeValue = "true" === e
						},
						CommentNode: function(e, t) {
							i.call(this, t), this.type = "comment", this.comment = e
						}
					};
					return n
				}(a), h = function() {
					var e = {
						trace: function() {},
						yy: {},
						symbols_: {
							error: 2,
							root: 3,
							statements: 4,
							EOF: 5,
							program: 6,
							simpleInverse: 7,
							statement: 8,
							openInverse: 9,
							closeBlock: 10,
							openBlock: 11,
							mustache: 12,
							partial: 13,
							CONTENT: 14,
							COMMENT: 15,
							OPEN_BLOCK: 16,
							sexpr: 17,
							CLOSE: 18,
							OPEN_INVERSE: 19,
							OPEN_ENDBLOCK: 20,
							path: 21,
							OPEN: 22,
							OPEN_UNESCAPED: 23,
							CLOSE_UNESCAPED: 24,
							OPEN_PARTIAL: 25,
							partialName: 26,
							partial_option0: 27,
							sexpr_repetition0: 28,
							sexpr_option0: 29,
							dataName: 30,
							param: 31,
							STRING: 32,
							INTEGER: 33,
							BOOLEAN: 34,
							OPEN_SEXPR: 35,
							CLOSE_SEXPR: 36,
							hash: 37,
							hash_repetition_plus0: 38,
							hashSegment: 39,
							ID: 40,
							EQUALS: 41,
							DATA: 42,
							pathSegments: 43,
							SEP: 44,
							$accept: 0,
							$end: 1
						},
						terminals_: {
							2: "error",
							5: "EOF",
							14: "CONTENT",
							15: "COMMENT",
							16: "OPEN_BLOCK",
							18: "CLOSE",
							19: "OPEN_INVERSE",
							20: "OPEN_ENDBLOCK",
							22: "OPEN",
							23: "OPEN_UNESCAPED",
							24: "CLOSE_UNESCAPED",
							25: "OPEN_PARTIAL",
							32: "STRING",
							33: "INTEGER",
							34: "BOOLEAN",
							35: "OPEN_SEXPR",
							36: "CLOSE_SEXPR",
							40: "ID",
							41: "EQUALS",
							42: "DATA",
							44: "SEP"
						},
						productions_: [0, [3, 2],
							[3, 1],
							[6, 2],
							[6, 3],
							[6, 2],
							[6, 1],
							[6, 1],
							[6, 0],
							[4, 1],
							[4, 2],
							[8, 3],
							[8, 3],
							[8, 1],
							[8, 1],
							[8, 1],
							[8, 1],
							[11, 3],
							[9, 3],
							[10, 3],
							[12, 3],
							[12, 3],
							[13, 4],
							[7, 2],
							[17, 3],
							[17, 1],
							[31, 1],
							[31, 1],
							[31, 1],
							[31, 1],
							[31, 1],
							[31, 3],
							[37, 1],
							[39, 3],
							[26, 1],
							[26, 1],
							[26, 1],
							[30, 2],
							[21, 1],
							[43, 3],
							[43, 1],
							[27, 0],
							[27, 1],
							[28, 0],
							[28, 2],
							[29, 0],
							[29, 1],
							[38, 1],
							[38, 2]
						],
						performAction: function(e, i, n, s, r, o, a) {
							var c = o.length - 1;
							switch (r) {
								case 1:
									return new s.ProgramNode(o[c - 1], this._$);
								case 2:
									return new s.ProgramNode([], this._$);
								case 3:
									this.$ = new s.ProgramNode([], o[c - 1], o[c], this._$);
									break;
								case 4:
									this.$ = new s.ProgramNode(o[c - 2], o[c - 1], o[c], this._$);
									break;
								case 5:
									this.$ = new s.ProgramNode(o[c - 1], o[c], [], this._$);
									break;
								case 6:
									this.$ = new s.ProgramNode(o[c], this._$);
									break;
								case 7:
								case 8:
									this.$ = new s.ProgramNode([], this._$);
									break;
								case 9:
								case 47:
									this.$ = [o[c]];
									break;
								case 10:
									o[c - 1].push(o[c]), this.$ = o[c - 1];
									break;
								case 11:
									this.$ = new s.BlockNode(o[c - 2], o[c - 1].inverse, o[c - 1], o[c], this._$);
									break;
								case 12:
									this.$ = new s.BlockNode(o[c - 2], o[c - 1], o[c - 1].inverse, o[c], this._$);
									break;
								case 13:
								case 14:
								case 26:
								case 30:
									this.$ = o[c];
									break;
								case 15:
									this.$ = new s.ContentNode(o[c], this._$);
									break;
								case 16:
									this.$ = new s.CommentNode(o[c], this._$);
									break;
								case 17:
								case 18:
								case 20:
								case 21:
									this.$ = new s.MustacheNode(o[c - 1], null, o[c - 2], t(o[c - 2], o[c]), this._$);
									break;
								case 19:
									this.$ = {
										path: o[c - 1],
										strip: t(o[c - 2], o[c])
									};
									break;
								case 22:
									this.$ = new s.PartialNode(o[c - 2], o[c - 1], t(o[c - 3], o[c]), this._$);
									break;
								case 23:
									this.$ = t(o[c - 1], o[c]);
									break;
								case 24:
									this.$ = new s.SexprNode([o[c - 2]].concat(o[c - 1]), o[c], this._$);
									break;
								case 25:
									this.$ = new s.SexprNode([o[c]], null, this._$);
									break;
								case 27:
									this.$ = new s.StringNode(o[c], this._$);
									break;
								case 28:
									this.$ = new s.IntegerNode(o[c], this._$);
									break;
								case 29:
									this.$ = new s.BooleanNode(o[c], this._$);
									break;
								case 31:
									o[c - 1].isHelper = !0, this.$ = o[c - 1];
									break;
								case 32:
									this.$ = new s.HashNode(o[c], this._$);
									break;
								case 33:
									this.$ = [o[c - 2], o[c]];
									break;
								case 34:
									this.$ = new s.PartialNameNode(o[c], this._$);
									break;
								case 35:
									this.$ = new s.PartialNameNode(new s.StringNode(o[c], this._$), this._$);
									break;
								case 36:
									this.$ = new s.PartialNameNode(new s.IntegerNode(o[c], this._$));
									break;
								case 37:
									this.$ = new s.DataNode(o[c], this._$);
									break;
								case 38:
									this.$ = new s.IdNode(o[c], this._$);
									break;
								case 39:
									o[c - 2].push({
										part: o[c],
										separator: o[c - 1]
									}), this.$ = o[c - 2];
									break;
								case 40:
									this.$ = [{
										part: o[c]
									}];
									break;
								case 43:
									this.$ = [];
									break;
								case 44:
								case 48:
									o[c - 1].push(o[c])
							}
						},
						table: [{
							3: 1,
							4: 2,
							5: [1, 3],
							8: 4,
							9: 5,
							11: 6,
							12: 7,
							13: 8,
							14: [1, 9],
							15: [1, 10],
							16: [1, 12],
							19: [1, 11],
							22: [1, 13],
							23: [1, 14],
							25: [1, 15]
						}, {
							1: [3]
						}, {
							5: [1, 16],
							8: 17,
							9: 5,
							11: 6,
							12: 7,
							13: 8,
							14: [1, 9],
							15: [1, 10],
							16: [1, 12],
							19: [1, 11],
							22: [1, 13],
							23: [1, 14],
							25: [1, 15]
						}, {
							1: [2, 2]
						}, {
							5: [2, 9],
							14: [2, 9],
							15: [2, 9],
							16: [2, 9],
							19: [2, 9],
							20: [2, 9],
							22: [2, 9],
							23: [2, 9],
							25: [2, 9]
						}, {
							4: 20,
							6: 18,
							7: 19,
							8: 4,
							9: 5,
							11: 6,
							12: 7,
							13: 8,
							14: [1, 9],
							15: [1, 10],
							16: [1, 12],
							19: [1, 21],
							20: [2, 8],
							22: [1, 13],
							23: [1, 14],
							25: [1, 15]
						}, {
							4: 20,
							6: 22,
							7: 19,
							8: 4,
							9: 5,
							11: 6,
							12: 7,
							13: 8,
							14: [1, 9],
							15: [1, 10],
							16: [1, 12],
							19: [1, 21],
							20: [2, 8],
							22: [1, 13],
							23: [1, 14],
							25: [1, 15]
						}, {
							5: [2, 13],
							14: [2, 13],
							15: [2, 13],
							16: [2, 13],
							19: [2, 13],
							20: [2, 13],
							22: [2, 13],
							23: [2, 13],
							25: [2, 13]
						}, {
							5: [2, 14],
							14: [2, 14],
							15: [2, 14],
							16: [2, 14],
							19: [2, 14],
							20: [2, 14],
							22: [2, 14],
							23: [2, 14],
							25: [2, 14]
						}, {
							5: [2, 15],
							14: [2, 15],
							15: [2, 15],
							16: [2, 15],
							19: [2, 15],
							20: [2, 15],
							22: [2, 15],
							23: [2, 15],
							25: [2, 15]
						}, {
							5: [2, 16],
							14: [2, 16],
							15: [2, 16],
							16: [2, 16],
							19: [2, 16],
							20: [2, 16],
							22: [2, 16],
							23: [2, 16],
							25: [2, 16]
						}, {
							17: 23,
							21: 24,
							30: 25,
							40: [1, 28],
							42: [1, 27],
							43: 26
						}, {
							17: 29,
							21: 24,
							30: 25,
							40: [1, 28],
							42: [1, 27],
							43: 26
						}, {
							17: 30,
							21: 24,
							30: 25,
							40: [1, 28],
							42: [1, 27],
							43: 26
						}, {
							17: 31,
							21: 24,
							30: 25,
							40: [1, 28],
							42: [1, 27],
							43: 26
						}, {
							21: 33,
							26: 32,
							32: [1, 34],
							33: [1, 35],
							40: [1, 28],
							43: 26
						}, {
							1: [2, 1]
						}, {
							5: [2, 10],
							14: [2, 10],
							15: [2, 10],
							16: [2, 10],
							19: [2, 10],
							20: [2, 10],
							22: [2, 10],
							23: [2, 10],
							25: [2, 10]
						}, {
							10: 36,
							20: [1, 37]
						}, {
							4: 38,
							8: 4,
							9: 5,
							11: 6,
							12: 7,
							13: 8,
							14: [1, 9],
							15: [1, 10],
							16: [1, 12],
							19: [1, 11],
							20: [2, 7],
							22: [1, 13],
							23: [1, 14],
							25: [1, 15]
						}, {
							7: 39,
							8: 17,
							9: 5,
							11: 6,
							12: 7,
							13: 8,
							14: [1, 9],
							15: [1, 10],
							16: [1, 12],
							19: [1, 21],
							20: [2, 6],
							22: [1, 13],
							23: [1, 14],
							25: [1, 15]
						}, {
							17: 23,
							18: [1, 40],
							21: 24,
							30: 25,
							40: [1, 28],
							42: [1, 27],
							43: 26
						}, {
							10: 41,
							20: [1, 37]
						}, {
							18: [1, 42]
						}, {
							18: [2, 43],
							24: [2, 43],
							28: 43,
							32: [2, 43],
							33: [2, 43],
							34: [2, 43],
							35: [2, 43],
							36: [2, 43],
							40: [2, 43],
							42: [2, 43]
						}, {
							18: [2, 25],
							24: [2, 25],
							36: [2, 25]
						}, {
							18: [2, 38],
							24: [2, 38],
							32: [2, 38],
							33: [2, 38],
							34: [2, 38],
							35: [2, 38],
							36: [2, 38],
							40: [2, 38],
							42: [2, 38],
							44: [1, 44]
						}, {
							21: 45,
							40: [1, 28],
							43: 26
						}, {
							18: [2, 40],
							24: [2, 40],
							32: [2, 40],
							33: [2, 40],
							34: [2, 40],
							35: [2, 40],
							36: [2, 40],
							40: [2, 40],
							42: [2, 40],
							44: [2, 40]
						}, {
							18: [1, 46]
						}, {
							18: [1, 47]
						}, {
							24: [1, 48]
						}, {
							18: [2, 41],
							21: 50,
							27: 49,
							40: [1, 28],
							43: 26
						}, {
							18: [2, 34],
							40: [2, 34]
						}, {
							18: [2, 35],
							40: [2, 35]
						}, {
							18: [2, 36],
							40: [2, 36]
						}, {
							5: [2, 11],
							14: [2, 11],
							15: [2, 11],
							16: [2, 11],
							19: [2, 11],
							20: [2, 11],
							22: [2, 11],
							23: [2, 11],
							25: [2, 11]
						}, {
							21: 51,
							40: [1, 28],
							43: 26
						}, {
							8: 17,
							9: 5,
							11: 6,
							12: 7,
							13: 8,
							14: [1, 9],
							15: [1, 10],
							16: [1, 12],
							19: [1, 11],
							20: [2, 3],
							22: [1, 13],
							23: [1, 14],
							25: [1, 15]
						}, {
							4: 52,
							8: 4,
							9: 5,
							11: 6,
							12: 7,
							13: 8,
							14: [1, 9],
							15: [1, 10],
							16: [1, 12],
							19: [1, 11],
							20: [2, 5],
							22: [1, 13],
							23: [1, 14],
							25: [1, 15]
						}, {
							14: [2, 23],
							15: [2, 23],
							16: [2, 23],
							19: [2, 23],
							20: [2, 23],
							22: [2, 23],
							23: [2, 23],
							25: [2, 23]
						}, {
							5: [2, 12],
							14: [2, 12],
							15: [2, 12],
							16: [2, 12],
							19: [2, 12],
							20: [2, 12],
							22: [2, 12],
							23: [2, 12],
							25: [2, 12]
						}, {
							14: [2, 18],
							15: [2, 18],
							16: [2, 18],
							19: [2, 18],
							20: [2, 18],
							22: [2, 18],
							23: [2, 18],
							25: [2, 18]
						}, {
							18: [2, 45],
							21: 56,
							24: [2, 45],
							29: 53,
							30: 60,
							31: 54,
							32: [1, 57],
							33: [1, 58],
							34: [1, 59],
							35: [1, 61],
							36: [2, 45],
							37: 55,
							38: 62,
							39: 63,
							40: [1, 64],
							42: [1, 27],
							43: 26
						}, {
							40: [1, 65]
						}, {
							18: [2, 37],
							24: [2, 37],
							32: [2, 37],
							33: [2, 37],
							34: [2, 37],
							35: [2, 37],
							36: [2, 37],
							40: [2, 37],
							42: [2, 37]
						}, {
							14: [2, 17],
							15: [2, 17],
							16: [2, 17],
							19: [2, 17],
							20: [2, 17],
							22: [2, 17],
							23: [2, 17],
							25: [2, 17]
						}, {
							5: [2, 20],
							14: [2, 20],
							15: [2, 20],
							16: [2, 20],
							19: [2, 20],
							20: [2, 20],
							22: [2, 20],
							23: [2, 20],
							25: [2, 20]
						}, {
							5: [2, 21],
							14: [2, 21],
							15: [2, 21],
							16: [2, 21],
							19: [2, 21],
							20: [2, 21],
							22: [2, 21],
							23: [2, 21],
							25: [2, 21]
						}, {
							18: [1, 66]
						}, {
							18: [2, 42]
						}, {
							18: [1, 67]
						}, {
							8: 17,
							9: 5,
							11: 6,
							12: 7,
							13: 8,
							14: [1, 9],
							15: [1, 10],
							16: [1, 12],
							19: [1, 11],
							20: [2, 4],
							22: [1, 13],
							23: [1, 14],
							25: [1, 15]
						}, {
							18: [2, 24],
							24: [2, 24],
							36: [2, 24]
						}, {
							18: [2, 44],
							24: [2, 44],
							32: [2, 44],
							33: [2, 44],
							34: [2, 44],
							35: [2, 44],
							36: [2, 44],
							40: [2, 44],
							42: [2, 44]
						}, {
							18: [2, 46],
							24: [2, 46],
							36: [2, 46]
						}, {
							18: [2, 26],
							24: [2, 26],
							32: [2, 26],
							33: [2, 26],
							34: [2, 26],
							35: [2, 26],
							36: [2, 26],
							40: [2, 26],
							42: [2, 26]
						}, {
							18: [2, 27],
							24: [2, 27],
							32: [2, 27],
							33: [2, 27],
							34: [2, 27],
							35: [2, 27],
							36: [2, 27],
							40: [2, 27],
							42: [2, 27]
						}, {
							18: [2, 28],
							24: [2, 28],
							32: [2, 28],
							33: [2, 28],
							34: [2, 28],
							35: [2, 28],
							36: [2, 28],
							40: [2, 28],
							42: [2, 28]
						}, {
							18: [2, 29],
							24: [2, 29],
							32: [2, 29],
							33: [2, 29],
							34: [2, 29],
							35: [2, 29],
							36: [2, 29],
							40: [2, 29],
							42: [2, 29]
						}, {
							18: [2, 30],
							24: [2, 30],
							32: [2, 30],
							33: [2, 30],
							34: [2, 30],
							35: [2, 30],
							36: [2, 30],
							40: [2, 30],
							42: [2, 30]
						}, {
							17: 68,
							21: 24,
							30: 25,
							40: [1, 28],
							42: [1, 27],
							43: 26
						}, {
							18: [2, 32],
							24: [2, 32],
							36: [2, 32],
							39: 69,
							40: [1, 70]
						}, {
							18: [2, 47],
							24: [2, 47],
							36: [2, 47],
							40: [2, 47]
						}, {
							18: [2, 40],
							24: [2, 40],
							32: [2, 40],
							33: [2, 40],
							34: [2, 40],
							35: [2, 40],
							36: [2, 40],
							40: [2, 40],
							41: [1, 71],
							42: [2, 40],
							44: [2, 40]
						}, {
							18: [2, 39],
							24: [2, 39],
							32: [2, 39],
							33: [2, 39],
							34: [2, 39],
							35: [2, 39],
							36: [2, 39],
							40: [2, 39],
							42: [2, 39],
							44: [2, 39]
						}, {
							5: [2, 22],
							14: [2, 22],
							15: [2, 22],
							16: [2, 22],
							19: [2, 22],
							20: [2, 22],
							22: [2, 22],
							23: [2, 22],
							25: [2, 22]
						}, {
							5: [2, 19],
							14: [2, 19],
							15: [2, 19],
							16: [2, 19],
							19: [2, 19],
							20: [2, 19],
							22: [2, 19],
							23: [2, 19],
							25: [2, 19]
						}, {
							36: [1, 72]
						}, {
							18: [2, 48],
							24: [2, 48],
							36: [2, 48],
							40: [2, 48]
						}, {
							41: [1, 71]
						}, {
							21: 56,
							30: 60,
							31: 73,
							32: [1, 57],
							33: [1, 58],
							34: [1, 59],
							35: [1, 61],
							40: [1, 28],
							42: [1, 27],
							43: 26
						}, {
							18: [2, 31],
							24: [2, 31],
							32: [2, 31],
							33: [2, 31],
							34: [2, 31],
							35: [2, 31],
							36: [2, 31],
							40: [2, 31],
							42: [2, 31]
						}, {
							18: [2, 33],
							24: [2, 33],
							36: [2, 33],
							40: [2, 33]
						}],
						defaultActions: {
							3: [2, 2],
							16: [2, 1],
							50: [2, 42]
						},
						parseError: function(e, t) {
							throw new Error(e)
						},
						parse: function(e) {
							var t = [0],
								i = [null],
								n = [],
								s = this.table,
								r = "",
								o = 0,
								a = 0,
								c = 0;
							this.lexer.setInput(e), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, void 0 === this.lexer.yylloc && (this.lexer.yylloc = {});
							var l = this.lexer.yylloc;
							n.push(l);
							var d = this.lexer.options && this.lexer.options.ranges;
							"function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
							for (var u, h, p, g, m, f, v, y, S, w, _ = {};;) {
								if (p = t[t.length - 1], this.defaultActions[p] ? g = this.defaultActions[p] : (null == u && (w = void 0, "number" != typeof(w = this.lexer.lex() || 1) && (w = this.symbols_[w] || w), u = w), g = s[p] && s[p][u]), void 0 === g || !g.length || !g[0]) {
									var E = "";
									if (!c) {
										for (f in S = [], s[p]) this.terminals_[f] && f > 2 && S.push("'" + this.terminals_[f] + "'");
										E = this.lexer.showPosition ? "Parse error on line " + (o + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + S.join(", ") + ", got '" + (this.terminals_[u] || u) + "'" : "Parse error on line " + (o + 1) + ": Unexpected " + (1 == u ? "end of input" : "'" + (this.terminals_[u] || u) + "'"), this.parseError(E, {
											text: this.lexer.match,
											token: this.terminals_[u] || u,
											line: this.lexer.yylineno,
											loc: l,
											expected: S
										})
									}
								}
								if (g[0] instanceof Array && g.length > 1) throw new Error("Parse Error: multiple actions possible at state: " + p + ", token: " + u);
								switch (g[0]) {
									case 1:
										t.push(u), i.push(this.lexer.yytext), n.push(this.lexer.yylloc), t.push(g[1]), u = null, h ? (u = h, h = null) : (a = this.lexer.yyleng, r = this.lexer.yytext, o = this.lexer.yylineno, l = this.lexer.yylloc, c > 0 && c--);
										break;
									case 2:
										if (v = this.productions_[g[1]][1], _.$ = i[i.length - v], _._$ = {
												first_line: n[n.length - (v || 1)].first_line,
												last_line: n[n.length - 1].last_line,
												first_column: n[n.length - (v || 1)].first_column,
												last_column: n[n.length - 1].last_column
											}, d && (_._$.range = [n[n.length - (v || 1)].range[0], n[n.length - 1].range[1]]), void 0 !== (m = this.performAction.call(_, r, a, o, this.yy, g[1], i, n))) return m;
										v && (t = t.slice(0, -1 * v * 2), i = i.slice(0, -1 * v), n = n.slice(0, -1 * v)), t.push(this.productions_[g[1]][0]), i.push(_.$), n.push(_._$), y = s[t[t.length - 2]][t[t.length - 1]], t.push(y);
										break;
									case 3:
										return !0
								}
							}
							return !0
						}
					};

					function t(e, t) {
						return {
							left: "~" === e.charAt(2),
							right: "~" === t.charAt(0) || "~" === t.charAt(1)
						}
					}
					var i = {
						EOF: 1,
						parseError: function(e, t) {
							if (!this.yy.parser) throw new Error(e);
							this.yy.parser.parseError(e, t)
						},
						setInput: function(e) {
							return this._input = e, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
								first_line: 1,
								first_column: 0,
								last_line: 1,
								last_column: 0
							}, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this
						},
						input: function() {
							var e = this._input[0];
							return this.yytext += e, this.yyleng++, this.offset++, this.match += e, this.matched += e, e.match(/(?:\r\n?|\n).*/g) ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), e
						},
						unput: function(e) {
							var t = e.length,
								i = e.split(/(?:\r\n?|\n)/g);
							this._input = e + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - t - 1), this.offset -= t;
							var n = this.match.split(/(?:\r\n?|\n)/g);
							this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), i.length - 1 && (this.yylineno -= i.length - 1);
							var s = this.yylloc.range;
							return this.yylloc = {
								first_line: this.yylloc.first_line,
								last_line: this.yylineno + 1,
								first_column: this.yylloc.first_column,
								last_column: i ? (i.length === n.length ? this.yylloc.first_column : 0) + n[n.length - i.length].length - i[0].length : this.yylloc.first_column - t
							}, this.options.ranges && (this.yylloc.range = [s[0], s[0] + this.yyleng - t]), this
						},
						more: function() {
							return this._more = !0, this
						},
						less: function(e) {
							this.unput(this.match.slice(e))
						},
						pastInput: function() {
							var e = this.matched.substr(0, this.matched.length - this.match.length);
							return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
						},
						upcomingInput: function() {
							var e = this.match;
							return e.length < 20 && (e += this._input.substr(0, 20 - e.length)), (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
						},
						showPosition: function() {
							var e = this.pastInput(),
								t = new Array(e.length + 1).join("-");
							return e + this.upcomingInput() + "\n" + t + "^"
						},
						next: function() {
							if (this.done) return this.EOF;
							var e, t, i, n, s;
							this._input || (this.done = !0), this._more || (this.yytext = "", this.match = "");
							for (var r = this._currentRules(), o = 0; o < r.length && (!(i = this._input.match(this.rules[r[o]])) || t && !(i[0].length > t[0].length) || (t = i, n = o, this.options.flex)); o++);
							return t ? ((s = t[0].match(/(?:\r\n?|\n).*/g)) && (this.yylineno += s.length), this.yylloc = {
								first_line: this.yylloc.last_line,
								last_line: this.yylineno + 1,
								first_column: this.yylloc.last_column,
								last_column: s ? s[s.length - 1].length - s[s.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
							}, this.yytext += t[0], this.match += t[0], this.matches = t, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(t[0].length), this.matched += t[0], e = this.performAction.call(this, this.yy, this, r[n], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), e || void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
								text: "",
								token: null,
								line: this.yylineno
							})
						},
						lex: function() {
							var e = this.next();
							return void 0 !== e ? e : this.lex()
						},
						begin: function(e) {
							this.conditionStack.push(e)
						},
						popState: function() {
							return this.conditionStack.pop()
						},
						_currentRules: function() {
							return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
						},
						topState: function() {
							return this.conditionStack[this.conditionStack.length - 2]
						},
						pushState: function(e) {
							this.begin(e)
						},
						options: {},
						performAction: function(e, t, i, n) {
							function s(e, i) {
								return t.yytext = t.yytext.substr(e, t.yyleng - i)
							}
							switch (i) {
								case 0:
									if ("\\\\" === t.yytext.slice(-2) ? (s(0, 1), this.begin("mu")) : "\\" === t.yytext.slice(-1) ? (s(0, 1), this.begin("emu")) : this.begin("mu"), t.yytext) return 14;
									break;
								case 1:
									return 14;
								case 2:
									return this.popState(), 14;
								case 3:
									return s(0, 4), this.popState(), 15;
								case 4:
									return 35;
								case 5:
									return 36;
								case 6:
									return 25;
								case 7:
									return 16;
								case 8:
									return 20;
								case 9:
								case 10:
									return 19;
								case 11:
									return 23;
								case 12:
								case 15:
									return 22;
								case 13:
									this.popState(), this.begin("com");
									break;
								case 14:
									return s(3, 5), this.popState(), 15;
								case 16:
									return 41;
								case 17:
								case 18:
								case 29:
									return 40;
								case 19:
									return 44;
								case 20:
									break;
								case 21:
									return this.popState(), 24;
								case 22:
									return this.popState(), 18;
								case 23:
									return t.yytext = s(1, 2).replace(/\\"/g, '"'), 32;
								case 24:
									return t.yytext = s(1, 2).replace(/\\'/g, "'"), 32;
								case 25:
									return 42;
								case 26:
								case 27:
									return 34;
								case 28:
									return 33;
								case 30:
									return t.yytext = s(1, 2), 40;
								case 31:
									return "INVALID";
								case 32:
									return 5
							}
						},
						rules: [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/],
						conditions: {
							mu: {
								rules: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32],
								inclusive: !1
							},
							emu: {
								rules: [2],
								inclusive: !1
							},
							com: {
								rules: [3],
								inclusive: !1
							},
							INITIAL: {
								rules: [0, 1, 32],
								inclusive: !0
							}
						}
					};

					function n() {
						this.yy = {}
					}
					return e.lexer = i, n.prototype = e, e.Parser = n, new n
				}(), s = u, (i = {}).parser = n = h, i.parse = function(e) {
					return e.constructor === s.ProgramNode ? e : (n.yy = s, n.parse(e))
				}, p = i, g = function(e) {
					var t = {},
						i = e;

					function n() {}
					return t.Compiler = n, n.prototype = {
						compiler: n,
						disassemble: function() {
							for (var e, t, i, n = this.opcodes, s = [], r = 0, o = n.length; r < o; r++)
								if ("DECLARE" === (e = n[r]).opcode) s.push("DECLARE " + e.name + "=" + e.value);
								else {
									t = [];
									for (var a = 0; a < e.args.length; a++) "string" == typeof(i = e.args[a]) && (i = '"' + i.replace("\n", "\\n") + '"'), t.push(i);
									s.push(e.opcode + " " + t.join(" "))
								} return s.join("\n")
						},
						equals: function(e) {
							var t = this.opcodes.length;
							if (e.opcodes.length !== t) return !1;
							for (var i = 0; i < t; i++) {
								var n = this.opcodes[i],
									s = e.opcodes[i];
								if (n.opcode !== s.opcode || n.args.length !== s.args.length) return !1;
								for (var r = 0; r < n.args.length; r++)
									if (n.args[r] !== s.args[r]) return !1
							}
							if (t = this.children.length, e.children.length !== t) return !1;
							for (i = 0; i < t; i++)
								if (!this.children[i].equals(e.children[i])) return !1;
							return !0
						},
						guid: 0,
						compile: function(e, t) {
							this.opcodes = [], this.children = [], this.depths = {
								list: []
							}, this.options = t;
							var i = this.options.knownHelpers;
							if (this.options.knownHelpers = {
									helperMissing: !0,
									blockHelperMissing: !0,
									each: !0,
									if: !0,
									unless: !0,
									with: !0,
									log: !0
								}, i)
								for (var n in i) this.options.knownHelpers[n] = i[n];
							return this.accept(e)
						},
						accept: function(e) {
							var t, i = e.strip || {};
							return i.left && this.opcode("strip"), t = this[e.type](e), i.right && this.opcode("strip"), t
						},
						program: function(e) {
							for (var t = e.statements, i = 0, n = t.length; i < n; i++) this.accept(t[i]);
							return this.isSimple = 1 === n, this.depths.list = this.depths.list.sort((function(e, t) {
								return e - t
							})), this
						},
						compileProgram: function(e) {
							var t, i = (new this.compiler).compile(e, this.options),
								n = this.guid++;
							this.usePartial = this.usePartial || i.usePartial, this.children[n] = i;
							for (var s = 0, r = i.depths.list.length; s < r; s++)(t = i.depths.list[s]) < 2 || this.addDepth(t - 1);
							return n
						},
						block: function(e) {
							var t = e.mustache,
								i = e.program,
								n = e.inverse;
							i && (i = this.compileProgram(i)), n && (n = this.compileProgram(n));
							var s = t.sexpr,
								r = this.classifySexpr(s);
							"helper" === r ? this.helperSexpr(s, i, n) : "simple" === r ? (this.simpleSexpr(s), this.opcode("pushProgram", i), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("blockValue")) : (this.ambiguousSexpr(s, i, n), this.opcode("pushProgram", i), this.opcode("pushProgram", n), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append")
						},
						hash: function(e) {
							var t, i, n = e.pairs;
							this.opcode("pushHash");
							for (var s = 0, r = n.length; s < r; s++) i = (t = n[s])[1], this.options.stringParams ? (i.depth && this.addDepth(i.depth), this.opcode("getContext", i.depth || 0), this.opcode("pushStringParam", i.stringModeValue, i.type), "sexpr" === i.type && this.sexpr(i)) : this.accept(i), this.opcode("assignToHash", t[0]);
							this.opcode("popHash")
						},
						partial: function(e) {
							var t = e.partialName;
							this.usePartial = !0, e.context ? this.ID(e.context) : this.opcode("push", "depth0"), this.opcode("invokePartial", t.name), this.opcode("append")
						},
						content: function(e) {
							this.opcode("appendContent", e.string)
						},
						mustache: function(e) {
							this.sexpr(e.sexpr), e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
						},
						ambiguousSexpr: function(e, t, i) {
							var n = e.id,
								s = n.parts[0],
								r = null != t || null != i;
							this.opcode("getContext", n.depth), this.opcode("pushProgram", t), this.opcode("pushProgram", i), this.opcode("invokeAmbiguous", s, r)
						},
						simpleSexpr: function(e) {
							var t = e.id;
							"DATA" === t.type ? this.DATA(t) : t.parts.length ? this.ID(t) : (this.addDepth(t.depth), this.opcode("getContext", t.depth), this.opcode("pushContext")), this.opcode("resolvePossibleLambda")
						},
						helperSexpr: function(e, t, n) {
							var s = this.setupFullMustacheParams(e, t, n),
								r = e.id.parts[0];
							if (this.options.knownHelpers[r]) this.opcode("invokeKnownHelper", s.length, r);
							else {
								if (this.options.knownHelpersOnly) throw new i("You specified knownHelpersOnly, but used the unknown helper " + r, e);
								this.opcode("invokeHelper", s.length, r, e.isRoot)
							}
						},
						sexpr: function(e) {
							var t = this.classifySexpr(e);
							"simple" === t ? this.simpleSexpr(e) : "helper" === t ? this.helperSexpr(e) : this.ambiguousSexpr(e)
						},
						ID: function(e) {
							this.addDepth(e.depth), this.opcode("getContext", e.depth), e.parts[0] ? this.opcode("lookupOnContext", e.parts[0]) : this.opcode("pushContext");
							for (var t = 1, i = e.parts.length; t < i; t++) this.opcode("lookup", e.parts[t])
						},
						DATA: function(e) {
							if (this.options.data = !0, e.id.isScoped || e.id.depth) throw new i("Scoped data references are not supported: " + e.original, e);
							this.opcode("lookupData");
							for (var t = e.id.parts, n = 0, s = t.length; n < s; n++) this.opcode("lookup", t[n])
						},
						STRING: function(e) {
							this.opcode("pushString", e.string)
						},
						INTEGER: function(e) {
							this.opcode("pushLiteral", e.integer)
						},
						BOOLEAN: function(e) {
							this.opcode("pushLiteral", e.bool)
						},
						comment: function() {},
						opcode: function(e) {
							this.opcodes.push({
								opcode: e,
								args: [].slice.call(arguments, 1)
							})
						},
						declare: function(e, t) {
							this.opcodes.push({
								opcode: "DECLARE",
								name: e,
								value: t
							})
						},
						addDepth: function(e) {
							0 !== e && (this.depths[e] || (this.depths[e] = !0, this.depths.list.push(e)))
						},
						classifySexpr: function(e) {
							var t = e.isHelper,
								i = e.eligibleHelper,
								n = this.options;
							if (i && !t) {
								var s = e.id.parts[0];
								n.knownHelpers[s] ? t = !0 : n.knownHelpersOnly && (i = !1)
							}
							return t ? "helper" : i ? "ambiguous" : "simple"
						},
						pushParams: function(e) {
							for (var t, i = e.length; i--;) t = e[i], this.options.stringParams ? (t.depth && this.addDepth(t.depth), this.opcode("getContext", t.depth || 0), this.opcode("pushStringParam", t.stringModeValue, t.type), "sexpr" === t.type && this.sexpr(t)) : this[t.type](t)
						},
						setupFullMustacheParams: function(e, t, i) {
							var n = e.params;
							return this.pushParams(n), this.opcode("pushProgram", t), this.opcode("pushProgram", i), e.hash ? this.hash(e.hash) : this.opcode("emptyHash"), n
						}
					}, t.precompile = function(e, t, n) {
						if (null == e || "string" != typeof e && e.constructor !== n.AST.ProgramNode) throw new i("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
						"data" in (t = t || {}) || (t.data = !0);
						var s = n.parse(e),
							r = (new n.Compiler).compile(s, t);
						return (new n.JavaScriptCompiler).compile(r, t)
					}, t.compile = function(e, t, n) {
						if (null == e || "string" != typeof e && e.constructor !== n.AST.ProgramNode) throw new i("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
						var s;

						function r() {
							var i = n.parse(e),
								s = (new n.Compiler).compile(i, t),
								r = (new n.JavaScriptCompiler).compile(s, t, void 0, !0);
							return n.template(r)
						}
						return "data" in (t = t || {}) || (t.data = !0),
							function(e, t) {
								return s || (s = r()), s.call(this, e, t)
							}
					}, t
				}(a), m = function(e, t, i, n, s) {
					var r = e,
						o = t,
						a = i.parser,
						c = i.parse,
						l = n.Compiler,
						d = n.compile,
						u = n.precompile,
						h = s,
						p = r.create,
						g = function() {
							var e = p();
							return e.compile = function(t, i) {
								return d(t, i, e)
							}, e.precompile = function(t, i) {
								return u(t, i, e)
							}, e.AST = o, e.Compiler = l, e.JavaScriptCompiler = h, e.Parser = a, e.parse = c, e
						};
					return (r = g()).create = g, r
				}(d, u, p, g, function(e, t) {
					var i = e.COMPILER_REVISION,
						n = e.REVISION_CHANGES,
						s = e.log,
						r = t;

					function o(e) {
						this.value = e
					}

					function a() {}
					a.prototype = {
						nameLookup: function(e, t) {
							var i, n;
							return 0 === e.indexOf("depth") && (i = !0), n = /^[0-9]+$/.test(t) ? e + "[" + t + "]" : a.isValidJavaScriptVariableName(t) ? e + "." + t : e + "['" + t + "']", i ? "(" + e + " && " + n + ")" : n
						},
						compilerInfo: function() {
							return "this.compilerInfo = [" + i + ",'" + n[i] + "'];\n"
						},
						appendToBuffer: function(e) {
							return this.environment.isSimple ? "return " + e + ";" : {
								appendToBuffer: !0,
								content: e,
								toString: function() {
									return "buffer += " + e + ";"
								}
							}
						},
						initializeBuffer: function() {
							return this.quotedString("")
						},
						namespace: "Handlebars",
						compile: function(e, t, i, n) {
							this.environment = e, this.options = t || {}, s("debug", this.environment.disassemble() + "\n\n"), this.name = this.environment.name, this.isChild = !!i, this.context = i || {
								programs: [],
								environments: [],
								aliases: {}
							}, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.registers = {
								list: []
							}, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.compileChildren(e, t);
							var o, a = e.opcodes;
							this.i = 0;
							for (var c = a.length; this.i < c; this.i++) "DECLARE" === (o = a[this.i]).opcode ? this[o.name] = o.value : this[o.opcode].apply(this, o.args), o.opcode !== this.stripNext && (this.stripNext = !1);
							if (this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length) throw new r("Compile completed with content left on stack");
							return this.createFunctionContext(n)
						},
						preamble: function() {
							var e = [];
							if (this.isChild) e.push("");
							else {
								var t = this.namespace,
									i = "helpers = this.merge(helpers, " + t + ".helpers);";
								this.environment.usePartial && (i = i + " partials = this.merge(partials, " + t + ".partials);"), this.options.data && (i += " data = data || {};"), e.push(i)
							}
							this.environment.isSimple ? e.push("") : e.push(", buffer = " + this.initializeBuffer()), this.lastContext = 0, this.source = e
						},
						createFunctionContext: function(e) {
							var t = this.stackVars.concat(this.registers.list);
							if (t.length > 0 && (this.source[1] = this.source[1] + ", " + t.join(", ")), !this.isChild)
								for (var i in this.context.aliases) this.context.aliases.hasOwnProperty(i) && (this.source[1] = this.source[1] + ", " + i + "=" + this.context.aliases[i]);
							this.source[1] && (this.source[1] = "var " + this.source[1].substring(2) + ";"), this.isChild || (this.source[1] += "\n" + this.context.programs.join("\n") + "\n"), this.environment.isSimple || this.pushSource("return buffer;");
							for (var n = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"], r = 0, o = this.environment.depths.list.length; r < o; r++) n.push("depth" + this.environment.depths.list[r]);
							var a = this.mergeSource();
							if (this.isChild || (a = this.compilerInfo() + a), e) return n.push(a), Function.apply(this, n);
							var c = "function " + (this.name || "") + "(" + n.join(",") + ") {\n  " + a + "}";
							return s("debug", c + "\n\n"), c
						},
						mergeSource: function() {
							for (var e, t = "", i = 0, n = this.source.length; i < n; i++) {
								var s = this.source[i];
								s.appendToBuffer ? e = e ? e + "\n    + " + s.content : s.content : (e && (t += "buffer += " + e + ";\n  ", e = void 0), t += s + "\n  ")
							}
							return t
						},
						blockValue: function() {
							this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
							var e = ["depth0"];
							this.setupParams(0, e), this.replaceStack((function(t) {
								return e.splice(1, 0, t), "blockHelperMissing.call(" + e.join(", ") + ")"
							}))
						},
						ambiguousBlockValue: function() {
							this.context.aliases.blockHelperMissing = "helpers.blockHelperMissing";
							var e = ["depth0"];
							this.setupParams(0, e);
							var t = this.topStack();
							e.splice(1, 0, t), this.pushSource("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
						},
						appendContent: function(e) {
							this.pendingContent && (e = this.pendingContent + e), this.stripNext && (e = e.replace(/^\s+/, "")), this.pendingContent = e
						},
						strip: function() {
							this.pendingContent && (this.pendingContent = this.pendingContent.replace(/\s+$/, "")), this.stripNext = "strip"
						},
						append: function() {
							this.flushInline();
							var e = this.popStack();
							this.pushSource("if(" + e + " || " + e + " === 0) { " + this.appendToBuffer(e) + " }"), this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
						},
						appendEscaped: function() {
							this.context.aliases.escapeExpression = "this.escapeExpression", this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
						},
						getContext: function(e) {
							this.lastContext !== e && (this.lastContext = e)
						},
						lookupOnContext: function(e) {
							this.push(this.nameLookup("depth" + this.lastContext, e, "context"))
						},
						pushContext: function() {
							this.pushStackLiteral("depth" + this.lastContext)
						},
						resolvePossibleLambda: function() {
							this.context.aliases.functionType = '"function"', this.replaceStack((function(e) {
								return "typeof " + e + " === functionType ? " + e + ".apply(depth0) : " + e
							}))
						},
						lookup: function(e) {
							this.replaceStack((function(t) {
								return t + " == null || " + t + " === false ? " + t + " : " + this.nameLookup(t, e, "context")
							}))
						},
						lookupData: function() {
							this.pushStackLiteral("data")
						},
						pushStringParam: function(e, t) {
							this.pushStackLiteral("depth" + this.lastContext), this.pushString(t), "sexpr" !== t && ("string" == typeof e ? this.pushString(e) : this.pushStackLiteral(e))
						},
						emptyHash: function() {
							this.pushStackLiteral("{}"), this.options.stringParams && (this.push("{}"), this.push("{}"))
						},
						pushHash: function() {
							this.hash && this.hashes.push(this.hash), this.hash = {
								values: [],
								types: [],
								contexts: []
							}
						},
						popHash: function() {
							var e = this.hash;
							this.hash = this.hashes.pop(), this.options.stringParams && (this.push("{" + e.contexts.join(",") + "}"), this.push("{" + e.types.join(",") + "}")), this.push("{\n    " + e.values.join(",\n    ") + "\n  }")
						},
						pushString: function(e) {
							this.pushStackLiteral(this.quotedString(e))
						},
						push: function(e) {
							return this.inlineStack.push(e), e
						},
						pushLiteral: function(e) {
							this.pushStackLiteral(e)
						},
						pushProgram: function(e) {
							null != e ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
						},
						invokeHelper: function(e, t, i) {
							this.context.aliases.helperMissing = "helpers.helperMissing", this.useRegister("helper");
							var n = this.lastHelper = this.setupHelper(e, t, !0),
								s = this.nameLookup("depth" + this.lastContext, t, "context"),
								r = "helper = " + n.name + " || " + s;
							n.paramsInit && (r += "," + n.paramsInit), this.push("(" + r + ",helper ? helper.call(" + n.callParams + ") : helperMissing.call(" + n.helperMissingParams + "))"), i || this.flushInline()
						},
						invokeKnownHelper: function(e, t) {
							var i = this.setupHelper(e, t);
							this.push(i.name + ".call(" + i.callParams + ")")
						},
						invokeAmbiguous: function(e, t) {
							this.context.aliases.functionType = '"function"', this.useRegister("helper"), this.emptyHash();
							var i = this.setupHelper(0, e, t),
								n = this.lastHelper = this.nameLookup("helpers", e, "helper"),
								s = this.nameLookup("depth" + this.lastContext, e, "context"),
								r = this.nextStack();
							i.paramsInit && this.pushSource(i.paramsInit), this.pushSource("if (helper = " + n + ") { " + r + " = helper.call(" + i.callParams + "); }"), this.pushSource("else { helper = " + s + "; " + r + " = typeof helper === functionType ? helper.call(" + i.callParams + ") : helper; }")
						},
						invokePartial: function(e) {
							var t = [this.nameLookup("partials", e, "partial"), "'" + e + "'", this.popStack(), "helpers", "partials"];
							this.options.data && t.push("data"), this.context.aliases.self = "this", this.push("self.invokePartial(" + t.join(", ") + ")")
						},
						assignToHash: function(e) {
							var t, i, n = this.popStack();
							this.options.stringParams && (i = this.popStack(), t = this.popStack());
							var s = this.hash;
							t && s.contexts.push("'" + e + "': " + t), i && s.types.push("'" + e + "': " + i), s.values.push("'" + e + "': (" + n + ")")
						},
						compiler: a,
						compileChildren: function(e, t) {
							for (var i, n, s = e.children, r = 0, o = s.length; r < o; r++) {
								i = s[r], n = new this.compiler;
								var a = this.matchExistingProgram(i);
								null == a ? (this.context.programs.push(""), a = this.context.programs.length, i.index = a, i.name = "program" + a, this.context.programs[a] = n.compile(i, t, this.context), this.context.environments[a] = i) : (i.index = a, i.name = "program" + a)
							}
						},
						matchExistingProgram: function(e) {
							for (var t = 0, i = this.context.environments.length; t < i; t++) {
								var n = this.context.environments[t];
								if (n && n.equals(e)) return t
							}
						},
						programExpression: function(e) {
							if (this.context.aliases.self = "this", null == e) return "self.noop";
							for (var t, i = this.environment.children[e], n = i.depths.list, s = [i.index, i.name, "data"], r = 0, o = n.length; r < o; r++) 1 === (t = n[r]) ? s.push("depth0") : s.push("depth" + (t - 1));
							return (0 === n.length ? "self.program(" : "self.programWithDepth(") + s.join(", ") + ")"
						},
						register: function(e, t) {
							this.useRegister(e), this.pushSource(e + " = " + t + ";")
						},
						useRegister: function(e) {
							this.registers[e] || (this.registers[e] = !0, this.registers.list.push(e))
						},
						pushStackLiteral: function(e) {
							return this.push(new o(e))
						},
						pushSource: function(e) {
							this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))), this.pendingContent = void 0), e && this.source.push(e)
						},
						pushStack: function(e) {
							this.flushInline();
							var t = this.incrStack();
							return e && this.pushSource(t + " = " + e + ";"), this.compileStack.push(t), t
						},
						replaceStack: function(e) {
							var t, i, n, s = "",
								r = this.isInline();
							if (r) {
								var a = this.popStack(!0);
								if (a instanceof o) t = a.value, n = !0;
								else {
									var c = (i = !this.stackSlot) ? this.incrStack() : this.topStackName();
									s = "(" + this.push(c) + " = " + a + "),", t = this.topStack()
								}
							} else t = this.topStack();
							var l = e.call(this, t);
							return r ? (n || this.popStack(), i && this.stackSlot--, this.push("(" + s + l + ")")) : (/^stack/.test(t) || (t = this.nextStack()), this.pushSource(t + " = (" + s + l + ");")), t
						},
						nextStack: function() {
							return this.pushStack()
						},
						incrStack: function() {
							return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName()
						},
						topStackName: function() {
							return "stack" + this.stackSlot
						},
						flushInline: function() {
							var e = this.inlineStack;
							if (e.length) {
								this.inlineStack = [];
								for (var t = 0, i = e.length; t < i; t++) {
									var n = e[t];
									n instanceof o ? this.compileStack.push(n) : this.pushStack(n)
								}
							}
						},
						isInline: function() {
							return this.inlineStack.length
						},
						popStack: function(e) {
							var t = this.isInline(),
								i = (t ? this.inlineStack : this.compileStack).pop();
							if (!e && i instanceof o) return i.value;
							if (!t) {
								if (!this.stackSlot) throw new r("Invalid stack pop");
								this.stackSlot--
							}
							return i
						},
						topStack: function(e) {
							var t = this.isInline() ? this.inlineStack : this.compileStack,
								i = t[t.length - 1];
							return !e && i instanceof o ? i.value : i
						},
						quotedString: function(e) {
							return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
						},
						setupHelper: function(e, t, i) {
							var n = [];
							return {
								params: n,
								paramsInit: this.setupParams(e, n, i),
								name: this.nameLookup("helpers", t, "helper"),
								callParams: ["depth0"].concat(n).join(", "),
								helperMissingParams: i && ["depth0", this.quotedString(t)].concat(n).join(", ")
							}
						},
						setupOptions: function(e, t) {
							var i, n, s, r = [],
								o = [],
								a = [];
							r.push("hash:" + this.popStack()), this.options.stringParams && (r.push("hashTypes:" + this.popStack()), r.push("hashContexts:" + this.popStack())), n = this.popStack(), ((s = this.popStack()) || n) && (s || (this.context.aliases.self = "this", s = "self.noop"), n || (this.context.aliases.self = "this", n = "self.noop"), r.push("inverse:" + n), r.push("fn:" + s));
							for (var c = 0; c < e; c++) i = this.popStack(), t.push(i), this.options.stringParams && (a.push(this.popStack()), o.push(this.popStack()));
							return this.options.stringParams && (r.push("contexts:[" + o.join(",") + "]"), r.push("types:[" + a.join(",") + "]")), this.options.data && r.push("data:data"), r
						},
						setupParams: function(e, t, i) {
							var n = "{" + this.setupOptions(e, t).join(",") + "}";
							return i ? (this.useRegister("options"), t.push("options"), "options=" + n) : (t.push(n), "")
						}
					};
					for (var c = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), l = a.RESERVED_WORDS = {}, d = 0, u = c.length; d < u; d++) l[c[d]] = !0;
					return a.isValidJavaScriptVariableName = function(e) {
						return !(a.RESERVED_WORDS[e] || !/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e))
					}, a
				}(c, a)), m);
				t.Z = f
			},
			3644: function(e, t, i) {
				"use strict";
				var n = i(5175);
				! function() {
					const e = new n.Tracker(n.Product.GOOGLE_AD_MANAGER);
					class t {
						constructor(e) {
							window.googletag ? window.googletag.pubads && window.googletag.pubads() && (t.onTrackerLoadedTrackInitialisationStep("setup_can_start"), this.adTargeting = e, this.isSearch = window.location.pathname.includes("/search/"), this.configureAdManagerSettings()) : t.fireRollbarWarning("Google Ad Manager: AdConfigurationHandler did not find googletag.")
						}
						configureAdManagerSettings() {
							window.googletag.pubads().enableSingleRequest(), window.googletag.pubads().collapseEmptyDivs(), this.setTargeting(), this.checkIfInitialLoadDisableNeeded(), this.activateLazyLoad(), window.googletag.enableServices()
						}
						setTargeting() {
							this.adTargeting.forEach((e => {
								window.googletag.pubads().setTargeting(e.key, e.value)
							}))
						}
						checkIfInitialLoadDisableNeeded() {
							this.isSearch && (window.googletag.pubads().disableInitialLoad(), document.dispatchEvent(new Event("gam_loaded")))
						}
						activateLazyLoad() {
							window.googletag.pubads().enableLazyLoad({
								fetchMarginPercent: 70,
								renderMarginPercent: 35,
								mobileScaling: 1.5
							})
						}
						static onTrackerLoadedTrackInitialisationStep(e) {
							window.DatalakeEventTrackerLoaded ? t.trackInitialisationStep(e) : document.addEventListener("DatalakeEventTrackerLoaded", (() => {
								t.trackInitialisationStep(e)
							}), {
								once: !0
							})
						}
						static trackInitialisationStep(t) {
							const i = {
								action: n.Action.NON_INTERACTIVE,
								label: t
							};
							e.trackStructuredEvent(i)
						}
						static fireRollbarWarning(e) {
							window.Rollbar && Rollbar.warn(e)
						}
					}
					document.addEventListener("gam_start", (() => {
						t.onTrackerLoadedTrackInitialisationStep("setup_triggered")
					}), {
						once: !0
					}), document.addEventListener("gam_ready", (e => {
						e && e.detail && e.detail.targeting ? new t(e.detail.targeting) : t.fireRollbarWarning("Google Ad Manager: AdConfigurationHandler listener called with incomplete info.")
					}), {
						once: !0
					})
				}()
			},
			1368: function() {
				! function() {
					class e {
						constructor(e) {
							window.googletag ? window.googletag.pubads && window.googletag.pubads() && (this.adUnits = e, this.isSearch = window.location.pathname.includes("/search/"), this.isCountry = window.location.pathname.includes("/countries/"), this.topCount = 0, this.prepareSlots()) : AdConfigurationHandler.fireRollbarWarning("Google Ad Manager: AdConfigurationHandler did not find googletag.")
						}
						prepareSlots() {
							window.adSlots = {}, this.adUnits.forEach((e => {
								const t = this.getBareBoneAdSlot(e);
								this.enrichAdSlotWithSizeMapping(e, t), this.storeAdSlot(e, t)
							}))
						}
						getBareBoneAdSlot(e) {
							return window.googletag.defineSlot(`/21707809931/${e.code}`, e.dimensions, e.containerID).addService(window.googletag.pubads())
						}
						enrichAdSlotWithSizeMapping(e, t) {
							if (!this.isMappingNeededForThisSlot(e)) return;
							let i;
							const n = [this.getMappingIfAdvancedVisibilitySlotOnSearch, this.getMappingIfMobileAdvancedVisibilitySlotOnSearch, this.getMappingIfSecondTopVisibilitySlotOnSearch, this.getMappingIfTopVisibilitySlotOnCountryPage, this.getMappingIfMobileAdvancedVisibilitySlot, this.getDefaultSlotMapping];
							for (; !i;) i = n[0].bind(this)(e), n.shift();
							this.updateTopCount(e), this.wrapUpSizeMapping(i, t)
						}
						storeAdSlot(e, t) {
							const i = this.getSlotTypeForAdUnit(e),
								n = window.adSlots[i],
								s = void 0 !== n ? n : [];
							s.push(t), window.adSlots[i] = s
						}
						getMappingIfAdvancedVisibilitySlotOnSearch(e) {
							if (this.isAdvancedVisibilitySlotOnSearch(e)) return window.googletag.sizeMapping().addSize([1096, 0], [e.dimensions]).addSize([752, 0], []).addSize([743, 0], [e.dimensions])
						}
						getMappingIfMobileAdvancedVisibilitySlotOnSearch(e) {
							if (this.isMobileAdvancedVisibilitySlotOnSearch(e)) return window.googletag.sizeMapping().addSize([1096, 0], []).addSize([752, 0], [e.dimensions]).addSize([743, 0], []).addSize([352, 0], [e.dimensions])
						}
						getMappingIfSecondTopVisibilitySlotOnSearch(e) {
							if (this.isSecondTopVisibilitySlotOnSearch(e)) return window.googletag.sizeMapping().addSize([984, 0], [e.dimensions]).addSize([752, 0], []).addSize([648, 0], [e.dimensions])
						}
						getMappingIfTopVisibilitySlotOnCountryPage(e) {
							if (this.isTopVisibilitySlotOnCountryPage(e)) return window.googletag.sizeMapping().addSize([769, 0], 0 === this.topCount ? [e.dimensions] : []).addSize([332, 0], 1 === this.topCount ? [e.dimensions] : [])
						}
						getMappingIfMobileAdvancedVisibilitySlot(e) {
							if (this.isMobileAdvancedVisibilitySlot(e)) return window.googletag.sizeMapping().addSize([752, 0], []).addSize([352, 0], [e.dimensions])
						}
						getDefaultSlotMapping(e) {
							let t = 728;
							return this.isTopVisibilitySlot(e) && (t = 16 * this.topCount + 300 * (this.topCount + 1)), window.googletag.sizeMapping().addSize([32 + t, 0], [e.dimensions])
						}
						wrapUpSizeMapping(e, t) {
							e = e.addSize([0, 0], []).build(), t.defineSizeMapping(e)
						}
						updateTopCount(e) {
							this.isTopVisibilitySlot(e) && this.topCount++
						}
						getSlotTypeForAdUnit(e) {
							switch (e.dimensions[1]) {
								case 50:
									return "mobileAdvanced";
								case 90:
									return "advanced";
								case 100:
									return "standard";
								case 250:
									return "top";
								default:
									return ""
							}
						}
						isMappingNeededForThisSlot(e) {
							return 100 !== e.dimensions[1]
						}
						isTopVisibilitySlot(e) {
							return 250 === e.dimensions[1]
						}
						isMobileAdvancedVisibilitySlot(e) {
							return 50 === e.dimensions[1]
						}
						isAdvancedVisibilitySlotOnSearch(e) {
							return this.isSearch && 90 === e.dimensions[1]
						}
						isMobileAdvancedVisibilitySlotOnSearch(e) {
							return this.isSearch && 50 === e.dimensions[1]
						}
						isSecondTopVisibilitySlotOnSearch(e) {
							return this.isSearch && 250 === e.dimensions[1] && 1 === this.topCount
						}
						isTopVisibilitySlotOnCountryPage(e) {
							return this.isCountry && 250 === e.dimensions[1]
						}
						static fireRollbarWarning(e) {
							window.Rollbar && Rollbar.warn(e)
						}
					}
					document.addEventListener("gam_ready", (t => {
						t && t.detail && t.detail.units ? new e(t.detail.units) : e.fireRollbarWarning("Google Ad Manager: AdSlotHandler listener called with incomplete info.")
					}), {
						once: !0
					})
				}()
			},
			7066: function(e, t, i) {
				"use strict";
				i(7360), i(9762), i(4028)
			},
			723: function(e, t, i) {
				"use strict";
				i(2270), i(7066), i(7360), i(6329)
			},
			1347: function(e, t, i) {},
			1872: function(e, t, i) {
				"use strict";
				var n = i(1480),
					s = i(3928);
				const r = function() {
					const e = {
						popup: null,
						popupContent: null,
						explanation: null,
						form: null,
						currentFeedbackType: null,
						currentFeedbackCategory: null,
						sendable: !0,
						sendCount: 0,
						sendLimit: 3,
						init() {
							return !!document.getElementById("ContentFeedbackTool") && (this.popupContent = document.getElementById("FeedbackPlaceholderContainer"), this.explanation = document.getElementById("Explanation"), this.form = this.popupContent.getElementsByTagName("form")[0], this.popup = this.initPopup(), !!this.popup && (this.initClickEvents(), !0))
						},
						initPopup() {
							return void 0 === window.ModalManager && (window.ModalManager = new n.ModalManager), new n.SimpleModal(this.popupContent, {
								destroyOnClose: !1,
								cssClassName: "ContentFeedbackToolModal",
								onClose: this.closePopUp.bind(this)
							})
						},
						initClickEvents() {
							const e = document.getElementsByClassName("js-OpenCFT")[0],
								t = this.popupContent.getElementsByTagName("li");
							e.addEventListener("click", (() => {
								this.openPopUp()
							})), this.form.addEventListener("submit", (e => {
								this.submit(e)
							}));
							for (var i = 0; i < t.length; i++) t[i].addEventListener("click", (e => {
								this.clickOnSelection(e.target)
							}))
						},
						clickOnSelection(e) {
							const t = document.getElementById("ExplanationTitle"),
								i = document.getElementById("Explanation"),
								n = -1 !== window.location.href.indexOf("studies"),
								s = -1 !== window.location.href.indexOf("courses"),
								r = -1 !== window.location.href.indexOf("universities"),
								o = -1 !== window.location.href.indexOf("venues");
							let a = "";
							const c = e.parentNode.querySelector("input");
							c && (this.currentFeedbackCategory = c.id, this.currentFeedbackType = e.parentNode.getAttribute("data-ExplanationTitle"), t.innerHTML = this.currentFeedbackType, (n || s) && (a = placeholderContent[0][this.currentFeedbackCategory]), (r || o) && (a = placeholderContent[1][this.currentFeedbackCategory]), i.setAttribute("placeholder", a), window.setTimeout((function() {
								document.getElementById("Explanation").focus()
							}), 800), this.moveToPage(2))
						},
						openPopUp() {
							window.ModalManager.open(this.popup), this.popupContent.classList.remove("Hidden")
						},
						closePopUp() {
							this.form.reset(), this.moveToPage(0)
						},
						moveToPage(e) {
							const t = this.popupContent.getElementsByClassName("FeedbackFooter")[0],
								i = document.getElementById("CenteredContent"),
								n = t.children;
							let s, r = -1;
							for (i.className = "Page" + e, s = 0; s < n.length; s++) n[s].classList.add("Invisible");
							for (s = -1; r !== e && s < n.length - 1;) s++, r = parseInt(n[s].getAttribute("data-page"), 10);
							r === e && n[s].classList.remove("Invisible")
						},
						submit(e) {
							if (e && e.preventDefault(), !1 === this.sendable || this.sendCount >= this.sendLimit) return;
							this.sendCount++;
							const t = window.location.pathname.split("/");
							t.shift();
							const i = {
								entityType: t[0],
								entityID: t[1],
								entityName: t[2],
								appVersion: navigator.appVersion,
								url: window.location.href,
								screenResolution: screen.width + "x" + screen.height,
								windowResolution: document.documentElement.clientWidth + "x" + document.documentElement.clientHeight,
								feedbackType: this.currentFeedbackCategory,
								messageContent: this.explanation.value,
								portal: window.location.hostname,
								dateTime: (new Date).toUTCString(),
								IP: s.default.getTrackData().ip,
								lastSearch: s.default.getTrackData().search
							};
							void 0 !== i.lastSearch && null !== i.lastSearch || (i.lastSearch = "unknown"), this.moveToPage(3);
							let n = new Headers;
							n.append("content-type", "application/x-www-form-urlencoded; charset=UTF-8"), fetch(feedbackUrl, {
								body: ServiceLayerClient.parseBody(i),
								method: "post",
								headers: n
							})
						},
						disableSending() {
							this.sendable = !1
						}
					};
					return {
						init: e.init.bind(e),
						disableSending: e.disableSending.bind(e)
					}
				}();
				document.addEventListener("DOMContentLoaded", (function() {
					r.init()
				}))
			},
			5448: function(e, t, i) {
				"use strict";
				var n = i(8328);
				class s {
					constructor() {
						this.name = "CookiesAreFineWithMe", this.ttl = 31536e3
					}
					init() {
						this.wrapper = document.getElementById("CookieWall"), this.wrapper && (window.Loot && window.Loot.DataStorage && window.Loot.DataStorage.retrieve(this.name) || this.showCookieWall(), this.checkUserSession())
					}
					checkUserSession() {
						"undefined" != typeof EventAggregationService && (EventAggregationService.subscribeTo(n.SessionCreatedEvent.EventType, {
							notify: () => {
								this.closeCookieWall()
							}
						}), EventAggregationService.subscribeTo(n.SessionServiceReadyEvent.EventType, {
							notify: e => {
								this.onSessionServiceReady(e.sessionService)
							}
						}, !0))
					}
					async onSessionServiceReady(e) {
						null !== await e.getSession() && this.closeCookieWall()
					}
					showCookieWall() {
						this.wrapper.classList.remove("Hidden");
						const e = this.wrapper.querySelector("#CookieButton");
						e && e.addEventListener("click", (() => {
							this.closeCookieWall()
						}))
					}
					closeCookieWall() {
						this.wrapper.classList.add("Hidden"), window.Loot && window.Loot.DataStorage && Loot.DataStorage.store(this.name, !0, this.ttl)
					}
				}
				document.addEventListener("DOMContentLoaded", (() => {
					(new s).init()
				}))
			},
			1454: function(e, t, i) {
				"use strict";
				var n = i(8328);
				class s {
					constructor() {
						this.drawer = document.getElementById("wishlistDrawer"), void 0 !== this.drawer && (this.drawerContent = this.drawer.querySelector("#wishlistDrawerContent"), this.drawerTitle = this.drawer.querySelector("#wishlistDrawerTitle"), this.closeButton = this.drawer.querySelector(".CloseButton"), this.wishlistWrapper = this.drawerContent.querySelector(".WishlistWrapper"), this.comparisonWrapper = this.drawerContent.querySelector(".ComparisonToolWrapper"), this.authServiceWrapper = this.drawerContent.querySelector(".AuthServiceWrapper"), this.backToWishlist = this.drawerContent.querySelector("#backToWishlist"), this.init())
					}
					init() {
						this.attachListeners()
					}
					attachListeners() {
						document.addEventListener("openWishlistDrawer", this.openDrawer.bind(this)), document.addEventListener("closeWishlistDrawer", this.closeDrawer.bind(this)), document.addEventListener("load_comparison", (() => {
							this.switchMode("Comparing")
						})), document.addEventListener("show_auth_service_in_wishlist", this.triggerAuthenticationService.bind(this)), this.backToWishlist.addEventListener("click", (() => {
							this.switchMode("Wishlist"), document.dispatchEvent(new Event("close_comparison")), this.trackBackToWishlist("Comparison", "return_to_wishlist")
						})), this.closeButton.addEventListener("click", (() => {
							document.dispatchEvent(new Event("closeWishlistDrawer"))
						})), this.drawer.addEventListener("click", (e => {
							this.drawer === e.target && document.dispatchEvent(new Event("closeWishlistDrawer"))
						}))
					}
					openDrawer() {
						this.drawer.classList.add("Opened"), document.body.setAttribute("data-wishlist-drawer", ""), requestAnimationFrame((() => {
							this.drawer.classList.add("Animate")
						}))
					}
					closeDrawer() {
						this.drawer.classList.remove("Animate"), document.body.removeAttribute("data-wishlist-drawer"), setTimeout((() => {
							this.drawer.classList.remove("Opened")
						}), 400)
					}
					switchMode(e) {
						if (this.drawerContent) switch (e) {
							case "Wishlist":
								this.wishlistMode();
								break;
							case "Comparing":
								this.compareMode();
								break;
							default:
								this.registerMode()
						}
					}
					wishlistMode() {
						this.drawerTitle.innerText = "Wishlist", this.comparisonWrapper.classList.add("Hidden"), this.authServiceWrapper.classList.add("Hidden"), this.wishlistWrapper.classList.remove("Hidden"), this.drawerContent.classList.remove("ComparisonMode")
					}
					compareMode() {
						this.drawerTitle.innerText = "Comparing", this.wishlistWrapper.classList.add("Hidden"), this.authServiceWrapper.classList.add("Hidden"), this.comparisonWrapper.classList.remove("Hidden"), this.drawerContent.classList.add("ComparisonMode")
					}
					registerMode() {
						this.wishlistWrapper.classList.add("Hidden"), this.comparisonWrapper.classList.add("Hidden"), this.authServiceWrapper.classList.remove("Hidden"), this.drawerContent.classList.remove("ComparisonMode")
					}
					trackBackToWishlist(e, t) {
						window.ga && ga("send", "event", e, t), window.snowplow && snowplow("trackStructEvent", {
							category: e,
							action: t
						})
					}
					triggerAuthenticationService() {
						if ("true" !== sessionStorage.getItem("LoggedInStatus")) {
							const e = this.authServiceWrapper.querySelector(".AuthPlaceholder").getAttribute("data-service-url");
							if (!e) return;
							Loot.MicroserviceInjector.injectScriptToBody(e).then((() => {
								if (window.dispatchEvent(new CustomEvent("ShowAuth", {
										detail: {
											incentive: "Wishlist"
										}
									})), this.switchMode("Register"), void 0 === window.EventAggregationService) return;
								const e = this;
								EventAggregationService.subscribeTo(n.SessionCreatedEvent.EventType, {
									notify() {
										e.switchMode("Wishlist")
									}
								})
							}))
						}
					}
				}
				window.addEventListener("DOMContentLoaded", (() => {
					new s
				}))
			},
			1483: function() {
				const e = {
					favouriteIcons: null,
					favouriteLength: null,
					counterInitiated: null,
					wishlistService: null,
					init: () => {
						e.favouriteIcons = [], e.favouriteLength = window.Loot && window.Loot.DataStorage && window.Loot.DataStorage.retrieve("FavouriteCounter/Count") || 0, e.counterInitiated = !1, e.wishlistService = {}, e.getFavouriteIcons(), e.subscribeToHeaderUpdatedEvent(), e.subscribeToWishlistServiceReadyEvent(), e.favouriteLength > 0 && e.revealAnimation()
					},
					subscribeToHeaderUpdatedEvent: () => {
						document.addEventListener("header_login_updated", (() => {
							e.wishlistServiceReady() && (e.getFavouriteIcons(), e.animate())
						}))
					},
					getFavouriteIcons: () => {
						const t = document.querySelectorAll(".WishlistIcon");
						e.favouriteIcons = Array.from(t)
					},
					subscribeToWishlistServiceReadyEvent: () => {
						e.wishlistServiceReady() && (e.wishlistUpdateListeners(), e.animate()), void 0 !== window.EventAggregationService && window.EventAggregationService.subscribeToWishlistServiceReadyEvent({
							notify: () => {
								e.wishlistService = window.wishlistService, e.wishlistUpdateListeners(), e.animate()
							}
						})
					},
					wishlistServiceReady: () => void 0 !== window.wishlistService && (e.wishlistService = window.wishlistService, !0),
					wishlistUpdateListeners: () => {
						const t = {
							notify: () => {
								e.animate()
							}
						};
						window.EventAggregationService.subscribeToFavouriteAddedEvent(t), window.EventAggregationService.subscribeToFavouriteRemovedEvent(t)
					},
					animate: async () => {
						const t = e.favouriteLength;
						await e.loadFavouritesCount(), t !== e.favouriteLength && (e.favouriteLength > 0 ? e.animateCounters() : e.hideCounterPlaceHolders())
					},
					loadFavouritesCount: async () => {
						const t = await e.wishlistService.getWishlist();
						e.favouriteLength = t.favourites.length, window.Loot && window.Loot.DataStorage && Loot.DataStorage.store("FavouriteCounter/Count", e.favouriteLength, 86400)
					},
					animateCounters: () => {
						e.activateHeartbeat(), e.counterInitiated ? e.additionalAnimation() : e.revealAnimation()
					},
					hideCounterPlaceHolders: () => {
						for (let t = 0; t < e.favouriteIcons.length; t++) {
							let i = e.favouriteIcons[t].querySelector("span");
							i && i.classList.add("Hidden")
						}
						e.counterInitiated = !1
					},
					activateHeartbeat: () => {
						e.favouriteIcons.forEach((e => {
							e.classList.add("HeartBeat"), e.addEventListener("animationend", (() => {
								e.classList.remove("HeartBeat")
							}))
						}))
					},
					placeCounterPlaceHolderInIcon: (e, t) => {
						const i = e.querySelector(".WishlistCounter p");
						null === i ? e.insertAdjacentHTML("beforeend", `<span class="WishlistCounter Hidden"><p>${t}</p></span>`) : i.innerText = t
					},
					revealAnimation: () => {
						for (let t = 0; t < e.favouriteIcons.length; t++) e.placeCounterPlaceHolderInIcon(e.favouriteIcons[t], e.favouriteLength), e.unhideCounterPlaceholder(e.favouriteIcons[t]), e.favouriteIcons[t].classList.remove("NotEmpty"), e.favouriteIcons[t].classList.add("Empty");
						e.counterInitiated = !0
					},
					additionalAnimation: () => {
						for (let t = 0; t < e.favouriteIcons.length; t++) e.favouriteIcons[t].classList.remove("Empty"), e.favouriteIcons[t].classList.add("NotEmpty"), setTimeout((() => {
							e.placeCounterPlaceHolderInIcon(e.favouriteIcons[t], e.favouriteLength), e.unhideCounterPlaceholder(e.favouriteIcons[t])
						}), 300), setTimeout((() => {
							e.favouriteIcons[t].classList.remove("NotEmpty")
						}), 600)
					},
					unhideCounterPlaceholder: e => {
						const t = e.querySelector("span");
						t && t.classList.remove("Hidden")
					}
				};
				document.addEventListener("DOMContentLoaded", (() => {
					e.init()
				}))
			},
			7022: function() {
				const e = {
					EMBEDDED_MAP_ELEMENT_ID: "EmbeddedGoogleMap",
					embeddedMap: null,
					bounds: null,
					get mapSourceUrl() {
						"use strict";
						return this.embeddedMap.dataset.url || !1
					},
					init: function() {
						"use strict";
						this.embeddedMap = document.getElementById(this.EMBEDDED_MAP_ELEMENT_ID), this.embeddedMap && (this.url = this.embeddedMap.getAttribute("data-embed-link"), this.url && Shared.lazyLoadScript([this.url], this.embeddedMap, function() {
							e.attemptMapBuild()
						}.bind(this)))
					},
					attemptMapBuild: function() {
						"use strict";
						return !!this.mapSourceUrl && (this.buildMap(), !0)
					},
					buildMap: function() {
						"use strict";
						const e = this.mapSourceUrl;
						this.setupMapLoadHandlers(), this.addMapSource(e)
					},
					setupMapLoadHandlers: function() {
						"use strict";
						this.embeddedMap.addEventListener("load", this.handleMapLoad.bind(this))
					},
					addMapSource: function(e) {
						"use strict";
						this.embeddedMap.setAttribute("src", e)
					},
					handleMapLoad: function() {},
					hidePlaceCards: function() {
						"use strict";
						setTimeout((function() {
							document.getElementsByClassName("place-card")
						}), 1e3)
					}
				};
				window.addEventListener("load", (function() {
					"use strict";
					e.init()
				}))
			},
			1615: function() {
				var e = {
					mapPlaceholder: null,
					bounds: null,
					init: function() {
						if (this.mapPlaceholder = document.getElementById("GoogleMapPlaceholder"), !this.mapPlaceholder) return;
						let t = [];
						t.push("https://maps.googleapis.com/maps/api/js?key=AIzaSyBnw_yrhHiA0F41aforAcs-ms5mtrKcDVQ&v=3.exp"), Shared.lazyLoadScript(t, this.mapPlaceholder, function() {
							e.InitGoogleMap()
						}.bind(this))
					},
					InitGoogleMap: function() {
						"use strict";
						if (e.getLocations()) {
							var t = {
								center: new google.maps.LatLng(0, 0),
								zoom: 5,
								mapTypeControl: !1,
								streetViewControl: !1,
								styles: MapStyles
							};
							e.initializedMap = new google.maps.Map(this.mapPlaceholder, t), e.Coordinates()
						}
					},
					getLocations: function() {
						"use strict";
						var e = JSON.parse(this.mapPlaceholder.getAttribute("data-location"));
						if (null !== e) return e.locations
					},
					Coordinates: function() {
						"use strict";
						var t = this.getLocations();
						this.bounds = new google.maps.LatLngBounds;
						for (var i = 0; i < t.length; i++) {
							var n = t[i];
							if (n.latitude && n.longitude) {
								var s = new google.maps.LatLng(n.latitude, n.longitude);
								this.bounds.extend(s), e.CreateMarker(n.latitude, n.longitude, n.name)
							}
						}
						e.PanMap()
					},
					CreateMarker: function(t, i, n) {
						"use strict";
						var s = {
								path: "M9.6,0A9.62,9.62,0,0,0,0,9.6a25.87,25.87,0,0,0,1.42,8A43.75,43.75,0,0,0,4.5,24.68a51.86,51.86,0,0,0,4.47,7,.8.8,0,0,0,1.26,0,51.86,51.86,0,0,0,4.47-7,43.75,43.75,0,0,0,3.08-7.07,25.87,25.87,0,0,0,1.42-8A9.62,9.62,0,0,0,9.6,0Zm0,14.4a4.8,4.8,0,1,1,4.8-4.8A4.8,4.8,0,0,1,9.6,14.4Z",
								fillOpacity: 1,
								fillColor: "#F95C39",
								strokeWeight: 0,
								scale: 1,
								size: new google.maps.Size(22, 30),
								origin: new google.maps.Point(0, 0),
								anchor: new google.maps.Point(11, 30)
							},
							r = new google.maps.Marker({
								icon: s,
								position: new google.maps.LatLng(t, i),
								title: n,
								map: e.initializedMap
							});
						e.infoWindow(r, n)
					},
					infoWindow: function(t, i) {
						"use strict";
						var n = new google.maps.InfoWindow({
							content: i
						});
						google.maps.event.addListener(t, "click", (function() {
							n.open(e.initializedMap, t)
						}))
					},
					InterruptScrolling: function() {
						"use strict";
						const e = document.createElement("div");
						e.classList.add("InterruptScrolling"), this.mapPlaceholder.insertBefore(e, null), e.addEventListener("click", (function() {
							e.remove()
						}))
					},
					PanMap: function() {
						"use strict";
						var t = null;
						window.addEventListener("resize", function() {
							clearTimeout(t), t = setTimeout((function() {
								e.BoundMapProperties()
							}), 750)
						}.bind(this)), e.BoundMapProperties()
					},
					BoundMapProperties: function() {
						"use strict";
						var t;
						this.getLocations().length > 1 ? (e.initializedMap.fitBounds(this.bounds), e.initializedMap.panToBounds(this.bounds)) : (e.initializedMap.setCenter(this.bounds.getCenter()), t = "city" === e.mapPlaceholder.getAttribute("data-map-type") ? 8 : 12, e.initializedMap.setZoom(t))
					}
				};
				window.addEventListener("load", (function() {
					"use strict";
					e.init()
				}))
			},
			1275: function() {},
			6618: function(e, t, i) {
				"use strict";
				var n = i(2270);
				document.addEventListener("DOMContentLoaded", (() => {
					class e {
						static getActionInteractionDuration(e) {
							return performance.mark(e), performance.measure(e + "_ga_measure", "page_load_start_mark"), Math.round(performance.getEntriesByName(e + "_ga_measure")[0].duration)
						}
						static trackingHandler() {
							let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
								t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
							const i = "HeaderMainMenu",
								s = this.getActionInteractionDuration(e),
								r = {
									category: i,
									action: e,
									label: t,
									value: s
								};
							n.default.GA.fireTracker(r), n.default.addFunctionToPipelineTracker((n => {
								n.trackStructEvent(i, e, t, s)
							}))
						}
					}
					const t = {
						elements: {
							showMenuButton: null,
							hideMenuButton: null,
							searchRowWrapper: null,
							headerMainMenu: null,
							sectionNavigationItems: [],
							sectionsContent: null,
							background: null
						},
						scrollBarWidth: 0,
						previouslyOpenedMenuItem: null,
						init() {
							this.setMenuElements(), this.addEventListeners(), this.setScrollBarWidth()
						},
						setMenuElements() {
							this.elements.showMenuButton = document.querySelector(".js-showMainMenuButton"), this.elements.hideMenuButton = document.querySelector(".js-hideMainMenuButton"), this.elements.searchRowWrapper = document.getElementById("SearchRowWrapper");
							const e = document.getElementById("HeaderMainMenu");
							this.elements.headerMainMenu = e, this.elements.sectionNavigationItems = Array.from(e.querySelectorAll(".SectionNavigationItem")), this.elements.sectionsContent = e.querySelector(".SectionsContent"), this.elements.background = document.getElementById("MainMenuBackground")
						},
						addEventListeners() {
							this.addShowMenuListener(), this.addHideMenuListener(), this.addSectionNavigationItemListeners(), this.addSectionOptionsItemListeners(), this.addBackgroundListener(), this.addEscapeKeyListener(), this.addNavBarOtherButtonsListeners();
							const e = n.default.debounce((() => {
								this.repositionSectionsContent()
							}), 100);
							window.addEventListener("resize", e)
						},
						addShowMenuListener() {
							this.elements.showMenuButton.addEventListener("click", (() => {
								this.openMainMenu(), document.querySelectorAll(".SectionContent").forEach((e => {
									Loot.BodyScrollLock.disableBodyScroll(e)
								})), e.trackingHandler("header_menu_clicked_show_menu", {
									mobile_menu_state: "open"
								})
							}))
						},
						addHideMenuListener() {
							this.elements.hideMenuButton.addEventListener("click", (() => {
								this.closeMainMenu(), document.querySelectorAll(".SectionContent").forEach((e => {
									Loot.BodyScrollLock.enableBodyScroll(e)
								})), e.trackingHandler("header_menu_clicked_hide_menu", {
									mobile_menu_state: "closed"
								})
							}))
						},
						openMainMenu() {
							if (!this.getOpenedSectionsItem()) {
								let e;
								e = n.default.breakpoints(["Small", "Medium"]) && this.previouslyOpenedMenuItem ? this.previouslyOpenedMenuItem : this.elements.sectionNavigationItems.filter((e => e.parentNode.classList.contains("SectionsNavigation"))).reverse().pop(), e.querySelector(".SectionNavigationLink").click()
							}
							document.body.classList.add("js-HeaderMainMenuOpened")
						},
						addSectionNavigationItemListeners() {
							this.elements.sectionNavigationItems.forEach((t => {
								t.addEventListener("click", (t => {
									const i = t.target.parentNode.dataset.menuSection;
									if (this.allowClosingMenuItems(i) && t.target.classList.contains("SectionNavigationLink")) {
										this.setMainMenuState(i);
										const n = t.target.dataset.menuTrackingNavLink,
											s = t.target.dataset.menuTrackingEvent;
										e.trackingHandler(`header_menu_clicked_section_${n}_${s}`)
									}
								}))
							}))
						},
						addSectionOptionsItemListeners() {
							Array.from(this.elements.sectionsContent.querySelectorAll(".SectionContent")).forEach((i => {
								i.addEventListener("click", (n => {
									if (!n.target.closest("a")) return;
									const s = {
										header_section: i.dataset.menuTrackingSection,
										header_sub_section: n.target.dataset.menuTrackingLink
									};
									e.trackingHandler("header_menu_clicked_subsection", t.concatObjectPropertiesAsString(s)), this.closeMainMenu()
								}))
							}))
						},
						addBackgroundListener() {
							this.elements.background.addEventListener("click", (() => {
								this.closeMainMenu(), e.trackingHandler("header_menu_clicked_menu_background", {
									mobile_menu_state: "closed"
								})
							}))
						},
						addEscapeKeyListener() {
							const t = this;
							document.onkeydown = function(i) {
								"Escape" === (i = i || window.event).key && t.mainMenuIsOpened() && (t.closeMainMenu(), e.trackingHandler("header_menu_pressed_escape", {
									mobile_menu_state: "closed"
								}))
							}
						},
						addNavBarOtherButtonsListeners() {
							document.getElementById("HeaderLogin").addEventListener("click", (e => {
								this.mainMenuIsOpened() && (e.target.closest("a") || e.target.closest("button")) && this.closeMainMenu()
							}))
						},
						setMainMenuState(e) {
							this.setSectionsNavigationState(e), this.setSectionsContentState(), this.repositionSectionsContent()
						},
						setSectionsNavigationState(e) {
							this.elements.sectionNavigationItems.forEach((t => {
								(e === t.dataset.menuSection || t.classList.contains("is-open")) && t.classList.toggle("is-open")
							}))
						},
						allowClosingMenuItems(e) {
							const t = this.getOpenedSectionsItem();
							return !this.isBreakpointMobile() || !t || t.navigation.dataset.menuSection !== e
						},
						getOpenedSectionsItem() {
							const e = this.elements.sectionNavigationItems.filter((e => e.classList.contains("is-open")));
							if (0 !== e.length) return {
								navigation: e.find((e => e.parentNode.classList.contains("SectionsNavigation"))),
								content: e.find((e => e.parentNode.classList.contains("SectionsContent")))
							}
						},
						setSectionsContentState() {
							this.elements.sectionNavigationItems.find((e => e.classList.contains("is-open"))) ? (this.elements.sectionsContent.classList.add("is-open"), document.body.classList.add("js-HeaderMainMenuOpened")) : (this.elements.sectionsContent.classList.remove("is-open"), document.body.classList.remove("js-HeaderMainMenuOpened")), this.setScrollBarOffset()
						},
						mainMenuIsOpened() {
							return void 0 !== this.elements.sectionNavigationItems.find((e => e.classList.contains("is-open")))
						},
						closeMainMenu() {
							document.body.classList.remove("js-HeaderMainMenuOpened");
							let e = 0;
							n.default.breakpoints(["Small", "Medium"]) ? (e = 500, this.previouslyOpenedMenuItem = this.getOpenedSectionsItem().navigation) : this.previouslyOpenedMenuItem = null, setTimeout((() => {
								this.elements.sectionNavigationItems.forEach((e => {
									e.classList.remove("is-open")
								})), this.setSectionsContentState()
							}), e)
						},
						repositionSectionsContent() {
							const e = this.getOpenedSectionsItem();
							if (e) {
								const t = this.repositionNavigationItems(e);
								this.repositionSectionContent(e, t)
							}
						},
						repositionNavigationItems(e) {
							let t = e.navigation.offsetLeft;
							return this.isBreakpointMobile() ? e.content.style.left = t + "px" : this.isBreakpointExtraLarge() ? (t -= 150, e.content.style.left = t + "px") : e.content.querySelector(".SectionNavigationLink").style.left = t + "px", t
						},
						repositionSectionContent(e, t) {
							const i = e.content.querySelector(".SectionContent");
							let n = 0;
							this.isBreakpointExtraLarge() ? n = this.stickToNavigationRepositioning(i) : this.isBreakpointLarge() ? n = this.stickToCenterRepositioning(i) : this.isBreakpointMobile() && (n = -t), i.setAttribute("style", `left: ${n}px`)
						},
						stickToNavigationRepositioning(e) {
							const t = e.getBoundingClientRect().right + 24 - window.innerWidth;
							return e.offsetLeft - t < 0 ? -Math.abs(e.offsetLeft - t) : 0
						},
						stickToCenterRepositioning(e) {
							return (window.innerWidth - e.offsetWidth - 32) / 2
						},
						concatObjectPropertiesAsString(e) {
							const t = [];
							for (let i in e) e.hasOwnProperty(i) && t.push(i + ":" + e[i]);
							return t.join("|")
						},
						isBreakpointMobile() {
							return n.default.breakpoints(["Small", "Medium"])
						},
						isBreakpointLarge() {
							return n.default.breakpoints(["Large"])
						},
						isBreakpointExtraLarge() {
							return n.default.breakpoints(["ExtraLarge"])
						},
						setScrollBarWidth() {
							this.scrollBarWidth = window.innerWidth - document.documentElement.offsetWidth
						},
						setScrollBarOffset() {
							let e = 0;
							document.documentElement.offsetWidth === window.innerWidth && (e = this.scrollBarWidth), this.elements.searchRowWrapper.style.paddingRight = e + "px"
						}
					};
					t.init()
				}))
			},
			2032: function(e, t, i) {
				"use strict";
				var n = i(1937);
				! function() {
					const e = new n.AuthService,
						t = Array.from(document.getElementsByClassName("HeaderToggleItem"));
					if (0 === t.length) return;
					const i = Array.from(document.getElementsByClassName("HeaderToggleContent"));
					if (i.length !== t.length) return;
					const s = document.getElementById("HeaderToggle");

					function r() {
						if (void 0 === window.AuthController) return !1;
						let e = !1;
						return e = window.AuthController.isLoggedIn(), e
					}

					function o(e) {
						return null !== e.querySelector("i.lnr-user")
					}

					function a() {
						i.forEach((e => {
							e.classList.remove("InView")
						})), t.forEach((e => {
							e.classList.remove("InView")
						}))
					}
					s && (Array.from(t).forEach((e => s.insertBefore(e, null))), Array.from(t).forEach((n => {
						let c = !1;
						if (s.appendChild(n), n.classList.add("MobileOnlyBlock"), n.classList.remove("Hidden"), c = r(), c && o(n)) {
							let e = n.querySelector("i.lnr-user");
							e.classList.remove("lnr-user"), e.classList.add("lnr-user-full")
						} else window.AuthController.subscribe((function(e, t) {
							if (t && !0 === t.LoggedInStatus && o(n)) {
								let e = n.querySelector("i.lnr-user");
								e.classList.remove("lnr-user"), e.classList.add("lnr-user-full")
							}
						}));
						n.addEventListener("click", (function() {
							let n = !1,
								s = r();
							this.classList.contains("js-user") && window.AuthController.subscribe((function(t, i) {
								null !== t || !1 !== i.LoggedInStatus || e.triggerIncentive("third_party_login", "Header")
							})), this.classList.contains("js-preferences") || this.classList.contains("js-wishlistButton") || (this.classList.contains("InView") && (n = !0), a(), n || (this.classList.add("InView"), this.classList.contains("js-user") && s && document.querySelector(".AccountModule").classList.add("InView"), i[t.indexOf(this)].classList.add("InView")))
						}))
					})), document.addEventListener("click", (function(e) {
						e.target.closest(".HeaderToggleContent") || e.target.closest(".HeaderToggleItem") || a()
					})), document.addEventListener("url_change", (() => {
						a()
					})))
				}()
			},
			2486: function(e, t, i) {
				"use strict";
				var n = i(5175),
					s = i(1185);
				class r {
					constructor() {
						var e, t;
						t = void 0, (e = "impressionTracker") in this ? Object.defineProperty(this, e, {
							value: t,
							enumerable: !0,
							configurable: !0,
							writable: !0
						}) : this[e] = t, this.impressionTracker = new s.g("js-highlighted-studies", "js-highlighted-study", n.Product.ORGANISATION_PAGE, n.ListPageType.UNIVERSITY, n.ListName.UNIVERSITY_HIGHLIGHTED)
					}
				}
				document.addEventListener("DOMContentLoaded", (() => {
					new r
				}))
			},
			1937: function(e, t, i) {
				"use strict";
				i.d(t, {
					AuthService: function() {
						return n
					}
				});
				class n {
					constructor() {
						this.headerFlyOut = null, this.headerFlyoutInitialized = !1, this.headerIncentiveMounted = !1
					}
					triggerIncentive(e, t) {
						"Header" === t && (this.headerFlyoutInitialized || (this.headerFlyOut = document.getElementById("HeaderFlyoutWrapper"), this.setFinishListeners(), this.headerFlyoutInitialized = !0), this.toggleHeaderFlyOut()), document.dispatchEvent(new CustomEvent("RenderAuthenticationService", {
							detail: {
								referrer: t,
								tabToShow: e
							}
						}))
					}
					toggleHeaderFlyOut() {
						null !== this.headerFlyOut && (document.addEventListener("auth_layout_mounted", (e => {
							"Header" === e.detail.layout && (this.headerFlyOut.classList.toggle("is-open"), this.headerIncentiveMounted = !0)
						})), this.headerIncentiveMounted && this.headerFlyOut.classList.toggle("is-open"))
					}
					setFinishListeners() {
						document.addEventListener("opt_in_success", (() => {
							this.closeHeaderFlyOut()
						})), document.addEventListener("opt_out", (() => {
							this.closeHeaderFlyOut()
						})), document.addEventListener("opt_in_fail", (() => {
							this.closeHeaderFlyOut()
						})), document.addEventListener("logging_in_existing_user", (() => {
							document.addEventListener("student_logged_in", (() => {
								this.closeHeaderFlyOut()
							}))
						}))
					}
					closeHeaderFlyOut() {
						null !== this.headerFlyOut && this.headerFlyOut.classList.remove("is-open")
					}
				}
			},
			243: function(e, t, i) {
				"use strict";
				var n, s = i(2270),
					r = i(1937),
					o = i(8328),
					a = i(7312),
					c = i(4527);
				n = {
					headerLogin: null,
					loggedInStatus: !1,
					anonymousStudent: null,
					loggedInMenuVisible: !1,
					sessionService: null,
					auth: null,
					authService: new r.AuthService,
					init() {
						if (s.default.GA.parseTrackers(void 0), this.headerLogin = document.getElementById("HeaderLogin"), void 0 === this.headerLogin) return;
						const e = document.getElementById("LoginButton"),
							t = document.getElementsByClassName("js-wishlistButton");
						this.injectHeaderLoginElement() && e.addEventListener("click", (function() {
							n.authService.triggerIncentive("third_party_login", "Header")
						})), Array.from(t).forEach((e => {
							e.addEventListener("click", (() => {
								this.wishlistClickHandler()
							}))
						})), this.addEventListeners(), this.showProfileIntroductionIcon()
					},
					injectHeaderLoginElement() {
						const e = document.getElementById("SearchRowWrapper");
						if (null === e) return !1;
						const t = document.createElement("div");
						t.id = "HeaderFlyoutWrapper";
						const i = document.getElementById("AuthHeaderPlaceholder");
						return null !== i && (t.appendChild(i), e.appendChild(t), this.adjustMobileFlyoutHeight(t), !0)
					},
					adjustMobileFlyoutHeight(e) {
						s.default.breakpoints(["Small", "Medium"], (() => {
							const t = document.getElementById("SearchRow");
							t && window.addEventListener("resize", (() => {
								const i = window.innerHeight,
									n = t.clientHeight;
								e.style.maxHeight = `calc(${i-n}px - 1rem)`
							}))
						}))
					},
					addEventListeners() {
						const e = this;
						void 0 !== window.EventAggregationService && (window.EventAggregationService.subscribeTo(o.SessionServiceReadyEvent.EventType, {
							async notify(t) {
								e.sessionService = t.sessionService, await e.updateMenuWhenApplicable()
							}
						}, !0), window.EventAggregationService.subscribeTo(a.AnonymousStudentServiceReady.EventType, {
							async notify(t) {
								e.anonymousStudent = t.anonymousStudentService, await e.updateMenuWhenApplicable()
							}
						}, !0), window.EventAggregationService.subscribeTo(a.AnonymousStudentProfileSynced.EventType, {
							async notify() {
								await e.updateMenuWhenApplicable()
							}
						}), window.EventAggregationService.subscribeTo(a.AnonymousStudentStateChanged.EventType, {
							async notify() {
								await e.updateMenuWhenApplicable()
							}
						}), window.EventAggregationService.subscribeTo(a.AnonymousStudentProfileUpdated.EventType, {
							notify(t) {
								t.state === a.StudentRepositoryStateType.ONLINE && t.changes[c.StudentField.FIRST_NAME] && e.updateName(t.changes[c.StudentField.FIRST_NAME])
							}
						}))
					},
					async updateMenuWhenApplicable() {
						null !== this.sessionService && null !== this.anonymousStudent && (null !== await this.sessionService.getSession() ? await this.onLogin() : this.headerLogin.classList.remove("Hidden"))
					},
					async onLogin() {
						this.loggedInStatus = !0;
						const e = await window.AnonymousStudent.getStudentData([c.StudentField.FIRST_NAME]);
						this.loggedInMenuVisible || this.requestMenu(e), this.updateName(e.first_name || "")
					},
					wishlistClickHandler() {
						this.trackEntryPointClick(), this.conditionallyOpenTheWishlist()
					},
					trackEntryPointClick() {
						"undefined" != typeof snowplow && snowplow("trackStructEvent", {
							category: "Wishlisting",
							action: "view_wishlist_header"
						}), s.default.GA.fireTracker({
							category: "Wishlisting",
							action: "view_wishlist_header"
						})
					},
					conditionallyOpenTheWishlist() {
						n.loggedInStatus ? document.dispatchEvent(new Event("openWishlistDrawer")) : (n.authService.triggerIncentive("third_party_login", "FavouriteStudy"), this.trackIncentiveImpression(), this.waitForRegistration())
					},
					trackIncentiveImpression() {
						"undefined" != typeof snowplow && snowplow("trackStructEvent", {
							category: "Profile",
							action: "Register Incentive Click",
							label: "View wishlist header"
						}), s.default.GA.fireTracker({
							category: "Wishlisting",
							action: "Register Incentive Click",
							label: "View wishlist header"
						})
					},
					waitForRegistration() {
						void 0 !== window.EventAggregationService && window.EventAggregationService.subscribeTo(o.SessionCreatedEvent.EventType, {
							notify() {
								document.dispatchEvent(new Event("openWishlistDrawer"))
							}
						})
					},
					updateName(e) {
						const t = document.getElementById("HeaderLogin"),
							i = document.getElementById("HeaderLoggedIn"),
							n = i.getElementsByClassName("LoggedInUserText")[0];
						(void 0 !== t && void 0 !== i || 0 != n.length) && (n.innerHTML = e)
					},
					requestMenu(e) {
						const t = document.getElementById("HeaderLogin"),
							i = document.getElementById("HeaderLoggedIn"),
							n = i.getElementsByClassName("LoggedInUserText")[0];
						if (void 0 !== t && void 0 !== i || 0 != n.length) {
							this.loggedInMenuVisible = !0, this.updateName(e.first_name || ""), t.classList.add("Hidden"), i.classList.remove("Hidden"), document.dispatchEvent(new Event("header_login_updated"));
							const n = document.getElementsByClassName("js-wishlistButton");
							Array.from(n).forEach((e => {
								e.addEventListener("click", (() => {
									this.wishlistClickHandler()
								}))
							})), void 0 !== e.first_name && document.getElementById("LoggedInToggle").addEventListener("click", (function() {
								document.getElementById("LoggedInDropDown").classList.toggle("Selected")
							}));
							var s = i.querySelector("#signOutLink");
							null == s || s.addEventListener("click", this.signOut)
						}
					},
					async signOut(e) {
						if (e.preventDefault(), void 0 === window.AuthenticationService) throw new Error("Couldn't find AuthenticationService");
						await window.AuthenticationService.logout()
					},
					showProfileIntroductionIcon() {
						const e = document.querySelectorAll(".ProfilePageIntroductionIcon");
						0 !== e.length && this.canShowNotificationIcon() && e.forEach((e => {
							e.classList.remove("Hidden")
						}))
					},
					canShowNotificationIcon() {
						if (!window.Loot || !window.Loot.DataStorage) return !1;
						const e = Loot.DataStorage.retrieve("ProfilePageIntroductionShown");
						return "/account/" !== window.location.pathname && !0 !== e
					}
				}, document.addEventListener("DOMContentLoaded", (function() {
					n.init()
				}))
			},
			3188: function(e, t, i) {
				"use strict";
				var n = i(7677);
				const s = {
						mediaGallery: null,
						FullSourceContainer: null,
						thumbnails: null,
						templates: {
							images: null,
							video: null
						},
						init() {
							if (this.mediaGallery = document.getElementById("MediaGalleryNew"), !this.mediaGallery) return;
							if (this.FullSourceContainer = this.mediaGallery.querySelector(".FullSourceContainer"), !this.FullSourceContainer) return;
							var e = document.getElementById("thumbnailContainer");
							if (!e) return;
							if (this.thumbnails = e.querySelectorAll("a"), 0 === this.thumbnails.length) return;
							if (this.templates.images = n.Z.compile(this.mediaGallery.querySelector("#image-template").innerHTML), this.templates.video = n.Z.compile(this.mediaGallery.querySelector("#video-template").innerHTML), this.showFullSource(this.thumbnails[0]), this.thumbnails.length <= 1) return void e.remove();
							const t = e.getElementsByTagName("a");
							for (let e = 0; e < t.length; e++) t[e].addEventListener("click", (function(e) {
								e.preventDefault(), s.showFullSource(this)
							}))
						},
						imageTemplate: function(e) {
							const t = e.href;
							if (t) return s.templates.images({
								preview_url: t
							})
						},
						videoTemplate: function(e) {
							const t = e.href;
							if (t) return s.templates.video({
								source: t
							})
						},
						showFullSource: function(e) {
							if (e) switch (e.dataset.type) {
								case "photo":
									s.FullSourceContainer.innerHTML = s.imageTemplate(e);
									break;
								case "video":
									s.FullSourceContainer.innerHTML = s.videoTemplate(e)
							}
						}
					},
					r = document.querySelectorAll(".MediaGalleryPlaceholder");
				if (r.length > 0) {
					const e = r[0];
					document.getElementById("MediaGalleryNew") && e.append(document.getElementById("MediaGalleryNew"))
				}
				var o = s;
				document.addEventListener("DOMContentLoaded", (function() {
					var e = document.getElementById("MediaGalleryNew");
					e && Shared.scrollListener(e, (() => o.init()), 300)
				}))
			},
			6481: function(e, t, i) {
				"use strict";
				var n = i(7677);
				! function() {
					const e = {
						mediaGallery: null,
						popUp: null,
						FullSourceContainer: null,
						ThumbnailContainer: null,
						count: null,
						Thumbnails: [],
						ActiveThumb: null,
						templates: {
							photo: null,
							video: null
						},
						thumbContainerWidth: null,
						iframeRatio: null,
						timeout: null,
						initialize() {
							if (this.mediaGallery = document.getElementById("MediaGalleryLightbox"), !this.mediaGallery) return;
							if (this.popUp = this.mediaGallery.querySelector("#Lightbox"), this.FullSourceContainer = this.popUp.querySelector("#FullSourceContainer"), !this.FullSourceContainer) return;
							if (this.ThumbnailContainer = this.popUp.querySelector(".js-thumbnailContainer"), !this.ThumbnailContainer) return;
							if (this.count = this.popUp.querySelector(".js-count"), !this.count) return;
							const e = this.ThumbnailContainer.getElementsByClassName("js-thumb");
							if (Array.from(e).forEach(((e, t) => {
									const i = e.dataset.id,
										n = e.dataset.type;
									e.dataset.position = t + 1, this.Thumbnails.push({
										id: i,
										type: n,
										element: e,
										data_position: e.dataset.position
									})
								})), 0 === this.Thumbnails.length) return;
							const t = this.mediaGallery.querySelector("#image-template");
							null !== t && (this.templates.photo = n.Z.compile(t.innerHTML));
							const i = this.mediaGallery.querySelector("#video-template");
							null !== i && (this.templates.video = n.Z.compile(i.innerHTML)), this.attachClickEvents(), this.attachSwipeEvent(), window.addEventListener("resize", this.efficientFn.bind(this)), document.onkeydown = e => {
								this.popUp.classList.contains("Hidden") || this.checkKey(e)
							}
						},
						attachClickEvents() {
							this.ThumbnailContainer.addEventListener("click", (e => {
								e.preventDefault();
								let t = e.target;
								"A" !== t.nodeName && (t = t.closest("a")), this.changeActiveThumb(t), e.stopPropagation()
							}));
							const e = document.querySelectorAll(".LightBox");
							for (let t = 0; t < e.length; ++t) e[t].addEventListener("click", (e => {
								let t = null;
								if (e.target.dataset.id) {
									const i = e.target.dataset.id;
									for (let e = 0; e < this.Thumbnails.length; e++)
										if (this.Thumbnails[e].id === i) {
											t = this.Thumbnails[e].element;
											break
										}
								} else t = this.Thumbnails[0].element;
								this.toggleVisibility(), this.changeActiveThumb(t)
							}));
							this.popUp.addEventListener("click", (() => {
								if (Shared.breakpoints(["Large", "ExtraLarge"])) {
									const e = this.ActiveThumb.dataset.type;
									"video" !== e && "vimeo" !== e || (this.FullSourceContainer.innerHTML = ""), this.toggleVisibility()
								}
							})), this.popUp.querySelector(".prev").addEventListener("click", (e => {
								this.previous(), e.stopPropagation()
							})), this.popUp.querySelector(".next").addEventListener("click", (e => {
								this.next(), e.stopPropagation()
							})), this.FullSourceContainer.addEventListener("click", (e => {
								"IMG" === e.target.tagName && (this.next(), e.stopPropagation())
							})), this.popUp.querySelector(".CloseButton ").addEventListener("click", (() => {
								this.toggleVisibility()
							}))
						},
						setThumbContainerWidth() {
							this.thumbContainerWidth = 0, this.Thumbnails.forEach((e => {
								const t = e.element.offsetWidth + 1;
								this.thumbContainerWidth += Math.ceil(t), this.thumbContainerWidth += parseInt(getComputedStyle(e.element).getPropertyValue("margin-right"))
							})), this.ThumbnailContainer.style.width = this.thumbContainerWidth + "px"
						},
						changeActiveThumb(e) {
							null !== this.ActiveThumb && this.ActiveThumb.classList.remove("active"), e.classList.add("active"), this.ActiveThumb = e, this.centerActiveThumb();
							const t = parseInt(this.ActiveThumb.dataset.position) + " / " + this.Thumbnails.length;
							let i;
							this.count.innerText = t;
							const n = e.dataset.type;
							switch (n) {
								case "photo":
									i = this.imageTemplate.bind(this);
									break;
								case "video":
									i = this.videoTemplate.bind(this)
							}
							if (this.FullSourceContainer.innerHTML = i(e), "video" === n) {
								const e = this.FullSourceContainer.getElementsByTagName("iframe")[0];
								this.iframeRatio = e.getBoundingClientRect().height / e.getBoundingClientRect().width, this.calcIframeDimensions()
							}
							const s = window.picturefill;
							"function" == typeof s && s({
								reevaluate: !0
							})
						},
						calcIframeDimensions() {
							const e = this.FullSourceContainer.getElementsByTagName("iframe")[0];
							if (!e) return;
							let t, i, n;
							t = this.FullSourceContainer.getBoundingClientRect(), Shared.breakpoints(["Large", "ExtraLarge"]) && (t.width = t.width - 240), i = t.height / t.width, n = i <= this.iframeRatio ? {
								x: t.height / this.iframeRatio,
								y: t.height
							} : {
								x: t.width,
								y: this.iframeRatio * t.width
							}, e.style.top = (t.height - n.y) / 2 + "px", e.style.left = (t.width - n.x) / 2 + "px", e.style.width = n.x + "px", e.style.height = n.y + "px"
						},
						previous() {
							let e = parseInt(this.ActiveThumb.dataset.position - 2); - 1 === e && (e = this.Thumbnails.length - 1);
							const t = this.Thumbnails[e].element;
							this.changeActiveThumb(t)
						},
						next() {
							let e = parseInt(this.ActiveThumb.dataset.position);
							e === this.Thumbnails.length && (e = 0);
							const t = this.Thumbnails[e].element;
							this.changeActiveThumb(t)
						},
						first() {
							const e = this.Thumbnails[0].element;
							this.changeActiveThumb(e)
						},
						last() {
							const e = this.Thumbnails[this.Thumbnails.length - 1].element;
							this.changeActiveThumb(e)
						},
						centerActiveThumb() {
							const e = getComputedStyle(this.ThumbnailContainer.closest("#footer")).getPropertyValue("max-width"),
								t = parseInt(e.replace("px", ""), 10),
								i = this.ThumbnailContainer.closest("#footer").getBoundingClientRect().width,
								n = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
								s = -1 * (this.thumbContainerWidth - i);
							if (this.thumbContainerWidth > t || this.thumbContainerWidth > n) {
								const e = this.ActiveThumb.getBoundingClientRect().x - this.ThumbnailContainer.getBoundingClientRect().x,
									t = i / 2 - this.ActiveThumb.getBoundingClientRect().width / 2 - e;
								this.ThumbnailContainer.style.transform = t <= 0 && t >= s ? `translate3d(${t}px, 0px, 0px)` : t > 0 ? "translate3d(0px, 0px, 0px)" : `translate3d(${s}px, 0px, 0px)`
							} else this.ThumbnailContainer.style.transform = "translate3d(0px, 0px, 0px)"
						},
						imageTemplate(e) {
							const t = e.href;
							if (!t) return;
							const i = e.title ? e.title : "",
								n = e.dataset.description ? e.dataset.description : "";
							return this.templates.photo({
								url: t,
								title: i,
								description: n
							})
						},
						videoTemplate(e) {
							const t = e.href;
							if (!t) return;
							const i = e.title ? e.title : "",
								n = e.dataset.description ? e.dataset.description : "";
							return this.templates.video({
								source: t,
								title: i,
								description: n
							})
						},
						popup() {
							this.popUp && this.toggleVisibility()
						},
						toggleVisibility() {
							this.popUp.classList.toggle("Hidden"), document.querySelector("body").classList.toggle("VisHid"), this.setThumbContainerWidth(), null !== this.ActiveThumb && this.centerActiveThumb()
						},
						attachSwipeEvent() {
							let e = !1,
								t = {
									x: 0,
									y: 0
								};
							const i = {
									x: 0,
									y: 0
								},
								n = {
									x: 0,
									y: 0
								},
								s = {
									x: 0,
									y: 0
								};
							this.popUp.addEventListener("touchstart", (function(i) {
								e = !0, t = {
									x: i.changedTouches[0].clientX,
									y: i.changedTouches[0].clientY
								}
							})), this.popUp.addEventListener("touchend", (function() {
								e = !1
							})), this.popUp.addEventListener("touchmove", (function() {
								!0 === e && (i.x = event.changedTouches[0].clientX, i.y = event.changedTouches[0].clientY, n.x = i.x - t.x, n.y = i.y - t.y, s.x = s.x + n.x, s.y = s.y + n.y, s.x < -50 ? (s.x = 0, e = !1, this.next()) : s.x > 50 ? (s.x = 0, e = !1, this.previous()) : s.y < -50 ? (s.y = 0, e = !1, this.toggleVisibility()) : (t.x = event.changedTouches[0].clientX, t.y = event.changedTouches[0].clientY))
							})), window.addEventListener("touchend", (function() {
								e = !1, s.x = 0, s.y = 0
							}))
						},
						debounce(e, t) {
							let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
							const n = i && !this.timeout;
							null !== this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout((() => {
								this.timeout = null, i || e.apply(this)
							}), t), n && e.apply(this)
						},
						efficientFn() {
							this.debounce((() => {
								this.setThumbContainerWidth(), this.centerActiveThumb(), this.calcIframeDimensions()
							}), 250)
						},
						checkKey(e) {
							37 === (e = e || window.event).keyCode && e.ctrlKey ? this.first() : 37 === e.keyCode ? this.previous() : 39 === e.keyCode && e.ctrlKey ? this.last() : 39 === e.keyCode ? this.next() : 27 === e.keyCode && this.toggleVisibility()
						}
					};
					e.initialize()
				}()
			},
			3934: function() {
				const e = {
					aside: null,
					uniName: null,
					favouriteContainer: null,
					favouriteButton: null,
					favouriteLink: null,
					initialise() {
						var e = this;
						e.aside = document.getElementById("HeaderAside"), null !== e.aside && (e.uniName = document.getElementById("CurrentUni"), e.offsetUniName(), document.addEventListener("scrolledDown", e.offsetUniName.bind(e)), document.addEventListener("scrolledUp", e.offsetUniName.bind(e)), window.addEventListener("resize", e.offsetUniName.bind(e)))
					},
					offsetUniName() {
						var e = this.uniName.getBoundingClientRect().height.toString();
						this.aside.setAttribute("data-offset", e)
					}
				};
				document.addEventListener("DOMContentLoaded", (function() {
					e.initialise()
				}))
			},
			5976: function() {
				const e = document.querySelector(".js-heroImageSources > .js-coverImage"),
					t = document.getElementById("HeroContainer");
				null !== e ? t.classList.add("ContainerStudyCoverImg") : t.classList.add("ContainerStudyCover")
			},
			3318: function() {
				document.addEventListener("DOMContentLoaded", (function() {
					Array.from(document.querySelectorAll(".UniInfoSection")).forEach((e => {
						e.addEventListener("click", (function(e) {
							let t = e.target;
							if ("BUTTON" === t.tagName && (t.classList.contains("RightColumn") || t.classList.contains("TextFade") || t.classList.contains("Fallback") || t.classList.contains("ShowMore") || t.classList.contains("ShowLess"))) {
								if ("DIV" === t.tagName) {
									const e = t.getSpecificSiblings("button:not(.Hidden)");
									if (e.length && (t = e[0]), !Shared.breakpoints(["Small", "Medium"])) return
								}
								const e = t.getSpecificSiblings(".RightColumn, .Fallback");
								for (let t = 0; t < e.length; t++) e[t].classList.toggle("NotVisible");
								const i = t.getSpecificSiblings(".TextFade");
								for (let e = 0; e < i.length; e++) i[e].classList.toggle("Hidden");
								const n = t.getSpecificSiblings("button");
								for (let e = 0; e < n.length; e++) n[e].classList.toggle("Hidden");
								Shared.breakpoints(["Small", "Medium"], (function() {
									var e = t.parentNode.classList.contains("FallbackWrapper");
									if (t.classList.contains("ShowLess") && !0 === e) {
										var i = t.closest(".UniInfoSection").offsetTop,
											n = document.getElementById("MenuBar").getBoundingClientRect().height;
										window.scrollTo(0, i - n)
									}
								}))
							}
						}))
					}));
					const e = document.getElementsByClassName("FieldContent");
					for (let t = 0; t < e.length; t++) {
						const i = e[t].innerHTML,
							n = e[t].parentNode;
						if (-1 !== i.indexOf("<img")) return n.classList.remove("NotVisible"), void replaceDataSrc(e[t]);
						if (e[t].getBoundingClientRect().height > n.getBoundingClientRect().height + 24) {
							const e = n.getSpecificSiblings(".TextFade");
							for (let t = 0; t < e.length; t++) e[t].classList.remove("Hidden");
							const t = n.getSpecificSiblings(".ShowMore");
							for (let e = 0; e < t.length; e++) t[e].classList.remove("Hidden")
						} else n.classList.remove("NotVisible")
					}
				}))
			},
			2081: function() {
				const e = document.querySelector("#OrganisationProgrammes .OrganisationProgrammesList");
				e && new class {
					constructor(e, t) {
						this.list = e, this.action = t
					}
					bindClickEventToButtonAndFireTracking(e, t) {
						const i = "Organisation";
						e.addEventListener("click", (e => {
							const n = "portal_type:" + (e.target.dataset.portalType ? e.target.dataset.portalType : e.target.parentElement.dataset.portalType),
								s = {
									category: i,
									action: t,
									label: n
								};
							Shared.GA.fireTracker(s), Shared.addFunctionToPipelineTracker((e => {
								e.trackStructEvent(i, t, n)
							}))
						}))
					}
					initialise() {
						this.bindClickEventToButtonAndFireTracking(e, this.action)
					}
				}(e, "organisationpage_otherprogrammes_clicked_option").initialise()
			},
			1205: function() {
				"use strict";
				const e = {
					init: function() {
						e.setPixel()
					},
					setPixel() {
						const e = document.querySelectorAll(".OrganisationTOEFL .js-pixel");
						if (!e.length) return;
						const t = Math.round((new Date).getTime() / 1e3);
						Array.from(e).forEach((function(e) {
							let i = e.getAttribute("data-pixel");
							i = i.replace("[timestamp]", t), class {
								static image(e, t) {
									const i = new Image;
									let n = e;
									t && (i.onload = function() {
										t(i)
									}), i.src = n
								}
							}.image(i), e.remove()
						}))
					}
				};
				window.addEventListener("DOMContentLoaded", (function() {
					e.init()
				}))
			},
			4073: function(e, t, i) {
				"use strict";
				var n = i(7378),
					s = i(5478),
					r = i(1185),
					o = i(5175);
				const a = {
					StudyListings: [],
					init() {
						this.StudyListings = document.querySelectorAll(".StudyListing"), 0 !== this.StudyListings.length && this.StudyListings.forEach((e => {
							var t = e.querySelectorAll(".FoldTitle");
							new n.U({
								wrapper: e,
								showOneSection: !0
							}), Array.from(t).forEach(((e, t) => {
								let i;
								window.addEventListener("DOMContentLoaded", (() => {
									i = new r.g(`js-studyCards-${t}`, "js-studyCard", o.Product.ORGANISATION_PAGE, o.ListPageType.UNIVERSITY, o.ListName.UNIVERSITY_PROGRAMMES)
								})), e.addEventListener("click", (function(e) {
									let t = e.target;
									(0, s.default)(t, {
										duration: 800,
										offset: -120
									}), i && i.manuallyProcessElements()
								}))
							}))
						}))
					}
				};
				document.addEventListener("DOMContentLoaded", (function() {
					a.init()
				}))
			},
			1497: function() {
				window.ProfilePageIntroductionConditionsInformer = {
					areConditionsMet() {
						return !this.elementSeenBefore()
					},
					triggerAfterYoloRegistration(e) {
						this.areConditionsMet() && document.addEventListener("student-registered", (t => {
							void 0 !== t.detail && "Google" === t.detail.provider && e()
						}), {
							once: !0
						})
					},
					elementSeenBefore() {
						return !(!window.Loot || !window.Loot.DataStorage) && !0 === Loot.DataStorage.retrieve("ProfilePageIntroductionShown")
					}
				}
			},
			2228: function() {
				window.ProfilePageIntroductionElementProvider = {
					element: null,
					getElement() {
						if (this.element || (this.element = document.querySelector('.js-slideInElement[data-name="ProfilePageIntroduction"]'), this.element)) return this.element
					}
				}
			},
			1657: function() {
				window.ProfilePageIntroductionInitiator = {
					initiator: null,
					element: null,
					init() {
						this.neededElementsAvailable() && this.initiateProfilePageIntroduction()
					},
					neededElementsAvailable() {
						return !!(window.ProfilePageIntroductionElementProvider && window.ProfilePageIntroductionConditionsInformer && window.SlideInElementFrameInitiator) && (this.initiator = new SlideInElementFrameInitiator, this.element = ProfilePageIntroductionElementProvider.getElement(), !!this.element)
					},
					initiateProfilePageIntroduction() {
						const e = this.element.querySelector(".SlideInElementContentWrapper");
						e && (e.addEventListener("click", (() => {
							const e = this.buildUrl();
							window.location = e
						})), ProfilePageIntroductionConditionsInformer.triggerAfterYoloRegistration((() => {
							this.initiator.trigger(this.element), Loot.DataStorage.store("ProfilePageIntroductionShown", !0, 2592e3)
						})))
					},
					buildUrl() {
						return new URL(window.location).origin + "/account/?section=recommendations"
					}
				}, document.addEventListener("DOMContentLoaded", (() => {
					ProfilePageIntroductionInitiator.init()
				}))
			},
			8661: function(e, t, i) {
				"use strict";
				i.r(t), i.d(t, {
					SlideInElementFramePositioner: function() {
						return n
					}
				});
				class n {
					constructor(e) {
						this.initiator = e
					}
					positionElement(e) {
						this.element = e;
						const t = this.getContextualElements();
						this.updatePosition(t), this.prepareForContextualChanges(t), this.prepareCrossClose(), this.showElement()
					}
					getContextualElements() {
						const e = this.initiator.contextualInformer.getContextualElements(),
							t = this.initiator.contextualInformer.getCurrentPage();
						return e.filter((e => !e.pages.length || e.pages.includes(t)))
					}
					updatePosition(e) {
						const t = this.getElementPosition(e),
							i = this.element.parentNode;
						let n = 12;
						window.innerWidth > 480 && (n = 24), i.style.bottom = t.vertical ? `${n+t.vertical}px` : null, i.style.right = t.horizontal ? `${n+t.horizontal}px` : null
					}
					getElementPosition(e) {
						let t = {
							horizontal: 0,
							vertical: 0
						};
						return e.forEach((e => {
							if (!e.element.isActive()) return;
							const i = document.querySelector(e.element.selector);
							let n = e.element.extraOffset ? e.element.extraOffset : 0;
							"horizontal" === e.motion.direction ? n += window.innerWidth - i.offsetLeft : n += window.innerHeight - i.offsetTop, n > t[e.motion.direction] && (t[e.motion.direction] = n)
						})), t
					}
					prepareForContextualChanges(e) {
						e.forEach((t => {
							t.listeners.forEach((i => {
								var n;
								switch (i.selector) {
									case "window":
										n = window;
										break;
									case "document":
										n = document;
										break;
									default:
										n = document.querySelector(i.selector)
								}
								n && n.addEventListener(i.action, (() => {
									setTimeout((() => {
										this.updatePosition(e)
									}), t.motion.timing)
								}))
							}))
						}))
					}
					prepareCrossClose() {
						const e = this.element.querySelector(".js-slideInElementCross");
						e && e.addEventListener("click", (() => {
							this.initiator.tracker.fireTracking(this.element.dataset.name, "CloseClick"), this.hideElement()
						}))
					}
					switchElement(e) {
						this.element.classList["Shown" === e ? "add" : "remove"]("SlideInElementShown"), this.initiator.tracker.fireTracking(this.element.dataset.name, `Element${e}`), document.dispatchEvent(new CustomEvent(`SlideInElement${e}`, {
							detail: {
								name: this.element.dataset.name
							}
						}))
					}
					showElement() {
						this.initiator.positioner.switchElement("Shown")
					}
					hideElement() {
						this.initiator.positioner.switchElement("Hidden")
					}
				}
				window.SlideInElementFramePositioner = n
			},
			206: function(e, t, i) {
				"use strict";
				i.r(t), i.d(t, {
					SlideInElementTracker: function() {
						return n
					}
				});
				class n {
					constructor(e) {
						this.initiator = e
					}
					fireTracking(e, t) {
						let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
							n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
						window.snowplow && window.snowplow("trackStructEvent", {
							category: "SlideInElement",
							action: e,
							label: t,
							property: i,
							value: n
						})
					}
				}
				window.SlideInElementTracker = n
			},
			3685: function(e, t, i) {
				"use strict";
				i.r(t), i.d(t, {
					SlideInElementConditionsInformer: function() {
						return n
					}
				});
				class n {
					constructor(e) {
						this.initiator = e
					}
					areConditionsMet() {
						return this.noElementVisible()
					}
					noElementVisible() {
						return null === document.querySelector(".SlideInElement.SlideInElementShown")
					}
				}
				window.SlideInElementConditionsInformer = n
			},
			8416: function(e, t, i) {
				"use strict";
				i.r(t), i.d(t, {
					SlideInElementContextualInformer: function() {
						return n
					}
				});
				class n {
					constructor(e) {
						this.initiator = e
					}
					getContextualElements() {
						return [this.getCookieWall(), this.getWishlistDrawer(), this.getStudyPageBottomBanner(), this.getStudyPageBottomBannerTooltip(), this.getArticleSidebar()]
					}
					getCurrentPage() {
						const e = window.location.pathname.split("/");
						if (!(e.length < 2)) return e[1]
					}
					getCookieWall() {
						return {
							element: {
								selector: "#CookieWall",
								isActive: () => {
									const e = document.getElementById("CookieWall");
									return !!e && !1 === e.classList.contains("Hidden")
								}
							},
							pages: [],
							listeners: [{
								selector: "#CookieButton",
								action: "click"
							}, {
								selector: "window",
								action: "scroll"
							}],
							motion: {
								direction: "vertical",
								timing: 0
							}
						}
					}
					getWishlistDrawer() {
						return {
							element: {
								selector: "#wishlistDrawer.Opened #wishlistDrawerContent",
								isActive: () => null !== document.querySelector("#wishlistDrawer.Opened")
							},
							pages: [],
							listeners: [{
								selector: "document",
								action: "openWishlistDrawer"
							}, {
								selector: "document",
								action: "closeWishlistDrawer"
							}],
							motion: {
								direction: "horizontal",
								timing: 400
							}
						}
					}
					getStudyPageBottomBanner() {
						return {
							element: {
								selector: "#FixedEssentialInformation",
								isActive: () => null !== document.querySelector("#FixedEssentialInformation.is-inView") && this.isMobileBreakpoint()
							},
							pages: ["studies"],
							listeners: [{
								selector: "window",
								action: "scroll"
							}, {
								selector: "window",
								action: "resize"
							}],
							motion: {
								direction: "vertical",
								timing: 300
							}
						}
					}
					getStudyPageBottomBannerTooltip() {
						return {
							element: {
								selector: "#FixedEssentialInformation",
								extraOffset: 72,
								isActive: () => {
									const e = document.getElementById("FixedEssentialInformation"),
										t = document.querySelector(".Tooltip.Guidance");
									return e && this.isMobileBreakpoint() && t && "none" !== t.style.display
								}
							},
							pages: ["studies"],
							listeners: [{
								selector: ".Tooltip.Guidance .TooltipCloseIcon",
								action: "click"
							}, {
								selector: "window",
								action: "scroll"
							}],
							motion: {
								direction: "vertical",
								timing: 300
							}
						}
					}
					getArticleSidebar() {
						return {
							element: {
								selector: "#StudySearchOnArticlePage",
								isActive: () => {
									const e = document.getElementById("StudySearchOnArticlePage");
									return !!e && "fixed" === window.getComputedStyle(e).position
								}
							},
							pages: ["articles"],
							listeners: [{
								selector: "window",
								action: "scroll"
							}],
							motion: {
								direction: "vertical",
								timing: 0
							}
						}
					}
					isMobileBreakpoint() {
						return Shared.breakpoints(["Small", "Medium"])
					}
				}
				window.SlideInElementContextualInformer = n
			},
			8845: function(e, t, i) {
				"use strict";
				var n = i(2270);
				const s = function() {
					const e = {
						button: null,
						init() {
							"serviceWorker" in navigator && (this.button = document.querySelector("#AddToHomeScreen"), this.button && (this.button.style.display = "none", this.installScript()))
						},
						installScript() {
							navigator.serviceWorker.register(`${n.default.getBaseUrl()}Offline.js`, {
								scope: "/"
							}).then((() => {
								window.addEventListener("beforeinstallprompt", (e => {
									this.promptInstallBanner(e)
								})), !1 === navigator.onLine && (window.ga || window.snowplow) && (ga("send", "event", {
									eventCategory: "Online Status",
									eventAction: navigator.onLine.toString()
								}), window.snowplow("trackStructEvent", {
									category: "Online Status",
									action: navigator.onLine.toString(),
									value: 10
								}))
							})).catch((function(e) {}))
						},
						promptInstallBanner(e) {
							e.preventDefault(), this.button.style.display = "block", this.button.addEventListener("click", (() => {
								e.prompt(), this.button.style.display = "none", e.userChoice.then((t => {
									const i = window.location.href;
									(window.ga || window.snowplow) && (ga("send", "event", {
										eventCategory: "PWA Install Prompt",
										eventAction: t.outcome,
										eventLabel: i
									}), window.snowplow("trackStructEvent", {
										category: "PWA Install Prompt",
										action: t.outcome,
										label: i,
										value: 10
									})), e = null
								}))
							}))
						}
					};
					return {
						init() {
							e.init()
						}
					}
				}();
				document.addEventListener("DOMContentLoaded", (() => {
					s.init()
				}))
			},
			7378: function(e, t, i) {
				"use strict";
				i.d(t, {
					U: function() {
						return n
					}
				});
				class n {
					constructor(e) {
						this.options = {}, this.wrapper = null, this.contents = "", this.options = Object.assign(this.options, e), this.initialize()
					}
					initialize() {
						this.wrapper = this.options.wrapper, this.wrapper && (this.contents = this.wrapper.getElementsByClassName("AccordionFold"), 0 !== this.contents.length && (this.toggleAccordion(), this.expandContent = this.options.expandContent, this.expandContent && this.expand(), this.showMore = this.options.showMore, this.showMore && this.displayMore(), this.showOneSection = this.options.showOneSection))
					}
					toggleAccordion() {
						this.hideFoldContent(this.contents), this.addDownArrow(this.contents);
						const e = this.wrapper.getElementsByClassName("FoldTitle");
						Array.from(e).forEach((e => {
							e.addEventListener("click", this.toggleFoldEvent.bind(this))
						}))
					}
					hideFoldContent(e) {
						for (let i = 0; i < e.length; i++) {
							var t = e[i].getElementsByClassName("FoldContent");
							if (!t.length) return;
							for (let e = 0; e < t.length; e++) t[e].classList.add("Hidden")
						}
					}
					addDownArrow(e) {
						for (let i = 0; i < e.length; i++) {
							var t = e[i].getElementsByClassName("FoldTitle");
							for (let e = 0; e < t.length; e++) t[e].getElementsByClassName("FoldIcon")[0].classList.add("lnr-chevron-down")
						}
					}
					toggleFoldEvent(e) {
						var t = this,
							i = e.target.closest(".AccordionFold");
						i && (t.showOneSection && Array.from(t.wrapper.querySelectorAll(".AccordionFold")).forEach((e => {
							e.getElementsByClassName("FoldContent")[0].classList.contains("Hidden") || e === i || t.toggleFold(e)
						})), t.toggleFold(i))
					}
					toggleFold(e) {
						if (e) {
							var t = e.querySelector(".FoldContent");
							if (t) {
								var i = e.querySelector(".FoldIcon");
								i && (t.classList.toggle("Hidden"), i.classList.toggle("lnr-chevron-down"), i.classList.toggle("lnr-chevron-up"))
							}
						}
					}
					expand() {
						var e = this.contents.querySelectorAll(".FoldContent");
						if (e) {
							var t = this.contents.querySelectorAll(".FoldIcon");
							if (!isNaN(this.expandContent) && parseInt(this.expandContent, 10) == this.expandContent && this.expandContent > 0) {
								e.length < this.expandContent && (this.expandContent = e.length);
								for (var i = 0; i < this.expandContent; i++) e[i].classList.toggle("Hidden"), t[i].classList.toggle("lnr-chevron-down"), t[i].classList.toggle("lnr-chevron-up")
							}
						}
					}
					displayMore() {
						var e = this.wrapper.querySelector(".ShowMoreAccordion");
						if (e)
							if (this.contents.length <= this.showMore)
								for (let t = 0; t < e.length; t++) e[t].remove();
							else {
								var t = this.contents.slice(this.showMore);
								Array.from(t).forEach((function(e) {
									e.classList.add("Hidden")
								})), e.addEventListener("click", function() {
									this.classList.remove("Hidden");
									for (let t = 0; t < e.length; t++) e[t].remove()
								}.bind(this))
							}
					}
				}
			},
			8246: function() {
				new class {
					constructor() {
						try {
							this.timer = null, this._setProperties(), this._setBackgroundImage(), this.headerImage.dataset.src && (this.initialBackgroundImage = this._responsiveImageURL, this._setLowResPlaceholderBackgroundImage(), this._loadResponsiveBackgroundAfterDOMContentLoaded()), window.addEventListener("resize", this._onResize.bind(this))
						} catch (e) {}
					}
					_setProperties() {
						if (this.container = document.getElementById("HeroContainer"), !this.container) throw new DOMException("#HeroContainer not found");
						if (this.placeholderEl = this.container.querySelector(".js-heroImage"), this.placeholderLowResEl = this.container.querySelector(".js-heroImageLowResPlaceholder"), !this.placeholderEl) throw new DOMException("#HeroContainer not found");
						if (this._setVariation(), this.headerEl = this.container.querySelector(".js-heroImageSources"), !this.headerEl) throw new DOMException(".js-heroImageSources not found");
						this.headerImage = this.headerEl.querySelector("img"), this.headerSources = this.headerEl.querySelectorAll("source"), this._isImageACoverImage(this.headerImage) && this.placeholderEl.classList.add("PlaceholderImage")
					}
					_onResize() {
						const e = this._setBackgroundImage.bind(this);
						clearTimeout(this.timer), this.timer = setTimeout(e, 100)
					}
					_setImageSources() {
						Array.from(this.headerSources).forEach((e => {
							e.dataset.srcset && (e.srcset = e.dataset.srcset)
						})), this.headerImage.dataset.src && (this.headerImage.src = this.headerImage.dataset.src)
					}
					get _responsiveImageURL() {
						let e = this.headerImage.currentSrc;
						return e = e || this.headerImage.src, e
					}
					_setLowResPlaceholderBackgroundImage() {
						this.placeholderLowResEl.style.backgroundImage = `url("${this._responsiveImageURL}")`
					}
					_setBackgroundImage() {
						this.placeholderEl.style.backgroundImage = `url("${this._responsiveImageURL}")`
					}
					_loadResponsiveBackgroundAfterDOMContentLoaded() {
						window.addEventListener("DOMContentLoaded", (() => {
							let e;
							this._setImageSources();
							const t = setInterval((() => {
									this.initialBackgroundImage !== this._responsiveImageURL && (e = new Image, e.src = this._responsiveImageURL, clearInterval(t))
								}), 50),
								i = setInterval((() => {
									void 0 !== e && e.complete && (clearInterval(i), this._setBackgroundImage(), this.placeholderLowResEl.classList.add("is-loaded"))
								}), 50)
						}))
					}
					_setVariation() {
						const e = this.container.querySelector(".js-variation");
						let t = 1;
						e && (t = parseInt(e.dataset.variation, 10)), this.container.classList.add(`Variation${t}`)
					}
					_isImageACoverImage(e) {
						return e.classList.contains("PlaceholderCoverImage")
					}
				}
			},
			3627: function() {
				var e = {
					sidebar: null,
					sidebarChildren: null,
					sidebarHeight: null,
					mainMenu: null,
					coverImageSection: null,
					contentWrapper: null,
					footer: null,
					scrollPointBottom: null,
					initScreenSize: null,
					borderFix: 2,
					rem: 24,
					initialise: function() {
						var e = this;
						e.sidebar = document.getElementById("Sidebar"), e.sidebarChildren = e.sidebar.querySelectorAll(".Module"), Array.from(e.sidebarChildren).shift(), e.sidebarHeight = e.sidebar.getBoundingClientRect().height, e.mainMenu = document.getElementById("SearchRow"), e.coverImageSection = document.getElementById("HeroContainer"), e.contentWrapper = document.getElementById("Wrapper"), e.footer = document.getElementById("Footer"), e.initScreenSize = document.body.getBoundingClientRect().height, document.addEventListener("scrolledUp", e.detectScrollBehaviour.bind(e)), document.addEventListener("scrolledDown", e.detectScrollBehaviour.bind(e)), window.addEventListener("resize", e.detectScrollBehaviour.bind(e)), window.addEventListener("bannersready", e.detectScrollBehaviour.bind(e)), e.detectScrollBehaviour()
					},
					detectScrollBehaviour: function() {
						if (Shared.breakpoints(["Small", "Medium"], function() {
								this.sidebar.style.bottom = "auto", this.sidebar.style.position = "relative", this.sidebar.style.top = "auto"
							}.bind(this))) return;
						var e = this.mainMenu.getBoundingClientRect().height,
							t = 0,
							i = document.getElementById("CurrentUni");
						let n;
						i && (t = parseInt(i.getBoundingClientRect().height, 10)), this.initScreenSize - e - t <= this.sidebarHeight ? Array.from(this.sidebarChildren).forEach((function(e) {
							e.style.display = "none"
						})) : Array.from(this.sidebarChildren).forEach((function(e) {
							e.style.display = "block"
						})), n = !1 === /Trident\/\d./i.test(navigator.userAgent) && !1 === /MSIE\/\d./i.test(navigator.userAgent) ? window.scrollY : document.querySelector("html").scrollTop;
						var s = this.coverImageSection.getBoundingClientRect().bottom + n,
							r = Math.floor(s - e - t - this.borderFix - this.rem);
						if (r < 0) {
							var o = this.contentWrapper.offsetTop + r;
							r = o < 0 ? 0 : o
						}
						var a = !1;
						this.footer.getBoundingClientRect().top <= window.innerHeight && (a = !0);
						var c = document.getElementById("MainInfoContainer"),
							l = this.sidebar.style.position;
						if (null !== this.scrollPointBottom && n <= this.scrollPointBottom) this.sidebar.style.bottom = "auto", this.sidebar.style.position = "fixed", this.sidebar.style.top = this.mainMenu.getBoundingClientRect().height - this.borderFix + this.rem + "px", this.scrollPointBottom = null;
						else if (Math.floor(this.sidebar.getBoundingClientRect().bottom) >= Math.floor(c.getBoundingClientRect().bottom) && a) null === this.scrollPointBottom && (this.scrollPointBottom = n), this.sidebar.style.top = "auto", this.sidebar.style.bottom = 0, this.sidebar.style.position = "absolute";
						else if (Math.floor(n) <= Math.floor(r)) {
							if ("fixed" == l) {
								var d = s - this.contentWrapper.offsetTop - this.borderFix;
								this.sidebar.style.bottom = "auto", this.sidebar.style.position = "absolute", this.sidebar.style.top = `${d}px`
							}
						} else this.sidebar.style.bottom = "auto", this.sidebar.style.position = "fixed", this.sidebar.style.top = this.mainMenu.getBoundingClientRect().height - this.borderFix + this.rem + "px"
					}
				};
				window.addEventListener("load", (function() {
					e.initialise()
				}))
			},
			4028: function(e, t, i) {
				"use strict";
				i(2270).default.live = !0;
				var n = void 0 === n || null == n ? {} : n;
				n.Search = void 0 === n.Search || null == n.Search ? {} : n.Search, n.Search.apiUrl = "https://search.prtl.co/2018-07-23/", n.Search.proxyUrl = "https://1cna6fszvk.execute-api.eu-west-1.amazonaws.com/prod", n.autoCompleteURL = "https://autocomplete.prtl.co/", n.snowplow = {
					app_id: "prod",
					collectorSubdomain: "collect"
				}
			},
			9762: function(e, t, i) {
				"use strict";
				i.d(t, {
					I: function() {
						return n
					}
				});
				const n = function() {
					let e = [],
						t = !1;

					function i() {
						if (t) return;
						let n = e.shift();
						if (n) {
							t = !0;
							try {
								fetch(n.url, n.request).then(n.resolve).catch(n.reject)
							} catch (e) {
								n.reject(e)
							} finally {
								t = !1, i()
							}
						}
					}
					return {
						addRequest: function(t, n, s, r, o) {
							return new Promise((function(a, c) {
								e.push({
									maxAttempts: s || 1,
									delay: r || 1e3,
									fixed: !1 === o,
									request: n,
									url: t,
									retry: 0,
									resolve: a,
									reject: c
								}), i()
							}))
						}
					}
				}()
			},
			343: function(e, t, i) {
				"use strict";
				var n = i(7677);
				n.Z.registerHelper("ifE", (function(e, t, i) {
					return "true" === t && e ? i.fn(this) : "false" !== t || e ? e == t ? i.fn(this) : i.inverse(this) : i.fn(this)
				})), n.Z.registerHelper("ifNE", (function(e, t, i) {
					return e != t ? i.fn(this) : i.inverse(this)
				})), n.Z.registerHelper("ifLT", (function(e, t, i) {
					return e < t ? i.fn(this) : i.inverse(this)
				})), n.Z.registerHelper("ifLTE", (function(e, t, i) {
					return e <= t ? i.fn(this) : i.inverse(this)
				})), n.Z.registerHelper("ifGT", (function(e, t, i) {
					return e > t ? i.fn(this) : i.inverse(this)
				})), n.Z.registerHelper("ifGTE", (function(e, t, i) {
					return e >= t ? i.fn(this) : i.inverse(this)
				})), n.Z.registerHelper("counter", (function(e) {
					return parseInt(e, 10) + 1
				})), n.Z.registerHelper("add", (function(e, t) {
					return parseInt(e, 10) + t
				})), n.Z.registerHelper("isNumber", (function(e) {
					return "number" == typeof e
				}))
			},
			1185: function(e, t, i) {
				"use strict";
				i.d(t, {
					g: function() {
						return o
					}
				});
				var n = i(9389),
					s = i(5175);

				function r(e, t, i) {
					return t in e ? Object.defineProperty(e, t, {
						value: i,
						enumerable: !0,
						configurable: !0,
						writable: !0
					}) : e[t] = i, e
				}
				class o {
					constructor(e, t, i, o, a) {
						r(this, "tracker", void 0), r(this, "impressionValidator", void 0), r(this, "parentContainer", void 0), r(this, "listPageType", void 0), r(this, "listName", void 0), this.tracker = new s.Tracker(i), this.parentContainer = document.querySelector(`.${e}`), this.parentContainer && (this.listPageType = o, this.listName = a, this.bindImpressionTracking(), this.impressionValidator = new n.TC(this.parentContainer, t))
					}
					bindImpressionTracking() {
						this.parentContainer && this.parentContainer.children && Array.from(this.parentContainer.children).forEach(((e, t) => {
							let i, s, r;
							const o = t + 1,
								a = e.querySelector(".js-TrackingEvent");
							a && a.dataset && a.dataset.id && a.dataset.organisationId && a.dataset.label && (i = a.dataset.id, s = a.dataset.organisationId, r = a.dataset.label), !i && !s && e.dataset && e.dataset.studyId && e.dataset.organisationId && (i = e.dataset.studyId, s = e.dataset.organisationId), e.addEventListener(n.Vy.VALIDATED_IMPRESSION, (() => {
								this.trackImpression(i, r, s, o)
							}))
						}))
					}
					manuallyProcessElements() {
						this.impressionValidator.processElements()
					}
					trackImpression(e, t, i, n) {
						const r = new s.StudyCardImpressionData(parseInt(e), this.listPageType, this.listName, parseInt(i), void 0, t, n, void 0, void 0);
						try {
							this.tracker.trackStudyCardImpression(r)
						} catch (e) {
							void 0 !== window.Rollbar && window.Rollbar.error(`Issue with tracking study card impressions on ${this.listPageType} page`, e)
						}
					}
				}
			},
			9673: function(e, t, i) {
				"use strict";
				i.d(t, {
					checkNamespace: function() {
						return s
					}
				});
				var n = window.StudyPortals || {};
				const s = function(e) {
					let t, i = e.split("."),
						s = n;
					"StudyPortals" === i[0] && (i = i.slice(1)), t = i.length;
					let r = !0;
					for (let e = 0; e < t; e++) void 0 === s[i[e]] && (r = !1, e = t), s = s[i[e]];
					return r
				}
			},
			7360: function(e, t) {
				"use strict";
				let i = {
					aliases: {
						activated: "act",
						active: "ac",
						affiliate: "fflt",
						allow: "al",
						application_partners: "ap",
						approval: "apl",
						area_ids: "ae",
						area_presence: "aep",
						article_ids: "ar",
						assistant_ids: "ai",
						auditor_ids: "au",
						banner_boxes: "bb",
						banner_ids: "ba",
						body_ids: "bo",
						brand: "br",
						cae_max: "caex",
						cae_min: "caem",
						campaign_ids: "cam",
						capped_budget: "cb",
						category_ids: "ca",
						chain_types: "ct",
						child_ids: "chi",
						city_ids: "ti",
						classifications: "cl",
						cms_user_id: "cmi",
						comparison_ids: "cmp",
						consortium_ids: "mi",
						continents: "con",
						country_ids: "ci",
						country_status: "cs",
						course_ids: "co",
						cpm_max: "cx",
						cpm_min: "cm",
						date_max: "dax",
						date_min: "dam",
						date_type: "dat",
						degrees: "dg",
						density: "de",
						discipline_ids: "di",
						distance: "dt",
						double_reports: "dr",
						duration_max: "dx",
						duration_min: "dm",
						duration_ranges: "dur",
						education_levels: "elv",
						educational_forms: "ef",
						email: "ma",
						email_like: "mal",
						entity: "et",
						entity_ids: "eid",
						entity_types: "ety",
						entropy: "en",
						entry_level: "el",
						entry_level_max: "elx",
						entry_level_min: "elm",
						exact_name: "xna",
						exact_query: "equ",
						executive: "xu",
						experience_ids: "ex",
						external: "ext",
						facebook_id: "fb",
						favourite_ids: "fvr",
						favourited: "fav",
						fce_max: "fcex",
						fce_min: "fcem",
						filename: "fn",
						from_area_ids: "fae",
						from_city_ids: "fci",
						from_country_ids: "fco",
						from_organisation_ids: "for",
						from_region_ids: "frg",
						from_study_ids: "fst",
						from_user_ids: "fus",
						full_name: "fna",
						full_name_email: "fne",
						genders: "ge",
						godmode: "god",
						group_ids: "gi",
						group_size_max: "gsx",
						group_size_min: "gsm",
						handler_ids: "hi",
						has_adwords: "had",
						has_banner: "hb",
						has_english_courses: "hec",
						has_experience: "hex",
						has_inquiry_campaign: "hic",
						has_language_courses: "hlco",
						has_language_courses_types: "hlcot",
						has_language_studies: "hlst",
						has_lead_campaign: "hlc",
						has_organisations: "hor",
						has_reviews: "hre",
						has_venues: "hve",
						hash: "ha",
						highlight: "hl",
						ids: "id",
						ielts_max: "ieltsx",
						ielts_min: "ieltsm",
						in_ranking: "rk",
						intensity_max: "ix",
						intensity_min: "im",
						invert: "iv",
						ip: "ip",
						is_student: "is",
						iso_code: "iso",
						joint: "jt",
						keywords: "kw",
						kinds: "ki",
						language: "lan",
						language_course_ids: "lco",
						language_ids: "ln",
						latitude: "la",
						lead_campaign_ids: "ldc",
						legacy: "lgc",
						legacy_ids: "leg",
						level: "lev",
						levels: "lv",
						locale: "lc",
						locales: "lcs",
						locations: "loc",
						longitude: "lo",
						mailing_type_ids: "mty",
						manager_ids: "mid",
						member_student_ids: "msi",
						methods: "mh",
						mobility_types: "mt",
						name: "na",
						no_countries: "nci",
						no_disciplines: "ndi",
						no_duration_max: "ndx",
						no_duration_min: "ndm",
						no_from_countries: "nfc",
						no_levels: "nlv",
						no_options: "nop",
						no_purposes: "npp",
						no_users: "nus",
						not_country_ids: "!ci",
						not_degrees: "!dg",
						not_send: "ns",
						now: "now",
						occurrence_ids: "oc",
						options: "op",
						organisation_ids: "oi",
						over_budget: "ob",
						page: "pa",
						parent_ids: "pi",
						partial_reports: "plr",
						parttime_variants: "pv",
						person_ids: "ps",
						personal_updates: "per",
						population_max: "pox",
						population_min: "pom",
						portal_types: "pt",
						premiums: "pm",
						preparation_course_ids: "pco",
						presence: "pr",
						product_ids: "pro",
						project_types: "prj",
						public: "pb",
						purpose: "pu",
						purposes: "pp",
						qualified: "qa",
						query: "qu",
						ranking_ids: "ra",
						ratings: "rts",
						rbp: "rbp",
						recommended_ids: "rec",
						recursive: "rv",
						referred_student_ids: "rsi",
						region_ids: "rg",
						regions: "rgs",
						related_ids: "rel",
						relations: "rl",
						report_ids: "ri",
						responsive: "res",
						review_ids: "rw",
						rolling: "rol",
						scholarship_ids: "sc",
						search_variation: "sv",
						show_areas: "sa",
						site_ids: "sid",
						skills: "sk",
						special_programmes: "sps",
						spl: "sp",
						spotlight: "spl",
						start_dates: "sd",
						startdate_ids: "sta",
						statuses: "ss",
						student_ids: "su",
						student_organisation_ids: "so",
						study_deadline_ids: "sdl",
						study_ids: "st",
						study_relation: "sr",
						studyportals: "prtl",
						sublevel: "sl",
						subscribed: "sub",
						subscription_ids: "sb",
						tags: "tg",
						tail: "tail",
						target_ids: "ta",
						terms: "te",
						title: "til",
						to_area_ids: "tae",
						to_city_ids: "tci",
						to_country_ids: "tco",
						to_organisation_ids: "tor",
						to_region_ids: "trg",
						to_study_ids: "tst",
						to_user_ids: "tus",
						toefl_internet_max: "toeflix",
						toefl_internet_min: "toeflim",
						toefl_paper_max: "toeflpx",
						toefl_paper_min: "toeflpm",
						topic: "to",
						topic_ids: "tpc",
						toplevel: "tl",
						tuition_fee_currency: "tc",
						tuition_fee_max: "tx",
						tuition_fee_min: "tm",
						tuition_fee_target: "tt",
						tuition_fee_unit: "tu",
						tuition_ranges: "tr",
						type: "tp",
						types: "ty",
						uni_admin_users: "uau",
						uniqueid: "uid",
						url: "url",
						user_agent: "ua",
						user_country: "uc",
						user_ids: "us",
						user_region: "ur",
						venue_ids: "vn",
						webinar_ids: "wi",
						year: "yr"
					},
					types: {
						activated: "boolean",
						active: "boolean",
						affiliate: "string",
						allow: "boolean",
						application_partners: "boolean",
						approval: "boolean",
						area_ids: "integer[]",
						area_presence: "string[]",
						article_ids: "integer[]",
						assistant_ids: "integer[]",
						auditor_ids: "integer[]",
						banner_boxes: "string[]",
						banner_ids: "integer[]",
						body_ids: "integer[]",
						brand: "string",
						cae_max: "integer",
						cae_min: "integer",
						campaign_ids: "integer[]",
						capped_budget: "boolean",
						category_ids: "integer[]",
						chain_types: "string[]",
						child_ids: "integer[]",
						city_ids: "integer[]",
						classifications: "string[]",
						cms_user_id: "integer",
						comparison_ids: "integer[]",
						consortium_ids: "integer[]",
						continents: "boolean",
						country_ids: "integer[]",
						country_status: "string[]",
						course_ids: "integer[]",
						cpm_max: "integer",
						cpm_min: "integer",
						date_max: "timestamp",
						date_min: "timestamp",
						date_type: "string",
						degrees: "string[]",
						density: "string[]",
						discipline_ids: "integer[]",
						distance: "string",
						double_reports: "boolean",
						duration_max: "integer",
						duration_min: "integer",
						duration_ranges: "range[]",
						education_levels: "string[]",
						educational_forms: "string[]",
						email: "string",
						email_like: "string",
						entity: "string",
						entity_ids: "integer[]",
						entity_types: "string[]",
						entropy: "integer",
						entry_level: "string",
						entry_level_max: "string",
						entry_level_min: "string",
						exact_name: "string",
						exact_query: "string",
						executive: "boolean",
						experience_ids: "integer[]",
						external: "string",
						facebook_id: "string",
						favourite_ids: "integer[]",
						favourited: "boolean",
						fce_max: "integer",
						fce_min: "integer",
						filename: "string",
						from_area_ids: "integer[]",
						from_city_ids: "integer[]",
						from_country_ids: "integer[]",
						from_organisation_ids: "integer[]",
						from_region_ids: "integer[]",
						from_study_ids: "integer[]",
						from_user_ids: "integer[]",
						full_name: "string",
						full_name_email: "string",
						genders: "string[]",
						godmode: "boolean",
						group_ids: "integer[]",
						group_size_max: "integer",
						group_size_min: "integer",
						handler_ids: "integer[]",
						has_adwords: "boolean",
						has_banner: "boolean",
						has_english_courses: "boolean",
						has_experience: "boolean",
						has_inquiry_campaign: "boolean",
						has_language_courses: "boolean",
						has_language_courses_types: "string[]",
						has_language_studies: "boolean",
						has_lead_campaign: "boolean",
						has_organisations: "boolean",
						has_reviews: "boolean",
						has_venues: "boolean",
						hash: "string",
						highlight: "boolean",
						ids: "integer[]",
						ielts_max: "string",
						ielts_min: "string",
						in_ranking: "boolean",
						intensity_max: "integer",
						intensity_min: "integer",
						invert: "boolean",
						ip: "string",
						is_student: "boolean",
						iso_code: "string",
						joint: "string[]",
						keywords: "string",
						kinds: "string[]",
						language: "string",
						language_course_ids: "integer[]",
						language_ids: "integer[]",
						latitude: "string",
						lead_campaign_ids: "integer[]",
						legacy: "boolean",
						legacy_ids: "integer[]",
						level: "string",
						levels: "string[]",
						locale: "string",
						locales: "string[]",
						locations: "string[]",
						longitude: "string",
						mailing_type_ids: "integer[]",
						manager_ids: "integer[]",
						member_student_ids: "integer[]",
						methods: "string[]",
						mobility_types: "string[]",
						name: "string",
						no_countries: "boolean",
						no_disciplines: "boolean",
						no_duration_max: "boolean",
						no_duration_min: "boolean",
						no_from_countries: "boolean",
						no_levels: "boolean",
						no_options: "string[]",
						no_purposes: "boolean",
						no_users: "boolean",
						not_country_ids: "integer[]",
						not_degrees: "string[]",
						not_send: "boolean",
						now: "timestamp",
						occurrence_ids: "integer[]",
						options: "string[]",
						organisation_ids: "integer[]",
						over_budget: "boolean",
						page: "string",
						parent_ids: "integer[]",
						partial_reports: "boolean",
						parttime_variants: "string[]",
						person_ids: "integer[]",
						personal_updates: "boolean",
						population_max: "string",
						population_min: "string",
						portal_types: "string[]",
						premiums: "string[]",
						preparation_course_ids: "integer[]",
						presence: "string[]",
						product_ids: "integer[]",
						project_types: "string[]",
						public: "boolean",
						purpose: "string",
						purposes: "string[]",
						qualified: "boolean",
						query: "string",
						ranking_ids: "integer[]",
						ratings: "string[]",
						rbp: "boolean",
						recommended_ids: "integer[]",
						recursive: "boolean",
						referred_student_ids: "integer[]",
						region_ids: "integer[]",
						regions: "string[]",
						related_ids: "integer[]",
						relations: "string[]",
						report_ids: "integer[]",
						responsive: "boolean",
						review_ids: "integer[]",
						rolling: "boolean",
						scholarship_ids: "integer[]",
						search_variation: "integer",
						show_areas: "boolean",
						site_ids: "integer[]",
						skills: "string[]",
						special_programmes: "string[]",
						spl: "boolean",
						spotlight: "boolean",
						start_dates: "string[]",
						startdate_ids: "integer[]",
						statuses: "string[]",
						student_ids: "integer[]",
						student_organisation_ids: "integer[]",
						study_deadline_ids: "integer[]",
						study_ids: "integer[]",
						study_relation: "boolean",
						studyportals: "boolean",
						sublevel: "boolean",
						subscribed: "boolean",
						subscription_ids: "integer[]",
						tags: "string[]",
						tail: "boolean",
						target_ids: "integer[]",
						terms: "string[]",
						title: "string",
						to_area_ids: "integer[]",
						to_city_ids: "integer[]",
						to_country_ids: "integer[]",
						to_organisation_ids: "integer[]",
						to_region_ids: "integer[]",
						to_study_ids: "integer[]",
						to_user_ids: "integer[]",
						toefl_internet_max: "integer",
						toefl_internet_min: "integer",
						toefl_paper_max: "integer",
						toefl_paper_min: "integer",
						topic: "string",
						topic_ids: "integer[]",
						toplevel: "boolean",
						tuition_fee_currency: "string",
						tuition_fee_max: "integer",
						tuition_fee_min: "integer",
						tuition_fee_target: "string",
						tuition_fee_unit: "string",
						tuition_ranges: "range[]",
						type: "string",
						types: "string[]",
						uni_admin_users: "boolean",
						uniqueid: "string",
						url: "string",
						user_agent: "string",
						user_country: "integer",
						user_ids: "integer[]",
						user_region: "integer",
						venue_ids: "integer[]",
						webinar_ids: "integer[]",
						year: "integer"
					},
					alias(e) {
						if ("object" != typeof e) return "";
						if (0 === e.length) return "";
						let t = [],
							i = this;
						return e = this._sort(e), Object.keys(e).map((function(n) {
							let s = e[n];
							switch (i._getType(n)) {
								case "string[]":
									try {
										t.push(i._serializeStringArray(n, s))
									} catch (e) {}
									break;
								case "integer[]":
									try {
										t.push(i._serializeIntegerArray(n, s))
									} catch (e) {}
									break;
								case "range[]":
									try {
										t.push(i._serializeRangeArray(n, s))
									} catch (e) {}
									break;
								case "string":
									"string" != typeof s && (s = ""), s = s.trim(), "" !== s && t.push(i._getShortName(n) + "-" + s);
									break;
								case "integer":
									s = parseInt(s, 10), isNaN(s) || t.push(i._getShortName(n) + "-" + s);
									break;
								case "boolean":
									s ? t.push(i._getShortName(n) + "-1") : t.push(i._getShortName(n) + "-0");
									break;
								case "timestamp":
									try {
										s = i._parseTimeStamp(s), t.push(i._getShortName(n) + "-" + s)
									} catch (e) {}
							}
						})), 0 === t.length ? "" : t.join("|")
					},
					unalias(e) {
						if ("string" != typeof e) return {};
						let t = e.split("|");
						t.sort();
						let i = {},
							n = this;
						return t.map((function(e) {
							let t = e.split("-"),
								s = t.shift(),
								r = t.join("-"),
								o = n._getLongName(s);
							if ("" === o) return;
							let a = n._getType(o);
							if ("" !== a) switch (a) {
								case "string[]":
									try {
										i[o] = n._unserializeStringArray(r)
									} catch (e) {
										return
									}
									break;
								case "integer[]":
									try {
										i[o] = n._unserializeIntegerArray(r)
									} catch (e) {
										return
									}
									break;
								case "range[]":
									try {
										i[o] = n._unserializeRangeArray(r)
									} catch (e) {
										return
									}
									break;
								case "string":
									i[o] = r;
									break;
								case "integer":
									isNaN(parseInt(r, 10)) || (i[o] = r);
									break;
								case "boolean":
									i[o] = !1, r && (i[o] = !0)
							}
						})), i
					},
					_sort(e) {
						let t = [];
						Object.keys(e).map((function(e) {
							t.push(e)
						})), t.sort();
						let i = {};
						return t.map((function(t) {
							i[t] = e[t]
						})), i
					},
					_unserializeStringArray(e) {
						let t = e.split(","),
							i = [];
						if (t.map((function(e) {
								let t = e.trim();
								"" !== t && i.push(t)
							})), 0 === i.length) throw new Error("Parameters._unserializeStringArray: clean array is empty");
						return i
					},
					_unserializeIntegerArray(e) {
						let t = e.split(","),
							i = [];
						if (t.map((function(e) {
								let t = parseInt(e, 10);
								isNaN(t) || i.push(t)
							})), 0 === i.length) throw new Error("Parameters._unserializeIntegerArray: empty clean array!");
						return i
					},
					_serializeRangeArray(e, t) {
						if ("" === this._getShortName(e)) throw new Error("No alias found for " + e + "!");
						if (t instanceof Array != 1) throw new Error("Not an array!");
						if (0 === t.length) throw new Error("Empty array!");
						let i = [];
						if (t.map((function(e) {
								if (e instanceof Array == 0) throw new Error("Range not an array!");
								let t = [];
								e.map((function(e) {
									let i = parseInt(e, 10);
									if (isNaN(i)) throw new Error("Range value is not a number!");
									t.push(i)
								})), i.push("[" + t.join(",") + "]")
							})), 0 === i.length) throw new Error("Empty clean array!");
						return this._getShortName(e) + "-" + i.join(",")
					},
					_unserializeRangeArray(e) {
						e = "[" + e + "]";
						let t = [];
						try {
							t = JSON.parse(e)
						} catch (e) {
							throw new Error("Parameters._unserializeRangeArray: incorrect range format!")
						}
						if (!(t instanceof Array)) throw new Error("Parameters._unserializeRangeArray: ranges is not an array!");
						if (0 === t.length) throw new Error("Parameters._unserializeRangeArray: nothing found in ranges!");
						let i = [];
						return t.map((function(e) {
							if (2 !== e.length) throw new Error("Parameters._unserializeRangeArray: single range should have two values!");
							let t = [];
							e.map((function(e) {
								t.push(parseInt(e, 10))
							})), i.push(t)
						})), i
					},
					_serializeIntegerArray(e, t) {
						if ("" === this._getShortName(e)) throw new Error("No alias found for " + e + "!");
						if (!(t instanceof Array)) throw new Error("Not an array!");
						if (0 === t.length) throw new Error("Empty array!");
						let i = [];
						if (t.map((function(e) {
								let t = parseInt(e, 10);
								isNaN(t) || i.push(t)
							})), 0 === i.length) throw new Error("Empty clean array!");
						return this._getShortName(e) + "-" + i.join(",")
					},
					_serializeStringArray(e, t) {
						if ("" === this._getShortName(e)) throw new Error("No alias found for " + e + "!");
						if (!(t instanceof Array)) throw new Error("Not an array!");
						if (0 === t.length) throw new Error("Empty array!");
						let i = [];
						if (t.map((function(e) {
								let t = e.trim();
								"" !== t && i.push(t)
							})), 0 === i.length) throw new Error("Empty clean array!");
						return this._getShortName(e) + "-" + i.join(",")
					},
					_getType(e) {
						return void 0 !== this.types[e] ? this.types[e] : ""
					},
					_getShortName(e) {
						return void 0 !== this.aliases[e] ? this.aliases[e] : ""
					},
					_getLongName(e) {
						let t = "",
							i = this;
						return Object.keys(this.aliases).map((function(n) {
							i.aliases[n] === e && (t = n)
						})), t
					},
					_parseTimeStamp(e) {
						e = e.trim();
						let t = 0,
							i = 0,
							n = 0,
							s = 0,
							r = 1,
							o = new Date,
							a = o.getFullYear(),
							c = moment(o).format("ZZ");
						if (o.setSeconds(parseInt(n, 10)), 19 === e.length && (c = e.substr(14, 5)), 18 === e.length) {
							let t = parseInt(e.substr(14, 2), 10),
								i = parseInt(e.substr(16, 2), 10),
								n = new Date;
							n.setHours(12, 0, 0);
							let s = new Date;
							s.setHours(t, i, 0);
							let r = n.diff(s, "minute"),
								o = "+";
							r < 0 && (o = "-"), r = Math.abs(r), i = r % 60, t = Math.floor(r / 60), i = i.toString().pad(2, "0", "left"), t = t.toString().pad(2, "0", "left"), c = o + t + i
						}
						switch (e.length) {
							case 19:
							case 18:
							case 14:
								n = e.substr(12, 2);
							case 12:
								i = e.substr(10, 2);
							case 10:
								t = e.substr(8, 2);
							case 8:
								r = e.substr(6, 2);
							case 6:
								s = e.substr(4, 2), s = parseInt(s, 10) - 1;
							case 4:
								a = e.substr(0, 4);
								break;
							default:
								throw new Error("Invalid length for datetime, expecting 4, 6, 8, 10, 12, 14, 16, 18 or 19")
						}
						return o.setHours(parseInt(t, 10)), o.setMinutes(parseInt(i, 10)), o.setSeconds(parseInt(n, 10)), o.setFullYear(parseInt(a, 10)), o.setDate(parseInt(r, 10)), o.setMonth(parseInt(s, 10)), moment(o).format("YYYYMMDDHHmmss") + c
					}
				};
				t.Z = i
			},
			6329: function(e, t, i) {
				"use strict";
				var n = i(7360);
				class s {
					static constructSearchUrl(e) {
						const t = window.location.href.split("?"),
							i = t.length > 1 ? t[1].split("#")[0] : "",
							r = s.transformSearchParams(e.q);
						if (r && Object.keys(r).length > 0) {
							const t = n.Z.alias(r);
							e.search = t, (r.country_ids || r.organisation_ids || r.region_ids) && delete e["kw-where"], r.discipline_ids && delete e["kw-what"]
						}
						delete e.levels, delete e.q;
						const o = s.getCurrentSearchUrl(),
							a = s._joinSearchParameters(e),
							c = window.location.origin;
						let l = "";
						a.length > 0 ? (l = `?${a}`, "" !== i && (l += `&${i}`)) : l = `?${i}`;
						let d = "master";
						return c.indexOf("phd") >= 0 && (d = "phd"), c.indexOf("bachelor") >= 0 && (d = "bachelor"), c.indexOf("shortcourses") >= 0 && (d = "course"), c.indexOf("distancelearning") >= 0 && (d = "distance-learning?mh=online,blended", l = l.length > 1 ? l.replace("?", "&") : ""), `${o}${d}${l}`
					}
					static constructShortQString(e, t) {
						if (!e) return null;
						let i = "";
						return t ? (s._encodeParameter(e, "kw"), i = s.createQParamsString(e)) : (s._encodeParameter(e, "q"), i = n.Z.alias(e)), i
					}
					static createQParamsString(e) {
						return Object.keys(e).filter((t => e[t])).map((t => `${t}-${e[t]}`)).join("|")
					}
					static transformSearchParams(e) {
						if (!e) return null;
						const t = {};
						s._encodeParameter(e, "q");
						const i = n.Z.alias(e, "q"),
							r = n.Z.unalias(i);
						return Object.keys(r).forEach((i => {
							"discipline_ids" !== i && "country_ids" !== i && "organisation_ids" !== i && "region_ids" !== i && "degrees" !== i || (t[i] = e[i])
						})), t
					}
					static _joinSearchParameters(e) {
						return Object.keys(e).filter((t => e[t])).map((t => `${t}=${e[t]}`)).join("&")
					}
					static _encodeParameter(e, t) {
						e[t] && (e[t] = encodeURIComponent(e[t]))
					}
					static getCurrentSearchUrl() {
						let e = window.location.origin;
						if (window.Loot && window.Loot.DataStorage) {
							const t = Loot.DataStorage.retrieve("UserPortalPreference");
							t && s.isArticlePage() && (e = t)
						}
						return s.isSearchPage() ? e + window.location.pathname : `${e}/search/`
					}
					static getPageHash() {
						return window.location.hash
					}
					static replaceQueryParametersInURL() {
						const e = new URL(window.location);
						let t = new URLSearchParams(e.search);
						if (t && t.has("q")) {
							let i = "#q=" + t.get("q");
							t.delete("q"), window.history.replaceState({}, document.title, e.pathname + i + "?" + t)
						}
					}
					static parseSearchHash(e) {
						return "" === e || "#" !== e.charAt(0) ? {
							searchParameters: new URLSearchParams,
							hash: ""
						} : {
							searchParameters: s._getSearchParams(e.slice(1)),
							hash: e
						}
					}
					static setUrl(e) {
						window.location = e
					}
					static updateSearchUrl(e) {
						const t = e.getSearchParameters(),
							i = s.constructSearchUrl(t);
						s.setUrl(i)
					}
					static _getSearchParams(e) {
						return e = (e = e.replace(/%25/gi, "").replace(/&(?![a-z]*[=])/gi, "")).split("?")[0], new URLSearchParams(e)
					}
					static omitURLSpecialCharacters(e) {
						return e.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
					}
					static isSearchPage() {
						const e = window.location.origin + "/search/";
						return window.location.href.indexOf(e) > -1
					}
					static isArticlePage() {
						const e = window.location.origin + "/articles/";
						return window.location.href.indexOf(e) > -1
					}
					static isStudyPage() {
						let e = !1;
						for (let t of ["/studies/"])
							if (window.location.href.indexOf(t) > -1) {
								e = !0;
								break
							} return e
					}
					static constructGASearchParameters(e) {
						const t = n.Z.alias(e.parameters);
						return ["q", "token", "path", "hh", "include_order"].forEach((t => {
							delete e.extra[t]
						})), e.extra.length = 10, "#q=" + t + "&" + Object.keys(e.extra).map((t => t + "=" + e.extra[t])).join("&")
					}
				}
				window.UrlHandler = s
			},
			2270: function(e, t, i) {
				"use strict";
				i.d(t, {
					default: function() {
						return c
					}
				});
				const n = {
					mandatory_fields: ["category", "action"],
					default_action: "click",
					console_info: [],
					parseTrackers: function(e) {
						var t = e ? [e] : document.querySelectorAll("[data-ga-tracking]");
						t.length && Array.from(t).forEach((function(e) {
							if (!e.hasAttribute("data-ga-parsed")) try {
								n._attachTracker(e)
							} catch (t) {
								n._warning(t, e)
							}
						}))
					},
					_warning: function(e, t) {},
					_attachTracker: function(e) {
						if (!e.tagName) throw "The provided el is not an element.";
						if (!e.hasAttribute("data-ga-tracking")) throw "Missing attribute: data-ga-tracking.";
						var t = e.getAttribute("data-ga-tracking"),
							i = [];
						switch (i = JSON.parse(t), (i = n._validateJSON(i)).event) {
							case "domready":
								n._warning("The 'domready' event is deprecated, use the 'immediate' event instead.", e);
								break;
							case "immediate":
								n.fireTracker(i);
								break;
							default:
								n.console_info.push({
									Tracker: i,
									element: e,
									event: i.event
								}), e.addEventListener(i.event, (function() {
									e.getAttribute("data-ga-tracking-disabled") || (n.fireTracker(i), "remove" == i.onComplete && e.setAttribute("data-ga-tracking-disabled", !0))
								}))
						}
						return e.setAttribute("data-ga-parsed", !0), !0
					},
					_validateJSON: function(e) {
						return n.mandatory_fields.forEach((function(t) {
							if (!e.hasOwnProperty(t) || !e[t]) throw "Missing property: " + t + "."
						})), e.hasOwnProperty("event") || (e.event = n.default_action), e.hasOwnProperty("onComplete") || (e.onComplete = null), e.category = e.category || "", e.action = e.action || "", e.label = e.label || "", e.value = e.value || 0, e
					},
					fireTracker: function(e, t) {
						"undefined" === t && (t = "undefined"), "function" == typeof ga && ga("send", "event", {
							eventCategory: e.category,
							eventAction: e.action,
							eventLabel: e.label,
							eventValue: "number" == typeof e.value ? e.value : 0,
							hitCallback: function() {
								document.dispatchEvent(new CustomEvent("ga-tracking-fired", {
									detail: {
										trigger: t
									}
								}))
							},
							hitCallbackFail: function() {
								document.dispatchEvent(new CustomEvent("ga-tracking-fired", {
									detail: {
										trigger: t
									}
								}))
							},
							nonInteraction: e.nonInteraction || !1
						}), "object" == typeof _gaq && _gaq.push(["_trackEvent", e.category, e.action, e.label, e.value])
					},
					firePageView: function() {
						"function" == typeof ga && (ga("set", {
							page: location.pathname + location.search
						}), ga("send", "pageview"))
					}
				};
				var s = i(9673),
					r = i(7484),
					o = i.n(r),
					a = a || {};
				a.GA = n, a.waitForLoad = function(e, t) {
					"[object Array]" !== Object.prototype.toString.call(e) && t(!1);
					const i = [];
					for (let t = 0; t < e.length; t++) {
						i.push(!1);
						const r = (0, s.checkNamespace)(e[t].name),
							o = void 0 !== window[e[t].name];
						let a = !1,
							c = !1;
						o && (a = void 0 !== window[e[t].name].initialised, c = window[e[t].name].initialised), r || o && !a || o && a && !0 === c ? (i[t] = !0, n()) : (window.addEventListener(e[t].event, (() => {
							i[t] = !0, n()
						})), document.addEventListener(e[t].event, (() => {
							i[t] = !0, n()
						})))
					}

					function n() {
						const e = i.filter(((e, t, i) => i.indexOf(e) === t));
						1 === e.length && !0 === e[0] && t()
					}
				}, a.getBaseUrl = function() {
					const e = new URL(window.location);
					let t = e.protocol;
					return t += "//", t += e.hostname, -1 === ["80", "443"].indexOf(e.port) && (t += ":" + e.port), t += "/", t
				}, a.throttle = function(e, t, i) {
					t = t || window;
					let n = !1;
					t.addEventListener(e, (function() {
						n || (n = !0, window.requestAnimationFrame((function() {
							i(), n = !1
						})))
					}))
				}, a.formatAsLocalisedCurrency = function(e, t, i) {
					let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
						s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "yes";
					const r = {
							minimumFractionDigits: n,
							maximumFractionDigits: n
						},
						o = {
							decimals: n
						};
					"yes" === s && (r.currency = t, r.style = "currency", o.prefix = i + " "), parseInt(e, 10);
					let a = parseFloat(e).toLocaleString("nu", r);
					return a
				}, a.breakpoints = function(e, t) {
					const i = [];
					let n = !1;

					function s(e) {
						let t = "";
						switch (e) {
							case "ExtraLarge":
								t = "all and (min-width: 1025px)";
								break;
							case "Large":
								t = "all and (min-width: 769px) and (max-width: 1024px)";
								break;
							case "Medium":
								t = "all and (min-width: 481px) and (max-width: 768px)";
								break;
							case "Small":
								t = "all and (max-width: 480px)";
								break;
							default:
								t = "none"
						}
						return window.matchMedia(t).matches
					}
					return "[object Array]" === Object.prototype.toString.call(e) ? e.forEach((function(e) {
						i.push(s(e))
					})) : i.push(s(e)), i.some(function(e) {
						if (e) return t && t.apply(this), n = !0, !0
					}.bind(this)), n
				}, a.scrollListener = function(e, t) {
					let i, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 400,
						s = !1;
					(i = function() {
						e.getBoundingClientRect().top + (document.body.getBoundingClientRect().top - n) > 0 || t && (t(), s = !0, document.removeEventListener("scroll", i))
					})(), i(), s || document.addEventListener("scroll", i)
				}, a.lazyLoadScript = function(e, t, i) {
					let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 400;
					a.scrollListener(t, (() => {
						let t = e.length;
						if (0 === e.length) return;
						let n = 0;
						for (let s = 0; s < t; s++) Loot.MicroserviceInjector.injectScriptToBody(e[s]).then((function() {
							n++, n === t && i && i()
						}))
					}), n)
				}, a.addFunctionToPipelineTracker = function(e) {
					void 0 !== window.DataTracker ? e(window.DataTracker) : document.addEventListener("DataTrackerReady", (function() {
						e(window.DataTracker)
					}))
				}, a.getSnowplowProperty = function(e, t) {
					t && "function" == typeof t && (snowplow ? snowplow((function() {
						const i = this[Object.keys(this)[0]];
						if (!i || !i[e]) return t();
						const n = i[e].call(this);
						return t(n)
					})) : t())
				}, a.getUserId = function(e) {
					a.getSnowplowProperty("getDomainUserId", e)
				}, a.getCurrentContentHash = function() {
					var e = new URL(window.location).hash.replace("#", "").split(":");
					return 2 === e.length && "content" === e[0] ? e[1] : ""
				}, a.debounce = function(e, t) {
					let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this,
						n = null,
						s = null;
					const r = () => e.apply(i, s);
					return function() {
						s = arguments, clearTimeout(n), n = setTimeout(r, t)
					}
				}, Element.prototype.formatAsNumber = function() {
					const e = this.dataset.decimals || 0,
						t = parseFloat(this.innerHTML);
					return isNaN(t) || (this.innerHTML = t.toLocaleString("nu", {
						style: "decimal",
						minimumFractionDigits: e,
						maximumFractionDigits: e
					})), this
				}, Element.prototype.formatAsDateTime = function() {
					const e = this.getAttribute("datetime").trim().toString();
					if ("" === e) return this;
					const t = this.dataset.format;
					if (!t) return this;
					const i = t.trim().toString();
					if (!i || "" === i) return this;
					const n = o()(e).format(i);
					if ("Invalid date" === n) return this;
					this.innerText = n;
					const s = this.getAttribute("data-format-title");
					return s && this.setAttribute("title", o()(e).format(s)), this
				}, Function.prototype.clone = function() {
					const e = this,
						t = function() {
							return e.apply(this, arguments)
						};
					for (const e in this) this.hasOwnProperty(e) && (t[e] = this[e]);
					return t
				}, document.addEventListener("DOMContentLoaded", (function() {
					! function() {
						const e = document.querySelectorAll("[data-OverText]");
						e.length > 0 && Array.from(e).forEach((function(e) {
							const t = e.dataset.overtext;
							new OverText(e, {
								textOverride: t
							})
						}))
					}(), document.addEventListener("redirect", (function(e) {
						window.location !== e && (window.location = e)
					})), a.GA.parseTrackers(null)
				})), window.Shared = a;
				var c = a
			},
			7902: function(e, t, i) {
				"use strict";
				var n = i(3928);
				const s = "sp_affiliate",
					r = window.Loot.DataStorage;
				Date.now();
				const o = async e => {
					let t = e.currentTarget,
						i = JSON.parse(t.getAttribute("data-extra"));
					const o = r.retrieve(s);
					"" !== o ? i.utm_source = o.utm_source : delete i.utm_source, t.setAttribute("data-extra", JSON.stringify(i)), n.default.trackExternalLinks([t])
				};
				document.addEventListener("DOMContentLoaded", (async function() {
					"" !== r.retrieve(s) && a()
				}));
				const a = () => {
					const e = document.getElementsByClassName("HomePage TrackingExternalLink");
					for (let t = 0; t < e.length; t++) e[t].addEventListener("pointerdown", o)
				}
			},
			3928: function(e, t, i) {
				"use strict";
				i.d(t, {
					default: function() {
						return l
					}
				});
				var n = i(1929),
					s = i(2270),
					r = i(9762),
					o = i(7360);
				class a {
					get(e) {
						return e.method = "get", e.data = e.extra || {}, e.data.include_order = !!e.include_order, this._getToken(e).then((t => {
							e.data.token = t, e.params && (e.data.q = o.Z.alias(e.params)), e.data.path = e.path;
							let i = ["X-StudyPortals-Brand", "Accept-Language"],
								n = [];
							if (e.headers)
								for (let t = 0; t < e.headers.length; t++) {
									const s = e.headers[t]; - 1 === i.indexOf(s.name) ? "X-StudyPortals-Tally" === s.name && (e.data.tally = s.value) : n.push(s.value)
								}
							return n.length > 0 && (e.data.hh = n.join("-")), this._requestSL(e)
						}))
					}
					getAll(e) {
						let t, i = 0;
						const n = e.onSuccess.clone();
						e.onSuccess = (s, r) => {
							if (t) {
								const e = t.substring(0, t.length - 1),
									i = s.substring(1, s.length);
								t = e + ", " + i
							} else t = s;
							i += parseInt(r.length, 10), r.total > i && (e.extra.start = i, delete e.retry, this.get(e)), n(t, r)
						}, e.extra = e.extra || {}, e.extra.length = 0, e.fixed = !0, this.get(e)
					}
					post(e) {
						return e.method = "post", e.data = {}, this._getToken(e).then((t => (e.data.token = t, e.data.params = e.params, e.data.path = e.path, e))).then(this._requestSL)
					}
					put(e) {
						return e.method = "put", e.data = {}, this._getToken(e).then((t => (e.data.token = t, e.data.params = e.params, e.params.name && (e.data.name = e.params.name), e.data.path = e.path, e))).then(this._requestSL)
					}
					remove(e) {
						return e.method = "delete", e.data = {}, this._getToken(e).then((t => (e.data.token = t, e.data.params = e.params, e.data.path = e.path, e))).then(this._requestSL)
					}
					cancel() {}
					_getToken(e) {
						if (e.token) return Promise.resolve(e.token);
						const t = e.method + ":" + e.path,
							i = Loot.DataStorage.retrieve(t);
						return i ? Promise.resolve(i) : "object" == typeof e.sl_token ? a._requestCustomToken(e.sl_token).then((e => (Loot.DataStorage.store(t, e), e))) : !0 === e.sentinel ? a._requestTokenFromSentinel(e.path).then((e => (Loot.DataStorage.store(t, e), e))) : a._requestReflectorToken(e.path).then((e => (Loot.DataStorage.store(t, e), e)))
					}
					static _deleteToken(e) {
						return Loot.DataStorage.remove(e.method + ":" + e.path)
					}
					static _requestReflectorToken(e) {
						let t = authService.getServiceLayerUrl(),
							i = `${t}auth/reflector/?url=${t}${e}`;
						return r.I.addRequest(data.url, i).then((e => e.text()))
					}
					static _requestCustomToken(e) {
						let t = {
							method: "get",
							url: authService.getServiceLayerUrl() + e.path
						};
						return e.cookies && (t.credentials = "include"), r.I.addRequest(t.url, t).then((e => e.text()))
					}
					static _requestTokenFromSentinel(e) {
						let t = {
							method: "get",
							url: s.default.getBaseUrl() + "Sentinel.php?path=" + e
						};
						return r.I.addRequest(t.url, t).then((e => e.text()))
					}
					static parseHeaders(e) {
						let t, i = {};
						if (e.has("X-StudyPortals-Limit")) {
							let t = e.get("X-StudyPortals-Limit").split(",");
							i.start = t[0], i.length = t[1], i.max = t[2]
						}
						e.has("X-StudyPortals-Total") && (i.total = e.get("X-StudyPortals-Total"));
						try {
							t = e.entries()
						} catch (e) {
							t = []
						}
						for (let e = 0; e < t.length; e++) {
							let n = t[e],
								s = n[0].toLowerCase(),
								r = n[1].toLowerCase();
							if (-1 !== s.indexOf("x-studyportals-tally") && -1 === s.indexOf("vary") && -1 === s.indexOf("access-control-allow-headers")) {
								i.tallies = i.tallies || {};
								let e = s.split("-")[3];
								i.tallies[e] = i.tallies[e] || {};
								let t = JSON.parse(r);
								for (let n in t) t.hasOwnProperty(n) && (i.tallies[e][n] = t[n])
							}
						}
						return i
					}
					_requestSL(e) {
						isNaN(e.retry) && (e.retry = 0);
						let t = {
								method: e.method
							},
							i = new Headers;
						i.append("Accept-Language", "en-GB"), i.append("X-StudyPortals-Brand", "default"), e.headers && e.headers.forEach((e => {
							i.append(e.name, e.value), "cache-control" === e.name && "no-cache" === e.value && (t.cache = "no-cache")
						})), t.headers = i;
						let n = Meta.reflector_url;
						switch (e.method.toLowerCase()) {
							case "get":
								const i = encodeURIComponent;
								n += "?" + Object.keys(e.data).map((t => i(t) + "=" + i(e.data[t]))).join("&");
								break;
							case "post":
							case "put":
							case "delete":
								t.headers.append("content-type", "application/x-www-form-urlencoded; charset=UTF-8"), t.body = a.parseBody(e.data, "")
						}
						let s = {};
						return r.I.addRequest(n, t).then((e => {
							if (e.status >= 300) throw e;
							return s = a.parseHeaders(e.headers), e
						})).then((e => e.text())).then((t => ("function" == typeof e.onSuccess && e.onSuccess(t, s), {
							body: t,
							meta: s
						}))).catch((t => {
							if (401 === t.status && e.retry < 1) return a._deleteToken(e), this._getToken(e).then((t => (e.data.token = t, e.retry++, this._requestSL(e))));
							if (503 === t.status && e.retry < 3) return e.retry++, new Promise(((t, i) => {
								setTimeout((() => {
									this._requestSL(e).then(t).catch(i)
								}), 1e3 * e.retry)
							}));
							throw "function" == typeof e.onFailure && e.onFailure(t.status, t), t
						}))
					}
					static parseBody(e) {
						let t = [];
						const i = (e, n) => {
							for (let s in e) {
								if (!e.hasOwnProperty(s)) continue;
								const r = "" === n ? encodeURIComponent(s) : `[${encodeURIComponent(s)}]`,
									o = e[s];
								"object" != typeof o ? t.push(`${n}${r}=${encodeURIComponent(o)}`) : i(o, `${n}${r}`)
							}
						};
						return i(e, ""), t.join("&")
					}
				}
				window.ServiceLayerClient = a;
				var c = {
						location: null,
						actions: ["impr", "view", "clic", "subm"],
						reload: !1,
						factsHistory: [],
						previousPage: "",
						collect: function() {
							document.querySelector(".TrackingSearchValue") && this.saveSearchData();
							var e = [];
							Array.from(document.getElementsByClassName("TrackingEvent")).forEach((t => {
								if (!this.reload || t.classList.contains("TrackingRetrigger")) {
									var i = this.gather(t);
									i && -1 === e.indexOf(i) && e.push(i)
								}
							})), e.length > 0 && this.send(e), window.dispatchEvent(new CustomEvent("trackingready"))
						},
						trackExternalLinks: function(e) {
							e || (e = document.querySelectorAll("a.TrackingExternalLink"));
							const t = c.getTrackData();
							let i = "";
							null !== t && (i = t.tap_groups);
							const n = this.getIds();
							var s;
							ga((function(e) {
								s = e.get("linkerParam")
							})), Array.from(e).forEach((e => {
								this.setUpLink(e, i, n, s)
							}))
						},
						setUpLink: function(e, t, i, n) {
							if ("A" !== e.tagName || !e.classList.contains("TrackingExternalLink")) return;
							var s = this.renderData([this.gather(e)]);
							s = JSON.stringify(s), void 0 !== Loot.cryptoJSEncBase64 && (s = Loot.cryptoJSEncBase64.stringify(Loot.cryptoJSEncUtf8.parse(s)));
							var r = e.getAttribute("href"); - 1 !== r.indexOf("%23%23timestamp%23%23") && (r = r.replace("%23%23timestamp%23%23", Math.round((new Date).getTime() / 1e3)));
							const o = new URL(r),
								a = Object.assign({
									facts: s,
									taps: t
								}, i);
							if (void 0 !== n && this.needsLinkerParam() && (o.href.indexOf("%3F") > -1 ? o.href += `%26${n}` : o.href += `%3F${n}`, -1 !== r.indexOf("adref%3ASEO"))) {
								let t = "",
									i = "";
								const n = window.Loot.DataStorage.retrieve("utm_medium");
								if (this.isValidCampaign(n) && (t = "adref:" + n, i = "adref%3A" + n), "" !== i && "" !== t) {
									o.href = o.href.toString().replace("adref%3ASEO", i);
									let n = e.getAttribute("data-description");
									if (!n) return;
									n = n.toString().replace("adref:SEO", t), e.setAttribute("data-description", n.toString())
								}
							}
							for (let e in a) o.searchParams.set(e, a[e]);
							e.setAttribute("href", o.toString())
						},
						isValidCampaign(e) {
							return !!e && ("facebook" === e || "instagram" === e || "emailing" === e || "sea" === e)
						},
						needsLinkerParam() {
							const e = document.getElementById("js-campaignInformationExposer"),
								t = document.getElementById("OrganisationInformation"),
								i = document.getElementById("OrganisationCoverImage"),
								n = ["421", "21013", "21012"];
							if (null != e || t) {
								const i = e.getAttribute("data-cn"),
									s = e.getAttribute("data-cic"),
									r = t.getAttribute("data-organisation_id");
								return i.toLowerCase().indexOf("cpl") > -1 || "0" === s || n.includes(r)
							}
							if (i) {
								const e = i.getAttribute("data-organisation_id");
								return n.includes(e)
							}
							return !1
						},
						getLocation: function() {
							if (!this.location) {
								const e = document.querySelector(".TrackingLocation");
								this.location = this.gatherLocation(e)
							}
							return this.location
						},
						gatherLocation: function(e) {
							var t = {
								t: "other",
								i: null,
								d: null,
								l: null
							};
							if (e) {
								var i = e.getAttribute("data-type"),
									n = e.getAttribute("data-id"),
									s = e.getAttribute("data-description"),
									r = e.getAttribute("data-label");
								if (!i || 0 == i.length) return t;
								t = {
									t: i,
									i: n,
									d: s,
									l: r
								}
							}
							return t
						},
						gather: function(e, t) {
							if (t = t || "TrackingEvent", e) {
								var i = e.getAttribute("data-action"),
									n = e.getAttribute("data-type"),
									s = e.getAttribute("data-id"),
									r = e.getAttribute("data-description"),
									o = e.getAttribute("data-label");
								if (-1 === this.actions.indexOf(i)) return null;
								if (!n || !s) return null;
								var a = {
									a: i,
									t: n,
									i: s,
									d: r,
									l: o
								};
								try {
									var c = e.getAttribute("data-extra");
									(c = c ? JSON.parse(c) : null) && Object.keys(c).length > 0 && (a.ex = c)
								} catch (e) {}
								var l = e.closest(".TrackingLinkedList");
								const p = this.getLocation();
								if (e.classList.contains("TrackingNoLocation")) a.lo = null;
								else if (l && l.getAttribute("data-list-type") == n) {
									var d = 0;
									l.getAttribute("data-start") && (d = parseInt(l.getAttribute("data-start")), (isNaN(d) || d < 0) && (d = 0)), a.lo = this.gatherLocation(l), Array.from(l.querySelectorAll(`.${t}[data-type=${n}]`)).forEach((function(e, t) {
										e.getAttribute("data-id") == s && (a.lo.i = d + t + 1)
									}))
								} else if (e.hasAttribute("data-location")) {
									var u = e.getAttribute("data-location"),
										h = document.getElementById(u);
									if (!h || !h.classList.contains("TrackingCustomLocation")) return a;
									a.lo = this.gatherLocation(h)
								} else p && a.i == p.i && a.t == p.t && "view" == a.a && (a.lo = null);
								return a
							}
							return null
						},
						saveSearchData: function() {
							var e = document.querySelector(".TrackingSearchValue");
							if (e && e.getAttribute("data-search").length > 0) {
								var t = c.getTrackData();
								if (null === t) return;
								t.search = e.dataset.search, c.setCookie(t)
							}
						},
						send: function(e, t) {
							var i = this.renderData(e);
							if (null === (i = JSON.stringify(i))) return null;
							var n = c.getTrackData();
							if (null === n) return null;
							var s = n.tap_groups,
								r = "Netscape" === navigator.appName && window.navigator.msPointerEnabled;
							if (this.factsHistory.push(i), r || !("withCredentials" in new XMLHttpRequest) && "undefined" == typeof XDomainRequest) {
								void 0 !== Loot.cryptoJSEncBase64 && (i = Loot.cryptoJSEncBase64.stringify(Loot.cryptoJSEncUtf8.parse(i)));
								const e = {
										facts: i,
										taps: s
									},
									t = Object.keys(e).map((function(t) {
										return `${t}=${e[t]}`
									})).join("&");
								Async.image(`${Meta.sl_external_url}track/pixel/?${t}`)
							} else {
								var o = new Headers;
								o.append("content-type", "application/x-www-form-urlencoded; charset=UTF-8");
								var l = Meta.sl_external_url + "track/facts/";
								fetch(l, {
									method: "post",
									mode: "cors",
									credentials: "include",
									headers: o,
									body: a.parseBody({
										facts: i,
										taps: s
									})
								}).then((() => {
									t && "function" == typeof t && t()
								})).catch((e => {}))
							}
							window.dispatchEvent(new CustomEvent("factsSent", {
								detail: e
							}))
						},
						sendSet: function(e, t) {
							for (var i = [], n = 0; n < e.length; n++) {
								var s = e[n],
									r = this.gather(s, t);
								null !== r && i.push(r)
							}
							this.send(i)
						},
						renderData: function(e) {
							var t = {};
							t.l = this.getLocation();
							var i = c.getTrackData();
							if (null == i) return null;
							t.s = i.search;
							let n = {};
							return n.i = i.ip, n.s = i.uuid, n.l = i.lang, n.c = this.getNationalityCookie(), t.u = n, t.f = e, t
						},
						getTrackData: function() {
							return JSON.parse(n.default.getItem("StudyPortals-trck"))
						},
						getNationalityCookie: function() {
							const e = n.default.getItem("user_nationality_id");
							return e ? this.getNationalityIso(e) : null
						},
						getNationalityIso: function(e) {
							return "undefined" == typeof Loot || void 0 === Loot.Countries[e] ? null : Loot.Countries[e].iso_code.toLowerCase()
						},
						checkReloadState: function() {
							var e = window.location.toString(),
								t = c.getTrackData();
							null !== t && (t.previousPage && t.previousPage == e ? this.reload = !0 : this.reload = !1)
						},
						getCountryId: function() {
							const e = c.getTrackData();
							return e && e.origin ? isNaN(e.origin) || null === e.origin ? 0 : parseInt(e.origin) : 0
						},
						getIds: function() {
							const e = "snowplow";
							if (!window[e]) return {};
							let t = [];
							if (window[e]((function() {
									t = Object.values(this)
								})), 0 === t.length) return {};
							const i = t[0],
								n = i.getDomainUserInfo();
							if (n.length < 7) return {};
							const s = {
									duid: n[1],
									sid: n[6]
								},
								r = i.getUserId();
							return r && (s.uid = r), s
						},
						resetPreviousPage() {
							const e = "studyportals",
								t = window.name,
								i = this.getTrackData();
							if (!i) return;
							const n = this.getHostName(document.referrer),
								s = this.getHostName(i.previousPage),
								r = n && -1 !== s.indexOf(n);
							window.name = e, r || t === e || (i.previousPage = "", c.setCookie(i)), r && t !== e && (i.previousPage = document.referrer, c.setCookie(i)), this.previousPage = i.previousPage
						},
						getHostName(e) {
							if (!e) return "";
							const t = document.createElement("a");
							return t.href = e, t.hostname
						},
						setCookie(e) {
							n.default.setItem("StudyPortals-trck", JSON.stringify(e), 3600, "/")
						}
					},
					l = c
			},
			1929: function(e, t, i) {
				"use strict";
				var n = {
					getItem: function(e) {
						return e && decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null
					},
					setItem: function(e, t, i, n, s, r) {
						if (!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) return !1;
						var o = "";
						if (i) switch (i.constructor) {
							case Number:
								o = i === 1 / 0 ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; expires=" + new Date(1e3 * i + Date.now()).toUTCString();
								break;
							case String:
								o = "; expires=" + i;
								break;
							case Date:
								o = "; expires=" + i.toUTCString()
						}
						return document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + o + (s ? "; domain=" + s : "") + (n ? "; path=" + n : "") + (r ? "; secure" : ""), !0
					},
					removeItem: function(e, t, i) {
						return !!this.hasItem(e) && (document.cookie = encodeURIComponent(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (i ? "; domain=" + i : "") + (t ? "; path=" + t : ""), !0)
					},
					hasItem: function(e) {
						return !(!e || /^(?:expires|max\-age|path|domain|secure)$/i.test(e)) && new RegExp("(?:^|;\\s*)" + encodeURIComponent(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
					},
					keys: function() {
						for (var e = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/), t = e.length, i = 0; i < t; i++) e[i] = decodeURIComponent(e[i]);
						return e
					}
				};
				void 0 !== (e = i.hmd(e)).exports && (e.exports = n), t.default = n
			},
			6002: function() {
				Element.prototype.getSpecificSiblings = function(e) {
					const t = this.parentNode.querySelectorAll(e),
						i = this.parentNode.childNodes;
					let n = [];
					for (let e = 0; e < t.length; e++)
						for (let s = 0; s < i.length; s++)
							if (t[e].isEqualNode(i[s])) {
								n.push(t[e]);
								break
							} return n
				}
			},
			4178: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			5662: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					s = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), s(i(4178), t)
			},
			1634: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.Actor = void 0, (i = t.Actor || (t.Actor = {})).USER = "user", i.AUTOMATION = "automation"
			},
			1570: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.EventType = void 0, (i = t.EventType || (t.EventType = {})).AnonymousStudentServiceReady = "anonymous-student-service-ready", i.AnonymousStudentProfileUpdated = "anonymous-student-profile-updated", i.AnonymousStudentProfileSynced = "anonymous-student-profile-synced", i.AnonymousStudentStateChanged = "anonymous-student-state-changed"
			},
			2617: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					s = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), s(i(1570), t), s(i(3898), t), s(i(6411), t), s(i(1634), t)
			},
			3898: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.InterestType = void 0, (i = t.InterestType || (t.InterestType = {})).COUNTRY = "interests_countries", i.DISCIPLINE = "interests_disciplines"
			},
			6411: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.StudentRepositoryStateType = void 0, (i = t.StudentRepositoryStateType || (t.StudentRepositoryStateType = {}))[i.PENDING = 0] = "PENDING", i[i.ONLINE = 1] = "ONLINE", i[i.OFFLINE = 2] = "OFFLINE"
			},
			8308: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AnonymousStudentProfileSynced = void 0;
				const n = i(1570);
				class s {
					constructor(e, t) {
						this.timestamp = e, this.state = t, this.eventType = s.EventType
					}
				}
				t.AnonymousStudentProfileSynced = s, s.EventType = n.EventType.AnonymousStudentProfileSynced
			},
			4236: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AnonymousStudentProfileUpdated = void 0;
				const n = i(2617);
				class s {
					constructor(e, t, i) {
						this.timestamp = e, this.state = t, this.changes = i, this.eventType = s.EventType
					}
				}
				t.AnonymousStudentProfileUpdated = s, s.EventType = n.EventType.AnonymousStudentProfileUpdated
			},
			1612: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AnonymousStudentServiceReady = void 0;
				const n = i(2617);
				class s {
					constructor(e) {
						this.eventType = s.EventType, this.timestamp = new Date, this.anonymousStudentService = e
					}
				}
				t.AnonymousStudentServiceReady = s, s.EventType = n.EventType.AnonymousStudentServiceReady
			},
			1886: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AnonymousStudentStateChanged = void 0;
				const n = i(2617);
				class s {
					constructor(e, t, i) {
						this.timestamp = e, this.oldState = t, this.newState = i, this.eventType = s.EventType
					}
				}
				t.AnonymousStudentStateChanged = s, s.EventType = n.EventType.AnonymousStudentStateChanged
			},
			1688: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					s = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), s(i(8308), t), s(i(4236), t), s(i(1612), t), s(i(1886), t)
			},
			7312: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					s = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), s(i(5662), t), s(i(2617), t), s(i(1688), t)
			},
			5175: function(e) {
				globalThis,
				e.exports = (() => {
					"use strict";
					var e = {
							173: (e, t) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.TrackerImporter = void 0, t.TrackerImporter = class {
									constructor() {
										this.trackerObject = null, this.trackerIsLoaded = !1
									}
									get tracker() {
										return this.trackerObject
									}
									get trackerLoaded() {
										return this.trackerIsLoaded
									}
									loadTracker(e) {
										if (void 0 !== window.snowplow) return this.trackerObject = window.snowplow, this.trackerIsLoaded = !0, void e(window.snowplow);
										document.addEventListener("snowplow_available", (() => {
											this.trackerObject = window.snowplow, this.trackerIsLoaded = !0, e(window.snowplow)
										}))
									}
								}
							},
							819: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.Tracker = void 0;
								const n = i(173),
									s = i(898),
									r = i(458),
									o = i(658),
									a = i(779),
									c = i(392),
									l = i(306),
									d = i(192);
								t.Tracker = class {
									constructor(e) {
										this.product = e, this.tracker = null, this.trackerImporter = null, this.structuredEventValidator = this.initStructuredEventValidators(), this.initTrackerSupport()
									}
									trackStructuredEvent(e) {
										if (null === this.tracker) throw new Error(d.ErrorMessage.TRACKER_UNAVAILABLE);
										e.category = this.product, this.structuredEventValidator.validate(e), this.tracker("trackStructEvent", e)
									}
									trackStudyCardImpression(e) {
										if (null === this.tracker) throw new Error(d.ErrorMessage.TRACKER_UNAVAILABLE);
										this.tracker("addEnhancedEcommerceImpressionContext", e.getTrackingContext()), this.tracker("trackEnhancedEcommerceAction", {
											action: "view"
										})
									}
									trackStudyCardClick(e) {
										if (null === this.tracker) throw new Error(d.ErrorMessage.TRACKER_UNAVAILABLE);
										this.tracker("addEnhancedEcommerceProductContext", e.getTrackingContext()), this.tracker("trackEnhancedEcommerceAction", {
											action: "click"
										})
									}
									trackProductView(e) {
										if (null === this.tracker) throw new Error(d.ErrorMessage.TRACKER_UNAVAILABLE);
										this.tracker("addEnhancedEcommerceProductContext", e.getTrackingContext()), this.tracker("trackEnhancedEcommerceAction", {
											action: "detail"
										})
									}
									initStructuredEventValidators() {
										const e = new r.EventValidator;
										return e.addValidator(new s.CategoryValidator), e.addValidator(new o.ActionValidator), e.addValidator(new a.LabelValidator), e.addValidator(new c.PropertyValidator), e.addValidator(new l.ValueValidator), e
									}
									initTrackerSupport() {
										this.trackerImporter = new n.TrackerImporter, this.trackerImporter.loadTracker((() => {
											this.tracker = this.trackerImporter.tracker, window.DatalakeEventTrackerLoaded = !0, document.dispatchEvent(new Event("DatalakeEventTrackerLoaded"))
										}))
									}
								}
							},
							957: (e, t) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ValidationError = void 0;
								class i extends Error {
									constructor(e) {
										super(e), this.name = "ValidationError"
									}
								}
								t.ValidationError = i
							},
							658: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ActionValidator = void 0;
								const n = i(721),
									s = i(192),
									r = i(957),
									o = i(662);
								t.ActionValidator = class {
									constructor() {
										this.snakeCaseValidator = new o.SnakeCaseValidator
									}
									validate(e) {
										const t = e.action;
										if (void 0 !== t) {
											if (!Object.values(n.Action).includes(t)) throw new r.ValidationError(s.ErrorMessage.INVALID_ACTION);
											this.snakeCaseValidator.validate(t)
										}
									}
								}
							},
							898: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.CategoryValidator = void 0;
								const n = i(550),
									s = i(192),
									r = i(957),
									o = i(690);
								t.CategoryValidator = class {
									constructor() {
										this.pascalCaseValidator = new o.PascalCaseValidator
									}
									validate(e) {
										const t = e.category;
										if (void 0 === t) throw new r.ValidationError(s.ErrorMessage.INVALID_PRODUCT);
										if (!Object.values(n.Product).includes(t)) throw new r.ValidationError(s.ErrorMessage.INVALID_PRODUCT);
										this.pascalCaseValidator.validate(t)
									}
								}
							},
							458: (e, t) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.EventValidator = void 0, t.EventValidator = class {
									constructor() {
										this.validators = []
									}
									addValidator(e) {
										this.validators.push(e)
									}
									validate(e) {
										for (const t of this.validators) t.validate(e)
									}
								}
							},
							779: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.LabelValidator = void 0;
								const n = i(662);
								t.LabelValidator = class {
									constructor() {
										this.snakeCaseValidator = new n.SnakeCaseValidator
									}
									validate(e) {
										const t = e.label;
										void 0 !== t && this.snakeCaseValidator.validate(t)
									}
								}
							},
							690: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.PascalCaseValidator = void 0;
								const n = i(192),
									s = i(957);
								t.PascalCaseValidator = class {
									validate(e) {
										if ("string" != typeof e || -1 !== e.indexOf("-") || -1 !== e.indexOf("_") || e.charAt(0).toUpperCase() !== e.charAt(0)) throw new s.ValidationError(n.ErrorMessage.INVALID_PASCAL_CASE)
									}
								}
							},
							392: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.PropertyValidator = void 0;
								const n = i(662);
								t.PropertyValidator = class {
									constructor() {
										this.snakeCaseValidator = new n.SnakeCaseValidator
									}
									validate(e) {
										void 0 !== e.property && this.snakeCaseValidator.validate(e.property)
									}
								}
							},
							662: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.SnakeCaseValidator = void 0;
								const n = i(192),
									s = i(957);
								t.SnakeCaseValidator = class {
									validate(e) {
										if ("string" != typeof e || e !== e.toLowerCase() || -1 !== e.indexOf("-")) throw new s.ValidationError(n.ErrorMessage.INVALID_SNAKE_CASE)
									}
								}
							},
							306: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ValueValidator = void 0;
								const n = i(192),
									s = i(957);
								t.ValueValidator = class {
									validate(e) {
										if (void 0 !== e.value && ("string" == typeof e.value || isNaN(e.value))) throw new s.ValidationError(n.ErrorMessage.INVALID_NUMBER)
									}
								}
							},
							721: (e, t) => {
								var i;
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.Action = void 0, (i = t.Action || (t.Action = {})).CLICK = "click", i.IMPRESSION = "impression", i.POPUP_OPEN = "popup_open", i.POPUP_CLOSE = "popup_close", i.TIME_SPENT = "time_spent", i.NON_INTERACTIVE = "non_interactive", i.RENDERED = "rendered"
							},
							192: (e, t) => {
								var i;
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ErrorMessage = void 0, (i = t.ErrorMessage || (t.ErrorMessage = {})).INVALID_NUMBER = "invalid_number", i.INVALID_SNAKE_CASE = "invalid_snake_case", i.INVALID_PASCAL_CASE = "invalid_pascal_case", i.INVALID_ACTION = "invalid_action", i.INVALID_PRODUCT = "invalid_product", i.TRACKER_UNAVAILABLE = "tracker_unavailable"
							},
							976: (e, t) => {
								var i;
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ListName = void 0, (i = t.ListName || (t.ListName = {})).SEARCH_PAGE = "search_page", i.STUDY_CARD_STUDY_OPTIONS = "study_card_study_options", i.RECOMMENDER = "recommender", i.UNIVERSITY_HIGHLIGHTED = "university_highlighted", i.UNIVERSITY_PROGRAMMES = "university_programmes", i.STUDY_CARD_COUNTRY_DEGREE = "study_card_country_degree", i.STUDY_CARD_DISCIPLINE = "study_card_discipline", i.WISHLIST = "wishlist"
							},
							135: (e, t) => {
								var i;
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ListPageType = void 0, (i = t.ListPageType || (t.ListPageType = {})).SEARCH = "search", i.STUDY = "study", i.ARTICLE = "article", i.STUDY_OPTIONS = "study_options", i.UNIVERSITY = "university", i.ACCOUNT = "account", i.COUNTRY = "country", i.COUNTRY_DEGREE = "country_degree", i.DISCIPLINE = "discipline", i.CITY = "city", i.UNIBUDDY = "unibuddy", i.HOME = "home"
							},
							257: (e, t) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ProductType = void 0, (t.ProductType || (t.ProductType = {})).STUDY = "study"
							},
							550: (e, t) => {
								var i;
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.Product = void 0, (i = t.Product || (t.Product = {})).BESTFIT_OVERVIEW = "BestfitOverview", i.PROFILE = "Profile", i.ACCOUNT_PAGE = "AccountPage", i.PROFILE_QUESTIONNAIRES = "ProfileQuestionnaires", i.EXPERIMENT = "Experiment", i.STUDY_PAGE = "StudyPage", i.HOME_PAGE = "HomePage", i.ORGANISATION_PAGE = "OrganisationPage", i.SEARCH_PAGE = "SearchPage", i.DISCIPLINE_PAGE = "DisciplinePage", i.COUNTRY_TEST = "CountryTest", i.PERSONALITY_TEST = "PersonalityTest", i.REVIEWS = "Reviews", i.DECISION_MAKING_SERVICE = "DecisionMakingService", i.GOOGLE_AD_MANAGER = "GoogleAdManager", i.ERT = "ERT", i.SMT = "SMT", i.UNIBUDDY = "Unibuddy", i.COUNTRY_DEGREE = "CountryDegreePage", i.STUDY_OPTIONS = "StudyOptionsPage", i.ARTICLE_PAGE = "ArticlePage", i.RECOMMENDATONS = "Recommendations"
							},
							966: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ClickEcommerceTrackingData = void 0;
								const n = i(519);
								class s extends n.EcommerceTrackingData {
									constructor(e, t, i, n, s, r, o, a, c, l) {
										super(e, t, i, n, s, r, o, a, c), this.productId = e, this.listPageType = t, this.listName = i, this.organisationId = n, this.disciplines = s, this.premium = r, this.listPosition = o, this.unitPrice = a, this.currency = c, this.productType = l
									}
									getTrackingContext() {
										var e, t;
										return {
											id: this.getProductId(),
											name: this.productType,
											list: this.listName,
											brand: this.getOrganisationId(),
											category: this.getDisciplines(),
											variant: null !== (t = null === (e = this.premium) || void 0 === e ? void 0 : e.toString()) && void 0 !== t ? t : void 0,
											price: this.getUnitPrice(),
											quantity: "1",
											coupon: this.listPageType,
											position: this.listPosition,
											currency: this.getCurrency()
										}
									}
								}
								t.ClickEcommerceTrackingData = s
							},
							519: (e, t) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.EcommerceTrackingData = void 0, t.EcommerceTrackingData = class {
									constructor(e, t, i, n, s, r, o, a, c) {
										this.productId = e, this.listPageType = t, this.listName = i, this.organisationId = n, this.disciplines = s, this.premium = r, this.listPosition = o, this.unitPrice = a, this.currency = c
									}
									getProductId() {
										return this.productId.toString()
									}
									getOrganisationId() {
										return this.organisationId.toString()
									}
									getDisciplines() {
										if (this.disciplines) return this.disciplines.map((e => e.toString())).join("/")
									}
									getUnitPrice() {
										if (this.unitPrice) return this.unitPrice.toString()
									}
									getCurrency() {
										if (this.currency && 3 === this.currency.length) return this.currency.toString()
									}
								}
							},
							324: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.StudyCardImpressionData = void 0;
								const n = i(519);
								class s extends n.EcommerceTrackingData {
									getTrackingContext() {
										var e, t;
										return {
											id: this.getProductId(),
											name: this.listPageType,
											list: this.listName,
											brand: this.getOrganisationId(),
											category: this.getDisciplines(),
											variant: null !== (t = null === (e = this.premium) || void 0 === e ? void 0 : e.toString()) && void 0 !== t ? t : void 0,
											position: this.listPosition,
											price: this.getUnitPrice(),
											currency: this.getCurrency()
										}
									}
								}
								t.StudyCardImpressionData = s
							},
							227: (e, t, i) => {
								Object.defineProperty(t, "__esModule", {
									value: !0
								}), t.ViewEcommerceTrackingData = void 0;
								const n = i(519);
								class s extends n.EcommerceTrackingData {
									constructor(e, t, i, n, s, r, o, a, c, l) {
										super(e, t, i, n, s, r, o, a, c), this.productId = e, this.listPageType = t, this.listName = i, this.organisationId = n, this.disciplines = s, this.premium = r, this.listPosition = o, this.unitPrice = a, this.currency = c, this.productType = l
									}
									getTrackingContext() {
										var e, t;
										return {
											id: this.getProductId(),
											name: this.productType,
											list: this.listName,
											brand: this.getOrganisationId(),
											category: this.getDisciplines(),
											variant: null !== (t = null === (e = this.premium) || void 0 === e ? void 0 : e.toString()) && void 0 !== t ? t : void 0,
											price: this.getUnitPrice(),
											quantity: "1",
											coupon: this.listPageType,
											position: this.listPosition,
											currency: this.getCurrency()
										}
									}
								}
								t.ViewEcommerceTrackingData = s
							}
						},
						t = {};

					function i(n) {
						var s = t[n];
						if (void 0 !== s) return s.exports;
						var r = t[n] = {
							exports: {}
						};
						return e[n](r, r.exports, i), r.exports
					}
					var n = {};
					return (() => {
						var e = n;
						Object.defineProperty(e, "__esModule", {
							value: !0
						}), e.ViewEcommerceTrackingData = e.ClickEcommerceTrackingData = e.StudyCardImpressionData = e.EcommerceTrackingData = e.ProductType = e.ListName = e.ListPageType = e.Product = e.Action = e.Tracker = void 0;
						const t = i(819);
						Object.defineProperty(e, "Tracker", {
							enumerable: !0,
							get: function() {
								return t.Tracker
							}
						});
						const s = i(721);
						Object.defineProperty(e, "Action", {
							enumerable: !0,
							get: function() {
								return s.Action
							}
						});
						const r = i(550);
						Object.defineProperty(e, "Product", {
							enumerable: !0,
							get: function() {
								return r.Product
							}
						});
						const o = i(257);
						Object.defineProperty(e, "ProductType", {
							enumerable: !0,
							get: function() {
								return o.ProductType
							}
						});
						const a = i(519);
						Object.defineProperty(e, "EcommerceTrackingData", {
							enumerable: !0,
							get: function() {
								return a.EcommerceTrackingData
							}
						});
						const c = i(324);
						Object.defineProperty(e, "StudyCardImpressionData", {
							enumerable: !0,
							get: function() {
								return c.StudyCardImpressionData
							}
						});
						const l = i(966);
						Object.defineProperty(e, "ClickEcommerceTrackingData", {
							enumerable: !0,
							get: function() {
								return l.ClickEcommerceTrackingData
							}
						});
						const d = i(227);
						Object.defineProperty(e, "ViewEcommerceTrackingData", {
							enumerable: !0,
							get: function() {
								return d.ViewEcommerceTrackingData
							}
						});
						const u = i(135);
						Object.defineProperty(e, "ListPageType", {
							enumerable: !0,
							get: function() {
								return u.ListPageType
							}
						});
						const h = i(976);
						Object.defineProperty(e, "ListName", {
							enumerable: !0,
							get: function() {
								return h.ListName
							}
						})
					})(), n
				})()
			},
			9389: function(e, t, i) {
				"use strict";
				t.TC = t.Vy = void 0;
				const n = i(4e3);
				Object.defineProperty(t, "Vy", {
					enumerable: !0,
					get: function() {
						return n.EventNames
					}
				});
				const s = i(4138);
				Object.defineProperty(t, "TC", {
					enumerable: !0,
					get: function() {
						return s.ImpressionValidator
					}
				})
			},
			4e3: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.EventNames = void 0, (t.EventNames || (t.EventNames = {})).VALIDATED_IMPRESSION = "validated_impression"
			},
			4138: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.ImpressionValidator = void 0;
				const n = i(4e3);
				t.ImpressionValidator = class {
					constructor(e, t) {
						if (this.processedElements = [], !e) return;
						const i = this.convertToHTMLElementList(e.querySelectorAll("." + t));
						0 !== i.length && (this.elements = i, this.processedElements = [], this.processElements(), window.addEventListener("scroll", (() => {
							this.processElements()
						}), {
							passive: !0
						}), window.addEventListener("resize", (() => {
							this.processElements()
						})), e.addEventListener("scroll", (() => {
							this.processElements()
						}), {
							passive: !0
						}))
					}
					processElements() {
						if (!this.elements) throw new Error("ImpressionValidator: Elements not set!");
						const e = [];
						this.elements.forEach((t => {
							this.isVisible(t) ? (t.dispatchEvent(new CustomEvent(n.EventNames.VALIDATED_IMPRESSION)), this.processedElements.push(t)) : e.push(t)
						})), this.elements = e
					}
					updateElements(e, t) {
						if (!e) throw new Error("ImpressionValidator: no parent container provided!");
						const i = this.convertToHTMLElementList(e.querySelectorAll("." + t)),
							n = [];
						i.forEach((e => {
							this.processedElements.find((t => t === e)) || n.push(e)
						})), this.elements = n, this.processElements()
					}
					convertToHTMLElementList(e) {
						const t = [];
						for (const i of e) t.push(i);
						return t
					}
					isVisible(e) {
						if (!e) return !1;
						const t = e.getBoundingClientRect(),
							i = window.innerHeight || document.documentElement.clientHeight,
							n = window.innerWidth || document.documentElement.clientWidth;
						return !this.elementHasNoDimensions(t) && this.isElementInViewVertical(t, i) && this.isElementInViewHorizontal(t, n)
					}
					elementHasNoDimensions(e) {
						return e.width <= 0 || e.height <= 0
					}
					isElementInViewVertical(e, t) {
						return e.top <= t - .33 * e.height && e.top + .66 * e.height >= 0
					}
					isElementInViewHorizontal(e, t) {
						return e.left <= t - .33 * e.width && e.left + .66 * e.width >= 0
					}
				}
			},
			5725: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.EventAggregationEventType = void 0, (t.EventAggregationEventType || (t.EventAggregationEventType = {})).WEBSOCKET_SERVICE_READY = "WebsocketServiceReady"
			},
			423: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			8759: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			6570: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.WebsocketServiceReadyEvent = void 0;
				const n = i(5725);
				class s {
					constructor(e) {
						this.eventAggregationService = e, this.eventType = s.EventType, this.timestamp = new Date
					}
				}
				t.WebsocketServiceReadyEvent = s, s.EventType = n.EventAggregationEventType.WEBSOCKET_SERVICE_READY
			},
			3385: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					s = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), s(i(3400), t), s(i(423), t), s(i(8759), t), s(i(6570), t), s(i(5725), t)
			},
			3400: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			8328: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					s = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), s(i(3385), t), s(i(4285), t), s(i(3519), t)
			},
			3974: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			3112: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SessionServiceEventType = void 0, (i = t.SessionServiceEventType || (t.SessionServiceEventType = {})).SESSION_SERVICE_READY = "SessionServiceReady", i.SESSION_CREATED = "SessionCreated", i.SESSION_DESTROYED = "SessionDestroyed"
			},
			3641: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SessionCreatedEvent = void 0;
				const n = i(3112);
				class s {
					constructor(e) {
						this.eventType = s.EventType, this.timestamp = new Date, this.session = e
					}
				}
				t.SessionCreatedEvent = s, s.EventType = n.SessionServiceEventType.SESSION_CREATED
			},
			3533: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SessionDestroyedEvent = void 0;
				const n = i(3112);
				class s {
					constructor() {
						this.eventType = s.EventType, this.timestamp = new Date
					}
				}
				t.SessionDestroyedEvent = s, s.EventType = n.SessionServiceEventType.SESSION_DESTROYED
			},
			9927: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.SessionServiceReadyEvent = void 0;
				const n = i(3112);
				class s {
					constructor(e) {
						this.eventType = s.EventType, this.timestamp = new Date, this.sessionService = e
					}
				}
				t.SessionServiceReadyEvent = s, s.EventType = n.SessionServiceEventType.SESSION_SERVICE_READY
			},
			4285: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					s = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), s(i(4024), t), s(i(8615), t), s(i(4256), t), s(i(9497), t), s(i(3974), t), s(i(5386), t), s(i(9927), t), s(i(3533), t), s(i(3641), t), s(i(3112), t)
			},
			4024: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			5386: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			4256: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			8615: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			9497: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			2301: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				})
			},
			3519: function(e, t, i) {
				"use strict";
				var n = this && this.__createBinding || (Object.create ? function(e, t, i, n) {
						void 0 === n && (n = i), Object.defineProperty(e, n, {
							enumerable: !0,
							get: function() {
								return t[i]
							}
						})
					} : function(e, t, i, n) {
						void 0 === n && (n = i), e[n] = t[i]
					}),
					s = this && this.__exportStar || function(e, t) {
						for (var i in e) "default" === i || t.hasOwnProperty(i) || n(t, e, i)
					};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), s(i(2301), t)
			},
			4527: function(e, t, i) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AttendanceType = t.StudentField = void 0;
				const n = i(411);
				Object.defineProperty(t, "StudentField", {
					enumerable: !0,
					get: function() {
						return n.StudentField
					}
				});
				const s = i(3322);
				Object.defineProperty(t, "AttendanceType", {
					enumerable: !0,
					get: function() {
						return s.AttendanceType
					}
				})
			},
			3322: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.AttendanceType = void 0, (i = t.AttendanceType || (t.AttendanceType = {})).ONLINE = "online", i.ON_CAMPUS = "oncampus", i.BLENDED = "blended"
			},
			411: function(e, t) {
				"use strict";
				var i;
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.StudentField = void 0, (i = t.StudentField || (t.StudentField = {})).IDENTITY_ID = "identityId", i.EMAIL = "email", i.NAME = "name", i.FIRST_NAME = "first_name", i.LAST_NAME = "last_name", i.GENDER = "gender", i.BIRTH_DATE = "birth_date", i.TELEPHONE = "telephone", i.START_PERIOD_DATE = "start_period_date", i.FUNDING_TYPE = "funding_type", i.STUDY_LEVEL = "study_level", i.PREFERRED_STUDY_LEVEL = "preferred_study_level", i.RESIDENCE_COUNTRY_ID = "residence_country_id", i.NATIONALITY_COUNTRY_ID = "nationality_country_id", i.NATIONALITY_COUNTRY_ISO = "nationality_country_iso", i.STUDY_COUNTRY_ID = "study_country_id", i.REGISTRATION_IP = "registration_ip", i.REGISTRATION_PORTAL_TYPE = "registration_portal_type", i.WORK_EXPERIENCE = "work_experience", i.PROFICIENCY_TYPE = "proficiency_type", i.PROFICIENCY_TEST = "proficiency_test", i.PROFICIENCY_SCORE = "proficiency_score", i.IELTS = "ielts", i.CAE = "cae", i.FCE = "fce", i.TOEFL_IBT = "toefl_ibt", i.TOEFL_PBT = "toefl_pbt", i.PTE = "pte", i.SELF_ASSESSMENT_PROFICIENCY = "self_assessment_proficiency", i.INITIAL_REGISTRATION_PLATFORM = "initial_registration_platform", i.EMAILING_OTHER = "emailing_other", i.EMAILING_FAVOURITES = "emailing_favourites", i.EMAILING_SCHOLARSHIPS = "emailing_scholarships", i.EMAILING_UPDATES = "emailing_updates", i.LAST_LOGIN = "last_login", i.LAST_LOGIN_UTC = "last_login_utc", i.DATE_CREATED = "date_created", i.DATE_CREATED_UTC = "date_created_utc", i.LOGINS = "logins", i.DISCIPLINES = "disciplines", i.INTERESTS_COUNTRIES = "interests_countries", i.INTERESTS_DISCIPLINES = "interests_disciplines", i.EMAIL_UNSUBSCRIBE_TOKEN = "emailUnsubscribeToken", i.GDPR_ACCEPTED = "gdpr_accepted", i.ORIGIN_ORGANISATION_ID = "origin_organisation_id", i.GPA = "gpa", i.LIVING_BUDGET = "living_budget", i.TUITION_BUDGET = "tuition_budget", i.SEEN_COMPARISON_TUTORIAL = "seen_comparison_tutorial", i.ACCOMPLISHMENTS = "accomplishments", i.CURRENCY = "currency", i.AFFILIATE = "affiliate", i.AFFILIATE_URL = "affiliate_url", i.ATTENDANCE = "attendance", i.TRAFFIC_SOURCE = "traffic_source", i.TRAFFIC_SOURCE_URL = "traffic_source_url", i.DISMISSED_ONBOARDING_QUESTIONNAIRE = "dismissed_onboarding_questionnaire", i.STARTED_ONBOARDING_QUESTIONNAIRE = "started_onboarding_questionnaire"
			},
			7484: function(e) {
				e.exports = function() {
					"use strict";
					var e = 6e4,
						t = 36e5,
						i = "millisecond",
						n = "second",
						s = "minute",
						r = "hour",
						o = "day",
						a = "week",
						c = "month",
						l = "quarter",
						d = "year",
						u = "date",
						h = "Invalid Date",
						p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
						g = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
						m = {
							name: "en",
							weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
							months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
						},
						f = function(e, t, i) {
							var n = String(e);
							return !n || n.length >= t ? e : "" + Array(t + 1 - n.length).join(i) + e
						},
						v = {
							s: f,
							z: function(e) {
								var t = -e.utcOffset(),
									i = Math.abs(t),
									n = Math.floor(i / 60),
									s = i % 60;
								return (t <= 0 ? "+" : "-") + f(n, 2, "0") + ":" + f(s, 2, "0")
							},
							m: function e(t, i) {
								if (t.date() < i.date()) return -e(i, t);
								var n = 12 * (i.year() - t.year()) + (i.month() - t.month()),
									s = t.clone().add(n, c),
									r = i - s < 0,
									o = t.clone().add(n + (r ? -1 : 1), c);
								return +(-(n + (i - s) / (r ? s - o : o - s)) || 0)
							},
							a: function(e) {
								return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
							},
							p: function(e) {
								return {
									M: c,
									y: d,
									w: a,
									d: o,
									D: u,
									h: r,
									m: s,
									s: n,
									ms: i,
									Q: l
								} [e] || String(e || "").toLowerCase().replace(/s$/, "")
							},
							u: function(e) {
								return void 0 === e
							}
						},
						y = "en",
						S = {};
					S[y] = m;
					var w = function(e) {
							return e instanceof I
						},
						_ = function e(t, i, n) {
							var s;
							if (!t) return y;
							if ("string" == typeof t) {
								var r = t.toLowerCase();
								S[r] && (s = r), i && (S[r] = i, s = r);
								var o = t.split("-");
								if (!s && o.length > 1) return e(o[0])
							} else {
								var a = t.name;
								S[a] = t, s = a
							}
							return !n && s && (y = s), s || !n && y
						},
						E = function(e, t) {
							if (w(e)) return e.clone();
							var i = "object" == typeof t ? t : {};
							return i.date = e, i.args = arguments, new I(i)
						},
						b = v;
					b.l = _, b.i = w, b.w = function(e, t) {
						return E(e, {
							locale: t.$L,
							utc: t.$u,
							x: t.$x,
							$offset: t.$offset
						})
					};
					var I = function() {
							function m(e) {
								this.$L = _(e.locale, null, !0), this.parse(e)
							}
							var f = m.prototype;
							return f.parse = function(e) {
								this.$d = function(e) {
									var t = e.date,
										i = e.utc;
									if (null === t) return new Date(NaN);
									if (b.u(t)) return new Date;
									if (t instanceof Date) return new Date(t);
									if ("string" == typeof t && !/Z$/i.test(t)) {
										var n = t.match(p);
										if (n) {
											var s = n[2] - 1 || 0,
												r = (n[7] || "0").substring(0, 3);
											return i ? new Date(Date.UTC(n[1], s, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, r)) : new Date(n[1], s, n[3] || 1, n[4] || 0, n[5] || 0, n[6] || 0, r)
										}
									}
									return new Date(t)
								}(e), this.$x = e.x || {}, this.init()
							}, f.init = function() {
								var e = this.$d;
								this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
							}, f.$utils = function() {
								return b
							}, f.isValid = function() {
								return !(this.$d.toString() === h)
							}, f.isSame = function(e, t) {
								var i = E(e);
								return this.startOf(t) <= i && i <= this.endOf(t)
							}, f.isAfter = function(e, t) {
								return E(e) < this.startOf(t)
							}, f.isBefore = function(e, t) {
								return this.endOf(t) < E(e)
							}, f.$g = function(e, t, i) {
								return b.u(e) ? this[t] : this.set(i, e)
							}, f.unix = function() {
								return Math.floor(this.valueOf() / 1e3)
							}, f.valueOf = function() {
								return this.$d.getTime()
							}, f.startOf = function(e, t) {
								var i = this,
									l = !!b.u(t) || t,
									h = b.p(e),
									p = function(e, t) {
										var n = b.w(i.$u ? Date.UTC(i.$y, t, e) : new Date(i.$y, t, e), i);
										return l ? n : n.endOf(o)
									},
									g = function(e, t) {
										return b.w(i.toDate()[e].apply(i.toDate("s"), (l ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), i)
									},
									m = this.$W,
									f = this.$M,
									v = this.$D,
									y = "set" + (this.$u ? "UTC" : "");
								switch (h) {
									case d:
										return l ? p(1, 0) : p(31, 11);
									case c:
										return l ? p(1, f) : p(0, f + 1);
									case a:
										var S = this.$locale().weekStart || 0,
											w = (m < S ? m + 7 : m) - S;
										return p(l ? v - w : v + (6 - w), f);
									case o:
									case u:
										return g(y + "Hours", 0);
									case r:
										return g(y + "Minutes", 1);
									case s:
										return g(y + "Seconds", 2);
									case n:
										return g(y + "Milliseconds", 3);
									default:
										return this.clone()
								}
							}, f.endOf = function(e) {
								return this.startOf(e, !1)
							}, f.$set = function(e, t) {
								var a, l = b.p(e),
									h = "set" + (this.$u ? "UTC" : ""),
									p = (a = {}, a[o] = h + "Date", a[u] = h + "Date", a[c] = h + "Month", a[d] = h + "FullYear", a[r] = h + "Hours", a[s] = h + "Minutes", a[n] = h + "Seconds", a[i] = h + "Milliseconds", a)[l],
									g = l === o ? this.$D + (t - this.$W) : t;
								if (l === c || l === d) {
									var m = this.clone().set(u, 1);
									m.$d[p](g), m.init(), this.$d = m.set(u, Math.min(this.$D, m.daysInMonth())).$d
								} else p && this.$d[p](g);
								return this.init(), this
							}, f.set = function(e, t) {
								return this.clone().$set(e, t)
							}, f.get = function(e) {
								return this[b.p(e)]()
							}, f.add = function(i, l) {
								var u, h = this;
								i = Number(i);
								var p = b.p(l),
									g = function(e) {
										var t = E(h);
										return b.w(t.date(t.date() + Math.round(e * i)), h)
									};
								if (p === c) return this.set(c, this.$M + i);
								if (p === d) return this.set(d, this.$y + i);
								if (p === o) return g(1);
								if (p === a) return g(7);
								var m = (u = {}, u[s] = e, u[r] = t, u[n] = 1e3, u)[p] || 1,
									f = this.$d.getTime() + i * m;
								return b.w(f, this)
							}, f.subtract = function(e, t) {
								return this.add(-1 * e, t)
							}, f.format = function(e) {
								var t = this,
									i = this.$locale();
								if (!this.isValid()) return i.invalidDate || h;
								var n = e || "YYYY-MM-DDTHH:mm:ssZ",
									s = b.z(this),
									r = this.$H,
									o = this.$m,
									a = this.$M,
									c = i.weekdays,
									l = i.months,
									d = function(e, i, s, r) {
										return e && (e[i] || e(t, n)) || s[i].slice(0, r)
									},
									u = function(e) {
										return b.s(r % 12 || 12, e, "0")
									},
									p = i.meridiem || function(e, t, i) {
										var n = e < 12 ? "AM" : "PM";
										return i ? n.toLowerCase() : n
									},
									m = {
										YY: String(this.$y).slice(-2),
										YYYY: this.$y,
										M: a + 1,
										MM: b.s(a + 1, 2, "0"),
										MMM: d(i.monthsShort, a, l, 3),
										MMMM: d(l, a),
										D: this.$D,
										DD: b.s(this.$D, 2, "0"),
										d: String(this.$W),
										dd: d(i.weekdaysMin, this.$W, c, 2),
										ddd: d(i.weekdaysShort, this.$W, c, 3),
										dddd: c[this.$W],
										H: String(r),
										HH: b.s(r, 2, "0"),
										h: u(1),
										hh: u(2),
										a: p(r, o, !0),
										A: p(r, o, !1),
										m: String(o),
										mm: b.s(o, 2, "0"),
										s: String(this.$s),
										ss: b.s(this.$s, 2, "0"),
										SSS: b.s(this.$ms, 3, "0"),
										Z: s
									};
								return n.replace(g, (function(e, t) {
									return t || m[e] || s.replace(":", "")
								}))
							}, f.utcOffset = function() {
								return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
							}, f.diff = function(i, u, h) {
								var p, g = b.p(u),
									m = E(i),
									f = (m.utcOffset() - this.utcOffset()) * e,
									v = this - m,
									y = b.m(this, m);
								return y = (p = {}, p[d] = y / 12, p[c] = y, p[l] = y / 3, p[a] = (v - f) / 6048e5, p[o] = (v - f) / 864e5, p[r] = v / t, p[s] = v / e, p[n] = v / 1e3, p)[g] || v, h ? y : b.a(y)
							}, f.daysInMonth = function() {
								return this.endOf(c).$D
							}, f.$locale = function() {
								return S[this.$L]
							}, f.locale = function(e, t) {
								if (!e) return this.$L;
								var i = this.clone(),
									n = _(e, t, !0);
								return n && (i.$L = n), i
							}, f.clone = function() {
								return b.w(this.$d, this)
							}, f.toDate = function() {
								return new Date(this.valueOf())
							}, f.toJSON = function() {
								return this.isValid() ? this.toISOString() : null
							}, f.toISOString = function() {
								return this.$d.toISOString()
							}, f.toString = function() {
								return this.$d.toUTCString()
							}, m
						}(),
						k = I.prototype;
					return E.prototype = k, [
						["$ms", i],
						["$s", n],
						["$m", s],
						["$H", r],
						["$W", o],
						["$M", c],
						["$y", d],
						["$D", u]
					].forEach((function(e) {
						k[e[1]] = function(t) {
							return this.$g(t, e[0], e[1])
						}
					})), E.extend = function(e, t) {
						return e.$i || (e(t, I, E), e.$i = !0), E
					}, E.locale = _, E.isDayjs = w, E.unix = function(e) {
						return E(1e3 * e)
					}, E.en = S[y], E.Ls = S, E.p = {}, E
				}()
			},
			5478: function(e, t, i) {
				"use strict";
				i.r(t);
				var n = function(e, t, i, n) {
						return (e /= n / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
					},
					s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
						return typeof e
					} : function(e) {
						return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
					},
					r = function() {
						var e = void 0,
							t = void 0,
							i = void 0,
							r = void 0,
							o = void 0,
							a = void 0,
							c = void 0,
							l = void 0,
							d = void 0,
							u = void 0,
							h = void 0,
							p = void 0;

						function g() {
							return window.scrollY || window.pageYOffset
						}

						function m(e) {
							return e.getBoundingClientRect().top + t
						}

						function f(i) {
							d || (d = i), h = o(u = i - d, t, c, l), window.scrollTo(0, h), u < l ? window.requestAnimationFrame(f) : (window.scrollTo(0, t + c), e && a && (e.setAttribute("tabindex", "-1"), e.focus()), "function" == typeof p && p(), d = !1)
						}
						return function(d) {
							var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
							switch (l = u.duration || 1e3, r = u.offset || 0, p = u.callback, o = u.easing || n, a = u.a11y || !1, t = g(), void 0 === d ? "undefined" : s(d)) {
								case "number":
									e = void 0, a = !1, i = t + d;
									break;
								case "object":
									i = m(e = d);
									break;
								case "string":
									e = document.querySelector(d), i = m(e)
							}
							switch (c = i - t + r, s(u.duration)) {
								case "number":
									l = u.duration;
									break;
								case "function":
									l = u.duration(c)
							}
							window.requestAnimationFrame(f)
						}
					}();
				t.default = r
			},
			6652: function() {},
			5989: function() {},
			4964: function() {},
			5624: function() {},
			9395: function() {},
			7474: function() {},
			4296: function() {},
			3778: function() {},
			6157: function() {},
			9156: function() {},
			69: function() {},
			6942: function() {},
			799: function() {},
			8963: function() {},
			6454: function() {},
			8580: function() {},
			4158: function() {},
			9460: function() {},
			8030: function() {},
			643: function() {},
			7320: function() {},
			2348: function() {},
			8107: function() {},
			6066: function() {},
			4496: function() {},
			2517: function() {},
			2439: function() {},
			4139: function() {},
			1542: function() {},
			5836: function() {},
			9887: function() {},
			5612: function() {},
			7482: function() {},
			4188: function() {},
			2789: function() {},
			1999: function() {},
			8745: function() {},
			1210: function() {},
			641: function() {},
			5530: function() {},
			2553: function() {},
			8213: function() {},
			8239: function() {},
			7042: function() {},
			6931: function() {},
			7172: function() {},
			9153: function() {},
			1301: function() {},
			7256: function(e, t, i) {
				"use strict";
				const n = i(7312),
					s = i(4527);
				new class {
					constructor() {
						window.EventAggregationService && (window.EventAggregationService.subscribeTo(n.AnonymousStudentServiceReady.EventType, this, !0), window.EventAggregationService.subscribeTo(n.AnonymousStudentProfileUpdated.EventType, this, !1), window.EventAggregationService.subscribeTo(n.AnonymousStudentProfileSynced.EventType, this, !1))
					}
					async notify(e) {
						e.eventType === n.AnonymousStudentServiceReady.EventType && await this.handleAnonymousStudentReadyEvent(e), e.eventType === n.AnonymousStudentProfileUpdated.EventType && await this.handleAnonymousStudentProfileUpdatedEvent(e), e.eventType === n.AnonymousStudentProfileSynced.EventType && await this.handleAnonymousStudentProfileSyncedEvent(e)
					}
					async handleAnonymousStudentReadyEvent(e) {
						this.anonymousStudent = e.anonymousStudentService, await this.updateButton()
					}
					async handleAnonymousStudentProfileUpdatedEvent(e) {
						const t = e.changes;
						(t[s.StudentField.NATIONALITY_COUNTRY_ID] || t[s.StudentField.NATIONALITY_COUNTRY_ISO] || t[s.StudentField.CURRENCY]) && await this.updateButton()
					}
					async handleAnonymousStudentProfileSyncedEvent(e) {
						e.state === n.StudentRepositoryStateType.ONLINE && await this.updateButton()
					}
					async updateButton() {
						const e = await this.anonymousStudent.getStudentData([s.StudentField.NATIONALITY_COUNTRY_ISO, s.StudentField.CURRENCY]);
						this.updateNationalityOnButtons(e), this.updateCurrencyOnButtons(e)
					}
					updateNationalityOnButtons(e) {
						if (void 0 === e[s.StudentField.NATIONALITY_COUNTRY_ISO]) return;
						const t = document.getElementsByClassName("js-locationText");
						for (const i of t) i.textContent = e[s.StudentField.NATIONALITY_COUNTRY_ISO].toUpperCase()
					}
					updateCurrencyOnButtons(e) {
						if (void 0 === e[s.StudentField.CURRENCY]) return;
						const t = document.getElementsByClassName("js-currencyText");
						for (const i of t) i.textContent = e[s.StudentField.CURRENCY].toUpperCase()
					}
				}
			},
			2539: function(e, t, i) {
				"use strict";
				var n = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
				Object.defineProperty(t, "__esModule", {
					value: !0
				});
				const s = n(i(5478));
				class r {
					constructor() {
						this.button = r.getElementById("js-FooterScrollToTopClick"), this.rocket = r.getElementById("js-FooterScrollToTopAnimate")
					}
					static getElementById(e) {
						const t = document.getElementById(e);
						if (!t) throw new Error(`element with id '${e}' was not found`);
						return t
					}
					init() {
						matchMedia("(hover: none)").matches || this.button.classList.add("canHover"), this.button.addEventListener("click", (() => this.scrollUp()))
					}
					scrollUp() {
						const {
							height: e
						} = document.body.getBoundingClientRect(), t = 650 * Math.log(1 + e / 1e3), {
							top: i,
							left: n
						} = this.rocket.getBoundingClientRect();
						this.button.classList.add("FooterRocketLaunch"), this.rocket.style.position = "fixed", this.rocket.style.top = `${i}px`, this.rocket.style.left = `${n}px`;
						let r = i;
						const o = Math.max(Math.log(t / i) / 10, .1),
							a = setInterval((() => this.rocket.style.top = (r -= o) + "px"), 1);
						(0, s.default)(document.body, {
							duration: t,
							callback: () => {
								clearInterval(a), this.button.classList.remove("FooterRocketLaunch"), this.rocket.removeAttribute("style")
							}
						})
					}
				}
				document.addEventListener("DOMContentLoaded", (() => {
					(new r).init()
				}))
			},
			4620: function(e, t, i) {
				"use strict";
				const n = i(1480);
				new class {
					constructor() {
						this.module = document.getElementById("LocalizationSettings"), this.popup = null, this.popupConfig = {
							destroyOnClose: !1,
							cssClassName: "LocalizationSettingsModal",
							onOpen: () => {
								document.dispatchEvent(new CustomEvent("profile_questionnaires_initialize", {
									detail: {
										identifier: "localization_settings"
									}
								}))
							}
						}, document.addEventListener("localization_settings_buttons_rebind", (() => {
							this.bindClickEvents()
						})), this.init()
					}
					init() {
						void 0 === window.ModalManager && (window.ModalManager = new n.ModalManager), this.popup = new n.SimpleModal(this.module, this.popupConfig), this.bindClickEvents(), this.bindOpenLocalizationSettingsEvent()
					}
					bindClickEvents() {
						const e = document.getElementsByClassName("js-showLocalizationPreferences");
						Array.from(e).forEach((e => {
							e.removeEventListener("click", (() => {
								window.ModalManager.open(this.popup)
							})), e.addEventListener("click", (() => {
								window.ModalManager.open(this.popup)
							}))
						}))
					}
					bindOpenLocalizationSettingsEvent() {
						document.addEventListener("open_localization_settings", (() => {
							window.ModalManager.open(this.popup)
						}))
					}
				}
			},
			1012: function(e, t, i) {
				"use strict";
				var n = this && this.__importDefault || function(e) {
					return e && e.__esModule ? e : {
						default: e
					}
				};
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.OrganisationHeader = void 0;
				const s = n(i(5478)),
					r = n(i(9019));
				class o {
					init() {
						const e = document.getElementById("QuickFacts");
						e && this.bindScrollEvent(e)
					}
					bindScrollEvent(e) {
						e && e.addEventListener("click", (e => {
							if (!(e.target instanceof HTMLElement)) return;
							const t = e.target.classList.contains("js-scrollTo") ? e.target : e.target.closest(".js-scrollTo");
							if (!t || !t.dataset) return;
							if (!t.dataset.target) return;
							const i = this.getScrollTarget(t.dataset.target);
							null !== i && this.scrollTo(i)
						}), !1)
					}
					getScrollTarget(e) {
						return document.getElementById(e) || null
					}
					scrollTo(e) {
						if (!(e instanceof Element)) return;
						let t = 90;
						const i = document.getElementById("SearchRow");
						i && (t = i.getBoundingClientRect().height + 16), (0, s.default)(e, {
							duration: 1e3,
							offset: -1 * t
						})
					}
				}
				t.OrganisationHeader = o;
				const a = new o;
				document.addEventListener("DOMContentLoaded", (() => {
					a.init()
				})), document.addEventListener("ReviewsMicroserviceFetched", (() => {
					r.default.renderReviewsGlimpse(), r.default.renderDrawer(), r.default.setDrawerStateToClosed()
				}))
			},
			9019: function(e, t) {
				"use strict";
				Object.defineProperty(t, "__esModule", {
					value: !0
				}), t.default = new class {
					retrieveDataStorage() {
						if (!window.Loot || !window.Loot.DataStorage) return void window.Rollbar.warn("ReviewsWidget: DataStorage could not be retrieved.");
						const e = window.Loot.DataStorage.retrieve("ReviewsDrawer");
						return e ? JSON.parse(e) : void 0
					}
					checkIfDrawersShouldOpen() {
						const e = this.retrieveDataStorage();
						return void 0 !== e && e.widgetReviewsAllPopupOpen
					}
					setDrawerStateToClosed() {
						var e;
						const t = null !== (e = this.retrieveDataStorage()) && void 0 !== e ? e : {
							widgetReviewsAllPopupOpen: !1
						};
						t.widgetReviewsAllPopupOpen = !1, window.Loot && window.Loot.DataStorage ? window.Loot.DataStorage.store("ReviewsDrawer", JSON.stringify(t)) : window.Rollbar.warn("ReviewsWidget: DataStorage could not be stored.")
					}
					setDrawerStateToOpened() {
						var e;
						const t = null !== (e = this.retrieveDataStorage()) && void 0 !== e ? e : {
							widgetReviewsAllPopupOpen: !1
						};
						t.widgetReviewsAllPopupOpen = !0, window.Loot && window.Loot.DataStorage ? window.Loot.DataStorage.store("ReviewsDrawer", JSON.stringify(t)) : window.Rollbar.warn("ReviewsWidget: DataStorage could not be stored.")
					}
					renderReviewsGlimpse() {
						document.dispatchEvent(new CustomEvent("RenderReviewsWidgets", {
							detail: {
								widget: "widget-reviews-glimpse",
								reviewsReferrer: "ReviewsGlimpse"
							}
						}))
					}
					renderDrawer() {
						document.dispatchEvent(new CustomEvent("RenderReviewsWidgets", {
							detail: {
								widget: "widget-reviews-all",
								reviewsReferrer: "ReviewsAll",
								isOpen: this.checkIfDrawersShouldOpen()
							}
						}))
					}
					openDrawer() {
						document.dispatchEvent(new CustomEvent("RenderReviewsWidgets", {
							detail: {
								widget: "widget-reviews-all",
								reviewsReferrer: "ReviewsAll",
								isOpen: !0
							}
						}))
					}
					renderReviewsRating() {
						document.dispatchEvent(new CustomEvent("RenderReviewsWidgets", {
							detail: {
								widget: "widget-reviews-rating",
								reviewsReferrer: "ReviewsRating"
							}
						}))
					}
					renderPortalBadgesAll() {
						document.dispatchEvent(new CustomEvent("RenderReviewsWidgets", {
							detail: {
								widget: "widget-reviews-portal-badges-all",
								reviewsReferrer: "PortalBadges",
								isSingleBadge: !1
							}
						}))
					}
				}
			},
			9516: function(e, t, i) {
				"use strict";
				const n = i(3685),
					s = i(8416),
					r = i(8661),
					o = i(206);
				window.SlideInElementFrameInitiator = class {
					constructor() {
						window.SlideInElementConditionsInformer && window.SlideInElementContextualInformer && window.SlideInElementFramePositioner && window.SlideInElementTracker && (this.conditionsInformer = new n.SlideInElementConditionsInformer(this), this.contextualInformer = new s.SlideInElementContextualInformer(this), this.positioner = new r.SlideInElementFramePositioner(this), this.tracker = new o.SlideInElementTracker(this))
					}
					trigger(e) {
						e && e.dataset && this.conditionsInformer && this.contextualInformer && this.positioner && this.tracker && this.conditionsInformer.areConditionsMet() && this.positioner.positionElement(e)
					}
				}
			},
			7143: function(e, t) {
				"use strict";
				new class {
					constructor() {
						this.init()
					}
					init() {
						const e = document.querySelectorAll('.TrackingExternalLink[data-label="revenue"]');
						this.loadHotjar();
						for (const t of e) t.addEventListener("click", (() => {
							this.addHotjarTag(t)
						}))
					}
					loadHotjar() {
						void 0 === window.hj && document.dispatchEvent(new CustomEvent("hotjar_load"))
					}
					addHotjarTag(e) {
						const t = e.dataset.id;
						void 0 !== window.hj && (window.hj("event", "PremiumClick"), window.hj("event", `PremiumClickLink - ${t}`))
					}
				}
			},
			1480: function(e, t, i) {
				e.exports = i(9644)("./node_modules/@studyportals/modal/dist/modal.js")
			},
			9644: function(e) {
				"use strict";
				e.exports = modal_v2
			}
		},
		t = {};

	function i(n) {
		var s = t[n];
		if (void 0 !== s) return s.exports;
		var r = t[n] = {
			id: n,
			loaded: !1,
			exports: {}
		};
		return e[n].call(r.exports, r, r.exports, i), r.loaded = !0, r.exports
	}
	i.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return i.d(t, {
			a: t
		}), t
	}, i.d = function(e, t) {
		for (var n in t) i.o(t, n) && !i.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		})
	}, i.hmd = function(e) {
		return (e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
			enumerable: !0,
			set: function() {
				throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
			}
		}), e
	}, i.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, i.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, i(343), i(6002), i(3627), i(1368), i(3644), i(3318), i(7902), i(7143), i(1012), i(4073), i(7378), i(3188), i(1205), i(1615), i(1275), i(7022), i(2081), i(3934), i(2486), i(1872), i(1937), i(1347), i(7066), i(723), i(6481), i(5448), i(1454), i(1483), i(9516), i(8661), i(206), i(3685), i(8416), i(1497), i(2228), i(1657), i(8246), i(5976), i(243), i(6618), i(2032), i(4620), i(8845), i(7256), i(2539), i(1301), i(7172), i(5612), i(5530), i(2553), i(7042), i(2789), i(8107), i(4496), i(2439), i(641), i(7482), i(4139), i(4188), i(1999), i(1210), i(8745), i(1542), i(9460), i(6931), i(5989), i(4964), i(7320), i(6652), i(6066), i(5624), i(9395), i(7474), i(8239), i(8213), i(2517), i(8030), i(9887), i(5836), i(2348), i(6454), i(8580), i(4158), i(643), i(9153), i(9156), i(4296), i(6942), i(69), i(799), i(8963), i(3778), i(6157)
}();
//# sourceMappingURL=57bc88a53540236df9251e2358c7b683730eba77.ded61f4bd36fb06c2ab5.js.map