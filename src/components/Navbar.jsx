"use client"
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
// import { auth, currentUser } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

const UpdateUserToDB = async (user) => {
  if(user) {
    const baseUrl = process.env.NEXT_PUBLIC_URL
    const response = await fetch(`${baseUrl}/api/users`, {
      method: 'POST',
      headers:{
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({
        userId: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.emailAddresses[0].emailAddress,
      }),
    });

    const data = await response.json();
    if(!response.ok) {
      console.error('Faild to sync user to db', data.error);
    }
  }
}


const Navbar = () => {
  const { user } = useUser();
  
  // console.log("User", user);

  // const { userId } = auth();
  // const user = await currentUser()

  // console.log(userId);
  // console.log(user);

  if(user) {
    UpdateUserToDB(user);
  }

  return (
    <div className=" sticky top-0 z-50 bg-white rounded-2xl flex flex-col items-center justify-between md:px-24">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <a>Category</a>
                <ul className="p-2">
                  <li>
                    <Link href="/mens">Mens</Link>
                  </li>
                  <li>
                    <Link href="/womens">Womens</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Shols</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <details>
                <summary>Category</summary>
                <ul className="p-2">
                  <li>
                    <Link href="/mens">Mens</Link>
                  </li>
                  <li>
                    <Link href="/womens">Womens</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end relative">
          <button className="btn relative mr-2">
            <Link href="/cart">
              <FiShoppingCart size={24} />
            </Link>
          </button>

          {user ? (
            <UserButton />
          ) : (
            <button className="btn relative ml-2">
              <Link href="/sign-in">
                <FiUser size={24} />
              </Link>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
