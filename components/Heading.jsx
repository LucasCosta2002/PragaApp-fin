export default function Heading({titulo}) {

    const handleScroll = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    return (
        <div className="p-4 pb-0 flex flex-col items-center gap-4">
            <h1 className="text-primarioOscuro font-bold text-center text-3xl">{titulo}</h1>

            <button
                onClick={handleScroll}
                className={"p-3 bg-botonOscuro text-white rounded-2xl w-20 "}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>

            </button>
        </div>

    )
}
