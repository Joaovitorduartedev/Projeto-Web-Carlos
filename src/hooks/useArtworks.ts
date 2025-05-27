import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Artwork {
  id: number;
  title: string;
  image_url: string;
  technique: string;
  dimensions: string;
  year: number;
  description: string;
  price: string;
  sold: boolean;
  collection_id: string | null;
  created_at: string;
  updated_at: string;
  collections?: {
    name: string;
  };
}

export const useArtworks = () => {
  return useQuery({
    queryKey: ['artworks'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('artworks')
        .select(`
          *,
          collections (
            name
          )
        `)
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Erro ao buscar obras:', error);
        throw error;
      }
      
      return data as Artwork[];
    }
  });
};

export const useCreateArtwork = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (artwork: Omit<Artwork, 'id' | 'created_at' | 'updated_at' | 'collections'>) => {
      const { data, error } = await supabase
        .from('artworks')
        .insert(artwork)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['artworks'] });
      toast({
        title: "Obra criada com sucesso!",
        description: "A nova obra foi adicionada à galeria.",
      });
    },
    onError: (error) => {
      console.error('Erro ao criar obra:', error);
      toast({
        title: "Erro ao criar obra",
        description: "Ocorreu um erro ao adicionar a obra.",
        variant: "destructive"
      });
    }
  });
};

export const useUpdateArtwork = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, ...artwork }: Partial<Artwork> & { id: number }) => {
      const { data, error } = await supabase
        .from('artworks')
        .update(artwork)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['artworks'] });
      toast({
        title: "Obra atualizada com sucesso!",
        description: "As alterações foram salvas.",
      });
    },
    onError: (error) => {
      console.error('Erro ao atualizar obra:', error);
      toast({
        title: "Erro ao atualizar obra",
        description: "Ocorreu um erro ao salvar as alterações.",
        variant: "destructive"
      });
    }
  });
};

export const useDeleteArtwork = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (id: number) => {
      const { error } = await supabase
        .from('artworks')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['artworks'] });
      toast({
        title: "Obra removida com sucesso!",
        description: "A obra foi removida da galeria.",
      });
    },
    onError: (error) => {
      console.error('Erro ao remover obra:', error);
      toast({
        title: "Erro ao remover obra",
        description: "Ocorreu um erro ao remover a obra.",
        variant: "destructive"
      });
    }
  });
};
