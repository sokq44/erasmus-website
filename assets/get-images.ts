"use server";

import fs from "fs";

const getFilesInDirectory = async (
  directoryPath: string | undefined
): Promise<string[]> => {
  try {
    if (!directoryPath) return [];

    const p = "./public/companies-images/" + directoryPath;

    const files = await fs.promises.readdir(p);

    return files.map((item) => `${process.env.NEXT_PUBLIC_PAGE_URL}/companies-images/${directoryPath}/${item}`);
  } catch (error) {
    console.error("Error fetching files from directory:", error);
    return [];
  }
};

export { getFilesInDirectory };
