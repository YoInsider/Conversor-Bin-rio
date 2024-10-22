function Calculador() {
    return (
        <div className="container bg-black">
            <h1 className="text-white">Conversor de Binario</h1>
            <div className="pesquisa">
                <input type="number" placeholder="Digite o número a ser convertido"/>
            </div>
            <div className="botoes padding">
                <button className="btn btn-info mx-3">Para Binario</button>
                <button className=" btn btn-info">Para Decimal</button>
            </div>
            <div className="display">
                <p>474756</p>
            </div>
        </div>
    );
}

export default Calculador;