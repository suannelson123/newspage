import { debunks } from "../constant/debunk"
import { facts } from "../constant/facts"
import { imageWebMobile, imageWebDesktop } from "../constant/images"
// I JUST WANT TO REMIND MYSELF AND WHOEVER SEE THIS PROJECT THIS IS CODED BY ME 
// I JUST MIGHT CONFUSE MYSELF OR OTHERS BECAUSE OF THE JSX FILE NAME IS "SAMPLE"
// IVE SEEN A PROBLEM ON MY DESIGN CAUSE I USED THE WRONG IMAGE AND I KINDA LAZY TO REDO IT SO JUST DID THIS INSTEAD RENAMED IT TO SAMPLE
const Sample = () => {
    return (
        <section className="max-w-[1440px] w-full px-[1.2rem] sm:px-[2rem] lg:px-[4rem] mt-[69px] sm:mt-[94px] md:mt-[110px] lg:mt-[100px]">

            <div className="main__div">


                <div className="first__grid_item  md:pr-[2rem] span_item">
                    <div>
                        <img className="lg:hidden" src={imageWebMobile} alt="" />
                        <img className="hidden lg:block" src={imageWebDesktop} alt="" />
                    </div>
                    <div className="lg:flex lg:gap-5 ">
                        <h1 className="text-color-darkBlue font-InterBold text-[2.5rem] leading-[3rem] my-[1.2rem] lg:flex-1 lg:my-0 lg:mt-[1.2rem] lg:text-[3rem] lg:font-InterExtraBold lg:leading-[3.5rem]">The Bright <br /> Future of Web 3.0</h1>
                        <div className="lg:flex-1 lg:mt-[1.2rem] lg:flex flex-col justify-between items-start">
                            <p className="text-color-darkGrayishBlue leading-6">  We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people.
                                But is it really fulfilling its promise?</p>
                            <button className="bg-color-softRed px-[2rem] py-[0.8rem] font-InterBold tracking-[5px] text-color-offWhite mt-[1.5rem] lg:mt-[1.5rem] hover:bg-color-darkBlue duration-300">READ MORE</button>
                        </div>
                    </div>
                </div>

                <div className="second__grid_item bg-color-darkBlue text-color-offWhite p-[1.2rem] mt-[4rem] md:mt-0 span_item ">
                    {
                        facts.map((fact, index) => {
                            return (
                                <div key={index} className="border-b border-color-darkGrayishBlue pb-[2rem] no_border last-of-type:border-b-0 last-of-type:pb-0">

                                    <h2 className="text-color-softOrange text-[2.5rem] mb-[3rem]">{fact.header}</h2>
                                    <div className="flex flex-col gap-2.5">
                                        <h3 className="text-[1.25rem] font-InterBold hover:text-color-softOrange hover:cursor-pointer duration-200">{fact.title}</h3>
                                        <p className="text-color-grayishBlue">{fact.paragraph}</p>
                                    </div>

                                </div>
                            )
                        })
                    }
                </div>

                <div className="third__grid_item   span_item">
                    <div className=" mt-[4rem] py-[1rem] md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-5 lg:gap-0">
                        {
                            debunks.map((item) => {
                                return (
                                    <div key={item.id} className="flex gap-5 mb-[2rem] md:mb-0 span_self">
                                        <div className="flex-1 lg:flex-none">
                                            <img className="object-cover w-full max-h-[150px]" src={item.imgUrl} alt="" />
                                        </div>

                                        <div className="flex-1 basis-[30%] flex flex-col gap-3 lg:p-[0.5rem]">
                                            <h4 className="font-InterBold text-color-grayishBlue text-[2rem]">{item.headerNum}</h4>
                                            <h5 className="font-InterBold text-color-darkBlue hover:text-color-softRed hover:cursor-pointer duration-300 lg:font-InterExtraBold">{item.title}</h5>
                                            <p className="text-color-darkGrayishBlue text-[15px] text-pretty">{item.desc}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>



            </div>


        </section>
    )
}

export default Sample
