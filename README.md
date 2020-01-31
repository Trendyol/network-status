## Network Status
Learn device's network status.

### Install
```
npm install @trendyol/network-status
```

#### Use In Your Application
```
import { handle } from "@trendyol/network-status"
```

#### Bundle It and Use As a Script

- Clone
```
 git clone https://github.com/trendyol/network-status.git
```

- Install Dependencies
```
npm i
```

- Bundle
```
npx webpack
```

Now you can use `./dist/network.js` file as you want, for example upload it to a CDN and use it as `<script src="yourCdnPath/network.js"></script>`

The script will detect the device's network status, and set the network status as `network-status` cookie, so you can look at the cookie to determine device's network status either on client-side and server-side.

### Modules

#### Network

Network module contains helper functions to detect, store, read device's network status. We can use this information for adaptive loading.

##### Handle Function

```
import { handle } from "@trendyol/network-status"

handle();
```

Detects the device's network status and sets it as `network-status` cookie.

##### NetworkStatus Function

```
import { networkStatus } from "@trendyol/network-status"

const status = networkStatus();
```

Returns the device's network status.

##### GetNetworkStatusCookie Function

```
import { getNetworkStatusCookie } from "@trendyol/network-status"

const status = getNetworkStatusCookie();
```

Returns the `network-status` cookie.



