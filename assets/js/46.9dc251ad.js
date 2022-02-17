(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{489:function(e,t,n){"use strict";n.r(t);var a=n(8),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"performance-profiling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#performance-profiling"}},[e._v("#")]),e._v(" Performance & Profiling")]),e._v(" "),n("h2",{attrs:{id:"profiling-with-pprof"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#profiling-with-pprof"}},[e._v("#")]),e._v(" Profiling with pprof")]),e._v(" "),n("ol",[n("li",[e._v("Query the pprof cpu endpoint on the node host:\n"),n("ul",[n("li",[n("strong",[e._v("CPU")]),e._v(": "),n("code",[e._v("curl -X GET localhost:6060/debug/pprof/profile?seconds=<number> > <filename>")])]),e._v(" "),n("li",[n("strong",[e._v("Heap")]),e._v(": "),n("code",[e._v("curl -X GET localhost:6060/debug/pprof/heap?seconds=<number> > <filename>")])]),e._v(" "),n("li",[e._v("can query from your local machine by substituting localhost with the IP of the node, depending on your network setup. By doing this, can skip step 2.")])])]),e._v(" "),n("li",[e._v("If querying on the node host, SCP the file to yourself: "),n("code",[e._v("scp <filename> <user>@<host>:<path>")]),e._v(" "),n("ul",[n("li",[e._v("E.g. "),n("code",[e._v("scp <filename> root@143.182.133.71:/home/roman/osmosis/pprof")])]),e._v(" "),n("li",[e._v("ensure that your ISP or firewall is not blocking the file transfer")])])]),e._v(" "),n("li",[e._v("Run a web server and open up a browser"),n("code",[e._v("go tool pprof -http=localhost:8080 <filename>")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("graphviz")]),e._v(" must be installed")])])])]),e._v(" "),n("h3",{attrs:{id:"useful-links"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useful-links"}},[e._v("#")]),e._v(" Useful links")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://pkg.go.dev/net/http/pprof",target:"_blank",rel:"noopener noreferrer"}},[e._v("Pprof Doc"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://graphviz.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Graphviz Download"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://linuxize.com/post/how-to-use-scp-command-to-securely-transfer-files/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using SCP"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://www.youtube.com/watch?v=xxDZuPEgbBU",target:"_blank",rel:"noopener noreferrer"}},[e._v("Advanced Go Profiling Talk (YouTube)"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/bradfitz/talk-yapc-asia-2015/blob/master/talk.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("Notes from the talk above"),n("OutboundLink")],1)])]),e._v(" "),n("h2",{attrs:{id:"benchmarking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#benchmarking"}},[e._v("#")]),e._v(" Benchmarking")]),e._v(" "),n("h3",{attrs:{id:"best-practices"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#best-practices"}},[e._v("#")]),e._v(" Best practices")]),e._v(" "),n("ul",[n("li",[e._v("Running the benchmarks on an idle machine not running on battery")]),e._v(" "),n("li",[e._v("Use "),n("code",[e._v("-benchmem")]),e._v(" to also get stats on allocated objects and space")]),e._v(" "),n("li",[e._v("Use "),n("code",[e._v("benchstat")]),e._v(" to compare performance across different git branches")]),e._v(" "),n("li",[e._v("Adding -run='$^' or -run=- to each go test command to avoid running the tests too")])]),e._v(" "),n("p",[e._v("Benchstat sample output for illustration:")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("name                old time/op    new time/op    delta\nDecode-4               2.20s ± 0%     1.54s ± 0%   ~     (p=1.000 n=1+1)\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br")])]),n("p",[e._v("For benchstat specifically:")]),e._v(" "),n("ul",[n("li",[e._v("Using higher -count values if the benchmark numbers aren't stable\n"),n("ul",[n("li",[e._v("if you don't, your sample size would be too small and "),n("code",[e._v("delta")]),e._v(" might not be reported (like in example above) because it is not significant enough.")]),e._v(" "),n("li",[e._v("if you do, might take longer since you need multiple runs to get a good sample size")]),e._v(" "),n("li",[e._v("people recommend 5 as a good enough sample size")])])])]),e._v(" "),n("p",[e._v("Adding -run='$^' or -run=- to each go test command to avoid running the tests too")]),e._v(" "),n("h3",{attrs:{id:"example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),n("p",[e._v("Let's assume that we are working on branch "),n("code",[e._v("osmosis/string")]),e._v(" and added some performance improvements to "),n("code",[e._v("tree.String()")]),e._v(".")]),e._v(" "),n("p",[e._v("As a result, we would like to bench test like in "),n("a",{attrs:{href:"https://github.com/osmosis-labs/iavl/blob/141d98dba805ca1960160b1ec98c6f243792e25c/nodedb_test.go#L33-L46",target:"_blank",rel:"noopener noreferrer"}},[e._v("the following"),n("OutboundLink")],1),e._v(" in iavl.")]),e._v(" "),n("p",[e._v("To get a nice bench summary we would follow these steps:")]),e._v(" "),n("ol",[n("li",[e._v("Checkout the "),n("code",[e._v("master")]),e._v(" branch and get the output of the benchmark:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git checkout master\n\ngo test -benchmem -run=^$ -bench ^BenchmarkTreeString$ -benchmem -count 5 github.com/cosmos/iavl > bench_string_old.txt\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("ol",{attrs:{start:"2"}},[n("li",[e._v("Checkout our "),n("code",[e._v("osmosis/string")]),e._v(" branch and get the output of the benchmark:")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("git checkout master\n\ngo test -benchmem -run=^$ -bench ^BenchmarkTreeString$ -benchmem -count 5 github.com/cosmos/iavl > bench_string_new.txt\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br")])]),n("ol",{attrs:{start:"3"}},[n("li",[e._v("Compare the two outputs with "),n("code",[e._v("benchstat")]),e._v(":")])]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("benchstat bench_string_old.txt bench_string_new.txt\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br")])]),n("ol",{attrs:{start:"4"}},[n("li",[e._v("Evaluate the output and attach to your PR, if needed")])]),e._v(" "),n("h3",{attrs:{id:"useful-links-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#useful-links-2"}},[e._v("#")]),e._v(" Useful links:")]),e._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://pkg.go.dev/golang.org/x/perf/cmd/benchstat",target:"_blank",rel:"noopener noreferrer"}},[e._v("Benchstat Doc"),n("OutboundLink")],1)]),e._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/golang/go/issues/23471",target:"_blank",rel:"noopener noreferrer"}},[e._v("Tips for Newcomers"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=r.exports}}]);