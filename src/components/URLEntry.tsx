"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "~/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "~/components/ui/form"
import { Input } from "~/components/ui/input"

const FormSchema = z.object({
  url: z.string().url({
    message: "Please enter a valid URL",
  }),
})

export interface Props extends React.HTMLAttributes<HTMLFormElement> {
  setUUID: (uuid: string) => void;
}

export function URLEntry({ setUUID, ...props }: Props) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await fetch("/api", { method: "POST", body: JSON.stringify({ url: data.url }) }).then(res => res.json())
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                Enter a URL you want to lengthen
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default URLEntry
