/* eslint no-restricted-globals: 0 */
import auth0 from "auth0-js";
import { userInfo } from "os";
import history from "./goBack";

const LOGIN_SUCCESS_PAGE = "/secret";
const LOGIN_FAILURE_PAGE = "/";

class Auth{
    auth0 = new auth0.WebAuth({
        domain: "project-nobody.auth0.com",
        clientID: "0MR3Job9VTchRNlWrhDDefUHO33SK193",
        redirectUri: "http://localhost:3000/secret",
        audience: "https://project-nobody.auth0.com/userinfo",
        responseType: "token id_token",
        scope: "openid"
    });
    
    constructor(){
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
        this.getProfile = this.getProfile.bind(this);
        this.signin = this.signin.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    signin(){
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResults) => {
            if (authResults && authResults.accessToken && authResults.idToken){
                let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
                localStorage.setItem("access_token", authResults.accessToken);
                localStorage.setItem("id_token", authResults.idToken);
                localStorage.setItem("expires_at", expiresAt);
                location.hash = "";
                location.pathname = LOGIN_SUCCESS_PAGE;
                
            }else if (err){
                location.pathname = LOGIN_FAILURE_PAGE;
                console.log(err);
            }
        });
    }

    getProfile(cb) {
        this.auth0.client.userInfo(this.accessToken, (err, profile) => {
          if (profile) {
            this.userProfile = profile;
          }
          cb(err, profile);
        });
      }

    isAuthenticated(){
        let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
        return new Date().getTime() < expiresAt;
    }

    signOut(){
        this.auth0.logout();
        history.replace("/");
    }
  }
  
  export default Auth;