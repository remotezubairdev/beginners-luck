import { useForm } from 'react-hook-form'
export default function Login() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const submitLoginForm = (data) => {
        alert(`Username: ${data.username}, Password: ${data.password}`)
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
        </div>
    );
}