(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
	[4],
	{
		"201d": function (e, t, n) {
			"use strict";
			var i = n("4319"),
				a = n.n(i);
			a.a;
		},
		4319: function (e, t, n) {},
		"8eb4": function (e, t, n) {
			"use strict";
			n.r(t);
			var i = function () {
					var e = this,
						t = e.$createElement,
						n = e._self._c || t;
					return n(
						"div",
						[
							n("div", {
								staticStyle: { "padding-top": "60px" },
								attrs: { id: "padding" },
							}),
							n("h5", [e._v("Introduction")]),
							n("p", [
								e._v(
									"\n      Tauri is a polyglot system for building apps. It uses NodeJS to scaffold an HTML/CSS/JS rendering Window as a User Interface that is bootstrapped and managed by Rust. The final product is a monolithic binary that can be distributed as common file-types for Windows (exe/msi), Linux (deb/appimage) and Macintosh (app/dmg).\n    ",
								),
							]),
							n("div", {
								staticClass: "text-center",
								attrs: { id: "temp" },
								domProps: { innerHTML: e._s(e.graph) },
							}),
							n(
								"q-markdown",
								{ attrs: { toc: "" }, on: { data: e.onToc } },
								[
									e._v(
										"\n\n## How it all works\n\n1. First you make an interface in your GUI framework and prepare the HTML/CSS/JS for consumption\n2. The tauri.js Node CLI takes it and rigs the rust runner according to your configuration.\n3. In dev mode it creates a webview window with debugging and hot-module-reloading.\n4. In build mode it rigs the bundler and creates a final application according to your settings.\n\n### Setting up Your Environment\nWe are assuming that you know what the command line is, how to install packages on your operating system and generally know your way around the development side of computing. Obviously, you must first make sure that all required languages / compilers are available and in your PATH. Then you globally install the Tauri CLI with your Node package manager.\n\n### Initializing an App\nThe initialization phase creates a folder and places a few template files into your project directory. The most important file that it creates is the `src-tauri/tauri.conf.json` file, as this is where you manage the configuration of your project.\n\n### Developing an App\nThere are several methods for developing an App and using the built-in development App Window. The most common is to point the Tauri configuration at a localhost port that your front-end framework's development server provides you with. If your framework doesn't provide you with this, or you like everything vanilla, then you can instruct Tauri to serve (and transpile if needed) from a relative file path. In both cases you will have HMR (Hot Module Reloading).\n\n### Making App Icons\nYour app will need icons, and Tauri also provides a command for making all the icons your app will need, no matter which platform you are using. Simply place a 1240x1240 png (with transparency) named `app-icon.png` in your project folder (where the `src-tauri/tauri.conf.json` file is to be found) and run `tauri icon`. The icons will be placed in `src-tauri/icons` and automatically consumed by Tauri during the build process.\n\n### Bundling an App\nThe basic process of building a Tauri App is very straightforward and unopinionated. In the Tauri configuration file you reference a distribution folder e.g. `../dist/spa` where your HTML, CSS, JS and other assets can be found. Then you tell the Tauri CLI to build your app. Tauri prepares your code depending upon your configuration and bundles everything up into a nice and tidy binary.\n\n::: tip\nThe first time you build a project it will take some time to collect the resources that Tauri needs from the relevant Rust Crates, but subsequent builds will be much faster.\n:::\n\n## Technical Details\n### CLI\nThe CLI is node.js based, because it is arguably the most accessible for the majority of the web-development community. Using Tauri requires the latest LTS because we track security patches.\n\n### User Interface\nThe first generation User Interface in Tauri apps leverages Cocoa/WebKit on macOS, gtk-webkit2 on Linux and MSHTML (IE10/11) or Webkit via EdgeHTML / Chakra on Windows. **Tauri** leverages the MIT licensed prior work known as [webview](https://github.com/zserge/webview) and [web-view](https://github.com/Boscop/web-view).\n\n::: warning\nWe are currently working on enabling the Web APIs and most of them may not be available on your platform.\n:::\n\n## The Templates\n\nFirst is the src-tauri/tauri.conf.json file - it is injected into the CWD at tauri init.\nThen is the src-tauri folder, which is injected into the CWD and contains the base Rust application that you can extend as you wish.\n\nThe node CLI has a bunch of \"syntactic\" sugar that sets up the dev env or prepares assets for the bundle process (as well as the tauri icon command for making icons.)\n\nThe next piece is the actual rust crate that binds web-view, constructs the webview and has the API (file read / write, etc.)\nFinallly, the bundler, which takes all the pieces and puts them together in a nice and easy to consume binary for the three 1/2 desktop OS's\n\n## Why Rust\n> Rust is blazingly fast and memory-efficient: with no runtime or garbage collector, it can power performance-critical services, run on embedded devices, and easily integrate with other languages. Rust’s rich type system and ownership model guarantee memory-safety and thread-safety — and enable you to eliminate many classes of bugs at compile-time. Rust has great documentation, a friendly compiler with useful error messages, and top-notch tooling — an integrated package manager and build tool, smart multi-editor support with auto-completion and type inspections, an auto-formatter, and more. - [https://www.rust-lang.org/](https://www.rust-lang.org/)\n\nThis combination of power, safety and usability are why we chose Rust to be the default binding for Proton. It is our intention to provide the most safe and performant native app experience (for devs and app consumers), out of the box.\n\nIf you want a deep and rather nerdy look into Rust, check out what insider Tony Arcieri has to say in his article, [Rust in 2019. Security, maturity, stability](https://tonyarcieri.com/rust-in-2019-security-maturity-stability)\n\n### Learning Rust 🦀❤️\nYou don't need to know Rust at all to use (most of) Tauri - but as with all things, the rabbit hole goes as deep as you are willing to fall into it. If you are new to Rust, then we recommend first watching this amazing playlist of tutorials from Team Member [@tensor](https://tensor-programming.com/):\n- [Intro to Rust](https://www.youtube.com/playlist?list=PLJbE2Yu2zumDF6BX6_RdPisRVHgzV02NW)\n- [Rust Projects](https://www.youtube.com/playlist?list=PLJbE2Yu2zumDD5vy2BuSHvFZU0a6RDmgb)\n\nBut if you are like us, just watching awesome people do stuff isn't enough. That's why we absolutely MUST recommend that you immediately curlbash [Rustlings](https://github.com/rust-lang/rustlings):\n```bash\ncurl -L https://git.io/rustlings | bash\n```\n\nWhy? Because it is an interactive leap into coding with Rust that forces you to solve compiler errors in order to progress in your understanding. It is addictive, so block a few hours and just do it!\n\nAt some point, learning about Rust will require a visit to the manual. Check it out:\n- [Rust 1.31.0+](https://doc.rust-lang.org/stable/book/) by Steve Klabnik & Carol Nichols\n\nAnd finally, there are a couple Rust communities on Discord that you can always fall back on if you need estra support:\n- [Rust Community Discord](https://bit.ly/rust-community)\n- [Rust Development Discord](https://discord.gg/SG3m9pk)\n    ",
									),
								],
							),
						],
						1,
					);
				},
				a = [],
				o = {
					name: "Introduction",
					data: function () {
						return { graph: "", flow: {} };
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
					},
					methods: {
						onToc: function (e) {
							this.toc = e;
						},
						goMermaid: function (e) {
							var t = this;
							(this.graph = null),
								this.$nextTick(function () {
									t.graph = t.$mermaid.render("mermaid", e);
								});
						},
					},
					mounted: function () {
						var e = this;
						this.$nextTick(function () {
							(e.flow = {
								lifecycle: "\n        graph ".concat(
									e.graphOrientation,
									"\n\n          U--\x3eJS\n          JS--\x3eB\n          B--\x3eBUILD\n          B--\x3eDEV\n          DEV==>DBG\n          BUILD--\x3eBND\n          BND==>WIN\n\n          U(HTML<BR>CSS<BR>JS)\n          JS(tauri.js)\n          style JS stroke:#77CFE4,stroke-width:4px\n          WIN[WebView<br>in container]\n          B{tauri core<br>CLI}\n          style B stroke:#D08050,stroke-width:4px\n          BND((tauri<br>bundler))\n          style BND stroke:#EFD3AF, stroke-width:4px\n          DBG[WebView:Debug<br>with HMR]\n        ",
								),
							}),
								e.goMermaid(e.flow.lifecycle);
						});
					},
				},
				r = o,
				s = (n("201d"), n("2877")),
				u = Object(s["a"])(r, i, a, !1, null, null, null);
			t["default"] = u.exports;
		},
	},
]);
