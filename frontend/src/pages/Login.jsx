import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Login() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const submitLoginForm = (data) => {
        const { username, password } = data;
        fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("access", data.access)
            localStorage.setItem("refresh", data.refresh)

            if (data.access && data.refresh) {
                navigate("/")
            }
        })
        reset();
    }
    return (
        <div className="container">
            <h1 className="text-3xl">Login</h1>
            <form 
            onSubmit={handleSubmit(submitLoginForm)}
            className="mt-8"
            >
                <div className="flex flex-col items-start">
                    <label htmlFor="username">
                        Username:
                    </label>
                    <input
                    id="username"
                    type="text"
                    className="input"
                    {...register("username", {
                        required: "You must enter a username"
                    })}
                    />
                    {
                        errors.username && (
                            <p className='text-red-500'>{errors.username.message}</p>
                        )
                    }
                </div>
                <div className="flex flex-col items-start">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                    id="password"
                    type="password"
                    className="input"
                    {...register("password", {
                        required: "You must enter a password",
                        maxLength: {
                            value: 8,
                            message: "Password must contain 8 characters max"
                        },
                        minLength: {
                            value: 4,
                            message: "Password must contain atleast 4 characters"
                        }
                    })}
                    />
                    {
                        errors.password && (
                            <p className='text-red-500'>{errors.password.message}</p>
                        )
                    }
                </div>

                <input
                type="submit"
                value={"Login"}
                className="border cursor-pointer bg-gray-800 text-white py-1 px-8 mt-8"
                />
            </form>
            <p className='mt-4'>
                Don't have an account? <Link to="/register" className='underline'>Create an account</Link>
            </p>
        </div>
    );
}