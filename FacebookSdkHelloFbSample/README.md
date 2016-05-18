HOW TO - Run React-Native FBSDK
===============================
1. Git clone this repo : https://github.com/facebook/react-native-fbsdk.git
2. Go to Sample/HelloFacebook directory, in the cloned source code's directory.
3. Edit package.json file and update the React native's verison to the latest one: ^0.25.1"
4. run `npm install` command

Run the app on Android:
-----------------------
5. Connect a real android phone into your development machine or run Android genymotion emulator.
6. Go to android folder and run this command: `./gradlew installDebug`
7. Go to project's root folder then run this command: `react-native run-android`

Run the app on iOS:
-------------------
8. Install Cocoapods through running this command: `sudo gem install cocoapods`
9. Go to iOS directory then remove the Podfile
10. Run `pod init` command
11. Edit the Podfile and then enter this:

`target 'YourApp' do
  source 'https://github.com/CocoaPods/Specs.git'
  pod 'React', :subspecs => ['Core', 'RCTImage', 'RCTNetwork', 'RCTText', 'RCTWebSocket'], :path => '../node_modules/react-native'
  pod 'react-native-fbsdkcore', :path => '../node_modules/react-native-fbsdk/iOS/core'
  pod 'react-native-fbsdklogin', :path => '../node_modules/react-native-fbsdk/iOS/login'
  pod 'react-native-fbsdkshare', :path => '../node_modules/react-native-fbsdk/iOS/share'

  pod 'FBSDKCoreKit', '~> 4.11'
  pod 'FBSDKLoginKit', '~> 4.11'
  pod 'FBSDKShareKit', '~> 4.11'
end`

12. Run `pod install --verbose` command. It might take longer like 1-2 hours to complete, if you have no cocopods master repository in your machine. 
13. Go back to project's root directory, then run `react-native run-ios`
14. Run `npm start`

 