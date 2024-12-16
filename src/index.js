const port = process.env.PORT || 3000;
const fastify = require('fastify');
const app = fastify();
const path = require('path');
app.register(require('@fastify/static'), {
  root: path.join(__dirname, '../public'),
})


app.get('/', function (req, reply) {
  reply.sendFile("warroom.html", { root: path.join(__dirname, '../public') }) // serving path.join(__dirname, 'public', 'myHtml.html') directly
})

app.get("/miniapp", (req, reply) => {
  reply.sendFile("miniapp.html", { root: path.join(__dirname, '../public') });
});

app.listen({ port, host: '0.0.0.0' }, (err) => {
  if (err) {
    console.log(err)
    process.exit(1)
  }
  console.log('success!')
})


