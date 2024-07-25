import { SignUp } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <div className="absolute p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <SignUp 
        appearance={{
          elements: {
            footer: "hidden"
          }
        }}
      />
      <div className="mt-4 text-center text-sm">
        <p className="text-white">Already have an account? <Link href="/sign-in" className="text-blue-600 hover:underline">Sign in</Link></p>
      </div>
    </div>
  )
}