# -- UTILS --------------------------------------

DONE  = \033[32m✔\033[32m
ERROR = \033[31m✖\033[31m
INFO  = \033[36m→\033[36m
LINE  = -----------------------------------------


# -- TASK ---------------------------------------
# -- Pass: moovie
# keytool -genkeypair -v -keystore moovie.keystore -alias moovie -keyalg RSA -keysize 2048 -validity 10000

run-android:
	@echo " $(INFO) Running on Android"
	@npx react-native run-android

run-ios:
	@echo " $(INFO) Running on iOS"
	@npx react-native run-ios
