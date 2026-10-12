import tenisBranco from '@/assets/images/images-categories/casual.jpg'
import tenisPreto from '@/assets/images/images-categories/esportivo.jpg'
import tenisFuturista from '@/assets/images/images-categories/futurista.jpg'
import tenisModerno from '@/assets/images/images-categories/moderno.jpg'
import { Button } from '../Button'

const categories = [
    { name: "Casual", image: tenisBranco },
    { name: "Esportivo", image: tenisPreto },
    { name: "Futurista", image: tenisFuturista },
    { name: "Moderno", image: tenisModerno },
]

export const Categories = () => {
    return <section className='container flex gap-2.5 lg:grid lg:grid-cols-4 lg:gap-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory'>
        {categories.map((category, index) => (
            <div key={index} style={{ backgroundImage: `url(${category.image})` }} className='h-115 bg-cover bg-center rounded-[20px] relative flex items-center justify-center text-white shrink-0 w-[95%] md:w-1/2 lg:w-full'>
                <div className='absolute inset-0 bg-black/30 rounded-[20px] snap-center'></div>

                <div className='relative'>
                    <Button variant='secondary'>{category.name}</Button>
                </div>
            </div>
        ))}
    </section>

}