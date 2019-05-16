import * as cluster from 'cluster'
import * as os from 'os'
import app from './App'

const port = process.env.PORT || 3000
const host = process.env.HOST || '0.0.0.0'

if (cluster.isMaster) {
  const numWorkers = os.cpus().length

  console.log(`Master cluster setting up ${numWorkers} workers...`)

  for (let i = 0; i < numWorkers; i++) {
    cluster.fork()
  }

  cluster.on('online', (worker) => {
    console.log(`Worker ${worker.process.pid} is online`)
  })

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`)
    console.log('Starting a new worker')
    cluster.fork()
  })
} else {
  app.listen(port, host, (err) => {
    if (err) {
      return console.log(err)
    }

    return console.log(`Server is listening at http://${host}:${port}`)
  })
}
