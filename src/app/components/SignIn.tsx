// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'

// const SignIn = () => {
//     return (
//         <div className="max-w-screen-2xl mx-auto">


//             <div className=' flex justify-center mt-10 mb-4'>
//                 <Image
//                     className='w-[
// '
//                     src={'/logo.png'}
//                     alt='shoes banner'
//                     width={100}
//                     height={100}
//                 />
//             </div>
//             <div className='flex justify-center'>
                
//                 <p className='text-xl font-bold'>YOUR ACCOUNT <br></br>FOR EVERYTHING<h5 className='text-center text-xl font-bold'>Nike</h5></p>
//             </div>

//             <div className='flex justify-center '>
//                 <div className='form '>
//                     <input className=' w-96 px-5  py-2 my-2 border-gray-400' type="text" placeholder='Email Address' /> <br />

//                     <input className=' w-96 px-5  py-2 my-2 border-gray-400' type="text" placeholder='Password' />
//                 </div>
//             </div>

//             {/* ================more============= */}
//             <div className='flex justify-center items-center '>
//                 <div className='flex justify-between items-center text-sm w-96'>
//                     <div className='items-center flex py-4'>
//                         <input type="checkbox" />
//                         <span className='text-gray-500 px-2'>Keep me signed in</span>
//                     </div>
//                     <div>
//                         <span className='text-gray-400'>Forgetton password?</span>
//                     </div>
//                 </div>

//             </div>

//             <div className='flex justify-center'>
//                 <p className='text-gray-600 text-center text-[15px]' >By logging in, you agree to {`Nike's`} <span className='text-gray-500 underline'>Privacy Policy <br /> and Terms of Use.</span> </p>

//             </div>


//             <div className='flex justify-center'>
//                 <button className='w-96 bg-black text-white py-3 rounded-lg mt-6 mb-3'>Sign In</button><br /><br />

//             </div>
//             <div className='flex justify-center items-center pb-5'>
//                 <span className='text-gray-500' >Not a member?<Link href={'/join'}><span className='text-black underline pl-1'> Join Us.</span></Link></span>
//             </div>




//         </div>
//     )
// }

// export default SignIn














































import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SignIn = () => {
    return (
        <div className="max-w-screen-2xl mx-auto px-4">
            {/* Logo Section */}
            <div className='flex justify-center mt-10 mb-4'>
                <Image
                    src={'/logo.png'}
                    alt='Nike logo'
                    width={100}
                    height={100}
                />
            </div>

            {/* Title Section */}
            <div className='flex justify-center'>
                <p className='text-xl font-bold text-center'>
                    YOUR ACCOUNT <br />
                    FOR EVERYTHING
                    <h5 className='text-xl font-bold text-center'>Nike</h5>
                </p>
            </div>

            {/* Input Fields */}
            <div className='flex justify-center'>
                <div className='w-full max-w-md'>
                    <input
                        className='w-full px-5 py-2 my-2 border border-gray-400 rounded-md'
                        type="text"
                        placeholder='Email address'
                    />
                    <input
                        className='w-full px-5 py-2 my-2 border border-gray-400 rounded-md'
                        type="password"
                        placeholder='Password'
                    />
                </div>
            </div>

            {/* More options (Keep me signed in and Forgot password) */}
            <div className='flex justify-center items-center'>
                <div className='flex justify-between items-center text-sm w-full max-w-md'>
                    <div className='flex items-center py-4'>
                        <input type="checkbox" />
                        <span className='text-gray-500 px-2'>Keep me signed in</span>
                    </div>
                    <div>
                        <span className='text-gray-400'>Forgot password?</span>
                    </div>
                </div>
            </div>

            {/* Privacy Policy Section */}
            <div className='flex justify-center'>
                <p className='text-gray-600 text-center text-sm'>
                    By logging in, you agree to {`Nike's`} 
                    <span className='text-gray-500 underline'>
                        Privacy Policy <br /> and Terms of Use.
                    </span>
                </p>
            </div>

            {/* Sign In Button */}
            <div className='flex justify-center'>
                <button className='w-full max-w-md bg-black text-white py-3 rounded-md mt-6 mb-3'>
                    Sign In
                </button>
            </div>

            {/* Join Us Link */}
            <div className='flex justify-center items-center pb-5'>
                <span className='text-gray-500'>
                    Not a member?
                    <Link href={'/join'}>
                        <span className='text-black underline pl-1'> Join Us.</span>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default SignIn
