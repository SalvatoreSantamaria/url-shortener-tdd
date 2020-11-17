class UrlProcess {
  constructor() {
    this.count = 0
  }

  shortener(url) {
    let front = "http://somecompany"
    this.count++
    return(front + this.count)
  } 
}

module.exports = UrlProcess