// console.log(firebase);

document.querySelector("#submit").addEventListener("click", () => {
  let name = document.querySelector("#name").value;
  let age = document.querySelector("#age").value;
  let color = document.querySelector("#favcolor").value;

  let user = {
    name: name,
    age: parseInt(age),
    color: color,
  };

  //   console.log(user);

  // save the user into the DB
  db.collection("mypeople")
    .add(user)
    .then(() => {
      alert("New user added!");
      show_people();
    });
});

// show people stored in our DB

function show_people() {
  // data retrieval
  db.collection("mypeople")
    .get()
    .then((mydata) => {
      let docs = mydata.docs;

      let html = ``;
      //   loop though the docs array
      docs.forEach((d) => {
        // console.log(d.data().name);
        html += `<p class="p-3">${d.data().name} is ${
          d.data().age
        } years old. <span class="subtitle m-4">${d.id}</span> 
        <button class="button is-danger is-pulled-right" onclick="del_doc('${
          d.id
        }')">X</button>
        
        </p>`;
      });
      //   console.log(html);

      document.querySelector("#all_people").innerHTML = html;
    });
}

// call the function
show_people();

// delete the user test
// delete()

// db.collection("mypeople")
//   .doc("F4DmmZabc1234")
//   .delete()
//   .then(() => {
//     alert("user deleted");
//   });

function del_doc(docid) {
  db.collection("mypeople")
    .doc(docid)
    .delete()
    .then(() => {
      alert("user deleted!");
      show_people();
    });
}

// show all peole whose name is sally

// db.collection("mypeople")
//   .where("name", "==", "sally")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show all people whose name is sally and red is their favourite color
// db.collection("mypeople")
//   .where("name", "==", "sally")
//   .where("color", "==", "red")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show all people whose name is sally and older than 25 years

// db.collection("mypeople")
//   .where("name", "==", "sally")
//   .where("age", ">=", 55)
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// update()

// update doc ID tTg9Kuki8j9yKfj6XzTq to change sally's age to 31
// age field is a number

// db.collection("mypeople").doc("tTg9Kuki8j9yKfj6XzTq").update({
//   age: 31,
// });

// update favourite color to black

// db.collection("mypeople").doc("tTg9Kuki8j9yKfj6XzTq").update({
//   color: "black",
// });

// add peter and kristen as sally's friends

// db.collection("mypeople")
//   .doc("tTg9Kuki8j9yKfj6XzTq")
//   .update({
//     friends: ["peter", "kristen"],
//   });

// add is424 as a course that sally completed

// db.collection("mypeople")
//   .doc("1NbFEh9a3gkj2cbsl4A2")
//   .update({
//     courses: ["is424"],
//   });

// sally completed is365, update the courses field (courses array already exists)

// db.collection("mypeople")
//   .doc("1NbFEh9a3gkj2cbsl4A2")
//   .update({
//     courses: firebase.firestore.FieldValue.arrayUnion("is365"),
//   });

// sally also completed is422

// db.collection("mypeople")
//   .doc("1NbFEh9a3gkj2cbsl4A2")
//   .update({
//     courses: firebase.firestore.FieldValue.arrayUnion("is422"),
//   });

// arrayRemove() => remove elements from the a field of type array
// remove is422 from the courses sally completed

// db.collection("mypeople")
//   .doc("1NbFEh9a3gkj2cbsl4A2")
//   .update({
//     courses: firebase.firestore.FieldValue.arrayRemove("is422"),
//   });

// mike completed is365, update the courses field (courses array already exists)

// db.collection("mypeople")
//   .doc("gPFLT6E77C01iFOLojm1")
//   .update({
//     courses: firebase.firestore.FieldValue.arrayUnion("is365"),
//   });

// jackie completed is365, is424 update the courses field (courses array already exists)

// db.collection("mypeople")
//   .doc("V7AGl5lvMSxzncNyl1Q9")
//   .update({
//     courses: firebase.firestore.FieldValue.arrayUnion("is424"),
//   });

// we want to know those students who completed is424 and their name is sally

// db.collection("mypeople")
//   .where("courses", "array-contains", "is424")
//   .where("name", "==", "sally")
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show the names of those who completed either is424, is365, is400

