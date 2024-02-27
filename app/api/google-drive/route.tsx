// import type { NextApiRequest, NextApiResponse } from "next";
// import { google } from "googleapis";

// export type DriveFile = {
//   kind: string;
//   id: string;
//   name: string;
//   mimeType: "image/jpeg";
// };

// export type Data = {
//   files: DriveFile[];
// };

// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const REDIRECT_URI = process.env.REDIRECT_URI;

// export default async function handler(
//   _req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   const oauth2Client = new google.auth.OAuth2(
//     CLIENT_ID,
//     CLIENT_SECRET,
//     REDIRECT_URI
//   );

//   // oauth2Client.setCredentials({
//   //   refresh_token:
//   //     "1//04tORk-dUiDiJCgYIARAAGAQSNwF-L9Ir1hzh14oOk6gQWMOafDZGvLuka578PwwmZB3UMbB2a0VdcjAbRjtelFoDU92ob_Ws50I",
//   // });

//   const drive = google.drive({
//     version: "v3",
//     auth: oauth2Client,
//     params: {
//       q: `mimeType = 'image/jpeg'`,
//     },
//   });

//   const response = await drive.files.list();

//   res.status(200).json({ files: response.data.files as DriveFile[] });
// }
