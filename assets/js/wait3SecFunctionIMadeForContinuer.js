(async function wait3SecFunctionIMadeForContinuer() {
  await new Promise(resolve => setTimeout(resolve, 3000));
  console.log("3 seconds have passed");
})();
