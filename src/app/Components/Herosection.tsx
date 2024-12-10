import Image from "next/image";
const Herosection = () => {
    return(
        <div className="relative w-full h-[812.53]">
        
        <img 
          src="./herosection.png" 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        
        
        <div className="absolute bottom-4 right-4 bg-[#FFF3E3] p-4 rounded-lg shadow-lg mb-4 mr-4 h-[443px] w-[643px]">
          <h6 className="text-lg font-bold pt-5 pl-5 ">New Arrival</h6>
          <ul className="text-7xl text-[#B88E2F] font-bold pl-5 pt-5">
            <li>Discover Our</li> 
            <li>New Collection</li>
            </ul>
            <p className="font-semibold pt-10 pl-5">Lorem ipsum dolor sit amet,consectetur adicipiscing elit.Ut
                elit tellus , luctus nec ullamcoper mattis.
            </p>
            <button className="ml-5 mt-5 py-5 px-10  rounded-lg bg-[#B88E2F] text-white font-semibold">BUY NOW</button>
        </div>
      </div>
    );
  }


      
    

 
        // <div>
        //    <div className="grid grid-cols-1">
            
           
          
        //      <img src="herosection.png" alt="Furniture " className="w-full h-[812.53]" />
        //      hello
        //       <div className=" h-50 w-5/12 h-[443] bg-[#FFF3E3] flex">
        //    </div>
        //    </div>

           
        // </div>
//     )
// }

export default Herosection;