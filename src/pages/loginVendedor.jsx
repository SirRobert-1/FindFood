import { useRef } from "react";

function LoginVendedor() {
  const email = useRef("");
  const password = useRef("");

  const handleSubmit = () => {
    const data = {
      email: email.current.value,
      password: password.current.value,
    };
    console.log(data);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-300">
            <div className="card-body">
              <h1 className="text-black text-2xl">Registrate como vendedor</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Correo</span>
                </label>
                <input
                  type="text"
                  placeholder="Correo"
                  className="input input-bordered"
                  ref={email}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Contraseña</span>
                </label>
                <input
                  type="text"
                  placeholder="Contraseña"
                  className="input input-bordered"
                  ref={password}
                />
              </div>
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  onClick={() => handleSubmit()}
                >
                  Registrarse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginVendedor;
