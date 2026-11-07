import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

function validadeCEP(): RegExp {
    return /^\d{5}-?\d{3}$/;
}

export const cepFormSchema = z.object({
    cep: z
        .string()
        .nonempty("O CEP é obrigatório.")
        .regex(validadeCEP(), "Informe um CEP válido."),
});

export type CEPFormData = z.infer<typeof cepFormSchema>;

export const useCEPForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
        reset,
    } = useForm<CEPFormData>({
        resolver: zodResolver(cepFormSchema),
        mode: "onBlur",
        defaultValues: {
            cep: "",
        },
        criteriaMode: "all",
    });

    return {
        handleSubmit,
        register,
        errors,
        isSubmitting,
        setError,
        reset,
    };
};


