[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
# adkit-install-apk-tutorial
Tutorial for installing apk on android device using adbkit

## apk file in url
Specifying the url of the apk file to install on the connected device.
```
return client.install(device.id, new Readable().wrap(request('https://gitlab.com/sakarsh/gitlab-ci-android/-/jobs/31927817/artifacts/raw/app/build/outputs/apk/app-debug.apk')))
```

## apk file in local storage
Specify the location of the apk file to instal on the connected device.
```
return client.install(device.id, 'debug.apk')
```

### Credits
This project uses Open Source components. You can find the source code of their open source projects along with license information below. We acknowledge and are grateful to these developers for their contributions to open source.
* Project: [adbkit](https://github.com/openstf/adbkit)
  
  Author: [9+ contributors](https://github.com/openstf/adbkit/graphs/contributors)

  License: [Apache-2.0](https://github.com/openstf/adbkit/blob/master/LICENSE)