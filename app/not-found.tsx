import Link from "next/link"

function NotFoundPage() {
	return <div className="min-h-screen bg-white flex justify-center py-1 font-serif">
	<section className="w-full max-w-4xl px-4">
	  <div className="flex flex-col items-center text-center">
		{/* Background image container with 404 text */}
		<div
		  className="w-full bg-cover bg-center"
		  style={{
			backgroundImage: "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
			height: "510px",
		  }}
		>
		</div>
		{/* Content container */}
		<div className="-mt-16">
		  <h3 className="text-4xl md:text-5xl font-bold text-gray-800">
			Looks like you are lost
		  </h3>
		  <p className="text-lg text-gray-600 m-4">
			The page you are looking for is not available!
		  </p>
		  <Link
			href="/"
			className="w-full bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 font-bold hover:from-gray-800 hover:via-purple-800 hover:to-blue-800 inline-block bg-indigo-600 text-white hover:bg-indigo-700 transition-colors py-3 px-8 rounded-full text-2xl"
		  >
			Go to Home
		  </Link>
		</div>
	  </div>
	</section>
  </div>
}

export default NotFoundPage