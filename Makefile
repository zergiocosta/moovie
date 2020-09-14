# -- UTILS --------------------------------------

DONE  = \033[32m✔\033[32m
ERROR = \033[31m✖\033[31m
INFO  = \033[36m→\033[36m
LINE  = -----------------------------------------


# -- TASK ---------------------------------------
# -- Pass: raspemania
# keytool -genkey -v -keystore raspemania.jks -keyalg RSA -keysize 2048 -validity 10000 -alias raspemania

run-android:
	@echo " $(INFO) Rodando no dispositivo Android"
	@npx react-native run-android

run-ios:
	@echo " $(INFO) Rodando no dispositivo iOS"
	@npx react-native run-ios