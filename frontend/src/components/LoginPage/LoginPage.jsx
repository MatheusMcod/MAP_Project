import {
	Facebook,
	Google,
	LinkedIn,
	Lock,
	Mail,
	Person,
} from "@mui/icons-material";
import { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
	const [bodyClass, setBodyClass] = useState("");
	const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const handleSignIn = () => {
		setBodyClass("sign-in-js");
	};

	const handleSignUp = () => {
		setBodyClass("sign-up-js");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
    try {
      const response = await fetch('http://localhost:4444/auth/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
        body: new URLSearchParams({ username: username, password: password }).toString(),
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        navigate("/dashboard")
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Invalid credentials');
    }
};

	return (
		<div className={`container ${bodyClass}`}>
			<div className="content first-content">
				<div className="first-column">
					<h2 className="title title-primary">Bem-vindo(a) de volta!</h2>
					<p className="description description-primary">
						Para continuar conectado(a) conosco,
					</p>
					<p className="description description-primary">
						por favor faça login com suas informações pessoais
					</p>
					<button
						id="signin"
						className="btn btn-primary"
						onClick={handleSignIn}
					>
						Entrar
					</button>
				</div>
				<div className="second-column">
					<h2 className="title title-second">Criar uma Conta</h2>
					<div className="social-media">
						<ul className="list-social-media">
							<a className="link-social-media" href="#">
								<li className="item-social-media">
									<Facebook />
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
									<Google />
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
									<LinkedIn />
								</li>
							</a>
						</ul>
					</div>
					<p className="description description-second">
						ou utilize seu e-mail para cadastro:
					</p>
					<form className="form">
						<label className="label-input" htmlFor="">
							<Person className="icon-modify" />
							<input type="text" placeholder="Nome" />
						</label>
						<label className="label-input" htmlFor="">
							<Mail className="icon-modify" />
							<input type="email" placeholder="E-mail" />
						</label>
						<label className="label-input" htmlFor="">
							<Lock className="icon-modify" />
							<input type="password" placeholder="Senha" />
						</label>
						<button className="btn btn-second">Cadastrar</button>
					</form>
				</div>
			</div>
			<div className="content second-content">
				<div className="first-column">
					<h2 className="title title-primary">Olá, amigo!</h2>
					<p className="description description-primary">
						Informe seus dados pessoais
					</p>
					<p className="description description-primary">
						e comece a jornada conosco
					</p>
					<button
						id="signup"
						className="btn btn-primary"
						onClick={handleSignUp}
					>
						Cadastrar
					</button>
				</div>
				<div className="second-column">
					<h2 className="title title-second">Entrar como Profissional</h2>
					<div className="social-media">
						<ul className="list-social-media">
							<a className="link-social-media" href="#">
								<li className="item-social-media">
									<Facebook />
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
									<Google />
								</li>
							</a>
							<a className="link-social-media" href="#">
								<li className="item-social-media">
									<LinkedIn />
								</li>
							</a>
						</ul>
					</div>
					<p className="description description-second">
						ou use sua conta de e-mail:
					</p>
					<form className="form" onSubmit={handleSubmit}>
						<label className="label-input" htmlFor="">
							<Mail className="icon-modify" />
							<input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
						</label>
						<label className="label-input" htmlFor="">
							<Lock className="icon-modify" />
							<input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)}/>
						</label>
						<a className="password" href="#">
							esqueceu sua senha?
						</a>
						<button className="btn btn-second">Entrar</button>
					</form>
				</div>
			</div>
		</div>
	);
}
