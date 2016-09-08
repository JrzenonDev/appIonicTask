function getTasks() {
    this.items = [
        {nome: 'Item 01', finalizada: false},
        {nome: 'Item 02', finalizada: false},
        {nome: 'Item 03', finalizada: false},
        {nome: 'Item 01', finalizada: false}
    ];

    // Metodo para remover item da lista
    this.remove = function(item) {
        var pos = this.items.indexOf(item); // indexOf retorna a posicao do item
        this.items.splice(pos, 1);
    }
}