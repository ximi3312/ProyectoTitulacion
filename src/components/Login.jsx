import React from 'react'
import loginImg from '../assets/easyfix.jpeg'

export default function Login(){
    return(
        <div className= 'grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
            <div className='hidden sm:block'>
                <img className= 'w-full h-full object-cover' src={loginImg} alt= ""/>
            </div>

            <div className= 'bg-gray-300 flex flex-col justify-center'>
                <form className='max-w-[400px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-lg'>
                    <h2 className='text-4xl dark:text-white font-bold text-center'>LOGIN</h2>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Usuario</label>
                        <input className= 'rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="Nombre de Usuario"/>
                    </div>
                    <div className='flex flex-col text-gray-400 py-2'>
                        <label>Password</label>
                        <input className= 'rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-600 focus:outline-none' type="password"/>
                    </div>
                    <div className= 'flex justify-between text-gray-400 py-2'>
                        <p className= 'flex items-center'><input className='mr-2' type="checkbox"/>Remaind me</p>
                        <p>Olvide la contraseña</p>
                    </div>
                    <button className = 'w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/10 text-white font-semibold rounded-lg'>Ingresar</button>
                </form>
            </div>

        </div>
    )
}