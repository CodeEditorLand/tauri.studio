(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	[6],
	{
		8452: function (e, t, n) {
			"use strict";
			n.r(t);
			var a = function () {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t;
					return n(
						"div",
						[
							n("div", {
								staticStyle: { "padding-top": "40px" },
								attrs: { id: "padding" },
							}),
							n("p", { staticClass: "q-mt-xl" }, [
								e._v(
									"Tauri patterns are descriptions of use-cases that are entirely configurable within the src-tauri/tauri.conf.json file. These are not the limits of what Tauri can do, and there are probably more out there. If you discover one, why not get in touch and help us update this collection!\n  ",
								),
							]),
							n(
								"p",
								[
									e._v(
										"If you haven't read about the general design of Tauri, then it would make the most sense for you to visit the\n    ",
									),
									n(
										"router-link",
										{
											attrs: {
												to: { name: "introduction" },
											},
										},
										[e._v("INTRODUCTION")],
									),
									e._v(
										" and become familiar with the basic architecture and terminology used in these patterns.\n  ",
									),
								],
								1,
							),
							n(
								"q-card",
								{
									staticClass: "q-mt-xl",
									attrs: { id: "overview" },
								},
								[
									n(
										"q-card-section",
										{
											staticClass: "text-center",
											staticStyle: {
												"padding-bottom": "-20px",
											},
										},
										e._l(e.patterns, function (t) {
											return n(
												"q-btn",
												{
													key: t.id,
													staticClass: "q-mx-xs",
													class: {
														"bg-cyan-2 text-black":
															e.pattern ===
															t.name,
													},
													attrs: {
														name:
															t.name +
															" Selector",
														outline: "",
														flat: "",
														dense: "",
														"no-caps": "",
														disabled:
															e.pattern ===
															t.name,
													},
													on: {
														click: function (n) {
															e.pattern = t.name;
														},
													},
												},
												[e._v(e._s(t.name))],
											);
										}),
										1,
									),
									n("q-separator"),
									n(
										"q-card-section",
										{
											class: e.$q.dark.isActive
												? "bg-blue-grey-6"
												: "bg-cyan-1",
										},
										[
											n(
												"q-ribbon",
												{
													staticStyle: {
														margin: "-16px",
													},
													attrs: {
														"leaf-color":
															e.yellow.dark,
														"background-color":
															e.yellow.light,
														color: "black",
														type: "corner",
														position: "top-right",
													},
												},
												[
													n(
														"small",
														{
															staticClass:
																"q-pa-md text-weight-bold",
														},
														[
															e._v(
																e._s(
																	e.active
																		.most,
																),
															),
														],
													),
												],
											),
											n(
												"div",
												{
													staticClass:
														"fit row inline wrap",
													staticStyle: {
														"margin-top": "26px",
													},
													attrs: { id: "tryout" },
												},
												[
													n("img", {
														staticClass:
															"col-1 q-mt-md q-mr-md",
														staticStyle: {
															height: "50px",
															width: "auto",
														},
														attrs: {
															src:
																"statics/patterns/" +
																e.pattern +
																".png",
															alt: e.pattern,
															title:
																e.pattern +
																" badge",
														},
													}),
													n(
														"h4",
														{
															staticClass:
																"col-grow text-weight-light q-pt-xl",
															class: e.$q.dark
																.isActive
																? "text-cyan-1"
																: "text-cyan-10",
															staticStyle: {
																margin: "-30px 0",
															},
														},
														[e._v(e._s(e.pattern))],
													),
													n(
														"span",
														{
															staticClass:
																"col-12 q-pa-sm text-weight-bold text-black",
														},
														[
															e._v(
																e._s(
																	e.active
																		.bestWhen,
																),
															),
														],
													),
													n(
														"div",
														{
															staticClass:
																"row justify-around full-width",
														},
														[
															n(
																"div",
																{
																	staticClass:
																		"col-sm-5 col-xs-12",
																},
																[
																	n(
																		"ul",
																		{
																			staticClass:
																				"text-weight-bold",
																		},
																		[
																			e._v(
																				" Pros:\n              ",
																			),
																			e._l(
																				e
																					.active
																					.pros,
																				function (
																					t,
																				) {
																					return n(
																						"li",
																						{
																							key: t.id,
																							staticClass:
																								"text-weight-regular row-12",
																						},
																						[
																							e._v(
																								e._s(
																									t,
																								),
																							),
																						],
																					);
																				},
																			),
																		],
																		2,
																	),
																	n(
																		"ul",
																		{
																			staticClass:
																				"text-weight-bold",
																		},
																		[
																			e._v(
																				" Cons:\n              ",
																			),
																			e._l(
																				e
																					.active
																					.cons,
																				function (
																					t,
																				) {
																					return n(
																						"li",
																						{
																							key: t.id,
																							staticClass:
																								"text-weight-regular row-12",
																						},
																						[
																							e._v(
																								e._s(
																									t,
																								),
																							),
																						],
																					);
																				},
																			),
																		],
																		2,
																	),
																],
															),
															n(
																"div",
																{
																	staticClass:
																		"col-sm-5 col-xs-12 q-mt-md block text-left",
																},
																[
																	n(
																		"div",
																		{
																			staticClass:
																				"row",
																		},
																		[
																			n(
																				"span",
																				{
																					staticClass:
																						"col-6 text-right q-pr-sm",
																					staticStyle:
																						{
																							"white-space":
																								"nowrap",
																						},
																				},
																				[
																					e._v(
																						"Ease of Use: ",
																					),
																				],
																			),
																			n(
																				"q-rating",
																				{
																					staticClass:
																						"col-6 inline-block",
																					attrs: {
																						color: "cyan-10",
																						readonly:
																							"",
																						value: e
																							.active
																							.ratings
																							.easeOfUse,
																					},
																				},
																			),
																		],
																		1,
																	),
																	n(
																		"div",
																		{
																			staticClass:
																				"row",
																		},
																		[
																			n(
																				"span",
																				{
																					staticClass:
																						"col-6 text-right q-pr-sm",
																				},
																				[
																					e._v(
																						"Extensibility: ",
																					),
																				],
																			),
																			n(
																				"q-rating",
																				{
																					staticClass:
																						"col-6 inline-block",
																					attrs: {
																						color: "cyan-10",
																						readonly:
																							"",
																						value: e
																							.active
																							.ratings
																							.extensibility,
																						max:
																							e
																								.active
																								.ratings
																								.extensibility >=
																							6
																								? e
																										.active
																										.ratings
																										.extensibility
																								: 5,
																					},
																				},
																			),
																		],
																		1,
																	),
																	n(
																		"div",
																		{
																			staticClass:
																				"row",
																		},
																		[
																			n(
																				"span",
																				{
																					staticClass:
																						"col-6 text-right q-pr-sm",
																				},
																				[
																					e._v(
																						"Performance: ",
																					),
																				],
																			),
																			n(
																				"q-rating",
																				{
																					staticClass:
																						"col-6 inline-block",
																					attrs: {
																						color: "cyan-10",
																						readonly:
																							"",
																						value: e
																							.active
																							.ratings
																							.performance,
																						max:
																							e
																								.active
																								.ratings
																								.performance >=
																							6
																								? e
																										.active
																										.ratings
																										.performance
																								: 5,
																					},
																				},
																			),
																		],
																		1,
																	),
																	n(
																		"div",
																		{
																			staticClass:
																				"row",
																		},
																		[
																			n(
																				"span",
																				{
																					staticClass:
																						"col-6 text-right q-pr-sm",
																				},
																				[
																					e._v(
																						"Security: ",
																					),
																				],
																			),
																			n(
																				"q-rating",
																				{
																					staticClass:
																						"col-6 inline-block",
																					attrs: {
																						color: "cyan-10",
																						readonly:
																							"",
																						value: e
																							.active
																							.ratings
																							.security,
																						max:
																							e
																								.active
																								.ratings
																								.security >=
																							6
																								? e
																										.active
																										.ratings
																										.security
																								: 5,
																					},
																				},
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
										],
										1,
									),
									n("q-separator"),
									n(
										"q-card-section",
										[
											n(
												"q-no-ssr",
												[
													n("q-markdown", {
														attrs: {
															src: e.active.intro,
														},
													}),
													n("div", {
														staticClass:
															"text-center",
														staticStyle: {
															"background-color":
																"#F2E8C7",
														},
														attrs: {
															id: "flowchart",
														},
														domProps: {
															innerHTML: e._s(
																e.graph,
															),
														},
													}),
												],
												1,
											),
										],
										1,
									),
									n("q-separator"),
									n(
										"q-card-section",
										[
											n(
												"h6",
												{
													attrs: {
														id: "configuration",
													},
												},
												[e._v("Configuration")],
											),
											n("span", [
												e._v(
													"src-tauri/tauri.conf.json",
												),
											]),
											n("q-markdown", {
												attrs: {
													src: e.active.configMD,
													"no-line-numbers": "",
													toc: "",
												},
												on: { data: e.onToc },
											}),
										],
										1,
									),
								],
								1,
							),
						],
						1,
					);
				},
				s = [],
				i =
					(n("7f7f"),
					n("7514"),
					{
						blue: { light: "#BAE5F2", dark: "#77CFE4" },
						yellow: { light: "#EFD3AF", dark: "#D08050" },
					}),
				r = {
					name: "Patterns",
					data: function () {
						return {
							mermaidHTML: "",
							blue: i.blue,
							yellow: i.yellow,
							graph: "",
							clearfix: " ",
							pattern: "Hermit",
							patterns: [
								{
									name: "Hermit",
									most: "TAURI DEFAULT",
									intro: "The Hermit recipe is a pattern for ultimate application isolation where all logic is self-contained in the Window and the binary exists merely to bootstrap the Window. There is no communication back to Rust from the Window, there is no localhost server, and the Window has no access to any remote resources. The Hermit is great for interactive Kiosk Mode and standalone HTML based games.",
									ratings: {
										easeOfUse: 5,
										security: 5,
										extensibility: 0,
										performance: 5,
									},
									bestWhen:
										"Best when you want to lock down your app from all external influences.",
									features: ["Locked down interface"],
									pros: ["Quick to make", "Smallest size"],
									cons: [
										"No remote resources",
										"No access to API",
									],
									configMD:
										'\n```json\n"tauri": {\n  "embeddedServer": {\n    "active": false     // do not use a localhost server\n  },\n  "whitelist": {\n    "all": false,       // disable and tree-shake all api functions\n  }\n}\n```\n          ',
									graph: "graph LR\n          A==>H\n          H==>F\n          subgraph WEBVIEW\n          F\n          end\n\n          subgraph RUST\n          A\n          end\n          A[fa:fa-cog Binary ]\n          F[fa:fa-window-maximize Window]\n          H{Bootstrap}\n          style RUST fill:"
										.concat(i.yellow.light, ",stroke:")
										.concat(
											i.yellow.dark,
											",stroke-width:4px\n          style WEBVIEW fill:",
										)
										.concat(i.blue.light, ",stroke:")
										.concat(
											i.blue.dark,
											",stroke-width:4px",
										),
								},
								{
									name: "Bridge",
									most: "MOST POPULAR",
									intro: "The Bridge recipe is a secure pattern where messages are passed between brokers via an implicit bridge using the API. It isolates functionality to scope and passes messages instead of functionality.",
									bestWhen:
										"Best when you want two-way communication between Rust and WebView.",
									ratings: {
										easeOfUse: 3,
										security: 4,
										extensibility: 5,
										performance: 4,
									},
									pros: [
										"Highly configurable",
										"Rust skills not required",
									],
									cons: [
										"Some WebAPIs unavailable",
										"Challenge to implement",
									],
									configMD:
										'\n```json\n"tauri": {\n  "embeddedServer": {\n    "active": false               // do not use a localhost server\n  },\n  "whitelist": {                  // all whitelist values are default false\n    "all": false,                 // use this flag to enable all API features\n    "answer": true,               // enable rust to direct the UI\n    "event": true,                // enable binding to message\n    "execute": false,             // enable application execution\n    "listFiles": false,           // list files in a directory\n    "open": false,                // open link in a browser\n    "readBinaryFile": false,      // read binary file from local filesystem\n    "readTextFile": false,        // read text file from local filesystem\n    "setTitle": false,            // set the window title\n    "writeFile": false            // write file to local filesystem\n  }\n}\n```\n          ',
									graph: "graph TD\n          H==>F\n\n          subgraph WEBVIEW\n          F-.-E\n          end\n\n          D--\x3eE\n          E--\x3eD\n          B--\x3eD\n          D--\x3eB\n\n          subgraph RUST\n          A==>H\n          A--\x3eB\n          B-.-C\n          B-.-G\n          end\n\n          A[Binary]\n          B{Rust Broker}\n          C[Subprocess 2]\n          G[Subprocess 1]\n          D(( API BRIDGE ))\n          E{JS Broker}\n          F[Window]\n          H{Bootstrap}\n          style D fill:#ccc,stroke:#333,stroke-width:4px,color:white\n          style RUST fill:"
										.concat(i.yellow.light, ",stroke:")
										.concat(
											i.yellow.dark,
											",stroke-width:4px\n          style WEBVIEW fill:",
										)
										.concat(i.blue.light, ",stroke:")
										.concat(
											i.blue.dark,
											",stroke-width:4px",
										),
								},
								{
									name: "Cloudish",
									most: "MOST SIMPLE",
									intro: "The Cloudish recipe is a pattern for maximum flexibility and app performance. It uses a localhost server, which means that your app will technically be available to other processes, like browsers and potentially other devices on the network. All of your assets are baked into the binary, but served as if they were distinct files.",
									ratings: {
										easeOfUse: 5,
										security: 2,
										extensibility: 3,
										performance: 3,
									},
									bestWhen:
										"Best when you have never used Rust before.",
									pros: [
										"No Rust skills necessary",
										"Similar to a SPA web-app",
									],
									cons: [
										"No access to Rust API",
										"Uses a localhost server",
									],
									configMD:
										'\n```json\n"tauri": {\n  "embeddedServer": {\n    "active": true                // ship with a localhost server\n  },\n  "whitelist": {\n    "all": false                  // disable entire API\n  }\n}\n```\n          ',
									graph: "graph TD\n          H==>F\n          H==>D\n          D--\x3eF\n          F--\x3eD\n\n          subgraph RUST\n          A==>H\n          end\n\n          subgraph WEBVIEW\n          F\n          end\n\n          subgraph SERVER\n          D\n          E--\x3eD\n          end\n\n          A[Binary]\n          D(( localhost ))\n          E[bundled resources]\n          F[Window]\n          H{Bootstrap}\n          style RUST fill:"
										.concat(i.yellow.light, ",stroke:")
										.concat(
											i.yellow.dark,
											",stroke-width:4px\n          style WEBVIEW fill:",
										)
										.concat(i.blue.light, ",stroke:")
										.concat(
											i.blue.dark,
											",stroke-width:4px\n          style SERVER fill:#49A24A,stroke:#2B6063,stroke-width:4px",
										),
								},
								{
									name: "Cloudbridge",
									most: "MOST COMPLEX",
									intro: "The Cloudbridge recipe combines the flexibility of a localhost and the security of the bridge. With so many features, it can be easy to get lost.",
									ratings: {
										easeOfUse: 1,
										security: 2,
										extensibility: 5,
										performance: 3,
									},
									bestWhen:
										"Best when your project is complex and you need all available options.",
									pros: [
										"All available features",
										"Rust skills not required",
									],
									cons: [
										"Largest bundle size",
										"Hard to separate concerns",
									],
									configMD:
										'\n```json\n"tauri": {\n  "embeddedServer": {\n    "active": true                // ship with a localhost server\n  },\n  "whitelist": {\n    "all": true                   // enable entire API\n  }\n}\n```\n          ',
									graph: "graph TD\n          H==>F2\n          H==>D2\n          D2--\x3eF2\n          F2--\x3eD2\n          B--\x3eD\n          D--\x3eB\n          E2--\x3eD\n          D--\x3eE2\n\n          subgraph WEBVIEW\n          F2\n          E2\n          end\n\n          subgraph SERVER\n          D2\n          E--\x3eD2\n          end\n\n          subgraph RUST\n          A==>H\n          A--\x3eB\n          B-.-C\n          end\n\n          A[Binary]\n          B{Rust Broker}\n          C[Subprocess]\n          D(( API BRIDGE ))\n          E{JS Broker}\n          D2(( localhost ))\n          E[bundled resources]\n          E2{JS Broker}\n          F2[Window]\n          H{Bootstrap}\n          style D fill:#ccc,stroke:#333,stroke-width:4px,color:white\n          style RUST fill:"
										.concat(i.yellow.light, ",stroke:")
										.concat(
											i.yellow.dark,
											",stroke-width:4px\n          style WEBVIEW fill:",
										)
										.concat(i.blue.light, ",stroke:")
										.concat(
											i.blue.dark,
											",stroke-width:4px\n          style SERVER fill:#49A24A,stroke:#2B6063,stroke-width:4px\n          ",
										),
								},
								{
									name: "Kamikaze",
									most: "BEST IN CLASS",
									intro: "The Kamikaze recipe is a minimal usage of the Bridge pattern, which only allows interaction between Rust and the Window via expiring JS Promise Closures that are injected into the Window by Rust and nulled as part of the callback.",
									ratings: {
										easeOfUse: 2,
										security: 6,
										extensibility: 4,
										performance: 5,
									},
									bestWhen:
										"Best when you want Rust to drive the Webview.",
									features: ["Locked down interface."],
									pros: [
										"Highest security rating",
										"Elegant and powerful",
									],
									cons: [
										"Rust skills required",
										"No remote resources",
									],
									configMD:
										'\n```json\n"tauri": {\n  "embeddedServer": {\n    "active": false               // do not use a localhost server\n  },\n  "whitelist": {                  // all API endpoints are default false\n    "event": true,                // Use the EVENT API for injections\n  }\n}\n```\n          ',
									graph: "graph TD\n          H==>F\n          G-.->B\n          B--\x3eG\n          subgraph WEBVIEW\n          G--\x3eF\n          end\n\n          subgraph RUST\n          A--\x3eB\n          A==>H\n          end\n\n          A[Binary]\n          B[API:Event]\n          F[Window]\n          G((Promise Closure))\n          H{Bootstrap}\n          style RUST fill:"
										.concat(i.yellow.light, ",stroke:")
										.concat(
											i.yellow.dark,
											",stroke-width:4px\n          style WEBVIEW fill:",
										)
										.concat(i.blue.light, ",stroke:")
										.concat(
											i.blue.dark,
											",stroke-width:4px",
										),
								},
								{
									name: "Multiwin",
									most: "COMING SOON ",
									intro: "The Multiwin recipe will allow you to have multiple windows, some of which may be GL based.\n\nPlease note: This Pattern is not yet available.",
									ratings: {
										easeOfUse: 1,
										security: 5,
										extensibility: 4,
										performance: 3,
									},
									bestWhen:
										"Best when you need more than one window.",
									pros: [
										"Access to GL context",
										"Separation of concerns",
									],
									cons: [
										"Extremely complex",
										"Not yet available",
									],
									configMD:
										'\n```json\n"tauri": {\n  "embeddedServer": {\n    "active": false               // do not use a localhost server\n  },\n  "whitelist": {                  // all API endpoints are default false\n    "event": true,                // Use the EVENT API for injections\n  }\n}\n```\n          ',
									graph: "graph LR\n          A==>H\n          H==>F\n          H==>G\n          subgraph WEBVIEW\n          F\n          end\n          subgraph GLUTIN\n          G\n          end\n          subgraph RUST\n          A\n          end\n\n          A[Binary]\n          F[Window]\n          G[GL Window]\n          H{Bootstrap}\n          style GLUTIN stroke:"
										.concat(
											i.blue.dark,
											",stroke-width:4px\n          style RUST fill:",
										)
										.concat(i.yellow.light, ",stroke:")
										.concat(
											i.yellow.dark,
											",stroke-width:4px\n          style WEBVIEW fill:",
										)
										.concat(i.blue.light, ",stroke:")
										.concat(
											i.blue.dark,
											",stroke-width:4px",
										),
								},
								{
									name: "GLUI",
									most: "EXPERMIMENTAL",
									intro: "The GLUI is a research pattern that we will use internally to test approaches using a GLUTIN window. We're not sure yet if it will make the final cut as a bona fide alternative to Webview, although early tests with transparent and multiwindow are exciting.\n\nPlease note: This Pattern is not available.",
									ratings: {
										easeOfUse: 0,
										security: 0,
										extensibility: 0,
										performance: 5,
									},
									bestWhen:
										"Best when you want to help Tauri evolve.",
									pros: [
										"Framebuffer FTW",
										"Window events rigged",
									],
									cons: [
										"In development",
										"Broken on your machine",
									],
									configMD:
										'\n```json\n"tauri": {\n  "embeddedServer": {\n    "active": false               // do not use a localhost server\n  },\n  "whitelist": {                  // all API endpoints are default false\n    "all": false,                 // disable the api\n  },\n  "window": {                     // not yet normative\n    "glutin": true,\n    "webview": false\n  }\n}\n```\n          ',
									graph: "graph TD\n          A==>H\n          H==>G\n          A--\x3eD\n          D--\x3eG\n\n          subgraph GLUTIN\n          G\n          end\n\n          subgraph RUST\n          A\n          end\n\n          A[Binary]\n          D(Framebuffer)\n          G[GL Window]\n          H{Bootstrap}\n          style GLUTIN stroke:"
										.concat(
											i.blue.dark,
											",stroke-width:4px\n          style RUST fill:",
										)
										.concat(i.yellow.light, ",stroke:")
										.concat(
											i.yellow.dark,
											",stroke-width:4px",
										),
								},
							],
						};
					},
					watch: {
						pattern: {
							handler: function (e, t) {
								(t = t || "none"), (e = e || "none");
								var n = this.patterns.find(function (t) {
									return t.name === e;
								});
								"undefined" !== typeof n &&
									this.goMermaid(n.graph);
							},
							immediate: !0,
						},
					},
					computed: {
						graphOrientation: function () {
							return this.$q.screen.lt.md ? "TD" : "LR";
						},
						toc: {
							get: function () {
								return this.$store.state.common.toc;
							},
							set: function (e) {
								this.$store.commit("common/toc", e);
							},
						},
						active: {
							get: function () {
								var e = this;
								return this.patterns.find(function (t) {
									return t.name === e.pattern;
								});
							},
						},
					},
					mounted: function () {
						var e = this;
						setTimeout(function () {
							e.onToc(e.toc);
						}, 50);
					},
					methods: {
						onToc: function (e) {
							var t = [];
							t.push({
								id: "overview",
								label: "Overview",
								level: 1,
								children: Array(0),
							}),
								t.push({
									id: "flowchart",
									label: "Flowchart",
									level: 1,
									children: Array(0),
								}),
								t.push({
									id: "configuration",
									label: "Configuration",
									level: 1,
									children: Array(0),
								}),
								(this.toc = t);
						},
						goMermaid: function (e) {
							var t = this;
							"undefined" !== typeof window &&
								((this.graph = null),
								this.$nextTick(function () {
									t.graph = t.$mermaid.render("mermaid", e);
								}));
						},
					},
				},
				o = r,
				l = (n("d867"), n("2877")),
				c = n("eebe"),
				d = n.n(c),
				u = n("f09f"),
				h = n("a370"),
				p = n("9c40"),
				f = n("eb85"),
				w = n("daf4"),
				m = n("d08c"),
				g = Object(l["a"])(o, a, s, !1, null, null, null);
			t["default"] = g.exports;
			d()(g, "components", {
				QCard: u["a"],
				QCardSection: h["a"],
				QBtn: p["a"],
				QSeparator: f["a"],
				QRating: w["a"],
				QNoSsr: m["a"],
			});
		},
		cdfe: function (e, t, n) {},
		d867: function (e, t, n) {
			"use strict";
			var a = n("cdfe"),
				s = n.n(a);
			s.a;
		},
	},
]);
