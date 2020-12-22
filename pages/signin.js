import { useState } from 'react'
import { signInWithEmailAndPassword } from '../firebase/firebase.utils'

import Head from 'next/head'

export default function SignIn() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(email, password)
            .then(user => {
                setLoggedIn(true);
                setEmail("");
                setPassword("");
            })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <Head>
                <title>Sign In</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div className="px-8">
                    <h1 className="text-center text-6xl my-16 font-bold">Ninjuries</h1>

                    {
                        isLoggedIn
                        ? <h3 className="text-center">Logged in!</h3>
                        : <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto flex flex-col max-w-lg">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm text-secondary mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-secondary" id="email" type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-sm text-secondary mb-2" htmlFor="password">
                                        Password
                                    </label>
                                    <input className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-secondary mb-3" id="password" type="password" placeholder="******************" onChange={e => setPassword(e.target.value)} />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button className="bg-primary hover:bg-blue-900 text-white font-bold py-2 px-4 rounded" type="submit">
                                        Sign In
                                    </button>
                                    <a className="inline-block align-baseline font-bold text-sm text-secondary hover:text-secondary-darker" href="#">
                                        Forgot Password?
                                    </a>
                                </div>
                            </form>
                        </div>
                    }
                </div>
            </main>
        </div>
    )
}