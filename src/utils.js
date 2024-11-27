require('colors');

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
    process.stdout.write('\x1Bc');
    console.log('========================================'.cyan);
  console.log('=               GRASS BOT              ='.cyan);
  console.log('=           Coding by 0xRizal          ='.cyan);
  console.log('=          Only For P2E Member         ='.cyan);
  console.log('========================================'.cyan);
  console.log();
}

module.exports = { delay, displayHeader };
