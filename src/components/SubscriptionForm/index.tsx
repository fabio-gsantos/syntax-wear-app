export const SubscriptionForm = () => {
  return (
    <form className="flex flex-col">
      <label htmlFor="newsletter">Inscreva-se em nosso e-mail</label>
      <input
        type="email"
        name="newsletter"
        id="newsletter"
        placeholder="email@email.com"
        className="text-black rounded-[30px] bg-white py-3 px-5 placeholder-border-alt"
      />
    </form>
  );
};
