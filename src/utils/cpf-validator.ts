export function isValidCPF(value: string): boolean {
    const cpf = value.replace(/\D/g, "");

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        return false;
    }

    const calculateDigit = (base: string, factor: number): number => {
        let total = 0;

        for (const digit of base) {
            total += Number(digit) * factor--;
        }

        const remainder = (total * 10) % 11;

        return remainder === 10 ? 0 : remainder;
    };

    const firstDigit = calculateDigit(cpf.slice(0, 9), 10);

    if (firstDigit !== Number(cpf[9])) {
        return false;
    }

    const secondDigit = calculateDigit(cpf.slice(0, 10), 11);

    return secondDigit === Number(cpf[10]);
}