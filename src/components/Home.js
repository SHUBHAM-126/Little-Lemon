import banner from '../assets/restauranfood.jpg'
import img1 from '../assets/greeksalad.jpg'
import img2 from '../assets/bruchetta.svg'
import img3 from '../assets/lemon dessert.jpg'
import quote from '../assets/quote.png'
import about from '../assets/about.png'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            {/* Banner section */}
            <div className="bg-green">
                <div className="max-w-4xl mx-auto max-md:px-3 max-md:pb-5 pt-5 grid md:grid-cols-2 gap-10 md:gap-32 relative md:mb-[85px]">
                    <div className='md:pb-5'>
                        <h1 className="text-5xl text-yellow font-display ">Little Lemon</h1>
                        <h2 className="text-white text-3xl font-display mb-5">Chicago</h2>
                        <p className="text-white font-body mb-2  text-lg">
                            We are a family owned Moditerranean restaurant, focused on traditional recipes served with a modern twist.
                        </p>
                        <Link to='/reserve-a-table' className="bg-yellow text-black rounded-xl px-4 py-2 font-body font-bold">
                            Reserve a table
                        </Link>
                    </div>
                    <img className='h-96 w-full md:h-[calc(100%+60px)] md:w-1/2 right-0 top-[25px] object-cover rounded-3xl md:absolute' src={banner} />
                </div>
            </div>

            {/* Specials */}
            <div className='max-w-4xl mx-auto max-md:px-3 py-10'>
                <div className='flex flex-col gap-5 md:flex-row items-center justify-between'>
                    <h2 className='text-5xl font-display'>This weeks special!</h2>
                    <button className='bg-yellow text-black rounded-xl px-4 py-2 font-body font-bold'>Online menu</button>
                </div>
                <div className='pt-10 grid gap-8 md:grid-cols-3'>
                    <div className='rounded-xl bg-gray-100 overflow-hidden'>
                        <img className='h-48 w-full object-cover' src={img1} />
                        <div className='font-body p-5'>
                            <div className='font-display text-2xl flex justify-between py-4'>
                                <h3>Greek Salad</h3>
                                <p className='text-beige'>$12.99</p>
                            </div>
                            <p className='pb-5'>The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese, garnished with crunchy garlic and rosemary croutons</p>
                            <a className='font-bold underline'>Order a delivery</a>
                        </div>
                    </div>

                    <div className='rounded-xl bg-gray-100 overflow-hidden'>
                        <img className='h-48 w-full object-cover' src={img2} />
                        <div className='font-body p-5'>
                            <div className='font-display text-2xl flex justify-between py-4'>
                                <h3>Bruchetta</h3>
                                <p className='text-beige'>$5.99</p>
                            </div>
                            <p className='pb-5'>Our bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                            <a className='font-bold underline'>Order a delivery</a>
                        </div>
                    </div>

                    <div className='rounded-xl bg-gray-100 overflow-hidden'>
                        <img className='h-48 w-full object-cover' src={img3} />
                        <div className='font-body p-5'>
                            <div className='font-display text-2xl flex justify-between py-4'>
                                <h3>Lemon Dessert</h3>
                                <p className='text-beige'>$5.00</p>
                            </div>
                            <p className='pb-5'>This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            <a className='font-bold underline'>Order a delivery</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials */}
            <div className='bg-[#fbdabb] py-10'>
                <h2 className='text-5xl font-display text-center mb-5'>Testimonials</h2>
                <div className='max-w-4xl mx-auto max-md:px-3 grid gap-4 md:grid-cols-4 font-body'>
                    <div className='bg-white p-2 rounded-md'>
                        <img src={quote} className='h-10 mb-3' />
                        <p className='mb-3'>The food at this restaurant is simply divine! I highly recommend the steak.</p>
                        <h5 className='font-bold text-lg'>Jennifer S.</h5>
                    </div>
                    <div className='bg-white p-2 rounded-md'>
                        <img src={quote} className='h-10 mb-3' />
                        <p className='mb-3'>The service is impeccable and the ambiance is delightful. A must-try for anyone visiting the area.</p>
                        <h5 className='font-bold text-lg'>Michael T.</h5>
                    </div>
                    <div className='bg-white p-2 rounded-md'>
                        <img src={quote} className='h-10 mb-3' />
                        <p className='mb-3'>I've never tasted pasta this good before. The homemade sauce is to die for!</p>
                        <h5 className='font-bold text-lg'>Samantha B.</h5>
                    </div>
                    <div className='bg-white p-2 rounded-md'>
                        <img src={quote} className='h-10 mb-3' />
                        <p className='mb-3'>The dessert selection is out of this world. You won't be disappointed with anything you order. </p>
                        <h5 className='font-bold text-lg'>John M.</h5>
                    </div>
                </div>
            </div>

            {/* About section */}
            <div className='max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center max-md:px-3 py-10 md:py-20'>
                <div>
                    <h2 className="text-5xl text-yellow font-display ">Little Lemon</h2>
                    <h3 className="text-3xl font-display mb-5">Chicago</h3>
                    <p className="font-body mb-2  text-lg">
                    Welcome to Little Lemon, where we offer delicious and fresh cuisine inspired by the flavors of the Mediterranean. Our menu features a range of tasty options that are perfect for any occasion, all served in a warm and inviting atmosphere.
                    </p>
                </div>
                <img src={about} />
            </div>
        </div>
    )
}