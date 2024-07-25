import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="absolute z-100 bg-black top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <SignIn 
        appearance={{
          elements: {
            footer: "hidden"
          }
        }}
      />
      <div className="mt-4 text-center text-sm">
        <p className="text-white">Dont have an account? <Link href="/sign-up" className="text-blue-600 hover:underline">Sign up</Link></p>
      </div>
    </div>
  )
}