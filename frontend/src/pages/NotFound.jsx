import LinkBtn from "../components/main/LinkBtn";

export default function NotFound() {
    return (
        <>
            <h1 className="heading mb-4">
                Error: 404 Not Found
            </h1>
            <p className="paragraph-dark mb-4">
                The page you're looking for could not be found.
            </p>
            <LinkBtn path="/" text="Back To Home" style="dark" />
        </>
    );
}