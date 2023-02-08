import { NativeModules, DeviceEventEmitter } from 'react-native'

const { ZebraScanner } = NativeModules


const BARCODE_SCANNED_EVENT = 'barcodeScanned'

let scanListeners = []


function addScanListener(callback) {

  	if(scanListeners.length > 0){
		ZebraScanner.disable()
	}

	let listenerAlreadyExists = scanListeners.some(listenerCallback => listenerCallback === callback)
	if (!listenerAlreadyExists) {
		scanListeners.push(callback)
	}
	turnScannerOnOrOff()
}

function removeScanListener() {
	if(scanListeners.length > 0){
		ZebraScanner.disable()
	}
}

function turnScannerOnOrOff() {
	if (scanListeners.length > 0) {
		ZebraScanner.enable()
	} else {
		ZebraScanner.disable()
	}
}

DeviceEventEmitter.addListener(BARCODE_SCANNED_EVENT, (barcode) => {
	scanListeners.forEach((callback) => {
		callback(barcode)
	})
})

export default {
	isAvailable: ZebraScanner.isAvailable,
	addScanListener,
	removeScanListener,
}
