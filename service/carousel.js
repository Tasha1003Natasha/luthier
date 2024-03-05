////////////////////////////// Галерея на головну////////////////////////
// const folderId = "1Grga9XknheIWAXv6uAMYckHmPG9Fn4Eq";
const KEY = process.env.API_KEY;

// ////////////Test////////////////////
const folderIdDark = "1FkoaBY-CJOpZf4tEGI5I1zOaZaazvciU";
const folderIdLight = "1JFvM2_MC7uDTutH-1f5-Boz8AJppLz2T";

// export const getCarouselGallery = async () => {
//   try {
//     const response = await fetch(
//       `https://www.googleapis.com/drive/v2/files?q='${folderId}'+in+parents&key=${KEY}`
//     );

//     if (!response.ok) {
//       throw new Error("Failed to fetch photos");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error fetching data from Google Drive:", error);
//     throw new Error("Error fetching data from Google Drive");
//   }
// };
//////////////////////////////////////////////////////
export const getCarouselGalleryDark = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v2/files?q='${folderIdDark}'+in+parents&key=${KEY}`
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

export const getCarouselGalleryLight = async () => {
  try {
    const response = await fetch(
      `https://www.googleapis.com/drive/v2/files?q='${folderIdLight}'+in+parents&key=${KEY}`
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
