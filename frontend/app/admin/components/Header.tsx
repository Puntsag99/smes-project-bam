import { SignOutButton } from "@clerk/nextjs";

export const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-blue-600">MENA</div>

      <SignOutButton>
        <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
          Гарах
        </button>
      </SignOutButton>
    </header>
  );
};
