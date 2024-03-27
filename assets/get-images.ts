"use server";

import fs from "fs";

const getFilesInDirectory = async (
  directoryPath: string | undefined
): Promise<string[]> => {
  if (!directoryPath) return [];

  const p = "./public/companies-images/" + directoryPath;

  try {
    const files = (await fs.promises.readdir(p)).map((item) => `/companies/${directoryPath}/${item}`);
    
    return files;
  } catch (err) {
    throw err;
  }
};

export { getFilesInDirectory };
