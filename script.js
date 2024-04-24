const { body } = document;

function changeBackground(number) {
  // check if bg is already showing
  let prevBg;
  if (body.className) {
    prevBg = body.className;
  }
  body.className = ""; // reset css class
  switch (number) {
    case "1":
      return prevBg === "background-1"
        ? false
        : body.classList.add("background-1");
    case "2":
      return prevBg === "background-2"
        ? false
        : body.classList.add("background-2");
    case "3":
      return prevBg === "background-3"
        ? false
        : body.classList.add("background-3");
    default:
      break;
  }
}
