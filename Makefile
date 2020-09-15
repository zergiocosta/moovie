# -- UTILS ------------------------
INFO  = \033[36m→\033[36m
LINE  = ---------------------------

# -- GENERATE KEYSTORE ------------
# -- Pass: moovie
# keytool -genkeypair -v -keystore moovie.keystore -alias moovie -keyalg RSA -keysize 2048 -validity 10000

run-android:
	@echo " $(INFO) Running on Android"
	@npx react-native run-android

run-ios:
	@echo " $(INFO) Running on iOS"
	@npx react-native run-ios
