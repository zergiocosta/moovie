# -- UTILS ------------------------
INFO  = \033[36m→\033[36m
LINE  = ---------------------------

# -- GENERATE KEYSTORE ------------
# -- Pass: moovie
# keytool -genkeypair -v -keystore moovie.keystore -alias moovie -keyalg RSA -keysize 2048 -validity 10000

run-android:
	@echo " $(INFO) Running on Android"
	@npx react-native run-android

run-android-release:
	@echo " $(INFO) Running Android release build"
	@npx npx react-native run-android --variant=release

build-android:
	@echo " $(INFO) Building Android release binary"
	@cd android && ./gradlew assembleRelease

run-ios:
	@echo " $(INFO) Running on iOS"
	@npx react-native run-ios

build-ios:
	@echo " $(INFO) Building iOS release binary"
	@npx react-native bundle --entry-file index.js --platform ios --dev false --bundle-output ios/main.jsbundle --assets-dest ios
