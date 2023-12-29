import Image from "next/image"
import Link from "next/link"
import { ThemeToggler } from "./ThemeToggler"

function Header() {
  return (
    <header>
      <Link href="/">
        <Image 
        src="https://links.papareact.com/a943ae"
        alt="Disney logo"
        width={120}
        height={100}
        className="cursor-pointer invert"
        />
      </Link>
      <div className="flex space-x-2">
        {/* GenreDropdown */}
        {/* Search input */}
        {/* Themetoggler */}
        <div>
          <ThemeToggler />
        </div>
      </div>

    </header>
  )
}

export default Header