### Notes from learning ReactNative
* use AsyncStorage for a local, device cache
  * this is a good practice (I think) for how the app can remember for instance that a user has already logged in, so that when the app is opened after being closed, the user is not prompted to login again.  It can also speed up development cycle on a restart...or cause problems if I want that async storage to be cleared.  Note that the values stored in this async storage are not encrypted.
* use Buffer module (somehow...) for encryption of any credentials that need to be sent over the wire
* use ActivityIndicatorIOS for the spinner for giving the user feedback on iOS that something is happening behind the scenes
* on iOS, can use the `TabBarIOS` component with `TabBarIOS.Item` children representing the actual tabs in the tab bar.
  * title prop, selected prop, icon prop, onPress prop should be specified on these tab bar ios items