// db.collection("mypeople")
//   .where("courses", "array-contains-any", ["is424", "is400", "is365", "is777"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show all users with the name sally or mike (consider uppercase) - sally vs Sally

// db.collection("mypeople")
//   .where("name", "in", ["Sally", "sally", "SALLY", "mike", "Mike"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// show all users other than sally

// db.collection("mypeople")
//   .where("name", "not-in", ["Sally", "sally", "SALLY"])
//   .get()
//   .then((data) => {
//     let mydocs = data.docs;
//     // if no results
//     if (mydocs.length == 0) {
//       console.log("no data returned");
//       return;
//     }

//     mydocs.forEach((d) => {
//       console.log(d.data());
//     });
//   });

// sally has soccer as her favourite sport, pizza as her favourite food, madison as her favourtie city

// db.collection("mypeople")
//   .doc("1NbFEh9a3gkj2cbsl4A2")
//   .update({
//     favourites: {
//       city: "madison",
//       food: "pizza",
//       sport: "soccer",
//       number: 10,
//     },
//   });

// update sally's favourites so that 7 is her favourite number
// sall's other favourites will remain the same

// db.collection("mypeople").doc("1NbFEh9a3gkj2cbsl4A2").update({
//   "favourites.number": 7,
// });

// team name: Real Madrid
// city: Madrid
// country: Spain
// top scorers: Ronaldo, Benzema, Hazard
// worldwide fans (in millions): 798

let rm = {
  name: "barcelona",
  city: "madrid",
  country: "spain",
  top_scorers: ["ronaldo", "benzema", "hazard"],
  fans_count: 798,
};


// Task 1: Creating/Storing data
async function createTeams() {
  const teams = [
    {
      name: "Real Madrid",
      city: "Madrid",
      country: "Spain",
      top_scorers: ["Ronaldo", "Benzema", "Hazard"],
      worldwide_fans: 798,
    },
    {
      name: "Barcelona",
      city: "Barcelona",
      country: "Spain",
      top_scorers: ["Messi", "Suarez", "Puyol"],
      worldwide_fans: 738,
    },
    {
      name: "Manchester United",
      city: "Manchester",
      country: "England",
      top_scorers: ["Cantona", "Rooney", "Ronaldo"],
      worldwide_fans: 755,
    },
    {
      name: "Manchester City",
      city: "Manchester",
      country: "England",
      top_scorers: ["Sterling", "Aguero", "Haaland"],
      worldwide_fans: 537,
    },
    {
      name: "Brazil National Team",
      city: "Not applicable",
      country: "Brazil",
      top_scorers: ["Ronaldinho", "Cafu", "Bebeto"],
      worldwide_fans: 950,
    },
    {
      name: "Argentina national team",
      city: "Not applicable",
      country: "Argentina",
      top_scorers: ["Messi", "Batistuta", "Maradona"],
      worldwide_fans: 888,
    },
    {
      name: "Atletico Madrid",
      city: "Madrid",
      country: "Spain",
      top_scorers: ["Aragonés", "Griezmann", "Torez"],
      worldwide_fans: 400,
    },
  ];

  for (const team of teams) {
    await db.collection("teams").add(team);
  }
  console.log("Teams added to Firebase!");
}

// createTeams(); // Uncomment to run and add teams to Firebase

// add to the database

