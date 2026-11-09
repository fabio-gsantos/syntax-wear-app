import { useState } from "react";
import { useCEPForm } from "./cep-form.schema";
import type { Address } from "../../interfaces/address";
import { formatCurrency } from "../../helpers/currency-format";

const SHIPPING_BY_REGION: Record<string, number> = {
    "Norte": 39.90,
    "Nordeste": 29.90,
    "Centro-Oeste": 24.90,
    "Sudeste": 14.90,
    "Sul": 19.90,
}

export const CEPForm = () => {
    const { register, handleSubmit, errors, isSubmitting } = useCEPForm();
    const [address, setAddress] = useState<Address | null>(null)
    const [addressError, setAddressError] = useState<string | null>(null)

    const onSubmit = async ({ cep }: { cep: string }) => {

        setAddress(null);
        setAddressError(null);

        try {
            const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const data = await response.json();

            if (data.erro) {
                setAddressError('CEP não encontrado.')
                return;
            }

            const shippingCost = SHIPPING_BY_REGION[data.regiao];

            if (!shippingCost) {
                setAddressError('Região não suportada para entrega.')
                return;
            }

            console.log(data.regiao);
            console.log(shippingCost);

            setAddress({ ...data, shippingCost: shippingCost })
        } catch {
            setAddressError('Ocorreu um erro ao buscar o CEP. Tente novamente mais tarde.')
        }
    };

    return (
        <>
            <form className="flex gap-3" onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="flex flex-col">
                    <input
                        type="text"
                        placeholder="Insira seu CEP"
                        className={`border rounded-md p-3 flex-1 min-w-0 focus:outline-none focus:ring-2 ${errors.cep
                            ? "border-error focus:ring-red-400"
                            : "border-border focus:ring-accent"
                            }`}
                        {...register("cep")}
                    />
                </div >

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white py-3 px-6 rounded-md cursor-pointer hover:bg-gray-800 transition shrink-0 disabled:opacity-50"
                >
                    {isSubmitting ? "Calculando..." : "Calcular"}
                </button>
            </form>
            {
                errors.cep && (
                    <p className="text-xs text-error mt-1">{errors.cep.message}</p>
                )
            }

            {addressError && (

                <p className="mt-1 text-xs text-error">{addressError}</p>

            )}

            {
                address && (
                    <div className="mt-4 text-sm">
                        <p><strong>Região: </strong>{address.regiao}</p>
                        <p><strong>Custo de Entrega: </strong>{formatCurrency(address.shippingCost)}</p>
                    </div>
                )
            }


        </>
    );
};
