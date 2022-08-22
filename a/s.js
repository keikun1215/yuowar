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
