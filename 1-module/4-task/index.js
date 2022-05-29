function checkSpam(str) {
  let spam = (str.toLowerCase().includes('xxx')) ? true :
    (str.toLowerCase().includes('1xbet')) ? true :
      false;
  return spam;
}
