(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	[2],
	{
		"42ef": function (t, e, a) {
			"use strict";
			var i = a("f1f1"),
				r = a.n(i);
			r.a;
		},
		"546f": function (t, e, a) {
			"use strict";
			var i = a("ed30"),
				r = a.n(i);
			r.a;
		},
		"713b": function (t, e, a) {
			"use strict";
			a.r(e);
			var i = function () {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a(
						"q-layout",
						{ attrs: { view: "hHh lpR ffr" } },
						[
							a(
								"q-drawer",
								{
									ref: "drawer",
									attrs: {
										side: "right",
										bordered: "",
										behavior: "mobile",
										"content-style": t.contentStyle,
									},
									model: {
										value: t.rightDrawerOpen,
										callback: function (e) {
											t.rightDrawerOpen = e;
										},
										expression: "rightDrawerOpen",
									},
								},
								[
									a(
										"q-scroll-area",
										{
											staticStyle: {
												height: "calc(100% - 80px)",
											},
											attrs: {
												id: "scrollHolder",
												"thumb-style": {
													right: "3px",
													borderRadius: "2px",
													background: "#ffaa00",
													width: "6px",
													opacity: 0.5,
												},
											},
										},
										[
											a(
												"q-list",
												{
													staticClass: "q-pt-lg",
													attrs: { dense: "" },
												},
												t._l(t.toc, function (e) {
													return a(
														"q-item",
														{
															directives: [
																{
																	name: "ripple",
																	rawName:
																		"v-ripple",
																},
															],
															key: e.id,
															attrs: {
																clickable: "",
																dense: "",
																active:
																	t.activeToc ===
																	e.id,
															},
															on: {
																click: function (
																	a,
																) {
																	return t.scrollTo(
																		e.id,
																	);
																},
															},
														},
														[
															a(
																"q-item-section",
																{
																	class:
																		"toc-item toc-level-" +
																		e.level,
																},
																[
																	t._v(
																		t._s(
																			e.label,
																		),
																	),
																],
															),
														],
														1,
													);
												}),
												1,
											),
										],
										1,
									),
									a(
										"div",
										{
											staticClass:
												"absolute-bottom full-width text-center",
											class: t.$q.dark.isActive
												? "bg-blue-grey-6"
												: "bg-cyan-1",
										},
										[
											a("q-separator"),
											a(
												"div",
												{
													staticClass:
														"absolute-left",
													staticStyle: {
														margin: "6px 0 0 10px",
													},
												},
												[
													a("q-btn", {
														attrs: {
															flat: "",
															round: "",
															type: "a",
															href: "https://github.com/tauri-apps/tauri",
															icon: "fab fa-github",
														},
													}),
												],
												1,
											),
											a(
												"div",
												{
													staticClass: "q-pa-sm",
													staticStyle: {
														"font-size": "0.9em",
													},
												},
												[
													t._v(
														"\n        Tauri is an Open Source Project",
													),
													a("br"),
													a(
														"a",
														{
															attrs: {
																href: "https://github.com/tauri-apps/tauri",
																target: "_blank",
																rel: "noreferrer",
															},
														},
														[t._v("GitHub")],
													),
													t._v(
														"\n         | \n        ",
													),
													a(
														"router-link",
														{
															attrs: {
																to: {
																	name: "partners",
																},
															},
														},
														[
															t._v(
																"\n          Partners\n        ",
															),
														],
													),
													t._v(
														"\n         | \n        ",
													),
													a(
														"router-link",
														{
															attrs: {
																to: {
																	name: "governance-and-guidance",
																},
															},
														},
														[t._v("Governance")],
													),
												],
												1,
											),
											a(
												"div",
												{
													staticClass:
														"absolute-right",
													staticStyle: {
														margin: "5px 10px 0 0",
													},
												},
												[
													a("q-btn", {
														attrs: {
															type: "a",
															flat: "",
															round: "",
															icon: t.$q.dark
																.isActive
																? "brightness_2"
																: "brightness_5",
														},
														on: {
															click: function (
																e,
															) {
																return t.$q.dark.toggle();
															},
														},
													}),
												],
												1,
											),
										],
										1,
									),
								],
								1,
							),
							a(
								"q-page-container",
								[
									a(
										"keep-alive",
										{ attrs: { include: "Patterns" } },
										[a("hero", [a("router-view")], 1)],
										1,
									),
									a("UpScroller"),
								],
								1,
							),
							a(
								"div",
								{
									staticClass: "full-width",
									class: t.$q.dark.isActive
										? "bg-blue-grey-8"
										: "bg-cyan-1",
								},
								[
									a("q-separator"),
									a(
										"div",
										{
											staticClass: "row q-pa-sm q-ml-lg",
											staticStyle: {
												"font-size": "0.9em",
											},
										},
										[
											a(
												"div",
												{
													staticClass:
														"col-8 col-md-4 col-sm-3",
												},
												[
													a(
														"div",
														{
															staticClass:
																"q-pt-md",
														},
														[
															a(
																"span",
																{
																	staticClass:
																		"text-weight-bold",
																},
																[
																	a(
																		"q-icon",
																		{
																			attrs: {
																				name: "ti-comment-alt",
																			},
																		},
																	),
																	t._v(
																		"\n            CONTACT\n          ",
																	),
																],
																1,
															),
															a("q-separator"),
															a(
																"div",
																{
																	staticClass:
																		"row q-mt-xs",
																},
																[
																	a(
																		"q-btn",
																		{
																			staticClass:
																				"footer-item",
																			attrs: {
																				flat: "",
																				round: "",
																			},
																		},
																		[
																			a(
																				"a",
																				{
																					attrs: {
																						href: "mailto:contact@tauri.studio",
																						target: "_blank",
																					},
																				},
																				[
																					a(
																						"q-icon",
																						{
																							attrs: {
																								name: "mail",
																							},
																						},
																					),
																				],
																				1,
																			),
																		],
																	),
																	a(
																		"q-btn",
																		{
																			staticClass:
																				"footer-item",
																			attrs: {
																				flat: "",
																				round: "",
																			},
																		},
																		[
																			a(
																				"a",
																				{
																					attrs: {
																						href: "https://discord.gg/SpmNs4S",
																						target: "_blank",
																						rel: "noreferrer",
																					},
																				},
																				[
																					a(
																						"q-icon",
																						{
																							attrs: {
																								name: t
																									.$q
																									.dark
																									.isActive
																									? "img:statics/discord.svg"
																									: "img:statics/discord-light.svg",
																							},
																						},
																					),
																				],
																				1,
																			),
																		],
																	),
																	a(
																		"q-btn",
																		{
																			staticClass:
																				"footer-item",
																			attrs: {
																				flat: "",
																				round: "",
																			},
																		},
																		[
																			a(
																				"a",
																				{
																					attrs: {
																						href: "https://twitter.com/tauriapps",
																						target: "_blank",
																						rel: "noreferrer",
																					},
																				},
																				[
																					a(
																						"q-icon",
																						{
																							attrs: {
																								name: "fab fa-twitter",
																							},
																						},
																					),
																				],
																				1,
																			),
																		],
																	),
																],
																1,
															),
														],
														1,
													),
												],
											),
											a("div", {
												staticClass:
													"col-1 col-md-1 col-sm-1",
											}),
											a(
												"div",
												{
													staticClass:
														"col-8 col-md-4 col-sm-3",
												},
												[
													a(
														"div",
														{
															staticClass:
																"q-pt-md",
														},
														[
															a(
																"span",
																{
																	staticClass:
																		"text-weight-bold",
																},
																[
																	a(
																		"q-icon",
																		{
																			attrs: {
																				name: "ti-direction-alt",
																			},
																		},
																	),
																	t._v(
																		"\n            NETWORK\n          ",
																	),
																],
																1,
															),
															a("q-separator"),
															a(
																"div",
																{
																	staticClass:
																		"row q-mt-xs",
																},
																[
																	a(
																		"q-btn",
																		{
																			staticClass:
																				"footer-item",
																			attrs: {
																				flat: "",
																				round: "",
																			},
																		},
																		[
																			a(
																				"a",
																				{
																					attrs: {
																						href: "https://dev.to/tauri",
																						target: "_blank",
																						rel: "noreferrer",
																					},
																				},
																				[
																					a(
																						"q-icon",
																						{
																							attrs: {
																								name: "fab fa-dev",
																							},
																						},
																					),
																				],
																				1,
																			),
																		],
																	),
																	a(
																		"q-btn",
																		{
																			staticClass:
																				"footer-item",
																			attrs: {
																				flat: "",
																				round: "",
																			},
																		},
																		[
																			a(
																				"a",
																				{
																					attrs: {
																						href: "https://opencollective.com/tauri",
																						target: "_blank",
																						rel: "noreferrer",
																					},
																				},
																				[
																					a(
																						"q-icon",
																						{
																							attrs: {
																								name: t
																									.$q
																									.dark
																									.isActive
																									? "img:statics/open-collective.svg"
																									: "img:statics/open-collective-light.svg",
																							},
																						},
																					),
																				],
																				1,
																			),
																		],
																	),
																	a(
																		"q-btn",
																		{
																			staticClass:
																				"footer-item",
																			attrs: {
																				flat: "",
																				round: "",
																			},
																		},
																		[
																			a(
																				"a",
																				{
																					attrs: {
																						href: "https://github.com/tauri-apps/tauri",
																						target: "_blank",
																						rel: "noreferrer",
																					},
																				},
																				[
																					a(
																						"q-icon",
																						{
																							attrs: {
																								name: "fab fa-github",
																							},
																						},
																					),
																				],
																				1,
																			),
																		],
																	),
																],
																1,
															),
														],
														1,
													),
												],
											),
											a("div", { staticClass: "col" }),
										],
									),
								],
								1,
							),
						],
						1,
					);
				},
				r = [],
				o =
					(a("8e6e"),
					a("8a81"),
					a("ac6a"),
					a("cadf"),
					a("06db"),
					a("456d"),
					a("c47a")),
				n = a.n(o),
				s = (a("7f7f"), a("2f62")),
				c = a("0831");
			a("a481");
			function l(t) {
				return encodeURIComponent(
					String(t).trim().replace(/\s+/g, "-"),
				);
			}
			function p(t) {
				window.location =
					window.location.origin + window.location.pathname + "#" + t;
			}
			var m = function () {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a(
						"div",
						{ staticClass: "full-width q-pa-md" },
						[
							a(
								"q-page-sticky",
								{
									staticClass:
										"page-header fixed-top shadow-8 scroll-determined z-top",
									staticStyle: {
										position: "fixed!important",
									},
									attrs: { id: "hero", expand: "" },
								},
								[
									a("div", {
										staticClass:
											"bg-container scroll-determined q-pa-md q-ml-lg",
									}),
									a(
										"div",
										[
											a(
												"router-link",
												{ attrs: { to: "/" } },
												[
													a(
														"div",
														{
															attrs: {
																id: "tauri-name--holder",
															},
														},
														[
															a("img", {
																staticClass:
																	"animateLeft tauri-name scroll-determined",
																staticStyle: {
																	cursor: "pointer",
																},
																attrs: {
																	src: "statics/tauri-wordmark.svg",
																	alt: "Tauri Wordmark",
																	title: "Tauri",
																},
															}),
														],
													),
												],
											),
											a(
												"q-btn",
												{
													staticClass: "z-top",
													staticStyle: {
														margin: "16px 12px 0 0",
														position: "fixed",
														top: "0",
														right: "0",
													},
													attrs: {
														flat: "",
														dense: "",
														round: "",
														"aria-label": "Menu",
														color: "cyan-1",
													},
													on: { click: t.sidebar },
												},
												[
													a("q-icon", {
														attrs: { name: "menu" },
													}),
												],
												1,
											),
											a(
												"div",
												{
													staticClass:
														"absolute-right",
													staticStyle: {
														margin: "18px 24px 0 0",
													},
												},
												[
													a(
														"q-btn-dropdown",
														{
															staticClass:
																"q-mr-lg",
															attrs: {
																flat: "",
																dense: "",
																"text-color":
																	"cyan-1",
																label: t.current,
																"no-caps": "",
															},
														},
														[
															a(
																"q-list",
																{
																	attrs: {
																		color: "yellow-2",
																	},
																},
																[
																	t.showDocs
																		? a(
																				"q-item",
																				{
																					directives:
																						[
																							{
																								name: "close-popup",
																								rawName:
																									"v-close-popup",
																							},
																						],
																					attrs: {
																						dense: "",
																						clickable:
																							"",
																						to: {
																							name: "introduction",
																						},
																					},
																				},
																				[
																					a(
																						"q-item-section",
																						[
																							a(
																								"q-item-label",
																								[
																									t._v(
																										"Introduction",
																									),
																								],
																							),
																						],
																						1,
																					),
																				],
																				1,
																			)
																		: t._e(),
																	t.showDocs
																		? a(
																				"q-item",
																				{
																					directives:
																						[
																							{
																								name: "close-popup",
																								rawName:
																									"v-close-popup",
																							},
																						],
																					attrs: {
																						dense: "",
																						clickable:
																							"",
																						to: {
																							name: "security",
																						},
																					},
																				},
																				[
																					a(
																						"q-item-section",
																						[
																							a(
																								"q-item-label",
																								[
																									t._v(
																										"Security",
																									),
																								],
																							),
																						],
																						1,
																					),
																				],
																				1,
																			)
																		: t._e(),
																	a(
																		"q-item",
																		{
																			directives:
																				[
																					{
																						name: "close-popup",
																						rawName:
																							"v-close-popup",
																					},
																				],
																			attrs: {
																				dense: "",
																				clickable:
																					"",
																				to: {
																					name: "patterns",
																				},
																			},
																		},
																		[
																			a(
																				"q-item-section",
																				[
																					a(
																						"q-item-label",
																						[
																							t._v(
																								"Patterns",
																							),
																						],
																					),
																				],
																				1,
																			),
																		],
																		1,
																	),
																	a(
																		"q-item",
																		{
																			directives:
																				[
																					{
																						name: "close-popup",
																						rawName:
																							"v-close-popup",
																					},
																				],
																			attrs: {
																				dense: "",
																				clickable:
																					"",
																			},
																		},
																		[
																			a(
																				"q-item-section",
																				[
																					a(
																						"q-item-label",
																						[
																							a(
																								"a",
																								{
																									attrs: {
																										href: "https://github.com/tauri-apps/tauri/wiki",
																										target: "_blank",
																									},
																								},
																								[
																									t._v(
																										"Documentation",
																									),
																								],
																							),
																						],
																					),
																				],
																				1,
																			),
																		],
																		1,
																	),
																	a(
																		"q-separator",
																	),
																	t.showDocs
																		? a(
																				"q-item",
																				{
																					directives:
																						[
																							{
																								name: "close-popup",
																								rawName:
																									"v-close-popup",
																							},
																						],
																					attrs: {
																						dense: "",
																						clickable:
																							"",
																						to: {
																							name: "book",
																						},
																					},
																				},
																				[
																					a(
																						"q-item-section",
																						[
																							a(
																								"q-item-label",
																								[
																									t._v(
																										"Book",
																									),
																								],
																							),
																						],
																						1,
																					),
																				],
																				1,
																			)
																		: t._e(),
																	t.showDocs
																		? a(
																				"q-item",
																				{
																					directives:
																						[
																							{
																								name: "close-popup",
																								rawName:
																									"v-close-popup",
																							},
																						],
																					attrs: {
																						dense: "",
																						clickable:
																							"",
																						to: {
																							name: "partners",
																						},
																					},
																				},
																				[
																					a(
																						"q-item-section",
																						[
																							a(
																								"q-item-label",
																								[
																									t._v(
																										"Partners",
																									),
																								],
																							),
																						],
																						1,
																					),
																				],
																				1,
																			)
																		: t._e(),
																	a(
																		"q-item",
																		{
																			directives:
																				[
																					{
																						name: "close-popup",
																						rawName:
																							"v-close-popup",
																					},
																				],
																			attrs: {
																				dense: "",
																				clickable:
																					"",
																				to: {
																					name: "governance-and-guidance",
																				},
																			},
																		},
																		[
																			a(
																				"q-item-section",
																				[
																					a(
																						"q-item-label",
																						[
																							t._v(
																								"Governance",
																							),
																						],
																					),
																				],
																				1,
																			),
																		],
																		1,
																	),
																],
																1,
															),
														],
														1,
													),
												],
												1,
											),
										],
										1,
									),
								],
							),
							a(
								"main",
								{
									staticClass:
										"flex flex-start justify-center",
								},
								[
									a(
										"div",
										{
											staticClass:
												"q-pa-sm col-12-sm col-10-md col-8-lg",
											staticStyle: {
												"max-width": "1024px",
												width: "100%",
											},
										},
										[t._t("default")],
										2,
									),
								],
							),
						],
						1,
					);
				},
				u = [],
				d = {
					name: "Hero",
					data: function () {
						return {
							buttons: !0,
							height: 270,
							heightName: 140,
							heightPic: 250,
							heightClaim: 100,
							rightDrawerOpen: !1,
						};
					},
					mounted: function () {},
					computed: {
						showDocs: function () {
							var t = this.$route.meta.showDocslink;
							return "undefined" === typeof t || t;
						},
						current: function () {
							return this.$route.meta.name;
						},
					},
					methods: {
						sidebar: function () {
							this.$store.commit("common/rightDrawerOpen", !0);
						},
					},
				},
				f = d,
				g = (a("42ef"), a("2877")),
				h = a("eebe"),
				b = a.n(h),
				v = a("de5e"),
				q = a("9c40"),
				w = a("0016"),
				y = a("f20b"),
				k = a("1c1c"),
				_ = a("66e5"),
				C = a("4074"),
				O = a("0170"),
				x = a("eb85"),
				S = a("4e73"),
				D = a("7f67"),
				T = Object(g["a"])(f, m, u, !1, null, null, null),
				P = T.exports;
			b()(T, "components", {
				QPageSticky: v["a"],
				QBtn: q["a"],
				QIcon: w["a"],
				QBtnDropdown: y["a"],
				QList: k["a"],
				QItem: _["a"],
				QItemSection: C["a"],
				QItemLabel: O["a"],
				QSeparator: x["a"],
				QMenu: S["a"],
			}),
				b()(T, "directives", { ClosePopup: D["a"] });
			var Q = function () {
					var t = this,
						e = t.$createElement,
						a = t._self._c || e;
					return a(
						"q-page-scroller",
						{
							attrs: {
								position: "bottom-right",
								"scroll-offset": 150,
								offset: [18, 18],
							},
						},
						[
							a("q-btn", {
								class: {
									"text-black bg-grey-4": t.$q.dark.isActive,
									"text-white bg-primary":
										!t.$q.dark.isActive,
								},
								attrs: { fab: "", icon: "keyboard_arrow_up" },
							}),
						],
						1,
					);
				},
				$ = [],
				j = { name: "UpScroller" },
				R = j,
				A = a("5096"),
				N = Object(g["a"])(R, Q, $, !1, null, null, null),
				E = N.exports;
			function I(t, e) {
				var a = Object.keys(t);
				if (Object.getOwnPropertySymbols) {
					var i = Object.getOwnPropertySymbols(t);
					e &&
						(i = i.filter(function (e) {
							return Object.getOwnPropertyDescriptor(t, e)
								.enumerable;
						})),
						a.push.apply(a, i);
				}
				return a;
			}
			function B(t) {
				for (var e = 1; e < arguments.length; e++) {
					var a = null != arguments[e] ? arguments[e] : {};
					e % 2
						? I(Object(a), !0).forEach(function (e) {
								n()(t, e, a[e]);
							})
						: Object.getOwnPropertyDescriptors
							? Object.defineProperties(
									t,
									Object.getOwnPropertyDescriptors(a),
								)
							: I(Object(a)).forEach(function (e) {
									Object.defineProperty(
										t,
										e,
										Object.getOwnPropertyDescriptor(a, e),
									);
								});
				}
				return t;
			}
			b()(N, "components", { QPageScroller: A["a"], QBtn: q["a"] });
			var L = c["a"].getScrollTarget,
				H = c["a"].setScrollPosition,
				z = {
					name: "MainLayout",
					components: { Hero: P, UpScroller: E },
					data: function () {
						return { activeToc: 0 };
					},
					meta: function () {
						return {
							title: this.metaRoute.page_title,
							meta: {
								ogUrl: {
									name: "og:url",
									content: "https://tauri.studio/en/".concat(
										this.$route.name,
									),
								},
								ogTitle: {
									name: "og:title",
									content: this.metaRoute.page_title,
								},
								twitterTitle: {
									name: "twitter:title",
									content: this.metaRoute.page_title,
								},
								ogSiteName: {
									name: "og:site_name",
									content: "Tauri Studio",
								},
								desc: {
									name: "description",
									content: this.metaRoute.description,
								},
								ogDesc: {
									name: "og:description",
									content: this.metaRoute.description,
								},
								twitterDesc: {
									name: "twitter:description",
									content: this.metaRoute.description,
								},
								keywords: {
									name: "keywords",
									content: this.metaRoute.tags,
								},
							},
							script: {
								ldJson: {
									type: "application/ld+json",
									innerHTML:
										'\n{\n  "@context": "http://schema.org",\n  "@type": "Article",\n  "mainEntityOfPage": {\n    "@type": "WebPage",\n    "@id": "https://tauri.studio/en/'
											.concat(
												this.$route.name,
												'"\n  },\n  "name": "',
											)
											.concat(
												this.metaRoute.page_title,
												'",\n  "author": {\n    "@type": "Organization",\n    "name": "Tauri"\n  },\n  "image": [\n    "https://tauri.studio/statics/thetaTauri_logo.png"\n  ],\n  "description": "',
											)
											.concat(
												this.metaRoute.description,
												'",\n  "keywords": "',
											)
											.concat(
												this.metaRoute.tags,
												'"\n}',
											),
								},
							},
							noscript: {
								default: "Welcome to tauri.studio: "
									.concat(
										this.metaRoute.page_title,
										" This website requires JavaScript - and here you would have learned about the following: ",
									)
									.concat(this.metaRoute.description),
							},
						};
					},
					computed: B(
						{
							metaRoute: function () {
								return this.$route.meta;
							},
						},
						Object(s["b"])({ toc: "common/toc" }),
						{
							rightDrawerOpen: {
								get: function () {
									return this.$store.state.common
										.rightDrawerOpen;
								},
								set: function (t) {
									this.$store.commit(
										"common/rightDrawerOpen",
										t,
									);
								},
							},
							contentStyle: function () {
								return {
									background: this.$q.dark.isActive
										? ""
										: "#FDFADE",
									paddingTop: "70px",
								};
							},
						},
					),
					mounted: function () {
						if (
							(document
								.getElementById("tauri-studio-logo")
								.setAttribute("style", "display:none"),
							"" !== location.hash)
						) {
							var t = location.hash.substring(
								1,
								location.hash.length,
							);
							this.scrollTo(t);
						}
					},
					methods: {
						scrollTo: function (t) {
							var e = this;
							this.$refs.drawer.hide(), (this.activeToc = t);
							var a = document.getElementById(t);
							a &&
								setTimeout(function () {
									e.scrollPage(a), p(l(t));
								}, 200);
						},
						scrollPage: function (t) {
							var e = L(t),
								a =
									window.pageYOffset ||
									document.documentElement.scrollTop,
								i = t.offsetTop - 80;
							a <= 50 && (i = t.offsetTop - 250), H(e, i, 500);
						},
					},
				},
				U = z,
				J = (a("546f"), a("4d5a")),
				M = a("9404"),
				W = a("4983"),
				G = a("09e3"),
				F = a("714f"),
				K = Object(g["a"])(U, i, r, !1, null, null, null);
			e["default"] = K.exports;
			b()(K, "components", {
				QLayout: J["a"],
				QDrawer: M["a"],
				QScrollArea: W["a"],
				QList: k["a"],
				QItem: _["a"],
				QItemSection: C["a"],
				QSeparator: x["a"],
				QBtn: q["a"],
				QPageContainer: G["a"],
				QIcon: w["a"],
			}),
				b()(K, "directives", { Ripple: F["a"] });
		},
		ed30: function (t, e, a) {},
		f1f1: function (t, e, a) {},
	},
]);
