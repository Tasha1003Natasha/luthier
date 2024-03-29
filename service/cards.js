const KEY = process.env.API_KEY;

const folderIdCustom = "1OvbVnZBVRCGDT8sbRXDdP9WZ12usHtca";
const folderIdRestoration = "1wmEc_9yIGa2dhse9aCL03UkTI6_5Z1CD";

export const getCustomCards = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v2/files?q='${folderIdCustom}'+in+parents&key=${KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from Google Drive:", error);
    throw new Error("Error fetching data from Google Drive");
  }
};

export const getRestorationCards = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v2/files?q='${folderIdRestoration}'+in+parents&key=${KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch photos");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from Google Drive:", error);
    throw new Error("Error fetching data from Google Drive");
  }
};
