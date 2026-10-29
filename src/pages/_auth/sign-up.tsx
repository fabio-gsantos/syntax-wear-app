import { createFileRoute, Link } from '@tanstack/react-router'
import { RegisterForm } from '../../components/RegisterForm'
import { Logo } from '../../components/Logo'
import { Separator } from '../../components/Separator'
import GoogleIcon from '@/assets/images/icons/google-icon.png'

export const Route = createFileRoute('/_auth/sign-up')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='min-h-screen w-full flex justify-center items-center bg-[#f5f5f5] p-5'>
      <div className='w-[450px] bg-white rounded-2xl p-5 flex flex-col shadow-md'>
        <Logo />
        <RegisterForm />
        <Separator />

        <button className='w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md hover:bg-gray-50 trasition p-3 cursor-pointer'>
          <img src={GoogleIcon} alt="Ícone do Google" className='w-5 h-5' />
          <span className='text-sm font-medium text-black'>Continuar com o Google</span>
        </button>

        <p className='text-sm text-gray-600 mt-4 text-center'>
          Já tem uma conta? {""}

          <Link to="/sign-in" className='text-[#5433EB] hover:underline'>
            Entrar
          </Link>
        </p>
      </div>
    </section>

  )
}
