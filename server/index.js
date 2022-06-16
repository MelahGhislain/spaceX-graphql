const {ApolloServer} =  require('apollo-server')

const server = new ApolloServer({
    typeDefs, resolvers, csrfPrevention: true, cache: 'bounded'
})


server.listen().then(({url})=> console.log(`server running at ${url}`))