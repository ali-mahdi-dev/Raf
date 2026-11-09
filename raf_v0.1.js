

/*

const allUsers = {
    user_1: {
        id: "",
        name: "",
        age: 
    },
    user_2: {
        id: "",
        name: "",
        age: 
    }
};


||-- key ---- value --||
|| -- k1 ---- v1 --||
|| -- k2 ---- v2 --||
|| -- k3 ---- v3 --||


table1 = {
    k1: v1,
    k2: v2,
    k3: v3
}

*/



/*
The Main localStorage is called `Container`, which has many `Raf` within each Raf has a `Space` the Space contains data as key and value
* Example
*/



export class Raf {
    constructor(RafName) {
        this.RafName = (RafName) ? (RafName) : (this.generateRafName());
        // createStorage() will called when Class called by "new" keyword `new Raf()`.
        this.createStorage();
    }
    // fallback to generate `RafName` if not exist
    generateRafName() {
        return ("Raf_" + Date.now()); //;use Date.now() to generate unique name.
    }
    // create storage when class called
    createStorage() {
        localStorage.setItem(this.RafName, "{}");
    }
    /* --- --- --- --- --- */
    superGet() {
        return JSON.parse(localStorage.getItem(this.RafName));
    }
    
    renameRaf(newRafName) {
        if(!newRafName) {
            throw new Error("key is required to rename Raf");
            return;
        }
        if (typeof newRafName !== "string") {
            throw new TypeError("Only string can be used as key");
            return;
         }
        
        // Clone data to new storage
        localStorage.setItem(newRafName, localStorage.getItem(this.RafName));
        // Remove old storage
        localStorage.removeItem(this.RafName);
        // Update `name`
        this.RafName = newRafName;
    }

    removeRaf(removeConfirm = false) {
        if (removeConfirm === true) return;
        localStorage.removeItem(this.RafName);
    }
}




export class Space {
    constructor(SpaceName, Raf) {
        this.SpaceName = SpaceName;
        this.RafName = Raf.RafName;
        this.data = { [SpaceName]: {} }; /* { "space_1":{}, "space_2":{}, ... } */
    }
    superGet() {
        console.log("# from superGet():", {[this.RafName]: this.data});
        return this.data;
    }
    
    // Read
    get(key) {
        // Return all data stored in current `Space`
        if (key === undefined) return this.data[this.SpaceName];
        // Check invalid `key` name
        if (key === null || typeof key !== "string" || !this.data[this.SpaceName][key]) return undefined; /* return `undefined` to used as a logical value */
        // return specific data(specific key) stored in current Space
        return this.data[this.SpaceName][key];
    }
    
    // Write
    set(key, value = null) {
        if (!key || typeof key !== "string") return;
        /*{
            "space_1": {key1: value},
            "space_2": {key1: value,  key2: value},
            "space_3": {key1: value,  key2: value},
        }*/
        this.data[this.SpaceName][key] = value;
        this.updateData();
        return "value set success";
    }
    
    // Remove
    remove(key) {
        if(!key || typeof key !== "string" || !(this.data[this.SpaceName][key])) return;
        this.data[this.SpaceName][key].delete;
        this.updateData();
    }
    // Remove Current Space
    removeSpace(removeConfirm = false) {
        if(removeConfirm === true) {
            this.data[this.SpaceName].delete;
            this.updateData();
        }
    }

	mergeSpace(spaceToMergeWith) {
		// Code
	}

    updateData() {
        localStorage.setItem(this.RafName, JSON.stringify(this.data));
    }
}





/*

// Import:
    // import {Raf, Space} from "./raf_v0.1.js"
// Initialize:
const myRaf = new Raf("allUsers");
console.log("r", myRaf)
const space_1 = new Space("user_1", myRaf);
const space_2 = new Space("user_2", myRaf);
space_1.superGet();
// Write:
space_1.set("id", 0);
space_1.set("name", "Ali");
space_1.set("age", 10);
// Read:
space_1.get("name"); // "Ali"
space_1.get("age"); // 10
// Overwrite:
space_1.set("age", 5);
space_1.get("age"); // 5
// Remove:
space_1.remove("age");
space_1.get("age"); // undefined
// Remove Current Space:
space_1.removeSpace(true);

console.log(space_1)



space_2.set("name", "Mohammed")
space_2.get("name");
space_2.superGet();

*/




