# Terrari (work-in-progress)

Terrari is a super lightweight cloud resource manager. The first version will manage WordPress(+Nginx) servers for my personal use. I'm running about 15+ WordPress websites hosted on different providers. I've always wanted to write my own manager to manage them. Later on, I will add features for managing my homelab. 

<img src="https://user-images.githubusercontent.com/4682613/223883343-1d46f00c-aed4-469c-b72b-fc2d2bf7dbf6.png" width="250px" alt="Terarri Logo - the lightweight cloud resource manager" />

Thank you Grace Ling (IG @ [candyleaf_](https://www.instagram.com/candyleaf_/?hl=en)) for letting me use this as Terrari logo!

## Features and milestones

### MileStone #1: WordPress Manager

This will allow Terrari to manage WordPress servers and DNS and more through APIs of a cloud provider. Terrari will install [Terrari WordPress Agent](https://github.com/the-watchmaker/terrari-wp-agent) on your Cloud Service providers. 

The Beta version will only support baremetal and Digtal Ocean. The next one will be AWS.


### MileStone #2: Docker Manager

A drag-and-drop cute docker manager. It must be cute. Otherwise no point.


### MileStone #3: K8s Manager

A cute drag-and-drop k8s manager. It must be cute. Otherwise no point.




---

# It's build on Tauri

Please refer to [Tauri website](https://tauri.app/v1/guides/getting-started/setup) for setting up the environment.

Stacks:
(server)
- Rust: For terarri server running alongside Tauri
- React + TypeScript + WebAssembly(Rust): for desktop app UI
- Sqlite: For desktop App DB. 
- [ViteJS](https://vitejs.dev/): Front-end code tooling
- Yarn: package manager for React/TypeScript

(agent)
- Rust: For Terarri agent. Please visit [Terrari WordPress Agent](https://github.com/the-watchmaker/terrari-wp-agent)


## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
