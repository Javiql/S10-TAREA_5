// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.6/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRTOB0z-WWOrj0Dx6nmyVbCQJYjaHoEB0",
  authDomain: "fir-javascript-crud-706c8.firebaseapp.com",
  projectId: "fir-javascript-crud-706c8",
  storageBucket: "fir-javascript-crud-706c8.appspot.com",
  messagingSenderId: "289379849808",
  appId: "1:289379849808:web:3e3c380683b0722749e355",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

/**
 * Guardar nueva tarea en el Firestore
 * @param {string} title El titulo de la tarea
 * @param {string} description La descricpión de la tarea
 */
export const saveTask = (title, description) =>
  addDoc(collection(db, "tasks"), { title, description });

export const onGetTasks = (callback) =>
  onSnapshot(collection(db, "tasks"), callback);

/**
 *
 * @param {string} id Task ID
 */
export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));
export const getTask = (id) => getDoc(doc(db, "tasks", id));
export const updateTask = (id, newFields) =>
  updateDoc(doc(db, "tasks", id), newFields);
export const getTasks = () => getDocs(collection(db, "tasks"));






