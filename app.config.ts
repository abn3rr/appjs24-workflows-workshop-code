import 'ts-node/register';
import { ExpoConfig } from 'expo/config';

const IS_DEV = process.env.APP_VARIANT === 'development';

module.exports = ({ config } : { config: ExpoConfig }) => {
  return {
    "expo": {
      name: IS_DEV ? "Art Museum (Dev)" : "Art Museum",
      "slug": "appjs24-workflows-workshop-code",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/images/icon.png",
      "scheme": "myapp",
      "userInterfaceStyle": "automatic",
      "splash": {
        "image": "./assets/images/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#ffffff"
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "supportsTablet": true,
        bundleIdentifier: "com.expo.appjs24-abnerr" + (IS_DEV ? "-dev" : ""),
      },
      "android": {
        "adaptiveIcon": {
          "foregroundImage": "./assets/images/adaptive-icon.png",
          "backgroundColor": "#ffffff"
        },
        package: "com.expo.appjs24abnerr" + (IS_DEV ? "dev" : ""),
      },
      "web": {
        "bundler": "metro",
        "favicon": "./assets/images/favicon.png"
      },
      "plugins": [
        [
          "expo-router"
        ],
        [
          "expo-quick-actions",
          {
            androidIcons: {
              fav_icon: {
                foregroundImage: "./assets/images/adaptive-icon.png",
                backgroundColor: "#29cfc1",
              },
            },
            iosIcons: {
              fav_icon: "./assets/images/favicon.png",
            },
            iosActions: [
              {
                title: "Visit the museum",
                subtitle: "Plan your next trip",
                icon: "location",
                id: "0",
                params: { href: "/visit" },
              }
            ]
          },
        ],
        ["./plugins/withWidget.ts"],
      ],
      "experiments": {
        "typedRoutes": true
      },
      "runtimeVersion": {
        "policy": "appVersion"
      },
      "extra": {
        "router": {
          "origin": false
        },
        "eas": {
          "projectId": "5fdd3d66-8624-4c9e-b704-c0fa4a1e4616"
        }
      },
      "owner": "abnerr",
      "updates": {
        "url": "https://u.expo.dev/5fdd3d66-8624-4c9e-b704-c0fa4a1e4616"
      }
    }
  }
}
