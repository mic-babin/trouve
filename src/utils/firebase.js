import app from "gatsby-plugin-firebase-v9.0";
import { getStorage } from "firebase/storage";

export const storage = getStorage(app);
