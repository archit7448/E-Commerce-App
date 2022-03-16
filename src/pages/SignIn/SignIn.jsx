import "./SignIn.css"

export const SignIn = () => {
       const signupHandler = async () => {
              try {
                const response = await axios.post(`/api/auth/signup`, {
                  firstName: "Adarsh",
                  lastName: "Balika",
                  email: "adarshbalika@neog.camp",
                  password: "adarshBalika",
                });
                localStorage.setItem("token", response.data.encodedToken);
              } catch (error) {
                console.log(error);
              }
            };
       return (
              <section className="form-wrapper validation">
                     <form className="form">
                            <label className= "form-label"> E-mail
                                   <input type="text" name="email-id" placeholder="email-id" className="form-input"/>
                            </label>
                            <label className = "form-label" > Password
                                   <input type="text" name="password" placeholder="password" className="form-input"/>
                            </label>
                            <button className="button button-primary button-form" >SIGN IN</button>
                            <button className="button button-primary button-form" onClick = {() => signupHandler()}>Guest Login</button>
                     </form>
              </section>
       )
}