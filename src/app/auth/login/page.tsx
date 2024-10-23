import SignInForm from "@/components/home/forms/SignInForm";

export default function LoginPage() {
    return (
        <div className="w-[350px] mx-auto mt-20">
            <h1 className="text-center mb-5">Welcome back</h1>
            <SignInForm />
        </div>
    );
}