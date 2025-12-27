import repl from "node:repl"

const console = repl.start({ ignoreUndefined: true, useGlobal: true })
console.setupHistory(`${process.env.HOME}/.node_repl_history`, function () {})
