import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import serviceAccountKey from "../../luthier.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: serviceAccountKey.client_email,
          private_key: serviceAccountKey.private_key,
        },
        scopes: ["https://www.googleapis.com/auth/drive.readonly"],
      });
      const drive = google.drive({ version: "v3", auth });

      const response = await drive.files.list({
        pageSize: 10,
        fields: "files(id, name, webContentLink)",
      });

      res.status(200).json(response.data.files);
    } catch (error) {
      console.error("Error fetching data from Google Drive:", error);
      res.status(500).json({ error: "Error fetching data from Google Drive" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
