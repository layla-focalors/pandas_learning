import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow">
        <Link className="flex items-center space-x-2 text-xl font-semibold text-gray-800 hover:text-gray-600" href="#">
          <PlaneIcon className="w-6 h-6" />
          <span>BrandName</span>
        </Link>
        <nav className="space-x-4">
          <Link className="text-gray-600 hover:text-gray-800" href="#">
            About
          </Link>
          <Link className="text-gray-600 hover:text-gray-800" href="#">
            Services
          </Link>
          <Link className="text-gray-600 hover:text-gray-800" href="#">
            Contact
          </Link>
        </nav>
        <Button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Sign up</Button>
      </header>
      <main className="flex flex-1 flex-col justify-center items-center text-center px-6 py-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to our website</h1>
        <p className="text-xl text-gray-600 mb-8">We provide high quality services that you will love.</p>
        <Button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Learn More</Button>
      </main>
      <footer className="flex justify-center items-center px-6 py-4 bg-white shadow mt-auto">
        <p className="text-gray-600">© BrandName. All rights reserved.</p>
      </footer>
    </div>
  )
}

function PlaneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </svg>
  )
}
