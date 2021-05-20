function convertFahrToCelsius(temp) {
  if (typeof temp === "number") {
    let C = ((temp - 32) * 5) / 9;
    console.log(C.toFixed(4));
    //console.log(`${temp} is a valid number but a/an ${typeof temp} type.`);
  }

  if (typeof temp === "boolean") {
    console.log(`${temp} is not a valid number but a/an ${typeof temp} type.`);
    return `${temp} is not a valid number but a/an ${typeof temp} type.`;
  }

  if (Array.isArray(temp)) {
    console.log(
      `[${temp}] is not a valid number but a/an ${typeof temp} type.`
    );
    return `[${temp}] is not a valid number but a/an ${typeof temp} type.`;
  } else if (typeof temp === "object") {
    console.log(
      `${JSON.stringify(
        temp
      )} is not a valid number but a/an ${typeof temp} type.`
    );
    return `${JSON.stringify(
      temp
    )} is not a valid number but a/an ${typeof temp} type.`;
  }

  let anyNumber = Number(temp);
  if (Number.isNaN(anyNumber)) {
    console.log(`${temp} is not a valid number but a/an ${typeof temp} type.`);
    return `${temp} is not a valid number but a/an ${typeof temp} type.`;
  }
}

convertFahrToCelsius(0);

function checkYuGiOh(n) {
  //if (typeof n !== "number" || typeof n == "string") {
  //console.log(`invalid parameter: ${n}`);
  //console.log("no");
  //return;
  //}

  if (isNaN(n) === true) {
    console.log(`invalid parameter: ${n}`);
    return;
  }

  const arr = [];
  //if (n > 0) {
  for (let i = 0; i <= n; i++) {
    if (i > 0 && i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
      arr.push("Yu-Gi-Oh");
    } else if (i > 0 && i % 2 === 0 && i % 3 === 0) {
      arr.push("Yu-Gi");
    } else if (i > 0 && i % 3 === 0 && i % 5 === 0) {
      arr.push("Gi-Oh");
    } else if (i > 0 && i % 2 === 0 && i % 5 === 0) {
      arr.push("Yu-Oh");
    } else if (i > 0 && i % 2 === 0) {
      arr.push("Yu");
    } else if (i > 0 && i % 3 === 0) {
      arr.push("Gi");
    } else if (i > 0 && i % 5 === 0) {
      arr.push("Oh");
    } else {
      arr.push(i);
    }

    //return "invalid";

    //arr.push(i);
    // array starts from 0 and then 1 returns 1 and 2 returns 'yu' and so on

    console.log(arr);
  }
  //}
}

checkYuGiOh("5");
