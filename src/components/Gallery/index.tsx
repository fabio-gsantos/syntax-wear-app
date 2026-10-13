import futurista from '@/assets/images/products/futurista-grid.jpg'
import highlight from '@/assets/images/products/highlight-grid.jpg'
import modeloFeminino from '@/assets/images/products/modelo-feminino.jpg'
import moderno from '@/assets/images/products/moderno-grid.jpg'
import pretoBrancoAzul from '@/assets/images/products/preto-branco-azul-grid.jpg'
import roxoVerde from '@/assets/images/products/roxo-verde-grid.jpg'
import { Button } from '../Button'

export const Gallery = () => {
    return (
        <section className="container mx-auto max-w-[1920px] px-2.5 md:pb-10">
            <div className="gallery-grid grid">
                <div className="relative [grid-area:highlight] min-h-[460px] overflow-hidden rounded-[20px] md:min-h-0">
                    <img
                        src={highlight}
                        alt="Modelo masculino usando tênis SyntaxWear"
                        className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-4 text-center text-white">
                        <div className="flex w-full max-w-[336px] flex-col items-stretch gap-2.5">
                            <h2 className="text-xl font-medium leading-6 tracking-[0.08em]">Krypton One</h2>
                            <p className="text-2xl font-medium leading-8 tracking-[0.08em]">
                                Estilo urbano com atitude
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-2.5">
                            <Button variant='secondary'>
                                Feminino
                            </Button>
                            <Button variant='secondary'>
                                Masculino
                            </Button>
                        </div>
                    </div>
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
