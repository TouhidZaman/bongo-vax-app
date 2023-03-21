function vaxTrail(humans) {
  const A = []; // person array with age 20-30 with temperature less than 100
  const B = []; // person array with age 31-40 with temperature less than 100
  const C = []; // person array with age 41-50 with temperature less than 100
  const D = []; // array of any person range of age with temperature greater than equal 100

  // applying validation for invalid inputs
  if (Array.isArray(humans) && humans.length) {
    //applying sort by even age
    const sortedHumans = humans.sort(
      (a, b) => (a.age % 2) - (b.age % 2) || a.age - b.age
    );

    // grouping humans based on their ages and temperature
    sortedHumans.forEach((human) => {
      const { age, temperature } = human;
      if (age >= 20 && age <= 30 && temperature < 100) A.push(human);
      else if (age > 30 && age <= 40 && temperature < 100) B.push(human);
      else if (age > 40 && age <= 50 && temperature < 100) C.push(human);
      else if (temperature >= 100) D.push(human);
    });

    //returning sorted age and temperature based groups
    return {
      A,
      B,
      C,
      D,
    };
  } else return "please input valid array of objects as humans";
}

//Sample Inputs
const result = vaxTrail([
  { name: "Kat", age: 41, temperature: 98 },
  { name: "Kabir", age: 36, temperature: 99 },
  { name: "Nayem", age: 50, temperature: 100 },
  { name: "Paul", age: 42, temperature: 98 },
  { name: "sunil", age: 21, temperature: 98 },
  { name: "Sabnaj", age: 51, temperature: 101 },
  { name: "Rahul", age: 37, temperature: 99 },
  { name: "Biplap", age: 22, temperature: 98 },
]);

console.log(result);
