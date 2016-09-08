function getTasks() {
    this.items = [
        {nome: 'Item 01', finalizada: false},
        {nome: 'Item 02', finalizada: false},
        {nome: 'Item 03', finalizada: false},
        {nome: 'Item 01', finalizada: false}
    ];

    // Metodo para adicionar um item na lista
    this.add = function(item) {
        this.items.push(item);
    };

    // Metodo para remover item da lista
    this.remove = function(item) {
        var pos = this.items.indexOf(item); // indexOf retorna a posicao do item
        this.items.splice(pos, 1);
    };
}