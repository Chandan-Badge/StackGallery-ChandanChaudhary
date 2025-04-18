import logo from "./c2-logo.png";

function Footer() {
    return (
        <footer class="w-full shadow-sm bg-gray-900 px-12">

            <div class="w-full max-w-screen-xl mx-auto">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="#" class="flex items-center my-1">
                        <img src={logo} class="h-20" alt="Logo" />
                    </a>
                    <ul class="flex flex-wrap items-center text-sm font-medium text-gray-100 dark:text-gray-400 py-3">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Features</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="border-gray-100 dark:border-gray-700" />
                <span class="block py-2 text-sm text-gray-200 sm:text-center dark:text-gray-400">© 2025 <a href="#" class="hover:underline">Chandan Chaudhary</a>. All Rights Reserved.</span>
            </div>

        </footer>
    );
}

export default Footer;