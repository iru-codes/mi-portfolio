interface ContactFormProps {
  submitted: boolean;
  setSubmitted: (s: boolean) => void;
}

export function ContactForm({ submitted, setSubmitted }: ContactFormProps) {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-6xl font-bold text-center mb-10 dongle-regular">Contacto</h2>
      {submitted ? (
        <p className="text-center text-accent text-lg">¡Gracias por tu mensaje!</p>
      ) : (
        <form
          name="contacto"
          method="POST"
          data-netlify="true"
          onSubmit={() => setSubmitted(true)}
          className="max-w-xl mx-auto space-y-4 didact-gothic-regular"
        >
          <input type="hidden" name="form-name" value="contacto" />
          <input
            required
            type="text"
            name="name"
            placeholder="Nombre"
            className="w-full px-4 py-3 rounded-xl border-3 border-accent-2 dark:border-primary bg-white dark:bg-background-dark text-sm"
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-3 rounded-xl border-3 border-accent-2 dark:border-primary bg-white dark:bg-background-dark text-sm"
          />
          <textarea
            required
            name="message"
            placeholder="Tu mensaje"
            rows={4}
            className="w-full px-4 py-3 rounded-xl border-3 border-accent-2 dark:border-primary bg-white dark:bg-background-dark text-sm"
          />
          <button
            type="submit"
            className="px-6 py-3 font-bold rounded-2xl bg-primary text-white hover:bg-deep-violet hover:text-accent-2 dark:hover:bg-background-light dark:hover:text-deep-violet"
          >
            Enviar mensaje
          </button>
        </form>
      )}
    </section>
  );
}