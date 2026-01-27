"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  nombre: z
    .string()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede exceder 100 caracteres"),
  telefono: z
    .string()
    .min(10, "El teléfono debe tener al menos 10 dígitos")
    .max(15, "El teléfono no puede exceder 15 dígitos")
    .regex(/^[0-9]+$/, "El teléfono solo debe contener números"),
});

export type PrizeFormData = z.infer<typeof formSchema>;

interface PrizeFormProps {
  onSubmit: (data: PrizeFormData) => void;
  isLoading?: boolean;
}

export function PrizeForm({ onSubmit, isLoading }: PrizeFormProps) {
  const form = useForm<PrizeFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: "",
      telefono: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="nombre"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Nombre</FormLabel>
              <FormControl>
                <Input
                  placeholder="Tu nombre completo"
                  {...field}
                  disabled={isLoading}
                  className="h-12 text-lg bg-black/50 border-border/50 focus:border-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="telefono"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Teléfono</FormLabel>
              <FormControl>
                <Input
                  placeholder="10 dígitos"
                  type="tel"
                  {...field}
                  disabled={isLoading}
                  className="h-12 text-lg bg-black/50 border-border/50 focus:border-primary"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full h-14 text-xl font-headline tracking-wider bg-accent text-accent-foreground hover:bg-accent/90 box-glow-accent rounded-none transition-all duration-300"
        >
          {isLoading ? "Procesando..." : "¡Girar la Ruleta!"}
        </Button>
      </form>
    </Form>
  );
}
