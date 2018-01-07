export class AuthService {
  login(creds, cb){
    // var b = new buffer.Buffer("hello");s
    // this buffer stuff I couldn't get to work, and it wasn't worth spending so much time on right now...
    // var b = Buffer("hello");
    // console.log(b.toString("base64"));
    console.log("Attempting to log in with username " + creds.username + " and password " + creds.password);
    if(!creds.username || !creds.password) {
      err = { errorMessage: "Username and password are required fields"};
      return cb(err);
    }
    // these return promises, which we are invoking with the promise api via the '.then(...)' calls
    fetch("https://api.github.com/search/repositories?q=react")
    .then((response)=> {
      return response.json();
    })
    .then((results) => {
      console.log(results);
      return cb({success: true});
    });
  }
}
