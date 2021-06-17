const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag}에 로그인하였습니다!`);
});

client.on('message', msg => {
  if (msg.content === '!팁') {
    msg.reply('팁을 요청하셨군요! 표정 버튼을 눌러서 이 채널에 특수 이모티콘을 사용할 수 있어요! 원한다면 방장에게 말해서 원하는 채널을 만들 수 있어요. 도배는 도배 방에서만 해주세요,아니면 밴 당할지도 몰라요..! 샌박전대 이야기는 샌박전대 채널에서만! 놀때 사용하는 음성 채널은 “음성-투구”에서 해주시고,녹화 할 때에는 “녹화-투구”에서 대화 해주세요. “끈끈이 투구와 부계 투구는 같은 인물이며 방장이니 조심하셔야겠죠 ^^”라고 방장께서 전해 달라 하셨어요.');
  }

  if (msg.content === '!방') {
    msg.reply('채팅-투구:기본 채팅방,긴급-대책-회의:긴급 회의방,콘텐츠-기획:유튜브 콘텐츠 기획용 방,놀이방1,2:소설 쓰는 방,도배하는-방:유일하게 도배가 가능한 방');
  }

  if (msg.content === '!쿠킹덤') {
    msg.reply('https://discord.gg/PUNvUMaz');
  }
  if (msg.content === '!그림') {
    msg.reply('https://discord.gg/2XHZ66sp');
  }
  if (msg.content === '!리스트') {
    msg.reply('명령어 종류:!팁,!방,!쿠킹덤,!그림');
  }
});

client.login('ODU0MjcyMjM1Mjc0ODk1MzYw.YMhhBA.D6jLSNX7yOupCFublNyCYEIqV0s');