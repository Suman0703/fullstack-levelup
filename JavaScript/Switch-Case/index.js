const grade = "E";

switch(grade){
    case "A":
    console.log("A grade");
    break;
    case "B":
    console.log("B grade");
    break;
    case "C":
    console.log("C grade");
    break;
    case "D":
    console.log("D grade");
    break;
    case "E":
    console.log("Fail");
    break;
    default:
    console.log("Invalid Grade");
}
//if the  break statement is not used, the cases after matching case are also executed