// db.collection("teams").add(rm);
// Task 2: Querying data
async function queryData() {
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  // 1. Show all teams in Spain.
  const spainTeams = await db.collection("teams").where("country", "==", "Spain").get();
  resultsDiv.innerHTML += "<h2>Teams in Spain:</h2>";
  spainTeams.forEach((doc) => {
    resultsDiv.innerHTML += `<p>${doc.data().name}</p>`;
  });

  // 2. Show all teams in Madrid, Spain.
  const madridSpainTeams = await db.collection("teams").where("city", "==", "Madrid").where("country", "==", "Spain").get();
  resultsDiv.innerHTML += "<h2>Teams in Madrid, Spain:</h2>";
  madridSpainTeams.forEach((doc) => {
    resultsDiv.innerHTML += `<p>${doc.data().name}</p>`;
  });

  // 3. Show all national teams.
  const nationalTeams = await db.collection("teams").where("city", "==", "Not applicable").get();
  resultsDiv.innerHTML += "<h2>National Teams:</h2>";
  nationalTeams.forEach((doc) => {
    resultsDiv.innerHTML += `<p>${doc.data().name}</p>`;
  });

  // 4. Show all teams that are not in Spain.
  const notSpainTeams = await db.collection("teams").where("country", "!=", "Spain").get();
  resultsDiv.innerHTML += "<h2>Teams not in Spain:</h2>";
  notSpainTeams.forEach((doc) => {
    resultsDiv.innerHTML += `<p>${doc.data().name}</p>`;
  });

  // 5. Show all teams that are not in Spain or England.
  const notSpainEnglandTeams = await db.collection("teams").where("country", "not-in", ["Spain", "England"]).get();
  resultsDiv.innerHTML += "<h2>Teams not in Spain or England:</h2>";
  notSpainEnglandTeams.forEach((doc) => {
    resultsDiv.innerHTML += `<p>${doc.data().name}</p>`;
  });

  // 6. Show all teams in Spain with more than 700M fans.
  const spainHighFanTeams = await db.collection("teams").where("country", "==", "Spain").where("worldwide_fans", ">", 700).get();
  resultsDiv.innerHTML += "<h2>Teams in Spain with > 700M fans:</h2>";
  spainHighFanTeams.forEach((doc) => {
    resultsDiv.innerHTML += `<p>${doc.data().name}</p>`;
  });

  // 7. Show all teams with fans in the range of 500M and 600M.
  const fanRangeTeams = await db.collection("teams").where("worldwide_fans", ">=", 500).where("worldwide_fans", "<=", 600).get();
  resultsDiv.innerHTML += "<h2>Teams with 500M-600M fans:</h2>";
  fanRangeTeams.forEach((doc) => {
    resultsDiv.innerHTML += `<p>${doc.data().name}</p>`;
  });

  // 8. Show all teams where Ronaldo is a top scorer.
  const ronaldoTeams = await db.collection("teams").where("top_scorers", "array-contains", "Ronaldo").get();
  resultsDiv.innerHTML += "<h2>Teams with Ronaldo as a top scorer:</h2>";
  ronaldoTeams.forEach((doc) => {
    resultsDiv.innerHTML += `<p>${doc.data().name}</p>`;
  });

  // 9. Show all teams where Ronaldo, Maradona, or Messi is a top scorer.
  const multiScorerTeams = await db.collection("teams").where("top_scorers", "array-contains-any", ["Ronaldo", "Maradona", "Messi"]).get();
  resultsDiv.innerHTML += "<h2>Teams with Ronaldo, Maradona, or Messi:</h2>";
  multiScorerTeams.forEach((doc) => {
    resultsDiv.innerHTML += `<p>${doc.data().name}</p>`;
  });
}

queryData();

// Task 3: Updating data
async function updateData() {
  // a. Updating existing data
  await db.collection("teams").where("name", "==", "Real Madrid").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        worldwide_fans: 811,
        name: "Real Madrid FC",
        top_scorers: firebase.firestore.FieldValue.arrayRemove("Hazard"),
        top_scorers: firebase.firestore.FieldValue.arrayUnion("Crispo"),
      });
    });
  });

  await db.collection("teams").where("name", "==", "Barcelona").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        worldwide_fans: 747,
        name: "FC Barcelona",
        top_scorers: firebase.firestore.FieldValue.arrayRemove("Puyol"),
        top_scorers: firebase.firestore.FieldValue.arrayUnion("Deco"),
      });
    });
  });

  // b. Adding new fields to existing documents
  await db.collection("teams").where("name", "==", "Real Madrid FC").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        color: { home: "White", away: "Black" },
      });
    });
  });

  await db.collection("teams").where("name", "==", "FC Barcelona").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        color: { home: "Red", away: "Gold" },
      });
    });
  });

  // c. Updating Real Madrid away jersey color
  await db.collection("teams").where("name", "==", "Real Madrid FC").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        "color.away": "Purple",
      });
    });
  });

  // d. Updating Barcelona away jersey color
  await db.collection("teams").where("name", "==", "FC Barcelona").get().then((snapshot) => {
    snapshot.forEach((doc) => {
      db.collection("teams").doc(doc.id).update({
        "color.away": "Pink",
      });
    });
  });

  console.log("Data updated!");
}

// updateData(); // Uncomment to run the update function