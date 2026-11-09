// Import:
import {Raf, Space} from "./raf_v0.1.js"

// Initialize:
const myRaf = new Raf("allUsers");
// console.log("Raf", myRaf)
const space_1 = new Space("user_1", myRaf);
const space_2 = new Space("user_2", myRaf);


// Write:
space_1.set("id", 0);
space_1.set("name", "Ali");
space_1.set("age", 10);

// Read:
space_1.get("name"); // "Ali"
space_1.get("age"); // 10

// Get All Data Stored In Space
space_1.superGet();

// Overwrite:
space_1.set("age", 5);
space_1.get("age"); // 5

// Remove:
space_1.remove("age");
space_1.get("age"); // undefined

// Remove Current Space:
space_1.removeSpace(true);
// console.log(space_1)


// Another Example:
space_2.set("name", "Mohammed")
space_2.get("name");
space_2.superGet();
