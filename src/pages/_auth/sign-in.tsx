import { createFileRoute, Link } from '@tanstack/react-router'
import { LoginForm } from '../../components/LoginForm'
import { Logo } from '../../components/Logo'
import GoogleIcon from '@/assets/images/icons/google-icon.png'
import { Separator } from '../../components/Separator'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='min-h-screen w-full flex justify-center items-center bg-[#f5f5f5] p-5'>
      <div className='w-[450px] bg-white rounded-[18px] p-10 shadow-md'>
        <div className='flex flex-col gap-4'>
          <Logo />

          <h2 className='text-black font-bold text-[21px] mb-2'>Entrar</h2>

          <p className='mb-1.5'>Escolha como você gostaria de fazer o login.</p>
          <button className='w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md hover:bg-gray-50 trasition p-3 cursor-pointer'>
            <img src={GoogleIcon} alt="Ícone do Google" className='w-5 h-5' />
            <span className='text-sm font-medium text-black'>Continuar com o Google</span>
          </button>
          <Separator />
          <LoginForm />

          <p>
            Ainda não possui conta? {""} 
            <Link to="/sign-up" className='text-[#5433EB] hover:underline'>
              Cadastra-se
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
