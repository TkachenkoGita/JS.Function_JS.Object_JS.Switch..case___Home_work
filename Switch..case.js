/* eslint-disable indent */
const dayOfWeek = prompt("Enter the number of the day of the week!", "");
switch (dayOfWeek) {
  case "1":
    alert("Monday");
    break;
  case "2":
    alert("Tusday");
    break;
  case "3":
    alert("Wednesday");
    break;
  case "4":
    alert("Thursday");
    break;
  case "5":
    alert("Friday");
    break;
  case "6":
    alert("Saturday");
    break;
  case "7":
    alert("Sunday");
    break;
  default:
    alert("A day with such number does not exist");
}
