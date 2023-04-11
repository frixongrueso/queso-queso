input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    numero_aleatorio = randint(0, 8)
    if (numero_aleatorio == 2) {
        basic.showString("Si")
    } else if (numero_aleatorio == 1) {
        basic.showString("No")
    } else if (numero_aleatorio == 3) {
        basic.showString("Puede ser")
    } else if (numero_aleatorio == 4) {
        basic.showString("A lo mejor")
    } else if (numero_aleatorio == 5) {
        basic.showString("Ojala")
    } else if (numero_aleatorio == 6) {
        basic.showString("tu sabras")
    } else if (numero_aleatorio == 7) {
        basic.showString("Vuelve a preguntar que me he despitado")
    } else if (numero_aleatorio == 8) {
        basic.showString("No se")
    }
    basic.showNumber(8)
})
let numero_aleatorio = 0
basic.showString("haz una pregunta")
basic.showNumber(8)
