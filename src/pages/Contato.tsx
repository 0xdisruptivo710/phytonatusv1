import { useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Send, ExternalLink } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AnimatedHoneycomb } from "@/components/effects/AnimatedHoneycomb"
import { ParticleField } from "@/components/effects/ParticleField"
import { fadeUp, pageTransition } from "@/lib/animations"
import { CONTACT_DESTINATIONS, LOJA_URL } from "@/lib/constants"

const contactSchema = z.object({
  destino: z.enum(["comercial", "compras", "rh"], {
    message: "Selecione o destino da mensagem",
  }),
  nome: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  contato: z
    .string()
    .min(1, "Informe seu e-mail ou telefone")
    .refine(
      (val) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phoneRegex = /^[\d\s()+-]{8,}$/
        return emailRegex.test(val) || phoneRegex.test(val)
      },
      { message: "Informe um e-mail ou telefone valido" }
    ),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contato() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      destino: undefined,
      nome: "",
      contato: "",
      mensagem: "",
    },
  })

  useEffect(() => {
    const dest = searchParams.get("dest")
    if (dest === "comercial" || dest === "compras" || dest === "rh") {
      setValue("destino", dest)
    }
  }, [searchParams, setValue])

  const onSubmit = (data: ContactFormData) => {
    // TODO: integrar com backend de e-mail (a definir)
    console.log("Form submitted:", data)
    toast.success("Mensagem enviada com sucesso!", {
      description: "Retornaremos o contato em breve.",
    })
    reset()
  }

  const selectedDestino = watch("destino")

  return (
    <motion.div {...pageTransition}>
      {/* Hero */}
      <section className="grain relative overflow-hidden bg-brand-dark py-24 md:py-36">
        <AnimatedHoneycomb id="contato-honeycomb" />
        <ParticleField count={20} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">
          <motion.div {...fadeUp}>
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-widest text-phyto-accent">
              Entre em contato
            </span>
            <h1 className="font-display text-6xl font-bold text-balance text-brand-cream md:text-7xl">
              Fale
              <br />
              <span className="text-gradient-green">Conosco</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-pretty text-brand-cream/60">
              Envie sua mensagem para o setor desejado. Retornaremos o mais breve possivel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-6">
          <motion.form
            {...fadeUp}
            onSubmit={handleSubmit(onSubmit)}
            className="relative overflow-hidden rounded-xl bg-white/80 backdrop-blur-xl shadow-lg shadow-brand-dark/5"
          >
            {/* Decorative left accent line */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-phyto-accent via-phyto-accent to-phyto-accent/20"
            />

            <div className="space-y-6 p-8 pl-10 md:p-10 md:pl-12">
              {/* Destino */}
              <div className="space-y-2">
                <Label
                  htmlFor="destino"
                  className="text-sm font-semibold uppercase tracking-wide text-brand-text"
                >
                  Falar com...
                </Label>
                <Select
                  value={selectedDestino}
                  onValueChange={(value) =>
                    setValue("destino", value as ContactFormData["destino"], {
                      shouldValidate: true,
                    })
                  }
                >
                  <SelectTrigger
                    id="destino"
                    aria-required
                    aria-invalid={!!errors.destino}
                    aria-describedby={errors.destino ? "destino-error" : undefined}
                  >
                    <SelectValue placeholder="Selecione o setor" />
                  </SelectTrigger>
                  <SelectContent>
                    {CONTACT_DESTINATIONS.map((dest) => (
                      <SelectItem key={dest.value} value={dest.value}>
                        {dest.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.destino && (
                  <p id="destino-error" role="alert" className="text-sm text-destructive">
                    {errors.destino.message}
                  </p>
                )}
              </div>

              {/* Nome */}
              <div className="space-y-2">
                <Label
                  htmlFor="nome"
                  className="text-sm font-semibold uppercase tracking-wide text-brand-text"
                >
                  Nome completo
                </Label>
                <Input
                  id="nome"
                  placeholder="Seu nome completo"
                  aria-required
                  aria-invalid={!!errors.nome}
                  aria-describedby={errors.nome ? "nome-error" : undefined}
                  {...register("nome")}
                />
                {errors.nome && (
                  <p id="nome-error" role="alert" className="text-sm text-destructive">
                    {errors.nome.message}
                  </p>
                )}
              </div>

              {/* Contato */}
              <div className="space-y-2">
                <Label
                  htmlFor="contato"
                  className="text-sm font-semibold uppercase tracking-wide text-brand-text"
                >
                  E-mail ou telefone
                </Label>
                <Input
                  id="contato"
                  placeholder="email@exemplo.com ou (11) 99999-9999"
                  aria-required
                  aria-invalid={!!errors.contato}
                  aria-describedby={errors.contato ? "contato-error" : undefined}
                  {...register("contato")}
                />
                {errors.contato && (
                  <p id="contato-error" role="alert" className="text-sm text-destructive">
                    {errors.contato.message}
                  </p>
                )}
              </div>

              {/* Mensagem */}
              <div className="space-y-2">
                <Label
                  htmlFor="mensagem"
                  className="text-sm font-semibold uppercase tracking-wide text-brand-text"
                >
                  Mensagem / Descricao
                </Label>
                <Textarea
                  id="mensagem"
                  placeholder="Descreva o motivo do contato..."
                  rows={5}
                  aria-required
                  aria-invalid={!!errors.mensagem}
                  aria-describedby={errors.mensagem ? "mensagem-error" : undefined}
                  {...register("mensagem")}
                />
                {errors.mensagem && (
                  <p id="mensagem-error" role="alert" className="text-sm text-destructive">
                    {errors.mensagem.message}
                  </p>
                )}
              </div>

              {/* Anexo */}
              <div className="space-y-2">
                <Label
                  htmlFor="anexo"
                  className="text-sm font-semibold uppercase tracking-wide text-brand-text"
                >
                  Anexo (opcional)
                </Label>
                <Input
                  id="anexo"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png,.docx"
                  aria-describedby="anexo-hint"
                  className="cursor-pointer file:mr-4 file:rounded-md file:border-0 file:bg-brand-bg file:px-4 file:py-2 file:text-sm file:font-medium file:text-brand-text"
                />
                <p id="anexo-hint" className="text-xs text-brand-muted">
                  PDF, JPG, PNG ou DOCX — max. 10MB
                </p>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="shimmer w-full gap-2 bg-phyto-accent hover:bg-phyto-accent/90"
              >
                <Send className="size-4" />
                Enviar mensagem
              </Button>
            </div>
          </motion.form>

          {/* Loja link */}
          <motion.div {...fadeUp} className="mt-10 text-center">
            <p className="text-sm text-pretty text-brand-muted">
              Para compras online, acesse{" "}
              <a
                href={LOJA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-phyto-accent hover:underline"
              >
                nossa loja
                <ExternalLink className="size-3" />
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
