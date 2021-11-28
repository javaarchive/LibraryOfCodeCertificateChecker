let sslChecker = require("ssl-checker")
module.exports = async function(){
  console.log("Checking ssl status");
  return (await sslChecker('javaarchives-statuspage.cloud.libraryofcode.org', 'GET', 443));
}