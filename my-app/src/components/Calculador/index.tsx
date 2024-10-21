function Calculador() {
    return (
        <div className="container d-flex justify-content-center align-items-center">
            <h1 className="">Conversor de Binario</h1>
            <div className="pesquisa">
                <input type="number" placeholder="Digite o número a ser convertido"/>
            </div>
            <div className="botoes">
                <button>Para Binario</button>
                <button className="">Para Decimal</button>
            </div>
            <div className="display">
                <p>474756</p>
            </div>
        </div>
    );
}

export default Calculador;