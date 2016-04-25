# react-pocs
A collection of POCs, Samples code, created by PT. Mitrais CDC Mobile's Software Engineers (www.mitrais.com)

###HOW TO - Get the samples into your local machine & setup your machine before running the samples.
1. Ensure that you have setup `nodejs` & `git` client in your machine.
2. Ensure that you have setup `react-native-cli` in your machine. If not run this command to install it `sudo npm install -g react-native-cli`.
3. Open a terminal window and run this command `git clone https://github.com/mitrais-cdc-mobile/react-pocs.git` to pull whole POC project files into your machine.
4. Change directory to the POC project folder you want to run.
5. Run this command to install `react-native` library in the POC Project `npm install react-native@^<LATESTVERSIONOFRN>` where <LATESTVERSIONOFRN> can be replaced with version you could look in this following link: https://facebook.github.io/react-native/versions.html
   example: if the latest version of RN is 0.24.1 then the npm command should be `npm install react-native@^0.24.1`
6. Follow the steps in next sections based on mobile platform you intend to run the sample to.

### HOW TO - Run the samples on Android
1. Ensure that you have installed android SDK in your machine and these correct components have been installed:
   - Tools: Android SDK Tools, Android SDK Platform-tools, Android SDK Build-tools (All versions)
   - API 23, 22, 21, 20, 19: SDK Platofrm
   - Extras: Android Support Repository, Android Support Library, Google Play Services, Intel x86 HAXM Installer.
2. Ensure that you have setup ANDROID_HOME environment variable which points to correct android sdk's path. 
3. Back to your POC project in terminal window, change directory to `./android` subfolder. 
4. Run this command to change the `gradlew` file become executable: `chmod 755`.
5. Run this command to install required dependencies by the android app: `gradlew InstallDebug`. The process will take a while to finish.
6. Change directory to the POC Project's root directory then run `npm start`
7. Open a new terminal which still point to the POC Project's root directory then run `react-native run-android` command.

### HOW TO - RUn the samples on iOS
1. Run this command to clean up the contents of ios build directory: `rm -rf ios/build/**`
2. Run `npm start` command. This will run react native's packager server.
3. Open a new terminal which still point to the POC Project's root directory then run `react-native run-ios` command.
