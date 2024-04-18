import { ButtonDark } from "../../components/Elements"
import { Link } from "react-router-dom"

export const SaleBanner = () => {
  return (
    <div className='min-h-[532px] flex flex-col sm:flex-row bg-gray-200'>
      <div className="w-full sm:w-1/2 ">
        <img src={"https://images.pexels.com/photos/276651/pexels-photo-276651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="sales" className='h-[367px] sm:h-[532px] ' />

      </div>

      {/* content */}
      <div className="w-full sm:w-1/2 flex items-center  px-8 sm:px-0 sm:pl-16 py-14 sm:py-0">
        <div className="w-[452px] flex flex-col items-start gap-4">
          <p className="text-hairline1 font-bold uppercase text-blue">Export discounts available</p>
          <p className="text-body1Reg">Export your products and watch your business soar to new heights</p>
          <Link to="/contact">
            <ButtonDark text='Export now' />
          </Link>
        </div>
      </div>
    </div>
  )
}
