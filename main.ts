import { add, subtract, multiply, divide } from "./utils/calculations";

function main(): void {
  console.log("Welcome to the Calculation App!");
  while (true) {
    console.log("\nSelect operation:");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");
    console.log("5. Exit");

    const choice: string = prompt("Enter choice (1/2/3/4/5): ") || "";

    if (["1", "2", "3", "4"].includes(choice)) {
      const num1: number = parseFloat(prompt("Enter first number: ") || "0");
      const num2: number = parseFloat(prompt("Enter second number: ") || "0");

      switch (choice) {
        case "1":
          console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
          break;
        case "2":
          console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
          break;
        case "3":
          console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
          break;
        case "4":
          if (num2 !== 0) {
            console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
          } else {
            console.log("Error: Division by zero is not allowed.");
          }
          break;
      }
    } else if (choice === "5") {
      console.log("Exiting the Calculation App. Goodbye!");
      break;
    } else {
      console.log("Invalid input. Please enter a number between 1 and 5.");
    }
  }
}

main();
