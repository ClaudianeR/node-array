import { produtos } from "../db/produtos.js"

export const produtoService = {
    buscarProdutos: (request, reply) =>{
        return produtos

    },
    buscarPorId: (req, res) =>{
        let id = req.params.id

    },
    criarProduto: (req, res) =>{
        let produtoReq = req.body
        return produtos.push(produtoReq)

    },
    atualizarProduto: (req, res) =>{

    },

    deletarProduto: (req, res) =>{

    },

}

// const text = 'Todos os produtos'
// reply.send(`get /produtos ${text}`)