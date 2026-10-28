import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from '../../components/LoginForm'

export const Route = createFileRoute('/_auth/sign-in')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section>
      <LoginForm />
    </section>
  )
}
