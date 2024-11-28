### Test Status

[![](HTTPS://img.shields.io/github/workflow/status/tauri-apps/tauri/test%20library?label=test%20library)](HTTPS://github.com/tauri-apps/tauri/actions?query=workflow%3A%22test+library%22)

### Current Versions

| Component                                                             | Language | Version                                                         |
| --------------------------------------------------------------------- | -------- | --------------------------------------------------------------- |
| [`tauri.js](HTTPS://github.com/tauri-apps/tauri/tree/dev/cli/tauri.js) | node     | ![`](HTTPS://img.shields.io/npm/v/tauri.svg)                     |
| [`tauri](HTTPS://github.com/tauri-apps/tauri/tree/dev/tauri)           | rust     | ![`](HTTPS://img.shields.io/crates/v/tauri.svg)                  |
| [`builder](HTTPS://github.com/tauri-apps/tauri/tree/dev/cli/tauri-cli) | rust     | ![`](HTTPS://img.shields.io/crates/v/tauri-cli.svg)              |
| [`vue-plugin](HTTPS://github.com/tauri-apps/vue-cli-plugin-tauri)      | vue      | ![`](HTTPS://img.shields.io/npm/v/vue-cli-plugin-tauri.svg)      |
| [`webpack](HTTPS://github.com/tauri-apps/tauri-webpack)                | webpack  | ![`](HTTPS://img.shields.io/npm/v/@tauri-apps/tauri-webpack.svg) |

### Debugging

#### \*nix

    $ cd src-tauri
    $ RUST_DEBUG=1 cargo build

OR $ tauri build --debug

#### Windows

    $ cd src-tauri
    $ set RUST_DEBUG=1
    $ cargo build
