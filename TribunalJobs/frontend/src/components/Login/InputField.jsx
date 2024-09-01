import React, { useState } from 'react';

const LoginForm = () => {
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Novo estado para controlar a visibilidade da senha

  return (
    <div className="flex flex-col items-start py-px pl-20 mt-24 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">

      <h1 className="z-10 ml-3 text-4xl font-bold text-stone-50 max-md:ml-2.5 relative bg-yellow-700 inline-block px-2 py-1 max-w-full w-[580px]">
        Bem-vindo de volta!
      </h1>

      <p className="mt-6 ml-3.5 text-black max-md:ml-2.5">
        Ainda não tem uma conta?
      </p>
      <a href="#" className="mt-2 ml-3.5 font-semibold text-yellow-700 max-md:ml-2.5">
        Cadastre sua empresa aqui.
      </a>
      <form className="w-full">
        <div className="mt-12 max-md:mt-10">
          <label htmlFor="email" className="ml-3.5 text-sm font-medium text-neutral-400 max-md:ml-2.5">
            Email
          </label>
          <div className="flex gap-2.5 mt-3.5 ml-3.5 text-slate-900 max-md:ml-2.5">
            <img 
              loading="lazy" 
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1be304e218ec6f3f32780a42c2e7cad14749429c3391364a2e5592761074fc97?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec" 
              className="object-contain shrink-0 self-start mt-1 aspect-square w-[17px] border-0" 
              alt=""
            />
            <input 
              type="email" 
              id="email" 
              placeholder="Insira seu e-mail" 
              className="basis-auto bg-transparent border-none max-w-full w-[400px] input-bordered"
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
            />
          </div>
          <div 
            className={`flex shrink-0 mt-2.5 ml-3.5 max-w-full h-0.5 w-[429px] ${
              isEmailFocused ? 'bg-slate-900 ' : 'bg-neutral-400 '
            }`} 
          />
        </div>
        <div className="mt-12 max-md:mt-10">
          <label htmlFor="password" className="ml-3.5 text-sm font-medium text-neutral-400 max-md:ml-2.5">
            Senha
          </label>
          <div className="flex gap-5 justify-between items-start mt-3 ml-3 max-w-full text-slate-900 w-[431px]">
            <div className="flex gap-3">
              <img 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/bba665dfb9f9b9b94fe9e9b3d688bcd20ddc9fd8d0044c0473a3c92bb9cf2e3a?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec" 
                className="object-contain shrink-0 self-start mt-1 aspect-square w-[17px]" 
                alt=""
              />
              <input 
                type={isPasswordVisible ? "text" : "password"} 
                placeholder="Insira sua senha" 
                className="basis-auto bg-transparent border-none max-w-full w-[400px] input-bordered"
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
              />
            </div>
            <img 
              loading="lazy" 
              src={isPasswordVisible ? "https://cdn.builder.io/api/v1/image/assets/TEMP/a9209a9716827e51170ea40ab863ef9e2d769b70eb1c9abaf22eb83fc9f1e169?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec" : "https://cdn.builder.io/api/v1/image/assets/TEMP/a9209a9716827e51170ea40ab863ef9e2d769b70eb1c9abaf22eb83fc9f1e169?placeholderIfAbsent=true&apiKey=34d9fddb4e5247a6aa90d70170d328ec"}
              className="object-contain shrink-0 mt-2.5 w-3.5 aspect-square cursor-pointer" 
              alt="Show/Hide Password"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)} 
            />
          </div>
          <div 
            className={`flex shrink-0 mt-2.5 ml-3.5 max-w-full h-0.5 w-[429px] ${
              isPasswordFocused ? 'bg-slate-900' : 'bg-neutral-400'
            }`} 
          />
        </div>
        <a href="#" className="block self-end mt-5 mr-36 text-xs font-light text-neutral-600 max-md:mr-2.5">
          Esqueceu sua senha?
        </a>
        <button 
          type="submit" 
          className="px-16 py-4 mt-16 ml-3.5 max-w-full text-lg font-medium text-white whitespace-nowrap bg-cyan-900 rounded-[32px] shadow-[0px_4px_26px_rgba(0,0,0,0.25)] w-[429px] max-md:px-5 max-md:mt-10"
        >

          
          Login
        </button>

        
      </form>
    </div>
  );
};

export default LoginForm;
