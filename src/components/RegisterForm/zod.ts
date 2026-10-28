import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod'
import { isValidCPF } from '../../utils/cpf-validator';
import { isValidBirthDate } from '../../utils/birthDate-validator';

export const registerUserFormSchema = z
    .object({
        email: z.email("Informe um e-mail válido.").nonempty("O e-mail é obrigatório."),

        password: z
            .string()
            .min(1, "A senha é obrigatória.")
            .min(8, "A senha deve ter pelo menos 8 caracteres."),

        confirmPassword: z
            .string()
            .nonempty("A confirmação de senha é obrigatória."),

        cpf: z
            .string()
            .min(1, "O CPF é obrigatório.")
            .refine(isValidCPF, "Informe um CPF válido."),

        birthDate: z
            .string()
            .min(1, "A data de nascimento é obrigatória.")
            .refine(isValidBirthDate, "Informe uma data de nascimento válida."),

        cellphone: z
            .string()
            .nonempty("Telefone Obrigatório."),

        firstName: z
            .string()
            .trim()
            .nonempty("O primeiro nome é obrigatório."),

        lastName: z
            .string()
            .trim()
            .nonempty("O último nome é obrigatório."),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "As senhas não coincidem.",
        path: ["confirmPassword"],
    });

export type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerUserFormSchema),
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
            cpf: "",
            birthDate: "",
            firstName: "",
            lastName: "",
        },
        criteriaMode: "all",
    });

    return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        setError,
        reset
    }
}
