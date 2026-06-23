export class AnimalsService {
    async getAll() {
        const animals = [
        { id: "all", label: "Todos" },
        { id: "dog", label: "Cachorros" },
        { id: "cat", label: "Gatos" },
    ];
        return animals
    }
}