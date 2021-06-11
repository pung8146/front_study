function plus(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

plus(10, 40);

const player = {
    name: "yun",
    chat: function (npcName) {
        console.log("hi " + npcName + " bye");
    },
}

player.chat("babo");