import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Plus } from "lucide-react";

const foodItemSchema = z.object({
  name: z.string().min(2, "Food name must be at least 2 characters"),
  quantity: z.string().min(1, "Quantity is required"),
  rasa: z.string().min(1, "Rasa is required"),
  virya: z.enum(["Ushna", "Shita"]),
  dosha: z.string().min(1, "Dosha effect is required"),
});

type FoodItemData = z.infer<typeof foodItemSchema>;

interface AddFoodItemFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (foodItem: FoodItemData) => void;
  mealTime: string;
}

export function AddFoodItemForm({ isOpen, onClose, onAdd, mealTime }: AddFoodItemFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FoodItemData>({
    resolver: zodResolver(foodItemSchema),
    defaultValues: {
      name: "",
      quantity: "",
      rasa: "",
      virya: "Shita",
      dosha: "",
    },
  });

  const onSubmit = async (data: FoodItemData) => {
    setIsSubmitting(true);
    try {
      onAdd(data);
      form.reset();
      onClose();
    } catch (error) {
      console.error("Error adding food item:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add Food Item
          </DialogTitle>
          <DialogDescription>
            Add a new food item to {mealTime}
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Food Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Brown Rice" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 1 cup (180g)" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="rasa"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rasa (Taste)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select rasa" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Madhura">Madhura (Sweet)</SelectItem>
                      <SelectItem value="Amla">Amla (Sour)</SelectItem>
                      <SelectItem value="Lavana">Lavana (Salty)</SelectItem>
                      <SelectItem value="Katu">Katu (Pungent)</SelectItem>
                      <SelectItem value="Tikta">Tikta (Bitter)</SelectItem>
                      <SelectItem value="Kashaya">Kashaya (Astringent)</SelectItem>
                      <SelectItem value="Madhura, Tikta">Madhura, Tikta</SelectItem>
                      <SelectItem value="Madhura, Kashaya">Madhura, Kashaya</SelectItem>
                      <SelectItem value="Amla, Madhura">Amla, Madhura</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="virya"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Virya (Potency)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select virya" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Shita">Shita (Cooling)</SelectItem>
                      <SelectItem value="Ushna">Ushna (Heating)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="dosha"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dosha Effect</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select dosha effect" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Pacifies Vata">Pacifies Vata</SelectItem>
                      <SelectItem value="Pacifies Pitta">Pacifies Pitta</SelectItem>
                      <SelectItem value="Pacifies Kapha">Pacifies Kapha</SelectItem>
                      <SelectItem value="Pacifies Pitta-Kapha">Pacifies Pitta-Kapha</SelectItem>
                      <SelectItem value="Pacifies Vata-Pitta">Pacifies Vata-Pitta</SelectItem>
                      <SelectItem value="Pacifies Vata-Kapha">Pacifies Vata-Kapha</SelectItem>
                      <SelectItem value="Tridosha Balancing">Tridosha Balancing</SelectItem>
                      <SelectItem value="Balances Vata">Balances Vata</SelectItem>
                      <SelectItem value="Balances Pitta">Balances Pitta</SelectItem>
                      <SelectItem value="Balances Kapha">Balances Kapha</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Adding..." : "Add Food Item"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}