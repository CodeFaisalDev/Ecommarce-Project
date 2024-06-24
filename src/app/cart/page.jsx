"use client";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Toast from "@/components/Toast";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart }),
      });

      const data = await response.json();
      console.log("Response data:", data); // Log the response data

      if (response.ok) {
        if (data.url) {
          router.push(data.url); // Redirect to Stripe checkout page
        } else {
          console.error("Checkout failed: No URL returned");
        }
      } else {
        console.error("Checkout failed:", data.error);
      }
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  };

  return (
    <div className="container px-5 mx-auto">
      <h1 className="text-2xl font-bold my-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li
                key={item._id}
                className="flex justify-between items-center my-2"
              >
                <div className="flex items-center">
                  <Image
                    src={item.imageUrl}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                  <div className="ml-4">
                    <h2 className="text-xl">{item.name}</h2>
                    <p>${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="my-4">
            <h2 className="text-xl font-bold">
              Subtotal: ${subtotal.toFixed(2)}
            </h2>
            <div className="text-center mt-10">
              <button className="btn btn-warning my-2 mr-2" onClick={clearCart}>
                Clear Cart
              </button>
              <SignedIn>
                <button
                  className="btn btn-primary ml-2"
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </SignedIn>

              <SignedOut>
                <button className="btn btn-primary ml-2">
                  <Link href="/sign-in">Sign In To Checkout</Link>
                </button>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
      {/* <Toast show={toast.show} message={toast.message} /> */}
    </div>
  );
};

export default CartPage;
