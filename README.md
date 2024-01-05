# react-native-zebra-scanner-v4

#Fixes: Listener / remove / Add config forced decoders / Android 11+

## Getting started

`$ yarn add react-native-zebra-scanner-v4`

## Usage
```javascript
import ZebraScanner from 'react-native-zebra-scanner';

// Check if hardware scanner is available
await ZebraScanner.isAvailable(); // true or false

// Add listener
const scanListener = (scannedCode) => {
	// scannedCode is string. '01245234562345' etc.
}
ZebraScanner.addScanListener(scanListener)
// Remove listener
ZebraScanner.removeScanListener()
```
  
