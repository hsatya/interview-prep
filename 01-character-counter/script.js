const in1 = document.getElementById("in1");
const out = document.getElementById("out");

const handleChange = (e) => {
  let str = e.target.value;
  out.innerHTML =
    str.length < 1 ? "" : `String: ${str} has ${str.length} characters.`;
};

in1.addEventListener("input", handleChange);
