import "./Form.css";

export function Form({ onAddPerson }) {
    return (
        <form>
            <label htmlFor="name">Imię</label>
            <input />

            <label htmlFor="age">Wiek</label>
            <input type="number" />

            <label htmlFor="tel">Telefon</label>
            <input type="tel" />

            <label htmlFor="email">E-mail</label>
            <input type="email" />

            <label htmlFor="isInvoiceRequired">
                <input type="checkbox" />
                Faktura VAT
            </label>
            <input />

            <div className="footer">
                <button>Dodaj</button>
            </div>
        </form>
    );
}
