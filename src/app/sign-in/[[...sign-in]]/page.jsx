import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex mt-20 min-h-screen max-sm:max-w-screen flex-col items-center justify-between ">
      <SignIn />
    </div>
  )
}