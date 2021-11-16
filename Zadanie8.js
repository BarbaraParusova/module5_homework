let animals = new Map();
animals.set("cat", "meow");
animals.set("dog", "woof");
animals.set("horse", "neigh");
animals.set("sheep", "baa");
animals.set("cow", "moo");
animals.set("hens", "cluck");
for (let sound of animals.keys()) {
    let value = animals.get(sound);
    console.log(`Ключ - ${sound}, значение - ${value}`);
}
