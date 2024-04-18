import { CardCarrousel } from "./cards/CardCarrousel"
import { FC } from "react"

interface ICarrouselTagProp {
  tag: JSX.Element
}
export const ProductCarrousel: FC<ICarrouselTagProp> = ({tag}) => {
  return (
    <section className='h-[665px] pt-[48px] ml-8  sm:ml-40 flex flex-col gap-11 border-solid border-b-2 border-gray-600 '>

      <div className="flex justify-between items-end pr-40">
      <div className="text-h4 font-poppins">{tag}</div> 
      <div className="hidden sm:block">
      {/* <ButtonDark text="More Products"  /> */}
      </div>
      </div>

      {/* carousel */}
      <div className="h-[433px] flex gap-5 overflow-hidden">

        {/* card */}
       <CardCarrousel img={"https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} tag='Apple MacBook' price='299.00' country="Italy" slashP={400.00}  />
       <CardCarrousel img={"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} tag='Camera' price='123.99' country="Japan" slashP={0} />
       <CardCarrousel img={"https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} tag='Wrist Watch' price='245.00' country="Mexico" slashP={0}/>
       <CardCarrousel img={"https://images.pexels.com/photos/7428103/pexels-photo-7428103.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} tag='Conditioner' price='55.00' country="Columbia" slashP={0}/>
       </div>
      
    </section>
  )
}
