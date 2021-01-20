import firebase from "firebase/app";
import { firebaseConfig } from "./config";
import "firebase/firestore";
import "firebase/auth";

firebase.initializeApp(firebaseConfig);
// update in the firebase library which changes how firebase works with time stamps
// firebase.firestore().settings({ timestampsInSnapshots: true });
export const auth = firebase.auth()
export const firestore = firebase.firestore();

export const GoogleProvider = new firebase.auth.GoogleAuthProvider()
GoogleProvider.setCustomParameters({prompt: "select_account"})
// export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider);


export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  // check user exits or not
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  const userRoles = ["user"]
  // if not, create new document and store it 
  if (!snapshot.exists) {
    const { name, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        name,
        email,
        userRoles,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("err creating user", err.message);
    }
  }
  return userRef;
};


export const createProduct = async (products, objectsToAdd) => {
  const productsRef = firestore.collection(products);
  objectsToAdd.forEach();
  const newDocRef = productsRef.doc();
  const crearedAt = new Date();
  const { productName, productThumbnail, productPrice, productDesc } = products;
  try {
    await newDocRef.set({
      productName,
      productThumbnail,
      productPrice,
      productDesc,
      crearedAt,
      ...objectsToAdd,
    });
  } catch (err) {
    console.log("error creating product", err.message);
  }
  return productsRef;
};



export default firebase;
