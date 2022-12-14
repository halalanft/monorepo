import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faTwitter, faMedium } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/router";
// import Link from "next/link";
import { useAccount, useConnect } from "wagmi";

const Connect = () => {
	const { connectors, connect } = useConnect();

	const { isconnected } = useAccount();
	const router = useRouter();

	useEffect(() => {
		if (isconnected) {
			router.replace("/pages/checkout");
		}
	}, [isconnected]);
	return (
		<>
			<div className="px-8">
				<div className="flex justify-center my-6">
					<h1 className="font-impact text-[3rem] text-[#171717] opacity-[0.68]">Mint</h1>
				</div>

				<div className="h-[560px] bg-white rounded-lg shadow-lg mx-auto ">
					<section className="flex justify-between">
						<div className="py-8 px-14 flex justify-items-center  space-x-4">
							<div className="shrink-0">
								<div className="bg-[#374C8C] w-10 h-10 rounded-md shadow-lg inline-flex items-center justify-center p-2">
									<p className="self-center items-center text-white">1</p>
								</div>
							</div>
							<div>
								<h1 className="text-xl font-semibold text-[#171717] opacity-[0.68]">CONNECT</h1>
								<p className="text-slate-500">wallet and check network</p>
							</div>
						</div>
						<div className="py-8 px-14 flex justify-items-center space-x-4">
							<div className="shrink-0">
								<div className="bg-[#374C8C] w-10 h-10 rounded-md shadow-lg inline-flex items-center justify-center p-2">
									<p className="self-center items-center text-white ">2</p>
								</div>
							</div>
							<div>
								<h1 className="text-xl font-semibold text-[#171717] opacity-[0.68] ">CHECKOUT</h1>
								<p className="text-slate-500">quantity and mint</p>
							</div>
						</div>
						<div className="py-8 px-14 flex justify-items-center space-x-4">
							<div className="shrink-0">
								<div className="bg-[#374C8C] w-10 h-10 rounded-md shadow-lg inline-flex items-center justify-center p-2">
									<p className="self-center items-center text-white ">3</p>
								</div>
							</div>
							<div>
								<h1 className="text-xl font-semibold text-[#171717] opacity-[0.68] ">REVIEW</h1>
								<p className="text-slate-500">reciept</p>
							</div>
						</div>
					</section>
					<div className="h-[2px] bg-[#171717] opacity-30"></div>
					<section id="connect" className="py-10">
						<div className="text-center">
							<h3 className="text-[#FAD02C] text-xl">HALALANFT MINTING</h3>
							<h1 className="font-bold text-[2.5rem] text-[#171717] opacity-[0.68]">Are you ready?</h1>
							<p className="w-3/4 px-32 mx-auto py-6  text-[#171717] opacity-[0.68]">Connect your MetaMask wallet and add the Optimism Network to start.</p>

							{connectors.map((connector) => (
								<button className="btn bg-[#374C8C] m-1 text-white" key={connector.id} onClick={() => connect({ connector })}>
									{connector.name}
								</button>
							))}
							{/* <Link href="/minting/pages/checkout">
								<Button name="Connect" />
							</Link> */}

							<p className="w-3/4 px-32 mx-auto py-6 leading-loose text-[#171717] opacity-[0.68]">
								You will need to have Ether on the Optimism network to mint the NFT. Please go to the official Optimism GatewayorHop exchange to move some Ether to the Optimism network before you begin.
							</p>
						</div>
					</section>
				</div>
			</div>
			<section id="footer" className="py-14">
				<div className="justify-center flex md:flex-row flex-col gap-5 text-center ">
					<a className="self-center" href="https://discord.com/invite/be5fnEqrZQ">
						<button className=" max-sm:w-40 px-4 py-2 gap-2 bg-[#374C8C] hover:bg-[#283765] text-white rounded-md flex items-center justify-center self-center mb-4">
							<FontAwesomeIcon icon={faDiscord} className="w-8" />
							<strong>DISCORD</strong>
						</button>
					</a>

					<a className="self-center" href="https://twitter.com/halalanft">
						<button className="max-sm:w-40 px-4 py-2 gap-2 bg-[#374C8C] hover:bg-[#283765] text-white rounded-md flex items-center justify-center self-center mb-4">
							<FontAwesomeIcon icon={faTwitter} className="w-[1.6rem]" />
							<strong>TWITTER</strong>
						</button>
					</a>
					<a className="self-center" href="#">
						<button className="max-sm:w-40 px-4 py-2 gap-2 bg-[#374C8C] hover:bg-[#283765] text-white rounded-md flex items-center justify-center self-center mb-4">
							<FontAwesomeIcon icon={faMedium} className="w-8" />
							<strong>MEDIUM</strong>
						</button>
					</a>
				</div>
				<div className="text-center pt-6">
					<p className="font-semibold text-[#171717] opacity-[0.68]">Copyright ?? 2022 - All right reserved</p>
				</div>
			</section>
		</>
	);
};

export default Connect;
