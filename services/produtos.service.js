import { produtos } from "../db/produtos.js"

export const produtoService = {
    buscarProdutos: (request, reply) =>{
        return produtos

    },
   

    buscarProdutoPorId: (req, res) => {
            let idReq = req.params.id
            let produto = produtos.find(p => p.id === parseInt(idReq))
        return produto

    },

    criarProduto: (req, res) =>{
        let produtoReq = req.body
        return produtos.push(produtoReq)


    },
    atualizarProduto: (req, res) =>{
        const id = req.params.id
        let produto = produtos.find(p=> p.id === parseInt(id))

        // !produto -> se não existir
       
        if (!produto){ // verifica undefined, null, 0
            res.status(404).send({message:'Produto não encontrado'})
            return;

        }
        // atualiza cada propriedade do produto do array com o produto do body

        produto.nome = req.body.nome ?? produto.nome
        produto.preco = req.body.preco ?? produto.preco
        produto.off = req.body.off ?? produto.off

    res.status(201).send(produto)  

    },

    atualizarProdutoParcial: (req, res) =>{
        const id = req.params.id
        let produto = produtos.find(p=> p.id === parseInt(id))

        // !produto -> se não existir
       
        if (!produto){ // verifica undefined, null, 0
            res.status(404).send({message:'Produto não encontrado'})
            return;

        }
        // atualiza cada propriedade do produto do array com o produto do body

        produto.nome = req.body.nome ?? produto.nome
        produto.preco = req.body.preco ?? produto.preco
        produto.off = req.body.off ?? produto.off

    res.status(201).send(produto)    

    },

    deletarTodosProduto: (req, res) =>{
        produtos.splice(id, 1)

    },

    deletarProduto: (req, res) =>{
        produtos.splice(id, 1)

    },

}

// const text = 'Todos os produtos'
// reply.send(`get /produtos ${text}`)