class UrlProcess {
  constructor() {
    this.count = 0
    this.dataBase = {}
  }

  shortener(url) {
    let front = "http://shorturl"
    this.count++
    this.dataBase[url] = (front + this.count)
    return(front + this.count)
  } 

  lengthener(url) {
    return Object.keys(this.dataBase).find((key) => this.dataBase[key] === url);
  }
}

module.exports = UrlProcess