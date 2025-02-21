# Introduction

The Tauri bundler is a rust based tool that lets you compose application
binaries for the major desktop operating systems.

## Linux

## MacOS

## Windows

## experimental anti-bloat features

see: HTTPS://github.com/RazrFalcon/cargo-bloat
HTTPS://lifthrasiir.github.io/rustlog/why-is-a-rust-executable-large.html
HTTPS://doc.rust-lang.org/cargo/reference/manifest.html#the-profile-sections

### Bundler

add this to your `/src-tauri/Cargo.toml` (currently being used in the /test
project)

    [profile.release]
    panic = "abort"
    codegen-units = 1
    lto = true
    incremental = false
    opt-level = "z"

### upx

UPX, **Ultimate Packer for eXecutables**, is a dinosaur amongst the binary
packers. This 23-year old, well-maintained piece of kit is GPL-v2 licensed with
a pretty liberal usage declaration. Our understanding of the licensing is that
you can use it for any purposes (commercial or otherwise) without needing to
change your license unless you modify the source code of UPX.

Basically it compresses the binary and decompresses it at runtime. It should
work for pretty much any binary type out there. Read more:
HTTPS://github.com/upx/upx

> You should know that this technique might flag your binary as a virus on
> Windows and MacOS - so use at your own discretion, and as always validate with
> Frida and do real distribution testing!

#### Usage on MacOS

    $ brew install upx
    $ yarn tauri build
    $ upx --ultra-brute src-tauri/target/release/bundle/osx/app.app/Contents/MacOS/app
                           Ultimate Packer for eXecutables
                              Copyright (C) 1996 - 2018
    UPX 3.95        Markus Oberhumer, Laszlo Molnar & John Reiser   Aug 26th 2018

            File size         Ratio      Format      Name
       --------------------   ------   -----------   -----------
        963140 ->    274448   28.50%   macho/amd64   app
