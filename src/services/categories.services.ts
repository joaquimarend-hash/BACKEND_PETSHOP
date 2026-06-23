export class CategoriesService {
    async getAll() {
        const categories = [
            { id: "all", label: "Todos" },
            { id: "bed", label: "Camas" },
            { id: "food", label: "Alimentação" },
            { id: "transport", label: "Transporte" },
            { id: "toy", label: "Brinquedos" },
            { id: "hygiene", label: "Higiene" },
            { id: "medicine", label: "Medicamentos" },
            { id: "shampoo", label: "Shampoos" },
        ];
        return categories
    }
}