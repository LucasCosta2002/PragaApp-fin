import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

	return (
		<>
			<Head>
                <title>Praga - Coffe & Tea</title>
                <meta name="description" content="Praga Coffe & Tea, cafeteria, desayunos, regalos, cafe" />
            </Head>

            <div className='h-screen flex flex-col justify-between'>
                <main className='p-4 flex flex-col items-center gap-10'>
                    <Image width={200} height={190} alt="Logo Praga" src="/assets/img/logo.jpg" />

                    <div className='bg-primario shadow-md rounded-lg p-4 w-full hover:bg-primarioOscuro transition-colors'>
                        <Link href="/delivery" className='flex items-center justify-evenly gap-5'>
                            <p className=' text-3xl font-bold text-white'>Delivery</p>
                            <Image width={90} height={80} src="/assets/img/delivery.png" className="invert" alt='imagen delivery'/>
                        </Link>
                    </div>

                    <div className='bg-primario shadow-md rounded-lg p-4 w-full hover:bg-primarioOscuro transition-colors'>
                        <Link href="/local" className='flex items-center justify-evenly gap-5'>
                            <p className=' text-3xl font-bold text-white'>Local</p>
                            <Image width={90} height={80} src="/assets/img/local.svg" alt='imagen Local'/>
                        </Link>
                    </div>

                    <div className='bg-primario shadow-md rounded-lg p-4 w-full hover:bg-primarioOscuro transition-colors'>
                        <Link href="/pedidos" className='flex items-center justify-evenly gap-5'>
                            <p className=' text-3xl font-bold text-white'>Pedidos</p>
                            <Image width={90} height={80} src="/assets/img/notepad.svg" alt='imagen Pedidos'/>
                        </Link>
                    </div>
                </main>

                <footer className='bg-oscuro text-center text-white font-bold p-2'>made by <Link href="https://www.instagram.com/lucas_costamagna/" target={'_blank'}>Lucas Costamagna &copy; {new Date().getFullYear()}</Link></footer>
            </div>
		</>
	)
}
