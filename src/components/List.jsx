import "./List.css";

export function List({ data }) {
    return (
        <ul>
            {data.map((item) => (
                <li key={item.id} className="item">
                    <span className="item-name">
                        {item.name} <span className="age">({item.age})</span>
                    </span>
                    <span className="item-tel">{item.tel}</span>
                    <span className="item-email">{item.email}</span>
                    {item.nip && (
                        <span className="item-nip">NIP: {item.nip}</span>
                    )}
                </li>
            ))}
        </ul>
    );
}
