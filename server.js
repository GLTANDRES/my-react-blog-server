const app = require("express")();
const admin = require("firebase-admin");

const serviceAccount = require("./socialape-58897-firebase-adminsdk-t4752-b31a36981f.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://socialape-58897.firebaseio.com",
});

app.get("/setAdmin", async (req, res) => {
  admin
    .auth()
    .setCustomUserClaims("ouKYYNNFJBNkSH8TmjdkLNouRf32", {
      type: "administrator",
    })
    .then(() => console.log("done"));
});

app.listen(4000, () => console.log("listening on port 4000"));
