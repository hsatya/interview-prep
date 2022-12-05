function rev() {
  const txt = document.getElementById("txt").value;
  const result = document.getElementById("result");

  let reverse = "";
  const l = txt.length;
  for (let i = l - 1; i >= 0; --i) {
    reverse += txt.charAt(i);
  }

  result.innerHTML = `The reversed string is: ${reverse}`;
}
