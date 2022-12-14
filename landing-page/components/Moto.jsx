import React from "react";
import Image from "next/image";
import motto from "../assets/motto.png";

const Moto = () => {
	return (
		<div className="">
			<div id="concept art" className="bground px-8 py-16  bg-[rgba(250,208,44,0.43)] max-h-screen w-screen lg:flex lg:flex-row items-center">
				<div>
					<h1 className="text-4xl font-impact mb-8 lg:w-[30rem] text-[#171717] opacity-[0.68]">We bring very high-quality NFTs to your collection</h1>
					<p className="mb-16 lg:w-[30rem] text-[#171717] opacity-[0.68]">Our NFTs are painted with a high-quality design in mind to ensure that our holders are completely satisfied.</p>
				</div>
				<div className="-z-10 max-sm:hidden md:hidden lg:block">
					<Image src={motto} alt="Motto" width={800} className="lg:w-[600px] " />
				</div>
			</div>
		</div>
	);
};

export default Moto;
