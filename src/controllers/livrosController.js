const livros = [];

getLivros = (req, res) => {
    res.status(200).send(livros);
}

getLivro = (req, res) => {
    let id = req.params.id;
    const livro = livros.find((item) => item.id === Number(id));
    if(livro){
        res.status(200).send(livro);
    }else{
        res.status(404).send("Não foi encontrado livro com este ID");
    }
}

createLivro = (req, res) => {
    const livro = req.body;
    const existe = livros.find((item) => item.id === Number(livro.id));

    if(!existe){
        livros.push(livro);
        res.status(201).send("Livro cadastrado com sucesso");
    }else{
        res.status(400).send("ID ja cadastrado");
    }
}

editLivro = (req, res) => {
    let id = req.params.id;
    const index = findLivroIndex(id);
    livros[index] = req.body;
    res.status(201).send("Livro alterado com sucesso");

}

deleteLivro = (req, res) => {
    let id = req.params.id;
    const index = findLivroIndex(id);
    livros.splice(index, 1);
    res.status(200).send("Livro deletado com sucesso");
}

findLivroIndex = (id) => {
    const index = livros.findIndex((item) => item.id === Number(id));
    return index;
}

module.exports = {getLivros, getLivro, createLivro, editLivro, deleteLivro};