import { Storage } from "@google-cloud/storage";

const bucketName = "vizdata";

export const deleteFileBucket = async (dirToDelete: string) => {
  // Creates a client
  const storage = new Storage();
  async function deleteFileBucket(dirToDelete: string) {
    const options = {
      prefix: dirToDelete,
      delimiter: "/"
    };
    const [files] = await storage.bucket(bucketName).getFiles(options);
    files.forEach(async (file) => {
      await storage.bucket(bucketName).file(file.name).delete();
      console.log(`gs://${file.name} deleted`);
    });
  }
  await deleteFileBucket(dirToDelete).catch(console.error);
};

export const deleteFileChartByUser = async (idUser: string, chart: string) => {
  const storage = new Storage();
  const options = {
    prefix: `visualisations/prod/subsc/${idUser}/${chart}`,
    delimiter: "/"
  };
  const [files] = await storage.bucket(bucketName).getFiles(options);
  files.forEach(async (file) => {
    await storage.bucket(bucketName).file(file.name).delete();
    console.log(`gs://${file.name} deleted`);
  });
};
