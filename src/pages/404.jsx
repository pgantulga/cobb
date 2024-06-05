
import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="mb-8">Sorry, the page you are looking for does not exist.</p>
            <Link href="/home">
                <span className="text-red-500 hover:text-blue-700">Go back to Home</span>
            </Link>
        </div>
    );
}

export default NotFoundPage;