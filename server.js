import Fastify from 'fastify'
import { produtoService } from './services/produtos.service.js'

const fastify = Fastify({
    logger: false
  })

const PORT = 5005

fastify.get('/', (request, reply) => {
    reply.send('Servidor Rodando - !!!!')
})

fastify.get('/produtos', produtoService.buscarProdutos)

fastify.get('/produtos/:id', produtoService.buscarProdutoPorId)

fastify.post('/produto', produtoService.criarProduto)

fastify.put('/produtos/:id', produtoService.atualizarProduto)

fastify.patch('/produtos/:id', produtoService.atualizarProdutoParcial)

fastify.delete('/produtos/', produtoService.deletarTodosProduto)

fastify.delete('/produto/id', produtoService.deletarProduto)


fastify.listen({ port: PORT}, (err, address) => {
    if(err) {
        console.error('Erro ao subir o servdor', err)
        return;
    }
    console.log(`Server is now listening on ${address}`);
})