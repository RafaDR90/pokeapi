import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,GithubAuthProvider  } from "firebase/auth";
import googleImg from '../assets/gmail.png';
import githubImg from '../assets/github.png';

const Login = () => {
  // Definimos estados para el nombre de usuario y contraseña
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
    // Limpia los campos después de enviar el formulario
    setEmail('');
    setPassword('');
  };

  const loginWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }

  const loginWithGithub = () => {
    const auth = getAuth();
    const provider = new GithubAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    console.log(user);
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    console.log('error')
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GithubAuthProvider.credentialFromError(error);
    // ...
  });
  }

  return (
    <div className="container mt-5 p-4">
  <h2 className="text-center mb-4 text-white">Iniciar Sesión</h2>
  <form onSubmit={handleSubmit} className="mb-4">
    <div className="mb-3">
      <label htmlFor="email" className="form-label text-white">Correo electrónico:</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        className="form-control"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label text-white">Contraseña:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />
    </div>
    <button type="submit" className="btn btn-warning">Iniciar Sesión</button>
  </form>
  <div className="d-flex justify-content-around gap-2">
    <button onClick={loginWithGoogle} className="btn btn-secondary d-flex align-items-center">
      <img src={googleImg} alt="Google" className="me-2" style={{ maxWidth: '30px' }} />
      <span className="text-white">Iniciar Sesión con Google</span>
    </button>
    <button onClick={loginWithGithub} className="btn btn-secondary d-flex align-items-center">
      <img src={githubImg} alt="Github" className="me-2" style={{ maxWidth: '30px' }} />
      <span className="text-white">Iniciar Sesión con Github</span>
    </button>
  </div>
</div>

  );
};

export default Login;
