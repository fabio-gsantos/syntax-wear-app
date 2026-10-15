import futurista from '@/assets/images/products/futurista-grid.jpg'
import highlight from '@/assets/images/products/highlight-grid.jpg'
import modeloFeminino from '@/assets/images/products/modelo-feminino.jpg'
import moderno from '@/assets/images/products/moderno-grid.jpg'
import pretoBrancoAzul from '@/assets/images/products/preto-branco-azul-grid.jpg'
import roxoVerde from '@/assets/images/products/roxo-verde-grid.jpg'
import { Button } from '../Button'
import { Overlay } from '../Overlay'

export const Gallery = () => {
    return (
        <section className="container md:pb-10">
            <div className="gallery-grid grid">
                <div className="relative [grid-area:highlight] min-h-[460px] overflow-hidden rounded-[20px] md:min-h-0">
                    <img
                        src={highlight}
                        alt="Modelo masculino usando tênis SyntaxWear"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <Overlay title='Krypton One' subtitle='Estilo urbano com atitude' className='inset-0 justify-center'>
                        <Button variant='secondary'>Feminino</Button>
                        <Button variant='secondary'>Masculino</Button>
                    </Overlay>
                </div>
                <img
                    src={roxoVerde}
                    alt="Tênis roxo e verde"
                    className="h-[230px] min-h-0 w-full [grid-area:sneaker-purple] rounded-[20px] object-cover md:h-full"
                />
                <img
                    src={modeloFeminino}
                    alt="Modelo feminina usando tênis SyntaxWear"
                    className="h-full min-h-0 w-full [grid-area:model] rounded-[20px] object-cover"
                />
                <img
                    src={futurista}
                    alt="Tênis colorido de design futurista"
                    className="h-[165px] min-h-0 w-full [grid-area:sneaker-color] rounded-[20px] object-cover md:h-full"
                />
                <img
                    src={pretoBrancoAzul}
                    alt="Tênis preto, branco e azul"
                    className="h-[340px] min-h-0 w-full [grid-area:sneaker-white] rounded-[20px] object-cover md:h-full"
                />
                <img
                    src={moderno}
                    alt="Tênis cinza de design moderno"
                    className="h-[165px] min-h-0 w-full [grid-area:sneaker-silver] rounded-[20px] object-cover md:h-full"
                />
            </div>
        </section>
    )
}
