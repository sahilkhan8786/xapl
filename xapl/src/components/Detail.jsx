import { detailImage, left, right } from '../assets/image'
const commonHeadingClasses = 'text-textPrimary font-semibold text-xl'
export default function Detail() {
    return (
        <div className="font-poppins mt-2 lg:mt-8 text-xl">
            <div className="text-sm font-normal flex justify-center text-textLight">
                Home &gt;  Exercise &gt; Biceps &gt; Barbell Bicep Curl
            </div>
            <div className="text-center mb-8  flex flex-col justify-center items-center">
                <h1 className="text-4xl  mt-8 mb-4 text-textPrimary">Barbell Bicep Curl</h1>
                <p className="text-textSecondry max-w-[45rem] ">The barbell curl is a classic and effective bicep exercise that targets the muscles in the front of your upper arms, specifically the biceps brachii.</p>
            </div>


            <article className="flex gap-2 my-4 justify-center flex-col lg:flex-row">
                <div className='flex flex-col items-center gap-10 mt-12'>
                    <div className='relative '>

                        <h1 className={commonHeadingClasses}>Bicep Development</h1>
                        <img src={left} alt="" />
                        <p className='max-w-xs absolute top-8 text-sm'>he barbell bicep curl specifically targets  biceps brachii, contributing to their development and definition</p>
                    </div>
                    <div className='relative'>

                        <h1 className={commonHeadingClasses}>Strengthen Building</h1>
                        <img src={left} alt="" />
                        <p className='max-w-xs absolute top-8 text-sm'>The exercise allows for heavy resistance, promoting strength gains in the biceps and surrounding muscle groups</p>
                    </div>
                </div>
                <div className='flex items-center justify-center relative'>
                    <div className='bg-detailBG size-[300px] sm:size-[400px] rounded-full '></div>
                    <img src={detailImage} alt="" className='z-10 absolute bottom-0 ' />
                </div>
                <div className='flex flex-col items-center gap-10 mt-12'>
                    <div className='relative'>

                        <h1 className={`${commonHeadingClasses} text-right`}>Increased Muscle Engagement</h1>
                        <img src={right} alt="" />
                        <p className='max-w-xs absolute -right-5 top-10  text-sm'>By maintaining strict form and controlling the weight, you ensure that the biceps are doing the majority of the work, leading to better muscle engagement and growth.</p>
                    </div>
                    <div className='relative'>

                        <h1 className={`${commonHeadingClasses} text-right`}>Compound Movement</h1>
                        <img src={right} alt="" />
                        <p className='max-w-xs absolute -right-5 top-10 text-sm'>While primarily an isolation exercise for the biceps, the barbell curl involves other muscles to a lesser extent, such as the forearms, shoulders, and upper back. This makes it a compound movement that engages multiple muscle groups</p>
                    </div>
                </div>
            </article>

            <article className='max-w-2xl mx-auto py-4'>
                <h1 className={`${commonHeadingClasses} text-2xl mt-8`}>About the Exercise</h1>
                <p className='max-w-4xl text-sm pt-8'>The barbell curl is a classic and effective bicep exercise that targets the muscles in the front of your upper arms, specifically the biceps brachii. Barbell curls into your workout routine can help develop and strengthen your biceps, contributing to overall arm strength and aesthetics</p>

                <div className='my-4'>
                    <h1 className={`${commonHeadingClasses} text-2xl mt-8`} >Level for difficulty</h1>
                    <p className='max-w-4xl text-sm pt-2'>Beginner friendly  </p>
                </div>
                <div className='my-4'>
                    <h1 className={`${commonHeadingClasses} text-2xl mt-8`} >Number of set</h1>
                    <p className='max-w-4xl text-sm pt-2'>3</p>
                </div>
                <div className='my-4'>
                    <h1 className={`${commonHeadingClasses} text-2xl mt-8`} >Duration </h1>
                    <p className='max-w-4xl text-sm pt-2'>20  minutes</p>
                </div>
                <div className='my-4'>
                    <h1 className={`${commonHeadingClasses} text-2xl mt-8`} >Calories burn</h1>
                    <p className='max-w-4xl text-sm pt-2'>150 cal</p>
                </div>
                <div className='my-4'>
                    <h1 className={`${commonHeadingClasses} text-2xl mt-8`} >Equipment needed</h1>
                    <p className='max-w-4xl text-sm pt-2'>Barbell</p>
                </div>
                <div className='my-4'>
                    <h1 className={`${commonHeadingClasses} text-2xl mt-8`} >Instruction to perform</h1>
                    <div className='pl-4'>
                        <ul className='  pt-2 list-disc '>
                            <li className='text-sm'>Stand up straight with your feet shoulder-width apart</li>
                            <li className='text-sm'>Hold a barbell with a shoulder-width grip, palms facing forward (an underhand grip).</li>
                            <li className='text-sm'>Your hands should be positioned slightly wider than your shoulders.</li>
                            <li className='text-sm'>Keep your wrists straight and aligned with your forearms.</li>
                            <li className='text-sm'>Maintain a straight back, chest up, and shoulders back.</li>
                            <li className='text-sm'>While keeping your upper arms stationary, exhale and curl the barbell towards your shoulders by flexing your elbows.</li>
                            <li className='text-sm'>Focus on contracting your biceps throughout the movement.</li>
                            <li className='text-sm'>Inhale and slowly lower the barbell back to the starting position with controlled movement.</li>
                            <li className='text-sm'>Maintain tension on the biceps during the descent; do not let the weight drop.</li>
                            <li className='text-sm'>Repeat the movement for the desired number of repetitions.</li>
                            <li className='text-sm'>Exhale during the lifting (concentric) phase and inhale during the lowering (eccentric) phase.</li>
                        </ul>
                    </div>

                </div>
                <div className='my-4'>
                    <h1 className={`${commonHeadingClasses} text-2xl mt-8`} >Tips</h1>
                    <div className='pl-4'>
                        <ul className='  pt-2 list-disc '>
                            <li className='text-sm'>Avoid using momentum by keeping your body still. Focus on isolating the biceps.</li>
                            <li className='text-sm'>Use a weight that allows you to maintain proper form and control throughout the exercise</li>
                            <li className='text-sm'>Ensure a full range of motion, allowing your arms to fully extend at the bottom and flex at the top.</li>

                        </ul>
                    </div>

                </div>
            </article>
        </div>
    )
}
