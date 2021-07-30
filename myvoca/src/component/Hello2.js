export default function Hello () {
    let name = "Mike"

function changeName() {
    name = name === "Mike" ? "Jane" : "Mike";
    console.log(name);
    document.getElementById("name").innerText = name;
}

return (
    <div>
        <h1>state</h1>
        <h2 id="name">{name}</h2>
        <button onClick={changeName}>Change</button>
    </div>
);
}