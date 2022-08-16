let state = [
  {
    name: "大日本帝国",
    description: "とにかく強い、属国募集中",
    alive: true
  },
  {
    name: "世界政府",
    description: `国以外にも陣営としても機能しており、津々浦々の国が加入している。金もあり海域には昆布(現在鉱石資源と交換可)もある。`,
    alive: true
  },
  {
    name: "ソビエト社会主義共和国連邦",
    description: "なんか共産主義でやってます",
    alive: true
  },
  {
    name: "ゲルマン帝国",
    description: "ゲルマン帝国は人は少ないですが、資源はちょっとあります、島は狭いですが、食料くらいはあります。銃かえる金くらいあるし、悪くはないです。",
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
  if(!i)return
  $("#states").append(`<div onclick="$('#desc${c}').slideToggle(500)" id="st${c}" style="display: none;" class="${i.alive ? "alive" : "inalive"}"><p style="display: table-cell; vertical-align: middle;">${i.name}</p></div><div id="desc${c}" style="display:none">${i.alive ? i.description || "説明なし" : "解体済み"}</div>`)
  $("#st"+c).fadeIn(500);
  c++
}, 500)
