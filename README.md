# Raf [v0.1]

**Raf** is a library written by java script to help java script users to use "localStorage".


## Introduction
**Raf** library handles data as a table of rows each row called "space" and the whole table is called "raf",

> Currently "Raf" supports JavaScript only, typescript and more coming soon.

## Simple Example

if you have data in structure like this:

```js
const vehicles = {
    car: {
        id: 0,
        country: iraq,
        price: 10000
    },
    bicycle: {
        id: 1,
        country: iraq,
        price: 50
    },
    ufo: {
        id: 2,
        country: "mars",
        price: null
    },
};
```

or as a table:

| id | name | country | price ($) |
|:----:|:----:|:----:|:----:|
|   0   |   car   |   iraq   |   10000   |
|   1   |   bicycle   |   iraq   |   50   |
|   2   |   ufo   |   mars   |   null   |

then each vehicle ("car", "bicycle", ..etc) is a `Space` and "vehicles" is `Raf`.

this is the most common structure form for data and it's easy to store it in localStorage, But if you need to edit, remove part of this data you need to change the whole data and store it again, this library makes this easier by offering many functions to handling this.

> Raf library, It's not new thing but it's make the old more familiar.

---


# Installation 

To install "Raf" library you need to downloading `raf_v0.1.js` file from this repository and adding it to your project locally.
> Make sure you are writing the right file path.

> Make sure your main javascript file have `type="module"`


## How To use:

### 1-Import 
> download the js file and add it to you folder, then import it from local file
```js
import { Raf, Space } from "./raf_v0.1.js"
```


### 2-Initialization
```js
const Raf = new Raf("vehicles");
const Car = new Space("car", Raf);
```

`vehicles` is used as localStorage name, **so it's important to be unique**.
`car` is used as a name for the raw of the data table.


### 3-Add some data (Write)
Data stored as key and value. `Space.set(key, value)`

```js
Car.set("id", 0);
Car.set("name", "car");
Car.set("price", 10000);
```

**OR:**

```js
Car.setTable(
    {
    "id": 0,
    "name": "car",
    "price": 10000
    }
)
```


OR:

```js
let myCar = {
    "id": 0,
    "name": "car",
    "price": 10000
};

Car.setTable(myCar);
)
```

> It's recommended to store the object of data in variable so the code will be more readable and maintenance.




### 4-Edit existing data (Update)
to update data just set new value annd it's will overwrite

```js
Car.set("price", 9500);
```

 if set key with no value then the default value is `null`
```js
Car.set("color") // color = null
```




### 5-Get stored data (Read)

#### A- Single Data Each time
```js
Car.get("name"); // "car"
Car.get("country"); // "iraq"
Car.get("price"); // 9500
```

#### B- get as object
Get all values stored in current space:
```js
Car.get();
```



### 6-Remove data (Delete)
#### A- Remove specific data (specific key)
```js
// remove the key that's called "country" and it's value.
Car.remove("country");

check the change:
console.log( Car.get("country") );
```

Console Result:
```
"undefined"
```


#### B- Remove whole space (currnt space only)

```js
Car.removeSpace(true);
```
> `true` is to confirm that you really want to remove all data stored in this space.


<br/> <br/>

## More Advanced:

### 1-Merge two Spaces:
<!-- (Comming soon..), (the ideal maybe ignored)
```js
Space_1.mergeSpace(Space_2);
```
The values of `Space_1` will updated to values of `Space_2`.

> It's necessary that the two Spaces have the same structure for the data.

-->



### 2-Delete Current Raf(localStorage):
```js
Raf.removeRaf(true);
```



### 3-Rename Current Raf(localStorage Name):
```js
Raf.renameRaf("my_vechiles");
```


### 4- Get All Data Stored In Current Raf:
```js
Sapce.superGet();
```




---






