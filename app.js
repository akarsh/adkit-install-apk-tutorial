// bluebird library https://www.npmjs.com/package/bluebird
var Promise = require('bluebird')
// adbkit library is a nodejs client for adb https://www.npmjs.com/package/adbkit
var adb = require('adbkit')
// request library to make http calls https://www.npmjs.com/package/request
var request = require('request')
// stream library https://www.npmjs.com/package/stream
var Readable = require('stream').Readable
var client = adb.createClient()

client.listDevices()
  .then(function(devices) {
    return Promise.map(devices, function(device) {
      // install the apk on the android device https://github.com/openstf/adbkit#clientinstallserial-apk-callback
      return client.install(device.id, new Readable().wrap(request('https://gitlab.com/sakarsh/gitlab-ci-android/-/jobs/31927817/artifacts/raw/app/build/outputs/apk/app-debug.apk')))
    })
  })
  .then(function() {
    console.log('Installed %s on all connected devices', new Readable().wrap(request('https://gitlab.com/sakarsh/gitlab-ci-android/-/jobs/31927817/artifacts/raw/app/build/outputs/apk/app-debug.apk')))
  })
  .catch(function(err) {
    console.error('Something went wrong:', err.stack)
  })