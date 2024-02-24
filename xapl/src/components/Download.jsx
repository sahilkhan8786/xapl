import { bgDownload, ex1, ex2, ex3, phone1, phone2 } from "../assets/image"
export default function Download() {
    return (
        <div className="  w-full relative font-poppins">
            <div className=" max-w-[1440px] mx-auto ">
                <div className="flex flex-col-reverse md:block ">

                    <div className="flex z-10 justify-end  sm:h-full gap-3 flex-col sm:flex-row">
                        <img src={phone1} alt="" className="sm:pb-12 z-20" />
                        <img src={phone2} alt="" className="sm:pt-12 z-20" />
                    </div>
                    <div className="md:absolute md:top-0 md:z-10">
                        <img src={bgDownload} alt="" />
                    </div>
                </div>

                <div className="max-w-[1024px]  mx-auto my-4">


                    <h1 className="text-4xl  mt-8 mb-4  text-textPrimary text-center ">Elevate Your Fitness: The AI Workout Plan – Precision, Progression, Perfection</h1>
                    <p className=' mx-auto mb-12 pb-12 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum augue. Integer congue, libero nec congue fermentum, neque turpis eleifend libero, sit amet dictum dolor felis quis quam. Sed tincidunt </p>



                    <h1 className="text-2xl  mt-8 mb-4  mx-auto text-textPrimary text-center ">
                        Discover the other exercise at FitSnap
                    </h1>

                    <div className="flex flex-col items-center md:flex-row ">
                        <article className="max-w-xs flex flex-col gap-3 items-center">
                            <img src={ex1} alt="" />
                            <h1 className="text-primary font-bold">Chest press</h1>
                            <p className="text-md text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum</p>
                            <span className="underline">Read more &gt;</span>
                        </article>
                        <article className="max-w-xs flex flex-col gap-3 items-center">
                            <img src={ex2} alt="" />
                            <h1 className="text-primary font-bold">Straight leg deadlift</h1>
                            <p className="text-md text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum</p>
                            <span className="underline">Read more &gt;</span>
                        </article>
                        <article className="max-w-xs flex flex-col gap-3 items-center">
                            <img src={ex3} alt="" />
                            <h1 className="text-primary font-bold">Crunches</h1>
                            <p className="text-md text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. In hac habitasse platea dictumst. Vivamus eget fermentum</p>
                            <span className="underline">Read more &gt;</span>
                        </article>
                    </div>
                </div>
            </div>

        </div >

    )
}
