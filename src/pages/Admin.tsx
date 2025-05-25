
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface ArtworkInterest {
  id: string;
  artwork_id: number;
  artwork_title: string;
  artwork_price: string;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  message: string | null;
  status: string;
  created_at: string;
}

const Admin = () => {
  const [interests, setInterests] = useState<ArtworkInterest[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchInterests();
  }, []);

  const fetchInterests = async () => {
    try {
      const { data, error } = await supabase
        .from('artwork_interests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Erro ao buscar interesses:', error);
        toast({
          title: "Erro ao carregar dados",
          description: "Não foi possível carregar os interesses.",
          variant: "destructive"
        });
        return;
      }

      setInterests(data || []);
    } catch (error) {
      console.error('Erro inesperado:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('artwork_interests')
        .update({ status: newStatus })
        .eq('id', id);

      if (error) {
        console.error('Erro ao atualizar status:', error);
        toast({
          title: "Erro ao atualizar",
          description: "Não foi possível atualizar o status.",
          variant: "destructive"
        });
        return;
      }

      setInterests(prev => 
        prev.map(interest => 
          interest.id === id ? { ...interest, status: newStatus } : interest
        )
      );

      toast({
        title: "Status atualizado",
        description: "O status foi atualizado com sucesso.",
      });
    } catch (error) {
      console.error('Erro inesperado:', error);
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'pending': return 'default';
      case 'contacted': return 'secondary';
      case 'completed': return 'default';
      case 'cancelled': return 'destructive';
      default: return 'default';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending': return 'Pendente';
      case 'contacted': return 'Contatado';
      case 'completed': return 'Concluído';
      case 'cancelled': return 'Cancelado';
      default: return status;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-gray-50 flex items-center justify-center">
        <p className="text-lg text-warm-gray-600">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-8">
          <h1 className="font-serif text-3xl font-bold text-warm-gray-900 mb-2">
            Painel Administrativo
          </h1>
          <p className="text-warm-gray-600">
            Gerencie os interesses manifestados nas obras de arte.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-warm-gray-200 overflow-hidden">
          <div className="p-6 border-b border-warm-gray-200">
            <h2 className="font-serif text-xl font-semibold text-warm-gray-900">
              Interesses Recebidos ({interests.length})
            </h2>
          </div>

          {interests.length === 0 ? (
            <div className="p-12 text-center">
              <p className="text-warm-gray-500">Nenhum interesse manifestado ainda.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Data</TableHead>
                    <TableHead>Cliente</TableHead>
                    <TableHead>Contato</TableHead>
                    <TableHead>Obra</TableHead>
                    <TableHead>Preço</TableHead>
                    <TableHead>Mensagem</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {interests.map((interest) => (
                    <TableRow key={interest.id}>
                      <TableCell>
                        {new Date(interest.created_at).toLocaleDateString('pt-BR')}
                      </TableCell>
                      <TableCell className="font-medium">
                        {interest.customer_name}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{interest.customer_email}</div>
                          <div className="text-warm-gray-500">{interest.customer_phone}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{interest.artwork_title}</div>
                        <div className="text-sm text-warm-gray-500">ID: {interest.artwork_id}</div>
                      </TableCell>
                      <TableCell className="font-medium text-art-primary">
                        {interest.artwork_price}
                      </TableCell>
                      <TableCell>
                        {interest.message ? (
                          <div className="max-w-xs truncate" title={interest.message}>
                            {interest.message}
                          </div>
                        ) : (
                          <span className="text-warm-gray-400">-</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant={getStatusBadgeColor(interest.status)}>
                          {getStatusLabel(interest.status)}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Select
                          value={interest.status}
                          onValueChange={(value) => updateStatus(interest.id, value)}
                        >
                          <SelectTrigger className="w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pending">Pendente</SelectItem>
                            <SelectItem value="contacted">Contatado</SelectItem>
                            <SelectItem value="completed">Concluído</SelectItem>
                            <SelectItem value="cancelled">Cancelado</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
