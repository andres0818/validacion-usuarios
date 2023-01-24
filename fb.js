import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export const app = firebase.initializeApp({
    "projectId": "proyecto-dos-autenticacion",
    "appId": "1:764407581000:web:30b3b5887af09f381c4b7d",
    "storageBucket": "proyecto-dos-autenticacion.appspot.com",
    "locationId": "europe-west",
    "apiKey": "AIzaSyD4EwTYtV9t9Q2icfMjwjJ_dHuZFZsBYgk",
    "authDomain": "proyecto-dos-autenticacion.firebaseapp.com",
    "messagingSenderId": "764407581000"
});