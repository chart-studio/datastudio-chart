import { Storage } from "@google-cloud/storage";

const bucketName = "vizdata";

export const copyFileBucket = async (
  srcBucketDirName: string,
  destBucketDirName: string
) => {
  const fileToCopy = ["index.css", "index.js", "index.json", "manifest.json"];
  // Creates a client
  const storage = new Storage();

  async function copyFile(srcFilename: string, destFileName: string) {
    // Copies the file to the other bucket
    await storage
      .bucket(bucketName)
      .file(srcBucketDirName + "/" + srcFilename)
      .copy(
        storage.bucket(bucketName).file(destBucketDirName + "/" + destFileName)
      );

    console.log(
      `gs://${bucketName}/${srcBucketDirName}/${srcFilename} copied to gs://${bucketName}/${destBucketDirName}/${destFileName}`
    );
  }

  fileToCopy.forEach(async (file) => {
    await copyFile(file, file).catch(console.error);
  });
};
