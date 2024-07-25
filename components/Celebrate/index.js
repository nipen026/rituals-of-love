import Image from "next/image";

const Celebrate = () =>{
    return(
        <>
        <div className="container pb-[30px]">
            <div className="bg-contact">
                <div className="flex justify-center items-center flex-col h-full">
                    <div className="flex justify-center animate__rollIn animate__animated wow">
                        <Image src={'/assets/images/contact-flower.png'} width={100} height={100} alt="flowrr"/>
                    </div>
                    <div className="animate__lightSpeedInLeft animate__animated wow">
                        <h3 className="text-white text-[50px] font-bold text-center my-3">Lets Celebrate Your Love</h3>
                    </div>
                    <div className="text-center wow animate__jackInTheBox animate__animated" >
                        <button style={{transition:'all 0.5s'}} className="text-[#002642] hover:bg-[#002642] hover:text-white w-[170px] font-semibold h-[60px] bg-[white] ">Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Celebrate; 