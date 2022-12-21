const legolas = {
    name: 'legolas',
    attackSpeed: 20,
    attackDamage: 10
}

const aragorn = {
    name: 'aragorn',
    attackSpeed: 15,
    attackDamage: 15
}

const gimly = {
    name: 'gimly',
    attackSpeed: 7,
    attackDamage: 20
}

function atacar(personaje, callback) { //   si callback === attackWithSword
    let attack = callback(personaje) //     let attack = attackWithSword(personaje) 
    console.log(
        `${personaje.name} ataca con ataque ${attack.weapon} causando ${attack.damage} a velocidad ${attack.speed}`
    )
}

function attackWithSword(person) {
    return {
        weapon: 'Sword',
        damage: person.attackDamage + 16,
        speed: person.attackSpeed + 23
    }
}
function attackWithBowAndArrow(person) {
    return {
        weapon: 'Bow & Arrow',
        damage: person.attackDamage + 10,
        speed: person.attackSpeed + 33
    }
}
function attackWithAxe(person) {
    return {
        weapon: 'Axe',
        damage: person.attackDamage + 30,
        speed: person.attackSpeed + 9
    }
}

atacar(gimly, attackWithAxe)
atacar(aragorn, attackWithAxe)
atacar(aragorn, attackWithSword)
atacar({name: 'saruman'}, attackWithBowAndArrow) // saruman ataca con ataque Bow & Arrow causando NaN a velocidad NaN