// toEmoticon function! 
// Useful for helping you choose the right emoji ;)

const toEmoticon = value => {
  switch (value) {
    case 'shrug':
      return '|_{"}_|';
      break;
    case 'smiley face':
      return ':)';
      break
    case 'frowny face':
      return ':(';
      break;
    case 'winky face':
      return ';)';
      break;
    case 'heart':
      return '<3';
      break;
    default: 
      return '|_(* ~ *)_|';
      break;
  };
};

// 'shrug' should return '|_{"}_|'
// 'smiley face' should return ':)'
// 'frowny face' should return':('
// 'winky face' should return ';)'
// 'heart' should return '<3'
// any other input should return '|_(* ~ *)_|'

 console.log(toEmoticon("whatever")) 
