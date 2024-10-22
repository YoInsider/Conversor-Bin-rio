function Calculador() {
    return (
        <div className="container border-0 rounded-3">
            <h1 className="text-white">Conversor de Binario</h1>
            <div className="pesquisa">
                <input type="number" placeholder="Digite o número a ser convertido" className="border rounded w-100"/>
            </div>
            <div className="botoes pt-5">
                <button className="btn btn-info me-4 fw-semibold">Para Binario</button>
                <button className=" btn btn-info fw-semibold">Para Decimal</button>
            </div>
            <div className="display text-black bg-white mt-5 border rounded">
                <p>474756</p>
            </div>
        </div>
    );
}

export default Calculador;