console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')
CFonts.say('HANZZ|BOTZ', {
	font: 'block',             
	align: 'center',              
	colors: ['system'],         
	background: 'transparent',  
	letterSpacing: 1,           
	lineHeight: 1,              
	space: true,                
	maxLength: '0',             
	gradient: false,            
	independentGradient: false, 
	transitionGradient: false,  
	env: 'node'                 
})
CFonts.say(`==== MADE BY HANZZ-KUN ====`, {
  font: 'console',
  letterSpacing: 1,           
  lineHeight: 1,              
  space: true,
  align: 'center',
  gradient: false,
  colors: ['system'],         
})
CFonts.say(`BUG? HUBUNGI CREATOR/n wa.me/6281212083267`, {
  font: 'console',
  align: 'center',
  gradient: false,
  colors: ['system'],         
})
CFonts.say(`==== HALO NGAB ====`, {
  font: 'console',
  letterSpacing: 1,           
  lineHeight: 1,              
  space: true,
  align: 'center',
  gradient: false,
  colors: ['system'],         
})

var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    isRunning = false
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  // console.log(p)
}

start('main.js')
