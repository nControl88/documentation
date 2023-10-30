"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[77],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),g=r,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||a;return n?i.createElement(d,o(o({ref:t},p),{},{components:n})):i.createElement(d,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const a={sidebar_position:3},o="Libra Genesis Tool",l={unversionedId:"Tools/genesis",id:"Tools/genesis",title:"Libra Genesis Tool",description:"Description",source:"@site/docs/Tools/genesis.md",sourceDirName:"Tools",slug:"/Tools/genesis",permalink:"/documentation/Tools/genesis",draft:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/Tools/genesis.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Txs - Validator",permalink:"/documentation/Tools/txs/validator"},next:{title:"Wallet",permalink:"/documentation/Tools/wallet"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Important Note",id:"important-note",level:3},{value:"How to Use the CLI Tool",id:"how-to-use-the-cli-tool",level:2},{value:"Genesis",id:"genesis",level:3},{value:"Register",id:"register",level:3},{value:"Wizard",id:"wizard",level:3}],p={toc:u},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"libra-genesis-tool"},"Libra Genesis Tool"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The Genesis tool within the Libra framework serves as a foundational utility for initializing and configuring the state of the Libra blockchain. It facilitates the creation of the genesis block \u2014 the very first block in the blockchain \u2014 and sets up various initial parameters and configurations for the network."),(0,r.kt)("p",null,"This tool is crucial for setting up a new Libra blockchain network or resetting an existing network to a new initial state. It's particularly useful for testnets, development environments, and initializing mainnet configurations."),(0,r.kt)("h3",{id:"important-note"},"Important Note"),(0,r.kt)("p",null,"This package is built separately from the main Libra CLI tool. As per its ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),", it is compiled as ",(0,r.kt)("inlineCode",{parentName:"p"},"libra-genesis-tools"),". To build the tool, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cargo build --package libra-genesis-tools\n")),(0,r.kt)("h2",{id:"how-to-use-the-cli-tool"},"How to Use the CLI Tool"),(0,r.kt)("p",null,"The Genesis tool CLI offers a user-friendly command-line interface for initiating and configuring the Libra blockchain. It's centered around three primary commands:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You need a Github Auth Token and the cli searches in ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.libra/github_token.txt")," for it but you can also specify a path. More info ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/rest/repos/contents#create-or-update-file-contents"},"here"))),(0,r.kt)("h3",{id:"genesis"},"Genesis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose"),": Initializes the genesis block with specified configurations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key Features"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GitHub integration for managing configurations and data."),(0,r.kt)("li",{parentName:"ul"},"Supply settings for initial token distribution and asset management."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Syntax"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"libra-genesis-tools genesis --token-github <path/to/token> --org-github <ORG> --name-github <REPO_NAME> [--local-framework] [--json-legacy <PATH>] [--target-supply <TARGET_SUPPLY>] [--target-future-uses <TARGET_FUTURE_USES>] [--years-escrow <YEARS_ESCROW>] [--map-dd-to-slow <MAP_DD_TO_SLOW>]")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Function"),": Initializes the genesis block using GitHub-based configurations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"    cargo r -- genesis --org-github OLNetworkCommunity \\\n--name-github genesis-repo \\\n--local-framework \\\n--json-legacy ./tests/fixtures/recovery.json \\\n--target-supply 10000000 \\\n--target-future-uses 0.7 \\\n--years-escrow 7 \\\n--map-dd-to-slow 3A6C51A0B786D644590E8A21591FA8E2 \\\n--map-dd-to-slow  2B0E8325DEA5BE93D856CFDE2D0CBA12\n")))),(0,r.kt)("h3",{id:"register"},"Register"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose"),": Manages registration processes, focusing mainly on GitHub interactions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key Features"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Facilitates GitHub-based configurations and data retrieval for the blockchain setup."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Syntax"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"libra-genesis-tools register --token-github <path/to/token> --org_github <ORG> --name_github <REPO_NAME>")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Function"),": Registers GitHub repositories and settings for blockchain setup."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"libra-genesis-tools register  --org_github libra --name_github registry\n")))),(0,r.kt)("h3",{id:"wizard"},"Wizard"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Purpose"),": Provides a guided, interactive setup process for initializing the genesis block and related configurations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Key Features"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"User-friendly interface for blockchain configuration."),(0,r.kt)("li",{parentName:"ul"},"Combines GitHub integration and supply settings in an interactive setup."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Syntax"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"libra-genesis-tools wizard --token-github <path/to/token> --org_github <ORG> --name_github <REPO_NAME> --local_framework")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Function"),": Guides the user through an interactive process for setting up the genesis block and related configurations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example"),":",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"libra-genesis-tools wizard  --org_github libra --name_github setup --local_framework\n")))),(0,r.kt)("hr",null))}m.isMDXComponent=!0}}]);