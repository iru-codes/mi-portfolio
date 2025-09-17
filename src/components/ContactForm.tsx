interface ContactFormProps {
  submitted: boolean;
  setSubmitted: (s: boolean) => void;
}

export function ContactForm({ submitted, setSubmitted }: ContactFormProps) {

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const pairs: [string, string][] = [];
    data.forEach((value, key) => {
      pairs.push([key, String(value)]);
    });
    const encoded = new URLSearchParams(pairs).toString();

    fetch("/", {
      method: "POST",
      body: encoded,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="py-16">
      <h2 className="text-6xl font-bold text-center mb-10 dongle-regular">
        Contacto
      </h2>
      {submitted ? (
        <p className="text-center text-accent text-lg">
          ¡Gracias por tu mensaje!
        </p>
      ) : (
        <form
          name="contacto"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto space-y-4 didact-gothic-regular"
        >
          <input 
          type="hidden" 
          name="form-name" 
          value="contacto" />

          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <input required 
          type="text" 
          name="name" 
          placeholder="Nombre" />

          <input required 
          type="email" 
          name="email" 
          placeholder="Correo electrónico" />

          <textarea required 
          name="message" 
          placeholder="Tu mensaje" 
          rows={4} />

          <button type="submit">Enviar mensaje</button>
        </form>
      )}
    </section>
  );
}