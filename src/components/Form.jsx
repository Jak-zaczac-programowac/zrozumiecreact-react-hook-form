import "./Form.css";

export function Form({ onAddPerson }) {
    return (
        <form>
            <span>Dodaj osobę</span>
            <div className="field">
                <label htmlFor="name">Imię</label>
            </div>
            <div className="field">
                <label htmlFor="age">Wiek</label>
                <input type="number" />
            </div>
            <div className="field">
                <label htmlFor="age">Telefon</label>
                <input type="tel" />
            </div>
            <div className="field">
                <label htmlFor="age">E-mail</label>
                <input type="email" />
            </div>
            <div className="field">
                <div>
                    <input type="checkbox" />
                    <label htmlFor="hasInvoice">Faktura VAT</label>
                </div>
                <input />
            </div>
            <button>Dodaj</button>
        </form>
    );
}
