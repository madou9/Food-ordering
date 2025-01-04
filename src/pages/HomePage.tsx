import LandingImage from '../assets/landing.png'
import appDownload from '../assets/appDownload.png'
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-lg py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                Tuck into a delicious meal
            </h1>
            <span className="text-xl">Food is just a click away!</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={LandingImage} />
            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <span className='font-bold text-3xl tracking-tight'>Order takeaway even faster!</span>
                <span className='text-lg'>Get the Essen app today!</span>
                <img src={appDownload} />
            </div>
        </div>
    </div>
  )
}

export default HomePage