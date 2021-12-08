let search = document.getElementById("num").value;
let c = search.innerHTML;
console.log(search);
console.log(c);
function button() {
  function foo() {
    async function foo1() {
      let data = await fetch("https://isro.vercel.app/api/spacecrafts");
      let result = await data.json();
      console.log(result);

      for (i in result) {
        let isro = result.spacecrafts[5];
        console.log(isro);

        var div = document.createElement("div");
        div.innerHTML = `ISRO SPACECRAFT DETAILS:<p>${isro.id}</p><p>${isro.name}</p>`;
        document.body.append(div);
      }
    }
    foo1();
  }
  foo();
}
