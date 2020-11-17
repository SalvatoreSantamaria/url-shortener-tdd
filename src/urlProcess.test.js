import { expect } from 'chai'
const UrlProcess = require('./urlProcess');

describe('Running the urlProcesser', () => {
  it ("should run tests", () => {
    const urlProcess = new UrlProcess()
  })

  it ("Url.shortener should return a URL", () => {
    const urlProcess = new UrlProcess()
    let actual = urlProcess.shortener('www.test.com')
    expect(actual).to.deep.equal("http://somecompany")
  })
})

