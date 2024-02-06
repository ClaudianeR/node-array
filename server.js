import Fastify from 'fastify'
import { produtoService } from './services/produtos.service.js'

const fastify = Fastify({
    logger: false
  })

const PORT = 5005

fastify.get('/', (request, reply) => {
    reply.send('Servidor Rodando - Angelo!')
})

fastify.get('/produtos', produtoService.buscarProdutos)

fastify.get('/produtos/:id', produtoService.buscarPorId)

fastify.post('/produto', produtoService.criarProduto)

fastify.patch('/produtos/id', produtoService.atualizarProduto)

fastify.delete('/produtos/id', produtoService.deletarProduto)


fastify.listen({ port: PORT}, (err, address) => {
    if(err) {
        console.error('Erro ao subir o servdor', err)
        return;
    }
    console.log(`Server is now listening on ${address}`);
})