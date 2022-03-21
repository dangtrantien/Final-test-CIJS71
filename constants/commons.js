import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-auth.js";
import { collection, getFirestore } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-firestore.js";

export const auth = getAuth();

export const ft = getFirestore();

export const messageRef = collection(ft, "messages");