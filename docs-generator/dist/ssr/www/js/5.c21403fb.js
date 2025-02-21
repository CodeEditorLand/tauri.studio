(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	[5],
	{
		1709: function (t, e, i) {},
		"8e10": function (t, e, i) {
			"use strict";
			var a = i("1709"),
				o = i.n(a);
			o.a;
		},
		eabb: function (t, e, i) {
			"use strict";
			i.r(e);
			var a = function () {
					var t = this,
						e = t.$createElement,
						i = t._self._c || e;
					return i(
						"div",
						[
							i("div", {
								staticStyle: { "padding-top": "40px" },
								attrs: { id: "padding" },
							}),
							i(
								"q-carousel",
								{
									staticStyle: {
										overflow: "hidden!important",
										width: "100%",
										background: "transparent",
										color: "black!important",
										"border-radius": "5px",
									},
									attrs: {
										animated: "",
										infinite: "",
										autoplay: 5e3,
										navigation: "",
										"control-color": "cyan-1",
										height: "420px",
									},
									model: {
										value: t.slide,
										callback: function (e) {
											t.slide = e;
										},
										expression: "slide",
									},
								},
								t._l(t.slides, function (e) {
									return i(
										"q-carousel-slide",
										{
											key: e.id,
											staticClass: "column no-wrap",
											attrs: {
												name: e.title,
												"img-src": e.img,
											},
											on: {
												mouseover: function (e) {
													t.credits = !0;
												},
												mouseleave: function (e) {
													t.credits = !1;
												},
											},
										},
										[
											i(
												"div",
												{
													staticClass:
														"text-h3 text-weight-thin bg-amber-3 absolute-left q-pa-md text-center",
													staticStyle: {
														width: "350px",
														opacity: "0.8",
														"padding-top": "220px",
													},
												},
												[t._v(" " + t._s(e.title))],
											),
											i(
												"h6",
												{
													staticClass:
														"q-pa-sm bg-yellow-1 full-width text-center",
													staticStyle: {
														margin: "270px -25px 0 0!important",
														"z-index": "1",
														"font-size": "1.2em",
														"border-radius": "4px",
													},
												},
												[
													t._v(
														"\n          " +
															t._s(e.text) +
															"\n        ",
													),
												],
											),
											t.credits
												? i(
														"q-btn",
														{
															staticClass:
																"absolute-top-right q-ma-lg",
															staticStyle: {
																width: "180px",
																"z-index": "1",
															},
															attrs: {
																size: "xs",
																dense: "",
																color: "blue-grey-9",
																"text-color":
																	"white",
																type: "a",
																href:
																	"https://unsplash.com/" +
																	e.unsplashLink,
															},
														},
														[
															i(
																"span",
																{
																	staticStyle:
																		{
																			display:
																				"inline-block",
																			padding:
																				"2px 3px",
																		},
																},
																[
																	i(
																		"svg",
																		{
																			staticStyle:
																				{
																					height: "12px",
																					width: "auto",
																					position:
																						"relative",
																					"vertical-align":
																						"middle",
																					top: "-2px",
																					fill: "white",
																				},
																			attrs: {
																				xmlns: "http://www.w3.org/2000/svg",
																				viewBox:
																					"0 0 32 32",
																			},
																		},
																		[
																			i(
																				"path",
																				{
																					attrs: {
																						d: "M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z",
																					},
																				},
																			),
																		],
																	),
																],
															),
															i(
																"span",
																{
																	staticStyle:
																		{
																			display:
																				"inline-block",
																			padding:
																				"2px 3px",
																		},
																},
																[
																	t._v(
																		"Image by: " +
																			t._s(
																				e.unsplashName,
																			),
																	),
																],
															),
														],
													)
												: t._e(),
										],
										1,
									);
								}),
								1,
							),
							i(
								"div",
								{ staticClass: "text-h6 text-center q-mt-xl" },
								[
									t._v(
										"\n      Create small, fast, and secure desktop apps from your existing HTML, CSS, and Javascript.\n    ",
									),
								],
							),
							i(
								"div",
								{
									staticStyle: {
										width: "100%",
										"overflow-x": "auto",
									},
								},
								[
									i(
										"div",
										{
											staticClass:
												"q-py-xl col text-subtitle1",
											staticStyle: {
												"min-width": "500px",
											},
										},
										[
											i(
												"div",
												{
													class:
														"row text-center " +
														(t.$q.screen.width < 720
															? "items-center"
															: "items-top"),
												},
												[
													i(
														"div",
														{ staticClass: "col" },
														[
															i(
																"div",
																{
																	staticClass:
																		"row justify-center",
																},
																[
																	i(
																		"q-icon",
																		{
																			attrs: {
																				size: "42px",
																				name: "web",
																			},
																		},
																	),
																],
																1,
															),
															i(
																"div",
																{
																	staticClass:
																		"row justify-center",
																},
																[
																	t._v(
																		"\n              Any web-based frontend framework, or none at all.\n            ",
																	),
																],
															),
														],
													),
													i("q-icon", {
														staticClass:
															"self-center",
														attrs: {
															name: "arrow_right_alt",
															size: "42px",
														},
													}),
													i(
														"div",
														{
															staticClass:
																"col col-shrink q-px-lg",
														},
														[
															i(
																"div",
																{
																	staticClass:
																		"row justify-center",
																},
																[
																	i(
																		"q-icon",
																		{
																			attrs: {
																				size: "42px",
																				name: "img:/statics/app-logo-128x128.png",
																			},
																		},
																	),
																],
																1,
															),
														],
													),
													i("q-icon", {
														staticClass:
															"self-center",
														attrs: {
															name: "arrow_right_alt",
															size: "42px",
														},
													}),
													i(
														"div",
														{ staticClass: "col" },
														[
															i(
																"div",
																{
																	staticClass:
																		"row justify-center",
																},
																[
																	i(
																		"q-icon",
																		{
																			attrs: {
																				size: "42px",
																				name: "desktop_windows",
																			},
																		},
																	),
																],
																1,
															),
															i(
																"div",
																{
																	staticClass:
																		"row justify-center",
																},
																[
																	t._v(
																		"\n              Native binary for Windows, Mac, or Linux.\n            ",
																	),
																],
															),
														],
													),
												],
												1,
											),
											i(
												"div",
												{
													staticClass:
														"row justify-center",
													staticStyle: {
														"margin-top": "-30px",
													},
												},
												[
													i(
														"div",
														{
															staticClass:
																"col-4 col text-center",
														},
														[
															i("q-icon", {
																attrs: {
																	name: "arrow_upward",
																	size: "42px",
																},
															}),
															i(
																"div",
																{
																	staticClass:
																		"row justify-center",
																},
																[
																	t._v(
																		"\n                  Native Rust code, or even entire native binaries (optional).\n                ",
																	),
																],
															),
														],
														1,
													),
												],
											),
										],
									),
								],
							),
							i(
								"div",
								{ staticClass: "full-width text-center" },
								[
									i(
										"q-btn",
										{
											staticClass:
												"text-subtitle1 q-mt-lg",
											attrs: {
												"icon-right": "arrow_right",
												outline: "",
												type: "a",
												href: "https://github.com/tauri-apps/tauri/wiki",
											},
										},
										[t._v("Get Started With Tauri")],
									),
								],
								1,
							),
							i(
								"div",
								{
									staticClass:
										"row full-width wrap justify-center items-center content-center items-start q-mt-xl",
									attrs: { id: "Highlights" },
								},
								t._l(t.actions, function (e, a) {
									return i(
										"q-card",
										{
											key: a,
											class: {
												"q-ma-md col-md-3 col-sm-5 q-mt-sm":
													!0,
												"bg-cyan-1":
													!t.$q.dark.isActive,
												"bg-grey-8": t.$q.dark.isActive,
											},
											attrs: { flat: "", bordered: "" },
										},
										[
											i("q-icon", {
												staticClass:
													"float-left q-pa-lg q-ma-xs text-h5",
												staticStyle: {
													margin: "11px 5px -1px 10px",
												},
												attrs: { name: e.icon },
											}),
											i("q-card-section", [
												t._v(
													"\n          " +
														t._s(e.claim) +
														"\n        ",
												),
											]),
										],
										1,
									);
								}),
								1,
							),
							i(
								"div",
								{ staticClass: "full-width text-center" },
								[
									i(
										"q-btn",
										{
											staticClass:
												"text-subtitle1 q-my-xl",
											attrs: {
												"icon-right": "arrow_right",
												outline: "",
												to: { name: "introduction" },
											},
										},
										[t._v("Technical Details")],
									),
								],
								1,
							),
							i(
								"q-card",
								{
									staticClass: "q-ma-xl full-width",
									attrs: { id: "Roadmap", flat: "" },
								},
								[
									i(
										"q-card-section",
										{
											staticClass:
												"justify-center items-center content-center text-center",
										},
										[
											i(
												"q-activity",
												{
													staticStyle: {
														"margin-top": "110px",
													},
													attrs: {
														dense: "",
														"bar-color": t.$q.dark
															.isActive
															? "#ccd"
															: "#223",
														"bar-width": "3px",
														"bar-distance": "15px",
													},
												},
												t._l(
													t.timeline,
													function (e, a) {
														return i(
															"q-activity-item",
															{
																key: a,
																staticStyle: {
																	"padding-bottom":
																		"5px",
																	"padding-top":
																		"5px",
																	"margin-left":
																		"-9px",
																},
																attrs: {
																	icon: e.icon,
																	"icon-color":
																		e.iconColor,
																	"icon-text-color":
																		e.iconTextColor,
																	"icon-size":
																		"2.5em",
																	"icon-font-size":
																		"0.55em",
																},
															},
															[
																i(
																	"q-item",
																	{
																		staticClass:
																			"inline-block vertical-middle text-left",
																	},
																	[
																		i(
																			"q-item-section",
																			[
																				i(
																					"q-item-label",
																					{
																						staticClass:
																							"text-weight-bold",
																					},
																					[
																						t._v(
																							t._s(
																								e.label,
																							),
																						),
																					],
																				),
																				i(
																					"q-item-label",
																					{
																						attrs: {
																							caption:
																								"",
																							lines: "2",
																						},
																					},
																					[
																						t._v(
																							t._s(
																								e.caption,
																							),
																						),
																					],
																				),
																			],
																			1,
																		),
																	],
																	1,
																),
																i(
																	"q-chip",
																	{
																		staticClass:
																			"vertical-middle side-text",
																		attrs: {
																			dense: "",
																		},
																	},
																	[
																		t._v(
																			"\n              " +
																				t._s(
																					e.time,
																				) +
																				"\n            ",
																		),
																	],
																),
															],
															1,
														);
													},
												),
												1,
											),
											i(
												"small",
												{
													staticClass:
														"text-weight-light",
												},
												[
													t._v(
														"Notice: This roadmap is subject to change.",
													),
												],
											),
											i("img", {
												staticClass: "full-width",
												staticStyle: {
													position: "absolute",
													top: "0",
													left: "0",
													"object-fit": "cover",
												},
												attrs: {
													height: 130,
													src: "statics/images/skycave.jpg",
												},
											}),
											i("div", {
												staticStyle: {
													position: "absolute",
													left: "0",
													top: "0",
													right: "0",
													height: "130px",
													background:
														"linear-gradient(0deg, rgba(224,247,250,1) 5%, rgba(224,247,250,0.9) 30%, rgba(224,247,250,0.7) 60%, rgba(224,247,250,0.45) 80%, rgba(224,247,250,0) 100%)",
													"z-index": "10",
												},
											}),
											i(
												"h2",
												{
													staticClass:
														"text-weight-thin",
													staticStyle: {
														position: "absolute",
														top: "20px",
														"z-index": "100",
														left: "10px",
														right: "10px",
														margin: "auto",
														"text-shadow":
															"0 0 5px white,0 0 2px white",
														color: "#253239",
													},
												},
												[t._v("ROADMAP")],
											),
										],
										1,
									),
								],
								1,
							),
							i("q-markdown", {
								attrs: { src: t.markdown, toc: "" },
								on: { data: t.onToc },
							}),
						],
						1,
					);
				},
				o = [],
				n =
					"## Donations and Sponsoring\n\n>At the moment the best way to support the development of Tauri is to visit our [Open Collective](https://opencollective.com/tauri) page and make a donation. Funds go first and foremost to covering the overhead of the project, additional funds will be distributed to all contributors using a sourcecred-based system. Thanks for consideration! :heart:\nIf you are interested in sponsoring Tauri and want to accelerate the development of specific components, we encourage you to reach out to the team.\n",
				s = [
					"statics/images/locks.jpg",
					"statics/images/hammers.jpg",
					"statics/images/lightning.jpg",
					"statics/images/feather.jpg",
					"statics/images/bigben.jpg",
					"statics/images/boat.jpg",
				],
				l = {
					name: "LandingPage",
					serverCacheKey: function () {
						return "landing";
					},
					mounted: function () {
						for (
							var t = this,
								e = function (e) {
									var i = new Image();
									(i.crossOrigin = "Anonymous"),
										(i.onload = function () {
											var a =
													document.createElement(
														"CANVAS",
													),
												o = a.getContext("2d");
											(a.height = i.naturalHeight),
												(a.width = i.naturalWidth),
												o.drawImage(i, 0, 0);
											var n = a.toDataURL("image/jpeg");
											n.length >= 1 &&
												(t.slides[e].img = n),
												(a = null);
										}),
										(i.src = s[e]);
								},
								i = 0;
							i < s.length;
							i++
						)
							e(i);
					},
					data: function () {
						return {
							bundle: !1,
							mermTex: "",
							slide: "SECURITY",
							credits: !1,
							markdown: n,
							slides: [
								{
									title: "SECURITY",
									text: "is the Tauri-Team's biggest priority and drives our innovation.",
									img: "statics/images/locks.jpg",
									unsplashLink: "@dynamicwang",
									unsplashName: "Dynamic Wang",
								},
								{
									title: "BROWNFIELD",
									text: "compatibility with any front-end framework means you don't have to change your stack.",
									img: "statics/images/hammers.jpg",
									unsplashLink: "@Sucrebrut",
									unsplashName: "Sucrebrut",
								},
								{
									title: "MEMORY",
									text: "footprint of a Tauri App is less than half of the size of an Electron app.",
									img: "statics/images/lightning.jpg",
									unsplashLink: "@ian_froome_photography",
									unsplashName: "Ian Froome",
								},
								{
									title: "BUNDLE",
									text: "size of a Tauri App can be less than 600KB.",
									img: "statics/images/feather.jpg",
									unsplashLink: "@_javardh_001",
									unsplashName: "Javardh",
								},
								{
									title: "RELIABILITY",
									text: "of the underlying code base is why we maintain abandoned libraries.",
									img: "statics/images/bigben.jpg",
									unsplashLink: "@louisk_",
									unsplashName: "Louis. K",
								},
								{
									title: "FLOSS",
									text: "relicensing is possible with Tauri, but not with Electron.",
									img: "statics/images/boat.jpg",
									unsplashLink: "@jplenio",
									unsplashName: "Johannes Plenio",
								},
							],
							actions: [
								{
									icon: "ti-crown",
									claim: "Tauri is a polyglot toolchain for building more secure native apps with both tiny and fast binaries.",
									btnLabel: "Get Setup!",
									btnTarget: "/docs/quickstart",
								},
								{
									icon: "ti-settings",
									claim: "Tauri lets you use any HTML/JS-based frontend framework to build apps, and it can be integrated into any pipeline.",
									btnLabel: "Learn How!",
									btnTarget: "/docs/frameworks",
								},
								{
									icon: "ti-package",
									claim: "Tauri helps you build and bundle binaries for major desktop platforms (mobile & wasm coming soon).",
									btnLabel: "Ship It!",
									btnTarget: "/docs/bundler",
								},
								{
									icon: "ti-key",
									claim: "Tauri has many design patterns to help you choose important features with simple configuration.",
									btnLabel: "Discover!",
									btnTarget: "/docs/patterns",
								},
								{
									icon: "ti-shield",
									claim: "With security features baked in and additional tools available, your code will be safer than ever.",
									btnLabel: "Be Safer!",
									btnTarget: "/security",
								},
								{
									icon: "ti-gift",
									claim: "As a sustainable FLOSS project, we do our best to mitigate bus-factor and are open to everyone.",
									btnLabel: "Join Us!",
									btnTarget: "/governance-and-guidance",
								},
							],
							timeline: [
								{
									icon: "ti-target",
									iconColor: "green",
									iconTextColor: "white",
									label: "CLI",
									caption:
										"Generate, develop and build Tauri apps from the command line.",
									time: "Q4 2019",
								},
								{
									icon: "ti-crown",
									iconColor: "green",
									iconTextColor: "white",
									label: "API",
									caption:
										"Finalize, audit, write documentation and create examples for the smoke-tests.",
									time: "Q4 2019",
								},
								{
									icon: "ti-pulse",
									iconColor: "green",
									iconTextColor: "white",
									label: "Testing & CI",
									caption:
										"Implement CI with testing and bundle-pipeline validation.",
									time: "Q4 2019",
								},
								{
									icon: "ti-desktop",
									iconColor: "green",
									iconTextColor: "white",
									label: "Desktop Bundler",
									caption:
										"Bundle for all major desktops from native systems.",
									time: "Q4 2019",
								},
								{
									icon: "ti-flag-alt",
									iconColor: "green",
									iconTextColor: "white",
									label: "Alpha Release",
									caption:
										"Technical Release Candidate for desktop, edge cases and bugs acceptable.",
									time: "Q4 2019",
								},
								{
									icon: "ti-link",
									iconColor: "green",
									iconTextColor: "white",
									label: "Sideloader",
									caption:
										"Integrate and instrument other binaries.",
									time: "Q1 2020",
								},
								{
									icon: "ti-blackboard",
									iconColor: "green",
									iconTextColor: "white",
									label: "Splashscreen",
									caption:
										"Use a splashscreen while the main content is loading.",
									time: "Q1 2020",
								},
								{
									icon: "ti-share",
									iconColor: "blue",
									iconTextColor: "white",
									label: "App Storage",
									caption:
										"Use a canonical location to store userdata.",
									time: "Q1 2020",
								},
								{
									icon: "ti-layout-grid3-alt",
									iconColor: "blue",
									iconTextColor: "white",
									label: "Multi Window",
									caption:
										"Run multiple window instances in Tauri.",
									time: "Q1 2020",
								},
								{
									icon: "ti-download",
									iconColor: "blue",
									iconTextColor: "white",
									label: "Self Updater",
									caption:
										"Update Tauri Apps from within Tauri.",
									time: "Q1 2020",
								},
								{
									icon: "ti-bolt",
									iconColor: "blue",
									iconTextColor: "white",
									label: "WASM Bundler",
									caption:
										"Manufacture WASM bundler for use in websites.",
									time: "Q1 2020",
								},
								{
									icon: "ti-shine",
									iconColor: "blue",
									iconTextColor: "white",
									label: "PureOS App Store",
									caption: "Verified builds for PureOS.",
									time: "Q1 2020",
								},
								{
									icon: "ti-panel",
									iconColor: "blue",
									iconTextColor: "white",
									label: "App Tray",
									caption:
										"Desktop Cross-platform Icon Tray.",
									time: "Q2 2020",
								},
								{
									icon: "ti-announcement",
									iconColor: "blue",
									iconTextColor: "white",
									label: "Native Notifications",
									caption:
										"Cross-platform notifications using polyfilled WEB API.",
									time: "Q2 2020",
								},
								{
									icon: "ti-flag-alt",
									iconColor: "red",
									iconTextColor: "white",
									label: "Beta Release",
									caption:
										"Generally stable on Desktop, API locked down.",
									time: "Q2 2020",
								},
								{
									icon: "ti-mobile",
									iconColor: "blue",
									iconTextColor: "white",
									label: "Mobile Bundler",
									caption:
										"Bundle to all major mobile device operating systems.",
									time: "Q2 2020",
								},
								{
									icon: "ti-cup",
									iconColor: "blue",
									iconTextColor: "white",
									label: "DENO",
									caption: "Enable alternative DENO CLI.",
									time: "Q3 2020",
								},
								{
									icon: "ti-control-shuffle",
									iconColor: "blue",
									iconTextColor: "white",
									label: "Cross Compiler",
									caption:
										"Generate bundled binaries from select operating system environments.",
									time: "Q3 2020",
								},
								{
									icon: "ti-direction-alt",
									iconColor: "blue",
									iconTextColor: "white",
									label: "Alternative Renderer",
									caption:
										"Candidate presentation for Webview Alternatives, including GL windowing.",
									time: "Q3 2020",
								},
								{
									icon: "ti-slice",
									iconColor: "blue",
									iconTextColor: "white",
									label: "Tauri-Frida",
									caption:
										"A decompiler and threat analyzer for Tauri Apps, using Frida.",
									time: "Q4 2020",
								},
								{
									icon: "ti-flag-alt",
									iconColor: "red",
									iconTextColor: "white",
									label: "Stable Release",
									caption: "Stable on On all Platforms.",
									time: "Q4 2020",
								},
								{
									icon: "ti-world",
									iconColor: "blue",
									iconTextColor: "white",
									label: "Other Bindings",
									caption:
										"Go, Nim, Python, C++ and other bindings are possible with the stable API.",
									time: "Q1 2021",
								},
								{
									icon: "ti-infinite",
									iconColor: "blue",
									iconTextColor: "white",
									label: "The Future",
									caption:
										"Something missing? Got a great idea? We want you to help us make it happen.",
									time: "& BEYOND",
								},
							],
						};
					},
					computed: {
						toc: {
							get: function () {
								return this.$store.state.common.toc;
							},
							set: function (t) {
								this.$store.commit("common/toc", t);
							},
						},
					},
					methods: {
						onToc: function (t) {
							t.unshift({
								id: "Roadmap",
								label: "Roadmap",
								level: 2,
								children: Array(0),
							}),
								t.unshift({
									id: "Highlights",
									label: "Highlights",
									level: 2,
									children: Array(0),
								}),
								(this.toc = t);
						},
						extendMarkdown: function (t) {
							t.use(this.mermaid);
						},
						mermaid: function (t, e) {
							t.renderer.rules.fence = function (t, e, i, a, o) {
								var n = t[e],
									s = n.content.trim();
								return '<div class="mermaid">\n'.concat(
									s,
									"\n</div>\n",
								);
							};
						},
					},
				},
				r = l,
				c = (i("8e10"), i("2877")),
				d = i("eebe"),
				p = i.n(d),
				m = i("880c"),
				u = i("62cd"),
				h = i("9c40"),
				g = i("0016"),
				b = i("f09f"),
				f = i("a370"),
				w = i("4b7e"),
				x = i("66e5"),
				v = i("4074"),
				C = i("0170"),
				y = i("b0476"),
				T = Object(c["a"])(r, a, o, !1, null, null, null);
			e["default"] = T.exports;
			p()(T, "components", {
				QCarousel: m["a"],
				QCarouselSlide: u["a"],
				QBtn: h["a"],
				QIcon: g["a"],
				QCard: b["a"],
				QCardSection: f["a"],
				QCardActions: w["a"],
				QItem: x["a"],
				QItemSection: v["a"],
				QItemLabel: C["a"],
				QChip: y["a"],
			});
		},
	},
]);
