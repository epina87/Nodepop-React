import { printBoard, printLine } from "./printer.js"

// export const game = {
export default {
    // rondas
    rounds: 0,
    // tablero
    board: [],
    // nos sirve para gestionar la selección de cartas
    availableIndexes: [],
    // setupGame nos permite configurar el juego
    setupGame: function (figures) {
        // Alternativa a popular el Array board
        for (let figure of figures) {
            // TODO Se puede mejorar teniendo en cuenta que podriamos jugar con trios de cartas o cuartetos, etc
            for (let i = 0; i < 2; i++) {
                const card = {
                    figure,
                    discovered: false
                }
                this.board.push(card)
            }
            // 🍌 nos genera un problemón con las referencias!!
            /*
            const card = {
                figure,
                discovered: false
            }
            this.board.push(card)
            this.board.push(card)
            */
        }
        this.availableIndexes = this.board.map((e, index) => index)
        // ✅mezclar las cartas
        this.board.shuffle()
    },
    pickSetOfCardsIndexesRandomly() {
        let cardsIndexes = []
        // elegir cartas
        for (let i = 0; i < 2; i++) {
            //mezclamos
            this.availableIndexes.shuffle()
            // pillamos una carta del tablero
            const cardIndex = this.availableIndexes.pop()
            // la ponemos en la lista de cartas seleccionadas
            cardsIndexes.push(cardIndex)
        }
        return cardsIndexes
    },
    discoverPickedCards(cardsIndexes) {
        cardsIndexes.forEach(cardIndex => {
            const card = this.board[cardIndex]
            card.discovered = true
        })
    },
    unwindPickedCards(cardsIndexes) {
        cardsIndexes.forEach(cardIndex => {
            const card = this.board[cardIndex]
            card.discovered = false
            // Necesitamos volver a poner el indice en el listado de disponibles
            this.availableIndexes.push(cardIndex)
        })
    },
    areAllCardsTheSame(cardsIndexes) {
        // let theSameFlag = false;
        // recorrer array cardsIndexes
        // si no satisface
        // theSameFlag = theSameFlag && false
        // si satisface
        // theSameFlag = theSameFlag && true
        // return theSameFlag

        // Recuperamos las cards del tablero según su índice
        const selectedCards = cardsIndexes.map(cardIndex => this.board[cardIndex])
        // 👀 esto solamente funciona si usamos como parametro 2 cartas a seleccionar
        //return selectedCards[0].figure === selectedCards[1].figure
        const firstCard = selectedCards[0]
        // 🤯 Esto NO FUNCIONA PORQUE ESTAMOS COMPARANDO OBJETOS A PELO!!
        // POR LO TANTO ESTA COMPARANDO 2 REFERENCIAS QUE SON DISTINTAS!!!!
        //return selectedCards.every(card => card.figure === firstCard.figure)
        return selectedCards.every(card => card.figure === firstCard.figure)
    },
    hasTheGameEnded() {
        // return this.board.every(card => card.discovered)
        return this.availableIndexes.length === 0
    },
    start() {
        // ✅mientras no haya terminado el juego
        while (!this.hasTheGameEnded()) {
            // ✅mostrar la ronda en la que estamos
            printLine(`Playing round #${this.rounds}`)
            // ✅seleccionar un par de cartas cubiertas al azar
            let cardsIndexesSelected = this.pickSetOfCardsIndexesRandomly()

            // ✅mostar los indices de estas cartas seleccionadas
            printLine(`Selected cards indexes: ${cardsIndexesSelected}`)
            // ✅mostrar las cartas seleccionadas descubiertas en el tablero
            this.discoverPickedCards(cardsIndexesSelected)
            printBoard(this.board)
            // ✅si no son la misma figura
            if (!this.areAllCardsTheSame(cardsIndexesSelected)) {
                // ✅volverlas a cubrir
                this.unwindPickedCards(cardsIndexesSelected)
                // ✅incrementar la ronda
                this.rounds++
            }
            // ✅si son la misma figura
            // ✅mantenemos las cartas descubiertas

        }
    }
}