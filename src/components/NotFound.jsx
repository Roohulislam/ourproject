// src/components/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <Link to="/" className="px-6 py-3 bg-blue-600 text-white rounded-lg">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;