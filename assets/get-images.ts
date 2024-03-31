import fs from "fs";

const getFilesInDirectory = async (
  directoryPath: string | undefined
): Promise<string[]> => {
  try {
    if (!directoryPath) return [];

    const p = "./public/companies-images/" + directoryPath;

    const files = await fs.promises.readdir(p);

    return files.map((item) => `/companies-images/${directoryPath}/${item}`);
  } catch (error) {
    return ["Error fetching data!"];
  }
};

export { getFilesInDirectory };
