const printSubsequence = (ques , asf) => {
  if(ques.length === 0){
    console.log(asf);
    return;
  }
  let ch = ques.charAt(0);
  let roq = ques.substring(1);

  printSubsequence(roq , asf + ch);
  printSubsequence(roq , asf + '-' );
}
printSubsequence('xyz' , '');
