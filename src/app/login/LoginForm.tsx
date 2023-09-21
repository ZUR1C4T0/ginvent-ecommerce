'use client'
import { EyeIcon } from '@/components/EyeIcon'
import { setToken } from '@/utils/setToken'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function LoginForm() {
    const router = useRouter()
    const [register, setRegister] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [loginCredentials, setLoginCredentials] = useState({
        email: '',
        password: '',
    })
    const [registerCredentials, setRegisterCredentials] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        if (!register) {
            setLoginCredentials((prevCredentials) => ({
                ...prevCredentials,
                [name]: value,
            }))
        } else {
            setRegisterCredentials((prevCredentials) => ({
                ...prevCredentials,
                [name]: value,
            }))
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!register) {
            console.log(loginCredentials)
            fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginCredentials),
            })
                .then((response) => response.ok && response.json())
                .then(({ token }) => setToken(token))
                .then(() => router.push('/'))
        } else {
            const { confirmPassword, ...credentials } = registerCredentials
            if (registerCredentials.password !== confirmPassword) {
                return alert('Las contraseñas no coinciden')
            }
            console.log(credentials)
            fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(credentials),
            })
                .then((response) => response.ok && response.json())
                .then(({ token }) => setToken(token))
                .then(() => router.push('/'))
        }
    }

    if (!register)
        return (
            <form onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Correo electrónico
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="ejemplo@ejemplo.com"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Contraseña
                    </label>
                    <div className="relative">
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            placeholder="******************"
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
                            onMouseDown={() => setShowPassword(true)}
                            onMouseUp={() => setShowPassword(false)}
                        >
                            <EyeIcon show={showPassword} />
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between gap-5">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Ingresar
                    </button>
                    <button
                        type="button"
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        onClick={() => setRegister(true)}
                    >
                        ¿Aun no tienes cuenta?
                    </button>
                </div>
            </form>
        )
    else
        return (
            <form onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold mb-4">Crear cuenta</h1>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                    >
                        Correo electrónico
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="ejemplo@ejemplo.com"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                    >
                        Nombre de usuario
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        name="username"
                        placeholder="Juancho123"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Contraseña
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="******************"
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="confirmPassword"
                    >
                        Confirmar contraseña
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="confirmPassword"
                        type="password"
                        name="confirmPassword"
                        placeholder="******************"
                        onChange={handleChange}
                    />
                </div>
                <div className="flex items-center justify-between gap-5">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Registrarse
                    </button>
                    <button
                        type="button"
                        className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                        onClick={() => setRegister(false)}
                    >
                        ¿Ya tienes cuenta?
                    </button>
                </div>
            </form>
        )
}
