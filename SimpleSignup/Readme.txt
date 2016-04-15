Created by : Mohammad Zulfikar Reza Mufti

Must edit these files to run in your local PC :
- gradle.properties :
	edit this line (Depend on your local proxy setting):
	systemProp.http.proxyHost=proxyHost
	systemProp.http.proxyPort=proxyPort
	systemProp.https.proxyHost=proxyHost
	systemProp.https.proxyPort=proxyPort
- local.properties :
	editthis line (Depend on where android SDK location is) :
	sdk.dir = C\:\\Users\\USERNAME\\AppData\\Local\\Android\\sdk