import { expect } from 'chai'
const UrlProcess = require('./urlProcess');

describe('Running the urlProcesser', () => {
  it ("should run tests", () => {
    const urlProcess = new UrlProcess()
  })

  it ("should have a method shortener that should return a URL", () => {
    const urlProcess = new UrlProcess()
    let actual = urlProcess.shortener('www.test.com')
    expect(actual).to.deep.equal("http://somecompany1")
  })

  it ("should return a url that is unique", () => {
    const urlProcess = new UrlProcess()
    let first = urlProcess.shortener('www.test.com')
    let second = urlProcess.shortener('www.test.com')
    expect(first).to.not.equal(second)
  })

  

})

