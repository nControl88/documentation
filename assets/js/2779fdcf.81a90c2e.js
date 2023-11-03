"use strict";(self.webpackChunk_0_l_documentation=self.webpackChunk_0_l_documentation||[]).push([[5551],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||n;return a?o.createElement(m,i(i({ref:t},d),{},{components:a})):o.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<n;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4694:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var o=a(7462),r=(a(7294),a(3905));const n={sidebar_position:5,sidebar_label:"Hot Upgrades",description:"Upgrading Framework Libraries"},i="Network Hot Upgrades",l={unversionedId:"validators/hot-upgrades",id:"validators/hot-upgrades",title:"Network Hot Upgrades",description:"Upgrading Framework Libraries",source:"@site/docs/validators/hot-upgrades.md",sourceDirName:"validators",slug:"/validators/hot-upgrades",permalink:"/documentation/validators/hot-upgrades",draft:!1,editUrl:"https://github.com/0LNetworkCommunity/documentation/edit/main/docs/validators/hot-upgrades.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Hot Upgrades",description:"Upgrading Framework Libraries"},sidebar:"tutorialSidebar",previous:{title:"Genesis",permalink:"/documentation/validators/genesis"},next:{title:"YAML Templates",permalink:"/documentation/category/yaml-templates"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Procedure",id:"procedure",level:2},{value:"Build Artifacts",id:"build-artifacts",level:4},{value:"1. Build the upgrade Move transaction scripts",id:"1-build-the-upgrade-move-transaction-scripts",level:5},{value:"3. Share the output artifacts on Github.",id:"3-share-the-output-artifacts-on-github",level:5},{value:"Upgrade Ceremony",id:"upgrade-ceremony",level:3},{value:"4. With <code>txs</code> anyone (no authority needed) can submit the proposal and metadata. You&#39;ll need to provide the actual script compiled path, and an optional URL which contains documentation of the proposal (e.g github).",id:"4-with-txs-anyone-no-authority-needed-can-submit-the-proposal-and-metadata-youll-need-to-provide-the-actual-script-compiled-path-and-an-optional-url-which-contains-documentation-of-the-proposal-eg-github",level:5},{value:"5. With <code>libra txs</code> anyone with governance authority (the epoch&#39;s validators as of <code>V7</code>), can submit a vote in favor (or against it with <code>--should-fail</code>).",id:"5-with-libra-txs-anyone-with-governance-authority-the-epochs-validators-as-of-v7-can-submit-a-vote-in-favor-or-against-it-with---should-fail",level:5},{value:"6. Use <code>txs</code> to resolve a successfully approved proposal",id:"6-use-txs-to-resolve-a-successfully-approved-proposal",level:5}],d={toc:p},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"network-hot-upgrades"},"Network Hot Upgrades"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,'The "framework" which contains all the consensus, account, econ policies, etc. for the network is written in Move. This code is stored in the network database, and effectively executed on demand. This means that framework upgrades can occur without redeploying the Move VM itself, or the supporting system code (network node software). It also means the state machine can upgrade without a coordinated halt.\nTo do this we require two libra tools: ',(0,r.kt)("inlineCode",{parentName:"p"},"framework")," for building the artifacts, and ",(0,r.kt)("inlineCode",{parentName:"p"},"txs")," for proposing, voting, and ultimately deploying the artifacts."),(0,r.kt)("h2",{id:"procedure"},"Procedure"),(0,r.kt)("h4",{id:"build-artifacts"},"Build Artifacts"),(0,r.kt)("h5",{id:"1-build-the-upgrade-move-transaction-scripts"},"1. Build the upgrade Move transaction scripts"),(0,r.kt)("p",null,"This will be a Move package which is machine-generated for a one-time execution. It contains bytecode which will be allowed to be executed (by anyone), once there is a vote and agreement on the proposal passing. The on-chain execution is guarded a hash of this transction, which the proposer provides in the proposal transaction (in advance of the vote)."),(0,r.kt)("p",null,"An upgrade script that is tampered with will yield a different execution hash, and will be prevented from running (it is likely to be blocked by the transaction size limits before entering the mempool)."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"framework upgrade")," command will produce a newly compiled Move upgrade transaction script, its binary, and the hash."),(0,r.kt)("p",null,"You need to provide:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--output-dir"),": this directory the upgrade transaction files should be saved to. A new folder called ",(0,r.kt)("inlineCode",{parentName:"p"},"framework_upgrade")," will be created under the output-dir path.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"--framework-local-dir"),": the source code for the framework so that the transaction script can import it as a dependency."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# At the moment this uses libra-framework that is built and stored in /libra-framework/target/release after compiling libra package\n# Note the paths\nlibra-framework  upgrade --output-dir /your/update/dir/ --framework-local-dir /path/to/the/built/framework\n\n# Example\nlibra-framework  upgrade --output-dir framework_upgrade --framework-local-dir /home/ubuntu/libra-framework/framework/\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This creates 3 seperate library upgrade script directories"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"1-move-stdlib"),(0,r.kt)("li",{parentName:"ul"},"2-vendor-stdlib"),(0,r.kt)("li",{parentName:"ul"},"3-libra-framework")),(0,r.kt)("p",{parentName:"admonition"},"You will choose depending on which library you want updated")),(0,r.kt)("p",null,"All the artifacts are now created, the proposal transaction can be submitted. But it's a good idea to document this on github first."),(0,r.kt)("h5",{id:"3-share-the-output-artifacts-on-github"},"3. Share the output artifacts on Github."),(0,r.kt)("p",null,"Create a new repository with the outputted directory. Add a README.md file."),(0,r.kt)("p",null,"The proposer can add the link to this Github repo in the proposal phase."),(0,r.kt)("h3",{id:"upgrade-ceremony"},"Upgrade Ceremony"),(0,r.kt)("h5",{id:"4-with-txs-anyone-no-authority-needed-can-submit-the-proposal-and-metadata-youll-need-to-provide-the-actual-script-compiled-path-and-an-optional-url-which-contains-documentation-of-the-proposal-eg-github"},"4. With ",(0,r.kt)("inlineCode",{parentName:"h5"},"txs")," anyone (no authority needed) can submit the proposal and metadata. You'll need to provide the actual script compiled path, and an optional URL which contains documentation of the proposal (e.g github)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# note the actual script dir\nlibra txs upgrade propose --proposal-script-dir /path/to/your/built/scripts --metadata-url https://www.urltoshowproposalinformation.com\n\n# Example\nlibra txs upgrade propose --proposal-script-dir /home/ubuntu/libra-framework/target/release/framework_upgrade/3-libra-framework/ --metadata-url https://www.github.com/0LNetworkCommunity/UpdateProposalTemplate\n\n")),(0,r.kt)("p",null,"If this transaction succeeds it will produce a proposal id, which is a number. Now the proposal is open to voting."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can query the next proposal using this command: ",(0,r.kt)("inlineCode",{parentName:"p"}," libra query view --function-id 0x1::diem_governance::get_next_governance_proposal_id"))),(0,r.kt)("h5",{id:"5-with-libra-txs-anyone-with-governance-authority-the-epochs-validators-as-of-v7-can-submit-a-vote-in-favor-or-against-it-with---should-fail"},"5. With ",(0,r.kt)("inlineCode",{parentName:"h5"},"libra txs")," anyone with governance authority (the epoch's validators as of ",(0,r.kt)("inlineCode",{parentName:"h5"},"V7"),"), can submit a vote in favor (or against it with ",(0,r.kt)("inlineCode",{parentName:"h5"},"--should-fail"),")."),(0,r.kt)("p",null,'We assume the default is to vote in favor. To vote "approve" simply:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"txs vote --proposal-id <number>\n")),(0,r.kt)("p",null,"If voter would like the proposal to be rejected:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"txs vote --proposal-id <number> --should-fail\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can query to see the for and against votes using this command: ",(0,r.kt)("inlineCode",{parentName:"p"}," libra query view --function-id 0x1::diem_governance::get_votes --args <the proposal number>"))),(0,r.kt)("p",null,"After everyone has voted (to reach the consensus threshold of 66% as of  ",(0,r.kt)("inlineCode",{parentName:"p"},"V7"),'), the proposal will be in a "Resolvable" state. Anyone can resolve it by submitting the upgrade transaction. This means the sender must have the source transaction script for the upgrade (step #2 above).'),(0,r.kt)("h5",{id:"6-use-txs-to-resolve-a-successfully-approved-proposal"},"6. Use ",(0,r.kt)("inlineCode",{parentName:"h5"},"txs")," to resolve a successfully approved proposal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Note the actual path\nlibra txs upgrade resolve --proposal-script-dir ./framework/release/framework_upgrade --proposal-id <the proposal id>\n\n# Example \nlibra txs upgrade resolve --proposal-script-dir /home/ubuntu/libra-framework/target/release/new-upgrade/3-libra-framework/ --proposal-id 0\n")),(0,r.kt)("p",null,"If this transction is successful the new bytecode will be written to the VM, and a new epoch will be triggered."))}c.isMDXComponent=!0}}]);