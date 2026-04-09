const age = 17
const status = age >= 18 ? "Voksen" : "Barn";
console.log(status)

function adgang(age) {
  return age >= 18 ? "Adgang tilladt" : "Ingen adgang";
}
console.log(adgang(age))

const isLoggedIn = false;

const text = !isLoggedIn ? "Log ind" : "Log ud";
console.log(text)

document.getElementById("btnstatus").addEventListener("click", () => {
    const alder = document.getElementById("input").value

    const alderstatus = alder >= 18 ? "Du er voksen" : "Du er barn";

    document.getElementById("output").textContent = alderstatus
})