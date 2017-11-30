const assert = require('assert');
const wd = require('wd');

const CONFIG = {
  SERVER: {
    host: 'localhost',
    port: 4723,
  },
  DEVICE: {
    platformName: 'Android',
    platformVersion: '8.0',
    deviceName: 'Android Emulator',
    app: `${__dirname}/../../android/app/build/outputs/apk/app-debug.apk`,
  },
}
Object.freeze(CONFIG)

describe('appium', () => {
    let driver
  let allArePassed = true

  before(function () {
    driver = wd.promiseChainRemote(CONFIG.SERVER)
    addEventListenersTo(driver)
    return driver.init(CONFIG.DEVICE)
  })

  after(function () {
    driver.quit()
  })

  afterEach(function () {
    allArePassed = allArePassed && this.currentTest.state === 'passed'
  })

  it('ページ遷移', () => {
    tap('go_to_sampleb')
  })
})

function addEventListenersTo(driver) {
  driver.on('status', info => console.log(info))
  driver.on('command', (command, method, data) => console.log(command, method, data || ''))
  driver.on('http', (method, path, data) => console.log(method, path, data || ''))
}
