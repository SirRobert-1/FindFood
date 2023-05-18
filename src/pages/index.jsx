import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-white h-screen w-screen">
      <div className="flex flex-row items-center justify-center">
        <input
          type="text"
          placeholder="Busca la comida de tu agrado"
          className="input input-bordered w-full max-w-xs md:max-w-lg my-20 bg-gray-300 placeholder-gray-800 text-black"
        />
        <Image
          src="@/assets/icons/lupa.svg"
          alt=""
          width={20}
          height={20}
        ></Image>
      </div>
    </div>
  );
}
