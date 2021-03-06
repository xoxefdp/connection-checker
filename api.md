<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [ConnectionChecker][1]
-   [startChecker][2]
-   [stopChecker][3]
-   [checkOnDemand][4]
-   [INTERNET_REMOTE_RESOURCE][5]
-   [REQUEST_TIMEOUT_TIME][6]
-   [REQUEST_INTERVAL_TIME][7]
-   [ConnectionEvent][8]
    -   [ON_NETWORK_CHECKING][9]
    -   [ON_NETWORK_CHANGED][10]
    -   [ON_NETWORK_CONNECTED][11]
    -   [ON_NETWORK_DISCONNECTED][12]
-   [ConnectionState][13]
    -   [CONNECTED][14]
    -   [DISCONNECTED][15]
-   [setInternetResource][16]
    -   [Parameters][17]
    -   [Examples][18]
-   [getCheckerInstance][19]
-   [getConnectionState][20]
-   [isCheckerActive][21]
-   [getFetchTimeout][22]
-   [getIntervalTime][23]
-   [getInternetResource][24]
-   [setCheckerInstance][25]
    -   [Parameters][26]
-   [setConnectionState][27]
    -   [Parameters][28]
-   [setFetchTimeout][29]
    -   [Parameters][30]
-   [setIntervalTime][31]
    -   [Parameters][32]

## ConnectionChecker

Contains the main logic part of the connection checker library.

## startChecker

Generates an instance of a ConnectionChecker which keeps executing network validations.

## stopChecker

Stops the execution of network validations and destroys active instance of ConnectionChecker.

## checkOnDemand

Creates instance of ConnectionChecker, execute a network validation once, and destroys the created instance.

## INTERNET_REMOTE_RESOURCE

Collection of remote server urls with method to request resource.

Type: [Object][33]

## REQUEST_TIMEOUT_TIME

Timeout value for fetch requests.

Type: [number][34]

## REQUEST_INTERVAL_TIME

Interval time to run fetch requests.

Type: [number][34]

## ConnectionEvent

Contains connection events

Type: [Object][33]

### ON_NETWORK_CHECKING

Checking network event name.

Type: [ConnectionEvent][35]

### ON_NETWORK_CHANGED

Changed network event name.

Type: [ConnectionEvent][35]

### ON_NETWORK_CONNECTED

Connected network event name.

Type: [ConnectionEvent][35]

### ON_NETWORK_DISCONNECTED

Disconnected network event name.

Type: [ConnectionEvent][35]

## ConnectionState

Contains connection states

Type: [Object][33]

### CONNECTED

Connected network state

Type: [ConnectionState][36]

### DISCONNECTED

Disconnected network state

Type: [ConnectionState][36]

## setInternetResource

Changes the use of default INTERNET_REMOTE_RESOURCE for user provided internet resource.

### Parameters

-   `internetResource` **([Object][33] \| [Array][37])** 

### Examples

Single internet resource case


```javascript
singleResource = {url: 'http://fakeResourceZero.com', method: 'POST'}
setInternetResource(singleResource)
```

Multiple internet resource case


```javascript
multipleResource = [
  {url: 'http://fakeResourceOne.com', method: 'GET'}
  {url: 'https://fakeResourceTwo.com', method: 'HEAD'}
]
setInternetResource(multipleResource)
```

## getCheckerInstance

Retrieves the stored ConnectionChecker instance.

Returns **([ConnectionChecker][38] \| [NULL][39])** 

## getConnectionState

Retrieves the stored network state.

Returns **([ConnectionState][36] \| [NULL][39])** 

## isCheckerActive

Checks if exist an instance of Checker class.

Returns **[boolean][40]** 

## getFetchTimeout

Retrieves \_fetchTimeout value.

Returns **[number][34]** 

## getIntervalTime

Retrieves \_intervalTime value.

Returns **[number][34]** 

## getInternetResource

Retrieves user defined internet remote resource value.

Returns **([Object][33] \| [Array][37])** 

## setCheckerInstance

Set \_checkerInstance value.

### Parameters

-   `instance` **([ConnectionChecker][38] \| [NULL][39])** 

## setConnectionState

Set \_connectionState value.

### Parameters

-   `state` **([ConnectionState][36] \| [NULL][39])** 

## setFetchTimeout

Changes request timeout time of fetchs.

### Parameters

-   `timeoutTime` **[number][34]** 

## setIntervalTime

Changes interval time to launch network checks.

### Parameters

-   `intervalTime` **[number][34]** 

[1]: #connectionchecker

[2]: #startchecker

[3]: #stopchecker

[4]: #checkondemand

[5]: #internet_remote_resource

[6]: #request_timeout_time

[7]: #request_interval_time

[8]: #connectionevent

[9]: #on_network_checking

[10]: #on_network_changed

[11]: #on_network_connected

[12]: #on_network_disconnected

[13]: #connectionstate

[14]: #connected

[15]: #disconnected

[16]: #setinternetresource

[17]: #parameters

[18]: #examples

[19]: #getcheckerinstance

[20]: #getconnectionstate

[21]: #ischeckeractive

[22]: #getfetchtimeout

[23]: #getintervaltime

[24]: #getinternetresource

[25]: #setcheckerinstance

[26]: #parameters-1

[27]: #setconnectionstate

[28]: #parameters-2

[29]: #setfetchtimeout

[30]: #parameters-3

[31]: #setintervaltime

[32]: #parameters-4

[33]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[34]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[35]: #connectionevent

[36]: #connectionstate

[37]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[38]: #connectionchecker

[39]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/null

[40]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean
