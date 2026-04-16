export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600 flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl flex flex-col justify-center items-center">
        <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 uppercase">
          <li>
            <a href="/somos" className="hover:underline me-4 md:me-6">
              Who We Are
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              License
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 font-light py-3">
          © 2024-2026{" "}
          <a href="https://apitecha.com/" className="hover:underline">
            ApiTecha™
          </a>
          . Todos Los Derechos Reservados. México.
        </span>
      </div>
    </footer>
  );
}
