let state = [
  {
    name: "大日本帝国",
    alive: true
  },
  {
    name: "世界政府",
    alive: true
  },
  {
    name: "ソビエト社会主義共和国連邦",
    alive: true
  },
  {
    name: "ゲルマン帝国",
    alive: true
  },
  {
    name: "へチョンへチョン国",
    alive: true
  },
  {
    name: "Ash's Republic",
    alive: true
  },
  {
    name: "ジュピター",
    alive: false
  }
]
let c = 0
setInterval(()=>{
  let i = state[c]
  $("#states").append(`<div id="st${c}" style="display: none;" class="${i.alive ? "alive" : "inalive"}"><p style="display: table-cell; vertical-align: middle;">${i.name}</p></div>`)
  $("#st"+c).fadeIn(500);
  c++
}, 500)
