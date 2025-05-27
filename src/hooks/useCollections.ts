import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

export interface Collection {
  id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export const useCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('collections')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Erro ao buscar coleções:', error);
        throw error;
      }
      
      return data as Collection[];
    }
  });
};

export const useCollectionWithArtworks = (collectionName: string) => {
  return useQuery({
    queryKey: ['collection-artworks', collectionName],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('artworks')
        .select(`
          *,
          collections (
            name,
            description
          )
        `)
        .eq('collections.name', collectionName);
      
      if (error) {
        console.error('Erro ao buscar obras da coleção:', error);
        throw error;
      }
      
      return data;
    },
    enabled: !!collectionName
  });
};

export const useCreateCollection = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async (collection: Omit<Collection, 'id' | 'created_at' | 'updated_at'>) => {
      const { data, error } = await supabase
        .from('collections')
        .insert(collection)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] });
      toast({
        title: "Coleção criada com sucesso!",
        description: "A nova coleção foi adicionada.",
      });
    },
    onError: (error) => {
      console.error('Erro ao criar coleção:', error);
      toast({
        title: "Erro ao criar coleção",
        description: "Ocorreu um erro ao adicionar a coleção.",
        variant: "destructive"
      });
    }
  });
};

export const useUpdateCollection = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  return useMutation({
    mutationFn: async ({ id, ...collection }: Partial<Collection> & { id: string }) => {
      const { data, error } = await supabase
        .from('collections')
        .update(collection)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['collections'] });
      toast({
        title: "Coleção atualizada com sucesso!",
        description: "As alterações foram salvas.",
      });
    },
    onError: (error) => {
      console.error('Erro ao atualizar coleção:', error);
      toast({
        title: "Erro ao atualizar coleção",
        description: "Ocorreu um erro ao salvar as alterações.",
        variant: "destructive"
      });
    }
  });
};