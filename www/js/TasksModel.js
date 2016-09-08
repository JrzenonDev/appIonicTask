function getTasks() {

    this.items = [];

    var lista = localStorage.getItem("tasklist");

    if(lista != null)
        this.items = angular.fromJson(lista);    // Converte a lista em um OBJ

    this.save = function() {

        // Converte o obj em string
        var  lista = angular.toJson(this.items);

        // Armazenamento em local Storage
        localStorage.setItem("tasklist", lista);
    }

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