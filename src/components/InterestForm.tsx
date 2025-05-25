
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface Artwork {
  id: number;
  title: string;
  price: string;
}

interface InterestFormProps {
  artwork: Artwork;
  isOpen: boolean;
  onClose: () => void;
}

const InterestForm = ({ artwork, isOpen, onClose }: InterestFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      const { error } = await supabase
        .from('artwork_interests')
        .insert({
          artwork_id: artwork.id,
          artwork_title: artwork.title,
          artwork_price: artwork.price,
          customer_name: formData.name,
          customer_email: formData.email,
          customer_phone: formData.phone,
          message: formData.message || null
        });

      if (error) {
        console.error('Erro ao salvar interesse:', error);
        toast({
          title: "Erro ao enviar interesse",
          description: "Ocorreu um erro ao processar sua solicitação. Tente novamente.",
          variant: "destructive"
        });
        return;
      }

      console.log("Interesse enviado com sucesso:", {
        artwork: artwork,
        customer: formData,
        timestamp: new Date().toISOString()
      });

      toast({
        title: "Interesse enviado com sucesso!",
        description: "Em breve entraremos em contato para mais informações sobre a obra.",
      });
      
      setFormData({ name: "", email: "", phone: "", message: "" });
      onClose();
    } catch (error) {
      console.error('Erro inesperado:', error);
      toast({
        title: "Erro inesperado",
        description: "Ocorreu um erro inesperado. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-serif text-xl">Interesse na obra</DialogTitle>
          <DialogDescription>
            <strong>"{artwork.title}"</strong> - {artwork.price}
            <br />
            Preencha seus dados para manifestar interesse nesta obra.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1"
            />
          </div>

          <div>
            <Label htmlFor="phone">Telefone *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1"
              placeholder="(XX) XXXXX-XXXX"
            />
          </div>

          <div>
            <Label htmlFor="message">Mensagem (opcional)</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1"
              placeholder="Gostaria de saber mais sobre..."
              rows={3}
            />
          </div>

          <DialogFooter className="flex gap-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-art-primary hover:bg-art-primary/90"
            >
              {isSubmitting ? "Enviando..." : "Enviar interesse"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default InterestForm;
