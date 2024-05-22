import * as RNFS from "@dr.pogodin/react-native-fs";
import { Platform } from "react-native";
import IosWidgetRefresh from "@/modules/ios-widget-refresh";

// you'll find out why this is async later
async function getLatestShareFilePath() {
    if (Platform.OS === "ios") {
      return await RNFS.pathForGroup("group.appjs24-abnerr");
    }
    return `${RNFS.DocumentDirectoryPath}/latest_share.jpg`;
  }

export async function saveLatestShare(fileUri: string) {
  // copy to shared location
  const latestShareFilePath = await getLatestShareFilePath();
  // iOS can't just copy over the file :-/
  if (await RNFS.exists(latestShareFilePath)) {
    await RNFS.unlink(latestShareFilePath);
  }
  await RNFS.copyFile(fileUri, latestShareFilePath);
}

export async function readLatestShareAsBase64() {
  const latestShareFilePath = await getLatestShareFilePath();
  const imageBase64 = await RNFS.readFile(latestShareFilePath, "base64");

  return "data:image/jpg;base64," + imageBase64;
}

export async function updateWidget() {
    if (Platform.OS === "ios") {
        IosWidgetRefresh.reloadWidget();
    }
}