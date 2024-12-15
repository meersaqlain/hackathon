
const Herosection = () => {
    return(
        <div className="relative lg:w-full lg:h-[716.83px] w-[425px]">
        
        <img 
          src="./herosection.png" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        
        
        <div className="lg:absolute bottom-4 right-4 bg-[#FFF3E3] lg:p-4 rounded-lg shadow-lg lg:mb-4 lg:mr-4 lg:h-[443px] lg:w-[643px]  w-[425px] mr-20  ">
          <h6 className="text-lg font-bold lg:pt-5 pl-5 ">New Arrival</h6>
          <ul className="lg:text-7xl text-[#B88E2F] font-bold pl-5 lg:pt-5 text-2xl">
            <li>Discover Our</li> 
            <li>New Collection</li>
            </ul>
            <p className="font-semibold pt-10 pl-5 ">Lorem ipsum dolor sit amet,consectetur adicipiscing elit.Ut
                elit tellus , luctus nec ullamcoper mattis.
            </p>
            <button className="ml-5 mt-5 py-5 px-10  rounded-lg bg-[#B88E2F] text-white font-semibold">BUY NOW</button>
        </div>
      </div>
    );
  }


      
    

 
 

export default Herosection;