import { Settings,CircleUserRound } from "lucide-react";

function Navbar() {
  return (
    <header className="mb-1 w-3/4 shadow bg-white ml-48">
      <div className="relative flex flex-col overflow-hidden px-4 py-4 sm:mx-auto sm:flex-row">
        <h1 className="font-bold text-xl ml-12">ChatBox</h1>
        <nav
          className="peer-checked:mt-8 peer-checked:max-h-32 flex max-h-0 w-full mr-12  flex-col items-center justify-end overflow-hidden transition-all sm:ml-24 sm:max-h-full sm:flex-row sm:items-start"
        >
          <ul className="mt-4 flex sm:mt-0">
            <li className="ml-6 flex h-8 w-8 cursor-pointer items-center justify-center rounded-xl border text-gray-600 hover:text-black hover:shadow">
              <Settings className="w-4"/>
            </li>
          
            <li className="ml-2 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border text-gray-600 hover:text-black hover:shadow">
              <img src="mohit.png" alt="" className="rounded-full" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
